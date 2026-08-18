import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import MazLogo from './MazLogo';
import { useLang } from '../LanguageContext';

const Footer = ({ bgColor = '#f1f5f9' }) => {
  const { t, lang } = useLang();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: bgColor, padding: '80px 0 32px' }}
    >
      {/* Subtle glow orbs on light bg */}
      <div className={`absolute top-0 ${lang === 'ar' ? 'right-1/4' : 'left-1/4'} w-96 h-96 rounded-full pointer-events-none bg-cyan/10 blur-3xl`} />
      <div className={`absolute bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-[500px] h-[500px] rounded-full pointer-events-none bg-cyan/5 blur-3xl`} />

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

          {/* Brand */}
          <div style={{ maxWidth: 360 }}>
            <div className="mb-6">
              <MazLogo size={38} animate={false} />
            </div>
            <p className="leading-relaxed mb-8 text-base text-text-secondary">
              {t.footer_desc}
            </p>
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="https://www.facebook.com/mazexpress" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/20 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/maz.express/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-[#E4405F]/10 text-[#E4405F] border border-[#E4405F]/20 hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/905373431357" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                 className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-navy">{t.footer_find_us}</h3>
            <div className="space-y-5">
              {[
                { icon: <MapPin size={18} />, text: t.footer_address },
                { icon: <Phone    size={18} />, text: '091-0556222', dir: 'ltr' },
                { icon: <Phone    size={18} />, text: '+218 94-7612222', dir: 'ltr' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>, text: '+90 537 343 13 57', dir: 'ltr' },
                { icon: <Mail     size={18} />, text: 'info@mazexpress.com.ly', dir: 'ltr' },
              ].map(({ icon, text, dir }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-navy text-white shadow-md transition-transform hover:scale-105">
                    {icon}
                  </div>
                  <span className="mt-2 text-sm text-text-secondary" style={{ direction: dir || t.dir }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-navy">{t.footer_quick_links}</h3>
            <ul className="space-y-3 list-none p-0">
              {[
                { label: t.footer_link_services,         href: '#services' },
                { label: t.footer_link_how,  href: '#how-it-works' },
                { label: t.footer_link_track,       href: '#tracking' },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm transition-colors duration-200 no-underline text-text-secondary hover:text-cyan"
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(54,198,244,0.5)' }} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-cyan/20 ${lang === 'ar' ? '' : 'md:flex-row-reverse'}`}>
          <div className="text-sm text-text-secondary">
            {t.footer_rights}
          </div>
          <div className="text-sm text-text-secondary/70">
            {t.footer_made_with}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
