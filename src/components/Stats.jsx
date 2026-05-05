import React from 'react';
import { motion } from 'framer-motion';

const Stats = ({ fadeInUp }) => {
  const stats = [
    { val: '10+', label: 'الفروع' },
    { val: '1500+', label: 'الشحنات / الشهر' },
    { val: '50+', label: 'الوجهات' }
  ];

  return (
    <section className="stats-section section-padding">
      <div className="container mx-auto px-5">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div key={i} className="glass-card p-8" {...fadeInUp} transition={{ delay: i * 0.2 }}>
              <h2 className="text-5xl font-bold text-accent mb-3">{stat.val}</h2>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
