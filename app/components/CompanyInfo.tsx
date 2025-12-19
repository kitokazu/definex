import React from 'react';
import FadeIn from './FadeIn';

const CompanyInfo: React.FC = () => {
  return (
    <section id="company" className="py-24 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl font-black text-white italic tracking-tight">COMPANY OVERVIEW</h2>
          <div className="h-1 w-20 bg-brand mx-auto mt-4 skew-x-[-20deg]"></div>
        </FadeIn>

        <FadeIn delay={200} className="bg-slate-900 rounded-lg shadow-2xl overflow-hidden border border-slate-800">
          <dl className="divide-y divide-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-800/50 transition-colors">
              <dt className="font-bold text-slate-500 mb-2 md:mb-0">会社名</dt>
              <dd className="col-span-2 text-white font-medium">DEFINE X株式会社</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-800/50 transition-colors">
              <dt className="font-bold text-slate-500 mb-2 md:mb-0">本社所在地</dt>
              <dd className="col-span-2 text-white font-medium">
                東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F−C
              </dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-800/50 transition-colors">
              <dt className="font-bold text-slate-500 mb-2 md:mb-0">代表者</dt>
              <dd className="col-span-2 text-white font-medium">北原 大誠</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-800/50 transition-colors">
              <dt className="font-bold text-slate-500 mb-2 md:mb-0">設立</dt>
              <dd className="col-span-2 text-white font-medium">2024年1月17日</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-800/50 transition-colors">
              <dt className="font-bold text-slate-500 mb-2 md:mb-0">資本金</dt>
              <dd className="col-span-2 text-white font-medium">100万円</dd>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-slate-800/50 transition-colors">
              <dt className="font-bold text-slate-500 mb-2 md:mb-0">事業内容</dt>
              <dd className="col-span-2 text-white font-medium">教育事業 / スポーツ事業</dd>
            </div>
          </dl>
        </FadeIn>
      </div>
    </section>
  );
};

export default CompanyInfo;
