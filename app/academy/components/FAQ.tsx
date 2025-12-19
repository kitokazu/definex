import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-slate-800 pr-8">{q}</span>
        <span className="text-[#00afcc] shrink-0">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg">
          {a}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const questions = [
    { q: "英語が全く話せなくても大丈夫ですか？", a: "はい、問題ありません。バイリンガル講師が日本語でサポートしながら進めますので、初心者の方でも安心して受講いただけます。" },
    { q: "レッスンの予約方法は？", a: "専用のオンライン予約システムから、ご都合の良い日時を選んで予約いただけます。スマートフォンから簡単に変更・キャンセルも可能です。" },
    { q: "どのようなツールを使いますか？", a: "ZoomまたはGoogle Meetを使用します。画面共有で資料を見ながら、効率的にレッスンを進めます。" },
    { q: "特定のスポーツ用語だけを学びたいのですが？", a: "可能です。DEFINE ACADEMYは100%カスタマイズですので、「サッカーの審判用語」や「ゴルフのレッスン用語」など、ピンポイントなご要望にも対応します。" },
    { q: "体験レッスンに必要なものは？", a: "PCまたはスマートフォンと、安定したインターネット環境があれば大丈夫です。筆記用具があると便利です。" },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading en="FAQ" ja="よくある質問" />
        <div className="bg-white rounded-2xl">
          {questions.map((item, index) => (
            <FAQItem key={index} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;