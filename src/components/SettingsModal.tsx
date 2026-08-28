import React from 'react';
import { ReaderSettings, ThemeMode, FontFamily, LineHeight, ReadingLayout, AmbientSoundType } from '../types';
import { audioEngine } from '../utils/audioEngine';
import { X, Sliders, Volume2, Type, Layout, Palette, Sparkles, Sun, Eye } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ReaderSettings;
  onUpdateSettings: (newSettings: Partial<ReaderSettings>) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  const themes: { id: ThemeMode; label: string; previewBg: string; previewText: string }[] = [
    { id: 'natural', label: 'Natural Tones', previewBg: '#FDFCF8', previewText: '#2B2B28' },
    { id: 'parchment', label: 'Vintage Parchment', previewBg: '#f9f5eb', previewText: '#2b241b' },
    { id: 'cream', label: 'Warm Cream', previewBg: '#fbf7ee', previewText: '#2c2416' },
    { id: 'sepia', label: 'Classic Sepia', previewBg: '#f4ecd8', previewText: '#3f2e1e' },
    { id: 'sage', label: 'Forest Sage', previewBg: '#edf2ee', previewText: '#1c2e24' },
    { id: 'dark', label: 'Midnight Dark', previewBg: '#18181b', previewText: '#e4e4e7' },
    { id: 'slate', label: 'Deep Slate', previewBg: '#1e293b', previewText: '#f1f5f9' },
  ];

  const fonts: { id: FontFamily; label: string; fontClass: string }[] = [
    { id: 'cormorant', label: 'Cormorant Garamond (Classic Book)', fontClass: 'font-serif-book' },
    { id: 'merriweather', label: 'Merriweather (Literary Serif)', fontClass: 'font-serif-body' },
    { id: 'sans', label: 'Plus Jakarta (Modern Sans)', fontClass: 'font-sans-modern' },
    { id: 'mono', label: 'JetBrains (Clean Mono)', fontClass: 'font-mono-reader' },
  ];

  const ambientTracks: { id: AmbientSoundType; label: string }[] = [
    { id: 'none', label: 'Silent' },
    { id: 'rain', label: 'Gentle Rain' },
    { id: 'fireplace', label: 'Cozy Fireplace' },
    { id: 'sanctuary', label: 'Peaceful Sanctuary' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div 
        id="settings-modal-container"
        className="relative w-full max-w-xl max-h-[90vh] bg-[#FAF8F5] border border-[#E5E1D8] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#333333]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E1D8] bg-[#F2EFE9]/80">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-[#E8E4DD] text-[#5A5A40] border border-[#D8D3C8]">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#2D2D2A] tracking-wide">
                Reading Settings & Customization
              </h2>
              <p className="text-xs text-[#77726A]">
                Personalize your typography, ambiance, and flip experience
              </p>
            </div>
          </div>
          <button
            id="btn-close-settings"
            onClick={onClose}
            className="p-2 rounded-xl text-[#77726A] hover:text-[#2D2D2A] hover:bg-[#E8E4DD] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Section 1: Color Themes */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#2D2D2A]">
              <Palette className="w-4 h-4 text-[#5A5A40]" />
              <span>Color Themes</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {themes.map((t) => {
                const isSelected = settings.theme === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => onUpdateSettings({ theme: t.id })}
                    className={`flex items-center space-x-2.5 p-2.5 rounded-xl border transition-all cursor-pointer text-left ${isSelected ? 'ring-2 ring-[#5A5A40] border-[#5A5A40] bg-white font-bold text-[#2D2D2A] shadow-2xs' : 'border-[#E5E1D8] bg-white/70 hover:bg-white text-[#555555]'}`}
                  >
                    <div 
                      className="w-6 h-6 rounded-full border border-black/15 shadow-2xs shrink-0" 
                      style={{ backgroundColor: t.previewBg }}
                    />
                    <span className="text-xs">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Typography & Font Family */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#2D2D2A]">
              <Type className="w-4 h-4 text-[#5A5A40]" />
              <span>Font Family</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {fonts.map((f) => {
                const isSelected = settings.fontFamily === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => onUpdateSettings({ fontFamily: f.id })}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${isSelected ? 'bg-[#E8E4DD] border-[#5A5A40] text-[#2D2D2A] font-bold shadow-2xs' : 'bg-white border-[#E5E1D8] text-[#555555] hover:bg-[#F2EFE9]'}`}
                  >
                    <div className={`text-sm ${f.fontClass}`}>{f.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 3: Font Size & Line Height */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-[#555555]">
                <span>Font Size</span>
                <span className="font-mono font-bold text-[#5A5A40]">{settings.fontSize}px</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xs text-[#99948D]">A</span>
                <input
                  type="range"
                  min={14}
                  max={26}
                  step={1}
                  value={settings.fontSize}
                  onChange={(e) => onUpdateSettings({ fontSize: Number(e.target.value) })}
                  className="w-full accent-[#5A5A40] cursor-pointer"
                />
                <span className="text-base text-[#2D2D2A] font-bold">A</span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-medium text-[#555555]">Line Spacing</span>
              <div className="flex rounded-xl bg-white p-1 border border-[#E5E1D8] shadow-2xs">
                {(['normal', 'relaxed', 'loose'] as LineHeight[]).map((lh) => (
                  <button
                    key={lh}
                    onClick={() => onUpdateSettings({ lineHeight: lh })}
                    className={`flex-1 py-1 text-xs capitalize rounded-lg transition-colors cursor-pointer ${settings.lineHeight === lh ? 'bg-[#5A5A40] text-white font-bold' : 'text-[#77726A] hover:text-[#2D2D2A]'}`}
                  >
                    {lh}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Section 4: Layout Mode */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#2D2D2A]">
              <Layout className="w-4 h-4 text-[#5A5A40]" />
              <span>Reading Layout</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'spread', label: '2-Page Spread', desc: 'Classic Book' },
                { id: 'single', label: 'Single Page', desc: 'Focused Flip' },
                { id: 'scroll', label: 'Continuous', desc: 'Scroll Flow' },
              ].map((l) => {
                const isSelected = settings.layout === l.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => onUpdateSettings({ layout: l.id as ReadingLayout })}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${isSelected ? 'bg-[#E8E4DD] border-[#5A5A40] text-[#2D2D2A] font-bold shadow-2xs' : 'bg-white border-[#E5E1D8] text-[#555555] hover:bg-[#F2EFE9]'}`}
                  >
                    <div className="text-xs font-semibold">{l.label}</div>
                    <div className="text-[10px] text-[#77726A] mt-0.5">{l.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 5: Audio & Ambiance */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm font-bold text-[#2D2D2A]">
              <div className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4 text-[#5A5A40]" />
                <span>Audio & Sounds</span>
              </div>
            </div>

            {/* Paper Turn Sound Switch */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs">
              <div>
                <div className="text-xs font-semibold text-[#2D2D2A]">Paper Page Turn Sound</div>
                <div className="text-[11px] text-[#77726A]">Play realistic paper rustle when turning pages</div>
              </div>
              <button
                onClick={() => {
                  const newVal = !settings.soundEffects;
                  onUpdateSettings({ soundEffects: newVal });
                  if (newVal) audioEngine.playPageFlip();
                }}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${settings.soundEffects ? 'bg-[#5A5A40] justify-end' : 'bg-[#D8D3C8] justify-start'}`}
              >
                <div className="bg-white w-4 h-4 rounded-full shadow-md" />
              </button>
            </div>

            {/* Ambient Sound Generators */}
            <div className="p-3 rounded-xl bg-white border border-[#E5E1D8] space-y-3 shadow-2xs">
              <div>
                <div className="text-xs font-semibold text-[#2D2D2A]">Ambient Background Audio</div>
                <div className="text-[11px] text-[#77726A]">Synthesized white noise and gentle tones for deep focus</div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {ambientTracks.map((tr) => (
                  <button
                    key={tr.id}
                    onClick={() => {
                      onUpdateSettings({ ambientSound: tr.id });
                      audioEngine.setAmbientSound(tr.id, settings.ambientVolume);
                    }}
                    className={`py-1.5 px-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${settings.ambientSound === tr.id ? 'bg-[#5A5A40] text-white border-[#5A5A40] font-bold shadow-2xs' : 'bg-[#FAF8F5] text-[#555555] border-[#E5E1D8] hover:bg-[#F2EFE9]'}`}
                  >
                    {tr.label}
                  </button>
                ))}
              </div>

              {settings.ambientSound !== 'none' && (
                <div className="pt-2 flex items-center space-x-3">
                  <Volume2 className="w-3.5 h-3.5 text-[#77726A]" />
                  <input
                    type="range"
                    min={0.05}
                    max={1}
                    step={0.05}
                    value={settings.ambientVolume}
                    onChange={(e) => {
                      const vol = Number(e.target.value);
                      onUpdateSettings({ ambientVolume: vol });
                      audioEngine.updateAmbientVolume(vol);
                    }}
                    className="w-full accent-[#5A5A40]"
                  />
                  <span className="text-xs font-mono font-bold text-[#5A5A40]">{Math.round(settings.ambientVolume * 100)}%</span>
                </div>
              )}
            </div>
          </div>

          {/* Section 6: Smart Reading Features */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm font-bold text-[#2D2D2A]">
              <Eye className="w-4 h-4 text-[#5A5A40]" />
              <span>Smart Reading Aids</span>
            </div>

            {/* Bionic Reading Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs">
              <div>
                <div className="text-xs font-semibold text-[#2D2D2A] flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />
                  <span>Bionic Reading Mode</span>
                </div>
                <div className="text-[11px] text-[#77726A]">
                  Bold initial characters to guide rapid reading flow
                </div>
              </div>
              <button
                onClick={() => onUpdateSettings({ bionicReading: !settings.bionicReading })}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${settings.bionicReading ? 'bg-[#5A5A40] justify-end' : 'bg-[#D8D3C8] justify-start'}`}
              >
                <div className="bg-white w-4 h-4 rounded-full shadow-md" />
              </button>
            </div>

            {/* Reading Ruler Toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs">
              <div>
                <div className="text-xs font-semibold text-[#2D2D2A]">Reading Focus Ruler</div>
                <div className="text-[11px] text-[#77726A]">
                  Subtle focus line following mouse pointer
                </div>
              </div>
              <button
                onClick={() => onUpdateSettings({ readingRuler: !settings.readingRuler })}
                className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${settings.readingRuler ? 'bg-[#5A5A40] justify-end' : 'bg-[#D8D3C8] justify-start'}`}
              >
                <div className="bg-white w-4 h-4 rounded-full shadow-md" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E5E1D8] bg-[#F2EFE9]/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#5A5A40] hover:bg-[#484833] text-white font-bold text-sm transition-colors cursor-pointer shadow-md shadow-[#5A5A40]/20"
          >
            Apply & Done
          </button>
        </div>
      </div>
    </div>
  );
};
