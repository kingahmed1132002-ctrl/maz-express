import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MazLogo from './MazLogo';

const shippingModes = [
  { text: 'جوي',  color: '#2BB7DA' },
  { text: 'بحري', color: '#7DD3F7' },
];

export default function Hero() {
  const [modeIndex, setModeIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setModeIndex((prev) => (prev + 1) % shippingModes.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const current = shippingModes[modeIndex];

  return (
    <section
      id="hero-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '120vh',
        minHeight: '750px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingBottom: '6vh',
      }}
      dir="rtl"
    >
      {/* ── Background image ── */}
      <img
        src="/hero.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
          display: 'block',
        }}
      />

      {/* ── Dark gradient overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.70) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Centered content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ marginBottom: 32 }}
        >
          <MazLogo size={80} />
        </motion.div>

        {/* ── Main tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginBottom: 16 }}
        >
          <h1
            style={{
              fontFamily: "'Tajawal', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {'نشحن '}
            {/* Animated flipping word */}
            <span
              style={{
                display: 'inline-block',
                minWidth: '3ch',
                perspective: '600px',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={modeIndex}
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0,   opacity: 1 }}
                  exit={{    rotateX:  90, opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{
                    display: 'inline-block',
                    color: current.color,
                    textShadow: `0 0 28px ${current.color}bb`,
                    transformOrigin: 'center center',
                  }}
                >
                  {current.text}
                </motion.span>
              </AnimatePresence>
            </span>
            {' وبري'}
          </h1>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'rgba(255,255,255,0.88)',
            margin: '0 0 10px',
            fontWeight: 600,
            letterSpacing: '0.01em',
          }}
        >
          شريكك الموثوق في الشحن الدولي
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)',
            color: 'rgba(255,255,255,0.65)',
            margin: '0 0 40px',
            maxWidth: 520,
            lineHeight: 1.8,
          }}
        >
          نوفر حلول شحن متكاملة براً وبحراً وجواً — بدقة في المواعيد، وأمان في التوصيل، واحترافية في كل خطوة.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <button
            style={{
              padding: '14px 36px',
              borderRadius: 999,
              background: 'linear-gradient(135deg, #2BB7DA 0%, #0B3C6D 100%)',
              color: '#fff',
              fontFamily: "'Tajawal', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(43,183,218,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(43,183,218,0.55)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)';    e.currentTarget.style.boxShadow = '0 8px 32px rgba(43,183,218,0.4)'; }}
          >
            ابدأ شحنتك الآن
          </button>

          <button
            style={{
              padding: '14px 36px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              fontFamily: "'Tajawal', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              border: '2px solid rgba(255,255,255,0.35)',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'; }}
          >
            تتبع شحنتك
          </button>
        </motion.div>

        {/* Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 52 }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width:  i === 1 ? 28 : 8,
                height: 8,
                borderRadius: 999,
                background: i === 1 ? '#2BB7DA' : 'rgba(255,255,255,0.35)',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{
            width: 26,
            height: 42,
            borderRadius: 999,
            border: '2px solid rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 5,
              height: 10,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.7)',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
