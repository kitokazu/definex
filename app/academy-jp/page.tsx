import type { Metadata } from "next";
import AcademyClient from "./AcademyClient";

export const metadata: Metadata = {
  title: "DEFINE ACADEMY | スポーツ専門英語の100%カスタマイズ指導",
  description:
    "スポーツの力で、英語はもっと自由になる。アスリート・コーチ・関係者のための、完全オーダーメイド英語学習プログラム。",
};

export default function AcademyPage() {
  return <AcademyClient />;
}
