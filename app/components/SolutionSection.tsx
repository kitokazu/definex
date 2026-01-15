import {
  Brain,
  MessageCircle,
  Target,
  MessageCircle as MessageCircleIcon,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Brain className="w-10 h-10 text-brand-primary" />,
    title: "興味があるから続く",
    desc: "教科書の例文ではなく、あなたの好きなスポーツやチームの話題が教材。だから楽しく継続できます。",
    image: "/study-imagine.png",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-brand-primary" />,
    title: "自然と話せるようになる",
    desc: "「戦術を伝えたい」「あのプレーを語りたい」という情熱が、スピーキング量を自然に増やします。",
    image: "/huddle.jpg",
  },
  {
    icon: <Target className="w-10 h-10 text-brand-primary" />,
    title: "実戦的な英語力",
    desc: "スポーツの現場や海外生活で本当に使われている「生きた英語」をダイレクトに習得できます。",
    image: "/soccer.jpg",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-32 relative bg-[#0f151f] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Diagonal Cut Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180 z-20">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-brand-dark"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-bold font-display italic tracking-widest text-lg uppercase">
            Our Solution
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-2 font-display italic uppercase">
            Sports{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">
              ×
            </span>{" "}
            English
          </h2>
          <p className="text-slate-400 mt-4 text-lg">
            スポーツをテーマにした英語学習という新しい答え
          </p>
        </div>

        <div className="space-y-24">
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-brand-primary rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[300px] md:h-[400px]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="w-16 h-16 bg-brand-dark/90 backdrop-blur rounded-xl flex items-center justify-center border border-brand-primary/30 mb-4">
                      {feature.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold font-display italic text-white mb-6">
                  <span className="text-brand-primary text-4xl mr-2">
                    0{idx + 1}.
                  </span>
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed border-l-2 border-brand-primary/30 pl-6">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-primary/20">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
                className="w-full h-full object-cover"
                alt="Team meeting"
              />
              <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  まずは無料体験で実感してください
                </h3>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://line.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,175,204,0.5)] transition-all transform hover:scale-105"
                >
                  <MessageCircleIcon className="w-6 h-6 fill-white" />
                  LINEで友達追加する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
