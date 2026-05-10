import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { val: '10+',   label: 'الفروع',           icon: '🏢' },
  { val: '1500+', label: 'الشحنات / الشهر',  icon: '📦' },
  { val: '50+',   label: 'الوجهات',           icon: '🌍' },
];

const Stats = ({ fadeInUp, bgColor = '#f0fdf4' }) => (
  <section
    className="section-padding text-center relative overflow-hidden"
    style={{ backgroundColor: bgColor }}
  >
    {/* Soft decorative circles */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, #bbf7d0 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)' }}
      />
    </div>

    <div className="container mx-auto px-5 relative z-10">
      <motion.h2
        className="text-center mb-4 text-4xl md:text-5xl font-bold text-slate-900"
        {...fadeInUp}
      >
        أرقامنا تتحدث
      </motion.h2>
      <motion.p
        className="text-slate-500 text-lg mb-14 max-w-lg mx-auto"
        {...fadeInUp}
        transition={{ delay: 0.1 }}
      >
        ثقة تُبنى على الأرقام الحقيقية
      </motion.p>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="rounded-2xl p-8 border border-green-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            {...fadeInUp}
            transition={{ delay: i * 0.15 }}
          >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <h2 className="text-5xl font-black mb-3 text-green-600">
              {stat.val}
            </h2>
            <p className="text-slate-500 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
