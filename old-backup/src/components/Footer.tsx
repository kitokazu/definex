import React from 'react';
import { Instagram, Twitter, Youtube, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-2">
              DEFINE <span className="text-brand">X</span>
            </h2>
            <p className="text-slate-400 text-sm">A Sports & Academy Company</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-brand transition-colors duration-300 group">
              <Instagram size={20} className="text-slate-300 group-hover:text-white" />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-brand transition-colors duration-300 group">
              <Twitter size={20} className="text-slate-300 group-hover:text-white" />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-brand transition-colors duration-300 group">
              <Youtube size={20} className="text-slate-300 group-hover:text-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} DEFINE X Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
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