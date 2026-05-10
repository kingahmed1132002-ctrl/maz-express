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
    </header>
  );
};

export default Hero;