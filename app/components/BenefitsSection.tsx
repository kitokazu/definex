import { Globe, Trophy, UserCheck } from "lucide-react";

export default function BenefitsSection() {
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
    <section className="py-24 px-4 bg-[#0B1120] relative overflow-hidden">
      {/* Slanted Background */}
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
  );
}

