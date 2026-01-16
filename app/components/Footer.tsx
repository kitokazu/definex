'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronUp, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Image
              src="/logo-title.png"
              alt="DEFINE X"
              width={150}
              height={40}
              className="mb-2"
            />
            <p className="text-slate-400 text-sm">A Sports & Academy Company</p>
          </div>

          <div className="flex space-x-4">
            <a href="https://www.instagram.com/defineacademy.jp/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-slate-800 rounded-full hover:bg-brand transition-colors duration-300 group flex items-center justify-center">
              <Instagram size={20} className="text-slate-300 group-hover:text-white" />
            </a>
            <a href="https://facebook.com/profile.php?id=61557745051495" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-slate-800 rounded-full hover:bg-brand transition-colors duration-300 group flex items-center justify-center">
              <Facebook size={20} className="text-slate-300 group-hover:text-white" />
            </a>
            <a href="https://lin.ee/22zZcZV" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-slate-800 rounded-full hover:bg-[#06c755] transition-colors duration-300 group flex items-center justify-center">
              <span className="text-slate-300 group-hover:text-white text-xs font-bold">LINE</span>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mt-4 md:mt-0">&copy; {new Date().getFullYear()} DEFINE X Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
            <a href="/terms" className="hover:text-white transition-colors">
              利用規約
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="/legal" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-brand text-white rounded-full shadow-lg hover:bg-brand-dark transition-all duration-300 z-40 hidden md:block opacity-80 hover:opacity-100"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
