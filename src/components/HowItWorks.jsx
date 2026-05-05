import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  { n: '01', t: 'التسجيل', d: 'احصل على عنوان تركي مجاني خاص بك فوراً بدون أي تكاليف إضافية.' },
  { n: '02', t: 'التسوق', d: 'تسوق بحرية من أشهر الماركات والمتاجر التركية المفضلة لديك بسهولة.' },
  { n: '03', t: 'الشحن', d: 'أرسل مشترياتك إلى مستودعنا الآمن في تركيا وتابع حالتها.' },
  { n: '04', t: 'التوصيل', d: 'استلم شحنتك حتى باب بيتك في ليبيا مع خدمة ماز إكسبرس السريعة.' }
];

const HowItWorks = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  // تنعيم حركة الخط باستخدام useSpring
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section 
      ref={containerRef} 
      id="how-it-works" 
      className="py-32 px-5 max-w-6xl mx-auto font-['Inter'] relative overflow-hidden"
    >
      {/* Header Section */}
      <div className="text-center mb-32">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4 border border-blue-100 uppercase tracking-wider"
        >
          العملية بسيطة
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-black text-[#0f176a] mb-6">
          كيف تعمل <span className="text-cyan-400">ماز إكسبرس؟</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          نحن نعتني بكل التفاصيل، من لحظة شرائك حتى وصول الطرد إلى يدك في ليبيا.
        </p>
      </div>

      <div className="relative">
        {/* الخط الرأسي الخلفي */}
        <div className="absolute right-[20px] md:right-1/2 top-0 bottom-0 w-[2px] bg-gray-100 transform md:translate-x-1/2 -z-10" />

        {/* خط البروقريس النشط مع التدرج */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute right-[20px] md:right-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 transform md:translate-x-1/2 -z-10"
        />

        <div className="space-y-24 md:space-y-40">
          {steps.map((step, i) => (
            <StepRow 
              key={i} 
              step={step} 
              index={i} 
              total={steps.length}
              scrollProgress={scrollYProgress} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StepRow = ({ step, index, total, scrollProgress }) => {
  const isEven = index % 2 === 0;
  
  // حساب متى يتم تفعيل الدائرة
  const start = index / total;
  const end = (index + 1) / total;

  // تحويلات حركية للدائرة
  const circleScale = useTransform(scrollProgress, [start, start + 0.05], [0.8, 1.2]);
  const circleBoxShadow = useTransform(
    scrollProgress,
    [start, start + 0.05],
    ["0px 0px 0px rgba(37, 99, 235, 0)", "0px 0px 20px rgba(37, 99, 235, 0.4)"]
  );
  const circleBg = useTransform(
    scrollProgress,
    [start, start + 0.05],
    ["#ffffff", "#48c7e7"]
  );
  const iconColor = useTransform(
    scrollProgress,
    [start, start + 0.05],
    ["#9ca3af", "#ffffff"]
  );

  return (
    <div className="flex items-center justify-between relative w-full group">
      
      {/* المحتوى - يظهر يميناً أو يساراً في الـ Desktop */}
      <div className={`w-full md:w-[42%] ${isEven ? 'md:order-1' : 'md:order-3'} pr-16 md:pr-0`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 relative"
        >
            {/* سهم صغير يشير للدائرة في الـ Desktop */}
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 ${isEven ? '-right-2 border-t-transparent border-l-transparent border-b border-r' : '-left-2'}`} />
            
            <h3 className="text-2xl font-bold text-[#1e293b] mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {step.t}
            </h3>
            <p className="text-gray-500 leading-relaxed text-base md:text-lg">
                {step.d}
            </p>
        </motion.div>
      </div>

      {/* الدائرة الوسطى */}
      <div className="absolute right-0 md:left-1/2 md:right-auto transform translate-x-0 md:-translate-x-1/2 z-20 md:order-2">
        <motion.div 
          style={{ 
            backgroundColor: circleBg, 
            scale: circleScale,
            boxShadow: circleBoxShadow 
          }}
          className="w-11 h-11 md:w-14 md:h-14 flex items-center justify-center rounded-full border-4 border-white transition-all"
        >
          <motion.span 
            style={{ color: iconColor }}
            className="text-lg md:text-xl font-black"
          >
            {step.n}
          </motion.span>
        </motion.div>
      </div>

      {/* مساحة فارغة للمحاذاة */}
      <div className="hidden md:block md:w-[42%] md:order-2" />
    </div>
  );
};

export default HowItWorks;