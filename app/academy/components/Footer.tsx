import React from 'react';

const Footer: React.FC = () => {
  // TODO: Replace with the actual URL of your uploaded DEFINE X Logo
  const DEFINE_X_LOGO_URL = "https://file-service-alpha.internal.based.dev/file/file-service-alpha/a7d6e4b9-1f4a-4952-b91c-8e31000632d4";

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col md:flex-row items-center md:items-start gap-4">
             {/* Define X Logo */}
             <img 
               src={DEFINE_X_LOGO_URL} 
               alt="DEFINE X" 
               className="h-10 w-auto opacity-90"
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
               }}
             />
             <div className="text-center md:text-left">
                <span className="block text-xl font-black text-white eng-font tracking-tight leading-none">
                  DEFINE ACADEMY
                </span>
                <p className="text-xs mt-1 text-slate-500">
                  Operated by DEFINE X Co., Ltd.
                </p>
             </div>
          </div>
          
          <div className="flex space-x-6 text-sm font-medium">
            <a href="#" className="hover:text-[#00afcc] transition-colors">会社概要</a>
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