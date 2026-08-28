import React, { useState } from 'react';
import prophetOakImg from '../assets/images/prophet_under_oak_1787924738695.jpg';
import bethelAltarImg from '../assets/images/bethel_split_altar_1787924754214.jpg';
import lionRoadImg from '../assets/images/lion_on_road_1787924773824.jpg';
import scrollTruthImg from '../assets/images/scripture_scroll_truth_1787926613152.jpg';
import oldProphetImg from '../assets/images/old_prophet_bethel_1787926631230.jpg';
import sanctuaryImg from '../assets/images/sanctuary_holy_light_1787926649772.jpg';
import modernDigitalImg from '../assets/images/modern_digital_world_1787926665849.jpg';
import prophetTombImg from '../assets/images/prophets_tomb_memorial_1787926681637.jpg';
import { Sparkles } from 'lucide-react';

export interface ThemeImageMeta {
  src: string;
  alt: string;
  caption: string;
  themeTag: string;
}

export const CHAPTER_REALISTIC_IMAGES: Record<string, ThemeImageMeta> = {
  // Common theme types
  'prophet': {
    src: prophetOakImg,
    alt: "The Young Prophet resting under the ancient Oak Tree",
    caption: "The Young Prophet resting beneath the oak on the road from Bethel",
    themeTag: "1 Kings 13:14 • The Young Prophet"
  },
  'altar': {
    src: bethelAltarImg,
    alt: "The cracked and split stone altar of Bethel with smoke rising",
    caption: "The false altar of Jeroboam splitting apart as God's judgment fell",
    themeTag: "1 Kings 13:3 • Split Altar of Bethel"
  },
  'lion': {
    src: lionRoadImg,
    alt: "Majestic lion standing quietly beside the donkey on the road",
    caption: "The lion on the road standing calmly beside the resting donkey",
    themeTag: "1 Kings 13:24 • The Lion on the Road"
  },
  'tree': {
    src: prophetOakImg,
    alt: "Solitary oak tree in golden desert light",
    caption: "Under the shade of the oak tree where the lie was spoken",
    themeTag: "1 Kings 13:14 • The Oak Tree"
  },
  'scripture': {
    src: scrollTruthImg,
    alt: "Ancient Hebrew scripture parchment scroll in warm morning light",
    caption: "The unchanging Word of God as our supreme standard of truth",
    themeTag: "Psalm 119:105 • Eternal Scripture"
  },
  'sanctuary': {
    src: sanctuaryImg,
    alt: "Grand church sanctuary with shafts of golden light",
    caption: "Safeguarding the church from theological dilution and deception",
    themeTag: "1 Timothy 3:15 • House of God"
  },
  'modern': {
    src: modernDigitalImg,
    alt: "Ancient Bible held amidst glowing city lights and digital screens",
    caption: "Navigating digital misinformation and modern cultural lies",
    themeTag: "2 Timothy 4:3 • Modern Deceptions"
  },
  'memorial': {
    src: prophetTombImg,
    alt: "Ancient stone memorial in the hills of Judah at sunset",
    caption: "A timeless monument reminding every generation to obey God's Word",
    themeTag: "1 Kings 13:31 • Lessons from the Grave"
  },

  // Chapter-by-chapter mapping
  'intro': {
    src: scrollTruthImg,
    alt: "Ancient open manuscript illuminated in quiet darkness",
    caption: "Preserving divine truth in an age surrounded by competing voices",
    themeTag: "Introduction • The Urgency of Truth"
  },
  'ch-1': {
    src: prophetOakImg,
    alt: "Young Prophet in robes on the road to Bethel",
    caption: "Bold obedience followed by tragic deception under the oak",
    themeTag: "Chapter 1 • The Story of the Young Prophet"
  },
  'ch-2': {
    src: scrollTruthImg,
    alt: "Ancient parchment scroll detailing divine assignment",
    caption: "The path of specific divine instructions and unbending loyalty",
    themeTag: "Chapter 2 • The Assignment from God"
  },
  'ch-3': {
    src: bethelAltarImg,
    alt: "Ancient altar in Bethel cracked in two",
    caption: "Jeroboam's political altar confronted and destroyed by prophetic word",
    themeTag: "Chapter 3 • Jeroboam & Corrupt Altar"
  },
  'ch-4': {
    src: scrollTruthImg,
    alt: "Parchment scroll with direct instructions from God",
    caption: "The clarity of God's instructions leaves no room for human negotiation",
    themeTag: "Chapter 4 • Clear Instructions from God"
  },
  'ch-5': {
    src: bethelAltarImg,
    alt: "Prophet standing firmly against corrupted state religion",
    caption: "Standing courageously for biblical truth when the entire culture opposes it",
    themeTag: "Chapter 5 • Standing for Truth"
  },
  'ch-6': {
    src: bethelAltarImg,
    alt: "Royal palace and tempting banquet offers",
    caption: "Resisting the allure of royal flattery, gifts, and comfortable invitations",
    themeTag: "Chapter 6 • The King's Invitation"
  },
  'ch-7': {
    src: oldProphetImg,
    alt: "Elderly prophet in ancient stone room in Bethel",
    caption: "The tragic paradox of an old prophet living in compromise",
    themeTag: "Chapter 7 • The Old Prophet of Bethel"
  },
  'ch-8': {
    src: prophetOakImg,
    alt: "Resting beneath the massive oak tree",
    caption: "The perilous moment when vigilance relaxes under the shade of comfort",
    themeTag: "Chapter 8 • Resting Under the Oak"
  },
  'ch-9': {
    src: oldProphetImg,
    alt: "Old prophet speaking deceptive words",
    caption: "The deceptive psychology that leads sincere believers to embrace falsehoods",
    themeTag: "Chapter 9 • Why People Believe Lies"
  },
  'ch-10': {
    src: oldProphetImg,
    alt: "False spiritual authority masquerading as an angelic message",
    caption: "Counterfeits that disguise deception behind spiritual titles and emotional warmth",
    themeTag: "Chapter 10 • Emotional Manipulation"
  },
  'ch-11': {
    src: prophetOakImg,
    alt: "The fateful turning point on the road back to Bethel",
    caption: "The irreparable consequence of a single compromised decision",
    themeTag: "Chapter 11 • The Cost of One Wrong Decision"
  },
  'ch-12': {
    src: lionRoadImg,
    alt: "Majestic lion standing quietly on the dirt road",
    caption: "The solemn encounter with divine judgment on the road to Judah",
    themeTag: "Chapter 12 • The Lion on the Road"
  },
  'ch-13': {
    src: modernDigitalImg,
    alt: "Modern vast illuminated metropolis and digital screens",
    caption: "Navigating the flood of subtle deceptions across 21st-century society",
    themeTag: "Chapter 13 • Modern Lies in the Present Age"
  },
  'ch-14': {
    src: modernDigitalImg,
    alt: "Spotlights and modern charismatic entertainment",
    caption: "Discerning true prophetic authenticity from charismatic entertainment",
    themeTag: "Chapter 14 • Modern False Prophets"
  },
  'ch-15': {
    src: modernDigitalImg,
    alt: "Glowing smartphones and digital matrix in modern era",
    caption: "Algorithms, viral misinformation, and the digital battleground for the mind",
    themeTag: "Chapter 15 • Social Media & Digital Deception"
  },
  'ch-16': {
    src: bethelAltarImg,
    alt: "Gradual dismantling of spiritual convictions",
    caption: "How small spiritual concessions gradually dismantle moral foundations",
    themeTag: "Chapter 16 • The Spirit of Compromise"
  },
  'ch-17': {
    src: prophetOakImg,
    alt: "The comfortable shade versus the rugged road of duty",
    caption: "The dangerous tradeoff between temporary comfort and eternal conviction",
    themeTag: "Chapter 17 • When Convenience Replaces Conviction"
  },
  'ch-18': {
    src: lionRoadImg,
    alt: "The subtle mixture of truth and deception",
    caption: "A 99% truth mixed with a 1% lie is the deadliest form of deception",
    themeTag: "Chapter 18 • The Danger of Half-Truths"
  },
  'ch-19': {
    src: sanctuaryImg,
    alt: "Watchmen standing on the towers of the sanctuary",
    caption: "Developing sharp spiritual senses to perceive deceptive currents in the last days",
    themeTag: "Chapter 19 • Discernment in the Last Days"
  },
  'ch-20': {
    src: scrollTruthImg,
    alt: "Ancient brass balance scales testing doctrine against Scripture",
    caption: "Weighing every prophecy, doctrine, and trend against Scripture",
    themeTag: "Chapter 20 • Testing Every Voice"
  },
  'ch-21': {
    src: prophetOakImg,
    alt: "Deep roots gripping bedrock against cultural winds",
    caption: "Anchoring personal faith so it cannot be swayed by popular opinion",
    themeTag: "Chapter 21 • Personal Conviction"
  },
  'ch-22': {
    src: scrollTruthImg,
    alt: "Open Holy Bible bathed in golden morning window light",
    caption: "The unbreakable fortress of daily scripture immersion and earnest prayer",
    themeTag: "Chapter 22 • The Role of Prayer and Scripture"
  },
  'ch-23': {
    src: prophetOakImg,
    alt: "Young person standing on mountain peak looking at sunrise",
    caption: "Empowering a new generation to withstand cultural pressures and lies",
    themeTag: "Chapter 23 • Young People & Battle for Truth"
  },
  'ch-24': {
    src: oldProphetImg,
    alt: "Spiritual elder and fatherly guidance",
    caption: "The sacred duty of leaders and parents to guide with godly integrity",
    themeTag: "Chapter 24 • Parents, Leaders & Responsibility"
  },
  'ch-25': {
    src: sanctuaryImg,
    alt: "Grand historic stone cathedral interior with radiant light",
    caption: "Safeguarding the church from theological dilution and worldly conformity",
    themeTag: "Chapter 25 • Churches & Crisis of Deception"
  },
  'ch-26': {
    src: sanctuaryImg,
    alt: "Brilliant celestial light piercing through darkness",
    caption: "The immutable, unchanging nature of God's eternal truth in an age of confusion",
    themeTag: "Chapter 26 • Truth in an Age of Confusion"
  },
  'ch-27': {
    src: sanctuaryImg,
    alt: "Examining spiritual fruit and motives to expose counterfeits",
    caption: "Examining spiritual fruit and motives to expose subtle counterfeits",
    themeTag: "Chapter 27 • Recognizing Spiritual Counterfeits"
  },
  'ch-28': {
    src: bethelAltarImg,
    alt: "Awe-inspiring presence of Almighty God",
    caption: "Restoring the holy reverence and awe due to Almighty God",
    themeTag: "Chapter 28 • Recovering the Fear of God"
  },
  'ch-29': {
    src: bethelAltarImg,
    alt: "Solitary footsteps choosing divine alignment over popular approval",
    caption: "Choosing divine alignment even when it costs human applause",
    themeTag: "Chapter 29 • Obedience Above Popularity"
  },
  'ch-30': {
    src: prophetTombImg,
    alt: "Ancient stone fortress enduring the storms",
    caption: "The unwavering fortitude to stand alone when all others bow",
    themeTag: "Chapter 30 • Standing Alone for Truth"
  },
  'ch-31': {
    src: lionRoadImg,
    alt: "Light breaking through the clouds after the storm",
    caption: "The enduring mercy and redemption of God amidst human brokenness",
    themeTag: "Chapter 31 • The Mercy of God"
  },
  'ch-32': {
    src: prophetTombImg,
    alt: "Ancient stone tomb monument in the hills of Judah",
    caption: "The prophet's tomb stands as a perpetual warning across all generations",
    themeTag: "Chapter 32 • Lessons from the Grave"
  },
  'ch-33': {
    src: scrollTruthImg,
    alt: "Armor of God and compass on sacred parchment",
    caption: "Ten practical and actionable spiritual disciplines to guard against deception",
    themeTag: "Chapter 33 • Practical Steps to Avoid Deception"
  },
  'conclusion': {
    src: prophetTombImg,
    alt: "Sunset over ancient hills",
    caption: "The decisive moment to choose truth before the window of opportunity closes",
    themeTag: "Conclusion • Choose Truth Before It Is Too Late"
  },
  'prayer': {
    src: sanctuaryImg,
    alt: "Solemn prayer of dedication and protection",
    caption: "A closing prayer for discernment, divine strength, and unshakeable truth",
    themeTag: "Final Benediction • Dedicated Prayer"
  }
};

export const getThemeImageForChapter = (chapterId?: string, illustrationType?: string): ThemeImageMeta => {
  if (chapterId && CHAPTER_REALISTIC_IMAGES[chapterId]) {
    return CHAPTER_REALISTIC_IMAGES[chapterId];
  }
  // Try mapping numeric chapter ids like "chapter-25" -> "ch-25"
  if (chapterId) {
    const cleanId = chapterId.replace('chapter-', 'ch-').toLowerCase();
    if (CHAPTER_REALISTIC_IMAGES[cleanId]) {
      return CHAPTER_REALISTIC_IMAGES[cleanId];
    }
  }
  if (illustrationType && CHAPTER_REALISTIC_IMAGES[illustrationType]) {
    return CHAPTER_REALISTIC_IMAGES[illustrationType];
  }
  return CHAPTER_REALISTIC_IMAGES['intro'];
};

interface ChapterRealisticImageProps {
  chapterId?: string;
  illustrationType?: string;
  className?: string;
  variant?: 'inline' | 'hero' | 'facing';
}

export const ChapterRealisticImage: React.FC<ChapterRealisticImageProps> = ({
  chapterId,
  illustrationType,
  className = "w-full max-h-48",
  variant = 'inline'
}) => {
  const meta = getThemeImageForChapter(chapterId, illustrationType);
  const [loaded, setLoaded] = useState(false);

  if (variant === 'facing') {
    return (
      <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#25251D] text-[#FAF8F5] rounded-xl overflow-hidden border border-[#444433] shadow-lg">
        {/* Background Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10 pointer-events-none" />
        
        <img
          src={meta.src}
          alt={meta.alt}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />

        {/* Top Floating Badge */}
        <div className="relative z-20 flex items-center justify-between">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/25 text-[#FAF8F5] text-[11px] font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E8D5B5]" />
            <span>Theme Art</span>
          </span>
          <span className="text-[10px] text-[#FAF8F5] font-semibold uppercase tracking-widest font-mono bg-black/60 px-2.5 py-0.5 rounded">
            Verso Facing
          </span>
        </div>

        {/* Bottom Thematic Caption & Card */}
        <div className="relative z-20 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 space-y-1.5 shadow-lg text-white">
          <div className="text-xs uppercase tracking-widest text-[#E8D5B5] font-extrabold">
            {meta.themeTag}
          </div>
          <p className="text-sm text-[#FAF8F5] font-serif italic leading-snug font-medium">
            "{meta.caption}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-xl overflow-hidden border border-[#D5D1C8] shadow-xs bg-[#FAF8F5] group ${className}`}>
      <div className="relative w-full h-36 sm:h-44 overflow-hidden bg-[#24241B]">
        <img
          src={meta.src}
          alt={meta.alt}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
        
        {/* Caption bar */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-white">
          <span className="font-bold drop-shadow-md truncate max-w-[80%] text-[#FAF8F5]">
            {meta.themeTag}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider bg-black/70 px-2 py-0.5 rounded backdrop-blur-xs text-[#E8D5B5] border border-white/10">
            Ultra-Realistic
          </span>
        </div>
      </div>
      <div className="p-2 bg-[#F5F2EC] border-t border-[#D5D1C8] text-[11px] text-[#2D2D26] font-medium italic text-center font-serif">
        {meta.caption}
      </div>
    </div>
  );
};
