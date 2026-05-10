import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

/* ── Cycling phrases ─────────────────────────────────────── */
const PHRASES = [
  "نشحن شحنتك بأمان 🛡️",
  "من تركيا إلى ليبيا ✈️",
  "جواً وبحراً 🚢",
  "سرعة وموثوقية ⚡",
  "بدون عمولة 0%",
  "تتبّع شحنتك لحظةً بلحظة 📦",
];

/* ── Inline SVG — Cargo ship ────────────────────────────── */
const ShipSVG = () => (
  <svg width="220" height="100" viewBox="0 0 220 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Hull */}
    <path d="M10 62 L20 82 L200 82 L210 62 Z" fill="#1e3a5f" />
    <path d="M10 62 L210 62" stroke="#2563eb" strokeWidth="2" />
    {/* Hull bottom curve */}
    <path d="M20 82 Q110 92 200 82" fill="#152a47" />
    {/* Main deck */}
    <rect x="30" y="52" width="160" height="12" rx="2" fill="#1e4d8c" />
    {/* Bridge / cabin */}
    <rect x="120" y="28" width="60" height="26" rx="3" fill="#2563eb" />
    <rect x="125" y="32" width="14" height="10" rx="1" fill="#93c5fd" opacity="0.7" />
    <rect x="143" y="32" width="14" height="10" rx="1" fill="#93c5fd" opacity="0.7" />
    <rect x="161" y="32" width="14" height="10" rx="1" fill="#93c5fd" opacity="0.7" />
    {/* Funnel/chimney */}
    <rect x="148" y="14" width="14" height="18" rx="3" fill="#1d4ed8" />
    <rect x="146" y="10" width="18" height="6" rx="2" fill="#1e40af" />
    {/* Smoke puffs */}
    <circle cx="155" cy="6"  r="4" fill="white" opacity="0.35" />
    <circle cx="160" cy="2"  r="3" fill="white" opacity="0.22" />
    <circle cx="150" cy="3"  r="2.5" fill="white" opacity="0.18" />
    {/* Cargo containers */}
    <rect x="32"  y="38" width="32" height="16" rx="2" fill="#dc2626" />
    <rect x="68"  y="38" width="32" height="16" rx="2" fill="#16a34a" />
    <rect x="104" y="38" width="14" height="16" rx="2" fill="#ca8a04" />
    {/* Container lines */}
    <line x1="48"  y1="38" x2="48"  y2="54" stroke="white" strokeWidth="0.8" opacity="0.5" />
    <line x1="84"  y1="38" x2="84"  y2="54" stroke="white" strokeWidth="0.8" opacity="0.5" />
    {/* Crane arm */}
    <line x1="50" y1="52" x2="50" y2="18" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="18" x2="90" y2="28" stroke="#374151" strokeWidth="2"   strokeLinecap="round" />
    <line x1="90" y1="28" x2="90" y2="38" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="2 2" />
    {/* Anchor chain hint */}
    <line x1="30" y1="82" x2="26" y2="95" stroke="#374151" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
    {/* Flag */}
    <line x1="180" y1="14" x2="180" y2="30" stroke="#9ca3af" strokeWidth="1.5" />
    <path d="M180 14 L192 18 L180 22 Z" fill="#ef4444" />
  </svg>
);

/* ── Inline SVG — Commercial Airplane ───────────────────── */
const AirplaneSVG = () => (
  <svg width="130" height="52" viewBox="0 0 130 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fuselage */}
    <path d="M10 24 Q50 16 110 22 Q120 23 122 26 Q120 29 110 30 Q50 36 10 28 Z" fill="white" />
    <path d="M110 22 Q128 24 128 26 Q128 28 110 30" fill="#e0f2fe" />
    {/* Windows strip */}
    <path d="M30 22 Q70 17 105 22" stroke="#bae6fd" strokeWidth="1.2" fill="none" />
    {/* Windows */}
    {[36, 48, 60, 72, 84, 96].map(x => (
      <rect key={x} x={x} y="21" width="7" height="5" rx="1.5" fill="#7dd3fc" opacity="0.85" />
    ))}
    {/* Nose cone */}
    <path d="M10 24 Q2 26 2 26 Q2 26 10 28" fill="#dbeafe" />
    {/* Main wing */}
    <path d="M55 26 L30 50 L25 49 L50 26 Z" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.5" />
    {/* Rear wing (horizontal stabiliser) */}
    <path d="M106 26 L94 42 L91 41 L103 26 Z" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.5" />
    {/* Vertical tail */}
    <path d="M105 25 L98 12 L106 20 Z" fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.5" />
    {/* Engine under wing */}
    <ellipse cx="42" cy="43" rx="10" ry="5" fill="#374151" />
    <ellipse cx="42" cy="43" rx="7"  ry="3.5" fill="#4b5563" />
    {/* Airline stripe */}
    <path d="M30 26 Q70 23 108 26" stroke="#17a9ff" strokeWidth="2.5" opacity="0.6" />
  </svg>
);

/* ── Wave rows SVG ──────────────────────────────────────── */
const WaveRows = () => (
  <svg className="absolute bottom-0 left-0 w-full" height="80" viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0 40 C200 20 400 60 600 40 C800 20 1000 60 1200 40 C1350 24 1400 36 1440 34 L1440 80 L0 80 Z" fill="rgba(23,169,255,0.12)" />
    <path d="M0 52 C180 32 380 68 600 52 C820 36 1020 68 1200 52 C1340 40 1400 50 1440 48 L1440 80 L0 80 Z" fill="rgba(23,169,255,0.18)" />
    <path d="M0 62 C160 46 360 74 600 62 C840 50 1040 74 1200 62 C1340 54 1400 60 1440 58 L1440 80 L0 80 Z" fill="rgba(23,169,255,0.25)" />
  </svg>
);

/* ══════════════════════════════════════════════════════════ */
const Hero = () => {
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPhraseIdx(i => (i + 1) % PHRASES.length);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <header
      className="relative h-screen overflow-hidden bg-white"
      role="banner"
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      {/* ── Sea background ───────────────────────────────── */}
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/Sea-PNG.png')" }}
      />
      {/* Gradient overlay — white at top, transparent toward sea */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/10" />
      {/* Soft blue tint on the sea itself */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-sky-100/60 to-transparent" />

      {/* ── Animated airplane — flies left-to-right ─────── */}
      <motion.div
        className="absolute top-24 z-10 pointer-events-none"
        initial={{ x: "-160px", opacity: 0 }}
        animate={{ x: "105vw", opacity: [0, 1, 1, 0.7] }}
        transition={{
          x: { duration: 22, repeat: Infinity, ease: "linear", delay: 1.2 },
          opacity: { duration: 2, times: [0, 0.05, 0.9, 1], repeat: Infinity, delay: 1.2 },
        }}
        style={{ filter: "drop-shadow(0 4px 16px rgba(37,99,235,0.18))" }}
      >
        <AirplaneSVG />
      </motion.div>

      {/* ── Animated ship — floating on the sea ─────────── */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        style={{ bottom: "14%", left: "50%", translateX: "-50%" }}
        animate={{
          y: [0, -9, 0, -6, 0],
          rotate: [-0.8, 0.8, -0.5, 0.5, -0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ShipSVG />
        {/* Wake / bow wave */}
        <motion.div
          className="absolute -bottom-2 left-0 right-0 flex justify-center"
          animate={{ scaleX: [1, 1.06, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="240" height="16" viewBox="0 0 240 16">
            <path d="M0 8 C40 2,80 14,120 8 C160 2,200 14,240 8" stroke="rgba(23,169,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M10 12 C50 7,90 17,130 12 C170 7,210 17,240 12" stroke="rgba(23,169,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── Wave decorations at sea line ────────────────── */}
      <WaveRows />

      {/* ── Main content ─────────────────────────────────── */}
      <div className="relative z-20 h-full flex items-center justify-center px-5 pb-16">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-blue-100 shadow-lg mb-8"
            >
              <motion.div
                className="w-2 h-2 bg-accent rounded-full"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-slate-700">ماز إكسبرس — الشحن الجوي والبحري</span>
            </motion.div>

            {/* Static heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-black text-slate-900 mb-4 leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              شحن{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent bg-clip-text text-transparent">
                سريع وآمن
              </span>
              <br />
              <span className="text-4xl md:text-6xl text-slate-700">من تركيا إلى ليبيا</span>
            </motion.h1>

            {/* ── Cycling animated phrase ──────────────────── */}
            <div className="h-14 flex items-center justify-center mb-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIdx}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -22 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                  className="text-xl md:text-2xl font-bold text-accent-blue"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {PHRASES[phraseIdx]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <a
                href="#services"
                className="group bg-gradient-to-r from-accent-blue to-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-accent-blue/25 hover:shadow-2xl hover:shadow-accent-blue/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
              >
                <span>ابدأ رحلتك الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#tracking"
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-2xl">📦</span>
                <span className="font-semibold text-slate-700">تتبع شحنتك</span>
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-6 mt-14 max-w-xl mx-auto"
            >
              {[
                { num: "10+",   label: "فروع" },
                { num: "1500+", label: "شحنة شهرياً" },
                { num: "50+",   label: "وجهة" },
              ].map((s, i) => (
                <div key={i} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl py-4 px-2 border border-blue-50 shadow-sm">
                  <div className="text-2xl md:text-3xl font-black text-accent-blue">{s.num}</div>
                  <div className="text-xs text-slate-500 mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;