import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LanguageContext';

const Services = ({ fadeInUp, bgColor = '#ffffff' }) => {
  const { t } = useLang();

  const services = [
    { image: '/airplane.gif', title: t.service_1_title, desc: t.service_1_desc },
    { image: '/warehouse.gif', title: t.service_2_title, desc: t.service_2_desc },
    { image: '/delivery.gif', title: t.service_3_title, desc: t.service_3_desc },
    { image: '/card.gif', title: t.service_4_title, desc: t.service_4_desc }
  ];
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl md:text-5xl font-black text-navy" {...fadeInUp}>
            {t.services_title} <span className="text-cyan">{t.services_title_accent}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass-card service-card group flex flex-col items-center text-center"
              {...fadeInUp}
              transition={{ delay: i * 0.1 }}
            >
              {/* GIF Container: Centered and responsive */}
              <div className="w-24 h-24 mb-6 flex items-center justify-center">
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    /* object-contain ensures the whole GIF is visible without cropping */
                    className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
