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
import './App.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <Hero />
      <SectionConnector />
      <Widgets fadeInUp={fadeInUp} />
      <SectionConnector />
      <Services fadeInUp={fadeInUp} />
      <SectionConnector />
      <Stats fadeInUp={fadeInUp} />
      <SectionConnector />
      <HowItWorks fadeInUp={fadeInUp} />
      <SectionConnector />
      <TrustSection fadeInUp={fadeInUp} />
      <SectionConnector />
      <Footer />
    </div>
  );
};

export default App;
