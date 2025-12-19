import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Light",
      monthlyPrice: "8,800",
      times: "月2回",
      desc: "まずは気軽に始めたい方へ",
      features: ["完全個別カリキュラム", "学習カウンセリング", "チャットサポート(限定的)"]
    },
    {
      name: "Standard",
      monthlyPrice: "17,600",
      times: "月4回",
      recommended: true,
      desc: "着実に力をつけたい推奨プラン",
      features: ["完全個別カリキュラム", "毎回のフィードバック", "無制限チャットサポート", "留学・進路相談"]
    },
    {
      name: "Athlete Pro",
      monthlyPrice: "35,200",
      times: "月8回",
      desc: "短期間で飛躍的に伸ばす",
      features: ["完全個別カリキュラム", "詳細フィードバックレポート", "優先予約枠", "模擬インタビュー対策"]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00afcc] opacity-5 transform skew-x-[-20deg]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading en="Price Plans" ja="選べる料金プラン" light />
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col ${
                plan.recommended 
                  ? 'bg-white text-slate-900 transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,175,204,0.3)] z-10' 
                  : 'bg-slate-800 text-white border border-slate-700'
              }`}
            >
              {plan.recommended && (
                <div className="bg-[#00afcc] text-white text-center py-2 font-black italic tracking-widest uppercase text-sm">
                  Recommended
                </div>
              )}
              
              <div className="p-8 flex-grow">
                <div className="mb-6 border-b-2 border-dashed border-opacity-20 pb-6 border-current">
                  <h3 className={`text-xl font-black italic uppercase tracking-widest mb-4 ${plan.recommended ? 'text-[#00afcc]' : 'text-slate-400'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-end mb-2">
                    <span className="text-2xl font-bold mb-1">¥</span>
                    <span className="text-5xl md:text-6xl font-black tracking-tighter leading-none">{plan.monthlyPrice}</span>
                  </div>
                  <p className="text-xs opacity-60 font-bold mb-4 text-right">/ MONTH (税込)</p>
                  
                  <div className={`inline-block px-4 py-1 text-sm font-bold transform -skew-x-12 ${
                      plan.recommended ? 'bg-slate-900 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                      <span className="block transform skew-x-12">{plan.times}</span>
                  </div>
                </div>

                <p className="text-sm font-medium opacity-80 mb-6 min-h-[3em]">{plan.desc}</p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 shrink-0 ${plan.recommended ? 'text-[#00afcc]' : 'text-[#00afcc]'}`} strokeWidth={3} />
                      <span className="text-sm font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0 mt-auto">
                <Button 
                  variant={plan.recommended ? 'primary' : 'white'} 
                  fullWidth
                  className={!plan.recommended ? '!bg-slate-700 !text-white !border-slate-600 hover:!bg-slate-600' : ''}
                >
                  SELECT PLAN
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Drop-in & Corporate */}
        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 border-l-4 border-[#00afcc] flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h4 className="font-bold text-lg text-white">都度利用プラン</h4>
              <p className="text-sm text-slate-400">必要な時だけスポット受講</p>
            </div>
            <div className="text-right">
              <span className="block text-2xl font-black text-[#00afcc]">¥4,950<span className="text-sm font-normal text-slate-400"> /回</span></span>
            </div>
          </div>
          <div className="bg-[#00afcc] text-white p-6 flex flex-col sm:flex-row items-center justify-between shadow-lg">
            <div className="mb-4 sm:mb-0">
              <h4 className="font-black italic text-xl">TEAM / CORPORATE</h4>
              <p className="text-sm text-cyan-100 font-bold">団体・法人利用はこちら</p>
            </div>
            <Button variant="white" className="!py-2 !px-6 text-sm">
              お問い合わせ
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;