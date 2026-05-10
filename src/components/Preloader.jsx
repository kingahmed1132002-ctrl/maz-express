import { motion, AnimatePresence } from "framer-motion";
import MazLogo from "./MazLogo";

/**
 * Preloader — shown on first paint, fades out after ~2.4 s.
 * Props:
 *   show  — boolean from App.jsx state
 */
export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          {/* Soft ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 50% 45%, rgba(23,169,255,0.10) 0%, transparent 80%)",
            }}
          />

          {/* Logo draw-on */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            <MazLogo size={80} animate={true} />
          </motion.div>

          {/* Shimmer progress bar */}
          <div className="mt-10 w-40 h-[3px] rounded-full bg-slate-100 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #17a9ff, #2563eb, #17a9ff)",
                backgroundSize: "200% 100%",
              }}
              initial={{ width: "0%", backgroundPosition: "100% 0" }}
              animate={{ width: "100%", backgroundPosition: "0% 0" }}
              transition={{ duration: 1.9, ease: "easeInOut" }}
            />
          </div>

          {/* Small dots pulsing */}
          <div className="flex gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#17a9ff" }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.22,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
