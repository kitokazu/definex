import { Star } from "lucide-react";

export default function LandingTestimonials() {
  const reviews = [
    {
      role: "プロサッカー選手 (海外移籍予定)",
      name: "K.S. 様",
      content: "移籍交渉の席で、自分の要望を直接伝えられるようになりました。通訳を通すと消えてしまう熱意を、自分の言葉で伝えられたのが大きかったです。",
      tags: ["実践会話", "メンタル"]
    },
    {
      role: "大学テニス部コーチ",
      name: "T.M. 様",
      content: "外国人選手の指導に悩んでいましたが、技術的な指示だけでなく、モチベーションを上げる声かけができるようになりました。",
      tags: ["指導力", "コーチング"]
    },
    {
      role: "米国大学留学中",
      name: "A.Y. 様",
      content: "チームメイトとのロッカールームでの会話が一番の壁でしたが、スポーツ特有のスラングやジョークを学べたことで、一気に馴染めました。",
      tags: ["留学準備", "コミュニケーション"]
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#0F172A] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display italic">
            VOICE
          </h2>
          <p className="text-slate-400">受講生の声</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 relative hover:bg-white/10 transition-colors"
            >
              {/* Quote icon decoration */}
              <div className="absolute top-4 right-6 text-6xl text-white/10 font-serif leading-none">&ldquo;</div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-white mb-6 leading-relaxed relative z-10">
                {review.content}
              </p>

              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-sm text-brand-primary">{review.role}</p>
                <p className="font-bold text-white">{review.name}</p>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {review.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded border border-white/20">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

