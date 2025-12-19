import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Founder from './components/Founder';
import CompanyInfo from './components/CompanyInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
};

export default App;