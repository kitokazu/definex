import React from 'react';
import SectionHeading from './SectionHeading';
import { Settings, Users, Trophy, Globe, UserCheck } from 'lucide-react';

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

  const benefits = [
    {
      title: "スポーツ専門英語の習得",
      desc: "一般的な英会話スクールでは学べない、競技特有の用語やニュアンスを完全に理解できます。",
      icon: <Globe className="w-8 h-8 text-white" />,
      bg: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      title: "海外挑戦・留学への道",
      desc: "セレクション、コーチとの面談、チームメイトとの連携。現地で「戦える」コミュニケーション力を養います。",
      icon: <Trophy className="w-8 h-8 text-white" />,
      bg: "bg-gradient-to-br from-brand-primary to-cyan-600",
    },
    {
      title: "戦術・分析を英語で語る",
      desc: "「なぜそのプレーをしたのか？」論理的に英語で説明する力がつき、選手としても指導者としてもレベルアップします。",
      icon: <UserCheck className="w-8 h-8 text-white" />,
      bg: "bg-gradient-to-br from-purple-600 to-purple-800",
    },
  ];

  return (
    <>
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

      </div>
    </section>

    {/* FUTURE BENEFITS */}
    <section className="py-24 px-4 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute inset-0 transform -skew-y-3 bg-[#0F172A] scale-110 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display italic text-white">
            FUTURE BENEFITS
            <br />
            <span className="text-brand-primary text-xl md:text-2xl font-sans font-normal not-italic block mt-4">
              DEFINE ACADEMYで手に入る未来
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-transparent hover:from-brand-primary hover:to-brand-primary/50 transition-all duration-300"
            >
              <div className="bg-[#1e293b] rounded-2xl p-8 h-full relative overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full ${benefit.bg}`}
                ></div>
                <div
                  className={`w-14 h-14 rounded-xl ${benefit.bg} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-12 transition-transform`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Features;
