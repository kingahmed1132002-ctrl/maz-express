import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calculator } from 'lucide-react';

const Widgets = ({ fadeInUp }) => {
  const [trackingId, setTrackingId] = useState('');
  const [destination, setDestination] = useState('turkey');
  const [shippingtype, setShippingtype] = useState('air');

  const [kg, setKg] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [cost, setCost] = useState(null);

  const calculateCost = () => {
    const weight = parseFloat(kg);
    const l = parseFloat(length) / 100; // to meters
    const w = parseFloat(width) / 100;
    const h = parseFloat(height) / 100;
    const cbm = l * w * h;

    if (isNaN(weight) || isNaN(cbm) && destination !== 'dubai') {
      alert('يرجى إدخال أرقام صحيحة');
      return;
    }
    let shippingCost;
    if (destination === 'turkey') {
      const weightCost = weight * 2.5;
      const volumeCost = cbm * 80 * 8;
      shippingCost = Math.max(weightCost, volumeCost);
      setCost(shippingCost.toFixed(2));

    }
    let aircost;
    if (destination === 'turkey') {
      aircost = weight * 2.9;
      setCost(aircost.toFixed(2));

    } else if (destination === 'dubai') {
      aircost = weight * 6;
      setCost(aircost.toFixed(2));

    }

  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container mx-auto px-5">
        <div className="widget-grid">

          <motion.div className="glass-card p-8" {...fadeInUp} transition={{ delay: 0.2 }} id="calculator">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
              <Calculator className="text-accent-blue" size={20} /> حساب تكلفة الشحن
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">الوجهة</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-2 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
              >
                <option value="turkey">تركيا</option>
                <option value="dubai">دبي</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">النوع</label>
              <select
                value={shippingtype}
                onChange={(e) => setShippingtype(e.target.value)}
                className="w-full p-2 border border-slate-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-accent-blue"
              >
                <option value="air">جوي</option>
                <option value="sea">بحري</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">الوزن (كغ)</label>
              <input
                type="number"
                value={kg}
                onChange={(e) => setKg(e.target.value)}
                className="w-full p-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                placeholder="أدخل الوزن بالكيلوغرام"
              />
            </div>
            {destination !== 'dubai' && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">الأبعاد (سم)</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="flex-1 p-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="الطول"
                  />
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="flex-1 p-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="العرض"
                  />
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="flex-1 p-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue"
                    placeholder="الارتفاع"
                  />
                </div>
              </div>
            )}

            <button
              onClick={calculateCost}
              className="btn btn-primary w-full mt-4"
            >
              احسب التكلفة
            </button>
            {cost && (
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold">تكلفة الشحن: {cost} دينار ليبي</p>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Widgets;
