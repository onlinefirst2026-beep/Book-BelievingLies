import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  BookPage, 
  BookChapter, 
  ReaderSettings, 
  Bookmark 
} from '../types';
import { BOOK_CHAPTERS, PDF_PAGES } from '../data/bookData';
import { PageContent } from './PageContent';
import { audioEngine, narratorEngine } from '../utils/audioEngine';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Menu, 
  Sliders, 
  Search, 
  Maximize2, 
  Minimize2, 
  Volume2, 
  VolumeX, 
  Layers, 
  Play, 
  Pause, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookReaderProps {
  initialPage?: number;
  initialChapterId?: string;
  settings: ReaderSettings;
  bookmarks: Bookmark[];
  highlights: Highlight[];
  onPageChange: (pageNumber: number) => void;
  onToggleBookmark: (pageNumber: number) => void;
  onOpenTOC: () => void;
  onOpenSettings: () => void;
  onOpenSearch: () => void;
  onReturnHome: () => void;
}

export const BookReader: React.FC<BookReaderProps> = ({
  initialPage = 1,
  initialChapterId,
  settings,
  bookmarks,
  onPageChange,
  onToggleBookmark,
  onOpenTOC,
  onOpenSettings,
  onOpenSearch,
  onReturnHome,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [rulerY, setRulerY] = useState<number>(0);
  const readerContainerRef = useRef<HTMLDivElement>(null);

  // Set initial chapter target if specified
  useEffect(() => {
    if (initialChapterId) {
      const targetCh = BOOK_CHAPTERS.find(c => c.id === initialChapterId);
      if (targetCh && targetCh.pdfPages[0]) {
        setCurrentPage(targetCh.pdfPages[0]);
      }
    }
  }, [initialChapterId]);

  // Sync current page with parent
  useEffect(() => {
    onPageChange(currentPage);
    // Trigger celebration if reached page 29
    if (currentPage === PDF_PAGES.length) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#d97706', '#fbbf24', '#fef08a'],
        });
      } catch {
        // ignore
      }
    }
  }, [currentPage, onPageChange]);

  // Handle narrator state listener
  useEffect(() => {
    narratorEngine.onStateChange = (speaking) => {
      setIsSpeaking(speaking);
    };
    return () => {
      narratorEngine.stop();
    };
  }, []);

  const totalPages = PDF_PAGES.length; // 29

  // Turn to Next Page
  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages && !isFlipping) {
      if (settings.soundEffects) {
        audioEngine.playPageFlip();
      }
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        // Advance by 2 in spread layout on desktop, or 1 in single layout
        const step = settings.layout === 'spread' && window.innerWidth >= 1024 ? 2 : 1;
        setCurrentPage((prev) => Math.min(totalPages, prev + step));
        setIsFlipping(false);
      }, 200);
    }
  }, [currentPage, totalPages, isFlipping, settings.soundEffects, settings.layout]);

  // Turn to Prev Page
  const goToPrevPage = useCallback(() => {
    if (currentPage > 1 && !isFlipping) {
      if (settings.soundEffects) {
        audioEngine.playPageFlip();
      }
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        const step = settings.layout === 'spread' && window.innerWidth >= 1024 ? 2 : 1;
        setCurrentPage((prev) => Math.max(1, prev - step));
        setIsFlipping(false);
      }, 200);
    }
  }, [currentPage, isFlipping, settings.soundEffects, settings.layout]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevPage();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          document.exitFullscreen?.();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage, isFullscreen]);

  // Handle Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      readerContainerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  // Text-to-Speech handle
  const handleToggleNarrator = () => {
    if (isSpeaking) {
      narratorEngine.stop();
      setIsSpeaking(false);
    } else {
      const pageData = PDF_PAGES.find((p) => p.pageNumber === currentPage);
      if (pageData) {
        let textToRead = `${pageData.title}. `;
        pageData.blocks.forEach((b) => {
          if (b.text) textToRead += b.text + ' ';
          if (b.items) textToRead += b.items.join('. ') + ' ';
        });
        narratorEngine.speak(textToRead);
        setIsSpeaking(true);
      }
    }
  };

  // Active chapter
  const currentChapter = BOOK_CHAPTERS.find(c => c.pdfPages.includes(currentPage)) || BOOK_CHAPTERS[0];

  // SPREAD CALCULATION - Ensuring New Chapters ALWAYS Start on the RIGHT Page (Recto)
  // In classical typography, Recto (Right page) is where new chapters open.
  // If `currentPage` is a chapter start or odd page, it is placed on the Right Page!
  const isTargetChapterStart = PDF_PAGES.find(p => p.pageNumber === currentPage)?.isChapterStart;
  
  let leftPageNumber: number;
  let rightPageNumber: number;
  let isLeftFacingThemeSpread = false;

  if (currentPage === 1) {
    // Page 1 starts on the Right Page; Left is the Title/Theme Facing spread
    leftPageNumber = 0;
    rightPageNumber = 1;
    isLeftFacingThemeSpread = true;
  } else if (isTargetChapterStart || currentPage % 2 === 1) {
    // New chapter or odd page: Starts on the Right Page (Recto)
    rightPageNumber = currentPage;
    leftPageNumber = currentPage - 1;
    if (isTargetChapterStart && leftPageNumber <= 0) {
      isLeftFacingThemeSpread = true;
    }
  } else {
    // Even page: Left Page is even, Right Page is odd
    leftPageNumber = currentPage;
    rightPageNumber = currentPage + 1;
  }

  const leftPageData = PDF_PAGES.find((p) => p.pageNumber === leftPageNumber);
  const rightPageData = PDF_PAGES.find((p) => p.pageNumber === rightPageNumber);
  const singlePageData = PDF_PAGES.find((p) => p.pageNumber === currentPage);

  const isLeftBookmarked = bookmarks.some((b) => b.pageNumber === leftPageNumber);
  const isRightBookmarked = bookmarks.some((b) => b.pageNumber === rightPageNumber);
  const isSingleBookmarked = bookmarks.some((b) => b.pageNumber === currentPage);

  // Chapter associated with right page (for theme facing spread)
  const rightChapter = BOOK_CHAPTERS.find(c => rightPageData && c.pdfPages.includes(rightPageData.pageNumber)) || currentChapter;

  return (
    <div 
      ref={readerContainerRef}
      id="book-reader-container"
      className="relative min-h-[92vh] flex flex-col justify-between bg-[#F5F2ED] text-[#2D2D2A] select-none overflow-hidden font-sans"
      onMouseMove={(e) => {
        if (settings.readingRuler) {
          const rect = e.currentTarget.getBoundingClientRect();
          setRulerY(e.clientY - rect.top);
        }
      }}
    >
      {/* Optional Focus Reading Ruler */}
      {settings.readingRuler && (
        <div 
          className="pointer-events-none absolute left-0 right-0 h-10 bg-[#5A5A40]/10 border-y border-[#5A5A40]/30 z-30 transition-all duration-75 ease-out shadow-[0_0_15px_rgba(90,90,64,0.1)]"
          style={{ top: `${rulerY - 20}px` }}
        />
      )}

      {/* Top Header Navigation & Action Bar with Solid Readable Typography */}
      <header 
        id="reader-top-navbar"
        className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6 py-3 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E1D8] shadow-xs text-[#2D2D2A]"
      >
        {/* Left: Home & TOC */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            id="btn-return-home"
            onClick={onReturnHome}
            title="Return to Cover Page"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F2EFE9] text-[#3D3D2C] border border-[#E5E1D8] text-xs font-bold transition-all cursor-pointer shadow-2xs"
          >
            <Home className="w-4 h-4 text-[#5A5A40]" />
            <span className="hidden sm:inline">Cover</span>
          </button>

          <button
            id="btn-open-toc-nav"
            onClick={onOpenTOC}
            title="Open Table of Contents"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#F2EFE9] text-[#3D3D2C] border border-[#E5E1D8] text-xs font-bold transition-all cursor-pointer shadow-2xs"
          >
            <Menu className="w-4 h-4 text-[#5A5A40]" />
            <span className="hidden md:inline">Chapters & Pages</span>
          </button>
        </div>

        {/* Center: Current Chapter Title in Solid Crisp Contrast */}
        <div className="hidden lg:flex flex-col items-center text-center max-w-md truncate px-2">
          <span className="text-[10px] uppercase tracking-widest text-[#5A5A40] font-extrabold">
            The Danger of Believing Lies
          </span>
          <span className="text-xs text-[#1C1C18] truncate font-serif font-bold">
            {currentChapter.title}
          </span>
        </div>

        {/* Right: Search, Narrator, Settings, Fullscreen */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* In-Book Search */}
          <button
            id="btn-search-book"
            onClick={onOpenSearch}
            title="Search Text in Book"
            className="p-2 rounded-xl bg-white hover:bg-[#F2EFE9] text-[#3D3D2C] border border-[#E5E1D8] transition-colors cursor-pointer shadow-2xs"
          >
            <Search className="w-4 h-4 text-[#5A5A40]" />
          </button>

          {/* Text to Speech Narrator */}
          <button
            id="btn-toggle-narration"
            onClick={handleToggleNarrator}
            title={isSpeaking ? "Stop Reading Aloud" : "Read Page Aloud"}
            className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer shadow-2xs ${isSpeaking ? 'bg-[#5A5A40] text-white border-[#5A5A40] animate-pulse' : 'bg-white text-[#3D3D2C] border-[#E5E1D8] hover:bg-[#F2EFE9]'}`}
          >
            {isSpeaking ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#5A5A40]" />}
            <span className="hidden sm:inline">{isSpeaking ? 'Pause' : 'Listen'}</span>
          </button>

          {/* Settings Customization Modal */}
          <button
            id="btn-open-settings-nav"
            onClick={onOpenSettings}
            title="Reading Settings & Customization"
            className="p-2 rounded-xl bg-white hover:bg-[#F2EFE9] text-[#3D3D2C] border border-[#E5E1D8] transition-colors cursor-pointer shadow-2xs"
          >
            <Sliders className="w-4 h-4 text-[#5A5A40]" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            id="btn-toggle-fullscreen"
            onClick={toggleFullscreen}
            title="Toggle Fullscreen"
            className="hidden sm:inline-flex p-2 rounded-xl bg-white hover:bg-[#F2EFE9] text-[#3D3D2C] border border-[#E5E1D8] transition-colors cursor-pointer shadow-2xs"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4 text-[#5A5A40]" />}
          </button>
        </div>
      </header>

      {/* Main Flipbook Arena */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-6 md:p-8 perspective-1500">
        {/* Left Page Turn Button (Desktop) */}
        <button
          id="btn-prev-page-side"
          onClick={goToPrevPage}
          disabled={currentPage <= 1 || isFlipping}
          title="Previous Page (Left Arrow)"
          className={`absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-white/90 hover:bg-[#5A5A40] hover:text-white text-[#3D3D2C] border border-[#E5E1D8] backdrop-blur-md shadow-lg transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer ${currentPage <= 1 ? 'opacity-0' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Page Turn Button (Desktop) */}
        <button
          id="btn-next-page-side"
          onClick={goToNextPage}
          disabled={currentPage >= totalPages || isFlipping}
          title="Next Page (Right Arrow or Space)"
          className={`absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-white/90 hover:bg-[#5A5A40] hover:text-white text-[#3D3D2C] border border-[#E5E1D8] backdrop-blur-md shadow-lg transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer ${currentPage >= totalPages ? 'opacity-0' : 'opacity-100'}`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Book Container with 3D Spine and Page Spread */}
        {settings.layout === 'spread' ? (
          <div 
            id="book-spread-wrapper"
            className={`relative w-full max-w-6xl xl:max-w-7xl h-[82vh] min-h-[580px] flex rounded-2xl shadow-[0_20px_50px_rgba(68,68,51,0.18)] border border-[#E5E1D8] overflow-hidden transition-all duration-300 ${isFlipping ? 'scale-[0.99]' : 'scale-100'}`}
          >
            {/* Left Page (Verso) */}
            <div className="flex-1 h-full relative overflow-hidden paper-shadow-left">
              {leftPageData ? (
                <PageContent
                  page={leftPageData}
                  settings={settings}
                  isLeftPage={true}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={isLeftBookmarked}
                />
              ) : (
                /* Facing Chapter Spread Artwork on Left Page when chapter begins on Right */
                <PageContent
                  settings={settings}
                  isLeftPage={true}
                  isFacingSpread={true}
                  facingChapter={rightChapter}
                />
              )}
            </div>

            {/* Central Book Spine Crease & Shadow in Dark Olive Tone */}
            <div className="w-5 sm:w-6 relative shrink-0 paper-spine-crease pointer-events-none z-20 flex items-center justify-center">
              <div className="w-px h-full bg-[#444433]/30" />
            </div>

            {/* Right Page (Recto) - Where New Chapters Start */}
            <div className="flex-1 h-full relative overflow-hidden paper-shadow-right">
              {rightPageData ? (
                <PageContent
                  page={rightPageData}
                  chapter={rightPageData.isChapterStart ? rightChapter : undefined}
                  settings={settings}
                  isRightPage={true}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={isRightBookmarked}
                />
              ) : (
                <div className="h-full bg-[#FAF8F5] flex items-center justify-center text-[#77726A] text-sm font-serif">
                  End of Treatise
                </div>
              )}
            </div>
          </div>
        ) : settings.layout === 'scroll' ? (
          /* Continuous Scroll Layout */
          <div 
            id="book-scroll-wrapper"
            className="w-full max-w-3xl h-[82vh] overflow-y-auto space-y-6 pr-2 rounded-2xl p-2"
          >
            {PDF_PAGES.map((pg) => (
              <div key={pg.pageNumber} className="rounded-2xl shadow-xl border border-[#E5E1D8] overflow-hidden">
                <PageContent
                  page={pg}
                  settings={settings}
                  onToggleBookmark={onToggleBookmark}
                  isBookmarked={bookmarks.some(b => b.pageNumber === pg.pageNumber)}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Single Page Focused Flip Layout */
          <div 
            id="book-single-wrapper"
            className={`relative w-full max-w-2xl xl:max-w-3xl h-[82vh] min-h-[580px] rounded-2xl shadow-[0_20px_50px_rgba(68,68,51,0.18)] border border-[#E5E1D8] overflow-hidden transition-all duration-300 ${isFlipping ? 'scale-[0.98]' : 'scale-100'}`}
          >
            {singlePageData && (
              <PageContent
                page={singlePageData}
                settings={settings}
                onToggleBookmark={onToggleBookmark}
                isBookmarked={isSingleBookmarked}
              />
            )}
          </div>
        )}
      </main>

      {/* Bottom Page Scrubber & Navigation Footer with High Contrast Colors */}
      <footer 
        id="reader-bottom-navbar"
        className="sticky bottom-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-[#E5E1D8] px-4 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#2D2D2A]"
      >
        {/* Left: Previous Page Button */}
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-start">
          <button
            id="btn-prev-page"
            onClick={goToPrevPage}
            disabled={currentPage <= 1}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white hover:bg-[#F2EFE9] text-[#3D3D2C] border border-[#E5E1D8] text-xs font-bold transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4 text-[#5A5A40]" />
            <span>Previous</span>
          </button>

          {/* Quick Page Scrubber slider */}
          <div className="flex items-center space-x-3 flex-1 sm:w-64 max-w-xs px-2">
            <input
              type="range"
              min={1}
              max={totalPages}
              value={currentPage}
              onChange={(e) => {
                const target = Number(e.target.value);
                setCurrentPage(target);
                if (settings.soundEffects) audioEngine.playPageFlip();
              }}
              className="w-full accent-[#5A5A40] cursor-pointer h-1.5 bg-[#E5E1D8] rounded-lg"
            />
            <span className="font-mono text-xs text-[#1C1C18] font-bold whitespace-nowrap">
              {currentPage} / {totalPages}
            </span>
          </div>

          {/* Right: Next Page Button */}
          <button
            id="btn-next-page"
            onClick={goToNextPage}
            disabled={currentPage >= totalPages}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#5A5A40] hover:bg-[#484833] text-white font-bold text-xs shadow-md shadow-[#5A5A40]/20 transition-all disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Reading Progress Percentage & Chapter Selector in Solid Tone */}
        <div className="flex items-center space-x-4 text-xs text-[#555555]">
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-[#3D3D2C]">
              {Math.round((currentPage / totalPages) * 100)}% Read
            </span>
          </div>

          <div className="h-4 w-px bg-[#E5E1D8] hidden sm:block" />

          <button
            onClick={onOpenTOC}
            className="text-[#3D3D2C] hover:text-[#5A5A40] transition-colors flex items-center space-x-1 cursor-pointer font-bold"
          >
            <Layers className="w-3.5 h-3.5 text-[#5A5A40]" />
            <span className="truncate max-w-[140px] sm:max-w-[200px]">
              {currentChapter.title.split(':')[0]}
            </span>
          </button>
        </div>
      </footer>
    </div>
  );
};
