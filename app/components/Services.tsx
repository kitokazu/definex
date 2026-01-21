import React from "react";
import { Activity, ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 bg-slate-950 relative overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="mb-24 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-baseline space-y-2 md:space-y-0 md:space-x-6">
            <h2 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter drop-shadow-lg">
              OUR SERVICES
            </h2>
            <div className="h-1 bg-brand w-24 skew-x-[-20deg] shadow-[0_0_10px_#00AFCC]"></div>
            <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">
              Sports / Community
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          <div id="services-academy" className="scroll-mt-24">
            <FadeIn delay={100} className="group relative">
              <div className="absolute top-0 right-0 md:-right-12 -translate-y-16 text-[10rem] md:text-[14rem] leading-none font-black text-transparent text-stroke-slate select-none -z-10 italic opacity-20 pointer-events-none transform -skew-x-12">
                01
              </div>

              <div className="bg-slate-900 shadow-2xl shadow-black/50 relative overflow-hidden group-hover:shadow-brand/10 transition-shadow duration-500 border border-slate-800">
                <div className="h-1 w-full bg-gradient-to-r from-slate-900 via-brand to-slate-900"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1 relative z-10">
                    <div className="flex items-center space-x-3 mb-8">
                      <div className="w-10 h-10 bg-brand text-white flex items-center justify-center font-bold text-xl skew-x-[-12deg] shadow-[0_0_10px_rgba(0,175,204,0.5)]">
                        <span className="skew-x-[12deg]">01</span>
                      </div>
                      <span className="text-slate-400 font-bold tracking-widest uppercase text-sm">
                        Academy Business
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      スポーツ英会話 <br />
                      <div className="mt-1">
                        <span className="text-brand italic text-4xl md:text-5xl block mt-1 tracking-tight text-shadow-glow">
                          DEFINE ACADEMY
                        </span>
                      </div>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                      スポーツをテーマにしたオンライン英会話レッスン。
                      <br />
                      現役アスリートやスポーツ愛好家向けに特化し、
                      ニーズに合わせて効率的・効果的な英語学習をサポートします。
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {[
                        "Online",
                        "1-on-1",
                        "Sports English",
                        "Custom Curriculum",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border-l-2 border-brand text-slate-300 text-sm font-bold uppercase tracking-wide bg-slate-800/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div>
                      <a href="/academy-jp" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-white text-slate-950 font-bold skew-x-[-12deg] hover:bg-brand hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,175,204,0.6)] hover:-translate-y-1 group/btn">
                        <span className="skew-x-[12deg] flex items-center">
                          公式サイトを見る
                          <ArrowUpRight
                            size={18}
                            className="ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                          />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="relative h-72 lg:h-auto order-1 lg:order-2 overflow-hidden bg-slate-800 flex items-center justify-center">
                    <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-slate-900 -skew-x-12 -translate-x-12 z-20"></div>

                    <Image
                      src="/define-academy-logo.png"
                      alt="DEFINE ACADEMY"
                      width={400}
                      height={120}
                      className="w-3/4 max-w-md h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div id="services-sports" className="scroll-mt-24">
            <FadeIn delay={300} className="group relative">
              <div className="absolute top-0 left-0 md:-left-12 -translate-y-16 text-[10rem] md:text-[14rem] leading-none font-black text-transparent text-stroke-slate select-none -z-10 italic opacity-20 pointer-events-none transform -skew-x-12">
                02
              </div>

              <div className="relative bg-slate-900 overflow-hidden shadow-2xl shadow-black/50 border border-slate-800">
                <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity">
                  <Image
                    src="/padel-court.jpg"
                    alt="Padel Court"
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 to-slate-900/60" />

                <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center">
                  <div className="mb-6 inline-flex items-center space-x-2 px-4 py-1 border border-brand/50 rounded-full bg-brand/10 backdrop-blur-sm">
                    <Activity size={16} className="text-brand" />
                    <span className="text-brand text-xs font-bold tracking-widest uppercase">
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="text-5xl md:text-7xl font-black text-white mb-6 italic tracking-tighter drop-shadow-md">
                    SPORTS BUSINESS
                  </h3>
                  <div className="w-24 h-2 bg-brand mb-8 skew-x-[-20deg] shadow-[0_0_10px_#00AFCC]"></div>
                  <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-12 font-bold leading-relaxed">
                    ハイレベルなスポーツアクティビティの提供を通じて、
                    <br />
                    ボーダレスなコミュニティを創造します。
                  </p>

                  <div className="inline-flex items-center px-10 py-4 border-2 border-white/10 text-slate-400 skew-x-[-12deg] relative overflow-hidden group/btn cursor-not-allowed bg-black/20">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <div className="skew-x-[12deg] flex items-center relative z-10">
                      <Lock size={18} className="mr-3 text-slate-500" />
                      <span className="font-black tracking-widest text-lg">
                        UNDER CONSTRUCTION
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
