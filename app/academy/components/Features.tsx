import React from 'react';
import SectionHeading from './SectionHeading';
import { Settings, Users, Trophy, MessageCircle, Zap, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: "完全カスタマイズ指導",
      text: "あなたの競技、ポジション、目標に合わせてカリキュラムを1から作成します。"
    },
    {
      icon: Users,
      title: "バイリンガル講師陣",
      text: "日米でのスポーツ経験を持つ講師が、微妙なニュアンスも日本語を交えて解説します。"
    },
    {
      icon: Trophy,
      title: "全スポーツジャンル対応",
      text: "選手はもちろん、コーチ、審判、トレーナーなど、あらゆる立場の英語ニーズに応えます。"
    }
  ];

  const effects = [
    { icon: MessageCircle, title: "生きた英会話力", text: "即座に反応できる瞬発力" },
    { icon: Zap, title: "言語感覚の向上", text: "英語を英語のまま理解する" },
    { icon: ShieldCheck, title: "揺るぎない自信", text: "海外でも堂々と主張できる" }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-stripe-pattern opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* WHY PART */}
        <div className="mb-24">
          <SectionHeading en="Why Define Academy?" ja="なぜ、今必要なのか" />
          <div className="bg-slate-900 rounded-none transform md:-skew-x-3 p-8 md:p-14 text-white shadow-2xl relative overflow-hidden border-r-8 border-[#00afcc]">
            {/* Mesh pattern overlay */}
            <div className="absolute inset-0 bg-grid-pattern-compact opacity-10"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center transform md:skew-x-3">
              <h3 className="text-2xl md:text-4xl font-black italic mb-8 leading-tight">
                実力はあるのに、<br/><span className="text-[#00afcc] border-b-4 border-[#00afcc] inline-block pb-1">言葉の壁</span>でチャンスを逃していませんか？
              </h3>
              <p className="text-slate-300 leading-loose mb-0 text-lg font-medium">
                海外のチームや留学先で、コーチの指示がわからない、審判に主張できない、
                チームメイトと深く繋がれない——。<br className="hidden md:block"/>
                日本にいる間に準備をしておけば、現地では技術向上に100%集中できます。<br/>
                DEFINE ACADEMYは、豊富なスポーツ経験と語学教育の知見で、<br className="hidden md:block"/>
                あなたの「言葉の壁」を「武器」に変えます。
              </p>
            </div>
          </div>
        </div>

        {/* FEATURES PART */}
        <SectionHeading en="Our Features" ja="プログラムの3つの特徴" />
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="relative w-24 h-24 mb-6">
                 <div className="absolute inset-0 bg-slate-100 transform rotate-45 group-hover:rotate-0 transition-transform duration-500 rounded-xl"></div>
                 <div className="absolute inset-0 bg-[#00afcc] transform rotate-12 opacity-20 group-hover:rotate-45 transition-transform duration-500 rounded-xl"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <feature.icon size={40} className="text-slate-900 group-hover:text-[#00afcc] transition-colors" />
                 </div>
              </div>
              <h4 className="text-xl font-black italic mb-3">{feature.title}</h4>
              <p className="text-slate-600 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* EFFECTS GRID */}
        <div className="bg-slate-50 border-y-2 border-slate-200 p-10 md:p-16 relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-black italic text-slate-800 uppercase tracking-tight">
              Performance <span className="text-[#00afcc]">Impact</span>
            </h3>
            <p className="text-slate-600 mt-2 font-bold">プログラム受講後の変化</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {effects.map((effect, idx) => (
              <div key={idx} className="bg-white p-8 border-l-4 border-[#00afcc] shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <effect.icon className="h-8 w-8 text-[#00afcc] mr-3" />
                  <h4 className="font-bold text-lg italic">{effect.title}</h4>
                </div>
                <p className="text-sm text-slate-600 font-medium pl-11">{effect.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
