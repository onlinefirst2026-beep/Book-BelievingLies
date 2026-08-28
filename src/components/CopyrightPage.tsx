import React from 'react';
import { ReaderSettings } from '../types';
import { BOOK_METADATA } from '../data/bookData';
import publisherSealImg from '../assets/images/publisher_seal_gold_1787929798158.jpg';
import { ShieldCheck, BookOpen, Globe, Award, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

interface CopyrightPageProps {
  settings: ReaderSettings;
  pageNum?: number;
  isLeftPage?: boolean;
}

export const CopyrightPage: React.FC<CopyrightPageProps> = ({
  settings,
  pageNum = 2,
  isLeftPage = false,
}) => {
  const isDark = settings.theme === 'dark' || settings.theme === 'slate';

  return (
    <article
      id="copyright-publishing-notice-page"
      className={`relative h-full flex flex-col justify-between p-5 sm:p-7 md:p-8 select-text transition-colors duration-300 font-sans ${
        isDark ? 'bg-[#181A20] text-[#E2E8F0]' : 'bg-[#FAF8F5] text-[#1E232A]'
      }`}
    >
      {/* Top Editorial Header */}
      <header className="flex items-center justify-between border-b pb-2.5 text-[11px] uppercase tracking-widest font-mono font-bold">
        <div className="flex items-center space-x-2">
          <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-[#D4AF37]' : 'text-[#8A6D3B]'}`} />
          <span className={isDark ? 'text-[#CBD5E1]' : 'text-[#475569]'}>
            Official Imprint & Legal Notice
          </span>
        </div>
        <span className={`font-mono text-xs font-black ${isDark ? 'text-white' : 'text-black'}`}>
          {pageNum}
        </span>
      </header>

      {/* Main Publishing Layout */}
      <div className="flex-1 overflow-y-auto pr-1 py-3 space-y-4">
        
        {/* Seal & Imprint Header */}
        <div className="flex items-center space-x-3.5 pb-2 border-b border-current/10">
          <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-md">
            <img
              src={publisherSealImg}
              alt="Official Publisher Golden Seal Imprint"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest bg-[#D4AF37]/20 text-[#B38F27] border border-[#D4AF37]/40">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Biblical Expository Press</span>
            </div>
            <h1 className="font-sans font-black text-base sm:text-lg tracking-tight uppercase mt-1 text-inherit">
              The Danger of Believing Lies
            </h1>
            <p className="text-[11px] font-medium opacity-80">
              First Edition • Vienna, Austria & Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* International Copyright Block */}
        <div
          className={`p-3.5 rounded-xl border text-xs leading-relaxed transition-colors shadow-2xs ${
            isDark
              ? 'bg-[#20242D] border-[#333C4D] text-[#E2E8F0]'
              : 'bg-[#F2EFE9] border-[#DCD6CA] text-[#242A35]'
          }`}
        >
          <div className="flex items-center space-x-2 font-mono font-bold text-[11px] uppercase tracking-wider mb-1.5 text-[#8A6D3B] dark:text-[#E5C365]">
            <FileText className="w-3.5 h-3.5" />
            <span>Copyright & Intellectual Property Notice</span>
          </div>
          <p className="font-semibold text-[11.5px] sm:text-xs">
            {BOOK_METADATA.copyright}
          </p>
          <p className="mt-1.5 text-[11px] leading-relaxed opacity-90">
            Published worldwide. All rights reserved under International and Pan-American Copyright Conventions. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means—electronic, mechanical, photocopying, recording, scanning, or otherwise—without prior written permission of the author, except for brief quotations embodied in critical reviews, sermons, and theological articles.
          </p>
        </div>

        {/* Theological & Ministry Disclaimer */}
        <div
          className={`p-3.5 rounded-xl border-l-4 text-xs leading-relaxed transition-colors shadow-2xs ${
            isDark
              ? 'bg-[#1C2028] border-l-[#D4AF37] border-y-[#2D3545] border-r-[#2D3545] text-[#CBD5E1]'
              : 'bg-[#F5F1E8] border-l-[#A07C2E] border-y-[#E0D9CB] border-r-[#E0D9CB] text-[#1E232A]'
          }`}
        >
          <div className="flex items-center space-x-1.5 font-bold uppercase tracking-wider text-[11px] mb-1 text-[#937128] dark:text-[#E0BE60]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Theological & Discipleship Disclaimer</span>
          </div>
          <p className="text-[11px] sm:text-[11.5px] leading-relaxed font-medium">
            {BOOK_METADATA.disclaimer}
          </p>
          <div className="mt-2 pt-1.5 border-t border-current/10 flex items-center justify-between text-[10px] font-mono opacity-80 font-semibold">
            <span>Doctrinal Foundation: 1 Kings 13</span>
            <span>Undiluted Word of God</span>
          </div>
        </div>

        {/* Cataloging-in-Publication & Scripture Notice */}
        <div
          className={`p-3 rounded-xl border font-mono text-[10.5px] leading-relaxed ${
            isDark
              ? 'bg-[#181B22] border-[#2A3140] text-[#94A3B8]'
              : 'bg-[#EDE8DC] border-[#D5CDC0] text-[#475569]'
          }`}
        >
          <div className="font-bold text-inherit mb-1 uppercase tracking-widest text-[10px]">
            Library Cataloging & Publication Data
          </div>
          <div className="space-y-0.5">
            <div><strong>Author:</strong> Fayefunmi, Cecilia Oluwatoyin (Pastor)</div>
            <div><strong>Title:</strong> The Danger of Believing Lies: Lessons from 1 Kings 13</div>
            <div><strong>Subject:</strong> Christian Life • Biblical Discernment • Spiritual Warfare • Exegesis</div>
            <div><strong>Scriptures:</strong> Holy Bible text citations for spiritual edification</div>
            <div><strong>Year:</strong> 2026 Edition • Vienna / Lagos</div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Stamp */}
      <footer className="pt-2 border-t border-current/15 flex items-center justify-between text-[10.5px] font-mono">
        <span className="opacity-75">Grace & Truth Press • Publication Registry</span>
        <span className="font-bold">Page {pageNum}</span>
      </footer>
    </article>
  );
};
