import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, MessageSquare, UserCheck, ArrowRight } from 'lucide-react';

const Flow: React.FC = () => {
  const steps = [
    {
      icon: Mail,
      step: "STEP 01",
      title: "無料体験申込み",
      desc: "予約サイトから希望日時を選択。今の英語力や目標も簡単に入力してください。"
    },
    {
      icon: MessageSquare,
      step: "STEP 02",
      title: "カウンセリング & 体験",
      desc: "現状のレベルチェックと、目標達成に向けた最適なプランをご提案します。"
    },
    {
      icon: UserCheck,
      step: "STEP 03",
      title: "入会・レッスン開始",
      desc: "プラン決定後、あなた専用のカリキュラムを作成し、レッスンスタート！"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading en="How It Works" ja="入会までの流れ" />

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((item, index) => (
            <div key={index} className="bg-white p-6 relative group">
              <div className="w-24 h-24 mx-auto bg-white border-4 border-[#00afcc] rounded-full flex items-center justify-center mb-6 shadow-lg z-10 relative">
                <item.icon className="h-10 w-10 text-[#00afcc]" />
                {index < 2 && (
                    <ArrowRight className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-slate-200 hidden md:block" size={32} />
                )}
              </div>
              <div className="text-center">
                <span className="text-[#00afcc] font-bold text-sm tracking-widest">{item.step}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;