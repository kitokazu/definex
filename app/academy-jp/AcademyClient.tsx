"use client";

import Contact from "./components/Contact";
import CTASection from "./components/CTASection";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Flow from "./components/Flow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Profile from "./components/Profile";
import Reviews from "./components/Reviews";
import SNS from "./components/SNS";
import TargetAudience from "./components/TargetAudience";

export default function AcademyClient() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-brand-primary selection:text-white">
      <Header />
      <main className="grow">
        <Hero />
        <TargetAudience />
        <Features />
        <Reviews />
        <Pricing />
        <Flow />
        <Profile />
        <FAQ />
        <CTASection />
        <Contact />
        <SNS />
      </main>
      <Footer />
    </div>
  );
}
