import type { Metadata } from "next";
import {
  Brain,
  CheckCircle2,
  Globe,
  MessageCircle,
  Quote,
  Star,
  Target,
  Trophy,
  UserCheck,
  Zap,
} from "lucide-react";
import { CtaButton } from "./components/CtaButton";

const FEATURES = [
  {
    icon: <Brain className="w-10 h-10 text-brand-primary" />,
    title: "興味があるから続く",
    desc: "教科書の例文ではなく、あなたの好きなスポーツやチームの話題が教材。だから楽しく継続できます。",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bde9be2d?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-brand-primary" />,
    title: "自然と話せるようになる",
    desc: "「戦術を伝えたい」「あのプレーを語りたい」という情熱が、スピーキング量を自然に増やします。",
    image:
      "https://images.unsplash.com/photo-1516357231954-91487b459602?auto=format&fit=crop&q=80&w=600",
  },
  {
    icon: <Target className="w-10 h-10 text-brand-primary" />,
    title: "実戦的な英語力",
    desc: "スポーツの現場や海外生活で本当に使われている「生きた英語」をダイレクトに習得できます。",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&q=80&w=600",
  },
];

const TESTIMONIALS = [
  {
    role: "プロリーグ審判",
    text: "ルールの説明や外国人選手とのコミュニケーションが劇的にスムーズになりました。現場で使える表現ばかりなので、即戦力になっています。",
    highlight: "現場での信頼度が上がった",
  },
  {
    role: "大学生アスリート (米国留学中)",
    text: "留学前にスポーツ特有の言い回しを学べたおかげで、チーム合流初日からコーチの指示が聞き取れました。自信を持ってプレーできています。",
    highlight: "コーチの指示が聞き取れる",
  },
  {
    role: "高校球児",
    text: "将来メジャーに行きたくて始めました。野球の用語で英語を学べるので、勉強という感覚がなく毎日楽しいです！TOEICの点数も上がりました。",
    highlight: "勉強感覚ゼロで楽しい",
  },
  {
    role: "医療職ゴルファー",
    text: "海外のゴルフ中継を英語で理解したくて受講。技術的な解説が分かるようになり、自身のプレーの参考にもなっています。趣味がより深まりました。",
    highlight: "趣味のゴルフがもっと深まる",
  },
];

export const metadata: Metadata = {
  title: "DEFINE ACADEMY | スポーツ × 英会話",
  description:
    "スポーツ好きのための英会話。英語がもっと身近に、もっと楽しく。DEFINE ACADEMYの公式ランディングページ。",
};

export default function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">
      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10 h-16 md:h-20 flex items-center justify-between px-4 md:px-8 shadow-lg">
        <div className="font-display font-bold text-2xl md:text-3xl tracking-tighter italic text-white">
          DEFINE <span className="text-brand-primary">ACADEMY</span>
        </div>
        <a
          href="https://line.me/"
          className="bg-brand-line hover:bg-brand-lineHover text-white text-xs md:text-sm font-bold px-4 py-2 md:px-6 md:py-3 rounded-full transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(6,199,85,0.4)] flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          無料体験はこちら
        </a>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop"
            alt="Stadium Atmosphere"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-brand-dark/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-brand-primary/20 border border-brand-primary/50 text-brand-primary font-bold px-4 py-1.5 rounded-full text-sm tracking-widest uppercase mb-6 backdrop-blur-sm animate-fade-in-up">
              <Zap className="w-4 h-4 fill-current" />
              Sports × English Learning
            </div>

            <h1 className="font-display italic font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-6 drop-shadow-2xl">
              英語が
              <br />
              もっと身近に、
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">
                もっと楽しく。
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl mb-8 border-l-4 border-brand-primary pl-6">
              「机に向かう勉強」はもう終わり。
              <br />
              あなたの好きなスポーツをテーマに、
              <br />
              世界とつながる英語力を手に入れませんか？
            </p>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <CtaButton subText="LINEで無料体験を予約" />
            </div>

            <div className="mt-12 flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/sportsUser${i}/100/100`}
                    alt="user"
                    className="w-10 h-10 rounded-full border-2 border-brand-dark"
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-sm">Join our Community</p>
                <p className="text-xs text-brand-primary">多くのアスリート・学生が参加中</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic shape divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="fill-brand-dark"
            ></path>
          </svg>
        </div>
      </section>

      {/* --- PROBLEM SECTION --- */}
      <section className="py-24 bg-brand-dark relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white mb-4">
                PROBLEM
              </h2>
              <div className="h-1 w-24 bg-brand-primary mb-6"></div>
              <p className="text-2xl font-bold text-white">
                こんな
                <span className="text-brand-primary underline decoration-2 underline-offset-4">
                  お悩み
                </span>
                ありませんか？
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "英会話が続かない",
                desc: "教科書の内容がつまらなくて、モチベーションが維持できない...",
                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "専門用語が学べない",
                desc: "スポーツの技術や戦術を英語でどう表現するのか、教えてくれる場所がない...",
                img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "自信がない",
                desc: "「文法はわかるけど話せない」。間違いを恐れて無口になってしまう...",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/20 transition-colors z-10"></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-brand-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-display text-xl shadow-lg">
                    !
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-brand-primary transform skew-x-[-12deg] blur-sm opacity-50"></div>
              <div className="relative bg-brand-primary text-brand-dark font-bold font-display italic text-2xl md:text-3xl py-4 px-12 rounded-lg transform skew-x-[-12deg] shadow-[0_0_20px_rgba(0,175,204,0.6)]">
                <span className="block transform skew-x-[12deg]">その悩み、すべて解決します。</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTION SECTION --- */}
      <section className="py-32 relative bg-[#0f151f] overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Diagonal Cut Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180 z-20">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="fill-brand-dark"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-bold font-display italic tracking-widest text-lg uppercase">
              Our Solution
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-2 font-display italic uppercase">
              Sports <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-white">×</span> English
            </h2>
            <p className="text-slate-400 mt-4 text-lg">スポーツをテーマにした英語学習という新しい答え</p>
          </div>

          <div className="space-y-24">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute inset-0 bg-brand-primary rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[300px] md:h-[400px]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="w-16 h-16 bg-brand-dark/90 backdrop-blur rounded-xl flex items-center justify-center border border-brand-primary/30 mb-4">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold font-display italic text-white mb-6">
                    <span className="text-brand-primary text-4xl mr-2">0{idx + 1}.</span>
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed border-l-2 border-brand-primary/30 pl-6">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-primary/20">
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Team meeting"
                />
                <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply"></div>
              </div>

              <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">まずは無料体験で実感してください</h3>
                  <p className="text-slate-300 text-lg">あなたの好きなスポーツについて、英語で語り合いましょう。</p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href="https://line.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(0,175,204,0.5)] transition-all transform hover:scale-105"
                  >
                    <MessageCircle className="w-6 h-6 fill-white" />
                    LINEで友達追加する
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AUTHORITY (INSTRUCTOR) SECTION --- */}
      <section className="py-24 px-4 bg-brand-dark relative border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display italic text-4xl md:text-5xl font-bold text-white mb-4">INSTRUCTOR</h2>
            <p className="text-slate-400">実績あるプロフェッショナルがサポート</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Card Style */}
            <div className="w-full lg:w-5/12 relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-primary to-blue-600 rounded-[2rem] opacity-30 blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#162032]">
                <img
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=987"
                  alt="Head Coach"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                  <p className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-1">Head Coach</p>
                  <h3 className="text-4xl font-bold font-display italic text-white uppercase">Ken Suzuki</h3>
                  <div className="flex gap-4 mt-4">
                    <div className="bg-white/20 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white border border-white/10">IMG Academy</div>
                    <div className="bg-white/20 backdrop-blur px-3 py-1 rounded text-xs font-bold text-white border border-white/10">TOEIC 985</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <Quote className="w-12 h-12 text-brand-primary/30 mb-6 rotate-180" />
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-8">
                「英語は勉強科目ではなく、
                <br />
                <span className="text-brand-primary">スポーツを楽しむための最強のツール</span>です。」
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase font-bold mb-2">Language</p>
                  <p className="font-bold text-xl text-white">日本語 / English</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase font-bold mb-2">Score</p>
                  <p className="font-bold text-xl text-brand-primary font-display">TOEIC 985 / VERSANT 79</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-brand-accent" />
                  Background
                </h4>
                <ul className="space-y-4">
                  {[
                    "米国 IMG Academy 出身",
                    "元 外資系スポーツ企業勤務",
                    "スポーツ経験：野球 / ゴルフ / サッカー / バスケ / 陸上 / パデル",
                    "インターナショナルスクール指導経験あり",
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

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 px-4 bg-[#0B1120] relative overflow-hidden">
        {/* Slanted Background */}
        <div className="absolute inset-0 transform -skew-y-3 bg-[#0F172A] scale-110 z-0"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display italic text-white">
              FUTURE BENEFITS
              <br />
              <span className="text-brand-primary text-xl md:text-2xl font-sans font-normal not-italic block mt-4">
                DEFINE ACADEMYで手に入る未来
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "スポーツ専門英語の習得",
                desc: "一般的な英会話スクールでは学べない、競技特有の用語やニュアンスを完全に理解できます。",
                icon: <Globe className="w-8 h-8 text-white" />,
                bg: "bg-gradient-to-br from-blue-600 to-blue-800",
              },
              {
                title: "海外挑戦・留学への道",
                desc: "セレクション、コーチとの面談、チームメイトとの連携。現地で「戦える」コミュニケーション力を養います。",
                icon: <Trophy className="w-8 h-8 text-white" />,
                bg: "bg-gradient-to-br from-brand-primary to-cyan-600",
              },
              {
                title: "戦術・分析を英語で語る",
                desc: "「なぜそのプレーをしたのか？」論理的に英語で説明する力がつき、選手としても指導者としてもレベルアップします。",
                icon: <UserCheck className="w-8 h-8 text-white" />,
                bg: "bg-gradient-to-br from-purple-600 to-purple-800",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-white/20 to-transparent hover:from-brand-primary hover:to-brand-primary/50 transition-all duration-300"
              >
                <div className="bg-[#1e293b] rounded-2xl p-8 h-full relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full ${benefit.bg}`}></div>
                  <div
                    className={`w-14 h-14 rounded-xl ${benefit.bg} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-12 transition-transform`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICE OVERVIEW --- */}
      <section className="py-24 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-display italic">
            <span className="text-brand-primary">SERVICE</span> OVERVIEW
          </h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="space-y-12">
              {[
                {
                  icon: <UserCheck className="w-8 h-8 text-brand-dark" />,
                  title: "オンライン個別指導（マンツーマン）",
                  desc: "あなたのペースに合わせて、ZoomやGoogle Meetを使用した完全マンツーマンレッスンを行います。",
                },
                {
                  icon: <Target className="w-8 h-8 text-brand-dark" />,
                  title: "100% カスタムカリキュラム",
                  desc: "「サッカー留学がしたい」「ゴルフのレッスン動画を理解したい」など、目的に合わせて教材をオーダーメイドで作成します。",
                },
                {
                  icon: <Star className="w-8 h-8 text-brand-dark" />,
                  title: "初心者〜プロアスリート対応",
                  desc: "英語が全く話せない初心者から、すでに海外で活躍しているプロ選手まで。レベルに合わせた指導を提供します。",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-6 items-start border-b border-white/10 pb-12 last:border-0 last:pb-0"
                >
                  <div className="bg-brand-primary p-4 rounded-2xl shadow-[0_0_15px_rgba(0,175,204,0.3)] shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 px-4 bg-[#0F172A] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display italic">VOICE</h2>
            <p className="text-slate-400">受講生の声</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 relative hover:bg-white/10 transition-colors"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10 fill-white/10" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-primary to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg border-2 border-brand-dark">
                    {t.role.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-1">Student</p>
                    <p className="text-sm text-white font-bold">{t.role}</p>
                    <div className="flex text-brand-accent mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white font-bold text-lg mb-3">&ldquo;{t.highlight}&rdquo;</p>
                <p className="text-slate-400 text-sm leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
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
            まずはLINE登録から。あなたの夢を聞かせてください。
          </p>

          <div className="flex flex-col items-center">
            <CtaButton text="LINEで無料体験を受ける" subText="特典：初回カウンセリング無料" className="w-full max-w-lg" />
            <p className="mt-6 text-xs text-slate-500">※定員になり次第、無料体験の受付を終了する場合がございます。</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-slate-500 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-2xl text-white italic mb-2">
              DEFINE <span className="text-brand-primary">ACADEMY</span>
            </div>
            <p className="text-xs">Sports English Communication Academy.</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-brand-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="text-xs">&copy; {currentYear} DEFINE ACADEMY.</div>
        </div>
      </footer>

      {/* --- MOBILE STICKY CTA --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-brand-dark/95 backdrop-blur border-t border-white/10 z-50">
        <a
          href="https://line.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-brand-line text-white font-bold py-3 rounded-full shadow-lg active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          LINEで無料体験を受ける
        </a>
      </div>
    </div>
  );
}
