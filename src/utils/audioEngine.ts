// Web Audio API and Speech Synthesis helper for immersive reading

class SoundEngine {
  private ctx: AudioContext | null = null;
  private ambientSource: AudioNode | null = null;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying: boolean = false;
  private currentAmbientType: string = 'none';

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Realistic paper turn sound synthesized purely with Web Audio filters
  playPageFlip() {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.18; // 180ms flip
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);

      // Generate brown/pinkish textured noise for paper friction
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(1800, now + 0.08);
      filter.frequency.exponentialRampToValueAtTime(400, now + 0.18);
      filter.Q.setValueAtTime(2.0, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.18, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 0.18);
    } catch {
      // Ignore audio failure if user has not interacted with DOM yet
    }
  }

  // Ambient sound synthesizer (Rain, Fireplace, Sanctuary)
  setAmbientSound(type: 'none' | 'rain' | 'fireplace' | 'sanctuary', volume: number = 0.4) {
    this.stopAmbient();
    this.currentAmbientType = type;

    if (type === 'none' || volume <= 0) {
      return;
    }

    try {
      this.initCtx();
      if (!this.ctx) return;

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(volume * 0.35, this.ctx.currentTime);
      this.ambientGain.connect(this.ctx.destination);

      if (type === 'sanctuary') {
        // Serene drone with gentle harmonic oscillators
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        osc1.type = 'sine';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(146.83, this.ctx.currentTime); // D3
        osc2.frequency.setValueAtTime(220.00, this.ctx.currentTime); // A3

        const droneFilter = this.ctx.createBiquadFilter();
        droneFilter.type = 'lowpass';
        droneFilter.frequency.setValueAtTime(350, this.ctx.currentTime);

        osc1.connect(droneFilter);
        osc2.connect(droneFilter);
        droneFilter.connect(this.ambientGain);

        osc1.start();
        osc2.start();
        this.ambientSource = droneFilter;
        this.isAmbientPlaying = true;
      } else if (type === 'rain') {
        // Pink noise filtered for steady rain
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          output[i] = (b0 + b1 + b2) * 0.2;
        }

        const rainNoise = this.ctx.createBufferSource();
        rainNoise.buffer = noiseBuffer;
        rainNoise.loop = true;

        const rainFilter = this.ctx.createBiquadFilter();
        rainFilter.type = 'lowpass';
        rainFilter.frequency.setValueAtTime(1100, this.ctx.currentTime);

        rainNoise.connect(rainFilter);
        rainFilter.connect(this.ambientGain);
        rainNoise.start();
        this.ambientSource = rainNoise;
        this.isAmbientPlaying = true;
      } else if (type === 'fireplace') {
        // Low rumble + gentle crackle
        const bufferSize = this.ctx.sampleRate * 2;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          // Occasional random pop/crackle
          const crackle = Math.random() > 0.998 ? (Math.random() * 2 - 1) * 0.8 : 0;
          const rumble = (Math.random() * 2 - 1) * 0.05;
          output[i] = rumble + crackle;
        }

        const fireNoise = this.ctx.createBufferSource();
        fireNoise.buffer = noiseBuffer;
        fireNoise.loop = true;

        const fireFilter = this.ctx.createBiquadFilter();
        fireFilter.type = 'lowpass';
        fireFilter.frequency.setValueAtTime(800, this.ctx.currentTime);

        fireNoise.connect(fireFilter);
        fireFilter.connect(this.ambientGain);
        fireNoise.start();
        this.ambientSource = fireNoise;
        this.isAmbientPlaying = true;
      }
    } catch {
      // Audio autoplay handled gracefully
    }
  }

  updateAmbientVolume(volume: number) {
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setValueAtTime(volume * 0.35, this.ctx.currentTime);
    }
  }

  stopAmbient() {
    if (this.ambientSource && this.isAmbientPlaying) {
      try {
        if ('stop' in this.ambientSource && typeof (this.ambientSource as AudioBufferSourceNode).stop === 'function') {
          (this.ambientSource as AudioBufferSourceNode).stop();
        }
        this.ambientSource.disconnect();
      } catch {
        // ignore
      }
      this.ambientSource = null;
      this.isAmbientPlaying = false;
    }
  }
}

export const audioEngine = new SoundEngine();

// Text to Speech Reader Helper
class NarrationEngine {
  private synth: SpeechSynthesis | null = null;
  private utterance: SpeechSynthesisUtterance | null = null;
  public isSpeaking: boolean = false;
  public onStateChange?: (speaking: boolean) => void;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  speak(text: string, rate: number = 0.95, pitch: number = 1.0) {
    if (!this.synth) return;
    this.stop();

    this.utterance = new SpeechSynthesisUtterance(text);
    this.utterance.rate = rate;
    this.utterance.pitch = pitch;

    // Pick best English voice if available
    const voices = this.synth.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Serena') || v.name.includes('Daniel')));
    if (englishVoice) {
      this.utterance.voice = englishVoice;
    }

    this.utterance.onstart = () => {
      this.isSpeaking = true;
      this.onStateChange?.(true);
    };

    this.utterance.onend = () => {
      this.isSpeaking = false;
      this.onStateChange?.(false);
    };

    this.utterance.onerror = () => {
      this.isSpeaking = false;
      this.onStateChange?.(false);
    };

    this.synth.speak(this.utterance);
  }

  pause() {
    if (this.synth && this.synth.speaking) {
      this.synth.pause();
    }
  }

  resume() {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.onStateChange?.(false);
    }
  }
}

export const narratorEngine = new NarrationEngine();
