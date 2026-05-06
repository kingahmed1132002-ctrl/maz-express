import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const HowItWorks = () => {
  const containerRef = useRef(null);
  const [hoveredBranch, setHoveredBranch] = useState(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      className="py-32 bg-[#fafbff] relative overflow-hidden"
      dir="rtl"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="text-center mb-24">

          <motion.h2
            className="text-4xl md:text-6xl font-black text-[#0f176a] mb-8 leading-tight"
          >
            كيف يعمل <span className="animate-text-shimmer">ماز إكسبرس؟</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            رحلة تسوق عالمية تبدأ بضغطة زر وتنتهي بابتسامة عند باب بيتك.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Central Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-[50px] bottom-[50px] w-[2px] bg-gray-100 -translate-x-1/2">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-blue-400 via-blue-600 to-cyan-400"
            />
          </div>

          <Step
            number="01"
            title="فتح حساب"
            description="أنشئ حسابك المجاني في ثوانٍ لتحصل على هويتك التسوقية وعناويننا الدولية في دبي وتركيا."
            icon="👤"
          />

          <Step
            number="02"
            title="اختيار المنتج"
            description="تصفح متاجرك العالمية المفضلة واختر المنتجات التي ترغب في اقتنائها."
            icon="📱"
          />

          {/* Branching Section */}
          <div className="relative py-16 md:py-32">
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" preserveAspectRatio="none">
                {/* Right Path - "تدفع بنفسك" */}
                <path
                  d="M400 0 V40 Q400 80 480 80 H650 Q700 80 700 130 V180"
                  stroke={hoveredBranch === 'right' ? '#3b82f6' : '#e2e8f0'}
                  strokeWidth="2" strokeDasharray="8 8"
                  className="transition-all duration-500"
                />
                {/* Left Path - "احنا ندفعلك" */}
                <path
                  d="M400 0 V40 Q400 80 320 80 H150 Q100 80 100 130 V180"
                  stroke={hoveredBranch === 'left' ? '#22d3ee' : '#e2e8f0'}
                  strokeWidth="2" strokeDasharray="8 8"
                  className="transition-all duration-500"
                />

                {/* Pulse Animations */}
                <motion.path
                  d="M400 0 V40 Q400 80 480 80 H650 Q700 80 700 130 V180"
                  stroke="#3b82f6" strokeWidth={hoveredBranch === 'right' ? '4' : '2'}
                  strokeLinecap="round"
                  animate={{
                    pathOffset: [0, 1],
                    opacity: hoveredBranch === 'right' ? [0, 1, 0] : [0, 0.3, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M400 0 V40 Q400 80 320 80 H150 Q100 80 100 130 V180"
                  stroke="#22d3ee" strokeWidth={hoveredBranch === 'left' ? '4' : '2'}
                  strokeLinecap="round"
                  animate={{
                    pathOffset: [0, 1],
                    opacity: hoveredBranch === 'left' ? [0, 1, 0] : [0, 0.3, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>

            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-stretch relative">
              <div className="flex-1" onMouseEnter={() => setHoveredBranch('right')} onMouseLeave={() => setHoveredBranch(null)}>
                <BranchCard
                  side="right"
                  title="تدفع بنفسك"
                  description="اشترِ بنفسك من أي موقع واستخدم موقع مخازننا في دبي أو تركيا كعنوان للشحن."
                  icon="🛒"
                  label="الخيار الأول"
                  isHovered={hoveredBranch === 'right'}
                />
              </div>

              <div className="flex-1" onMouseEnter={() => setHoveredBranch('left')} onMouseLeave={() => setHoveredBranch(null)}>
                <BranchCard
                  side="left"
                  title="احنا ندفعلك"
                  description="إذا كنت لا تملك بطاقة دفع دولية، فقط أرسل لنا روابط المنتجات وسنقوم نحن بعملية الشراء والدفع بدلاً منك."
                  icon="💳"
                  label="الخيار الثاني"
                  isHovered={hoveredBranch === 'left'}
                />
              </div>
            </div>



          </div>

          <Step
            number="03"
            title="نستلم في مخازننا"
            description="في كلتا الحالتين، نستلم مشترياتك في مخازننا العالمية، نقوم بفحصها وتجهيزها بأمان للشحن الدولي."
            icon="📦"
          />

          <Step
            number="04"
            title="يتم الشحن إلى ليبيا"
            description="نشحن طردك بسرعة وأمان إلى ليبيا، مع توفير خدمة التوصيل لمختلف المدن."
            icon="✈️"
          />

          {/* Final 0% Commission */}
          <div className="mt-24 text-center">
            <div className="inline-block relative p-1 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white border border-blue-100 px-8 py-10 md:px-16 md:py-12 rounded-3xl shadow-xl">
                <div className="text-5xl md:text-7xl font-black text-blue-600 mb-4 tracking-tighter">
                  0% <span className="text-3xl md:text-5xl">عمولة</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0f176a] mb-4">خدماتنا بعمولة 0%</h3>
                <p className="text-gray-500 text-lg max-w-md mx-auto">
                  نحن نوفر لك هذه الخدمات بدون أي عمولة إضافية. سعر المنتج كما هو في المتجر تماماً.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Step = ({ number, title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="flex flex-col items-center text-center relative mb-24 last:mb-0 group"
  >
    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-blue-50 flex items-center justify-center mb-8 z-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <span className="text-2xl font-black text-[#0f176a] relative z-10">{number}</span>
    </div>
    <div className="max-w-sm bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-500 hover:border-blue-100">
      <div className="text-5xl mb-6 mx-auto transition-transform duration-500 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#0f176a] mb-4">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-medium">{description}</p>
    </div>
  </motion.div>
);

const BranchCard = ({ title, description, icon, side, label, isHovered }) => (
  <motion.div
    className={`h-full bg-white p-10 rounded-[2.5rem] border ${isHovered ? 'border-blue-300 shadow-xl' : 'border-gray-100 shadow-md'} relative overflow-hidden transition-all duration-500`}
  >
    <div className={`absolute top-0 ${side === 'right' ? 'right-0' : 'left-0'} w-1.5 h-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-60`}></div>
    <div className={`text-xs font-bold uppercase mb-6 inline-block px-3 py-1 rounded-full transition-colors duration-300 ${isHovered ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-500'}`}>
      {label}
    </div>
    <div className="text-6xl mb-8 transform transition-transform duration-500 group-hover:scale-110">{icon}</div>
    <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f176a] mb-6">{title}</h3>
    <p className="text-gray-500 text-lg leading-relaxed font-medium">{description}</p>
    <div className={`mt-8 flex justify-center transition-all duration-300 ${isHovered ? 'text-blue-500 translate-y-1' : 'text-gray-200'}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14m7-7l-7 7-7-7" /></svg>
    </div>
  </motion.div>
);

export default HowItWorks;
