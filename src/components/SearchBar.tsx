import React, { useState, useMemo } from 'react';
import { PDF_PAGES, BOOK_CHAPTERS } from '../data/bookData';
import { SearchResult } from '../types';
import { Search, X, ChevronRight, BookOpen } from 'lucide-react';

interface SearchBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToPage: (pageNumber: number) => void;
}

export const SearchBarModal: React.FC<SearchBarModalProps> = ({
  isOpen,
  onClose,
  onJumpToPage,
}) => {
  const [query, setQuery] = useState('');

  const results: SearchResult[] = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];

    const lowerQuery = query.toLowerCase();
    const matches: SearchResult[] = [];

    PDF_PAGES.forEach((page) => {
      // search inside page blocks
      page.blocks.forEach((block) => {
        let blockText = '';
        if (block.text) blockText += block.text;
        if (block.items) blockText += ' ' + block.items.join(' ');

        const matchIdx = blockText.toLowerCase().indexOf(lowerQuery);
        if (matchIdx !== -1) {
          // Extract snippet with 50 chars before and after
          const start = Math.max(0, matchIdx - 40);
          const end = Math.min(blockText.length, matchIdx + query.length + 40);
          let snippet = blockText.slice(start, end);
          if (start > 0) snippet = '...' + snippet;
          if (end < blockText.length) snippet = snippet + '...';

          // find corresponding chapter title
          const ch = BOOK_CHAPTERS.find(c => c.id === page.chapterId);
          const chapterTitle = ch ? ch.title : page.title;

          matches.push({
            pageNumber: page.pageNumber,
            chapterId: page.chapterId,
            chapterTitle,
            snippet,
            matchIndex: matchIdx,
          });
        }
      });
    });

    return matches.slice(0, 25); // cap at 25 results
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div 
        id="search-modal-container"
        className="relative w-full max-w-xl max-h-[80vh] bg-[#FAF8F5] border border-[#E5E1D8] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-[#333333]"
      >
        {/* Search Input Box */}
        <div className="p-4 border-b border-[#E5E1D8] flex items-center space-x-3 bg-[#F2EFE9]/80">
          <Search className="w-5 h-5 text-[#5A5A40] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search words in book (e.g. altar, lion, discernment, Bethel, compromise)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-[#333333] placeholder:text-[#99948D] text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-[#77726A] hover:text-[#2D2D2A]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs text-[#77726A] hover:text-[#2D2D2A] px-2.5 py-1 bg-white border border-[#E5E1D8] rounded-lg shadow-2xs cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {query.trim().length >= 2 ? (
            results.length === 0 ? (
              <div className="text-center py-12 text-[#77726A] text-sm">
                No matching occurrences found for "{query}".
              </div>
            ) : (
              <div className="space-y-2">
                <div className="text-xs text-[#5A5A40] font-bold px-2">
                  Found {results.length} occurrences in text:
                </div>
                {results.map((res, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      onJumpToPage(res.pageNumber);
                      onClose();
                    }}
                    className="p-3.5 rounded-xl bg-white border border-[#E5E1D8] hover:border-[#5A5A40] hover:bg-[#FAF8F5] transition-all cursor-pointer flex items-center justify-between group shadow-2xs"
                  >
                    <div className="min-w-0 pr-3">
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#2D2D2A] group-hover:text-[#5A5A40]">
                        <BookOpen className="w-3.5 h-3.5 text-[#5A5A40]" />
                        <span>Page {res.pageNumber} • {res.chapterTitle}</span>
                      </div>
                      <p className="text-xs text-[#555555] mt-1.5 italic leading-relaxed">
                        {res.snippet}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#99948D] group-hover:text-[#5A5A40] shrink-0" />
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-10 text-[#99948D] text-xs">
              Type at least 2 characters to search across all 33 chapters and pages.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
