import React from 'react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

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
                    <Zap size={14} className="fill-brand" /> A SPORTS & ACADEMY COMPANY
                  </span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tighter italic drop-shadow-lg">
                個々の<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white">可能性</span>を高め
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

            <FadeIn delay={500} className="flex flex-col sm:flex-row gap-6 pt-6">
              <a
                href="#services-academy"
                className="group relative px-8 py-5 bg-brand text-slate-950 font-black overflow-hidden skew-x-[-12deg] transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,175,204,0.4)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="relative flex items-center justify-center skew-x-[12deg] tracking-wider">
                  DEFINE ACADEMY
                  <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <a
                href="#services-sports"
                className="group relative px-8 py-5 border-2 border-white/20 text-white font-bold overflow-hidden skew-x-[-12deg] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-transparent hover:border-white"
              >
                <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="relative flex items-center justify-center skew-x-[12deg] tracking-wider group-hover:text-slate-950 transition-colors">
                  SPORTS
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={400} direction="left" className="relative h-[400px] md:h-[600px] w-full hidden md:block group">
            <div className="absolute top-6 right-6 w-full h-full border-2 border-slate-700 -z-10 translate-x-2 translate-y-2 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 skew-x-[-6deg]" />
            <div className="absolute inset-0 overflow-hidden shadow-2xl skew-x-[-6deg] group-hover:skew-x-[-4deg] transition-all duration-500 border-4 border-slate-800 bg-slate-900">
              <img
                src="https://picsum.photos/800/1000?grayscale"
                alt="Sports and Education"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-brand/20 mix-blend-overlay" />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent"></div>

              <div className="absolute bottom-12 right-0 bg-slate-900 text-white py-4 px-8 skew-x-12 translate-x-4 shadow-xl border-l-4 border-brand">
                <div className="-skew-x-12">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1 text-brand">Established 2024</p>
                  <p className="text-2xl font-black italic">TOKYO, JAPAN</p>
                </div>
              </div>

              <div className="absolute top-8 left-8">
                <p className="text-slate-800 text-4xl font-black italic tracking-tighter text-stroke-white opacity-20">
                  BEYOND
                </p>
                <p className="text-white text-4xl font-black italic tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  LIMITS
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
