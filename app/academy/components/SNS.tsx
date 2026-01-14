import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const SNS: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-white font-black italic tracking-widest text-2xl mb-10 uppercase">
          Follow Our <span className="text-[#00afcc]">Journey</span>
        </h3>

        <div className="flex justify-center items-center gap-6 md:gap-12">
          <a href="#" className="group flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-800 border-2 border-slate-700 transform -skew-x-12 flex items-center justify-center group-hover:bg-[#E1306C] group-hover:border-[#E1306C] transition-all duration-300">
              <Instagram className="text-white w-8 h-8 transform skew-x-12" />
            </div>
            <span className="mt-4 text-xs font-bold text-slate-500 group-hover:text-white uppercase tracking-widest">Instagram</span>
          </a>

          <a href="#" className="group flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-800 border-2 border-slate-700 transform -skew-x-12 flex items-center justify-center group-hover:bg-[#1877F2] group-hover:border-[#1877F2] transition-all duration-300">
              <Facebook className="text-white w-8 h-8 transform skew-x-12" />
            </div>
            <span className="mt-4 text-xs font-bold text-slate-500 group-hover:text-white uppercase tracking-widest">Facebook</span>
          </a>

          <a href="#" className="group flex flex-col items-center">
             <div className="w-20 h-20 bg-slate-800 border-2 border-slate-700 transform -skew-x-12 flex items-center justify-center group-hover:bg-[#06C755] group-hover:border-[#06C755] transition-all duration-300">
               <span className="text-white font-black text-sm transform skew-x-12">LINE</span>
             </div>
             <span className="mt-4 text-xs font-bold text-slate-500 group-hover:text-white uppercase tracking-widest">LINE</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SNS;