import React, { useState } from 'react';

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
    },
    {
      value: 'dubai',
      flag: '🇦🇪',
      label: 'دبي',
    },
  ];

  const shippingOptions =
    destination === 'dubai'
      ? [['air', '✈️', 'جوي']]
      : [
        ['air', '✈️', 'جوي'],
        ['sea', '🚢', 'بحري'],
      ];

  return (
    <section
      className="section-padding flex items-center justify-center rtl"
      style={{ backgroundColor: bgColor }}
    >

      <div className="w-full max-w-[480px] overflow-hidden rounded-[32px] border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_32px_80px_rgba(14,165,233,0.15),0_8px_32px_rgba(14,165,233,0.1)] transition-transform duration-500 hover:shadow-[0_40px_100px_rgba(14,165,233,0.2)]">

        {/* Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0b2d6b] via-accent-blue to-cyan-500 px-8 pt-10 pb-8">

          <div className="absolute -left-12 -top-12 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-white/0 to-white/20 blur-2xl" />
          <div className="absolute -bottom-14 -right-8 h-[160px] w-[160px] rounded-full bg-gradient-to-br from-white/20 to-white/0 blur-xl" />
          <div className="absolute right-20 top-3 h-20 w-20 rounded-full bg-white/10 blur-lg" />

          <div className="relative z-10 mb-6 flex items-center gap-5">
            <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md text-[30px] shadow-lg shadow-black/10">
              🧮
            </div>

            <div>
              <h1 className="mb-1.5 text-[24px] font-black text-white tracking-wide">
                حساب التكلفة
              </h1>
              <p className="text-sm font-medium text-white/80">
                تقدير فوري لأسعار شحنتك
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-wrap gap-2.5 mt-2">
            {[
              ['✈️', 'جوي'],
              ['🚢', 'بحري'],
              ['🛡️', 'آمن 100%'],
              ['⚡', 'فوري'],
            ].map(([icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md shadow-sm"
              >
                <span>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-7 pb-8">

          {/* Destination */}
          <div className="mb-5">

            <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-700">
              <span>📍</span>
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
                    className={`
                      flex flex-col items-center gap-2 rounded-2xl border px-4 py-4 transition-all duration-200
                      ${active
                        ? 'border-sky-500 bg-gradient-to-br from-sky-100 to-sky-50 shadow-lg shadow-sky-200/50'
                        : 'border-sky-100 bg-slate-50'
                      }
                    `}
                  >
                    <span className="text-[28px]">
                      {item.flag}
                    </span>

                    <span
                      className={`
                        text-sm font-bold
                        ${active
                          ? 'text-sky-600'
                          : 'text-sky-300'
                        }
                      `}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Shipping Type */}
          <div className="mb-5">

            <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-700">
              <span>🚚</span>
              نوع الشحن
            </div>

            <div
              className={`
                grid gap-1 rounded-2xl border border-sky-100 bg-slate-50 p-1
                ${shippingOptions.length === 1
                  ? 'grid-cols-1'
                  : 'grid-cols-2'
                }
              `}
            >
              {shippingOptions.map(
                ([val, icon, label]) => {
                  const active =
                    shippingtype === val;

                  return (
                    <button
                      key={val}
                      onClick={() => {
                        setShippingtype(val);
                        setCost(null);
                      }}
                      className={`
                        flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200
                        ${active
                          ? 'bg-gradient-to-r from-sky-500 to-cyan-600 text-white shadow-lg shadow-sky-300/40'
                          : 'text-sky-300 hover:bg-sky-50'
                        }
                      `}
                    >
                      <span className="text-lg">
                        {icon}
                      </span>

                      {label}
                    </button>
                  );
                }
              )}
            </div>


          </div>

          <div className="mb-5 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

          {/* Weight */}
          <div className="mb-5">

            <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-700">
              <span>⚖️</span>
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
              className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-4 py-3 text-sm text-sky-900 outline-none transition-all focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            />
          </div>

          {/* Dimensions */}
          {showDims && (
            <div className="mb-5">

              <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-700">
                <span>📐</span>
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
                        min="0"
                        className="w-full rounded-2xl border border-sky-100 bg-slate-50 px-2 pb-6 pt-3 text-center text-sm text-sky-900 outline-none transition-all focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                      />

                      <div className="pointer-events-none absolute bottom-2 left-0 right-0 text-center text-[10px] font-bold text-sky-300">
                        {label}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Calculate Button */}
          <button
            onClick={calculateCost}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-600 px-5 py-4 text-base font-extrabold text-white shadow-xl shadow-sky-300/40 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
          >
            <span className="text-xl">🧮</span>
            احسب التكلفة
          </button>

          {/* Result */}
          {cost && (
            <div className="mt-5 flex items-center gap-4 rounded-[20px] border border-sky-300 bg-gradient-to-br from-sky-50 to-cyan-50 px-5 py-5 shadow-lg shadow-sky-100/60">

              <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 text-[26px] text-white shadow-lg shadow-sky-300/40">
                ✅
              </div>

              <div>
                <div className="mb-1 text-[11px] font-bold tracking-wider text-sky-700">
                  تكلفة الشحن التقديرية
                </div>

                <div className="text-[28px] font-black leading-none text-sky-950">
                  {cost}{' '}
                  <span className="text-sm font-semibold text-sky-700">
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