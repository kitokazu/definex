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
          <a href="https://lin.ee/22zZcZV" target="_blank" rel="noopener noreferrer" className="block w-full max-w-lg transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#06C755] rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(6,199,85,0.5)] border-2 border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="relative z-10">
                <p className="text-white font-bold text-xl mb-5">LINE公式アカウントはじめました</p>
                <div className="inline-flex items-center bg-white rounded-full px-8 py-3 mb-5 shadow-lg">
                  <span className="text-[#06C755] font-black text-lg mr-2">LINE</span>
                  <span className="text-[#06C755] font-bold">友だち追加</span>
                </div>
                <p className="text-white font-bold text-lg">友達追加で無料体験案内中！</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
