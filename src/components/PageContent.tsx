import React from 'react';
import { BookPage, BookChapter, ReaderSettings } from '../types';
import { BookIllustration } from './Illustrations';
import { ChapterRealisticImage } from './ChapterThemeImage';
import { Bookmark, Sparkles, BookOpen, ScrollText } from 'lucide-react';

interface PageContentProps {
  page?: BookPage;
  chapter?: BookChapter;
  settings: ReaderSettings;
  isLeftPage?: boolean;
  isRightPage?: boolean;
  onToggleBookmark?: (pageNumber: number) => void;
  isBookmarked?: boolean;
  isFacingSpread?: boolean;
  facingChapter?: BookChapter;
}

// Regex to detect Bible scripture references like "1 Kings 13:18", "Galatians 1:8", "Psalm 119:160", "John 14:6", etc.
const SCRIPTURE_REGEX = /\b(\d?\s?[A-Z][a-z]+(?:\s[A-Z][a-z]+)?\s\d+:\d+(?:-\d+)?)\b/g;

// Helper to highlight scripture references inline within regular text with solid high-contrast black text
export const highlightScriptures = (text: string, isDark: boolean = false): React.ReactNode => {
  const parts = text.split(SCRIPTURE_REGEX);
  if (parts.length === 1) return text;

  return parts.map((part, index) => {
    if (SCRIPTURE_REGEX.test(part)) {
      SCRIPTURE_REGEX.lastIndex = 0; // Reset regex state
      return (
        <span 
          key={index} 
          className={`inline-flex items-center px-2 py-0.5 mx-1 rounded-md text-xs font-bold font-mono tracking-tight border align-baseline ${
            isDark 
              ? 'bg-white/20 text-white border-white/40' 
              : 'bg-black/10 text-black border-black/30 font-extrabold'
          }`}
        >
          <BookOpen className={`w-3 h-3 mr-1 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
          {part}
        </span>
      );
    }
    return part;
  });
};

// Bionic Reading utility to bold the first half of words
export const formatBionicText = (text: string): React.ReactNode => {
  const words = text.split(/(\s+)/);
  return words.map((word, index) => {
    if (/^\s+$/.test(word) || word.length <= 1) {
      return word;
    }
    const mid = Math.ceil(word.length / 2);
    const boldPart = word.slice(0, mid);
    const restPart = word.slice(mid);
    return (
      <span key={index}>
        <strong className="font-semibold text-inherit">{boldPart}</strong>
        {restPart}
      </span>
    );
  });
};

export const PageContent: React.FC<PageContentProps> = ({
  page,
  chapter,
  settings,
  isLeftPage,
  isRightPage,
  onToggleBookmark,
  isBookmarked = false,
  isFacingSpread = false,
  facingChapter,
}) => {
  const blocks = page?.blocks || chapter?.blocks || [];
  const title = page?.title || chapter?.title || '';
  const pageNum = page?.pageNumber;
  const illustrationType = page?.illustrationType || chapter?.illustrationType;
  const chapterId = page?.chapterId || chapter?.id;
  const isDark = settings.theme === 'dark' || settings.theme === 'slate';

  // Compute theme color styles with high contrast
  const getThemeClass = () => {
    switch (settings.theme) {
      case 'natural':
        return 'bg-[#FDFCF8] text-[#111110] border-[#E2DDD3]';
      case 'cream':
        return 'bg-[#FAF6EE] text-[#140F0A] border-[#DFD7C2]';
      case 'sepia':
        return 'bg-[#F4ECD8] text-[#1F140A] border-[#D9C8A6]';
      case 'dark':
        return 'bg-[#1E1E18] text-[#FAF8F5] border-[#3E3E2E]';
      case 'sage':
        return 'bg-[#EEF2EC] text-[#0A1810] border-[#CAD6CD]';
      case 'slate':
        return 'bg-[#1E222B] text-[#F8FAFC] border-[#3B404C]';
      case 'parchment':
      default:
        return 'bg-[#F7F3E8] text-[#111110] border-[#DED4BE]';
    }
  };

  // Solid high contrast heading colors
  const getHeadingColor = () => {
    switch (settings.theme) {
      case 'natural':
      case 'cream':
      case 'sepia':
      case 'sage':
      case 'parchment':
        return 'text-black border-black/30';
      case 'dark':
        return 'text-[#FAF8F5] border-[#FAF8F5]/40';
      case 'slate':
        return 'text-[#FFFFFF] border-[#E2E8F0]/40';
      default:
        return 'text-black border-black/30';
    }
  };

  const getSubheadingColor = () => {
    if (isDark) {
      return 'text-[#E8E4DD]';
    }
    return 'text-black font-semibold';
  };

  const getDropCapColor = () => {
    if (isDark) {
      return 'text-[#FAF8F5]';
    }
    return 'text-black';
  };

  // Font family class
  const getFontFamilyClass = () => {
    switch (settings.fontFamily) {
      case 'cormorant':
        return 'font-serif-book';
      case 'sans':
        return 'font-sans-modern';
      case 'mono':
        return 'font-mono-reader';
      case 'merriweather':
      default:
        return 'font-serif-body';
    }
  };

  // Line height class
  const getLineHeightClass = () => {
    switch (settings.lineHeight) {
      case 'loose':
        return 'leading-loose';
      case 'relaxed':
        return 'leading-relaxed';
      case 'normal':
      default:
        return 'leading-normal';
    }
  };

  const renderText = (text?: string) => {
    if (!text) return null;
    if (settings.bionicReading) {
      return formatBionicText(text);
    }
    return highlightScriptures(text, isDark);
  };

  // Facing Chapter Spread on the Left Page
  if (isFacingSpread && facingChapter) {
    return (
      <article 
        id={`facing-spread-${facingChapter.id}`}
        className={`relative h-full flex flex-col justify-between p-5 sm:p-7 md:p-8 select-text transition-colors duration-300 ${getThemeClass()} ${getFontFamilyClass()}`}
      >
        <header className="flex items-center justify-between border-b border-current/20 pb-2 mb-2 text-xs uppercase tracking-widest">
          <div className="flex items-center space-x-1.5 font-black tracking-wider opacity-95">
            <ScrollText className={`w-3.5 h-3.5 ${isDark ? 'text-white' : 'text-black'}`} />
            <span className={isDark ? 'text-white' : 'text-black'}>Chapter Preview</span>
          </div>
          <span className={`font-mono text-xs font-bold ${isDark ? 'text-white/80' : 'text-black/80'}`}>
            Verso Facing
          </span>
        </header>

        {/* Realistic Hero Imagery Container */}
        <div className="flex-1 flex flex-col justify-center space-y-3 my-auto">
          <div className="rounded-xl overflow-hidden shadow-md border-2 border-current/30">
            <ChapterRealisticImage 
              chapterId={facingChapter.id} 
              illustrationType={facingChapter.illustrationType} 
              className="w-full h-44 sm:h-52 object-cover" 
            />
          </div>

          <div className="space-y-1.5 pt-1">
            <h3 className={`font-display text-base sm:text-lg font-black tracking-tight uppercase ${getHeadingColor().split(' ')[0]}`}>
              {facingChapter.title}
            </h3>
            {facingChapter.subtitle && (
              <p className={`font-serif italic text-xs sm:text-sm font-semibold ${getSubheadingColor()}`}>
                "{facingChapter.subtitle}"
              </p>
            )}
            {facingChapter.themeSummary && (
              <div className={`mt-2 p-3 rounded-xl border text-xs sm:text-sm leading-relaxed font-semibold shadow-xs ${
                isDark 
                  ? 'bg-[#2A2A20] border-[#555540] text-white' 
                  : 'bg-[#EDE8DC] border-black/30 text-black'
              }`}>
                <span className={`font-black block mb-1 uppercase tracking-wider text-[11px] ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  Core Spiritual Theme
                </span>
                <p className={isDark ? 'text-white' : 'text-black'}>
                  {facingChapter.themeSummary}
                </p>
              </div>
            )}
          </div>
        </div>

        <footer className="pt-2 mt-2 border-t border-current/15 flex items-center justify-between text-[11px]">
          <span className={`italic font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>1 Kings 13 Scriptural Treatise</span>
          <span className={`font-black ${isDark ? 'text-white' : 'text-black'}`}>Chapter begins on right page →</span>
        </footer>
      </article>
    );
  }

  return (
    <article 
      id={`page-sheet-${pageNum || 'chapter'}`}
      className={`relative h-full flex flex-col justify-between p-5 sm:p-7 md:p-8 select-text transition-colors duration-300 ${getThemeClass()} ${getFontFamilyClass()} ${getLineHeightClass()}`}
      style={{ fontSize: `${settings.fontSize}px` }}
    >
      {/* Top Header Bar */}
      <header className="flex items-center justify-between border-b border-current/20 pb-2 mb-3 text-xs uppercase tracking-widest">
        <div className="flex items-center space-x-2 truncate pr-4">
          <BookOpen className={`w-3.5 h-3.5 shrink-0 ${isDark ? 'text-white' : 'text-black'}`} />
          <span className={`truncate font-black tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
            {title.split(':')[0] || '1 Kings 13'}
          </span>
        </div>
        <div className="flex items-center space-x-3 shrink-0">
          {pageNum && onToggleBookmark && (
            <button
              id={`btn-bookmark-page-${pageNum}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(pageNum);
              }}
              title={isBookmarked ? "Remove bookmark" : "Add bookmark"}
              className={`p-1 rounded hover:bg-current/10 transition-colors cursor-pointer ${
                isBookmarked 
                  ? (isDark ? 'text-white opacity-100 font-bold' : 'text-black opacity-100 font-bold') 
                  : 'opacity-40 hover:opacity-100'
              }`}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
          )}
          {pageNum && settings.showPageNumbers && (
            <span className={`font-mono text-xs font-black ${isDark ? 'text-white' : 'text-black'}`}>
              {pageNum}
            </span>
          )}
        </div>
      </header>

      {/* Main Content Body */}
      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {/* Render Ultra-Realistic Theme Image if chapter starts here */}
        {illustrationType && (
          <div className="my-1.5">
            <BookIllustration type={illustrationType} chapterId={chapterId} className="w-full max-h-40 sm:max-h-44" />
          </div>
        )}

        {blocks.map((block, index) => {
          switch (block.type) {
            case 'heading':
              return (
                <div key={index} className="pt-1 pb-1">
                  <h2 className={`font-display text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase border-b pb-1.5 ${getHeadingColor()}`}>
                    {block.text}
                  </h2>
                </div>
              );

            case 'subheading':
              return (
                <h3 key={index} className={`font-serif-book italic text-sm sm:text-base font-bold -mt-0.5 ${getSubheadingColor()}`}>
                  {block.text}
                </h3>
              );

            // Quote & Prayer Box with explicit black font color on light themes and high-contrast bold author tags (Genesis 3 Warning, Benediction, etc.)
            case 'quote':
              return (
                <blockquote 
                  key={index} 
                  className={`my-3 p-3.5 sm:p-4 border-l-4 rounded-r-xl text-sm sm:text-base shadow-xs transition-colors ${
                    isDark 
                      ? 'bg-[#2A2A20] border-white text-white' 
                      : 'bg-[#ECE7DC] border-black text-black'
                  }`}
                >
                  <p className={`whitespace-pre-line leading-relaxed font-serif font-semibold italic ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    "{renderText(block.text)}"
                  </p>
                  {block.author && (
                    <footer className={`mt-2 pt-1.5 border-t text-xs uppercase tracking-wider not-italic font-black flex items-center justify-between ${
                      isDark ? 'border-white/30 text-white' : 'border-black/30 text-black'
                    }`}>
                      <span>— {block.author}</span>
                      <span className="text-[10px] font-mono opacity-80 uppercase tracking-widest font-bold">Scriptural Lesson</span>
                    </footer>
                  )}
                </blockquote>
              );

            // Scripture Box with explicit solid black text font color, high-contrast border and black reference badge on light themes
            case 'scripture':
              return (
                <div 
                  key={index} 
                  className={`my-3 p-3.5 sm:p-4 rounded-xl border-2 shadow-xs ${
                    isDark 
                      ? 'bg-[#28281E] border-[#555540] text-white' 
                      : 'bg-[#F2ECE0] border-black text-black'
                  }`}
                >
                  <div className="flex items-start space-x-2.5">
                    <BookOpen className={`w-5 h-5 shrink-0 mt-0.5 ${isDark ? 'text-white' : 'text-black'}`} />
                    <div className="flex-1">
                      <p className={`font-serif-book text-base sm:text-lg font-black leading-snug ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        {block.text}
                      </p>
                      {block.reference && (
                        <div className="mt-2 flex items-center justify-end">
                          <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs uppercase tracking-widest font-mono font-black shadow-xs ${
                            isDark 
                              ? 'bg-white text-black' 
                              : 'bg-black text-white'
                          }`}>
                            {block.reference}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );

            case 'bullet':
              return (
                <ul key={index} className="my-2 space-y-1.5 pl-2">
                  {block.items?.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className={`inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                        isDark ? 'bg-white' : 'bg-black'
                      }`} />
                      <span className={`flex-1 leading-relaxed font-semibold ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>{renderText(item)}</span>
                    </li>
                  ))}
                </ul>
              );

            // Callout Box with high contrast black text font color
            case 'callout':
              return (
                <div 
                  key={index} 
                  className={`my-3 p-3.5 rounded-xl border-2 text-xs sm:text-sm leading-relaxed font-semibold shadow-xs ${
                    isDark 
                      ? 'bg-[#2C2C22] border-[#555540] text-white' 
                      : 'bg-[#EDE7D9] border-black/40 text-black'
                  }`}
                >
                  <div className="flex items-start space-x-2.5">
                    <Sparkles className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-white' : 'text-black'}`} />
                    <div className={`flex-1 leading-relaxed ${isDark ? 'text-white' : 'text-black'}`}>
                      {renderText(block.text)}
                    </div>
                  </div>
                </div>
              );

            case 'divider':
              return (
                <div key={index} className="flex items-center justify-center my-3 opacity-60">
                  <div className={`h-px w-16 ${isDark ? 'bg-white' : 'bg-black'}`} />
                  <div className={`w-1.5 h-1.5 rotate-45 border mx-2 ${isDark ? 'border-white' : 'border-black'}`} />
                  <div className={`h-px w-16 ${isDark ? 'bg-white' : 'bg-black'}`} />
                </div>
              );

            case 'paragraph':
            default: {
              // Drop-cap for the very first paragraph after a heading
              const isFirstParagraph = index === 0 || (blocks[index - 1] && blocks[index - 1].type === 'heading');
              if (isFirstParagraph && block.text && block.text.length > 20) {
                const firstChar = block.text.charAt(0);
                const restOfText = block.text.slice(1);
                return (
                  <p key={index} className={`leading-relaxed font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                    <span className={`float-left text-3xl sm:text-4xl font-display font-black leading-none pr-2 pt-0.5 ${getDropCapColor()}`}>
                      {firstChar}
                    </span>
                    {renderText(restOfText)}
                  </p>
                );
              }
              return (
                <p key={index} className={`leading-relaxed font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                  {renderText(block.text)}
                </p>
              );
            }
          }
        })}
      </div>

      {/* Bottom Footer Page Stamp */}
      <footer className="pt-2 mt-2 border-t border-current/15 flex items-center justify-between text-[11px]">
        <span className={`italic font-medium ${isDark ? 'text-white/80' : 'text-black/80'}`}>
          {isLeftPage ? 'The Danger of Believing Lies' : '1 Kings 13 Scriptural Study'}
        </span>
        {pageNum && (
          <span className={`font-mono font-black ${isDark ? 'text-white' : 'text-black'}`}>
            Page {pageNum}
          </span>
        )}
      </footer>
    </article>
  );
};
