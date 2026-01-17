import React from "react";
import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

const Hero: React.FC = () => {
  const SPORTS_VISUALS = [
    { name: "Baseball", src: "/sports/sprts_images_baseball.png" },
    { name: "Basketball", src: "/sports/sprts_images_basketball.png" },
    { name: "Football", src: "/sports/sprts_images_football.png" },
    { name: "Golf", src: "/sports/sprts_images_golf.png" },
    { name: "Soccer", src: "/sports/sprts_images_soccer.png" },
    { name: "Tennis", src: "/sports/sprts_images_tennis_w.png" },
  ];

  // Duplicate the array for infinite scroll effect
  const tickerItems = [...SPORTS_VISUALS, ...SPORTS_VISUALS];

  return (
    <section className="relative pt-32 lg:pt-48 overflow-hidden bg-slate-50">
      {/* Background with Sporty Lines */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#eefbff] transform skew-x-[-12deg] translate-x-1/3"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern-compact opacity-30"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#00afcc]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-1 transform skew-x-[-12deg] mb-8">
              <Zap size={16} className="text-[#00afcc] skew-x-[12deg]" />
              <span className="text-xs font-black uppercase tracking-widest skew-x-[12deg]">
                Sports English Coaching
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black italic text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              WELCOME TO <br />
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#00afcc] to-[#008fa6] px-1">
                DEFINE ACADEMY
              </div>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-700 mb-8 border-l-4 border-[#00afcc] pl-4">
              個々の可能性を高め、
              <br className="sm:hidden" />
              未来を築く
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
              アスリート、コーチ、スポーツ関係者が直面する「言葉の壁」。
              <br className="hidden sm:block" />
              DEFINE ACADEMYは、あなたの専門競技や目標に完全フォーカスした
              <br className="hidden sm:block" />
              <span className="font-bold text-[#00afcc] bg-cyan-50 px-1">
                100%カスタマイズのオンライン個別指導
              </span>
              を提供します。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a
                href="https://coubic.com/defineacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-[#00afcc] text-white font-bold text-lg py-3 px-10 rounded-lg hover:bg-[#00afcc]/90 transition-colors"
              >
                無料体験に申し込む
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative group ">
            {/* Visual Composition - Big X Logo */}
            <Image
              src="/big_X.webp"
              alt="DEFINE X"
              width={600}
              height={600}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Infinite Sports Ticker */}
      <div className="bg-slate-900 border-y-4 border-[#00afcc] py-4 overflow-hidden relative transform -skew-y-2 origin-left scale-110">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {tickerItems.map((sport, index) => (
            <div
              key={index}
              className="mx-8 md:mx-16 flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {/* Silhouette Image */}
              <div className="h-12 w-12 mb-0">
                <img
                  src={sport.src}
                  alt={sport.name}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-xs font-black italic text-[#00afcc] tracking-widest uppercase mt-1">
                {sport.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
