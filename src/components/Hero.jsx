import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../LanguageContext';

const heroImages = [
  "/WhatsApp Image 2026-05-11 at 12.22.12.jpeg",
  "/WhatsApp Image 2026-05-11 at 12.22.11.jpeg",
  "/WhatsApp Image 2026-05-11 at 12.22.08.jpeg",
  "/WhatsApp Image 2026-05-11 at 12.22.09.jpeg",
];

export default function Hero() {
  const { t, lang } = useLang();
  const [modeIndex, setModeIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const shippingModes = [
    { text: t.hero_mode_air, color: '#36C6F4' },
    { text: t.hero_mode_sea, color: '#2BB7DA' },
  ];

  useEffect(() => {
    const modeTimer = setInterval(() => {
      setModeIndex((prev) => (prev + 1) % 2);
    }, 2500);

    const imageTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(modeTimer);
      clearInterval(imageTimer);
    };
  }, []);

  const current = shippingModes[modeIndex];

  return (
    <section className="relative overflow-hidden border-b border-slate-50 bg-white min-h-[100vh] lg:min-h-[110vh] flex items-center pt-32 pb-40">
      {/* Animation Styles */}
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleDraft {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-hero-text {
          opacity: 0;
          animation: slideUpFade 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-hero-visual {
          opacity: 0;
          animation: scaleDraft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .architecture-grid {
          background-image:
            linear-gradient(to right, rgba(11, 60, 109, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(11, 60, 109, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      {/* Technical Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10 architecture-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-slate-100 hidden lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1600px] w-full">
        <div className="grid min-h-[auto] items-stretch gap-0 lg:min-h-[70vh] lg:grid-cols-12">

          {/* Content Column */}
          <div className={`flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:col-span-6 lg:px-12 lg:py-20 xl:px-20 2xl:px-24 lg:order-2 border-slate-100 ${lang === 'ar' ? 'border-l' : 'border-r'}`}>
            <div className={`relative ${lang === 'ar' ? 'text-right' : 'text-left'}`}>

              {/* Floating 3D Parcel Box with Dynamic Shadow */}
              <div className={`absolute z-20 hidden lg:block ${lang === 'ar' ? '-left-12 top-0' : '-right-4 -top-20 xl:-right-12 xl:-top-24'}`}>
                <motion.div
                  className="relative pointer-events-none"
                  animate={{
                    y: [0, -25, 0],
                    rotate: [-5, 5, -5]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src="/3d-brown-parcel-box-shipping-online-delivery-concept-illustration-background.png"
                    alt="3D Parcel Box"
                    className="w-[220px] h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)] contrast-[1.05]"
                  />

                  {/* Ground Shadow below the box */}
                  <motion.div
                    className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/10 rounded-[100%] blur-md"
                    animate={{
                      scale: [1, 0.7, 1],
                      opacity: [0.4, 0.2, 0.4]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>

              {/* Title */}
              <h1 className="mb-8 break-words text-[clamp(2.8rem,10vw,4.2rem)] font-black uppercase leading-[1.3] animate-hero-text [text-wrap:balance] sm:mb-10 lg:text-[clamp(3.5rem,5.5vw,5.2rem)] 2xl:text-[clamp(4.5rem,5vw,6.5rem)] text-[#0B3C6D]" style={{ animationDelay: '0.2s' }}>
                {t.hero_headline_1} <br />
                {lang === 'ar' ? (
                  <span className="text-[#36C6F4]">{t.hero_headline_2}</span>
                ) : (
                  <>
                    <span className="relative inline-block min-w-[3.5ch]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={modeIndex}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          style={{ color: current.color, display: 'inline-block' }}
                        >
                          {current.text}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                    <span className="text-[#0B3C6D] opacity-80 ml-2 mr-2">
                      {' & Land'}
                    </span>
                  </>
                )}
              </h1>

              {/* Description */}
              <p className="mb-10 max-w-2xl text-base font-light leading-relaxed text-slate-500 animate-hero-text sm:mb-12 sm:text-lg" style={{ animationDelay: '0.3s' }}>
                {t.hero_desc}
              </p>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative flex items-center justify-center bg-slate-50 px-5 pb-20 pt-6 animate-hero-visual sm:px-8 sm:pb-24 sm:pt-8 lg:col-span-6 lg:p-14 xl:p-16 lg:order-1" style={{ animationDelay: '0.5s' }}>
            <div className="group relative w-full max-w-xl aspect-[5/4] sm:max-w-2xl sm:aspect-square lg:aspect-[4/5]">

              {/* Image Framing Accents */}
              <div className="pointer-events-none absolute -inset-3 border border-slate-200 transition-all duration-1000 group-hover:inset-0 sm:-inset-4" />
              <div className={`absolute top-0 z-20 h-10 w-10 border-t-2 border-[#36C6F4] ${lang === 'ar' ? 'border-r-2 right-0' : 'border-l-2 left-0'}`} />

              <div className="absolute inset-0 overflow-hidden rounded-sm">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageIndex}
                    src={heroImages[imageIndex]}
                    alt="Maz Express Logistics"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 h-full w-full object-cover grayscale-[0.2] contrast-[1.02] hover:grayscale-0 transition-all duration-1000"
                  />
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Section Footer Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-60" />
      </div>
    </section>
  );
}
