import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

/* ─── Brand ──────────────────────────────────────────────── */
const NAVY = '#0B3C6D';
const CYAN = '#2BB7DA';

/* ─── Animated headline words ────────────────────────────── */
const WORDS = ['جواً', 'بحراً'];

/* ─── CSS Volumetric Cloud Component ─────────────────────── */
/* Built with overlapping rounded divs — no image dependency   */
const Cloud = ({ width = 300, style = {}, variant = 0 }) => {
  const h = width * 0.42;

  const variants = [
    // Variant 0: wide layered cloud
    [
      { left: '12%', bottom: '0%',  width: '76%', height: '45%', br: '999px', opacity: 0.85, blur: 2 },
      { left: '5%',  bottom: '20%', width: '42%', height: '85%', br: '50%',   opacity: 0.88, blur: 3 },
      { left: '28%', bottom: '15%', width: '50%', height: '100%',br: '50%',   opacity: 0.95, blur: 2 },
      { left: '58%', bottom: '10%', width: '38%', height: '80%', br: '50%',   opacity: 0.90, blur: 3 },
      { left: '34%', bottom: '55%', width: '28%', height: '55%', br: '50%',   opacity: 1.00, blur: 1 },
      { left: '10%', bottom: '0',   right: '10%', height: '18%', br: '50%',   opacity: 0.20, blur: 10, isGround: true },
    ],
    // Variant 1: taller, more billowing
    [
      { left: '15%', bottom: '0%',  width: '70%', height: '40%', br: '999px', opacity: 0.82, blur: 2 },
      { left: '2%',  bottom: '18%', width: '38%', height: '78%', br: '50%',   opacity: 0.86, blur: 3 },
      { left: '25%', bottom: '12%', width: '48%', height: '105%',br: '50%',   opacity: 0.94, blur: 1 },
      { left: '55%', bottom: '8%',  width: '42%', height: '88%', br: '50%',   opacity: 0.88, blur: 3 },
      { left: '20%', bottom: '62%', width: '32%', height: '60%', br: '50%',   opacity: 1.00, blur: 1 },
      { left: '42%', bottom: '55%', width: '22%', height: '45%', br: '50%',   opacity: 0.98, blur: 2 },
      { left: '8%',  bottom: '0',   right: '8%',  height: '20%', br: '50%',   opacity: 0.18, blur: 12, isGround: true },
    ],
    // Variant 2: compact wispy
    [
      { left: '20%', bottom: '0%',  width: '60%', height: '40%', br: '999px', opacity: 0.78, blur: 3 },
      { left: '8%',  bottom: '22%', width: '36%', height: '80%', br: '50%',   opacity: 0.84, blur: 4 },
      { left: '32%', bottom: '18%', width: '44%', height: '95%', br: '50%',   opacity: 0.92, blur: 2 },
      { left: '60%', bottom: '12%', width: '32%', height: '72%', br: '50%',   opacity: 0.86, blur: 3 },
      { left: '38%', bottom: '58%', width: '24%', height: '50%', br: '50%',   opacity: 0.98, blur: 2 },
      { left: '12%', bottom: '0',   right: '12%', height: '16%', br: '50%',   opacity: 0.15, blur: 8,  isGround: true },
    ],
  ];

  const puffs = variants[variant % variants.length];

  return (
    <div style={{
      position: 'relative',
      width,
      height: h,
      ...style,
    }}>
      {puffs.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left:         p.left    || 'auto',
            right:        p.right   || 'auto',
            bottom:       p.bottom  || 'auto',
            width:        p.isGround ? 'auto' : p.width,
            height:       p.height,
            borderRadius: p.br,
            background:   p.isGround
              ? `rgba(140,200,230,0.3)`
              : `rgba(255,255,255,${p.opacity})`,
            filter:       `blur(${p.blur}px)`,
          }}
        />
      ))}
    </div>
  );
};

/* ─── Cloud positions in the hero ────────────────────────── */
const CLOUD_DEFS = [
  { top: '3%',  left: '-2%',   width: 440, variant: 0, depth: 0.7, opacity: 1.0 },
  { top: '0%',  right: '-2%',  width: 500, variant: 1, depth: 0.9, opacity: 0.95 },
  { top: '18%', left: '12%',   width: 260, variant: 2, depth: 0.4, opacity: 0.65 },
  { top: '22%', right: '15%',  width: 300, variant: 0, depth: 0.5, opacity: 0.70 },
  { top: '10%', left: '40%',   width: 200, variant: 2, depth: 0.3, opacity: 0.50 },
];

/* ══════════════════════════════════════════════════════════ */
export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [mouse,   setMouse]   = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fn = e => setMouse({
      x: (e.clientX / window.innerWidth  - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
    window.addEventListener('mousemove', fn, { passive: true });
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  const { scrollYProgress } = useScroll({
    target:  heroRef,
    offset:  ['start start', 'end start'],
  });
  const bgY    = useTransform(scrollYProgress, [0, 1], ['0%',  '20%']);
  const cloudY = useTransform(scrollYProgress, [0, 1], ['0%',  '12%']);
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%',  '28%']);
  const seaY   = useTransform(scrollYProgress, [0, 1], ['0%',   '6%']);

  return (
    <header
      ref={heroRef}
      role="banner"
      style={{ position: 'relative', width: '100%', height: '100vh', minHeight: 680, overflow: 'hidden' }}
    >

      {/* ── SKY GRADIENT ─────────────────────────────────── */}
      <motion.div
        aria-hidden
        style={{
          position: 'absolute', inset: 0,
          y: bgY,
          background: `linear-gradient(
            180deg,
            #04192e 0%,
            #072848 8%,
            ${NAVY}  22%,
            #1260a0 40%,
            #1a88c0 55%,
            ${CYAN}  68%,
            #6dd5ed 80%,
            #b5eaf6 90%,
            #d8f3fb 96%,
            #eaf8fd 100%
          )`,
        }}
      />

      {/* Sun glow at horizon */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 100% 30% at 50% 72%,
            rgba(255,255,255,0.18) 0%, transparent 65%),
          radial-gradient(ellipse 60% 20% at 75% 30%,
            rgba(43,183,218,0.06) 0%, transparent 60%)
        `,
      }} />

      {/* ── CSS CLOUDS ───────────────────────────────────── */}
      {CLOUD_DEFS.map((c, i) => {
        const dx = mouse.x * c.depth * 18;
        const dy = mouse.y * c.depth *  9;
        return (
          <motion.div
            key={i}
            aria-hidden
            style={{
              position: 'absolute',
              top:   c.top,
              left:  c.left  ?? 'auto',
              right: c.right ?? 'auto',
              y: cloudY,
              zIndex: Math.round(c.depth * 4) + 1,
              opacity: c.opacity,
              pointerEvents: 'none',
            }}
          >
            <Cloud
              width={c.width}
              variant={c.variant}
              style={{
                transform: `translate(${dx}px, ${dy}px)`,
                transition: 'transform 0.9s cubic-bezier(.25,.46,.45,.94)',
              }}
            />
          </motion.div>
        );
      })}

      {/* ── AIRPLANE ─────────────────────────────────────── */}
      <motion.div
        aria-hidden
        style={{ position: 'absolute', top: '16%', zIndex: 3, y: cloudY, pointerEvents: 'none' }}
        initial={{ left: '-8%' }}
        animate={{ left: '110%' }}
        transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
      >
        <img
          src="/Airplane.png" alt=""
          style={{ width: 150, opacity: 0.6, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))', display: 'block' }}
        />
        {/* contrail */}
        <div style={{
          position: 'absolute', top: '47%', right: '88%',
          width: 400, height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.22))',
          filter: 'blur(1px)',
        }} />
      </motion.div>

      {/* ── SEA ──────────────────────────────────────────── */}
      <motion.div
        aria-hidden
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '36%', zIndex: 5, y: seaY }}
      >
        {/* horizon mist */}
        <div style={{
          position: 'absolute', top: -30, left: 0, right: 0, height: 60,
          background: 'linear-gradient(to bottom, transparent, rgba(183,232,248,0.28))',
          filter: 'blur(10px)', zIndex: 2,
        }} />
        <img
          src="/Sea-PNG.png" alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        {/* base dark fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
          background: 'linear-gradient(to bottom, transparent, rgba(4,18,38,0.60))',
          zIndex: 3,
        }} />
      </motion.div>

      {/* ── SHIP ─────────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute', bottom: '17%', right: '7%', zIndex: 7,
          x: mouse.x * -12,
          transition: 'x 0.9s ease-out',
        }}
        animate={{ y: [0, -7, 0, -4, 0], rotate: [0, 0.5, 0, -0.3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src="/ship.webp" alt="سفينة شحن"
          style={{
            width: 'clamp(150px, 17vw, 240px)',
            filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.3))',
            display: 'block',
          }}
        />
        {/* wake */}
        <div style={{
          position: 'absolute', bottom: -2, left: '5%', right: '5%', height: 12,
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.25) 0%, transparent 70%)',
          filter: 'blur(4px)',
          borderRadius: '50%',
        }} />
      </motion.div>

      {/* ── CONTENT ──────────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute', inset: 0, zIndex: 10,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center',
          y: textY,
          paddingTop: 48,
          paddingBottom: 100,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* Route eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ marginBottom: 20 }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 20px', borderRadius: 999,
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.20)',
            color: 'rgba(255,255,255,0.85)',
            fontSize: '0.8rem', fontWeight: 600,
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>
            <span style={{ fontSize: '1rem' }}>🇹🇷</span> تركيا
            <span style={{ opacity: 0.35, fontSize: 10 }}>◆</span>
            <span style={{ fontSize: '1rem' }}>🇦🇪</span> دبي
            <span style={{ opacity: 0.35 }}>→</span>
            <span style={{ fontSize: '1rem' }}>🇱🇾</span> ليبيا
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{
            margin: '0 0 18px',
            fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            color: '#ffffff',
            textShadow: '0 2px 28px rgba(0,0,0,0.20)',
            maxWidth: 860,
            fontFamily: "'Tajawal', sans-serif",
          }}
        >
          نشحن بضاعتك{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIdx}
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
              exit={{    opacity: 0, y: -12, filter: 'blur(6px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: CYAN, display: 'inline-block' }}
            >
              {WORDS[wordIdx]}
            </motion.span>
          </AnimatePresence>
          {' '}بأمان
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            margin: '0 0 36px',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'rgba(255,255,255,0.70)',
            lineHeight: 1.9,
            maxWidth: 500,
            fontWeight: 400,
          }}
        >
          خدمات شحن متكاملة من تركيا والإمارات مباشرةً إلى ليبيا
          <br />
          جواً وبحراً — بدون عمولات، بدون تعقيدات
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72 }}
          style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="#tracking"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '15px 32px', borderRadius: 14,
              background: CYAN,
              color: '#fff', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: `0 8px 32px rgba(43,183,218,0.38)`,
              transition: 'transform 0.22s, box-shadow 0.22s',
              fontFamily: "'Tajawal', sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow=`0 16px 40px rgba(43,183,218,0.48)`; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)';    e.currentTarget.style.boxShadow=`0 8px 32px rgba(43,183,218,0.38)`; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            تتبّع شحنتك
          </a>

          <a
            href="#services"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '15px 32px', borderRadius: 14,
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              color: '#fff', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'transform 0.22s, background 0.22s',
              fontFamily: "'Tajawal', sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.background='rgba(255,255,255,0.20)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)';    e.currentTarget.style.background='rgba(255,255,255,0.12)'; }}
          >
            استكشف خدماتنا
          </a>
        </motion.div>

        {/* Micro stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{
            display: 'flex', gap: 0, marginTop: 48,
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: 18,
            overflow: 'hidden',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            background: 'rgba(255,255,255,0.07)',
          }}
        >
          {[
            { n: '+5000', label: 'شحنة مكتملة' },
            { n: '0%',    label: 'بدون عمولة'  },
            { n: '24/7',  label: 'دعم متواصل'  },
          ].map((s, i, arr) => (
            <div
              key={s.n}
              style={{
                padding: '14px 28px',
                borderRight: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: 4 }}>
                {s.n}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.52)', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── SCROLL CUE ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        style={{
          position: 'absolute', bottom: 28, left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 24, height: 38, borderRadius: 12,
            border: '1.5px solid rgba(255,255,255,0.28)',
            display: 'flex', justifyContent: 'center', paddingTop: 6,
          }}
        >
          <motion.div
            animate={{ opacity: [1, 0.2, 1], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 3, height: 8, borderRadius: 2, background: 'rgba(255,255,255,0.4)' }}
          />
        </motion.div>
      </motion.div>

    </header>
  );
}