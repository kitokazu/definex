import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "ご利用規約 | DEFINE ACADEMY",
  description: "DEFINE ACADEMYのご利用規約",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          ホームに戻る
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">ご利用規約</h1>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <p className="text-slate-300 leading-relaxed">
            本利用規約（以下「本規約」といいます。）は、DEFINEX株式会社（以下「当社」といいます。）が提供するオンライン英会話サービス「DEFINE ACADEMY」（以下「本サービス」といいます。）の利用条件を定めるものです。利用者は、本サービスを利用することで、本規約に同意したものとみなされます。
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第1条（適用）</h2>
            <p className="text-slate-300 leading-relaxed">
              本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第2条（サービス内容）</h2>
            <p className="text-slate-300 leading-relaxed">
              本サービスは、オンラインを通じた英会話レッスン（スポーツ英会話を含む）およびそれに付随する学習サポートを提供するものです。
            </p>
            <p className="text-slate-300 leading-relaxed mt-2">
              具体的な内容、回数、料金等は、当社ウェブサイトまたは別途定める案内に従うものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第3条（利用登録）</h2>
            <p className="text-slate-300 leading-relaxed">
              本サービスの利用を希望する者は、当社が定める方法により申込みを行い、当社が承認した時点で利用契約が成立します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第4条（料金および支払方法）</h2>
            <p className="text-slate-300 leading-relaxed">
              利用者は、当社が別途定める利用料金を、当社指定の方法により支払うものとします。
            </p>
            <p className="text-slate-300 leading-relaxed mt-2">
              支払済みの料金については、当社が認める場合を除き、返金は行いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第5条（禁止事項）</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              利用者は、以下の行為を行ってはなりません。
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>他の利用者、講師、または第三者に不利益・損害を与える行為</li>
              <li>サービスの運営を妨害する行為</li>
              <li>無断での録音・録画・転載</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第6条（サービスの中断・変更）</h2>
            <p className="text-slate-300 leading-relaxed">
              当社は、システム保守、災害、その他やむを得ない事由により、事前通知なく本サービスの全部または一部を中断・変更することがあります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第7条（免責事項）</h2>
            <p className="text-slate-300 leading-relaxed">
              当社は、本サービスの利用により生じた利用者の損害について、当社の故意または重過失による場合を除き、責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第8条（規約の変更）</h2>
            <p className="text-slate-300 leading-relaxed">
              当社は、必要に応じて本規約を変更できるものとします。変更後の規約は、当社ウェブサイト上に表示した時点で効力を生じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">第9条（準拠法・管轄）</h2>
            <p className="text-slate-300 leading-relaxed">
              本規約は日本法を準拠法とし、本サービスに関して生じた紛争については、当社本店所在地を管轄する裁判所を専属的合意管轄とします。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
