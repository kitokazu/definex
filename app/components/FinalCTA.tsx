import { CtaButton } from "./CtaButton";

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-brand-dark/90"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-8 font-display italic">
          YOUR GAME.
          <br />
          <span className="text-brand-primary">YOUR FUTURE.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12">
          英語への苦手意識を捨てて、
          <br className="hidden md:block" />
          大好きなスポーツを通じて新しい世界へ飛び込みましょう。
          <br />
          まずはLINE登録から。
        </p>

        <div className="flex flex-col items-center">
          <CtaButton
            text="LINEで無料体験を受ける"
            subText="特典：初回カウンセリング無料"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
