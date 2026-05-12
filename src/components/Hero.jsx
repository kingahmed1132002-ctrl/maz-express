import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const shippingModes = [
  { text: 'جوي',  color: '#36C6F4' },
  { text: 'بحري', color: '#2BB7DA' },
  { text: 'بري',  color: '#0B3C6D' },
];

const heroImages = [
  "/WhatsApp Image 2026-05-11 at 12.22.12.jpeg",
  "/WhatsApp Image 2026-05-11 at 12.22.11.jpeg",
  "/WhatsApp Image 2026-05-11 at 12.22.08.jpeg",
  "/WhatsApp Image 2026-05-11 at 12.22.09.jpeg",
];

export default function Hero() {
  const [modeIndex, setModeIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const modeTimer = setInterval(() => {
      setModeIndex((prev) => (prev + 1) % shippingModes.length);
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
    <section className="relative overflow-hidden border-b border-slate-50 bg-white min-h-[100vh] lg:min-h-[110vh] flex items-center pt-32 pb-40" dir="rtl">
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
          
          {/* Content Column (Arabic: Right Side) */}
          <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:col-span-6 lg:px-12 lg:py-20 xl:px-20 2xl:px-24 lg:order-2 border-l border-slate-100">
            <div className="relative text-right">
              {/* Title */}
              <h1 className="mb-8 break-words text-[clamp(2.8rem,10vw,4.2rem)] font-black uppercase tracking-tighter leading-[0.95] animate-hero-text [text-wrap:balance] sm:mb-10 lg:text-[clamp(3.5rem,5.5vw,5.2rem)] 2xl:text-[clamp(4.5rem,5vw,6.5rem)] text-[#0B3C6D]" style={{ animationDelay: '0.2s' }}>
                نشحن <br />
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
                <span className="text-[#0B3C6D]"> وبري</span>
              </h1>

              {/* Description */}
              <p className="mb-10 max-w-2xl text-base font-light leading-relaxed text-slate-500 animate-hero-text sm:mb-12 sm:text-lg" style={{ animationDelay: '0.3s' }}>
                نوفر حلول شحن متكاملة براً وبحراً وجواً — بدقة في المواعيد، وأمان في التوصيل، واحترافية في كل خطوة. شريكك الموثوق في الشحن الدولي من وإلى جميع أنحاء العالم.
              </p>
            </div>
          </div>

          {/* Visual Column (Arabic: Left Side) */}
          <div className="relative flex items-center justify-center bg-slate-50 px-5 pb-20 pt-6 animate-hero-visual sm:px-8 sm:pb-24 sm:pt-8 lg:col-span-6 lg:p-14 xl:p-16 lg:order-1" style={{ animationDelay: '0.5s' }}>
            <div className="group relative w-full max-w-xl aspect-[5/4] sm:max-w-2xl sm:aspect-square lg:aspect-[4/5]">
              
              {/* Image Framing Accents */}
              <div className="pointer-events-none absolute -inset-3 border border-slate-200 transition-all duration-1000 group-hover:inset-0 sm:-inset-4" />
              <div className="absolute top-0 z-20 h-10 w-10 border-t-2 border-r-2 border-[#36C6F4] right-0" />
              
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

              {/* Floating Panel */}
              <div className="absolute bottom-4 left-4 right-4 z-30 border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-900/5 transition-all duration-700 hover:-translate-y-2 sm:left-6 sm:right-6 sm:bottom-6 sm:p-6 lg:w-[75%] lg:p-8 lg:-right-10 lg:left-auto text-right">
                <span className="mb-3 block font-mono text-[0.58rem] uppercase tracking-[0.28em] text-[#36C6F4] sm:mb-4 sm:text-[0.65rem] sm:tracking-[0.4em]">
                  تتبع شحنتك
                </span>
                <h2 className="mb-3 text-xl font-black uppercase tracking-tight text-[#0B3C6D] sm:mb-4 sm:text-2xl [text-wrap:balance]">
                  دعم فني واحترافي على مدار الساعة
                </h2>
                <p className="text-sm font-light leading-relaxed text-slate-500">
                  فريقنا المتخصص يضمن لك راحة البال من خلال متابعة دقيقة لكل تفاصيل عملية الشحن منذ الاستلام وحتى التوصيل.
                </p>
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
