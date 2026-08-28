import React, { useState } from 'react';
import prophetOakImg from '../assets/images/prophet_under_oak_1787924738695.jpg';
import bethelAltarImg from '../assets/images/bethel_split_altar_1787924754214.jpg';
import lionRoadImg from '../assets/images/lion_on_road_1787924773824.jpg';
import scrollTruthImg from '../assets/images/scripture_scroll_truth_1787926613152.jpg';
import oldProphetImg from '../assets/images/old_prophet_bethel_1787926631230.jpg';
import sanctuaryImg from '../assets/images/sanctuary_holy_light_1787926649772.jpg';
import modernDigitalImg from '../assets/images/modern_digital_world_1787926665849.jpg';
import prophetTombImg from '../assets/images/prophets_tomb_memorial_1787926681637.jpg';
import ch6BanquetImg from '../assets/images/ch6_banquet_rejection_1787932494673.jpg';
import ch9MirrorImg from '../assets/images/ch9_mirror_deception_1787932518354.jpg';
import ch10AngelImg from '../assets/images/ch10_counterfeit_angel_1787932531359.jpg';
import ch13ModernCityImg from '../assets/images/ch13_modern_city_lies_1787932544514.jpg';
import ch14StageImg from '../assets/images/ch14_false_prophet_stage_1787932559277.jpg';
import ch15DigitalImg from '../assets/images/ch15_digital_social_media_1787932574667.jpg';
import ch23YouthImg from '../assets/images/ch23_youth_battle_truth_1787932588452.jpg';
import ch24FamilyImg from '../assets/images/ch24_family_teaching_bible_1787932603014.jpg';
import ch26LighthouseImg from '../assets/images/ch26_lighthouse_truth_1787932618332.jpg';
import ch27ScaleImg from '../assets/images/ch27_counterfeit_gold_scale_1787932632663.jpg';
import ch29NarrowPathImg from '../assets/images/ch29_narrow_path_obedience_1787932651726.jpg';
import ch30PillarImg from '../assets/images/ch30_standing_alone_pillar_1787932669311.jpg';
import ch32MonumentImg from '../assets/images/ch32_prophet_grave_monument_1787932682681.jpg';
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
    src: ch13ModernCityImg,
    alt: "Modern city lights and digital screens flashing worldly philosophies",
    caption: "Navigating digital misinformation and modern cultural lies",
    themeTag: "2 Timothy 4:3 • Modern Deceptions"
  },
  'memorial': {
    src: ch32MonumentImg,
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
    alt: "Prophet standing firmly against corrupted state religion at the split altar",
    caption: "Standing courageously for biblical truth when the entire culture opposes it",
    themeTag: "Chapter 5 • When Truth Confronts Culture"
  },
  'ch-6': {
    src: ch6BanquetImg,
    alt: "Royal palace banquet table with gold chalices and prophet declining royal gifts",
    caption: "Resisting the allure of royal flattery, gifts, and comfortable invitations",
    themeTag: "Chapter 6 • The Old Prophet Appears & King's Offer"
  },
  'ch-7': {
    src: oldProphetImg,
    alt: "Elderly prophet in ancient stone room in Bethel",
    caption: "The tragic paradox of an old prophet speaking subtle religious deception",
    themeTag: "Chapter 7 • The Most Dangerous Lies Sound Spiritual"
  },
  'ch-8': {
    src: prophetOakImg,
    alt: "Resting beneath the massive oak tree",
    caption: "The perilous moment when vigilance relaxes under the shade of comfort",
    themeTag: "Chapter 8 • The Tragedy of Distracted Obedience"
  },
  'ch-9': {
    src: ch9MirrorImg,
    alt: "Brass mirror reflecting distorted double image with hourglass and cracked stone",
    caption: "The deceptive psychology and rationalizations that lead minds to embrace falsehoods",
    themeTag: "Chapter 9 • Why People Believe Lies"
  },
  'ch-10': {
    src: ch10AngelImg,
    alt: "Counterfeit glowing figure tested and exposed by genuine scripture scroll",
    caption: "Counterfeits that disguise deception behind false authority and emotional manipulation",
    themeTag: "Chapter 10 • Emotional Manipulation & False Authority"
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
    src: ch13ModernCityImg,
    alt: "Vast modern neon-lit metropolis with glowing billboards of conflicting philosophies",
    caption: "Navigating the flood of subtle deceptions across 21st-century society",
    themeTag: "Chapter 13 • Modern Lies in the Present Age"
  },
  'ch-14': {
    src: ch14StageImg,
    alt: "Modern arena stage with theatrical spotlights and charismatic showmanship",
    caption: "Discerning true prophetic authenticity from charismatic entertainment and spectacle",
    themeTag: "Chapter 14 • False Prophets in Modern Times"
  },
  'ch-15': {
    src: ch15DigitalImg,
    alt: "Glowing smartphone screens with social media feeds and notification algorithms",
    caption: "Algorithms, viral misinformation, and the digital battleground for the mind",
    themeTag: "Chapter 15 • Social Media and Digital Deception"
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
    alt: "Watchmen standing in holy sanctuary with shafts of golden light",
    caption: "Developing sharp spiritual senses to perceive deceptive currents in the last days",
    themeTag: "Chapter 19 • Discernment in the Last Days"
  },
  'ch-20': {
    src: scrollTruthImg,
    alt: "Ancient scripture scroll testing every doctrine and message",
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
    src: ch23YouthImg,
    alt: "Young Christian men and women standing courageously with open Bibles on campus",
    caption: "Empowering the next generation to withstand secular pressures and cultural lies",
    themeTag: "Chapter 23 • Young People and the Battle for Truth"
  },
  'ch-24': {
    src: ch24FamilyImg,
    alt: "Christian parents at home teaching their children around the family Bible",
    caption: "The sacred duty of parents and leaders to teach God's Word with integrity",
    themeTag: "Chapter 24 • Parents, Leaders, and Responsibility"
  },
  'ch-25': {
    src: sanctuaryImg,
    alt: "Grand historic stone church sanctuary with radiant holy light",
    caption: "Safeguarding the church from theological dilution and worldly conformity",
    themeTag: "Chapter 25 • Churches and the Crisis of Deception"
  },
  'ch-26': {
    src: ch26LighthouseImg,
    alt: "Majestic stone lighthouse beam piercing through dense fog and turbulent storm waves",
    caption: "God's eternal, unshakeable truth shining as our guiding light in an age of confusion",
    themeTag: "Chapter 26 • Truth in an Age of Confusion"
  },
  'ch-27': {
    src: ch27ScaleImg,
    alt: "Antique jeweler balance scale testing pure authentic gold against counterfeit coin",
    caption: "Examining spiritual fruit and testing doctrines to expose subtle counterfeits",
    themeTag: "Chapter 27 • How to Recognize Spiritual Counterfeits"
  },
  'ch-28': {
    src: bethelAltarImg,
    alt: "Awe-inspiring presence of Almighty God",
    caption: "Restoring holy reverence and awe due to Almighty God above culture",
    themeTag: "Chapter 28 • Recovering the Fear of God"
  },
  'ch-29': {
    src: ch29NarrowPathImg,
    alt: "Lone pilgrim walking the narrow upward rocky path toward dawn sunrise",
    caption: "Choosing divine alignment and obedience over public applause and popularity",
    themeTag: "Chapter 29 • Obedience Above Popularity"
  },
  'ch-30': {
    src: ch30PillarImg,
    alt: "Solitary believer standing firm like a rock fortress amidst fierce desert winds",
    caption: "The unwavering fortitude to stand alone for God when all others compromise",
    themeTag: "Chapter 30 • Standing Alone for Truth"
  },
  'ch-31': {
    src: lionRoadImg,
    alt: "Solemn scene on the road of redemption and God's call to repentance",
    caption: "The enduring mercy and redemption of God amidst human brokenness",
    themeTag: "Chapter 31 • The Mercy of God Despite Human Failure"
  },
  'ch-32': {
    src: ch32MonumentImg,
    alt: "Ancient carved stone tomb monument and memorial pillar in the Judean hills at sunset",
    caption: "The prophet's tomb stands as a timeless monument: finishing faithfully matters",
    themeTag: "Chapter 32 • Lessons from the Grave of the Prophet"
  },
  'ch-33': {
    src: scrollTruthImg,
    alt: "Ancient scripture scroll and armor of God principles",
    caption: "Ten practical and actionable spiritual disciplines to guard against deception",
    themeTag: "Chapter 33 • Practical Steps to Avoid Deception"
  },
  'conclusion': {
    src: ch32MonumentImg,
    alt: "Sunset over ancient hills and monument",
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
          <span className="font-bold drop-shadow-md truncate max-w-[90%] text-[#FAF8F5]">
            {meta.themeTag}
          </span>
        </div>
      </div>
      <div className="p-2 bg-[#F5F2EC] border-t border-[#D5D1C8] text-[11px] text-[#2D2D26] font-medium italic text-center font-serif">
        {meta.caption}
      </div>
    </div>
  );
};

