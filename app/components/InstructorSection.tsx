import Image from "next/image";
import { Quote, Trophy, CheckCircle2 } from "lucide-react";

export default function InstructorSection() {
  return (
    <section className="py-24 px-4 bg-brand-dark relative border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white mb-4">
            INSTRUCTOR
          </h2>
          <p className="text-slate-400">実績あるプロフェッショナルがサポート</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Card Style */}
          <div className="w-full lg:w-5/12 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary to-blue-600 rounded-[2rem] opacity-30 blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#162032]">
              <Image
                src="/taisei-headshot.jpg"
                alt="Taisei Kitahara"
                width={987}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                <h3 className="text-4xl font-bold font-display italic text-white uppercase">
                  Taisei Kitahara
                </h3>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <Quote className="w-12 h-12 text-brand-primary/30 mb-6 rotate-180" />
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
              「英語は勉強科目ではなく、
              <br />
              <span className="text-brand-primary">
                スポーツを楽しむための最強のツール
              </span>
              です。」
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <p className="text-xs text-slate-400 uppercase font-bold mb-2">
                  Language
                </p>
                <p className="font-bold text-xl text-white">日本語 / English</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <p className="text-xs text-slate-400 uppercase font-bold mb-2">
                  Score
                </p>
                <p className="font-bold text-xl text-brand-primary font-display">
                  TOEIC 985 / VERSANT 79
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-brand-accent" />
                Background
              </h4>
              <ul className="space-y-4">
                {[
                  "米国IMG ACADEMYサマーリーグ参加",
                  "外資系スポーツ企業2社就職",
                  "スポーツ経験:野球、ゴルフ、バスケットボール、サッカー、陸上、パデルなど",
                  "インターナショナルスクール・米大学卒業",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
