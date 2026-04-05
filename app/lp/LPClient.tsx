"use client";

import CTASection from "./components/CTASection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Reviews from "./components/Reviews";
import TargetAudience from "./components/TargetAudience";

export default function LPClient() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-brand-primary selection:text-white">
      <Header />
      <main className="grow">
        <Hero />
        <TargetAudience />
        <Features />
        <Reviews />
        <Profile />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
