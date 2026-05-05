import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calculator } from 'lucide-react';

const Widgets = ({ fadeInUp }) => {
  const [trackingId, setTrackingId] = useState('');
  const [calcData, setCalcData] = useState({ weight: '', method: 'air' });
  const [calcResult, setCalcResult] = useState(null);

  const handleCalculate = () => {
    const rate = calcData.method === 'air' ? 15 : 5;
    const price = (parseFloat(calcData.weight) || 0) * rate;
    setCalcResult(price > 0 ? `$${price.toFixed(2)}` : null);
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-5">
        <div className="widget-grid">
          <motion.div className="glass-card p-8" {...fadeInUp} id="tracking">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
              <Search className="text-accent-blue" size={20} /> تتبع شحنتك
            </h3>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="أدخل رقم التتبع..." 
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
              <button className="btn btn-gold">تتبع</button>
            </div>
          </motion.div>

          <motion.div className="glass-card p-8" {...fadeInUp} transition={{ delay: 0.2 }} id="calculator">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
              <Calculator className="text-accent-blue" size={20} /> حساب السعر
            </h3>
            <div className="input-group">
              <input 
                type="number" 
                placeholder="الوزن (كغ)" 
                value={calcData.weight}
                onChange={(e) => setCalcData({ ...calcData, weight: e.target.value })}
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              />
              <select 
                value={calcData.method}
                onChange={(e) => setCalcData({ ...calcData, method: e.target.value })}
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
              >
                <option value="air">شحن جوي (سريع)</option>
                <option value="sea">شحن بحري (اقتصادي)</option>
              </select>
            </div>
            <button className="btn btn-primary w-full mt-4" onClick={handleCalculate}>احسب</button>
            {calcResult && <div className="calc-result">السعر المقدر: {calcResult}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Widgets;
