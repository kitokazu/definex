import type { Metadata } from "next";
import LPClient from "./LPClient";

export const metadata: Metadata = {
  title: "DEFINE ACADEMY | スポーツ × 英会話",
  description:
    "スポーツ好きのための英会話。英語がもっと身近に、もっと楽しく。DEFINE ACADEMYの公式ランディングページ。",
};

export default function LandingPage() {
  return <LPClient />;
}
