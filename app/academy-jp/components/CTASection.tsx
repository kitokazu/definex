import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-[#00afcc] text-white text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
          さあ、世界へのチケットを手にしよう。
        </h2>
        <p className="text-lg md:text-xl text-cyan-50 mb-10 max-w-2xl mx-auto">
          スポーツの経験と英語力があれば、あなたの可能性は無限に広がります。
          <br />
          まずは無料体験で、その一歩を踏み出しませんか？
        </p>
        <a
          href="https://coubic.com/defineacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#00afcc] font-bold text-xl py-4 px-10 rounded-lg shadow-2xl hover:scale-105 transform transition-transform"
        >
          無料体験レッスンに申し込む
        </a>
      </div>
    </section>
  );
};

export default CTASection;
