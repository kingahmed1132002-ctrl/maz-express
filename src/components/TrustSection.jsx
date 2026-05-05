import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const TrustSection = ({ fadeInUp }) => {
  return (
    <section className="section-padding container">
      <motion.div className="glass-card flex-between" {...fadeInUp}>
        <div className="image-half">
          <img src="/delivery.png" alt="Delivery" />
        </div>
        <div className="content-half">
          <ShieldCheck className="accent-color mb-20" size={40} />
          <h2>عناية بلا استثناءات</h2>
          <p>نتعامل مع كل شحنة بعناية، لضمان وصول بضائعك بأمان من إسطنبول إلى باب منزلك. راحة البال مضمونة.</p>
          <a href="#contact" className="btn btn-gold mt-20">تواصل معنا اليوم</a>
        </div>
      </motion.div>
    </section>
  );
};

export default TrustSection;
