import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "プライバシーポリシー | DEFINE ACADEMY",
  description: "DEFINE ACADEMYのプライバシーポリシー",
};

export default function PrivacyPage() {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8">プライバシーポリシー</h1>

        <div className="prose prose-invert prose-slate max-w-none space-y-8">
          <p className="text-slate-300 leading-relaxed">
            DEFINEX株式会社（以下「当社」といいます。）は、本サービスの提供にあたり取得する個人情報を、以下の方針に基づき適切に取り扱います。
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. 取得する個人情報</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              当社は、以下の情報を取得する場合があります。
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>決済に関する情報</li>
              <li>レッスン履歴・学習状況</li>
              <li>その他サービス提供に必要な情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. 利用目的</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              取得した個人情報は、以下の目的で利用します。
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>本サービスの提供・運営</li>
              <li>お問い合わせ対応</li>
              <li>サービス改善・品質向上</li>
              <li>ご案内・連絡・重要なお知らせの送付</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. 第三者提供</h2>
            <p className="text-slate-300 leading-relaxed">
              当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. 個人情報の管理</h2>
            <p className="text-slate-300 leading-relaxed">
              当社は、個人情報の漏えい、滅失、改ざんを防止するため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. 個人情報の開示・訂正・削除</h2>
            <p className="text-slate-300 leading-relaxed">
              本人からの個人情報の開示、訂正、削除の請求があった場合、法令に従い適切に対応します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. プライバシーポリシーの変更</h2>
            <p className="text-slate-300 leading-relaxed">
              本ポリシーの内容は、必要に応じて変更することがあります。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
