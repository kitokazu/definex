import React from 'react';
import { Eye, Heart, Smile, Target, TrendingUp, Users } from 'lucide-react';
import FadeIn from './FadeIn';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-slate-900 relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-950 -skew-x-12 -z-0 translate-x-1/4 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center mb-20">
          <div className="inline-block relative">
            <h2 className="text-5xl font-black text-white mb-2 tracking-tighter italic z-10 relative">
              ABOUT US
            </h2>
            <div className="absolute -bottom-2 -right-4 w-full h-3 bg-brand/50 -skew-x-12 mix-blend-screen"></div>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-white transform rotate-45"></div>
            <div className="w-16 h-px bg-slate-700"></div>
            <div className="w-2 h-2 bg-brand transform rotate-45 shadow-[0_0_8px_#00AFCC]"></div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-slate-950/50 p-8 border border-white/5 rounded-lg skew-x-[-6deg]">
            <div className="skew-x-[6deg]">
              <h3 className="text-2xl font-bold text-white mb-6">
                DEFINE X は日本国内において
                <br />
                <span className="text-brand">ハイレベルなスポーツアクティビティ</span>と<span className="text-brand">教育</span>
                を
                <br />
                融合したサービスを提供するコミュニティです。
              </h3>
              <p className="text-slate-300 leading-loose">
                私たちはスポーツと教育を通じて個々の成長と成功の物語を築くための拠点となることを心掛け、
                真剣に・夢中になることができる楽しみをより多く創り出すことに取り組み続けていきます。
              </p>
              <p className="mt-6 text-xl font-bold italic text-white">
                スポーツと教育における新たな発見や魅力を
                <br />一緒に追求しませんか？
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 mt-24">
          <FadeIn delay={100} className="relative group">
            <div className="absolute inset-0 bg-brand/20 transform skew-x-[-6deg] translate-x-2 translate-y-2 rounded-sm group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
            <div className="relative bg-slate-800 p-10 shadow-xl border border-slate-700 transform skew-x-[-6deg] hover:-translate-y-1 transition-transform duration-300 h-full">
              <div className="transform skew-x-[6deg]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white text-slate-900 flex items-center justify-center shadow-lg mr-4 transform -skew-x-12">
                    <Target size={24} className="skew-x-12" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white italic">MISSION</h3>
                    <p className="text-xs font-bold text-brand uppercase tracking-widest">Our Purpose</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-brand pl-4">個々の可能性を高め、未来を築く</h4>
                <p className="text-slate-400 font-medium leading-relaxed">Unlock individual potential, Build the future.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="relative group">
            <div className="absolute inset-0 bg-slate-700 transform skew-x-[-6deg] translate-x-2 translate-y-2 rounded-sm group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300" />
            <div className="relative bg-slate-800 p-10 shadow-xl border border-slate-700 transform skew-x-[-6deg] hover:-translate-y-1 transition-transform duration-300 h-full">
              <div className="transform skew-x-[6deg]">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brand text-white flex items-center justify-center shadow-lg shadow-brand/40 mr-4 transform -skew-x-12">
                    <Eye size={24} className="skew-x-12" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white italic">VISION</h3>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Our Goal</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-white pl-4">成長と成功の物語を築くための拠点となる</h4>
                <p className="text-slate-400 font-medium leading-relaxed">The hub for building stories of growth and success.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={300}>
          <div className="text-center mb-12">
            <span className="inline-block px-8 py-2 bg-brand text-slate-900 text-2xl font-black italic skew-x-[-12deg] shadow-[0_0_15px_rgba(0,175,204,0.5)]">
              <span className="inline-block skew-x-[12deg]">VALUES</span>
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: '顧客中心', sub: 'Customer Centric', icon: Users },
              { label: '誠実', sub: 'Integrity', icon: Heart },
              { label: '持続的改善', sub: 'Kaizen', icon: TrendingUp },
              { label: '楽しむこと', sub: 'Enjoyment', icon: Smile },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-slate-800 transform skew-x-[-6deg] transition-transform duration-300 group-hover:bg-brand/20 group-hover:scale-105" />
                <div className="relative flex flex-col items-center text-center p-8 bg-slate-900 border border-slate-800 transform skew-x-[-6deg] hover:border-brand/50 transition-colors h-full justify-center shadow-lg">
                  <div className="skew-x-[6deg] flex flex-col items-center">
                    <div className="mb-4 text-slate-500 group-hover:text-brand transition-colors duration-300 flex items-center justify-center">
                      <item.icon size={36} strokeWidth={2} />
                    </div>
                    <h4 className="text-lg font-black text-white mb-1">{item.label}</h4>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest italic">
                      {item.sub}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Mission;
