import React, { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const translations = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    // Navbar
    nav_services: 'الخدمات',
    nav_routes: 'آلية العمل',
    nav_tracking: 'التتبع',
    nav_portal: 'بوابة العملاء',
    nav_menu: 'القائمة',
    nav_lang_switch: 'EN',

    // Hero
    hero_headline_1: 'شحن',
    hero_headline_2: 'دولي ومحلي',
    hero_mode_air: 'جوي',
    hero_mode_sea: 'بحري',
    hero_mode_land: 'أرضي',
    hero_desc: 'نوفروا حلول شحن متكاملة أرضاً وبحراً وجواً — بدقة في المواعيد، وأمان في التوصيل، واحترافية في كل خطوة. شريككم الموثوق في الشحن الدولي من وإلى جميع أنحاء العالم.',
    hero_panel_label: 'تتبعوا شحنتكم',
    hero_panel_title: 'دعم فني واحترافي على مدار الساعة',
    hero_panel_desc: 'فريقنا المتخصص يضمن لكم راحة البال من خلال متابعة دقيقة لكل تفاصيل عملية الشحن منذ الاستلام وحتى التوصيل.',

    // Widgets / Calculator
    calc_badge: 'حاسبة الأسعار الذكية',
    calc_title_1: 'خطط لشحنتك القادمة',
    calc_title_2: 'بكل شفافية ودقة',
    calc_desc: 'نحن نؤمنوا بأن الثقة تبدأ بالوضوح. استخدموا الحاسبة التقديرية لمعرفة تكاليف الشحن من تركيا ودبي مباشرة.',
    calc_b1_title: 'تسعير فوري',
    calc_b1_desc: 'احصلوا على تكلفة شحنتكم في ثوانٍ معدودة دون انتظار.',
    calc_b2_title: 'تغطية عالمية',
    calc_b2_desc: 'نشحنوا من تركيا ودبي إلى جميع المدن الليبية بكفاءة.',
    calc_b3_title: 'شفافية كاملة',
    calc_b3_desc: 'لا توجد رسوم خفية، السعر الذي ترونه هو السعر التقديري العادل.',
    calc_clients: 'انضموا لـ +50 عميل',
    calc_clients_sub: 'يثقون في خدماتنا يومياً',
    calc_card_title: 'حساب التكلفة',
    calc_card_sub: 'أدخلوا تفاصيل شحنتكم للبدء',
    calc_dest: 'الوجهة',
    calc_turkey: 'تركيا',
    calc_dubai: 'دبي',
    calc_turkey_hint: 'جوي أو بحري',
    calc_dubai_hint: 'جوي فقط',
    calc_type: 'نوع الشحن',
    calc_air: 'جوي',
    calc_sea: 'بحري',
    calc_weight: 'الوزن (كجم)',
    calc_dims: 'الأبعاد (سم)',
    calc_length: 'طول',
    calc_width: 'عرض',
    calc_height: 'ارتفاع',
    calc_btn: 'احسبوا التكلفة الآن',
    calc_result_label: 'التكلفة التقديرية',
    calc_currency_lyd: 'دينار ليبي',

    // Services
    services_title: 'خدماتنا',
    services_title_accent: 'المميزة',
    service_1_title: 'الشحن الجوي والبحري',
    service_1_desc: 'شحن سريع وموثوق من تركيا ودبي مباشرة إلى ليبيا.',
    service_2_title: 'التخزين الآمن',
    service_2_desc: 'خدمات تخزين وتجميع محترفة في تركيا ودبي.',
    service_3_title: 'اللوجستيات الداخلية',
    service_3_desc: 'خدمات شحن وتوصيل شاملة في جميع أنحاء ليبيا.',
    service_4_title: 'التسوق والدفع',
    service_4_desc: 'نساعدوكم في الشراء من متاجر عالمية ونتولوا الدفع نيابةً عنكم.',

    // Stats
    stats_badge: 'أرقامنا تتحدث',
    stats_title: 'ثقة تُبنى على',
    stats_title_accent: 'الأرقام الحقيقية',
    stats_desc: 'شريككم الموثوق في الشحن من تركيا والإمارات إلى ليبيا',
    stat_1_label: 'شحنة مكتملة',
    stat_2_label: 'شحنة شهرياً',
    stat_3_label: 'عمولة على خدماتنا',

    // HowItWorks
    how_title_1: 'كيف يعمل',
    how_title_2: 'ماز إكسبرس؟',
    how_desc: 'رحلة تسوق عالمية تبدأ بضغطة زر وتنتهي بابتسامة عند باب بيتكم.',
    step1_title: 'فتح حساب',
    step1_desc: 'أنشئوا حسابكم المجاني في ثوانٍ لتحصلوا على هويتكم التسوقية وعناويننا الدولية في دبي وتركيا.',
    step2_title: 'اختيار المنتج',
    step2_desc: 'تصفحوا متاجركم العالمية المفضلة واختاروا المنتجات التي ترغبون في اقتنائها.',
    branch_label_1: 'الخيار الأول',
    branch_title_1: 'تدفعوا بنفسكم',
    branch_desc_1: 'استفيدوا من خدمات ماز عبر شراء المنتجات بأنفسكم، واختيار مخازننا في دبي وتركيا كعناوين لاستلام مشترياتكم.',
    branch_label_2: 'الخيار الثاني',
    branch_title_2: 'نحن ندفعولكم',
    branch_desc_2: 'إذا كنتم لا تملكون بطاقة دفع دولية، فقط أرسلوا لنا روابط المنتجات ونتولوا عملية الشراء والدفع نيابةً عنكم.',
    step3_title: 'نستلموا في مخازننا',
    step3_desc: 'في كلتا الحالتين، نستلموا مشترياتكم في مخازننا العالمية، ونتولوا فحصها وتجهيزها بأمان للشحن الدولي.',
    step4_title: 'يتم الشحن إلى ليبيا',
    step4_desc: 'نشحنوا طردكم بسرعة وأمان إلى ليبيا، مع توفير خدمة التوصيل لمختلف المدن.',
    commission_title: 'خدماتنا بعمولة 0%',
    commission_desc: 'نحن نوفرولكم هذه الخدمات بدون أي عمولة إضافية. سعر المنتج كما هو في المتجر تماماً.',
    commission_word: 'عمولة',

    // Trust
    trust_title_1: 'عناية بلا',
    trust_title_2: 'استثناءات',
    trust_desc: 'نتعاملوا مع كل شحنة بعناية فائقة، لضمان وصول بضائعكم بأمان وموثوقية عالية من إسطنبول إلى باب منزلكم. راحة البال مضمونة مع كل خطوة.',
    trust_cta: 'تواصلوا معنا اليوم',

    // Footer
    footer_desc: 'نوفروا حلول شحن سلسة وموثوقة من تركيا والإمارات إلى ليبيا. شريككم الموثوق في اللوجستيات الدولية.',
    footer_find_us: 'أين تجدونا؟',
    footer_address: 'شارع الأندلس، أراضي بن علي، بنغازي، ليبيا',
    footer_quick_links: 'روابط سريعة',
    footer_link_services: 'خدماتنا',
    footer_link_how: 'كيف يعمل ماز؟',
    footer_link_track: 'تتبعوا شحنة',
    footer_rights: '© 2026 ماز إكسبرس — جميع الحقوق محفوظة',
    footer_made_with: 'صنع بكل شغف لخدمتكم',
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    // Navbar
    nav_services: 'Services',
    nav_routes: 'How It Works',
    nav_tracking: 'Tracking',
    nav_portal: 'Client Portal',
    nav_menu: 'Menu',
    nav_lang_switch: 'عر',

    // Hero
    hero_headline_1: 'We Ship',
    hero_mode_air: 'by Air',
    hero_mode_sea: 'by Sea',
    hero_mode_land: 'by Land',
    hero_desc: 'We provide comprehensive shipping solutions by land, sea, and air — with precision in timing, security in delivery, and professionalism at every step. Your trusted partner in international shipping.',
    hero_panel_label: 'Track Your Shipment',
    hero_panel_title: '24/7 Expert Technical Support',
    hero_panel_desc: 'Our specialized team ensures your peace of mind through precise monitoring of every shipping detail from pickup to delivery.',

    // Widgets / Calculator
    calc_badge: 'Smart Price Calculator',
    calc_title_1: 'Plan Your Next Shipment',
    calc_title_2: 'With Full Transparency',
    calc_desc: 'We believe trust starts with clarity. Use our estimator to see shipping costs from Turkey and Dubai directly to Libya.',
    calc_b1_title: 'Instant Pricing',
    calc_b1_desc: 'Get your shipment cost in seconds with no waiting.',
    calc_b2_title: 'Global Coverage',
    calc_b2_desc: 'We ship from Turkey and Dubai to all Libyan cities efficiently.',
    calc_b3_title: 'Full Transparency',
    calc_b3_desc: 'No hidden fees — the price you see is the fair estimated price.',
    calc_clients: 'Join 50+ Clients',
    calc_clients_sub: 'who trust our services daily',
    calc_card_title: 'Cost Calculator',
    calc_card_sub: 'Enter your shipment details to start',
    calc_dest: 'Destination',
    calc_turkey: 'Turkey',
    calc_dubai: 'Dubai',
    calc_turkey_hint: 'Air or Sea',
    calc_dubai_hint: 'Air Only',
    calc_type: 'Shipping Type',
    calc_air: 'Air',
    calc_sea: 'Sea',
    calc_weight: 'Weight (kg)',
    calc_dims: 'Dimensions (cm)',
    calc_length: 'Length',
    calc_width: 'Width',
    calc_height: 'Height',
    calc_btn: 'Calculate Cost Now',
    calc_result_label: 'Estimated Cost',
    calc_currency_lyd: 'LYD',

    // Services
    services_title: 'Our',
    services_title_accent: 'Premium Services',
    service_1_title: 'Air & Sea Freight',
    service_1_desc: 'Fast and reliable shipping from Turkey and Dubai directly to Libya.',
    service_2_title: 'Secure Warehousing',
    service_2_desc: 'Professional storage and consolidation services in Turkey and Dubai.',
    service_3_title: 'Domestic Logistics',
    service_3_desc: 'Comprehensive shipping and delivery services across all of Libya.',
    service_4_title: 'Shopping & Payment',
    service_4_desc: 'We help you buy from global stores and handle payment on your behalf.',

    // Stats
    stats_badge: 'Our Numbers Speak',
    stats_title: 'Trust Built on',
    stats_title_accent: 'Real Numbers',
    stats_desc: 'Your trusted partner in shipping from Turkey and UAE to Libya',
    stat_1_label: 'Completed Shipments',
    stat_2_label: 'Shipments Monthly',
    stat_3_label: 'Commission on Services',

    // HowItWorks
    how_title_1: 'How Does',
    how_title_2: 'Maz Express Work?',
    how_desc: 'A global shopping journey that starts with a click and ends with a smile at your door.',
    step1_title: 'Create Account',
    step1_desc: 'Set up your free account in seconds to get your shopping identity and our international addresses in Dubai and Turkey.',
    step2_title: 'Choose Products',
    step2_desc: 'Browse your favorite global stores and select the products you wish to purchase.',
    branch_label_1: 'Option One',
    branch_title_1: 'You Pay Yourself',
    branch_desc_1: 'Use Maz services by purchasing products and selecting our warehouses in Dubai and Turkey as your delivery addresses.',
    branch_label_2: 'Option Two',
    branch_title_2: 'We Pay For You',
    branch_desc_2: 'If you don\'t have an international payment card, just send us product links and we\'ll handle the purchase and payment for you.',
    step3_title: 'We Receive at Our Warehouses',
    step3_desc: 'In both cases, we receive your purchases at our global warehouses, inspect and prepare them safely for international shipping.',
    step4_title: 'Shipped to Libya',
    step4_desc: 'We ship your parcel quickly and safely to Libya, with delivery service to various cities.',
    commission_title: '0% Commission on Our Services',
    commission_desc: 'We provide these services with absolutely no extra commission. The product price is exactly as shown in the store.',
    commission_word: 'Commission',

    // Trust
    trust_title_1: 'Care Without',
    trust_title_2: 'Exceptions',
    trust_desc: 'We handle every shipment with utmost care, ensuring your goods arrive safely and reliably from Istanbul to your doorstep. Peace of mind is guaranteed with every step.',
    trust_cta: 'Contact Us Today',

    // Footer
    footer_desc: 'We provide smooth and reliable shipping solutions from Turkey and UAE to Libya. Your trusted partner in international logistics.',
    footer_find_us: 'Where to Find Us?',
    footer_address: 'Al-Andalus Street, Ben Ali Land, Benghazi, Libya',
    footer_quick_links: 'Quick Links',
    footer_link_services: 'Our Services',
    footer_link_how: 'How Maz Works?',
    footer_link_track: 'Track Shipment',
    footer_rights: '© 2026 Maz Express — All Rights Reserved',
    footer_made_with: 'Made with passion to serve you',
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('ar');
  const toggleLang = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;
    document.body.style.direction = t.dir;
    document.body.style.textAlign = t.dir === 'rtl' ? 'right' : 'left';
  }, [lang, t]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
