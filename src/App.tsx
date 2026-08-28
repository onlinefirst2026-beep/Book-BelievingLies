/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BookCover } from './components/BookCover';
import { BookReader } from './components/BookReader';
import { TableOfContents } from './components/TableOfContents';
import { SettingsModal } from './components/SettingsModal';
import { SearchBarModal } from './components/SearchBar';
import { ReaderSettings, Bookmark, BookChapter } from './types';
import { PDF_PAGES, BOOK_CHAPTERS } from './data/bookData';
import { audioEngine } from './utils/audioEngine';

const DEFAULT_SETTINGS: ReaderSettings = {
  theme: 'natural',
  fontFamily: 'merriweather',
  fontSize: 17,
  lineHeight: 'relaxed',
  layout: 'spread',
  soundEffects: true,
  ambientSound: 'none',
  ambientVolume: 0.35,
  bionicReading: false,
  readingRuler: false,
  showPageNumbers: true,
  brightness: 100,
  autoFlip: false,
  autoFlipSpeed: 10,
};

export default function App() {
  const [viewMode, setViewMode] = useState<'cover' | 'reader'>('cover');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isTOC沢山Open, setIsTOCOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Persistent settings
  const [settings, setSettings] = useState<ReaderSettings>(() => {
    try {
      const saved = localStorage.getItem('danger_lies_settings');
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Persistent bookmarks
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    try {
      const saved = localStorage.getItem('danger_lies_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persistent last read page
  const [savedPage, setSavedPage] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('danger_lies_last_page');
      return saved ? Number(saved) : 1;
    } catch {
      return 1;
    }
  });

  // Save settings on update
  const handleUpdateSettings = (newSettings: Partial<ReaderSettings>) => {
    setSettings(prev => {
      const updated = { ...prev, ...newSettings };
      try {
        localStorage.setItem('danger_lies_settings', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Track page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSavedPage(page);
    try {
      localStorage.setItem('danger_lies_last_page', page.toString());
    } catch {
      // ignore
    }
  };

  // Toggle Bookmark
  const handleToggleBookmark = (pageNumber: number) => {
    setBookmarks(prev => {
      const existing = prev.find(b => b.pageNumber === pageNumber);
      let nextBookmarks: Bookmark[];
      if (existing) {
        nextBookmarks = prev.filter(b => b.pageNumber !== pageNumber);
      } else {
        const pageData = PDF_PAGES.find(p => p.pageNumber === pageNumber);
        const chapter = BOOK_CHAPTERS.find(c => c.pdfPages.includes(pageNumber));
        const snippet = pageData?.blocks.find(b => b.type === 'paragraph' || b.type === 'quote')?.text?.slice(0, 80) || 'Bookmark on page ' + pageNumber;
        
        const newBm: Bookmark = {
          id: `bm-${Date.now()}`,
          pageNumber,
          chapterTitle: chapter?.title || pageData?.title || `Page ${pageNumber}`,
          snippet,
          createdAt: Date.now()
        };
        nextBookmarks = [newBm, ...prev];
      }

      try {
        localStorage.setItem('danger_lies_bookmarks', JSON.stringify(nextBookmarks));
      } catch {
        // ignore
      }
      return nextBookmarks;
    });
  };

  // Remove Bookmark
  const handleRemoveBookmark = (id: string) => {
    setBookmarks(prev => {
      const next = prev.filter(b => b.id !== id);
      try {
        localStorage.setItem('danger_lies_bookmarks', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Start Reading from Page 1 / Intro
  const handleStartReading = () => {
    if (settings.soundEffects) {
      audioEngine.playPageFlip();
    }
    setCurrentPage(1);
    setViewMode('reader');
  };

  // Resume reading from saved page
  const handleResumeReading = (page: number) => {
    if (settings.soundEffects) {
      audioEngine.playPageFlip();
    }
    setCurrentPage(page);
    setViewMode('reader');
  };

  // Handle select chapter
  const handleSelectChapter = (chapter: BookChapter) => {
    const targetPage = chapter.pdfPages[0] || 1;
    setCurrentPage(targetPage);
    setViewMode('reader');
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#333333] flex flex-col justify-between selection:bg-[#5A5A40]/20 selection:text-[#5A5A40]">
      {viewMode === 'cover' ? (
        <BookCover
          onStartReading={handleStartReading}
          onResumeReading={savedPage > 1 ? handleResumeReading : undefined}
          savedPage={savedPage}
          onOpenTOC={() => setIsTOCOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
        />
      ) : (
        <BookReader
          initialPage={currentPage}
          settings={settings}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
          onOpenTOC={() => setIsTOCOpen(true)}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onReturnHome={() => setViewMode('cover')}
          onPageChange={handlePageChange}
        />
      )}

      {/* Navigation / Table of Contents Modal */}
      <TableOfContents
        isOpen={isTOC沢山Open}
        onClose={() => setIsTOCOpen(false)}
        currentPage={currentPage}
        onSelectPage={(page) => {
          handlePageChange(page);
          setViewMode('reader');
        }}
        onSelectChapter={handleSelectChapter}
        bookmarks={bookmarks}
        onRemoveBookmark={handleRemoveBookmark}
      />

      {/* Customization Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
      />

      {/* Search Bar Modal */}
      <SearchBarModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onJumpToPage={(page) => {
          handlePageChange(page);
          setViewMode('reader');
        }}
      />
    </div>
  );
}
