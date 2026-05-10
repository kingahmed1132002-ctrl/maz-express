import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Widgets from './components/Widgets';
import Services from './components/Services';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import SectionConnector from './components/SectionConnector';
import Preloader from './components/Preloader';
import './App.css';

/*
  ── Light-theme section color palette ─────────────────────────
  Every section gets its own light background so adjacent sections
  look visually distinct while staying consistent with the brand.

  Hero        → white
  Widgets     → pale sky blue
  Services    → white
  Stats       → soft mint / green-tinted white
  HowItWorks  → barely-blue white
  Trust       → warm cream
  Footer      → cool light grey
*/
const C = {
  hero: '#ffffff',
  widgets: '#eef6ff',   // pale sky blue
  services: '#ffffff',   // white
  stats: '#f0fdf4',   // soft mint
  howItWorks: '#f8fbff',   // barely blue
  trust: '#ffffff',   // white
  footer: '#f1f5f9',   // cool light grey
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Preloader show={loading} />
      <div className="app">
        <Navbar scrolled={scrolled} />

        {/* ① Hero ──────────────────────────────── white */}
        <Hero />

        {/* Hero → Widgets  (transparent over sea → pale-sky-blue) */}
        <div className="relative z-10 -mt-24 md:-mt-32 pointer-events-none">
          <SectionConnector
            variant={0}
            from="transparent" to={C.widgets}
            accentColor="#17a9ff" accentSecondary="#60c8ff"
            heightClass="h-24 md:h-32"
          />
        </div>

        {/* ② Widgets ───────────────────────────── pale sky blue */}
        <Widgets fadeInUp={fadeInUp} bgColor={C.widgets} />

        {/* Widgets → Services  (pale-sky → white) */}
        <SectionConnector
          variant={1}
          from={C.widgets} to={C.services}
          accentColor="#17a9ff" accentSecondary="#2563eb"
          heightClass="h-20 md:h-24"
        />

        {/* ③ Services ──────────────────────────── white */}
        <Services fadeInUp={fadeInUp} bgColor={C.services} />


        {/* Services → HowItWorks  (white → barely blue) */}
        <SectionConnector
          variant={3}
          from={C.services} to={C.howItWorks}
          accentColor="#17a9ff" accentSecondary="#2563eb"
          heightClass="h-28 md:h-36"
        />

        {/* ⑤ HowItWorks ────────────────────────── barely blue */}
        <HowItWorks fadeInUp={fadeInUp} bgColor={C.howItWorks} />

        {/* HowItWorks → Trust  (barely-blue → white) */}
        <SectionConnector
          variant={4}
          from={C.howItWorks} to={C.trust}
          accentColor="#17a9ff" accentSecondary="#2563eb"
          heightClass="h-24 md:h-32"
        />

        {/* ⑥ TrustSection ──────────────────────── white */}
        <TrustSection fadeInUp={fadeInUp} bgColor={C.trust} />

        {/* Trust → Footer  (white → cool light grey) */}
        <SectionConnector
          variant={5}
          from={C.trust} to={C.footer}
          accentColor="#17a9ff" accentSecondary="#2563eb"
          heightClass="h-24 md:h-32"
        />

        {/* ⑦ Footer ────────────────────────────── cool light grey */}
        <Footer bgColor={C.footer} />
      </div>
    </>
  );
};

export default App;
