import React from 'react';
import { X, BookOpen, ShieldCheck, Heart, User, Sparkles, Award, BookMarked, MapPin, Users, Quote, BookCheck } from 'lucide-react';
import { BOOK_METADATA } from '../data/bookData';
import publisherSealImg from '../assets/images/publisher_seal_gold_1787929798158.jpg';

interface AuthorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToAuthorPage?: () => void;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({
  isOpen,
  onClose,
  onJumpToAuthorPage,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      id="author-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200 font-sans"
      onClick={onClose}
    >
      <div 
        id="author-modal-container"
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#FAF8F5] text-[#0F172A] rounded-2xl shadow-2xl border-2 border-[#D4AF37]/50 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#E2DDD3] bg-[#F4EFE6]">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-[#0F172A] text-white shadow-xs">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-sans font-black text-base sm:text-lg uppercase text-[#0F172A] tracking-tight">
                About the Author & Legal Imprint
              </h3>
              <p className="text-xs font-mono font-bold text-[#78350F] uppercase tracking-wider">
                Pastor Cecilia Oluwatoyin Fayefunmi
              </p>
            </div>
          </div>
          
          <button
            id="btn-close-author-modal"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/10 text-[#0F172A] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body with High-Contrast Colors */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-[#0F172A]">
          
          {/* Author Profile Header - High-Contrast Dark Slate Banner with Pure White & Gold Text */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0B1220] text-white border-2 border-[#D4AF37] shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              
              {/* Author Ministry Emblem Badge */}
              <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0A0E17] border-2 border-[#D4AF37] shadow-lg flex flex-col items-center justify-center text-[#FDE047] p-2 text-center">
                <BookCheck className="w-8 h-8 sm:w-10 sm:h-10 text-[#FACC15] drop-shadow-sm mb-1" />
                <span className="text-[9px] font-mono uppercase tracking-widest font-black text-[#F8FAFC]">
                  Author
                </span>
              </div>

              {/* Author Info in Crisp White & Gold */}
              <div className="flex-1 w-full text-center sm:text-left space-y-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider bg-[#FACC15] text-[#0B1220] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#0B1220]" />
                  <span>Teacher of God's Word & Author</span>
                </span>

                {/* Author's Name in Dedicated High-Contrast Solid Dark Block */}
                <div className="author-name-block bg-[#050811] border-2 border-[#D4AF37]/70 rounded-xl p-3.5 sm:p-4 my-1.5 shadow-inner">
                  <h4 className="author-name font-sans font-black text-xl sm:text-2xl md:text-3xl text-white tracking-tight leading-snug drop-shadow-sm">
                    Pastor Cecilia Oluwatoyin Fayefunmi
                  </h4>
                </div>

                <p className="text-xs sm:text-sm font-serif italic text-[#FDE047] font-bold">
                  Devotional Author • Preaching the Undiluted Word
                </p>

                {/* Quick Details Badges */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs font-bold">
                  <div className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] shadow-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                    <span>Vienna & Lagos</span>
                  </div>
                  <div className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] shadow-xs">
                    <Users className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                    <span>Married since 1982</span>
                  </div>
                  <div className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#1E293B] border border-[#475569] text-[#F8FAFC] shadow-xs">
                    <Heart className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                    <span>Daily Grace since 2010</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography Text */}
            <div className="font-sans text-sm sm:text-base leading-relaxed text-[#F1F5F9] font-medium space-y-3 pt-3 border-t border-[#334155]">
              <p>
                <strong className="text-white font-extrabold">Pastor Cecilia Oluwatoyin Fayefunmi</strong> is an anointed teacher of God's Word, called by the Holy Spirit to preach the undiluted truth of Scripture and impart the message of divine love, holy joy, and unshakeable faith to God's people worldwide.
              </p>
              <p>
                Under the direct inspiration of the Holy Spirit in 2010, she started writing devotionals titled <strong className="font-serif font-black text-white">Daily Grace</strong> which has been a continuous source of inspiration and guidance to believers across nations.
              </p>
              <p>
                She was born in Lagos, Nigeria and had a blessed upbringing filled with family love. She is compassionate, outgoing, dedicated, and lives by the golden biblical standard of treating others with dignity, honor, and love.
              </p>
              <p>
                She has been happily married to Evangelist Fayefunmi since 1982 and has three children. Pastor Cecilia resides in Vienna, Austria with her husband and family.
              </p>
            </div>
          </div>

          {/* Golden Rule Callout in High Contrast Dark Slate */}
          <div className="p-4 rounded-xl bg-[#0B1120] border-l-4 border-l-[#FACC15] border-y border-r border-[#1E293B] text-sm sm:text-base text-white shadow-md">
            <div className="flex items-start space-x-3">
              <Quote className="w-6 h-6 text-[#FACC15] shrink-0 mt-0.5" />
              <p className="font-serif italic font-bold text-[#F8FAFC] leading-relaxed">
                “Treating others the way you would want to be treated — preaching the undiluted Word of God with love, joy, and uncompromising biblical conviction.”
              </p>
            </div>
          </div>

          {/* Other Books */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#EDE7D9] border-2 border-[#D5CDC0] space-y-3">
            <div className="flex items-center space-x-2">
              <BookMarked className="w-4 h-4 text-[#78350F]" />
              <h4 className="font-sans font-black text-xs sm:text-sm uppercase text-[#0F172A] tracking-tight">
                Other Books & Publications by Author
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white border border-[#CBD5E1] shadow-2xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-sans font-black text-xs sm:text-sm text-[#0F172A]">At the Throne of Grace</h5>
                    <p className="text-xs font-serif italic text-[#64748B] mt-0.5">By Pastor Cecilia Oluwatoyin Fayefunmi</p>
                  </div>
                  <BookOpen className="w-4 h-4 text-[#D97706] shrink-0" />
                </div>
                <p className="text-xs text-[#334155] font-medium mt-2 leading-relaxed">
                  A foundational guide to entering God's holy presence with reverence, confidence, and transformative prayer.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#CBD5E1] shadow-2xs">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-sans font-black text-xs sm:text-sm text-[#0F172A]">Daily Grace Devotionals</h5>
                    <p className="text-xs font-serif italic text-[#64748B] mt-0.5">Inspirational Series (Since 2010)</p>
                  </div>
                  <Award className="w-4 h-4 text-[#D97706] shrink-0" />
                </div>
                <p className="text-xs text-[#334155] font-medium mt-2 leading-relaxed">
                  Daily spiritual nourishment and biblical devotionals touching lives across continents with the undiluted Word of God.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright & Publishing Notice Block */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EFE6] border-2 border-[#D5CDC0] space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37] shrink-0 shadow-xs">
                <img
                  src={publisherSealImg}
                  alt="Publisher Golden Seal"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-sans font-black text-xs sm:text-sm uppercase text-[#0F172A] tracking-tight">
                  Copyright & Publishing Notice
                </h4>
                <p className="text-xs font-mono font-bold text-[#78350F]">
                  Grace & Truth Press • First Edition 2026
                </p>
              </div>
            </div>
            <div className="font-mono text-xs leading-relaxed text-[#0F172A] p-3 rounded-xl bg-white border border-[#CBD5E1]">
              <p className="font-bold">{BOOK_METADATA.copyright}</p>
              <p className="mt-1.5 font-sans text-xs font-medium text-[#334155] leading-relaxed">
                Published in Vienna, Austria & Lagos, Nigeria. All rights reserved. No part of this publication may be reproduced or transmitted in any form without prior written permission, except for brief theological quotations.
              </p>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="p-4 rounded-xl bg-[#EDE7DA] border border-[#D5CDC0] space-y-1.5 text-xs text-[#0F172A]">
            <div className="flex items-center space-x-1.5 font-bold uppercase tracking-wider text-xs text-[#78350F]">
              <ShieldCheck className="w-4 h-4" />
              <span>Ministry & Theological Disclaimer</span>
            </div>
            <p className="leading-relaxed font-medium text-[#334155]">
              {BOOK_METADATA.disclaimer}
            </p>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-[#E2DDD3] bg-[#F4EFE6] flex items-center justify-between">
          {onJumpToAuthorPage ? (
            <button
              id="btn-jump-to-author-page"
              onClick={() => {
                onJumpToAuthorPage();
                onClose();
              }}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#0F172A] text-white hover:bg-black font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Author Page in Reader (Page 3)</span>
            </button>
          ) : <div />}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#0F172A] hover:bg-[#F2EFE9] font-bold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

