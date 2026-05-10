import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Warehouse, Truck, CreditCard } from 'lucide-react';

const Services = ({ fadeInUp, bgColor = '#ffffff' }) => {
  const services = [
    { icon: <Zap />, title: 'الشحن الجوي والبحري', desc: 'شحن سريع وموثوق من تركيا والإمارات مباشرة إلى ليبيا.' },
    { icon: <Warehouse />, title: 'التخزين الآمن', desc: 'خدمات تخزين وتجميع محترفة في إسطنبول.' },
    { icon: <Truck />, title: 'اللوجستيات الداخلية', desc: 'خدمات شحن وتوصيل شاملة في جميع أنحاء ليبيا.' },
    { icon: <CreditCard />, title: 'التسوق والدفع', desc: 'نساعدك في الشراء من متاجر تركية ونتولى الدفع نيابةً عنك.' }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-accent-blue text-sm font-bold tracking-wide mb-4 border border-blue-100"
          >
            نتميز بتقديم الأفضل
          </motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-black text-slate-900" {...fadeInUp}>
            خدماتنا <span className="bg-gradient-to-l from-accent-blue to-cyan-500 bg-clip-text text-transparent">المميزة</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="glass-card service-card group"
              {...fadeInUp} 
              transition={{ delay: i * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-accent-blue transition-colors duration-300">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
