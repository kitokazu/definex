import React from 'react';
import Button from './Button';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  // TODO: Replace with actual URLs of your uploaded sports silhouettes
  const SPORTS_VISUALS = [
    { name: "Baseball", src: "https://file-service-alpha.internal.based.dev/file/file-service-alpha/c4d6b9f2-2a4b-4c5d-b4e2-0c31000712b3" },
    { name: "Basketball", src: "https://file-service-alpha.internal.based.dev/file/file-service-alpha/d5e7c0a3-3b5c-4d6e-c5f3-1d42000754c5" },
    { name: "Football", src: "https://file-service-alpha.internal.based.dev/file/file-service-alpha/e6f8d1b4-4c6d-4e7f-d6g4-2e53000796d7" },
    { name: "Golf", src: "https://file-service-alpha.internal.based.dev/file/file-service-alpha/f709e2c5-5d7e-4f80-e7h5-3f64000838e9" }, 
    { name: "Soccer", src: "https://file-service-alpha.internal.based.dev/file/file-service-alpha/g810f3d6-6e8f-5091-f8i6-4g75000880f0" }, 
    { name: "Tennis", src: "https://file-service-alpha.internal.based.dev/file/file-service-alpha/h921g4e7-7f90-6102-g9j7-5h86000922g1" }, 
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
              <span className="text-xs font-black uppercase tracking-widest skew-x-[12deg]">Sports English Coaching</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black italic text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              WELCOME TO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00afcc] to-[#008fa6]">DEFINE ACADEMY</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl font-bold text-slate-700 mb-8 border-l-4 border-[#00afcc] pl-4">
              スポーツの力で、<br className="sm:hidden" />英語はもっと自由になる。
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
              アスリート、コーチ、スポーツ関係者が直面する「言葉の壁」。<br className="hidden sm:block" />
              DEFINE ACADEMYは、あなたの専門競技や目標に完全フォーカスした<br className="hidden sm:block" />
              <span className="font-bold text-[#00afcc] bg-cyan-50 px-1">100%カスタマイズのオンライン個別指導</span>を提供します。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button variant="primary" className="group text-lg px-10">
                無料体験に申し込む
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">
                詳しく見る
              </Button>
            </div>
          </div>

          <div className="relative group">
            {/* Visual Composition */}
            <div className="relative z-10 transform transition-transform duration-500 hover:scale-[1.02]">
               <div className="absolute inset-0 bg-[#00afcc] transform translate-x-4 translate-y-4 skew-x-[-6deg] rounded-none"></div>
               <div className="relative bg-slate-900 aspect-[4/3] overflow-hidden transform skew-x-[-6deg] border-4 border-white shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1552674605-469523170d9e?q=80&w=800&auto=format&fit=crop" 
                  alt="Sports English Learning" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity transform skew-x-[6deg] scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#00afcc]/90 via-transparent to-transparent flex flex-col justify-end p-8 transform skew-x-[6deg]">
                  <p className="text-white font-black italic text-2xl md:text-3xl leading-none mb-2 drop-shadow-lg">
                    &ldquo;THE LIMIT IS NOT IN YOUR ABILITY, BUT IN YOUR LANGUAGE.&rdquo;
                  </p>
                </div>
              </div>

              {/* Overlay Silhouettes for decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none z-20">
                 <img src={SPORTS_VISUALS[0].src} alt="" className="w-full h-full object-contain filter brightness-0 invert" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Infinite Sports Ticker */}
      <div className="bg-slate-900 border-y-4 border-[#00afcc] py-4 overflow-hidden relative transform -skew-y-2 origin-left scale-110">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {tickerItems.map((sport, index) => (
            <div key={index} className="mx-8 md:mx-16 flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
              {/* Silhouette Image */}
              <div className="h-12 w-12 mb-0">
                <img 
                  src={sport.src} 
                  alt={sport.name} 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-xs font-black italic text-[#00afcc] tracking-widest uppercase mt-1">{sport.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
