export default function ProblemSection() {
  const problems = [
    {
      title: "英会話が続かない",
      desc: "教科書の内容がつまらなくて、モチベーションが維持できない...",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "専門用語が学べない",
      desc: "スポーツの技術や戦術を英語でどう表現するのか、教えてくれる場所がない...",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "自信がない",
      desc: "「文法はわかるけど話せない」。間違いを恐れて無口になってしまう...",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white mb-4">
              PROBLEM
            </h2>
            <div className="h-1 w-24 bg-brand-primary mb-6"></div>
            <p className="text-2xl font-bold text-white">
              こんな
              <span className="text-brand-primary underline decoration-2 underline-offset-4">
                お悩み
              </span>
              ありませんか？
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors z-10"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-display text-xl shadow-lg">
                  !
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-brand-primary transform skew-x-[-12deg] blur-sm opacity-50"></div>
            <div className="relative bg-brand-primary text-brand-dark font-bold font-display italic text-2xl md:text-3xl py-4 px-12 rounded-lg transform skew-x-[-12deg] shadow-[0_0_20px_rgba(0,175,204,0.6)]">
              <span className="block transform skew-x-[12deg]">
                その悩み、すべて解決します。
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

