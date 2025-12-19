import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'MISSION', href: '#mission' },
  { label: 'SERVICES', href: '#services' },
  { label: 'FOUNDER', href: '#founder' },
  { label: 'COMPANY', href: '#company' },
  { label: 'CONTACT', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-black text-2xl tracking-tighter italic flex items-center text-white">
              DEFINE <span className="text-brand ml-1 transform skew-x-[-12deg] inline-block text-shadow-glow">X</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-black text-slate-300 hover:text-white transition-colors duration-200 uppercase tracking-wide group italic"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left skew-x-[-20deg] shadow-[0_0_8px_rgba(0,175,204,0.8)]"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl flex flex-col border-t border-slate-800 animate-in slide-in-from-top-5 duration-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl font-black text-slate-200 hover:text-white hover:bg-brand/20 block py-5 px-6 border-b border-slate-800 last:border-0 uppercase italic transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center justify-between">
                 {item.label}
                 <span className="text-xs opacity-50 not-italic font-normal text-brand">0{NAV_ITEMS.indexOf(item) + 1}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;