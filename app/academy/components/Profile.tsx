import React from 'react';
import SectionHeading from './SectionHeading';
import { Award } from 'lucide-react';

const Profile: React.FC = () => {
  // TODO: Replace with the actual URL of your uploaded Portrait
  const PORTRAIT_URL = "https://file-service-alpha.internal.based.dev/file/file-service-alpha/156162d1-0f7e-4073-98f5-3c13000554c2";

  return (
    <section id="profile" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading en="Representative" ja="代表紹介" />
        
        <div className="relative">
          {/* Background Graphic */}
          <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-50 transform skew-x-[-12deg] -z-10 translate-x-1/4"></div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Image Card */}
            <div className="w-full md:w-1/2 relative group">
               <div className="absolute inset-0 border-4 border-[#00afcc] transform translate-x-4 translate-y-4"></div>
               <div className="relative bg-slate-900 aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 shadow-2xl">
                 <img 
                   src={PORTRAIT_URL} 
                   alt="TAISEI KITAHARA" 
                   className="w-full h-full object-cover object-top"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                   <p className="text-[#00afcc] font-black italic text-4xl leading-none">TAISEI</p>
                   <p className="text-white font-black italic text-4xl leading-none">KITAHARA</p>
                 </div>
               </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="mb-8">
                <span className="text-[#00afcc] font-bold tracking-widest uppercase text-sm mb-2 block">Head Coach / CEO</span>
                <h3 className="text-4xl font-black text-slate-900 mb-2 italic">北原 大誠</h3>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-1 bg-slate-900 text-white transform -skew-x-12 text-sm font-bold flex items-center">
                   <span className="transform skew-x-12 flex items-center"><Award size={16} className="mr-2 text-[#00afcc]"/> TOEIC 985</span>
                </span>
                <span className="px-4 py-1 bg-slate-900 text-white transform -skew-x-12 text-sm font-bold flex items-center">
                   <span className="transform skew-x-12 flex items-center"><Award size={16} className="mr-2 text-[#00afcc]"/> Versant 79</span>
                </span>
              </div>

              <div className="space-y-6 text-slate-700 font-medium mb-10 leading-relaxed">
                <p>
                  幼少期より様々なスポーツに親しみ、米国IMG Academy、米国大学でのプレー経験を持つバイリンガル。
                  自身の海外経験の中で痛感した「言葉の壁」を克服したメソッドを体系化。
                </p>
                
                <div className="bg-slate-50 p-6 border-l-4 border-slate-900">
                   <div className="mb-4">
                      <strong className="block text-[#00afcc] text-xs font-black uppercase mb-1">Sports Background</strong>
                      <p className="font-bold">野球 / ゴルフ / バスケ / サッカー / 陸上 / パデル</p>
                   </div>
                   <div>
                      <strong className="block text-[#00afcc] text-xs font-black uppercase mb-1">Career</strong>
                      <p className="font-bold text-sm">IMG Academy, 米国大学卒 / インターナショナルスクール / 外資系スポーツ企業</p>
                   </div>
                </div>
              </div>

              <div className="relative">
                <p className="text-xl font-black italic text-slate-900 leading-tight">
                  「スポーツという共通言語があれば、世界はもっと近くなる。<br/>
                  あなたの情熱を、英語で世界に届けましょう。」
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
