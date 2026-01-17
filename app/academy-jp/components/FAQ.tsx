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
  const faqCategories = [
    {
      category: "プログラムについて",
      questions: [
        { q: "スポーツ英会話って何？", a: "スポーツに関する英語のコミュニケーションスキルや専門用語のこと。スポーツのトピックで英会話レッスンをします！スポーツをトピックとして英語を学びたい方や、英語を使えるようになって留学がしたい！という方におすすめです。" },
        { q: "レッスンの特徴は？", a: "30分の 1 on 1 オンラインレッスンとなっております。カスタマイズされたアプローチ、リアルタイムのフィードバック、レベル別カリキュラム、実践的なアプローチ、実用的な会話スキル、留学アドバイスなどを提供します。自分が目指す事や興味関心がある事にターゲットを当て、インプットしアウトプットする練習をしていきます。" },
        { q: "講師はどんな人？", a: "英語と日本語のバイリンガル、海外大学卒、アメリカにてスポーツ留学経験があり、国内で国際的な環境でスポーツを経験してきた講師が在籍しております！" },
      ]
    },
    {
      category: "予約について",
      questions: [
        { q: "最短で何時間後のレッスンを予約できますか？", a: "最短で36時間後のレッスンを予約できます。" },
        { q: "予約の変更やキャンセルはどのように行えますか？(都度利用の場合)", a: "予約完了後noreply@coubic.com より送られてくる予約通知メールに記載のリンクより24時間前までキャンセルできます。ただし、決済から25日経過後はキャンセルできません。日程変更はできないため、変更したい場合は一度キャンセルして再予約してください。" },
        { q: "予約の変更やキャンセルはどのように行えますか？(月額利用の場合)", a: "予約完了後noreply@coubic.com より送られてくる予約通知メールに記載のリンクよりレッスン開始の２４時間前まで行なっていただけます。" },
        { q: "翌月の予約はいつから可能ですか？", a: "毎月21日18時より、翌月末までの予約が可能です。" },
      ]
    },
    {
      category: "月額プラン・各種手続きについて",
      questions: [
        { q: "月額プランの支払い方法はどのようになっていますか？", a: "月額プランの支払いは、毎月1日に登録されたクレジットカードから引き落としされます。利用可能クレジットカード: VISA、MasterCard、American Express、JCB、など" },
        { q: "月額プランに加入する際の請求初日はいつですか？", a: "月額プランに加入した日が、請求初日です。月初めの入会がおすすめです。" },
        { q: "月額プランで加入した場合、返金は可能ですか？", a: "月額プランでの加入の場合、返金は行っておりません。毎月1日に料金が引き落とされますので、予めご了承ください。" },
        { q: "月額プランの解約方法はどのようになっていますか？", a: "解約をご希望の場合は、お客様からお問い合わせいただき、スタッフが設定を変更いたします。例えば、5月5日に解約された場合でも、5月いっぱいまでプランに入っていただけます。" },
        { q: "月額プランの未使用分は繰り越し可能ですか？", a: "レッスン未使用分の翌月以降の繰り越しすることはできます。ただし、月謝の契約を終了した場合、終了後の翌月から繰越分は利用できなくなります。当月で月謝の契約を終了した、または来月から請求停止をした場合、残回数が残っていた場合でも繰越分は付与されません。" },
      ]
    },
    {
      category: "その他について",
      questions: [
        { q: "スマートフォンやタブレットから受講できますか？", a: "はい、受講いただけます。" },
        { q: "選択したコース費用以外に追加で教材費等はかかりますか？", a: "いいえ、かかりません。それぞれのコース費用以外の追加費用は一切発生しません。" },
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading en="FAQ" ja="よくある質問" />
        <div className="space-y-8">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-lg font-bold text-[#00afcc] mb-4 border-l-4 border-[#00afcc] pl-3">
                {category.category}
              </h3>
              <div className="bg-white rounded-2xl">
                {category.questions.map((item, index) => (
                  <FAQItem key={index} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;