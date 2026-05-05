import React from 'react';
import { motion } from 'framer-motion';

const SectionConnector = () => {
  return (
    <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
      {/* Cloud Shape Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Cloud SVG */}
        <svg
          width="200"
          height="80"
          viewBox="0 0 200 80"
          className="text-blue-100 drop-shadow-lg"
          fill="currentColor"
        >
          <path d="M150 60c-8.284 0-15-6.716-15-15 0-5.14 2.606-9.688 6.562-12.5C135.938 27.688 128 22.5 128 15c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 2.57.656 4.98 1.812 7.188C93.656 29.98 88 35.57 88 43c0 8.284-6.716 15-15 15s-15-6.716-15-15c0-2.57.656-4.98 1.812-7.188C53.656 29.98 48 35.57 48 43c0 8.284-6.716 15-15 15H10c-5.523 0-10 4.477-10 10s4.477 10 10 10h130c5.523 0 10-4.477 10-10s-4.477-10-10-10z"/>
        </svg>
      </motion.div>

      {/* Animated Progress Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 40 - 20,
              scale: 0
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 40 - 20,
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Progress Wave */}
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          style={{ originX: 0.5 }}
        />
      </div>

      {/* Central Progress Indicator */}
      <motion.div
        className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg flex items-center justify-center"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};

export default SectionConnector;