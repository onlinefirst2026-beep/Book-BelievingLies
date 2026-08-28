import React, { useState } from 'react';
import { BookChapter, Bookmark } from '../types';
import { BOOK_CHAPTERS, PDF_PAGES } from '../data/bookData';
import { X, Search, Bookmark as BookmarkIcon, BookOpen, Layers, CheckCircle2, ChevronRight, Hash } from 'lucide-react';

interface TableOfContentsProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: number;
  currentChapterId?: string;
  onSelectPage: (pageNumber: number) => void;
  onSelectChapter: (chapter: BookChapter) => void;
  bookmarks: Bookmark[];
  onRemoveBookmark: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  isOpen,
  onClose,
  currentPage,
  onSelectPage,
  onSelectChapter,
  bookmarks,
  onRemoveBookmark,
}) => {
  const [activeTab, setActiveTab] = useState<'chapters' | 'pages' | 'bookmarks'>('chapters');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  if (!isOpen) return null;

  // Filter chapters
  const filteredChapters = BOOK_CHAPTERS.filter(chapter => {
    const matchesSearch = 
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (chapter.subtitle && chapter.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (chapter.themeSummary && chapter.themeSummary.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedFilter === 'act-1') {
      return chapter.id === 'intro' || (chapter.chapterNumber && chapter.chapterNumber <= 5);
    }
    if (selectedFilter === 'act-2') {
      return chapter.chapterNumber && chapter.chapterNumber >= 6 && chapter.chapterNumber <= 11;
    }
    if (selectedFilter === 'act-3') {
      return chapter.chapterNumber && chapter.chapterNumber >= 12 && chapter.chapterNumber <= 14;
    }
    if (selectedFilter === 'act-4') {
      return chapter.chapterNumber && chapter.chapterNumber >= 15 && chapter.chapterNumber <= 20;
    }
    if (selectedFilter === 'act-5') {
      return chapter.chapterNumber && chapter.chapterNumber >= 21 && chapter.chapterNumber <= 27;
    }
    if (selectedFilter === 'act-6') {
      return (chapter.chapterNumber && chapter.chapterNumber >= 28) || chapter.id === 'conclusion' || chapter.id === 'prayer';
    }

    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div 
        id="toc-modal-container"
        className="relative w-full max-w-2xl max-h-[88vh] bg-[#FAF8F5] border border-[#E5E1D8] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#333333]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E1D8] bg-[#F2EFE9]/80">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-[#E8E4DD] text-[#5A5A40] border border-[#D8D3C8]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#2D2D2A] tracking-wide">
                Table of Contents & Navigation
              </h2>
              <p className="text-xs text-[#77726A]">
                Jump directly to any chapter, page, or saved bookmark
              </p>
            </div>
          </div>
          <button
            id="btn-close-toc"
            onClick={onClose}
            className="p-2 rounded-xl text-[#77726A] hover:text-[#2D2D2A] hover:bg-[#E8E4DD] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E5E1D8] px-6 pt-2 bg-[#FAF8F5]">
          <button
            id="tab-toc-chapters"
            onClick={() => setActiveTab('chapters')}
            className={`pb-3 px-4 text-sm font-medium border-b-2 transition-colors cursor-pointer flex items-center space-x-2 ${activeTab === 'chapters' ? 'border-[#5A5A40] text-[#5A5A40] font-bold' : 'border-transparent text-[#77726A] hover:text-[#333333]'}`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Chapters ({BOOK_CHAPTERS.length})</span>
          </button>
          <button
            id="tab-toc-pages"
            onClick={() => setActiveTab('pages')}
            className={`pb-3 px-4 text-sm font-medium border-b-2 transition-colors cursor-pointer flex items-center space-x-2 ${activeTab === 'pages' ? 'border-[#5A5A40] text-[#5A5A40] font-bold' : 'border-transparent text-[#77726A] hover:text-[#333333]'}`}
          >
            <Layers className="w-4 h-4" />
            <span>Pages (1 - {PDF_PAGES.length})</span>
          </button>
          <button
            id="tab-toc-bookmarks"
            onClick={() => setActiveTab('bookmarks')}
            className={`pb-3 px-4 text-sm font-medium border-b-2 transition-colors cursor-pointer flex items-center space-x-2 ${activeTab === 'bookmarks' ? 'border-[#5A5A40] text-[#5A5A40] font-bold' : 'border-transparent text-[#77726A] hover:text-[#333333]'}`}
          >
            <BookmarkIcon className="w-4 h-4" />
            <span>Bookmarks ({bookmarks.length})</span>
          </button>
        </div>

        {/* Chapters View */}
        {activeTab === 'chapters' && (
          <div className="flex flex-col flex-1 overflow-hidden p-6 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99948D]" />
              <input
                type="text"
                placeholder="Search chapters, themes, or lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#E5E1D8] text-[#333333] placeholder:text-[#99948D] text-sm focus:outline-none focus:border-[#5A5A40] shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#99948D] hover:text-[#333333]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Act Quick Filter Chips */}
            <div className="flex flex-wrap gap-1.5 pb-1">
              {[
                { id: 'all', label: 'All Chapters' },
                { id: 'act-1', label: '1. Bethel Altar' },
                { id: 'act-2', label: '2. The Lie' },
                { id: 'act-3', label: '3. Lion on Road' },
                { id: 'act-4', label: '4. Digital Age' },
                { id: 'act-5', label: '5. Discernment' },
                { id: 'act-6', label: '6. Safeguards' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFilter(f.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-medium transition-colors cursor-pointer ${selectedFilter === f.id ? 'bg-[#5A5A40] text-white shadow-2xs font-semibold' : 'bg-white text-[#555555] hover:bg-[#F2EFE9] hover:text-[#2D2D2A] border border-[#E5E1D8]'}`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Chapter List */}
            <div className="flex-1 overflow-y-auto space-y-2 pr-1 divide-y divide-[#E5E1D8]/60">
              {filteredChapters.map((chapter) => {
                const targetPage = chapter.pdfPages[0] || 1;
                const isCurrent = currentPage >= chapter.pdfPages[0] && currentPage <= chapter.pdfPages[chapter.pdfPages.length - 1];

                return (
                  <div
                    key={chapter.id}
                    onClick={() => {
                      onSelectChapter(chapter);
                      onSelectPage(targetPage);
                      onClose();
                    }}
                    className={`pt-2.5 pb-2.5 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-between group ${isCurrent ? 'bg-[#E8E4DD] border border-[#D8D3C8]' : 'hover:bg-white border border-transparent hover:border-[#E5E1D8]'}`}
                  >
                    <div className="flex items-start space-x-3 flex-1 min-w-0 pr-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${isCurrent ? 'bg-[#5A5A40] text-white' : 'bg-[#E8E4DD] text-[#5A5A40] group-hover:bg-[#5A5A40] group-hover:text-white'}`}>
                        {chapter.chapterNumber ?? (chapter.id === 'intro' ? 'I' : chapter.id === 'conclusion' ? 'C' : 'P')}
                      </div>
                      <div className="min-w-0">
                        <div className={`text-sm font-medium tracking-tight ${isCurrent ? 'text-[#2D2D2A] font-bold' : 'text-[#333333] group-hover:text-[#2D2D2A]'}`}>
                          {chapter.title}
                        </div>
                        {chapter.subtitle && (
                          <div className="text-xs text-[#77726A] truncate mt-0.5">
                            {chapter.subtitle}
                          </div>
                        )}
                        <div className="text-[11px] text-[#5A5A40]/80 font-mono mt-1 font-medium">
                          Original PDF Page {chapter.pdfPages.join(', ')}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 shrink-0">
                      {isCurrent && (
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#5A5A40]/15 text-[#5A5A40] font-semibold flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Reading</span>
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-[#99948D] group-hover:text-[#5A5A40] transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Pages Grid View (1 to 39) */}
        {activeTab === 'pages' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <p className="text-xs text-[#77726A]">
              Select any page from the {PDF_PAGES.length}-page treatise:
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
              {PDF_PAGES.map((p) => {
                const isCurrent = currentPage === p.pageNumber;
                return (
                  <button
                    key={p.pageNumber}
                    onClick={() => {
                      onSelectPage(p.pageNumber);
                      onClose();
                    }}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all cursor-pointer ${isCurrent ? 'bg-[#5A5A40] text-white border-[#5A5A40] font-bold shadow-md shadow-[#5A5A40]/25' : 'bg-white hover:bg-[#F2EFE9] text-[#333333] border-[#E5E1D8]'}`}
                  >
                    <Hash className="w-3.5 h-3.5 opacity-60 mb-1" />
                    <span className="text-base font-bold">{p.pageNumber}</span>
                    <span className="text-[9px] opacity-70 truncate max-w-full text-center px-1">
                      {p.title.split('&')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Bookmarks Tab */}
        {activeTab === 'bookmarks' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-3">
            {bookmarks.length === 0 ? (
              <div className="text-center py-12 space-y-2">
                <BookmarkIcon className="w-10 h-10 text-[#99948D] mx-auto" />
                <p className="text-sm font-semibold text-[#2D2D2A]">No bookmarks saved yet</p>
                <p className="text-xs text-[#77726A] max-w-xs mx-auto">
                  Click the bookmark icon at the top of any page while reading to save your spot here.
                </p>
              </div>
            ) : (
              bookmarks.map((bm) => (
                <div
                  key={bm.id}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E5E1D8] hover:border-[#5A5A40] transition-all cursor-pointer group shadow-2xs"
                  onClick={() => {
                    onSelectPage(bm.pageNumber);
                    onClose();
                  }}
                >
                  <div className="flex items-start space-x-3 min-w-0 pr-3">
                    <BookmarkIcon className="w-4 h-4 text-[#5A5A40] mt-1 shrink-0 fill-[#5A5A40]" />
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-[#2D2D2A] group-hover:text-[#5A5A40]">
                        Page {bm.pageNumber} • {bm.chapterTitle}
                      </div>
                      <div className="text-xs text-[#555555] line-clamp-1 mt-0.5">
                        {bm.snippet}
                      </div>
                      <div className="text-[10px] text-[#99948D] mt-1">
                        Saved {new Date(bm.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveBookmark(bm.id);
                    }}
                    className="p-2 rounded-lg text-[#99948D] hover:text-red-600 hover:bg-red-50 transition-colors"
                    title="Delete Bookmark"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
