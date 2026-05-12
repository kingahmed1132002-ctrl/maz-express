import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  CheckCircle2,
  MapPin,
  Plane,
  Ruler,
  Scale,
  ShieldCheck,
  Ship,
  Truck,
  Zap,
  Timer,
  Globe,
  Headphones
} from 'lucide-react';

const Widgets = ({ fadeInUp, bgColor = '#eef6ff' }) => {
  const [destination, setDestination] = useState('turkey');
  const [shippingtype, setShippingtype] = useState('air');

  const [kg, setKg] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const [cost, setCost] = useState(null);

  const showDims =
    destination === 'turkey' &&
    shippingtype === 'sea';

  const calculateCost = () => {
    const weight = parseFloat(kg);
    if (!weight || weight <= 0) return;

    let result;
    if (destination === 'turkey') {
      if (shippingtype === 'air') {
        result = weight * 2.9;
      } else {
        const l = parseFloat(length) / 100;
        const w = parseFloat(width) / 100;
        const h = parseFloat(height) / 100;
        result = Math.max(weight * 2.5, l * w * h * 80 * 8);
      }
    } else {
      result = weight * 6;
    }
    setCost(result.toFixed(2));
  };

  const destinations = [
    { value: 'turkey', flag: '🇹🇷', label: 'تركيا', hint: 'جوي أو بحري' },
    { value: 'dubai', flag: '🇦🇪', label: 'دبي', hint: 'جوي فقط' },
  ];

  const shippingOptions =
    destination === 'dubai'
      ? [{ value: 'air', Icon: Plane, label: 'جوي', color: '#2563EB' }]
      : [
        { value: 'air', Icon: Plane, label: 'جوي', color: '#2563EB' },
        { value: 'sea', Icon: Ship, label: 'بحري', color: '#0891B2' },
      ];

  const benefits = [
    {
      Icon: Timer,
      title: 'تسعير فوري',
      desc: 'احصل على تكلفة شحنتك في ثوانٍ معدودة دون انتظار.',
      color: '#36C6F4'
    },
    {
      Icon: Globe,
      title: 'تغطية عالمية',
      desc: 'نشحن من تركيا ودبي إلى جميع المدن الليبية بكفاءة.',
      color: '#2563EB'
    },
    {
      Icon: ShieldCheck,
      title: 'شفافية كاملة',
      desc: 'لا توجد رسوم خفية، السعر الذي تراه هو السعر التقديري العادل.',
      color: '#16A34A'
    }
  ];

  const fieldLabelClass = 'mb-2 flex items-center gap-2 text-[12px] font-extrabold text-navy';

  return (
    <section
      id="tracking"
      className="section-padding relative overflow-hidden rtl px-5"
      style={{ backgroundColor: bgColor }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-7 text-right"
            {...fadeInUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan mb-6">
              <Calculator size={16} strokeWidth={2.5} />
              <span className="text-xs font-black uppercase tracking-wider">حاسبة الأسعار الذكية</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
              خطط لشحنتك القادمة <br /> 
              <span className="text-cyan">بكل شفافية ودقة</span>
            </h2>
            
            <p className="text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
              نحن نؤمن بأن الثقة تبدأ من الوضوح. استخدم الحاسبة التقديرية لمعرفة تكاليف الشحن من تركيا ودبي مباشرة، لنساعدك في اتخاذ أفضل قرار لعملك.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-navy group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                    <benefit.Icon size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">{benefit.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-white/50 border border-white backdrop-blur-sm inline-flex items-center gap-4">
              <div className="text-sm">
                <span className="block font-bold text-navy">انضم لـ +50 عميل</span>
                <span className="text-slate-400">يثقون في خدماتنا يومياً</span>
              </div>
            </div>
          </motion.div>

          {/* Calculator Column */}
          <motion.div 
            className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className="w-full max-w-[500px] overflow-hidden rounded-[32px] border border-cyan/25 bg-white shadow-[0_32px_80px_-20px_rgba(11,60,109,0.15)]">
              <div className="h-2 bg-cyan" />

              <div className="border-b border-cyan/15 px-8 pb-6 pt-8 bg-slate-50/50">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-cyan/35 bg-white shadow-sm">
                    <Calculator color="#36C6F4" size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-navy">حساب التكلفة</h3>
                    <p className="text-sm font-medium text-slate-400">أدخل تفاصيل شحنتك للبدء</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Destination */}
                <div className="mb-6">
                  <div className={fieldLabelClass}>
                    <MapPin color="#36C6F4" size={16} strokeWidth={2.4} /> الوجهة
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {destinations.map((item) => (
                      <button
                        key={item.value}
                        onClick={() => {
                          setDestination(item.value);
                          if (item.value === 'dubai') setShippingtype('air');
                          setCost(null);
                        }}
                        className={`flex flex-col items-center justify-center gap-1 rounded-2xl border px-4 py-4 transition-all duration-300 ${
                          destination === item.value
                            ? 'border-cyan bg-cyan text-navy shadow-lg shadow-cyan/20'
                            : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-cyan/30 hover:bg-white'
                        }`}
                      >
                        <span className="text-2xl">{item.flag}</span>
                        <span className="text-sm font-black">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Shipping Type */}
                <div className="mb-6">
                  <div className={fieldLabelClass}>
                    <Truck color="#2563EB" size={16} strokeWidth={2.4} /> نوع الشحن
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                    {shippingOptions.map(({ value, Icon, label, color }) => (
                      <button
                        key={value}
                        onClick={() => { setShippingtype(value); setCost(null); }}
                        className={`flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-black transition-all ${
                          shippingtype === value ? 'bg-white text-navy shadow-sm' : 'text-slate-400 hover:text-navy'
                        }`}
                      >
                        <Icon size={16} style={{ color: shippingtype === value ? color : 'currentColor' }} />
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Weight */}
                <div className="mb-6">
                  <div className={fieldLabelClass}>
                    <Scale color="#16A34A" size={16} strokeWidth={2.4} /> الوزن (كجم)
                  </div>
                  <input
                    type="number"
                    value={kg}
                    onChange={(e) => setKg(e.target.value)}
                    placeholder="0.00"
                    className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-lg font-bold text-navy outline-none focus:border-cyan focus:bg-white focus:ring-4 focus:ring-cyan/10 transition-all"
                  />
                </div>

                {showDims && (
                  <div className="mb-6 animate-in fade-in slide-in-from-top-2">
                    <div className={fieldLabelClass}>
                      <Ruler color="#D97706" size={16} strokeWidth={2.4} /> الأبعاد (سم)
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        ['L', length, setLength, 'طول'],
                        ['W', width, setWidth, 'عرض'],
                        ['H', height, setHeight, 'ارتفاع']
                      ].map(([id, val, set, lbl]) => (
                        <div key={id} className="relative">
                          <input
                            type="number" value={val} onChange={(e) => set(e.target.value)}
                            placeholder="0" className="w-full rounded-xl border border-slate-100 bg-slate-50 px-2 pb-6 pt-3 text-center font-bold text-navy outline-none focus:border-cyan focus:bg-white transition-all"
                          />
                          <span className="absolute bottom-2 inset-x-0 text-center text-[10px] font-bold text-slate-300">{lbl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={calculateCost}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-[#0B3C6D] px-5 py-5 text-lg font-black text-white shadow-xl shadow-navy/20 hover:bg-navy/90 hover:-translate-y-1 transition-all duration-300 active:translate-y-0"
                >
                  <Calculator size={20} />
                  احسب التكلفة الآن
                </button>

                <AnimatePresence>
                  {cost && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="mt-6 flex items-center gap-4 rounded-2xl border-2 border-cyan/20 bg-cyan/5 p-5"
                    >
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#16A34A] shadow-sm">
                        <CheckCircle2 size={32} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-cyan uppercase tracking-widest mb-1">التكلفة التقديرية</div>
                        <div className="text-3xl font-black text-navy">
                          {cost} <span className="text-sm font-bold text-slate-400">{shippingtype === 'air' ? '$' : 'دينار ليبي'}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Widgets;
