import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | DEFINE ACADEMY",
  description: "DEFINE ACADEMYの特定商取引法に基づく表記",
};

export default function LegalPage() {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8">特定商取引法に基づく表記</h1>

        <div className="prose prose-invert prose-slate max-w-none">
          <table className="w-full border-collapse">
            <tbody className="divide-y divide-slate-700">
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top w-1/3">販売事業者名</th>
                <td className="py-4 text-slate-300">DEFINEX株式会社</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">運営責任者</th>
                <td className="py-4 text-slate-300">北原 大誠</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">所在地</th>
                <td className="py-4 text-slate-300">
                  〒150-0043<br />
                  東京都渋谷区道玄坂1丁目10番8号<br />
                  渋谷道玄坂東急ビル 2F−C
                </td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">電話番号</th>
                <td className="py-4 text-slate-300">03-6820-4509</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">メールアドレス</th>
                <td className="py-4 text-slate-300">info@definex.jp</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">販売価格</th>
                <td className="py-4 text-slate-300">各サービスページに記載しております。</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">商品代金以外の必要料金</th>
                <td className="py-4 text-slate-300">インターネット接続に伴う通信費等は、利用者のご負担となります。</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">お支払方法</th>
                <td className="py-4 text-slate-300">
                  クレジットカード決済<br />
                  （Visa / MasterCard / American Express / JCB / Diners Club / Discover）
                </td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">支払時期</th>
                <td className="py-4 text-slate-300">サービス申込み時にお支払いが確定します。</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">サービス提供時期</th>
                <td className="py-4 text-slate-300">決済完了後、原則として速やかにサービスを提供いたします。</td>
              </tr>
              <tr>
                <th className="text-left py-4 pr-4 text-white font-bold align-top">キャンセル・返金について</th>
                <td className="py-4 text-slate-300">
                  サービスの性質上、原則としてお支払い完了後のキャンセルおよび返金はお受けしておりません。<br />
                  ただし、当社が特別に認めた場合はこの限りではありません。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
