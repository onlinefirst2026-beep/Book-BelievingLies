import React from 'react';
import { ReaderSettings } from '../types';
import { BOOK_METADATA } from '../data/bookData';
import { User, BookOpen, Heart, Award, MapPin, Users, Sparkles, BookMarked, Quote, BookCheck } from 'lucide-react';

interface AuthorPageProps {
  settings: ReaderSettings;
  pageNum?: number;
  isLeftPage?: boolean;
}

export const AuthorPage: React.FC<AuthorPageProps> = ({
  settings,
  pageNum = 3,
}) => {
  const isDark = settings.theme === 'dark' || settings.theme === 'slate';

  return (
    <article
      id="about-the-author-page"
      className={`relative h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 select-text transition-colors duration-300 ${
        isDark ? 'bg-[#0B0F19] text-[#F8FAFC]' : 'bg-[#FAF8F5] text-[#0F172A]'
      }`}
    >
      {/* Top Header */}
      <header className="flex items-center justify-between border-b border-current/20 pb-2 text-xs uppercase tracking-widest font-mono font-bold">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-[#D97706]" />
          <span className="font-extrabold tracking-wider">
            Author Profile & Biography
          </span>
        </div>
        <span className="font-mono text-xs font-black">
          Page {pageNum}
        </span>
      </header>

      {/* Main Author Content Body */}
      <div className="flex-1 overflow-y-auto pr-1 py-3 space-y-4">
        
        {/* Author Header Banner - High-Contrast Dark Slate Canvas with Pure White & Gold Typography */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-2xl bg-[#0B1120] text-white border-2 border-[#D4AF37]/60 shadow-lg">
          
          {/* Official Author Ministry Emblem Badge */}
          <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border-2 border-[#D4AF37] shadow-md flex flex-col items-center justify-center text-[#FDE047] p-2 text-center">
            <BookCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#FACC15] drop-shadow-sm mb-1" />
            <span className="text-[9px] font-mono uppercase tracking-widest font-black text-[#F8FAFC]">
              Author
            </span>
          </div>

          {/* Author Titles & Credentials in Crisp High-Contrast Typography */}
          <div className="flex-1 text-center sm:text-left space-y-1.5">
            <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-[#FACC15] text-[#0B1120] shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Teacher of God's Word</span>
            </div>

            {/* Author's Name: Prominent, High-Contrast White Heading */}
            <h1 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight drop-shadow-sm">
              {BOOK_METADATA.author}
            </h1>

            <p className="text-sm sm:text-base font-serif italic font-bold text-[#FDE047]">
              Devotional Author & Minister of the Gospel
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs font-bold">
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] shadow-xs">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#FACC15] shrink-0" />
                Vienna, Austria & Lagos, Nigeria
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] shadow-xs">
                <Users className="w-3.5 h-3.5 mr-1 text-[#FACC15] shrink-0" />
                Married to Evangelist Fayefunmi since 1982
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] shadow-xs">
                <Heart className="w-3.5 h-3.5 mr-1 text-[#FACC15] shrink-0" />
                Daily Grace since 2010
              </span>
            </div>
          </div>
        </div>

        {/* Biography Paragraphs in High-Contrast Crisp Modern Typography */}
        <div className={`space-y-3 text-sm sm:text-base leading-relaxed font-sans font-medium ${
          isDark ? 'text-[#F1F5F9]' : 'text-[#0F172A]'
        }`}>
          <p>
            <strong className="font-extrabold text-black dark:text-white">Pastor Cecilia Oluwatoyin Fayefunmi</strong> is an anointed teacher of God’s Word, called by the Holy Spirit to preach the undiluted truth of Scripture and impart the message of divine love, holy joy, and unshakeable faith to God’s people worldwide.
          </p>

          <p>
            Under the direct inspiration of the Holy Spirit in 2010, she began authoring the widely celebrated devotional series <strong className="font-serif font-black text-black dark:text-white">“Daily Grace”</strong>, which has stood for over a decade and a half as an uplifting fountain of spiritual wisdom, scriptural discipline, and daily guidance for countless believers.
          </p>

          <p>
            Born and raised in Lagos, Nigeria, she enjoyed a blessed and loving childhood that cultivated her lifelong compassion, joyful spirit, and dedication to serving others. A sincere listener with a generous heart, she lives by the golden biblical principle of treating all people with the love, dignity, and honor they deserve in Christ.
          </p>

          <p>
            She has been happily married to Evangelist Fayefunmi since 1982 and is blessed with three children. Pastor Cecilia resides in Vienna, Austria with her family, continuing her vibrant writing, prayer, and teaching ministry across Europe and Africa.
          </p>
        </div>

        {/* Golden Rule Author Motto Callout in High-Contrast Dark Slate */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#0B1120] text-white border-l-4 border-l-[#FACC15] border-y border-r border-[#1E293B] shadow-md">
          <div className="flex items-start space-x-3">
            <Quote className="w-6 h-6 text-[#FACC15] shrink-0 mt-0.5" />
            <div className="font-serif italic font-bold text-sm sm:text-base text-[#F8FAFC] leading-relaxed">
              “Treating others the way you would want to be treated — preaching the undiluted Word of God with love, joy, and uncompromising biblical discernment.”
            </div>
          </div>
        </div>

        {/* Other Publications Showcase Cards */}
        <div className="space-y-2.5 pt-1">
          <div className={`flex items-center space-x-2 text-xs sm:text-sm font-mono font-black uppercase tracking-wider ${
            isDark ? 'text-[#FACC15]' : 'text-[#78350F]'
          }`}>
            <BookMarked className="w-4 h-4" />
            <span>Other Publications by Pastor Cecilia Fayefunmi</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Book 1 */}
            <div className={`p-4 rounded-xl border shadow-xs ${
              isDark 
                ? 'bg-[#131B2E] border-[#334155] text-white' 
                : 'bg-white border-[#CBD5E1] text-[#0F172A]'
            }`}>
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-black text-sm uppercase tracking-tight text-inherit">
                  At the Throne of Grace
                </h3>
                <BookOpen className="w-4 h-4 text-[#D97706] shrink-0" />
              </div>
              <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed font-medium ${
                isDark ? 'text-[#CBD5E1]' : 'text-[#334155]'
              }`}>
                A profound biblical guide on approaching God's holy throne with reverence, confidence, and mountain-moving prayer.
              </p>
            </div>

            {/* Book 2 */}
            <div className={`p-4 rounded-xl border shadow-xs ${
              isDark 
                ? 'bg-[#131B2E] border-[#334155] text-white' 
                : 'bg-white border-[#CBD5E1] text-[#0F172A]'
            }`}>
              <div className="flex items-center justify-between">
                <h3 className="font-sans font-black text-sm uppercase tracking-tight text-inherit">
                  Daily Grace Devotionals
                </h3>
                <Award className="w-4 h-4 text-[#D97706] shrink-0" />
              </div>
              <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed font-medium ${
                isDark ? 'text-[#CBD5E1]' : 'text-[#334155]'
              }`}>
                Inspiring Christian devotional series written under the inspiration of the Holy Spirit since 2010.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Stamp */}
      <footer className="pt-2.5 border-t border-current/20 flex items-center justify-between text-xs font-mono font-bold">
        <span className="opacity-80">Pastor Cecilia Oluwatoyin Fayefunmi • Vienna, Austria</span>
        <span className="font-black">Page {pageNum}</span>
      </footer>
    </article>
  );
};

