import React from 'react';
import SectionHeading from './SectionHeading';
import { Target, Plane, Briefcase } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const targets = [
    {
      icon: Target,
      title: "本場のスポーツ英語を\n身につけたい",
      desc: "現地のコーチや選手が実際に使う専門用語やニュアンスを習得。教科書には載っていない「現場の言葉」を学びます。"
    },
    {
      icon: Plane,
      title: "世界を目指して\nスポーツ留学したい",
      desc: "大学やクラブチームへの留学準備に。入団テスト、インタビュー、日常会話まで、海外生活のスタートダッシュを支援します。"
    },
    {
      icon: Briefcase,
      title: "スポーツ経験を\n仕事に繋げたい",
      desc: "通訳、トレーナー、代理人、国際大会の運営など。英語力を武器に、スポーツビジネスの世界でキャリアを広げたい方へ。"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-white transform -skew-y-2 origin-top-left -mt-12 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading en="Recommended For" ja="こんな方におすすめです" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {targets.map((item, index) => (
            <div key={index} className="group relative bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-[#00afcc]">
              {/* Skewed Number Background */}
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <span className="text-8xl font-black italic text-slate-900">0{index + 1}</span>
              </div>
              
              <div className="w-16 h-16 bg-slate-900 text-white transform -skew-x-12 flex items-center justify-center mb-6 group-hover:bg-[#00afcc] transition-colors duration-300 shadow-md">
                <item.icon className="w-8 h-8 transform skew-x-12" />
              </div>
              
              <h3 className="text-xl font-black italic text-slate-900 mb-4 whitespace-pre-line leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
              
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[20px] border-l-[20px] border-b-[#00afcc] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;