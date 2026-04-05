import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const LOGO_URL = "/define-academy-logo.png";

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             {/* Define Academy Logo */}
             <Image
               src={LOGO_URL}
               alt="DEFINE ACADEMY"
               width={150}
               height={48}
               className="h-12 w-auto"
             />
          </div>

          <div className="flex space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-[#00afcc] transition-colors">運営会社</Link>
            <a href="/terms" className="hover:text-[#00afcc] transition-colors">利用規約</a>
            <a href="/privacy" className="hover:text-[#00afcc] transition-colors">プライバシーポリシー</a>
            <a href="/legal" className="hover:text-[#00afcc] transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} DEFINE ACADEMY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;