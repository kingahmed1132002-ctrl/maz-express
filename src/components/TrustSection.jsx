import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const TrustSection = ({ fadeInUp, bgColor = '#f0f4f8' }) => {
  return (
    <section className="section-padding relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="container mx-auto px-5 relative z-10">
        <motion.div className="glass-card flex-between relative overflow-hidden group" {...fadeInUp}>
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="image-half relative z-10 transform transition-transform duration-700 group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent rounded-2xl z-10" />
            <img src="/delivery.png" alt="Delivery" className="rounded-2xl shadow-lg shadow-blue-900/10" />
          </div>
          
          <div className="content-half relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-blue/10 to-accent-blue/5 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-accent-blue/20">
              <ShieldCheck className="text-accent-blue" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">عناية بلا <span className="bg-gradient-to-l from-accent-blue to-cyan-500 bg-clip-text text-transparent">استثناءات</span></h2>
            <p className="text-slate-500 leading-relaxed text-lg mb-8">
              نتعامل مع كل شحنة بعناية فائقة، لضمان وصول بضائعك بأمان وموثوقية عالية من إسطنبول إلى باب منزلك. راحة البال مضمونة مع كل خطوة.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-blue to-cyan-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-accent-blue/30 hover:shadow-xl hover:shadow-accent-blue/40 transition-all duration-300 hover:-translate-y-1">
              تواصل معنا اليوم
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
