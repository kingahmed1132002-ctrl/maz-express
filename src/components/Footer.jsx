import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import MazLogo from './MazLogo';

const Footer = ({ bgColor = '#f1f5f9' }) => (
  <footer
    id="contact"
    className="relative overflow-hidden"
    style={{
      backgroundColor: bgColor,
      padding: '80px 0 30px',
    }}
  >
    {/* Decorative background elements */}
    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-5 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

        {/* Brand */}
        <div style={{ maxWidth: '380px' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center">
              <MazLogo size={42} animate={false} />
            </div>
          </div>
          <p className="text-slate-500 leading-relaxed mb-8 text-base">
            نوفر حلول نقل سلسة وموثوقة لتلبية جميع احتياجات الشحن الخاصة بك. شريكك الموثوق في اللوجستيات.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-accent-blue hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-slate-400 group-hover:text-white transition-colors">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="#"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-green-500 hover:text-white hover:border-transparent hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400 group-hover:text-white transition-colors">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6">أين تجدنا؟</h3>
          <div className="space-y-6">
            {[
              { icon: <MapPin size={20} className="text-accent-blue" />, text: 'شارع الأندلس، أراضي بن علي، بنغازي، ليبيا' },
              { icon: <Phone    size={20} className="text-accent-blue" />, text: '+218 91-0556222', dir: 'ltr' },
              { icon: <Mail     size={20} className="text-accent-blue" />, text: 'info@mazexpress.com.ly' },
            ].map(({ icon, text, dir }, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(icon, { className: "transition-colors duration-300 group-hover:text-white text-accent-blue" })}
                </div>
                <span className="text-slate-600 mt-2 font-medium" style={dir ? { direction: dir, unicodeBidi: 'embed' } : {}}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6">روابط سريعة</h3>
          <ul className="space-y-4 list-none p-0">
            {['سياسة الخصوصية', 'شروط الخدمة', 'mazexpress.com.ly'].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-accent-blue transition-colors no-underline group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-accent-blue transition-colors"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 border-t border-slate-200/60 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm font-semibold text-slate-500">
          جميع الحقوق محفوظة © 2024-2025 <span className="text-accent-blue">ماز إكسبرس</span>.
        </div>
        <div className="text-sm font-medium text-slate-400">
          صنع بكل شغف لخدمتكم
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
