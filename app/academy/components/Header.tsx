import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'プログラムの特徴', href: '#features' },
    { name: 'プラン・料金', href: '#pricing' },
    { name: '講師', href: '#profile' },
    { name: 'FAQ', href: '#faq' },
  ];

  const LOGO_URL = "/define-academy-logo.png";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Image
                src={LOGO_URL}
                alt="DEFINE ACADEMY"
                width={200}
                height={48}
                className="h-10 md:h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold hover:text-[#00afcc] transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="!py-2 !px-6 text-sm">
              無料体験レッスン
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 hover:text-[#00afcc]"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-slate-100">
          <div className="px-4 py-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-800 font-bold text-lg hover:text-[#00afcc]"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
              無料体験レッスン
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;