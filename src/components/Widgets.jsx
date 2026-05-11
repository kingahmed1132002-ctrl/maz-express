import React, { useState } from 'react';
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

        result = Math.max(
          weight * 2.5,
          l * w * h * 80 * 8
        );
      }
    } else {
      result = weight * 6;
    }

    setCost(result.toFixed(2));
  };

  const destinations = [
    {
      value: 'turkey',
      flag: '🇹🇷',
      label: 'تركيا',
      hint: 'جوي أو بحري',
    },
    {
      value: 'dubai',
      flag: '🇦🇪',
      label: 'دبي',
      hint: 'جوي فقط',
    },
  ];

  const shippingOptions =
    destination === 'dubai'
      ? [{ value: 'air', Icon: Plane, label: 'جوي', color: '#2563EB' }]
      : [
        { value: 'air', Icon: Plane, label: 'جوي', color: '#2563EB' },
        { value: 'sea', Icon: Ship, label: 'بحري', color: '#0891B2' },
      ];

  const featurePills = [
    { Icon: Plane, label: 'جوي', color: '#2563EB' },
    { Icon: Ship, label: 'بحري', color: '#0891B2' },
    { Icon: ShieldCheck, label: 'آمن', color: '#16A34A' },
    { Icon: Zap, label: 'فوري', color: '#D97706' },
  ];

  const fieldLabelClass =
    'mb-2 flex items-center gap-2 text-[12px] font-extrabold text-navy';

  return (
    <section
      id="tracking"
      className="section-padding flex items-center justify-center rtl px-5"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-[520px] overflow-hidden rounded-[20px] border border-cyan/25 bg-white shadow-[0_24px_70px_rgba(11,60,109,0.10)]">
        <div className="h-2 bg-cyan" />

        <div className="border-b border-cyan/15 px-7 pb-6 pt-7">
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-cyan/35 bg-cyan/10 shadow-sm">
              <Calculator color="#36C6F4" size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="mb-1 text-[26px] font-black leading-tight text-navy">
                حساب التكلفة
              </h2>
              <p className="text-sm font-semibold leading-relaxed text-text-secondary">
                تقدير فوري لأسعار شحنتك
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {featurePills.map(({ Icon, label, color }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-xs font-extrabold text-navy"
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-md"
                  style={{
                    backgroundColor: `${color}18`,
                    color,
                  }}
                >
                  <Icon size={13} strokeWidth={2.5} />
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="p-7">
          <div className="mb-5">
            <div className={fieldLabelClass}>
              <MapPin color="#36C6F4" size={16} strokeWidth={2.4} />
              الوجهة
            </div>

            <div className="grid grid-cols-2 gap-3">
              {destinations.map((item) => {
                const active =
                  destination === item.value;

                return (
                  <button
                    key={item.value}
                    onClick={() => {
                      setDestination(item.value);
                      if (item.value === 'dubai') {
                        setShippingtype('air');
                      }
                      setCost(null);
                    }}
                    aria-pressed={active}
                    className={`
                      flex min-h-[96px] flex-col items-center justify-center gap-1 rounded-xl border px-4 py-4 text-center transition-all duration-200
                      ${active
                        ? 'border-cyan bg-cyan text-navy shadow-lg shadow-cyan/25'
                        : 'border-cyan/20 bg-white text-text-secondary hover:border-cyan/45 hover:bg-cyan/10'
                      }
                    `}
                  >
                    <span className="text-[26px] leading-none">
                      {item.flag}
                    </span>
                    <span className="text-sm font-black">
                      {item.label}
                    </span>
                    <span className={active ? 'text-xs font-bold text-navy/70' : 'text-xs font-bold text-text-secondary/55'}>
                      {item.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-5">
            <div className={fieldLabelClass}>
              <Truck color="#2563EB" size={16} strokeWidth={2.4} />
              نوع الشحن
            </div>

            <div
              className={`
                grid gap-2 rounded-xl border border-cyan/20 bg-bg-light p-1.5
                ${shippingOptions.length === 1
                  ? 'grid-cols-1'
                  : 'grid-cols-2'
                }
              `}
            >
              {shippingOptions.map(({ value, Icon, label, color }) => {
                const active =
                  shippingtype === value;

                return (
                  <button
                    key={value}
                    onClick={() => {
                      setShippingtype(value);
                      setCost(null);
                    }}
                    aria-pressed={active}
                    className={`
                      flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-extrabold transition-all duration-200
                      ${active
                        ? 'bg-cyan text-navy shadow-md shadow-cyan/25'
                        : 'text-text-secondary hover:bg-white hover:text-navy'
                      }
                    `}
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/70"
                      style={{ color }}
                    >
                      <Icon size={17} strokeWidth={2.5} />
                    </span>
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-5">
            <div className={fieldLabelClass}>
              <Scale color="#16A34A" size={16} strokeWidth={2.4} />
              الوزن (كيلوغرام)
            </div>

            <input
              type="number"
              value={kg}
              onChange={(e) =>
                setKg(e.target.value)
              }
              placeholder="أدخل الوزن"
              min="0"
              step="0.1"
              className="w-full rounded-xl border border-cyan/20 bg-white px-4 py-3.5 text-base font-bold text-navy outline-none transition-all placeholder:text-text-secondary/45 focus:border-cyan focus:bg-white focus:ring-4 focus:ring-cyan/15"
            />
          </div>

          {showDims && (
            <div className="mb-5">
              <div className={fieldLabelClass}>
                <Ruler color="#D97706" size={16} strokeWidth={2.4} />
                الأبعاد (سم)
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  [
                    'length',
                    length,
                    setLength,
                    'الطول',
                  ],
                  [
                    'width',
                    width,
                    setWidth,
                    'العرض',
                  ],
                  [
                    'height',
                    height,
                    setHeight,
                    'الارتفاع',
                  ],
                ].map(
                  ([id, value, setter, label]) => (
                    <div
                      key={id}
                      className="relative"
                    >
                      <input
                        type="number"
                        value={value}
                        onChange={(e) =>
                          setter(e.target.value)
                        }
                        placeholder="0"
                        min="0"
                        className="w-full rounded-xl border border-cyan/20 bg-white px-2 pb-6 pt-3 text-center text-sm font-bold text-navy outline-none transition-all placeholder:text-text-secondary/35 focus:border-cyan focus:ring-4 focus:ring-cyan/15"
                      />

                      <div className="pointer-events-none absolute bottom-2 left-0 right-0 text-center text-[10px] font-extrabold text-text-secondary/60">
                        {label}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          <button
            onClick={calculateCost}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-5 py-4 text-base font-black text-navy shadow-lg shadow-cyan/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan/30 active:translate-y-0"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/55 text-navy">
              <Calculator size={18} strokeWidth={2.6} />
            </span>
            احسب التكلفة
          </button>

          {cost && (
            <div className="mt-5 flex items-center gap-4 rounded-xl border border-cyan/35 bg-cyan/10 px-5 py-5 shadow-lg shadow-cyan/10">

              <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-xl bg-white text-[#16A34A] shadow-md shadow-cyan/20">
                <CheckCircle2 size={28} strokeWidth={2.4} />
              </div>

              <div>
                <div className="mb-1 text-[12px] font-extrabold text-navy">
                  تكلفة الشحن التقديرية
                </div>

                <div className="text-[30px] font-black leading-none text-navy">
                  {cost}{' '}
                  <span className="text-sm font-bold text-text-secondary">
                    دينار ليبي
                  </span>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Widgets;
