import { motion } from "framer-motion";

export default function MazExpressLogo({
  size = 60,
  animate = false,
  className = "",
}) {
  const PRIMARY = "#2BB7DA";
  const ACCENT = "#0B3C6D";

  const vh = size;
  const vw = (size * 320) / 100;

  const fade = (delay = 0) =>
    animate
      ? {
          initial: { opacity: 0, y: 6 },
          animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay },
          },
        }
      : {};

  const drawPath = (delay = 0) =>
    animate
      ? {
          initial: { pathLength: 0, opacity: 0 },
          animate: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 1, delay, ease: "easeInOut" },
              opacity: { duration: 0.3, delay },
            },
          },
        }
      : {};

  return (
    <svg
      width={vw}
      height={vh}
      viewBox="0 0 320 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="MAZ Express"
      style={{ direction: 'ltr' }}
    >
      {/* MAZ */}
      <motion.text
        x="10"
        y="60"
        fontSize="60"
        fontWeight="900"
        fill={PRIMARY}
        fontFamily="'Arial Black', sans-serif"
        letterSpacing="-2"
        {...fade(0)}
      >
        MAZ
      </motion.text>

      {/* Plane + Trail */}
      <motion.g
        {...(animate
          ? {
              initial: { opacity: 0, scale: 0.9 },
              animate: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.3 },
              },
            }
          : {})}
      >
        {/* Plane */}
        <motion.path
          d="M215 18 L285 0 L255 35 L270 40 L240 42 L225 65 Z"
          fill={PRIMARY}
          {...fade(0.4)}
        />

        {/* Trail */}
        <motion.path
          d="M255 35 C310 65, 280 95, 170 85"
          stroke={PRIMARY}
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          {...drawPath(0.6)}
        />
      </motion.g>

      {/* express */}
      <motion.text
        x="12"
        y="90"
        fontSize="32"
        fontWeight="500"
        fill={ACCENT}
        fontFamily="Arial, sans-serif"
        letterSpacing="1"
        {...fade(0.8)}
      >
        express
      </motion.text>
    </svg>
  );
}