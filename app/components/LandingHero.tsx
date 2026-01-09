import { Zap } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
          alt="Stadium Atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/50 text-brand-primary font-bold px-4 py-1.5 rounded-full text-sm tracking-widest uppercase mb-6 backdrop-blur-sm animate-fade-in-up">
            <Zap className="w-4 h-4 fill-current" />
            Sports × English Learning
          </div>

          <h1 className="font-display italic font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-6 drop-shadow-2xl">
            英語が
            <br />
            もっと身近に、
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">
              もっと楽しく。
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8 border-l-4 border-brand-primary pl-6">
            「机に向かう勉強」はもう終わり。
            <br />
            あなたの好きなスポーツをテーマに、
            <br />
            世界とつながる英語力を手に入れませんか？
          </p>
        </div>
      </div>

      {/* Dynamic shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[80px]"
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
    </section>
  );
}

