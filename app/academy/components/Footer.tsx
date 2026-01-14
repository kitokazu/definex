import React from 'react';

const Footer: React.FC = () => {
  const LOGO_URL = "/define-academy-logo.png";

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             {/* Define Academy Logo */}
             <img
               src={LOGO_URL}
               alt="DEFINE ACADEMY"
               className="h-12 w-auto"
             />
          </div>

          <div className="flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-[#00afcc] transition-colors">運営会社</a>
            <a href="#" className="hover:text-[#00afcc] transition-colors">利用規約</a>
            <a href="#" className="hover:text-[#00afcc] transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-[#00afcc] transition-colors">特定商取引法に基づく表記</a>
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