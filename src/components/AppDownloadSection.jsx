import React from 'react';
import { ArrowUpRight, BellRing, Check, PackageCheck, Smartphone, Wallet } from 'lucide-react';
import { useLang } from '../LanguageContext';
import './AppDownloadSection.css';

const APP_STORE_URL = 'https://apps.apple.com/us/app/mazexpress/id6747578699';
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.mazexpress';

const copy = {
  ar: {
    eyebrow: 'تطبيق ماز إكسبرس', title: 'شحناتك معاك.', accent: 'وين ما تمشي.',
    description: 'من أول طلب لحد باب بيتك، خلّي كل تفاصيل شحناتك بين يديك. حمّل تطبيق ماز وتابع شحنك بكل راحة، من مكان واحد.',
    features: ['شحن دولي ومحلي', 'متابعة شحناتك', 'محفظتك وفواتيرك'],
    download: 'حمّله الآن من', scan: 'امسح الكود', scanHint: 'وحمّل التطبيق على iPhone',
    note: 'متوفر الآن على iPhone وAndroid',
    tracking: 'كل خطوة، توصلك', trackingHint: 'تابع مستجدات شحنتك',
    together: 'من العالم لبابك', togetherHint: 'رحلة شحنك في تطبيق',
    alt: 'واجهة تطبيق ماز إكسبرس للشحن الدولي والمحلي وإدارة المحفظة',
    appleLabel: 'تحميل ماز إكسبرس من App Store', androidLabel: 'تحميل ماز إكسبرس من Google Play',
  },
  en: {
    eyebrow: 'THE MAZ EXPRESS APP', title: 'Your shipments.', accent: 'Always with you.',
    description: 'From your first order to your doorstep, keep every shipping detail at your fingertips. Download Maz and manage it all in one place.',
    features: ['Global & local shipping', 'Shipment tracking', 'Wallet & invoices'],
    download: 'Download on the', scan: 'Scan to download', scanHint: 'Get the app on your iPhone',
    note: 'Now available on iPhone and Android',
    tracking: 'Every step, in sight', trackingHint: 'Keep up with your shipment',
    together: 'The world to your door', togetherHint: 'Your shipping journey, in one app',
    alt: 'Maz Express app showing international and local shipping and wallet management',
    appleLabel: 'Download Maz Express on the App Store', androidLabel: 'Download Maz Express on Google Play',
  },
};

function AppleIcon() {
  return <svg width="29" height="34" viewBox="0 0 24 28" fill="currentColor" aria-hidden="true"><path d="M19.3 14.7c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.7 1.1-4.7 1.1-1 0-2.5-1.1-4.1-1-2.1 0-4 1.2-5.1 3-2.2 3.8-.6 9.5 1.5 12.6 1.1 1.5 2.3 3.2 3.9 3.1 1.6-.1 2.2-1 4.2-1 1.9 0 2.5 1 4.2 1 1.8 0 2.8-1.5 3.8-3 1.2-1.7 1.7-3.4 1.7-3.5-.1 0-3.6-1.4-3.6-5.3ZM16.1 5.6c.9-1.1 1.6-2.6 1.4-4.1-1.3.1-2.9.9-3.8 1.9-.9 1-1.7 2.5-1.5 4 1.5.1 3-.7 3.9-1.8Z" /></svg>;
}

function PlayIcon() {
  return <svg width="28" height="31" viewBox="0 0 28 31" fill="none" aria-hidden="true"><path d="M3 2 18 16 3 29V2Z" fill="#73D8F7"/><path d="m3 2 18 10-3 4L3 2Z" fill="#8EE8C0"/><path d="m18 16 3 3L3 29l15-13Z" fill="#F49CAB"/><path d="m21 12 5 3c1 .5 1 1.5 0 2l-5 2-3-3 3-4Z" fill="#F8D78C"/></svg>;
}

export default function AppDownloadSection() {
  const { lang } = useLang();
  const text = copy[lang];
  const icons = [PackageCheck, BellRing, Wallet];

  return (
    <section id="app" className="maz-app-section" aria-labelledby="maz-app-title" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="maz-app-panel">
        <div className="maz-app-copy">
          <span className="maz-app-eyebrow"><Smartphone size={17} aria-hidden="true" />{text.eyebrow}</span>
          <h2 id="maz-app-title">{text.title}<br /><span>{text.accent}</span></h2>
          <p className="maz-app-description">{text.description}</p>
          <ul className="maz-app-features">
            {text.features.map((feature, index) => {
              const Icon = icons[index];
              return <li key={feature}><Icon size={20} aria-hidden="true" /><span>{feature}</span></li>;
            })}
          </ul>
          <div className="maz-app-stores">
            <a className="maz-store maz-store-download" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={text.appleLabel}>
              <AppleIcon /><span><small>{text.download}</small><strong>App Store</strong></span><ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="maz-store maz-store-download" href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label={text.androidLabel}>
              <PlayIcon /><span><small>{text.download}</small><strong>Google Play</strong></span><ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="maz-app-note"><Check size={15} aria-hidden="true" />{text.note}</p>
          <a className="maz-app-qr" href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label={text.appleLabel}>
            <img src="/images/maz-app-qr.svg" width="76" height="76" alt="" loading="lazy" />
            <span><strong>{text.scan}</strong><small>{text.scanHint}</small></span>
          </a>
        </div>
        <div className="maz-app-visual">
          <div className="maz-app-orbit maz-app-orbit-outer" aria-hidden="true" />
          <div className="maz-app-orbit maz-app-orbit-inner" aria-hidden="true" />
          <img className="maz-app-phone" src="/images/maz-app-phone.png" alt={text.alt} width="2222" height="2703" loading="lazy" decoding="async" />
          <div className="maz-app-float maz-app-float-tracking" aria-hidden="true"><span className="maz-app-float-icon"><PackageCheck size={23} /></span><span><strong>{text.tracking}</strong><small>{text.trackingHint}</small></span><span className="maz-app-status" /></div>
          <div className="maz-app-float maz-app-float-world" aria-hidden="true"><span className="maz-app-float-icon"><Check size={22} /></span><span><strong>{text.together}</strong><small>{text.togetherHint}</small></span></div>
        </div>
      </div>
    </section>
  );
}
