import { Star } from "lucide-react";

export default function LandingTestimonials() {
  const reviews = [
    {
      role: "ジュニア",
      name: "保護者",
      content: "いつもの英語とは違って、自分が頑張ってるスポーツの英会話だったので、とても楽しく取り組めました。来年の夏にアメリカ行くまでに少しでも上達できるようにこれから頑張りたいです。"
    },
    {
      role: "ジュニア",
      name: "保護者",
      content: "オリジナルの工夫満載の楽しいレッスンで、野球という共通話題もできるお兄さんができたみたいで、息子もうれしそうでした!"
    },
    {
      role: "ジュニア",
      name: "保護者",
      content: "アメリカの大学へテニスでスカラーシップを得て入学するため、入学までの数か月間で英語力を上達させなければならず、何か良い勉強法はないかなと探していたところ、すごく良い先生に出会うことが出来ました。テニスを通して実際に使う英語を楽しく学べそうです!"
    },
    {
      role: "スポーツ関係者",
      name: "T.O 様",
      content: "習い始めて2ヶ月くらいですが、毎回30分のレクチャーがすごく早く感じます。先生はとても発音が綺麗で親切に教えてくれます。とても満足しています。"
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

        <div className="grid md:grid-cols-2 gap-8">
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
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

