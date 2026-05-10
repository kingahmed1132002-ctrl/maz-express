import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useId, useRef } from "react";
import useCompactViewport from "../useCompactViewport";

/*
  Six visually distinct wave shapes.
  Each entry has:
    fill   — closed path that fills the "to" section colour
    top    — upper stroke line (primary accent)
    btm    — lower stroke line (secondary echo), null = skip
*/
const SHAPES = {
  // 0 — Gentle S-wave (smooth, organic)
  0: {
    vb: "0 0 1440 150",
    fill: "M-80,0 C80,54 300,58 560,32 C780,8 980,4 1200,28 C1320,44 1400,50 1520,38 L1520,150 L-80,150 Z",
    top:  "M-80,-6 C80,48 300,52 560,26 C780,2 980,-2 1200,22 C1320,38 1400,44 1520,32",
    btm:  "M-80,10 C80,64 300,66 560,42 C780,20 980,16 1200,38 C1320,52 1400,58 1520,46",
  },
  // 1 — Sharp diagonal slash (bold, dynamic)
  1: {
    vb: "0 0 1440 120",
    fill: "M-80,0 L1520,100 L1520,120 L-80,120 Z",
    top:  "M-80,-3 L1520,97",
    btm:  "M-80,14 L1520,114",
  },
  // 2 — Double peak / mountain ridge (energetic)
  2: {
    vb: "0 0 1440 160",
    fill: "M-80,100 C200,-10 450,130 720,50 C990,-30 1250,120 1520,40 L1520,160 L-80,160 Z",
    top:  "M-80,100 C200,-10 450,130 720,50 C990,-30 1250,120 1520,40",
    btm:  "M-80,112 C200,4 450,142 720,62 C990,-18 1250,132 1520,52",
  },
  // 3 — Reversed gentle wave (flipped polarity)
  3: {
    vb: "0 0 1440 150",
    fill: "M-80,80 C200,20 500,110 800,60 C1100,10 1300,80 1520,40 L1520,150 L-80,150 Z",
    top:  "M-80,80 C200,20 500,110 800,60 C1100,10 1300,80 1520,40",
    btm:  "M-80,92 C200,32 500,122 800,72 C1100,22 1300,92 1520,52",
  },
  // 4 — Cliff-to-flat (asymmetric, dramatic)
  4: {
    vb: "0 0 1440 160",
    fill: "M-80,0 C200,0 450,0 650,30 C850,60 1050,100 1250,120 C1380,132 1460,138 1520,140 L1520,160 L-80,160 Z",
    top:  "M-80,0 C200,0 450,0 650,30 C850,60 1050,100 1250,120 C1380,132 1460,138 1520,140",
    btm:  "M-80,14 C200,14 450,14 650,44 C850,74 1050,114 1250,134 C1380,144 1460,150 1520,152",
  },
  // 5 — Gentle low ripple (subtle, calm)
  5: {
    vb: "0 0 1440 130",
    fill: "M-80,70 C240,40 480,90 720,65 C960,40 1200,78 1520,55 L1520,130 L-80,130 Z",
    top:  "M-80,70 C240,40 480,90 720,65 C960,40 1200,78 1520,55",
    btm:  "M-80,82 C240,52 480,102 720,77 C960,52 1200,90 1520,67",
  },
};

export default function SectionConnector({
  from = "#ffffff",
  to = "#ffffff",
  accentColor = "#17a9ff",
  accentSecondary = "#2563eb",
  heightClass = "h-20 md:h-28",
  variant = 0,
}) {
  const shape = SHAPES[variant] ?? SHAPES[0];
  const ref = useRef(null);
  const gradId   = useId().replace(/:/g, "");
  const glowFilt = `${gradId}gf`;
  const reduceMotion = useReducedMotion();
  const isCompact    = useCompactViewport();
  const disabled     = reduceMotion || isCompact;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const focusRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const focus    = useSpring(focusRaw, { stiffness: 55, damping: 20, mass: 0.55 });

  const glowOpacity = useTransform(focus, [0, 1], [0.22, 0.65]);
  const topOpacity  = useTransform(focus, [0, 1], [0.50, 0.96]);
  const btmOpacity  = useTransform(focus, [0, 1], [0.20, 0.46]);
  const topWidth    = useTransform(focus, [0, 1], [2.0, 3.6]);
  const btmWidth    = useTransform(focus, [0, 1], [1.2, 2.2]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`relative -my-px w-full overflow-hidden ${heightClass}`}
      style={{ background: from }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={shape.vb}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="rgba(0,0,0,0)" />
            <stop offset="12%"  stopColor={accentSecondary} stopOpacity="0.5" />
            <stop offset="50%"  stopColor={accentColor} />
            <stop offset="88%"  stopColor={accentSecondary} stopOpacity="0.5" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
          <filter id={glowFilt} x="-15%" y="-300%" width="130%" height="700%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Solid fill — the colour transition */}
        <path d={shape.fill} fill={to} />

        {/* Glow halo */}
        {disabled ? (
          <path d={shape.top} fill="none" stroke={`url(#${gradId})`} strokeWidth="10" opacity="0.25" />
        ) : (
          <motion.path
            d={shape.top}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth={13}
            filter={`url(#${glowFilt})`}
            style={{ opacity: glowOpacity }}
          />
        )}

        {/* Primary wave stroke */}
        {disabled ? (
          <path d={shape.top} fill="none" stroke={`url(#${gradId})`} strokeWidth="2.6" strokeLinecap="round" opacity="0.80" />
        ) : (
          <motion.path
            d={shape.top}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeLinecap="round"
            style={{ opacity: topOpacity, strokeWidth: topWidth }}
          />
        )}

        {/* Secondary echo stroke */}
        {shape.btm && (
          disabled ? (
            <path d={shape.btm} fill="none" stroke={`url(#${gradId})`} strokeWidth="1.2" strokeLinecap="round" opacity="0.34" />
          ) : (
            <motion.path
              d={shape.btm}
              fill="none"
              stroke={`url(#${gradId})`}
              strokeLinecap="round"
              style={{ opacity: btmOpacity, strokeWidth: btmWidth }}
            />
          )
        )}
      </svg>
    </div>
  );
}
