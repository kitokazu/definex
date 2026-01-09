import type { Metadata } from "next";
import LandingHeader from "./components/LandingHeader";
import LandingHero from "./components/LandingHero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import InstructorSection from "./components/InstructorSection";
import BenefitsSection from "./components/BenefitsSection";
import ServiceOverview from "./components/ServiceOverview";
import LandingTestimonials from "./components/LandingTestimonials";
import FinalCTA from "./components/FinalCTA";
import LandingFooter from "./components/LandingFooter";
import MobileStickyCTA from "./components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "DEFINE ACADEMY | スポーツ × 英会話",
  description:
    "スポーツ好きのための英会話。英語がもっと身近に、もっと楽しく。DEFINE ACADEMYの公式ランディングページ。",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden">
      <LandingHeader />
      <LandingHero />
      <ProblemSection />
      <SolutionSection />
      <InstructorSection />
      <BenefitsSection />
      <ServiceOverview />
      <LandingTestimonials />
      <FinalCTA />
      <LandingFooter />
      <MobileStickyCTA />
    </div>
  );
}
