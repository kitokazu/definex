import { UserCheck, Target, Star } from "lucide-react";

export default function ServiceOverview() {
  const services = [
    {
      icon: <UserCheck className="w-8 h-8 text-brand-dark" />,
      title: "オンライン個別指導（マンツーマン）",
      desc: "あなたのペースに合わせて、Zoomを使用した完全マンツーマンレッスンを行います。",
    },
    {
      icon: <Target className="w-8 h-8 text-brand-dark" />,
      title: "100% カスタムカリキュラム",
      desc: "「サッカー留学がしたい」「ゴルフのレッスン動画を理解したい」など、目的に合わせて教材をオーダーメイドで作成します。",
    },
    {
      icon: <Star className="w-8 h-8 text-brand-dark" />,
      title: "初心者〜プロアスリート対応",
      desc: "英語が全く話せない初心者から、すでに海外で活躍しているプロ選手まで。レベルに合わせた指導を提供します。",
    },
  ];

  return (
    <section className="py-24 px-4 bg-brand-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-display italic">
          <span className="text-brand-primary">SERVICE</span> OVERVIEW
        </h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="space-y-12">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 items-start border-b border-white/10 pb-12 last:border-0 last:pb-0"
              >
                <div className="bg-brand-primary p-4 rounded-2xl shadow-[0_0_15px_rgba(0,175,204,0.3)] shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

