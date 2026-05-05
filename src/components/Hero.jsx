import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <header
      className="hero h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-slate-100 relative overflow-hidden"
      role="banner"
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/hero_bg.png')] bg-cover bg-center opacity-5"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-blue/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-lg animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg mb-8"
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">ماز إكسبرس - الشحن السريع والموثوق</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight font-outfit"
            >
              شحن
              <span className="bg-gradient-to-r from-accent-blue to-accent bg-clip-text text-transparent"> سريع </span>
              وآمن
              <br />
              من تركيا إلى ليبيا
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              نوفر لك أفضل خدمات الشحن والتوصيل مع ضمان الجودة والأمان في كل خطوة من رحلتك التجارية
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="#services"
                className="group bg-gradient-to-r from-accent-blue to-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-accent-blue/25 hover:shadow-2xl hover:shadow-accent-blue/40 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
              >
                <span>ابدأ رحلتك الآن</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <Play className="w-5 h-5 text-accent-blue" />
                <span className="font-semibold text-slate-700">شاهد الفيديو</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">10+</div>
                <div className="text-sm text-slate-600">فروع</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">1500+</div>
                <div className="text-sm text-slate-600">شحنة شهرياً</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">50+</div>
                <div className="text-sm text-slate-600">وجهة</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;