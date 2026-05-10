import React from 'react';
import { MapPin, Phone, Mail, ArrowUpLeft } from 'lucide-react';
import MazLogo from './MazLogo';

const Footer = ({ bgColor }) => (
  <footer
    id="contact"
    className="relative overflow-hidden"
    style={{ backgroundColor: '#0B3C6D', padding: '80px 0 32px' }}
  >
    {/* Subtle glow orbs on dark bg */}
    <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
         style={{ background: 'radial-gradient(circle, rgba(43,183,218,0.08) 0%, transparent 70%)' }} />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
         style={{ background: 'radial-gradient(circle, rgba(43,183,218,0.05) 0%, transparent 70%)' }} />

    <div className="container mx-auto px-5 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

        {/* Brand */}
        <div style={{ maxWidth: 360 }}>
          <div className="mb-6">
            <MazLogo size={38} animate={false} />
          </div>
          <p className="leading-relaxed mb-8 text-base" style={{ color: 'rgba(255,255,255,0.6)' }}>
            نوفر حلول شحن سلسة وموثوقة من تركيا والإمارات إلى ليبيا. شريكك الموثوق في اللوجستيات الدولية.
          </p>
          <div className="flex gap-3">
            {/* Facebook */}
            <a href="#" aria-label="Facebook"
               className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
               style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
               onMouseEnter={e => { e.currentTarget.style.background='#2BB7DA'; e.currentTarget.style.border='1px solid #2BB7DA'; }}
               onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.border='1px solid rgba(255,255,255,0.12)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)" stroke="none">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram"
               className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
               style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
               onMouseEnter={e => { e.currentTarget.style.background='#2BB7DA'; e.currentTarget.style.border='1px solid #2BB7DA'; }}
               onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.border='1px solid rgba(255,255,255,0.12)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp"
               className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
               style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
               onMouseEnter={e => { e.currentTarget.style.background='#2BB7DA'; e.currentTarget.style.border='1px solid #2BB7DA'; }}
               onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.border='1px solid rgba(255,255,255,0.12)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3.5Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-base font-bold mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>أين تجدنا؟</h3>
          <div className="space-y-5">
            {[
              { icon: <MapPin size={18} />, text: 'شارع الأندلس، أراضي بن علي، بنغازي، ليبيا' },
              { icon: <Phone    size={18} />, text: '+218 91-0556222', dir: 'ltr' },
              { icon: <Mail     size={18} />, text: 'info@mazexpress.com.ly' },
            ].map(({ icon, text, dir }, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                     style={{ background: 'rgba(43,183,218,0.15)', color: '#2BB7DA' }}>
                  {icon}
                </div>
                <span className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)', direction: dir || 'rtl' }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-base font-bold mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>روابط سريعة</h3>
          <ul className="space-y-3 list-none p-0">
            {[
              { label: 'خدماتنا',         href: '#services' },
              { label: 'كيف يعمل ماز؟',  href: '#how-it-works' },
              { label: 'تتبع شحنة',       href: '#tracking' },
              { label: 'سياسة الخصوصية', href: '#' },
              { label: 'شروط الخدمة',    href: '#' },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm transition-colors duration-200 no-underline"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#2BB7DA'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(43,183,218,0.5)' }} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
           style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          © 2024–2025 <span style={{ color: '#2BB7DA', fontWeight: 600 }}>ماز إكسبرس</span> — جميع الحقوق محفوظة
        </div>
        <div className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
          صنع بكل شغف لخدمتكم
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
