"use client";

import CompanyInfo from "../components/CompanyInfo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Founder from "../components/Founder";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Services />
        <Founder />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
