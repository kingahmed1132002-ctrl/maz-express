import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useLang } from '../LanguageContext';

const TrustSection = ({ fadeInUp }) => {
  const { t, lang } = useLang();

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          {...fadeInUp}
        >
          {/* CONTENT BLOCK */}
          <div className={`w-full md:w-1/2 ${lang === 'ar' ? 'text-right' : 'text-left'} order-1 ${lang === 'ar' ? '' : 'md:order-2'}`}>
            <div className={`w-16 h-16 bg-cyan/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan/10 ${lang === 'ar' ? 'ml-auto' : 'mr-auto'}`}>
              <ShieldCheck className="text-cyan" size={32} />
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-navy mb-6 leading-[1.6]">
              {t.trust_title_1} <span className="text-cyan">{t.trust_title_2}</span>
            </h2>

            <p className={`text-text-secondary leading-relaxed text-lg mb-8 max-w-xl ${lang === 'ar' ? 'ml-auto' : 'mr-auto'}`}>
              {t.trust_desc}
            </p>

            <a href="#contact" className="inline-flex items-center gap-3 bg-cyan text-navy px-8 py-4 rounded-xl font-bold shadow-lg shadow-cyan/20 hover:bg-cyan hover:shadow-xl hover:shadow-cyan/30 transition-all duration-300 hover:-translate-y-1">
              {t.trust_cta}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={lang === 'ar' ? 'rotate-180' : ''}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          {/* GIF BLOCK */}
          <div className={`w-full md:w-1/2 flex justify-center ${lang === 'ar' ? 'md:justify-end' : 'md:justify-start'} order-2 ${lang === 'ar' ? '' : 'md:order-1'}`}>
            <motion.div
              className="relative border-2 border-cyan/30 overflow-hidden bg-cyan/5 backdrop-blur-sm shadow-2xl shadow-cyan/10 w-full max-w-md aspect-square flex items-center justify-center"
              animate={{
                borderRadius: [
                  "60% 40% 30% 70% / 60% 30% 70% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "50% 40% 30% 40% / 40% 50% 60% 50%",
                  "60% 40% 30% 70% / 60% 30% 70% 40%"
                ],
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(14, 165, 233, 0.6)",
                boxShadow: "0 30px 60px -12px rgba(14, 165, 233, 0.3)"
              }}
              transition={{
                borderRadius: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: { duration: 0.4 },
                borderColor: { duration: 0.4 }
              }}
            >
              <img
                src="/delivery2.gif"
                alt="Delivery"
                className="w-full h-full object-cover mix-blend-multiply relative z-10"
                style={{ backgroundColor: 'transparent' }}
              />
              
              {/* Animated Glow Overlay */}
              <motion.div 
                className="absolute inset-0 bg-cyan/10 pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
