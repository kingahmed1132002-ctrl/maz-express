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
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-white px-5 sm:px-8"
          initial={{ scaleY: 1, transformOrigin: "top" }}
          animate={{ scaleY: 1, transformOrigin: "top" }}
          exit={{ 
            scaleY: 0,
            transformOrigin: "top",
            transition: { 
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1
            } 
          }}
          style={{ willChange: "transform" }}
        >
          {/* Soft ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "rgba(54,198,244,0.04)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex w-full max-w-[24rem] flex-col items-center text-center relative z-10"
          >
            {/* Logo */}
            <MazLogo size={80} animate={true} />

            {/* Loading line */}
            <div className="mt-16 flex w-full max-w-72 flex-col items-center gap-4 sm:mt-20 md:mt-24">
              <span className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.55em] text-[#36C6F4] sm:text-sm sm:tracking-[0.8em]">
                Loading
              </span>
              <div className="relative h-[1px] w-full overflow-hidden bg-[#36C6F4]/20">
                <motion.div 
                  className="absolute h-full bg-[#36C6F4] w-full"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, 
                    ease: "easeInOut" 
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
