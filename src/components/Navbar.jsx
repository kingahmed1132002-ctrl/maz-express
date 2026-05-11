import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MazLogo from './MazLogo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { text: 'الخدمات', href: '#services' },
    { text: 'المسارات', href: '#how-it-works' },
    { text: 'التتبع', href: '#tracking' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[990] flex justify-center px-5 py-5 transition-all duration-500 ease-out"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 990 }}
      >
        <motion.div
          animate={{
            maxWidth: scrolled ? '900px' : '1150px',
            height: scrolled ? '64px' : '68px',
            borderRadius: scrolled ? '50px' : '0px'
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`w-full flex items-center justify-between px-8 transition-all duration-500 ease-out ${
            scrolled
              ? 'bg-white/90 backdrop-blur-xl saturate-180 border border-cyan/20 shadow-2xl shadow-cyan/10'
              : 'bg-transparent border-transparent'
          }`}
        >

          {/* Logo Section */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
          >
            <MazLogo
              size={scrolled ? 36 : 44}
              animate={false}
              className="transition-all duration-400"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item.text}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative no-underline text-sm font-semibold opacity-90 transition-all duration-300 ease-out hover:opacity-100 group ${
                  scrolled ? 'text-navy hover:text-cyan' : 'text-white hover:text-cyan'
                }`}
              >
                {item.text}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-cyan`}></span>
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors duration-200 ${
                scrolled ? 'bg-cyan/10 text-navy hover:bg-cyan/20' : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>

            {/* CTA Button */}
            <motion.a
              href="https://maz-express-admin-dashboard.vercel.app/login"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -12px rgba(54, 198, 244, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex bg-cyan text-navy px-6 py-3 rounded-xl text-sm font-bold no-underline items-center gap-3 shadow-lg shadow-cyan/25 transition-all duration-300 hover:bg-cyan hover:shadow-xl hover:shadow-cyan/30"
            >
              <span>بوابة العملاء</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </motion.a>
          </div>

        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-navy">القائمة</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-navy hover:bg-cyan/10 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.text}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-3 px-4 text-navy/80 hover:text-cyan hover:bg-cyan/10 rounded-lg transition-all duration-200 font-medium"
                    >
                      {item.text}
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="https://maz-express-admin-dashboard.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-8 w-full bg-cyan text-navy py-4 px-6 rounded-xl font-bold text-center block shadow-lg shadow-cyan/25 hover:bg-cyan hover:shadow-xl hover:shadow-cyan/30 transition-all duration-300"
                >
                  بوابة العملاء
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
