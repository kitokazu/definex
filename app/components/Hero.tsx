import React from "react";
import { ArrowRight, ChevronRight, Zap } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-brand/20 to-transparent clip-diagonal opacity-60 pointer-events-none" />

      <div className="absolute top-0 right-[25%] w-0.5 h-full bg-brand/20 -skew-x-12 hidden lg:block box-shadow-glow" />
      <div className="absolute top-0 right-[18%] w-2 h-full bg-brand/10 -skew-x-12 hidden lg:block" />
      <div className="absolute top-0 right-[10%] w-0.5 h-full bg-brand/20 -skew-x-12 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-20">
            <FadeIn delay={100}>
              <div className="inline-flex items-center space-x-3 mb-6 bg-slate-900/80 backdrop-blur-sm pr-4 py-1 border-l-4 border-brand shadow-lg skew-x-[-12deg] shadow-brand/20">
                <div className="px-2 py-1">
                  <span className="text-brand font-black tracking-widest text-sm uppercase italic skew-x-[12deg] flex items-center gap-1">
                    <Zap size={14} className="fill-brand" /> A SPORTS & ACADEMY
                    COMPANY
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter italic drop-shadow-lg">
                <span className="whitespace-nowrap">
                  個々の
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white">
                    可能性
                  </span>
                  を高め
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="relative z-10">未来を築く</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-brand/40 -skew-x-12 -z-0"></span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-2xl md:text-4xl font-black text-slate-500 italic mb-6 tracking-tight">
                &ldquo;Sports Meets Education&rdquo;
              </p>
              <div className="pl-6 border-l-4 border-slate-700">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-lg font-bold">
                  DEFINE Xは、スポーツと教育を通じて、
                  <br className="hidden md:block" />
                  個々の成長と成功の物語を築くコミュニティです。
                </p>
              </div>
            </FadeIn>

            <FadeIn
              delay={500}
              className="flex flex-col sm:flex-row gap-6 pt-6"
            >
              <a
                href="/academy-jp"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-5 bg-brand text-slate-950 font-black overflow-hidden skew-x-[-12deg] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,175,204,0.4)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="relative flex items-center justify-center skew-x-[12deg] tracking-wider">
                  DEFINE ACADEMY
                  <ChevronRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </a>
              <a
                href="#services-sports"
                className="group relative px-8 py-5 border-2 border-white/20 text-white font-bold overflow-hidden skew-x-[-12deg] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-transparent hover:border-white"
              >
                <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="relative flex items-center justify-center skew-x-[12deg] tracking-wider group-hover:text-slate-950 transition-colors">
                  SPORTS
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </a>
            </FadeIn>
          </div>

          <FadeIn
            delay={400}
            direction="left"
            className="relative h-[400px] md:h-[600px] w-full hidden md:flex items-center justify-center"
          >
            <Image
              src="/big_X.webp"
              alt="DEFINE X"
              width={600}
              height={600}
              className="w-full h-full object-contain"
              priority
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
