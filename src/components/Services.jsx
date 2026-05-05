import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Warehouse, Truck, CreditCard } from 'lucide-react';

const Services = ({ fadeInUp }) => {
  const services = [
    { icon: <Zap />, title: 'الشحن الجوي والبحري', desc: 'شحن سريع وموثوق من تركيا والإمارات مباشرة إلى ليبيا.' },
    { icon: <Warehouse />, title: 'التخزين الآمن', desc: 'خدمات تخزين وتجميع محترفة في إسطنبول.' },
    { icon: <Truck />, title: 'اللوجستيات الداخلية', desc: 'خدمات شحن وتوصيل شاملة في جميع أنحاء ليبيا.' },
    { icon: <CreditCard />, title: 'التسوق والدفع', desc: 'نساعدك في الشراء من متاجر تركية ونتولى الدفع نيابةً عنك.' }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-5">
        <motion.h2 className="text-center mb-12 text-4xl md:text-5xl font-bold text-slate-900" {...fadeInUp}>
          خدماتنا المميزة
        </motion.h2>
        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div 
              key={i} 
              className="glass-card p-8"
              {...fadeInUp} 
              transition={{ delay: i * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
