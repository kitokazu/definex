import React from 'react';
import { Quote } from 'lucide-react';
import FadeIn from './FadeIn';

const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-slate-900 overflow-hidden text-white relative">
       {/* Decor */}
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Image Column */}
          <div className="lg:col-span-5">
            <FadeIn direction="right" className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl bg-slate-800 border-2 border-slate-700 skew-x-[-3deg]">
                 {/* Placeholder for Founder Image */}
                 <img 
                   src="https://picsum.photos/600/800?grayscale" 
                   alt="北原 大誠 - Taisei Kitahara" 
                   className="w-full h-full object-cover opacity-90 skew-x-[3deg] scale-110"
                 />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-slate-950 border-2 border-brand rounded-full flex items-center justify-center text-white p-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] hidden md:flex">
                <div className="text-center">
                   <span className="block text-xs font-light opacity-80 text-brand">FOUNDER</span>
                   <span className="block text-xl font-bold italic">CEO</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 lg:pl-8">
             <FadeIn delay={200}>
               <div className="flex items-center space-x-4 mb-8">
                 <div className="p-3 bg-slate-800 rounded-full text-brand border border-slate-700 shadow-lg">
                    <Quote size={24} />
                 </div>
                 <div>
                   <h2 className="text-sm font-bold text-brand tracking-widest uppercase mb-1">Founder Message</h2>
                   <h3 className="text-3xl font-bold text-white italic">無限の可能性を、すべての人に</h3>
                 </div>
               </div>
               
               <div className="prose prose-lg prose-invert text-slate-300 leading-relaxed">
                  <p className="font-bold text-white">こんにちは！</p>
                  
                  <p>
                    みなさんは、自分を表現する場はありますか？<br />
                    夢を実現するための手段を知っていますか？<br />
                    私にはあります。それは、<span className="text-brand font-medium">ボーダレスな教育とスポーツ</span>です。
                  </p>

                  <p>
                    幼少期より言葉、教育、文化、国籍の違う人と接することが当たり前の環境で過ごしました。
                    そこで感じたのは、違うことが当たり前と思う自分と同じような人もいるけれど、そうではない人も実は多いということです。
                  </p>

                  <p>
                    そんな時、私は「スポーツ」を通して自分を表現してきました。
                  </p>

                  <p>
                    初めは誰からも全く受け入れられなくても、ボーダレスな教育とスポーツが強みとなり、相手が違いを受け入れ、チャレンジすることを応援してくれるようになりました。
                    悩んでいると誰かが手を差し伸べ、話を聞いてくれ、アドバイスをくれたことで、私は背中を押され、前に進み、躊躇なくチャレンジし、さまざまな感動体験を得ることができました。
                  </p>

                  <p>
                    多くの人にサポートしてもらい、今の私があります。
                  </p>

                  <p>
                    今度は私がみなさんの自己を表現する場を一緒に見つけ、多くの人に感動体験を味わってもらいたいという想いから、DEFINE X (ディファイン エックス) を創業しました。
                  </p>

                  <div className="mt-8 p-6 bg-slate-950 border-l-4 border-brand rounded-r-lg shadow-inner">
                    <p className="text-lg font-bold text-brand mb-0 italic">
                      DEFINE X = 無限の可能性。<br />
                      「スポーツ」 × 「教育」で社会を変えます。
                    </p>
                  </div>
                  
                  <div className="mt-8 text-right">
                    <p className="text-lg font-bold text-white">代表取締役 北原 大誠</p>
                    <p className="text-sm text-slate-500">Taisei Kitahara</p>
                  </div>
               </div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Founder;