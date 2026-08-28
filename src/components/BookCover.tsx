import React from 'react';
import { BookOpen, Bookmark, Clock, ArrowRight, Sparkles, ScrollText, Layers } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookData';
import bookCoverRealisticImg from '../assets/images/book_cover_realistic_1787927587327.jpg';

interface BookCoverProps {
  onStartReading: () => void;
  onResumeReading?: (page: number) => void;
  savedPage?: number;
  onOpenTOC: () => void;
  onOpenSettings: () => void;
}

export const BookCover: React.FC<BookCoverProps> = ({
  onStartReading,
  onResumeReading,
  savedPage = 1,
  onOpenTOC,
}) => {
  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center p-3 sm:p-6 md:p-8 bg-gradient-to-b from-[#EFEAE1] via-[#E8E2D5] to-[#DFD7C7]">
      {/* Background ambient lighting and subtle study vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FAF8F5]/60 via-transparent to-[#2E2E1F]/15 pointer-events-none" />

      {/* Main 3D Book Presentation Container */}
      <div className="relative w-full max-w-4xl flex flex-col lg:flex-row items-center gap-8 z-10">
        
        {/* Realistic 3D Hardcover Book Object */}
        <div 
          id="book-hardcover"
          className="group relative w-full max-w-sm sm:max-w-md md:max-w-lg aspect-[3/4.2] rounded-r-2xl rounded-l-md shadow-[0_30px_70px_-15px_rgba(30,30,20,0.5),0_15px_30px_-10px_rgba(0,0,0,0.4)] border-r-4 border-b-4 border-[#1E1E14] overflow-hidden transition-transform duration-500 hover:scale-[1.01] flex flex-col justify-between text-[#FAF8F5] select-none"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(20,20,15,0.92) 0%, rgba(35,35,26,0.88) 50%, rgba(20,20,15,0.95) 100%)`,
          }}
        >
          {/* Authentic Book Spine 3D Crease & Shadow */}
          <div className="absolute left-0 top-0 bottom-0 w-7 sm:w-9 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-30 border-r border-[#D4AF37]/30" />
          <div className="absolute left-2.5 top-0 bottom-0 w-px bg-white/10 pointer-events-none z-30" />

          {/* Right Pages Stack 3D Depth Accent */}
          <div className="absolute right-0 top-1 bottom-1 w-2 bg-gradient-to-l from-[#DED6C4] to-[#B5AC98] rounded-r-xs opacity-90 pointer-events-none z-20 shadow-inner" />

          {/* Ornate Gold Filigree Corner Inlays */}
          <div className="absolute top-3 left-10 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37]/60 pointer-events-none rounded-tl z-20" />
          <div className="absolute top-3 right-4 w-10 h-10 border-t-2 border-r-2 border-[#D4AF37]/60 pointer-events-none rounded-tr z-20" />
          <div className="absolute bottom-3 left-10 w-10 h-10 border-b-2 border-l-2 border-[#D4AF37]/60 pointer-events-none rounded-bl z-20" />
          <div className="absolute bottom-3 right-4 w-10 h-10 border-b-2 border-r-2 border-[#D4AF37]/60 pointer-events-none rounded-br z-20" />

          {/* Top Header Foil Banner */}
          <div className="pt-6 sm:pt-8 px-8 sm:px-12 pl-12 text-center relative z-20">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/40 border border-[#D4AF37]/40 text-[#EAD8B1] text-[11px] uppercase tracking-widest font-mono font-bold shadow-inner">
              <ScrollText className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>1 Kings 13 Scriptural Treatise</span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mt-2.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-tight">
              The Danger of <br />
              <span className="text-[#F5E6C8] font-black tracking-wide drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                Believing Lies
              </span>
            </h1>
            
            <p className="font-serif italic text-xs sm:text-sm text-[#DFD7C8] font-medium mt-1 drop-shadow-sm max-w-xs mx-auto">
              Lessons from the Old and Young Prophet in Bethel
            </p>
          </div>

          {/* Centerpiece: Ultra-Realistic Artwork with Gold Frame */}
          <div className="my-auto px-8 sm:px-12 pl-12 relative z-20">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/70 group-hover:border-[#D4AF37] transition-all duration-300">
              <img 
                src={bookCoverRealisticImg} 
                alt="Ultra-realistic book cover showing ancient scriptures under the oak tree in Judean hills"
                className="w-full h-44 sm:h-52 object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-[#FAF8F5] font-mono tracking-wider uppercase px-2 py-1 bg-black/60 backdrop-blur-xs rounded border border-white/20">
                <span className="font-bold flex items-center">
                  <Sparkles className="w-3 h-3 mr-1 text-[#D4AF37]" />
                  Photorealistic Edition
                </span>
                <span className="text-[#D4AF37] font-bold">1 Kings 13:18</span>
              </div>
            </div>
          </div>

          {/* Bottom Hardcover Seal & Details */}
          <div className="pb-6 sm:pb-8 px-8 sm:px-12 pl-12 text-center relative z-20">
            <div className="flex items-center justify-center space-x-2 text-xs text-[#EAD8B1] font-mono font-bold tracking-wider">
              <span>33 CHAPTERS</span>
              <span>•</span>
              <span>39 COMPLETE PAGES</span>
              <span>•</span>
              <span>2026 EDITION</span>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-[#B3A895] mt-1 font-semibold">
              Uncompromising Biblical Conviction & Discernment
            </div>
          </div>
        </div>

        {/* Right Side / Mobile Bottom Interactive Panel */}
        <div className="flex-1 w-full max-w-md lg:max-w-none flex flex-col justify-center space-y-5 bg-[#FAF8F5]/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border-2 border-[#5A5A40]/30 shadow-xl">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#5A5A40]/15 text-[#2E2E1F] font-mono font-bold text-xs uppercase tracking-wider border border-[#5A5A40]/30">
              <BookOpen className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>Full Scriptural Expository Work</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A1A14] tracking-tight uppercase">
              Stand for Truth in a Culture of Half-Truths
            </h2>
            <p className="font-serif text-sm sm:text-base text-[#2E2E24] leading-relaxed font-semibold">
              The young prophet was not destroyed by open rebellion or immorality—he fell because he believed a lie spoken by an older spiritual authority. Discover timeless biblical safeguards against spiritual deception in the digital era.
            </p>
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-3 gap-2.5 py-1">
            <div className="p-3 rounded-xl bg-[#EFEAE0] border border-[#D5CEC0] text-center shadow-xs">
              <BookOpen className="w-4 h-4 text-[#5A5A40] mx-auto mb-1" />
              <div className="text-xs font-black text-[#1A1A14]">33 Chapters</div>
              <div className="text-[10px] text-[#4A4A38] font-bold">Top-of-Page Starts</div>
            </div>
            <div className="p-3 rounded-xl bg-[#EFEAE0] border border-[#D5CEC0] text-center shadow-xs">
              <Layers className="w-4 h-4 text-[#5A5A40] mx-auto mb-1" />
              <div className="text-xs font-black text-[#1A1A14]">39 Pages</div>
              <div className="text-[10px] text-[#4A4A38] font-bold">3D Flip Spread</div>
            </div>
            <div className="p-3 rounded-xl bg-[#EFEAE0] border border-[#D5CEC0] text-center shadow-xs">
              <Clock className="w-4 h-4 text-[#5A5A40] mx-auto mb-1" />
              <div className="text-xs font-black text-[#1A1A14]">45 mins</div>
              <div className="text-[10px] text-[#4A4A38] font-bold">Estimated Read</div>
            </div>
          </div>

          {/* Prominent Action Buttons */}
          <div className="space-y-3 pt-2">
            {savedPage > 1 && onResumeReading ? (
              <button
                id="btn-resume-reading"
                onClick={() => onResumeReading(savedPage)}
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-[#202018] hover:bg-black text-white font-black text-base shadow-lg shadow-black/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Resume Reading (Page {savedPage})</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            ) : null}

            <button
              id="btn-start-reading"
              onClick={onStartReading}
              className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-black text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                savedPage > 1
                  ? 'bg-[#5A5A40] hover:bg-[#484833] text-white shadow-[#5A5A40]/30'
                  : 'bg-[#202018] hover:bg-black text-white shadow-black/20'
              }`}
            >
              <BookOpen className="w-5 h-5 mr-2" />
              <span>{savedPage > 1 ? 'Start from Beginning (Page 1)' : 'Open & Begin Reading'}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>

            <button
              id="btn-table-of-contents-cover"
              onClick={onOpenTOC}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#EBE5D8] hover:bg-[#DFD8C8] text-[#1E1E14] border border-[#5A5A40]/40 font-bold text-sm transition-all cursor-pointer shadow-xs"
            >
              <Bookmark className="w-4 h-4 mr-2 text-[#5A5A40]" />
              <span>Browse Table of Contents (33 Chapters)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
