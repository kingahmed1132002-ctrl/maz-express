import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLang } from '../LanguageContext';

const HowItWorks = ({ bgColor = '#f8fbff' }) => {
  const containerRef = useRef(null);
  const [hoveredBranch, setHoveredBranch] = useState(null);
  const { t, lang } = useLang();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-black text-navy mb-8 leading-[1.6]"
          >
            {t.how_title_1} <span className="animate-text-shimmer">{t.how_title_2}</span>
          </motion.h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg md:text-xl font-medium">
            {t.how_desc}
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-[50px] bottom-[50px] w-[2px] bg-cyan/10 -translate-x-1/2">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-cyan"
            />
          </div>

          <Step
            number="01"
            title={t.step1_title}
            description={t.step1_desc}
            icon="👤"
          />

          <Step
            number="02"
            title={t.step2_title}
            description={t.step2_desc}
            icon="📱"
          />

          {/* Branching Section */}
          <div className="relative py-12 md:py-20">
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" preserveAspectRatio="none">
                {/* Right Path - Option 1 */}
                <path
                  d="M400 0 V40 Q400 80 480 80 H650 Q700 80 700 130 V180"
                  stroke={hoveredBranch === 'right' ? '#36C6F4' : '#d9eef5'}
                  strokeWidth="2" strokeDasharray="8 8"
                  className="transition-all duration-500"
                />
                {/* Left Path - Option 2 */}
                <path
                  d="M400 0 V40 Q400 80 320 80 H150 Q100 80 100 130 V180"
                  stroke={hoveredBranch === 'left' ? '#36C6F4' : '#d9eef5'}
                  strokeWidth="2" strokeDasharray="8 8"
                  className="transition-all duration-500"
                />

                {/* Pulse Animations */}
                <motion.path
                  d="M400 0 V40 Q400 80 480 80 H650 Q700 80 700 130 V180"
                  stroke="#36C6F4" strokeWidth={hoveredBranch === 'right' ? '4' : '2'}
                  strokeLinecap="round"
                  animate={{
                    pathOffset: [0, 1],
                    opacity: hoveredBranch === 'right' ? [0, 1, 0] : [0, 0.3, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M400 0 V40 Q400 80 320 80 H150 Q100 80 100 130 V180"
                  stroke="#36C6F4" strokeWidth={hoveredBranch === 'left' ? '4' : '2'}
                  strokeLinecap="round"
                  animate={{
                    pathOffset: [0, 1],
                    opacity: hoveredBranch === 'left' ? [0, 1, 0] : [0, 0.3, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>

            <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-stretch relative ${lang === 'ar' ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="flex-1" onMouseEnter={() => setHoveredBranch('right')} onMouseLeave={() => setHoveredBranch(null)}>
                <BranchCard
                  side="right"
                  title={t.branch_title_1}
                  description={t.branch_desc_1}
                  icon="🛒"
                  label={t.branch_label_1}
                  isHovered={hoveredBranch === 'right'}
                  lang={lang}
                />
              </div>

              <div className="flex-1" onMouseEnter={() => setHoveredBranch('left')} onMouseLeave={() => setHoveredBranch(null)}>
                <BranchCard
                  side="left"
                  title={t.branch_title_2}
                  description={t.branch_desc_2}
                  icon="💳"
                  label={t.branch_label_2}
                  isHovered={hoveredBranch === 'left'}
                  lang={lang}
                />
              </div>
            </div>
          </div>

          <Step
            number="03"
            title={t.step3_title}
            description={t.step3_desc}
            icon="📦"
          />

          <Step
            number="04"
            title={t.step4_title}
            description={t.step4_desc}
            icon="✈️"
          />

          {/* Final 0% Commission */}
          <div className="mt-16 text-center">
            <div className="inline-block relative p-1 group">
              <div className="absolute inset-0 bg-cyan rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
              <div className="relative bg-white border border-cyan/20 px-8 py-10 md:px-16 md:py-12 rounded-3xl shadow-xl">
                <div className="text-5xl md:text-7xl font-black text-cyan mb-4 tracking-normal" style={{ direction: 'ltr' }}>
                  0% <span className="ml-3 text-3xl md:text-5xl tracking-normal" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>{t.commission_word}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">{t.commission_title}</h3>
                <p className="text-text-secondary text-lg max-w-md mx-auto">
                  {t.commission_desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ number, title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex flex-col items-center text-center relative mb-16 last:mb-0 group"
  >
    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-cyan/15 flex items-center justify-center mb-8 z-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <span className="text-2xl font-black text-navy relative z-10">{number}</span>
    </div>
    <div className="max-w-sm bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(11,60,109,0.05)] border border-cyan/10 transition-all duration-500 hover:border-cyan/30">
      <div className="text-5xl mb-6 mx-auto transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
      <p className="text-text-secondary leading-relaxed font-medium">{description}</p>
    </div>
  </motion.div>
);

const BranchCard = ({ title, description, icon, side, label, isHovered, lang }) => {
  // Determine gradient accent placement based on language and visual side
  const showRight = side === 'right' && lang === 'ar' || side === 'left' && lang === 'en';
  return (
  <motion.div
    className={`h-full bg-white p-10 rounded-[2.5rem] border ${isHovered ? 'border-cyan/50 shadow-xl' : 'border-cyan/10 shadow-md'} relative overflow-hidden transition-all duration-500`}
  >
    <div className={`absolute top-0 ${showRight ? 'right-0' : 'left-0'} w-1.5 h-full bg-cyan opacity-70`}></div>
    <div className={`text-xs font-bold uppercase mb-6 inline-block px-3 py-1 rounded-full transition-colors duration-300 ${isHovered ? 'bg-cyan text-navy' : 'bg-cyan/10 text-cyan-dark'}`}>
      {label}
    </div>
    <div className="text-6xl mb-8 transform transition-transform duration-500 group-hover:scale-110">{icon}</div>
    <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-6">{title}</h3>
    <p className="text-text-secondary text-lg leading-relaxed font-medium">{description}</p>
    <div className={`mt-8 flex justify-center transition-all duration-300 ${isHovered ? 'text-cyan translate-y-1' : 'text-cyan/25'}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14m7-7l-7 7-7-7" /></svg>
    </div>
  </motion.div>
)};

export default HowItWorks;
