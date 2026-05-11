import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { val: '+5,000', label: 'شحنة مكتملة',      icon: '📦' },
  { val: '1,500+', label: 'شحنة شهرياً',       icon: '🚀' },
  { val: '0%',     label: 'عمولة على خدماتنا', icon: '🎯' },
];

const Stats = ({ fadeInUp, bgColor = '#f0f8fc' }) => (
  <section
    className="section-padding relative overflow-hidden"
    style={{ backgroundColor: bgColor }}
  >
    {/* Brand glow orbs */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-30 bg-cyan blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-20 bg-cyan blur-3xl" />
    </div>

    <div className="container mx-auto px-5 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-5"
        style={{ background: 'rgba(54,198,244,0.1)', color: '#0B3C6D', border: '1px solid rgba(54,198,244,0.2)' }}
      >
        أرقامنا تتحدث
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-black mb-4"
        style={{ color: '#0B3C6D' }}
        {...fadeInUp}
      >
        ثقة تُبنى على{' '}
        <span style={{ color: '#36C6F4' }}>الأرقام الحقيقية</span>
      </motion.h2>

      <motion.p
        className="text-lg mb-16 max-w-lg mx-auto"
        style={{ color: '#4b6a8a' }}
        {...fadeInUp}
        transition={{ delay: 0.1 }}
      >
        شريكك الموثوق في الشحن من تركيا والإمارات إلى ليبيا
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-8 bg-white text-center"
            style={{
              border: '1px solid rgba(54,198,244,0.15)',
              boxShadow: '0 4px 24px rgba(11,60,109,0.06)',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(54,198,244,0.15)', borderColor: 'rgba(54,198,244,0.35)' }}
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <div className="text-5xl font-black mb-2" style={{ color: '#36C6F4' }}>
              {stat.val}
            </div>
            <p className="font-semibold" style={{ color: '#4b6a8a' }}>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
