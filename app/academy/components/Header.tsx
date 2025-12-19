import React, { useState, useEffect } from 'react';
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
    { name: '特徴', href: '#features' },
    { name: 'プラン・料金', href: '#pricing' },
    { name: '代表紹介', href: '#profile' },
    { name: 'FAQ', href: '#faq' },
  ];

  // TODO: Replace with the actual URL of your uploaded DEFINE ACADEMY Logo
  const LOGO_URL = "https://file-service-alpha.internal.based.dev/file/file-service-alpha/b3c5a8e1-5f3a-4939-a931-9a31000676a1";

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
              {/* Logo Image */}
              <img 
                src={LOGO_URL} 
                alt="DEFINE ACADEMY" 
                className="h-8 md:h-10 w-auto"
                // Fallback text if image breaks
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const textNode = document.createElement('span');
                    textNode.className = "text-2xl font-black tracking-tight eng-font text-[#00afcc]";
                    textNode.innerText = "DEFINE ACADEMY";
                    parent.appendChild(textNode);
                  }
                }}
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