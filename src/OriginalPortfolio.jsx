import { PROJECTS } from "./projects.js";
import { createContactDraft } from "./contact.js";
import resumeUrl from "../public/AyatNassar-CV.pdf?url";
import frameStyles from "./frame.generated.css?raw";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import originalPortfolioHtml from "../code.html?raw";

const frameEnDictionary = {
  about: "About",
  skills: "Skills",
  portfolio: "Portfolio",
  contact: "Contact",
  hireMe: "Hire Me",
  language: "العربية",
  available: "Available for Freelance & High-Impact Roles",
  role: "Ayat Nassar · Digital Architect",
  heroTitle: "Computer Systems Engineer &",
  heroAccent: "Front-End Developer",
  heroDescription: "Bridging the gap between engineering systems architecture and human-centered, responsive UI/UX experiences with zero design debt.",
  explore: "Explore Works",
  talk: "Let's Talk",
  resume: "Resume",
  figmaProof: "Figma to React Precision",
  rtlProof: "Dual RTL/LTR Engine",
  performance: "99.9% Performance Score",
  zeroDebt: "Zero Design Debt",
  errors: "0 errors",
  warnings: "0 warnings",
  metricProjectsTitle: "Front-End Projects",
  metricProjectsDetail: "Seven bilingual demos",
  metricDeliveryTitle: "On-Time Milestones",
  metricDeliveryDetail: "SLA Execution Guarantee",
  metricLanguageTitle: "Bi-Lingual RTL/LTR",
  metricLanguageDetail: "Complete Localization Parity",
  metricDesignValue: "0px",
  metricDesignTitle: "Design Deviation",
  metricDesignDetail: "Pixel-Exact Figma Translation",
  synergy: "The Synergy",
  aboutTitle: "The Dual Discipline: Engineer Meets Designer",
  aboutDescription: "Most developers struggle with typography and spacing; most designers avoid state machines and complexity. Ayat Nassar operates at their exact intersection.",
  engineeringLabel: "Engineering Foundation",
  engineeringTitle: "Systems Rigor & Scalable Logic",
  engineeringDescription: "Grounded in Computer Systems Engineering, every interface is structured as an interconnected computational engine. Architecture prioritizes performance optimization, clean state modeling, strict types, and robust async data piping.",
  engineeringCheckOne: "Fault-Tolerant Async Handling",
  engineeringCheckTwo: "Deterministic Component State",
  engineeringCheckThree: "Sub-Second First Contentful Paint",
  designLabel: "Design Hierarchy",
  designTitle: "Sensory UI/UX & Micro-Interactions",
  designDescription: "Crafting interfaces that feel physical, intuitive, and visually harmonious. Deep proficiency in Figma design tokens, dynamic dark mode palettes, custom micro-transitions, accessibility WCAG compliance, and frictionless user journeys.",
  designCheckOne: "Figma Tokens To Tailwind Synchronization",
  designCheckTwo: "Micro-Interactions & Haptic Motion",
  designCheckThree: "Culturally Nuanced RTL Adaptability",
  arsenal: "Core Arsenal",
  skillsTitle: "Skills & Technology Matrix",
  skillsDescription: "Every tool in this stack is battle-tested in real-world shipping environments.",
  allStack: "All Stack",
  frontendTab: "Front-End",
  designTab: "UI/UX Craft",
  systemsTab: "Systems",
  categoryOne: "Category 01",
  categoryTwo: "Category 02",
  categoryThree: "Category 03",
  frontendTitle: "Front-End Engineering",
  frontendDescription: "Modern declarative user interfaces designed for rapid rendering, modular reuse, and zero bloat.",
  designSkillsTitle: "UI/UX & Product Design",
  designSkillsDescription: "Human factors research translated into frictionless, cohesive wireframes and design libraries.",
  architectureTitle: "Systems Architecture",
  architectureDescription: "Global internationalization, state resilience, and future-proof code contracts for production.",
  coverage: "Coverage:",
  mastery: "Mastery:",
  projectsEyebrow: "Selected Engineering & UI",
  projectsTitle: "Featured Projects",
  projectsDescription: "Seven bilingual front-end projects, each focused on a distinct user journey, responsive layouts, and practical interactions.",
  previousProject: "Previous project",
  nextProject: "Next project",
  projectCredit: "UI/UX Design & Front-End Development by Ayat Nassar",
  projectAction: "Live Demo",
  sourceAction: "GitHub",
  initiate: "Initiate Project",
  contactTitle: "Let's Build Something Extraordinary Together",
  contactDescription: "Looking for a systems-minded engineer who designs world-class UIs or an experienced front-end developer for your product team? Select a channel below or send a direct dispatch.",
  whatsappTitle: "WhatsApp Ping",
  whatsappDescription: "Chat Directly · Active quick ping",
  telegramTitle: "Telegram",
  telegramDescription: "Direct Message @eng_ayatnassar",
  instagramTitle: "Instagram",
  instagramDescription: "Design & Visuals · Creative Showcase",
  emailTitle: "Gmail",
  emailDescription: "Direct Inquiry · ayatnassar24@gmail.com",
  formTitle: "Engineering Dispatch Form",
  responseTime: "Response Time: < 24h",
  fullName: "Your Full Name",
  fullNamePlaceholder: "e.g. Alex Henderson",
  emailAddress: "Your Email Address",
  emailPlaceholder: "alex@company.com",
  service: "Engagement Focus",
  serviceFrontend: "Front-End Development (React / Tailwind / Architecture)",
  serviceDesign: "Full UI/UX Design System & Product Prototyping",
  serviceDual: "Complete Dual-Discipline Implementation (Figma to Code)",
  serviceRtl: "Localization & Arabic RTL Architecture Overhaul",
  serviceAdvisory: "Technical Advisory & Code Review",
  scope: "Scope & Objectives",
  scopePlaceholder: "Outline your technical requirements, goals, timelines, or specifications...",
  secure: "Review and send the draft yourself",
  send: "Open email draft",
  sending: "Preparing email...",
  sent: "Draft ready",
  success: "A draft is ready. Complete sending in Gmail or your email app; nothing has been sent yet. If no window opened, use the link below.",
  emailProvider: "Where would you like to write your email?",
  gmailProvider: "Gmail · In your browser",
  appProvider: "Email app · Your device",
  gmailHelp: "Use your Gmail account. You may be asked to sign in.",
  appHelp: "Opens an app such as Outlook or Apple Mail. An email account must already be set up on your device.",
  draftHelp: "This opens a draft. Review it and press Send in your email service.",
  openDraft: "Open the prepared draft",
  nativeMetric: "Native",
  coverageFrontend: "Coverage: 98%",
  masteryFrontend: "Mastery: Core",
  coverageDesign: "Coverage: 95%",
  masteryDesign: "Mastery: Advanced",
  coverageSystems: "Coverage: 96%",
  masterySystems: "Mastery: Expert",
  featuredShowcase: "Featured Showcase · 02",
  activeCaseStudy: "Active Case Study",
  liveStatus: "• Live",
  activeServices: "42 Active",
  availabilityLabel: "Availability",
  projectOneLabel: "Project 01",
  projectThreeLabel: "Project 03",
  footerDescription: "High-precision digital architecture, scalable systems engineering, and creative software craft.",
  crafted: "Engineered with precision & empathy",
  navigation: "Navigation",
  aboutArchitect: "About Architect",
  capabilities: "Core Capabilities",
  selectedWorks: "Selected Works",
  initiateContact: "Initiate Contact",
  directTelemetry: "Direct Contact",
  footerWhatsapp: "WhatsApp",
  footerEmail: "Email",
  github: "GitHub",
  linkedin: "LinkedIn",
  copyright: "© 2026 Ayat Nassar (Ayat.dev). All rights reserved.",
  footerAvailable: "Available for High-Impact Roles & Consulting",
};

const frameArDictionary = {
  about: "نبذة",
  skills: "المهارات",
  portfolio: "الأعمال",
  contact: "تواصل",
  hireMe: "لنعمل معاً",
  language: "English",
  available: "متاحة للعمل الحر والأدوار ذات الأثر العالي",
  role: "آيات نصّار · مهندسة أنظمة ومطوّرة واجهات",
  heroTitle: "مهندسة أنظمة حاسوب و",
  heroAccent: "مطوّرة واجهات أمامية",
  heroDescription: "أحوّل هندسة الأنظمة إلى واجهات سريعة ومتجاوبة، تجمع بين المنطق التقني وتجربة الاستخدام الواضحة من دون تنازلات تصميمية.",
  explore: "استكشاف الأعمال",
  talk: "لنتحدث",
  resume: "السيرة الذاتية",
  figmaProof: "دقة في التحويل من Figma إلى React",
  rtlProof: "دعم RTL وLTR",
  performance: "أداء بنسبة ٩٩٫٩٪",
  zeroDebt: "تصميم نظيف قابل للتطوير",
  errors: "لا أخطاء",
  warnings: "لا تحذيرات",
  metricProjectsTitle: "مشاريع واجهات أمامية",
  metricProjectsDetail: "سبعة مشاريع تجريبية باللغتين",
  metricDeliveryTitle: "التزام كامل بالمواعيد",
  metricDeliveryDetail: "تنفيذ موثوق في كل مرحلة",
  metricLanguageTitle: "تجارب عربية وإنجليزية",
  metricLanguageDetail: "دعم متكامل لاتجاهي RTL وLTR",
  metricDesignValue: "صفر",
  metricDesignTitle: "اختلاف عن التصميم",
  metricDesignDetail: "تنفيذ مطابق لتصاميم Figma",
  synergy: "التكامل",
  aboutTitle: "حين تلتقي الهندسة بالتصميم",
  aboutDescription: "أجمع بين التفكير الهندسي والحس البصري لبناء منتجات جميلة، فعّالة، وسهلة التطوير.",
  engineeringLabel: "أساس هندسي",
  engineeringTitle: "بنية هندسية واضحة وقابلة للتوسع",
  engineeringDescription: "أبني كل واجهة كمنظومة مترابطة تراعي سرعة الأداء، وتنظيم الحالة، والكتابة الآمنة للأنواع، وتدفّق البيانات بصورة مستقرة.",
  engineeringCheckOne: "معالجة مستقرة للعمليات غير المتزامنة",
  engineeringCheckTwo: "إدارة واضحة ومتوقعة لحالة المكونات",
  engineeringCheckThree: "تحميل سريع للمحتوى الأساسي",
  designLabel: "تسلسل تصميمي",
  designTitle: "واجهات بديهية وتفاصيل تفاعلية مدروسة",
  designDescription: "أصمم واجهات مريحة بصرياً وسهلة الاستخدام، مع Design Tokens في Figma، وثيمات مرنة، وحركات خفيفة، ومعايير WCAG، ومسارات استخدام سلسة.",
  designCheckOne: "مزامنة Design Tokens بين Figma وTailwind CSS",
  designCheckTwo: "حركات دقيقة تخدم تجربة الاستخدام",
  designCheckThree: "تجربة عربية مدروسة باتجاه RTL",
  arsenal: "الأدوات الأساسية",
  skillsTitle: "مصفوفة المهارات والتقنيات",
  skillsDescription: "تقنيات وأدوات استخدمتها فعلياً في بناء مشاريع وتجارب رقمية متكاملة.",
  allStack: "كل الأدوات",
  frontendTab: "الواجهات",
  designTab: "التصميم",
  systemsTab: "الأنظمة",
  categoryOne: "الفئة ٠١",
  categoryTwo: "الفئة ٠٢",
  categoryThree: "الفئة ٠٣",
  frontendTitle: "هندسة الواجهات الأمامية",
  frontendDescription: "واجهات حديثة وسريعة، مبنية من مكونات قابلة لإعادة الاستخدام ومن دون تعقيد غير ضروري.",
  designSkillsTitle: "تصميم الواجهات والمنتجات",
  designSkillsDescription: "تحويل احتياجات المستخدم إلى مخططات واضحة ومكتبات تصميم متناسقة وسهلة التوسع.",
  architectureTitle: "هندسة الأنظمة",
  architectureDescription: "بنية جاهزة للإنتاج تدعم تعدد اللغات، وتحافظ على استقرار الحالة، وتسهّل تطوير الكود مستقبلاً.",
  coverage: "التغطية:",
  mastery: "الإتقان:",
  projectsEyebrow: "هندسة وتصميم واجهات مختارة",
  projectsTitle: "مشاريع مميزة",
  projectsDescription: "سبعة مشاريع واجهات ثنائية اللغة، يركّز كل منها على تجربة استخدام مختلفة وتنسيق متجاوب وتفاعلات عملية.",
  previousProject: "المشروع السابق",
  nextProject: "المشروع التالي",
  projectCredit: "تصميم الواجهات وتجربة المستخدم وتطوير الواجهة الأمامية بواسطة آيات نصّار",
  projectAction: "معاينة مباشرة",
  sourceAction: "الكود على GitHub",
  initiate: "ابدئي مشروعاً",
  contactTitle: "لنبنِ معاً شيئاً استثنائياً",
  contactDescription: "إذا كنت تبحث عن مهندسة تجمع بين التفكير المنظومي وتصميم الواجهات باحتراف، اختر وسيلة التواصل المناسبة أو أرسل تفاصيل مشروعك مباشرة.",
  whatsappTitle: "واتساب",
  whatsappDescription: "محادثة مباشرة عبر WhatsApp",
  telegramTitle: "تيليغرام",
  telegramDescription: "رسالة مباشرة @eng_ayatnassar",
  instagramTitle: "إنستغرام",
  instagramDescription: "التصميم والأعمال البصرية",
  emailTitle: "البريد الإلكتروني",
  emailDescription: "استفسار مباشر · ayatnassar24@gmail.com",
  formTitle: "أرسل تفاصيل مشروعك",
  responseTime: "الاستجابة خلال أقل من ٢٤ ساعة",
  fullName: "الاسم الكامل",
  fullNamePlaceholder: "اكتب اسمك",
  emailAddress: "البريد الإلكتروني",
  emailPlaceholder: "بريدك المهني",
  service: "مجال التعاون",
  serviceFrontend: "تطوير واجهات أمامية باستخدام React وTailwind CSS",
  serviceDesign: "تصميم نظام واجهات ونماذج تفاعلية في Figma",
  serviceDual: "تصميم وتنفيذ المنتج من Figma إلى الكود",
  serviceRtl: "تهيئة الواجهات العربية ودعم RTL وLTR",
  serviceAdvisory: "استشارة تقنية ومراجعة كود",
  scope: "النطاق والأهداف",
  scopePlaceholder: "اشرح المتطلبات والأهداف والمدة المتوقعة...",
  secure: "راجعي المسودة وأكملي الإرسال بنفسك",
  send: "فتح مسودة بريد",
  sending: "جارٍ تجهيز المسودة...",
  sent: "المسودة جاهزة",
  success: "المسودة جاهزة. أكملي إرسالها من Gmail أو تطبيق البريد؛ لم تُرسل الرسالة بعد. إذا لم تفتح نافذة، استخدمي الرابط أدناه.",
  emailProvider: "وين بتحب تكتب الإيميل؟",
  gmailProvider: "Gmail · من المتصفح",
  appProvider: "تطبيق البريد · على جهازك",
  gmailHelp: "استخدم حسابك على Gmail. ممكن يُطلب منك تسجيل الدخول.",
  appHelp: "يفتح تطبيقاً مثل Outlook أو Apple Mail. لازم يكون حساب بريدك مُعدّاً على الجهاز مسبقاً.",
  draftHelp: "رح تفتح مسودة؛ راجعها واضغط «إرسال» من بريدك حتى توصل الرسالة.",
  openDraft: "فتح المسودة المجهّزة",
  nativeMetric: "دعم أصلي",
  coverageFrontend: "التغطية: 98%",
  masteryFrontend: "مستوى الإتقان: أساسي",
  coverageDesign: "التغطية: 95%",
  masteryDesign: "مستوى الإتقان: متقدم",
  coverageSystems: "التغطية: 96%",
  masterySystems: "مستوى الإتقان: خبير",
  featuredShowcase: "المشروع المميز · 02",
  activeCaseStudy: "دراسة حالة نشطة",
  liveStatus: "• متصل",
  activeServices: "42 خدمة نشطة",
  availabilityLabel: "التوفّر",
  projectOneLabel: "المشروع 01",
  projectThreeLabel: "المشروع 03",
  footerDescription: "هندسة رقمية دقيقة، وأنظمة قابلة للتوسع، وتجارب واجهات مصممة بعناية.",
  crafted: "صُمّم وطُوّر بدقة وعناية",
  navigation: "التنقل",
  aboutArchitect: "نبذة عن المهندسة",
  capabilities: "القدرات الأساسية",
  selectedWorks: "الأعمال المختارة",
  initiateContact: "بدء التواصل",
  directTelemetry: "التواصل المباشر",
  footerWhatsapp: "واتساب",
  footerEmail: "البريد الإلكتروني",
  github: "GitHub",
  linkedin: "لينكد إن",
  copyright: "© ٢٠٢٦ آيات نصّار. جميع الحقوق محفوظة.",
  footerAvailable: "متاحة للمشاريع والفرص ذات الأثر الحقيقي",
};

const TEXT_KEY_BY_ENGLISH = new Map(
  Object.entries(frameEnDictionary).map(([translationKey, englishText]) => [englishText, translationKey]),
);



const prepareOriginalHtml = () => originalPortfolioHtml
  .replace(/<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/, () => `<style>${frameStyles}</style>`)
  .replace(/<script id="tailwind-config">[\s\S]*?<\/script>/, "")
  .replace(/<img\s+alt="Ayat\.dev Brand Logo"[^>]*>/gi, "")
  .replace(/© 2025/g, "© 2026")
  .replace(/Shipped Full-Stack &amp; Front-End/g, () => frameEnDictionary.metricProjectsDetail)
  .replace(/Production Platforms/g, () => frameEnDictionary.metricProjectsTitle)
  .replace(/Encrypted transit · NDA-ready/g, () => frameEnDictionary.secure)
  .replace(/Send Message/g, () => frameEnDictionary.send)
  .replace(/Every project showcased below was designed in Figma from ground zero and coded cleanly as an engineering-grade front-end solution\./g, () => frameEnDictionary.projectsDescription)
  .replace(/Direct Telemetry/g, "Direct Contact")
  .replace(/Direct Message · @(ayat_dev|eng_ayatnassar)/g, "Direct Message @eng_ayatnassar")
  .replace(/Primary Electronic Mail/g, "Gmail")
  .replace(/Direct Inquiry · hello@ayat\.dev/g, "Direct Inquiry · ayatnassar24@gmail.com")
  .replace(/<!-- INTERACTIVITY CONTROLLER SCRIPT -->[\s\S]*?<\/script>/i, "")
  .replace("</head>", `<style>
    html.light, html.light body, html.light main, html.light .bg-surface-container-lowest, html.light [class~="bg-surface-container-lowest/80"] { background:#FAF7FD!important; color:#1E1035!important; }
    html.light .bg-surface-container-low, html.light [class~="bg-surface-container-low/60"], html.light [class~="bg-surface-container-low/80"], html.light [class~="bg-surface-container-low/90"], html.light footer { background:#F4EEFA!important; }
    html.light .bg-surface-container, html.light [class~="bg-surface-container/70"], html.light [class~="bg-surface-container/80"], html.light [class~="bg-surface-container/90"] { background:rgba(255,255,255,.94)!important; }
    html.light .bg-surface-container-high, html.light [class~="bg-surface-container-high/40"], html.light [class~="bg-surface-container-high/50"], html.light [class~="bg-surface-container-high/60"], html.light [class~="bg-surface-container-high/70"], html.light [class~="bg-surface-container-high/80"], html.light [class~="bg-surface-container-high/90"] { background:#F1E7F8!important; }
    html.light .bg-surface-container-highest, html.light .bg-surface-bright { background:#E9D5FF!important; }
    html.light .text-on-surface { color:#1E1035!important; }
    html.light .text-on-surface-variant { color:#55445F!important; }
    html.light .text-outline, html.light .text-outline-variant { color:#6F5D78!important; }
    html.light .text-primary { color:#A91264!important; }
    html.light .text-primary-container { color:#8B124F!important; }
    html.light .text-secondary { color:#5B21B6!important; }
    html.light .text-secondary-fixed { color:#4C1D95!important; }
    html.light .text-on-primary, html.light .text-on-secondary { color:#FFFFFF!important; }
    html.light .bg-primary { background:#D92E83!important; }
    html.light .bg-secondary { background:#6D35C5!important; }
    html.light [class~="placeholder:text-outline"]::placeholder { color:#75657D!important; opacity:1!important; }
    html.light .opacity-40 { opacity:.68!important; }
    html.light .opacity-50 { opacity:.74!important; }
    html.light .opacity-60 { opacity:.8!important; }
    html.light header { background:rgba(250,247,253,.88)!important; border-color:rgba(139,92,246,.12)!important; }
    html.light input, html.light select, html.light textarea, html.light option { background:#FFF!important; color:#1E1035!important; }
    html.light [class*="border-outline"], html.light [class*="border-surface"] { border-color:rgba(91,64,111,.16)!important; }
    html.light [class*="shadow-"] { --tw-shadow-color:rgba(73,42,96,.12)!important; }

    .portfolio-navbar { border-bottom:1px solid rgba(255,176,205,.12); box-shadow:0 12px 34px rgba(0,0,0,.12)!important; }
    .portfolio-navbar-inner { height:76px!important; max-width:1360px!important; }
    .portfolio-navbar-brand { position:relative; padding-inline-end:18px; }
    .portfolio-navbar-brand::after { content:""; position:absolute; inset-inline-end:0; width:1px; height:24px; background:linear-gradient(transparent,#f751a1,transparent); opacity:.55; }
    .portfolio-navbar-links { padding:5px!important; gap:3px!important; border:1px solid rgba(255,176,205,.08); border-radius:14px!important; }
    .portfolio-navbar-links a { border-radius:10px!important; min-width:88px; text-align:center; background:transparent!important; color:#debec8!important; font-size:12px!important; line-height:16px!important; font-weight:600!important; letter-spacing:.06em!important; }
    .portfolio-navbar-links a[aria-current] { background:transparent!important; color:#debec8!important; }
    .portfolio-navbar-links a:hover { background:rgba(255,176,205,.08)!important; color:#fff!important; }
    .portfolio-navbar-actions > button { border:1px solid rgba(255,176,205,.08); }
    .portfolio-navbar-avatar { box-shadow:0 0 0 2px rgba(247,81,161,.16),0 0 22px rgba(247,81,161,.18); }
    .portfolio-navbar-menu { display:none; width:40px; height:40px; align-items:center; justify-content:center; border-radius:10px; color:inherit; background:var(--portfolio-menu-bg,rgba(255,255,255,.05)); border:1px solid rgba(255,176,205,.08); }
    html.light .portfolio-navbar-links, html.light .portfolio-navbar-menu { background:rgba(255,255,255,.82)!important; border-color:rgba(91,64,111,.16)!important; }
    html.light .portfolio-navbar-links a, html.light .portfolio-navbar-links a[aria-current] { color:#4D3759!important; }
    html.light .portfolio-navbar-links a:hover { color:#8B124F!important; background:#F5E9F7!important; }

    html[lang="ar"] body { font-family:Tahoma,Arial,sans-serif; }

    .portfolio-code-window { position:relative; isolation:isolate; overflow:hidden; }
    .portfolio-code-canvas, .portfolio-code-canvas * { direction:ltr!important; text-align:left!important; unicode-bidi:isolate; }
    .portfolio-code-canvas .select-none { text-align:right!important; }
    .portfolio-code-window::after { content:""; position:absolute; inset:-40% auto -40% -35%; width:22%; pointer-events:none; z-index:5; transform:skewX(-16deg); background:linear-gradient(90deg,transparent,rgba(255,176,205,.09),transparent); animation:portfolio-code-sheen 9s ease-in-out infinite; }
    @keyframes portfolio-code-sheen { 0%,72%{left:-35%;opacity:0} 76%{opacity:1} 94%{left:120%;opacity:.7} 100%{left:120%;opacity:0} }
    .portfolio-reveal { opacity:0; transform:translateY(16px); transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1); }
    .portfolio-reveal.is-visible { opacity:1; transform:none; }
    .portfolio-carousel-stage { position:relative; width:100%; height:740px; direction:ltr; perspective:1400px; }
    #featured-portfolio { scroll-margin-top:96px; }
    .portfolio-project-card { position:absolute; top:50%; left:50%; width:min(660px,56vw); min-height:640px; display:flex; flex-direction:column; justify-content:space-between; gap:24px; padding:32px; border-radius:24px; border:1px solid rgba(255,176,205,.08); background:rgba(30,31,37,.94); box-shadow:0 28px 70px rgba(0,0,0,.28); transform-origin:center; transition:transform .68s cubic-bezier(.16,1,.3,1),opacity .5s ease,filter .5s ease,box-shadow .5s ease; will-change:transform,opacity; overflow:hidden; }
    html.light .portfolio-project-card { background:rgba(255,255,255,.96); border-color:rgba(91,64,111,.13); box-shadow:0 24px 60px rgba(73,42,96,.13); }
    html[dir="rtl"] .portfolio-project-card { direction:rtl; text-align:right; }
    .portfolio-project-card[data-position="active"] { z-index:30; opacity:1; filter:none; transform:translate(-50%,-50%) scale(1); box-shadow:0 0 54px rgba(236,72,153,.23),0 28px 70px rgba(0,0,0,.3); pointer-events:auto; }
    .portfolio-project-card[data-position="previous"] { z-index:20; opacity:.3; filter:saturate(.65); transform:translate(calc(-50% - clamp(340px,33vw,470px)),-50%) scale(.58); cursor:pointer; pointer-events:auto; }
    .portfolio-project-card[data-position="next"] { z-index:20; opacity:.3; filter:saturate(.65); transform:translate(calc(-50% + clamp(340px,33vw,470px)),-50%) scale(.58); cursor:pointer; pointer-events:auto; }
    .portfolio-project-card[data-position="hidden-left"] { z-index:5; opacity:0; transform:translate(calc(-50% - 760px),-50%) scale(.68); pointer-events:none; }
    .portfolio-project-card[data-position="hidden-right"] { z-index:5; opacity:0; transform:translate(calc(-50% + 760px),-50%) scale(.68); pointer-events:none; }
    .portfolio-project-card[data-position="previous"]:hover,.portfolio-project-card[data-position="next"]:hover { opacity:.64; filter:saturate(.9); }
    .portfolio-project-preview { position:relative; flex-shrink:0; height:180px; border-radius:16px; overflow:hidden; border:1px solid rgba(255,176,205,.12); background:#151221; }
    .portfolio-project-image { display:block; width:100%; height:100%; object-fit:cover; object-position:top; }
    .portfolio-project-overlay { position:absolute; inset:auto 0 0; display:flex; justify-content:space-between; gap:12px; padding:24px 14px 12px; color:#fff; font:600 11px Manrope,sans-serif; background:linear-gradient(transparent,rgba(9,10,15,.88)); }
    .portfolio-project-demo { white-space:nowrap; }
    .portfolio-project-card[data-position="active"] .portfolio-project-preview { height:220px; }
    .portfolio-project-code { direction:ltr!important; text-align:left!important; font:500 12px ui-monospace,SFMono-Regular,Consolas,monospace; color:#debec8; }
    html.light .portfolio-project-code { color:#57405F; }
    .portfolio-project-description { min-height:48px; font-size:14px; line-height:1.8; }
    .portfolio-project-tools { display:flex; flex-wrap:wrap; gap:8px; }
    .portfolio-project-tool { padding:6px 10px; border-radius:7px; background:#292a2f; color:#debec8; font:600 11px Manrope,sans-serif; }
    html.light .portfolio-project-tool { background:#F1E7F8; color:#4D3759; }
    .portfolio-project-card:not([data-position="active"]) .portfolio-project-actions { opacity:0; pointer-events:none; }
    .portfolio-project-card:not([data-position="active"]) .portfolio-project-description { display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2; overflow:hidden; }
    .portfolio-project-actions { display:flex; align-items:center; justify-content:space-between; gap:16px; padding-top:16px; border-top:1px solid rgba(255,176,205,.08); transition:opacity .3s ease; }
    .portfolio-project-credit { max-width:60%; text-align:end; font-size:11px; color:#a68992; }
    .portfolio-project-credit-mobile { display:none; margin-top:2px; font-size:11px; line-height:18px; color:#a68992; }

    html[dir="rtl"] .portfolio-directional-icon { transform:scaleX(-1); }
    html[dir="rtl"] .portfolio-check-row { flex-direction:row!important; width:100%; }
    html[dir="rtl"] .portfolio-check-row > span:first-child { flex:0 1 auto; text-align:right; }
    .portfolio-contact-handle { display:inline-block; direction:ltr!important; unicode-bidi:isolate; }
    .portfolio-no-wrap { white-space:nowrap; }
    .portfolio-resume-btn { position:relative; isolation:isolate; overflow:hidden; display:inline-flex; align-items:center; justify-content:center; gap:8px; min-height:48px; padding:0 20px; border-radius:12px; color:#fff; font:700 12px Manrope,sans-serif; letter-spacing:.06em; text-transform:uppercase; background:linear-gradient(110deg,#EC4899,#8B5CF6,#EC4899); background-size:220% 100%; box-shadow:0 12px 32px rgba(139,92,246,.24); animation:portfolio-resume-gradient 6s ease infinite; transition:transform .25s ease,box-shadow .25s ease; }
    .portfolio-resume-btn:hover { transform:translateY(-2px); box-shadow:0 18px 38px rgba(236,72,153,.3); }
    .portfolio-mail-field { display:flex; flex-direction:column; gap:10px; margin:4px 0; min-width:0; }
    .portfolio-mail-label { font-size:13px; font-weight:700; }
    .portfolio-mail-control { display:flex; align-items:center; gap:12px; padding:0 14px; border:1px solid #8b7b915c; border-radius:14px; background:rgba(139,92,246,.07); transition:border-color .2s,box-shadow .2s; }
    .portfolio-mail-control:hover { border-color:#b071b5; }
    .portfolio-mail-control:focus-within { border-color:#ec4899; box-shadow:0 0 0 3px rgba(236,72,153,.14); }
    .portfolio-mail-control > .material-symbols-outlined { color:#d768a6; font-size:21px; flex-shrink:0; pointer-events:none; }
    .portfolio-mail-control select { appearance:none; -webkit-appearance:none; width:100%; min-width:0; min-height:54px; border:0; outline:0; background:transparent; color:inherit; font:inherit; font-size:14px; font-weight:600; cursor:pointer; }
    .portfolio-mail-control option { background:#202127; color:#f8f4fa; }
    html.light .portfolio-mail-control option { background:#fff; color:#241d29; }
    .portfolio-mail-help { margin:0; font-size:12px; line-height:1.8; opacity:.8; }
    .portfolio-mail-note { margin:0; font-size:12px; line-height:1.8; opacity:.65; }
    .portfolio-resume-btn::after { content:""; position:absolute; inset:1px; z-index:-1; border-radius:11px; background:rgba(18,19,24,.74); backdrop-filter:blur(12px); }
    html.light .portfolio-resume-btn::after { background:rgba(255,255,255,.18); }
    @keyframes portfolio-resume-gradient { 0%,100%{background-position:0 50%} 50%{background-position:100% 50%} }
    .portfolio-frame-toast { position:fixed; inset-inline-end:22px; bottom:22px; z-index:100; padding:13px 17px; border-radius:10px; background:#292a2f; color:#fff; box-shadow:0 18px 45px rgba(0,0,0,.4); font:600 12px Manrope,sans-serif; }
    @media (max-width:1023px) {
      .portfolio-navbar-menu { display:inline-flex; }
      .portfolio-navbar-links { display:none!important; position:absolute; top:66px; inset-inline:20px; flex-direction:column; padding:10px!important; background:rgba(13,14,19,.96)!important; backdrop-filter:blur(18px); box-shadow:0 20px 50px rgba(0,0,0,.28); }
      .portfolio-navbar-links.open { display:flex!important; }
      .portfolio-navbar-links a { width:100%; text-align:start; }
      .portfolio-navbar-avatar { display:none!important; }
      .portfolio-navbar-actions > a[data-path="contact"] { display:none!important; }
      .portfolio-proof-row { flex-wrap:wrap; row-gap:12px!important; }
      .portfolio-metrics-grid { grid-template-columns:repeat(2,minmax(0,1fr))!important; gap:20px!important; }
      .portfolio-metrics-grid > div { min-width:0; padding:20px!important; }
      .portfolio-metrics-grid .font-display-hero { font-size:52px!important; line-height:58px!important; }
      .portfolio-metrics-grid .font-display-hero { direction:ltr; unicode-bidi:isolate; }
      .portfolio-about-grid { grid-template-columns:minmax(0,1fr)!important; }
      .portfolio-footer-grid { grid-template-columns:minmax(0,1fr)!important; gap:32px!important; }
      .portfolio-footer-grid > * { grid-column:auto!important; }
      .portfolio-carousel-stage { height:740px; }
      .portfolio-project-card { width:min(720px,76vw); min-height:480px; padding:26px; }
      .portfolio-project-card[data-position="previous"] { transform:translate(calc(-50% - 56vw),-50%) scale(.58); }
      .portfolio-project-card[data-position="next"] { transform:translate(calc(-50% + 56vw),-50%) scale(.58); }
    }
    @media (max-width:639px) {
      [class~="py-space-3xl"] { padding-top:64px!important; padding-bottom:64px!important; }
      .portfolio-navbar-inner { height:72px!important; padding-inline:20px!important; gap:8px!important; }
      .portfolio-navbar-brand { padding-inline-end:0; }
      .portfolio-navbar-brand::after { display:none; }
      .portfolio-navbar-actions { gap:6px!important; }
      .portfolio-navbar-actions > button { min-width:40px; padding-inline:10px!important; }
      .portfolio-hero-section { padding-top:44px!important; padding-bottom:64px!important; }
      .portfolio-hero-section h1 { font-size:38px!important; line-height:44px!important; letter-spacing:-.03em!important; }
      .portfolio-hero-section p { font-size:16px!important; line-height:25px!important; }
      .portfolio-hero-actions { display:grid!important; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px!important; width:100%!important; }
      .portfolio-hero-actions > :first-child { grid-column:1/-1; }
      .portfolio-hero-actions > * { width:100%!important; min-width:0; padding-inline:12px!important; white-space:nowrap; }
      .portfolio-proof-row { display:grid!important; grid-template-columns:minmax(0,1fr); gap:10px!important; }
      .portfolio-proof-row > div { min-width:0; }
      .portfolio-metrics-section { padding-inline:20px!important; }
      .portfolio-metrics-section > div { padding:14px!important; }
      .portfolio-metrics-grid { grid-template-columns:repeat(2,minmax(0,1fr))!important; gap:10px!important; }
      .portfolio-metrics-grid > div { padding:14px 6px!important; }
      .portfolio-metrics-grid .font-display-hero { font-size:38px!important; line-height:44px!important; }
      .portfolio-metrics-grid .font-title-lg { font-size:14px!important; line-height:19px!important; }
      .portfolio-metrics-grid .font-label-sm { font-size:9px!important; line-height:13px!important; letter-spacing:.03em!important; }
      .portfolio-about-grid > div { padding:20px!important; }
      .portfolio-code-toolbar > div:last-child { display:none!important; }
      .portfolio-code-canvas { padding:14px!important; font-size:10px!important; line-height:18px!important; }
      .portfolio-code-canvas .select-none { display:none!important; }
      .portfolio-code-canvas .flex-1 { min-width:max-content; }
      .portfolio-code-canvas .flex-1 > div { white-space:nowrap; }
      .portfolio-code-statusbar { padding:8px 12px!important; font-size:9px!important; }
      .portfolio-code-statusbar > div:last-child { display:none!important; }
      .portfolio-code-statusbar > div:first-child { width:100%; justify-content:space-between; }
      .portfolio-carousel-stage { height:780px; }
      .portfolio-project-card { width:calc(100vw - 40px); min-height:460px; padding:20px; border-radius:20px; gap:16px; }
      .portfolio-project-card[data-position="previous"] { opacity:0; transform:translate(calc(-50% - 92vw),-50%) scale(.9); pointer-events:none; }
      .portfolio-project-card[data-position="next"] { opacity:0; transform:translate(calc(-50% + 92vw),-50%) scale(.9); pointer-events:none; }
      .portfolio-project-card[data-position="active"] .portfolio-project-preview { height:170px; }
      .portfolio-project-preview .portfolio-project-credit { display:none; }
      .portfolio-project-credit-mobile { display:block; }
      .portfolio-project-actions { flex-direction:column; align-items:stretch; }
      .portfolio-project-actions a { justify-content:center; }
    }
    @media (prefers-reduced-motion:reduce) { .portfolio-code-window::after { display:none; } .portfolio-reveal { opacity:1; transform:none; transition:none; } .portfolio-resume-btn { animation:none; } }
  </style></head>`);

function OriginalPortfolio() {
  const frameRef = useRef(null);
  const initializedDocumentRef = useRef(null);
  const translationNodesRef = useRef([]);
  const [frameReady, setFrameReady] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => localStorage.getItem("ayatPortfolioLanguage") || "en");
  const [themeMode, setThemeMode] = useState(() => localStorage.getItem("ayatPortfolioTheme") || "dark");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const frameHtml = useMemo(prepareOriginalHtml, []);

  const getDocument = useCallback(() => frameRef.current?.contentDocument ?? null, []);

  const collectTranslationNodes = useCallback((frameDocument) => {
    const translationNodes = [];
    const walker = frameDocument.createTreeWalker(frameDocument.body, NodeFilter.SHOW_TEXT);
    let currentNode = walker.nextNode();
    while (currentNode) {
      const trimmedText = currentNode.nodeValue?.trim();
      const translationKey = trimmedText ? TEXT_KEY_BY_ENGLISH.get(trimmedText) : null;
      if (translationKey) {
        const leadingWhitespace = currentNode.nodeValue.match(/^\s*/)?.[0] ?? "";
        const trailingWhitespace = currentNode.nodeValue.match(/\s*$/)?.[0] ?? "";
        translationNodes.push({ node: currentNode, translationKey, leadingWhitespace, trailingWhitespace });
      }
      currentNode = walker.nextNode();
    }
    translationNodesRef.current = translationNodes;
  }, []);

  const applyLanguage = useCallback((language) => {
    const frameDocument = getDocument();
    if (!frameDocument) return;
    const dictionary = language === "ar" ? frameArDictionary : frameEnDictionary;
    frameDocument.documentElement.lang = language;
    frameDocument.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    translationNodesRef.current.forEach(({ node, translationKey, leadingWhitespace, trailingWhitespace }) => {
      node.nodeValue = `${leadingWhitespace}${dictionary[translationKey]}${trailingWhitespace}`;
    });
    const themeButton = frameDocument.querySelector('button[aria-label="Toggle Color Scheme"], button[aria-label="تبديل نظام الألوان"]');
    const languageButton = frameDocument.querySelector('button[aria-label="Switch Language"], button[aria-label="تبديل اللغة"]');
    const mobileMenuButton = frameDocument.querySelector(".portfolio-navbar-menu");
    const previousProjectButton = frameDocument.getElementById("prev-project-btn");
    const nextProjectButton = frameDocument.getElementById("next-project-btn");
    const previousProjectCard = frameDocument.getElementById("project-card-0");
    const nextProjectCard = frameDocument.getElementById("project-card-2");
    const directContactTitle = frameDocument.getElementById("portfolio-direct-contact-title");
    const telegramDescription = frameDocument.getElementById("portfolio-telegram-description");
    const resumeButton = frameDocument.getElementById("portfolio-resume-btn");
    const resumeButtonLabel = frameDocument.getElementById("portfolio-resume-label");
    const rtlProofLabel = frameDocument.getElementById("portfolio-rtl-proof");
    if (themeButton) themeButton.setAttribute("aria-label", language === "ar" ? "تبديل نظام الألوان" : "Toggle Color Scheme");
    if (languageButton) languageButton.setAttribute("aria-label", language === "ar" ? "تبديل اللغة" : "Switch Language");
    if (mobileMenuButton) mobileMenuButton.setAttribute("aria-label", language === "ar" ? "فتح قائمة التنقل" : "Open navigation menu");
    if (previousProjectButton) previousProjectButton.setAttribute("aria-label", dictionary.previousProject);
    if (nextProjectButton) nextProjectButton.setAttribute("aria-label", dictionary.nextProject);
    if (previousProjectCard) previousProjectCard.setAttribute("aria-label", dictionary.previousProject);
    if (nextProjectCard) nextProjectCard.setAttribute("aria-label", dictionary.nextProject);
    if (directContactTitle) directContactTitle.textContent = dictionary.directTelemetry;
    if (resumeButton) resumeButton.setAttribute("aria-label", dictionary.resume);
    if (resumeButtonLabel) resumeButtonLabel.textContent = dictionary.resume;
    const providerLabel = frameDocument.getElementById("contact-provider-label");
    if (providerLabel) providerLabel.textContent = dictionary.emailProvider;
    const providerSelect = frameDocument.getElementById("contact-provider");
    if (providerSelect) {
      providerSelect.options[0].textContent = dictionary.gmailProvider;
      providerSelect.options[1].textContent = dictionary.appProvider;
    }
    const providerHelp = frameDocument.getElementById("contact-provider-help");
    if (providerHelp) providerHelp.textContent = providerSelect?.value === "app" ? dictionary.appHelp : dictionary.gmailHelp;
    const draftHelp = frameDocument.getElementById("contact-draft-help");
    if (draftHelp) draftHelp.textContent = dictionary.draftHelp;
    const draftLink = frameDocument.getElementById("contact-draft-link");
    if (draftLink) draftLink.textContent = dictionary.openDraft;
    if (rtlProofLabel) {
      rtlProofLabel.innerHTML = language === "ar"
        ? 'دعم <bdi dir="ltr">RTL / LTR</bdi>'
        : 'Dual <bdi dir="ltr">RTL / LTR</bdi> Engine';
    }
    if (telegramDescription) {
      telegramDescription.innerHTML = language === "ar"
        ? 'رسالة مباشرة <bdi class="portfolio-contact-handle" dir="ltr">@eng_ayatnassar</bdi>'
        : 'Direct Message <bdi class="portfolio-contact-handle" dir="ltr">@eng_ayatnassar</bdi>';
    }
    const nameInput = frameDocument.getElementById("contact-name");
    const emailInput = frameDocument.getElementById("contact-email");
    const messageInput = frameDocument.getElementById("contact-message");
    if (nameInput) nameInput.placeholder = dictionary.fullNamePlaceholder;
    if (emailInput) emailInput.placeholder = dictionary.emailPlaceholder;
    if (messageInput) messageInput.placeholder = dictionary.scopePlaceholder;
  }, [getDocument]);

  const applyTheme = useCallback((theme) => {
    const frameDocument = getDocument();
    if (!frameDocument) return;
    frameDocument.documentElement.classList.toggle("dark", theme === "dark");
    frameDocument.documentElement.classList.toggle("light", theme === "light");
    const themeIcon = frameDocument.querySelector('button[aria-label*="Color Scheme"], button[aria-label="تبديل نظام الألوان"]')?.querySelector(".material-symbols-outlined");
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "light_mode" : "dark_mode";
  }, [getDocument]);

  const requestProjectChange = useCallback((targetIndex, direction = "next") => {
    const frameDocument = getDocument();
    const carouselWrapper = frameDocument?.getElementById("carousel-cards-wrapper");
    if (!carouselWrapper) return;
    carouselWrapper.dataset.direction = direction;
    setActiveProjectIndex(targetIndex);
  }, [getDocument]);

  const renderProjects = useCallback((projectIndex, language) => {
    const frameDocument = getDocument();
    if (!frameDocument) return;
    const carouselWrapper = frameDocument.getElementById("carousel-cards-wrapper");
    const projectCards = [...(carouselWrapper?.querySelectorAll(".portfolio-project-card") ?? [])];
    if (projectCards.length !== PROJECTS.length) return;
    carouselWrapper.dataset.activeIndex = String(projectIndex);

    projectCards.forEach((projectCard, dataIndex) => {
      const project = PROJECTS[dataIndex];
      let relativePosition = (dataIndex - projectIndex + PROJECTS.length) % PROJECTS.length;
      if (relativePosition > PROJECTS.length / 2) relativePosition -= PROJECTS.length;
      const positionName = relativePosition === 0
        ? "active"
        : relativePosition === -1
          ? "previous"
          : relativePosition === 1
            ? "next"
            : relativePosition < 0 ? "hidden-left" : "hidden-right";
      projectCard.dataset.position = positionName;
      projectCard.setAttribute("aria-hidden", String(positionName !== "active"));
      projectCard.tabIndex = ["active", "previous", "next"].includes(positionName) ? 0 : -1;
      projectCard.querySelector("[data-project-prefix]").textContent = language === "ar" ? "المشروع" : "Project";
      projectCard.querySelector("[data-project-number]").textContent = String(dataIndex + 1).padStart(2, "0");
      projectCard.querySelector("[data-project-type]").textContent = language === "ar" ? project.typeAr : project.typeEn;
      projectCard.querySelector("[data-project-title]").textContent = language === "ar" ? project.nameAr : project.nameEn;
      projectCard.querySelector("[data-project-description]").textContent = language === "ar" ? project.descriptionAr : project.descriptionEn;
      const previewImage = projectCard.querySelector(".portfolio-project-image");
      if (previewImage) previewImage.alt = language === "ar" ? project.nameAr : project.nameEn;
      projectCard.querySelectorAll("[data-project-credit]").forEach((creditLabel) => {
        creditLabel.textContent = language === "ar" ? frameArDictionary.projectCredit : frameEnDictionary.projectCredit;
      });
      projectCard.querySelector("[data-project-primary-action]").textContent = language === "ar" ? frameArDictionary.projectAction : frameEnDictionary.projectAction;
      projectCard.querySelector("[data-project-secondary-action]").textContent = language === "ar" ? frameArDictionary.sourceAction : frameEnDictionary.sourceAction;
      const technologyContainer = projectCard.querySelector("[data-project-tools]");
      technologyContainer.innerHTML = "";
      project.technologies.forEach((technologyName) => {
        const technologyBadge = frameDocument.createElement("span");
        technologyBadge.className = "portfolio-project-tool";
        technologyBadge.textContent = technologyName;
        technologyContainer.appendChild(technologyBadge);
      });
    });
    const activeCard = projectCards[projectIndex];
    if (activeCard) carouselWrapper.style.height = `${activeCard.offsetHeight + 48}px`;
    const dotsContainer = frameDocument.querySelector(".carousel-dot")?.parentElement;
    if (dotsContainer) {
      dotsContainer.innerHTML = "";
      PROJECTS.forEach((project, dotIndex) => {
        const dotButton = frameDocument.createElement("button");
        dotButton.type = "button";
        dotButton.className = dotIndex === projectIndex
          ? "carousel-dot w-8 h-2 rounded-full bg-primary transition-all duration-300"
          : "carousel-dot w-2 h-2 rounded-full bg-surface-container-highest transition-all duration-300";
        dotButton.setAttribute("aria-label", `${language === "ar" ? "المشروع" : "Project"} ${dotIndex + 1}`);
        dotButton.toggleAttribute("aria-current", dotIndex === projectIndex);
        dotButton.disabled = dotIndex === projectIndex;
        const forwardDistance = (dotIndex - projectIndex + PROJECTS.length) % PROJECTS.length;
        const backwardDistance = (projectIndex - dotIndex + PROJECTS.length) % PROJECTS.length;
        const navigationDirection = forwardDistance <= backwardDistance ? "next" : "previous";
        if (dotIndex !== projectIndex) {
          dotButton.addEventListener("click", () => requestProjectChange(dotIndex, navigationDirection));
        }
        dotsContainer.appendChild(dotButton);
      });
    }
  }, [getDocument, requestProjectChange]);

  const setupInteractions = useCallback((frameDocument) => {
    // Fragment links in srcDoc otherwise navigate the iframe to the parent URL.
    frameDocument.addEventListener("click", (event) => {
      const anchor = event.target.closest?.('a[href^="#"]');
      if (!anchor || event.defaultPrevented) return;
      const fragment = anchor.getAttribute("href").slice(1);
      event.preventDefault();
      if (!fragment) {
        frameDocument.defaultView.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = frameDocument.getElementById(decodeURIComponent(fragment));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    const header = frameDocument.querySelector("header");
    const navbarInner = header?.firstElementChild;
    const navbarBrand = navbarInner?.children[0];
    const navbarLinks = navbarInner?.querySelector("nav");
    const navbarActions = navbarInner?.lastElementChild;
    const navbarAvatar = navbarActions?.lastElementChild;
    header?.classList.add("portfolio-navbar");
    navbarInner?.classList.add("portfolio-navbar-inner");
    navbarBrand?.classList.add("portfolio-navbar-brand");
    navbarLinks?.classList.add("portfolio-navbar-links");
    navbarActions?.classList.add("portfolio-navbar-actions");
    navbarAvatar?.classList.add("portfolio-navbar-avatar");

    if (navbarLinks && navbarActions) {
      const mobileMenuButton = frameDocument.createElement("button");
      mobileMenuButton.type = "button";
      mobileMenuButton.className = "portfolio-navbar-menu";
      mobileMenuButton.setAttribute("aria-label", "Open navigation menu");
      mobileMenuButton.setAttribute("aria-expanded", "false");
      mobileMenuButton.innerHTML = '<span class="material-symbols-outlined text-[21px]">menu</span>';
      navbarActions.insertBefore(mobileMenuButton, navbarAvatar ?? null);
      mobileMenuButton.addEventListener("click", () => {
        const isOpen = navbarLinks.classList.toggle("open");
        mobileMenuButton.setAttribute("aria-expanded", String(isOpen));
        mobileMenuButton.querySelector("span").textContent = isOpen ? "close" : "menu";
      });
    }

    const mainElement = frameDocument.querySelector("main");
    mainElement?.querySelector("section")?.classList.add("portfolio-hero-section");
    const metricsValue = [...frameDocument.querySelectorAll("span")]
      .find((textElement) => textElement.textContent.trim() === "7+");
    const metricsSection = metricsValue?.closest("section");
    metricsSection?.classList.add("portfolio-metrics-section");
    metricsSection?.querySelector(".grid")?.classList.add("portfolio-metrics-grid");
    frameDocument.getElementById("about")?.querySelector(".grid")?.classList.add("portfolio-about-grid");
    frameDocument.querySelector("footer .grid")?.classList.add("portfolio-footer-grid");

    const codeCanvas = frameDocument.querySelector(".p-space-lg.font-mono");
    codeCanvas?.classList.add("portfolio-code-canvas");
    const codeWindow = codeCanvas?.closest(".rounded-2xl");
    codeWindow?.classList.add("portfolio-code-window");
    codeWindow?.firstElementChild?.classList.add("portfolio-code-toolbar");
    codeWindow?.lastElementChild?.classList.add("portfolio-code-statusbar");

    const projectCarouselWrapper = frameDocument.getElementById("carousel-cards-wrapper");
    if (projectCarouselWrapper) {
      projectCarouselWrapper.className = "portfolio-carousel-stage";
      projectCarouselWrapper.innerHTML = PROJECTS.map((project, projectIndex) => `
        <article class="portfolio-project-card project-slide" data-project-index="${projectIndex}" data-position="hidden-right">
          <div class="portfolio-project-preview">
            <img class="portfolio-project-image" src="${project.preview}" alt="" loading="lazy" width="1440" height="900" />
            <div class="portfolio-project-overlay">
              <span><span data-project-prefix></span> <span data-project-number></span></span>
              <span class="portfolio-project-demo">Frontend Demo</span>
            </div>
          </div>
          <div class="flex flex-col gap-space-sm">
            <span class="font-label-sm text-label-sm uppercase tracking-wider text-primary" data-project-type></span>
            <h3 class="font-headline-md text-headline-sm md:text-headline-md text-on-surface font-bold tracking-tight" data-project-title></h3>
            <p class="portfolio-project-description font-body-md text-body-md text-on-surface-variant" data-project-description></p>
            <div class="portfolio-project-tools" data-project-tools></div>
            <div class="portfolio-project-credit-mobile" data-project-credit></div>
          </div>
          <div class="portfolio-project-actions">
            <a class="inline-flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider font-semibold" href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" data-project-live><span data-project-primary-action></span><span class="material-symbols-outlined portfolio-directional-icon text-[18px]">open_in_new</span></a>
            <a class="inline-flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md uppercase tracking-wider" href="${project.sourceUrl}" target="_blank" rel="noopener noreferrer" data-project-source><span class="material-symbols-outlined text-[18px]">code</span><span data-project-secondary-action></span></a>
          </div>
        </article>
      `).join("");
      const updateCarouselHeight = () => {
        const activeCard = projectCarouselWrapper.querySelector('[data-position="active"]');
        if (activeCard) projectCarouselWrapper.style.height = `${activeCard.offsetHeight + 48}px`;
      };
      if (frameDocument.defaultView.ResizeObserver) {
        const carouselResizeObserver = new frameDocument.defaultView.ResizeObserver(updateCarouselHeight);
        projectCarouselWrapper.querySelectorAll(".portfolio-project-card").forEach((card) => carouselResizeObserver.observe(card));
      } else {
        frameDocument.defaultView.addEventListener("resize", updateCarouselHeight);
      }
      projectCarouselWrapper.querySelectorAll(".portfolio-project-card").forEach((projectCard) => {
        projectCard.addEventListener("click", (event) => {
          if (event.target.closest("a,button")) return;
          const targetIndex = Number(projectCard.dataset.projectIndex);
          const currentIndex = Number(projectCarouselWrapper.dataset.activeIndex || 0);
          if (targetIndex === currentIndex) return;
          const forwardDistance = (targetIndex - currentIndex + PROJECTS.length) % PROJECTS.length;
          const backwardDistance = (currentIndex - targetIndex + PROJECTS.length) % PROJECTS.length;
          requestProjectChange(targetIndex, forwardDistance <= backwardDistance ? "next" : "previous");
        });
        projectCard.addEventListener("keydown", (event) => {
          if ((event.key === "Enter" || event.key === " ") && projectCard.dataset.position !== "active") {
            event.preventDefault();
            projectCard.click();
          }
        });
      });
      projectCarouselWrapper.querySelectorAll('a[href="#contact"]').forEach((projectAction) => {
        projectAction.addEventListener("click", (event) => {
          event.preventDefault();
          frameDocument.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        });
      });
    }

    const directionalIconNames = new Set(["arrow_back", "arrow_forward", "chevron_left", "chevron_right", "open_in_new"]);
    frameDocument.querySelectorAll(".material-symbols-outlined").forEach((iconElement) => {
      const iconName = iconElement.textContent.trim();
      if (directionalIconNames.has(iconName)) iconElement.classList.add("portfolio-directional-icon");
      if (iconName === "verified") iconElement.parentElement?.classList.add("portfolio-check-row");
    });
    const rtlProofLabel = [...frameDocument.querySelectorAll("span")]
      .find((textElement) => textElement.textContent.trim() === "Dual RTL/LTR Engine");
    if (rtlProofLabel) {
      rtlProofLabel.id = "portfolio-rtl-proof";
      rtlProofLabel.classList.add("portfolio-no-wrap");
      rtlProofLabel.parentElement?.parentElement?.classList.add("portfolio-proof-row");
    }

    const heroActions = frameDocument.querySelector('main a[href="#featured-portfolio"]')?.parentElement;
    heroActions?.classList.add("portfolio-hero-actions");
    if (heroActions && !frameDocument.getElementById("portfolio-resume-btn")) {
      const resumeButton = frameDocument.createElement("a");
      resumeButton.href = resumeUrl;
      resumeButton.download = "AyatNassar-CV.pdf";
      resumeButton.id = "portfolio-resume-btn";
      resumeButton.className = "portfolio-resume-btn";
      resumeButton.setAttribute("aria-label", frameEnDictionary.resume);
      resumeButton.innerHTML = '<span class="material-symbols-outlined text-[19px]">description</span><span id="portfolio-resume-label">Resume</span>';
      const contactButton = heroActions.querySelector('a[href="#contact"]');
      heroActions.insertBefore(resumeButton, contactButton ?? null);
    }

    const contactSection = frameDocument.getElementById("contact");
    const whatsAppLink = contactSection?.querySelector('a[href^="https://wa.me"]');
    const telegramLink = contactSection?.querySelector('a[href^="https://t.me"]');
    const emailLink = contactSection?.querySelector('a[href^="mailto:"]');
    const instagramLink = contactSection?.querySelector('a[href*="instagram"]');
    whatsAppLink?.setAttribute("href", "https://wa.me/qr/CI2MTQ6ZVWOVF1");
    telegramLink?.setAttribute("href", "https://t.me/eng_ayatnassar");
    const telegramDescription = telegramLink?.querySelector(".font-body-sm");
    if (telegramDescription) telegramDescription.id = "portfolio-telegram-description";
    emailLink?.setAttribute("href", "mailto:ayatnassar24@gmail.com");
    instagramLink?.remove();

    const footerElement = frameDocument.querySelector("footer");
    const directContactTitle = [...(footerElement?.querySelectorAll("span") ?? [])]
      .find((titleElement) => titleElement.textContent.trim() === "Direct Contact");
    if (directContactTitle) directContactTitle.id = "portfolio-direct-contact-title";

    frameDocument.querySelectorAll("footer a").forEach((footerLink) => {
      const linkLabel = footerLink.textContent.trim();
      if (linkLabel === "WhatsApp") {
        footerLink.href = "https://wa.me/qr/CI2MTQ6ZVWOVF1";
        footerLink.target = "_blank";
        footerLink.rel = "noopener noreferrer";
      } else if (linkLabel === "Telegram") {
        footerLink.href = "https://t.me/eng_ayatnassar";
        footerLink.target = "_blank";
        footerLink.rel = "noopener noreferrer";
      } else if (linkLabel === "Email") {
        footerLink.href = "mailto:ayatnassar24@gmail.com";
      } else if (linkLabel === "GitHub") {
        footerLink.href = "https://github.com/eng-ayatnassar";
        footerLink.target = "_blank";
        footerLink.rel = "noopener noreferrer";
      } else if (linkLabel === "LinkedIn") {
        footerLink.remove();
      }
    });

    const revealObserver = frameDocument.defaultView.IntersectionObserver && new frameDocument.defaultView.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    frameDocument.querySelectorAll("main section").forEach((section) => {
      section.classList.add("portfolio-reveal");
      if (revealObserver) revealObserver.observe(section);
      else section.classList.add("is-visible");
    });

    frameDocument.querySelector('button[aria-label="Toggle Color Scheme"]')?.addEventListener("click", () => {
      setThemeMode((currentTheme) => currentTheme === "dark" ? "light" : "dark");
    });
    frameDocument.querySelector('button[aria-label="Switch Language"]')?.addEventListener("click", () => {
      setCurrentLanguage((currentLang) => currentLang === "en" ? "ar" : "en");
    });
    frameDocument.querySelectorAll("[data-path]").forEach((navigationItem) => {
      navigationItem.addEventListener("click", (event) => {
        event.preventDefault();
        const path = navigationItem.getAttribute("data-path");
        const targetId = path === "portfolio" ? "featured-portfolio" : path;
        frameDocument.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        navbarLinks?.classList.remove("open");
        const mobileMenuButton = frameDocument.querySelector(".portfolio-navbar-menu");
        mobileMenuButton?.setAttribute("aria-expanded", "false");
        const mobileMenuIcon = mobileMenuButton?.querySelector("span");
        if (mobileMenuIcon) mobileMenuIcon.textContent = "menu";
        navbarLinks?.querySelectorAll("a").forEach((navbarLink) => {
          const isActive = navbarLink.getAttribute("data-path") === path;
          navbarLink.toggleAttribute("aria-current", isActive);
          navbarLink.classList.toggle("bg-surface-container-high", isActive);
          navbarLink.classList.toggle("text-on-surface", isActive);
          navbarLink.classList.toggle("text-on-surface-variant", !isActive);
        });
      });
    });
    frameDocument.querySelectorAll("[data-path]").forEach((navigationItem) => {
      const path = navigationItem.getAttribute("data-path");
      navigationItem.setAttribute("href", `#${path === "portfolio" ? "featured-portfolio" : path}`);
    });
    frameDocument.querySelectorAll(".skills-tab-btn").forEach((filterButton) => {
      filterButton.addEventListener("click", () => {
        const activeTarget = filterButton.getAttribute("data-target");
        frameDocument.querySelectorAll(".skills-tab-btn").forEach((button) => {
          button.classList.toggle("bg-surface-container-high", button === filterButton);
          button.classList.toggle("text-on-surface", button === filterButton);
          button.classList.toggle("text-on-surface-variant", button !== filterButton);
        });
        frameDocument.querySelectorAll(".skill-category-card").forEach((skillCard) => {
          skillCard.style.display = activeTarget === "all" || skillCard.getAttribute("data-category") === activeTarget ? "flex" : "none";
        });
      });
    });
    const handlePreviousProject = () => {
      requestProjectChange((currentIndex) => (currentIndex - 1 + PROJECTS.length) % PROJECTS.length, "previous");
    };
    const handleNextProject = () => {
      requestProjectChange((currentIndex) => (currentIndex + 1) % PROJECTS.length, "next");
    };
    frameDocument.getElementById("prev-project-btn")?.addEventListener("click", handlePreviousProject);
    frameDocument.getElementById("next-project-btn")?.addEventListener("click", handleNextProject);

    const makeSideCardInteractive = (projectCard, navigationHandler) => {
      if (!projectCard) return;
      projectCard.setAttribute("role", "button");
      projectCard.tabIndex = 0;
      projectCard.addEventListener("click", navigationHandler);
      projectCard.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          navigationHandler();
        }
      });
    };
    makeSideCardInteractive(frameDocument.getElementById("project-card-0"), handlePreviousProject);
    makeSideCardInteractive(frameDocument.getElementById("project-card-2"), handleNextProject);

    frameDocument.addEventListener("keydown", (event) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(event.target?.tagName)) return;
      const isRtl = frameDocument.documentElement.dir === "rtl";
      if (event.key === "ArrowLeft") isRtl ? handleNextProject() : handlePreviousProject();
      if (event.key === "ArrowRight") isRtl ? handlePreviousProject() : handleNextProject();
    });

    const carouselWrapper = frameDocument.getElementById("carousel-cards-wrapper");
    let swipeStartX = null;
    carouselWrapper?.addEventListener("touchstart", (event) => {
      swipeStartX = event.touches[0]?.clientX ?? null;
    }, { passive: true });
    carouselWrapper?.addEventListener("touchend", (event) => {
      if (swipeStartX === null) return;
      const swipeDistance = (event.changedTouches[0]?.clientX ?? swipeStartX) - swipeStartX;
      swipeStartX = null;
      if (Math.abs(swipeDistance) < 45) return;
      const isRtl = frameDocument.documentElement.dir === "rtl";
      const movedTowardNext = isRtl ? swipeDistance > 0 : swipeDistance < 0;
      movedTowardNext ? handleNextProject() : handlePreviousProject();
    }, { passive: true });
    const contactForm = frameDocument.getElementById("portfolio-contact-form");
    if (contactForm) {
      const providerField = frameDocument.createElement("div");
      providerField.className = "portfolio-mail-field";
      providerField.innerHTML = '<label for="contact-provider" class="portfolio-mail-label" id="contact-provider-label"></label><div class="portfolio-mail-control"><span class="material-symbols-outlined" aria-hidden="true">mail</span><select id="contact-provider" aria-describedby="contact-provider-help contact-draft-help"><option value="gmail"></option><option value="app"></option></select><span class="material-symbols-outlined" aria-hidden="true">expand_more</span></div><p class="portfolio-mail-help" id="contact-provider-help"></p><p class="portfolio-mail-note" id="contact-draft-help"></p>';
      providerField.querySelector("select").addEventListener("change", (event) => {
        const dictionary = frameDocument.documentElement.lang === "ar" ? frameArDictionary : frameEnDictionary;
        providerField.querySelector("#contact-provider-help").textContent = event.target.value === "app" ? dictionary.appHelp : dictionary.gmailHelp;
      });
      contactForm.querySelector("#submit-btn")?.parentElement.before(providerField);
    }
    contactForm?.removeAttribute("onsubmit");
    contactForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      const activeLanguage = frameDocument.documentElement.lang === "ar" ? "ar" : "en";
      const dictionary = activeLanguage === "ar" ? frameArDictionary : frameEnDictionary;
      const successBanner = frameDocument.getElementById("form-success-banner");
      const form = event.currentTarget;
      const draft = createContactDraft({
        name: form.querySelector("#contact-name").value.trim(),
        email: form.querySelector('input[type="email"]').value.trim(),
        service: form.querySelector("#contact-service").selectedOptions[0].textContent.trim(),
        message: form.querySelector("#contact-message").value.trim(),
      }, activeLanguage, form.querySelector("#contact-provider").value);
      if (successBanner) {
        successBanner.classList.remove("hidden");
        successBanner.setAttribute("role", "status");
        const successText = successBanner.querySelector("span:last-of-type");
        if (successText) successText.textContent = dictionary.success;
        let draftLink = frameDocument.getElementById("contact-draft-link");
        if (!draftLink) {
          draftLink = frameDocument.createElement("a");
          draftLink.id = "contact-draft-link";
          draftLink.style.cssText = "display:block;text-decoration:underline;flex-shrink:0";
          successBanner.style.flexWrap = "wrap";
          successBanner.appendChild(draftLink);
        }
        draftLink.href = draft;
        draftLink.target = "_blank";
        draftLink.rel = "noopener noreferrer";
        draftLink.textContent = dictionary.openDraft;
      }
      if (form.querySelector("#contact-provider").value === "gmail") {
        window.open(draft, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = draft;
      }
    });
  }, [requestProjectChange]);

  const handleFrameLoad = useCallback(() => {
    const frameDocument = getDocument();
    if (!frameDocument?.body || frameDocument.readyState === "loading" || !frameDocument.getElementById("carousel-cards-wrapper")) return false;
    if (initializedDocumentRef.current === frameDocument) return true;
    collectTranslationNodes(frameDocument);
    setupInteractions(frameDocument);
    initializedDocumentRef.current = frameDocument;
    setFrameReady(true);
    return true;
  }, [collectTranslationNodes, getDocument, setupInteractions]);

  useEffect(() => {
    let animationFrame;
    const initializeWhenParsed = () => {
      if (!handleFrameLoad()) animationFrame = window.requestAnimationFrame(initializeWhenParsed);
    };
    initializeWhenParsed();
    return () => window.cancelAnimationFrame(animationFrame);
  }, [handleFrameLoad]);

  useEffect(() => {
    localStorage.setItem("ayatPortfolioLanguage", currentLanguage);
    if (frameReady) {
      applyLanguage(currentLanguage);
      renderProjects(activeProjectIndex, currentLanguage);
    }
  }, [activeProjectIndex, applyLanguage, currentLanguage, frameReady, renderProjects]);

  useEffect(() => {
    localStorage.setItem("ayatPortfolioTheme", themeMode);
    if (frameReady) applyTheme(themeMode);
  }, [applyTheme, frameReady, themeMode]);

  return (
    <iframe
      ref={frameRef}
      className="original-design-frame"
      srcDoc={frameHtml}
      title={currentLanguage === "ar" ? "ملف آيات نصّار" : "Ayat Nassar Portfolio"}
      onLoad={handleFrameLoad}
    />
  );
}

export default OriginalPortfolio;
