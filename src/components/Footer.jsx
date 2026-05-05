import React from 'react';
import { Plane, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer" style={{ backgroundColor: '#f0f8ff', padding: '40px 0', color: '#333', textAlign: 'right' }}>
      <div className="container">
        <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="footer-info" style={{ maxWidth: '400px' }}>
            <div className="logo mb-20" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" alt="ماز إكسبرس" style={{ width: '40px', height: '40px' }} />
              <span style={{ marginLeft: '10px', fontSize: '24px', fontWeight: 'bold', color: '#00aaff' }}>ماز إكسبرس</span>
            </div>
            <p>نوفر حلول نقل سلسة وموثوقة لتلبية جميع احتياجات الشحن الخاصة بك. شريكك الموثوق في اللوجستيات.</p>
            <div className="social-links" style={{ display: 'flex', marginTop: '15px' }}>
              {/* Facebook SVG */}
              <a href="#" aria-label="Facebook" style={{ marginRight: '10px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00aaff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Instagram SVG */}
              <a href="#" aria-label="Instagram" style={{ marginRight: '10px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00aaff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* WhatsApp SVG */}
              <a href="#" aria-label="WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00aaff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3.5Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links" style={{ textAlign: 'right' }}>
            <h3 style={{ color: '#00aaff' }}>أين تجدنا؟</h3>
            <p style={{ display: 'flex', alignItems: 'center' }}><MapPin size={18} className="accent-color" /> شارع الأندلس، أراضي بن علي، بنغازي، ليبيا</p>
            <p style={{ display: 'flex', alignItems: 'center' }}><Phone size={18} className="accent-color" /> +218 91-0556222</p>
            <p style={{ display: 'flex', alignItems: 'center' }}><Mail size={18} className="accent-color" /> info@mazexpress.com.ly</p>
          </div>
          <div className="footer-links" style={{ textAlign: 'right' }}>
            <h3 style={{ color: '#00aaff' }}>روابط سريعة</h3>
            <ul className="list-none">
              <li><a href="#">سياسة الخصوصية</a></li>
              <li><a href="#">شروط الخدمة</a></li>
              <li><a href="#">mazexpress.com.ly</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright" style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '10px', textAlign: 'center' }}>
          <p>جميع الحقوق محفوظة © 2024-2025 ماز إكسبرس.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
