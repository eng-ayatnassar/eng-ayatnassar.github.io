import nawahPreview from "./assets/projects/nawah.jpg";
import auraclinicPreview from "./assets/projects/auraclinic.jpg";
import riwaPreview from "./assets/projects/riwa.jpg";
import malathPreview from "./assets/projects/malath.jpg";
import rashfaPreview from "./assets/projects/rashfa.jpg";
import rythmPreview from "./assets/projects/rythm.jpg";
import taskflowPreview from "./assets/projects/taskflow.jpg";

export const PROJECTS = [
  { ...{
  "id": "nawah",
  "nameEn": "NAWAH Tech Academy",
  "nameAr": "أكاديمية نواة التقنية",
  "typeEn": "Bilingual learning platform",
  "typeAr": "منصة تعليم ثنائية اللغة",
  "descriptionEn": "A bilingual learning experience that connects course discovery with an interactive classroom, lesson completion, and locally saved progress. Designed around clear navigation, responsive layouts, and accessible RTL/LTR interactions.",
  "descriptionAr": "تجربة تعليمية تربط استكشاف المسارات بفصل تفاعلي وتسجيل إنجاز الدروس وحفظ التقدّم محلياً، ضمن واجهة متجاوبة تدعم العربية والإنجليزية وتنقّلاً واضحاً بين المحتوى.",
  "technologies": [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Vite"
  ],
  "demoUrl": "https://eng-ayatnassar.github.io/nawah-tech-academy/",
  "sourceUrl": "https://github.com/eng-ayatnassar/nawah-tech-academy"
}, preview: nawahPreview },
  { ...{
  "id": "auraclinic",
  "nameEn": "AuraClinic Dashboard",
  "nameAr": "لوحة أورا كلينك",
  "typeEn": "Clinic operations dashboard",
  "typeAr": "لوحة إدارة مواعيد عيادة",
  "descriptionEn": "A clinic dashboard that brings appointment scheduling, status filters, search, and CSV export into one clear workspace. Responsive appointment cards replace the desktop table on mobile, with full Arabic and English layouts.",
  "descriptionAr": "لوحة تحكم تجمع إنشاء المواعيد والبحث وتصفية الحالات وتصدير CSV في مساحة عمل واضحة، مع بطاقات مواعيد مناسبة للموبايل بدلاً من الجدول ودعم كامل لاتجاهي العربية والإنجليزية.",
  "technologies": [
    "HTML5",
    "JavaScript",
    "Tailwind CSS",
    "Vite"
  ],
  "demoUrl": "https://eng-ayatnassar.github.io/auraclinic-dashboard/",
  "sourceUrl": "https://github.com/eng-ayatnassar/auraclinic-dashboard"
}, preview: auraclinicPreview },
  { ...{
  "id": "riwa",
  "nameEn": "RIWA Abaya Atelier",
  "nameAr": "دار رِواء للعباءات",
  "typeEn": "Luxury commerce experience",
  "typeAr": "تجربة تسوّق عباءات فاخرة",
  "descriptionEn": "A refined abaya storefront focused on product detail and a considered shopping journey. Visitors can explore collections, select sizes, switch display currencies, manage a persistent cart, and complete a clearly simulated checkout.",
  "descriptionAr": "واجهة متجر عباءات تمنح تفاصيل المنتج مساحة بارزة، وتغطي استعراض المجموعة واختيار المقاس وتبديل العملة وإدارة سلة محفوظة محلياً، وصولاً إلى إتمام طلب تجريبي بواجهة عربية وإنجليزية.",
  "technologies": [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Vite"
  ],
  "demoUrl": "https://eng-ayatnassar.github.io/riwa-abaya-store/",
  "sourceUrl": "https://github.com/eng-ayatnassar/riwa-abaya-store"
}, preview: riwaPreview },
  { ...{
  "id": "malath",
  "nameEn": "MALATH Private Stays",
  "nameAr": "مَلاذ للإقامات الخاصة",
  "typeEn": "Villa discovery and booking UI",
  "typeAr": "اكتشاف فلل وحجز تجريبي",
  "descriptionEn": "A villa discovery experience that pairs editorial imagery with practical search and booking controls. It includes image carousels, saved favorites, an illustrative interactive map, and a reservation preview that updates pricing by stay length.",
  "descriptionAr": "تجربة لاكتشاف الفلل تجمع العرض البصري مع البحث والتصفية ومعارض الصور والمفضلة، وتضم خريطة تفاعلية توضيحية ونافذة حجز تجريبية تحدّث التكلفة حسب عدد الليالي.",
  "technologies": [
    "React",
    "JavaScript",
    "CSS",
    "Vite"
  ],
  "demoUrl": "https://eng-ayatnassar.github.io/malath-villa-booking/",
  "sourceUrl": "https://github.com/eng-ayatnassar/malath-villa-booking"
}, preview: malathPreview },
  { ...{
  "id": "rashfa",
  "nameEn": "RASHFA Specialty Coffee",
  "nameAr": "رَشفة للقهوة المختصة",
  "typeEn": "Customizable coffee ordering UI",
  "typeAr": "تجربة طلب قهوة ومخبوزات",
  "descriptionEn": "A bilingual ordering interface that connects a specialty cafe identity with a straightforward purchase flow. The experience covers menu search, drink customization, live totals, persistent cart editing, and a simulated pickup confirmation.",
  "descriptionAr": "تجربة طلب رقمية تربط هوية المقهى بتصفّح منيو واضح وتخصيص المشروبات وحساب السعر وإدارة الكميات في سلة محفوظة محلياً، ثم تأكيد طلب تجريبي مناسب للموبايل وباللغتين.",
  "technologies": [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Vite"
  ],
  "demoUrl": "https://eng-ayatnassar.github.io/rashfa-coffee/",
  "sourceUrl": "https://github.com/eng-ayatnassar/rashfa-coffee"
}, preview: rashfaPreview },
  { ...{
  "id": "rythm",
  "nameEn": "Rythm Habit Tracker",
  "nameAr": "إيقاع لتتبّع العادات",
  "typeEn": "Daily habits and progress UI",
  "typeAr": "تنظيم العادات ومتابعة الإنجاز",
  "descriptionEn": "A calm habit-tracking interface for organizing routines and visualizing daily progress. Users can create, categorize, search, and complete habits, with locally saved state and a bilingual overview of consistency and weekly activity.",
  "descriptionAr": "واجهة هادئة لتنظيم الروتين ومتابعة الإنجاز اليومي، تتيح إنشاء العادات وتصنيفها والبحث فيها وتحديد اكتمالها، مع حفظ البيانات محلياً وعرض مؤشرات الاستمرارية والنشاط الأسبوعي باللغتين.",
  "technologies": [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Vite"
  ],
  "demoUrl": "https://eng-ayatnassar.github.io/rythm-habit-tracker/",
  "sourceUrl": "https://github.com/eng-ayatnassar/rythm-habit-tracker"
}, preview: rythmPreview },
  { ...{
  "id": "taskflow",
  "nameEn": "TaskFlow AI Workspace",
  "nameAr": "مساحة عمل TaskFlow",
  "typeEn": "Bilingual SaaS landing page",
  "typeAr": "صفحة تسويقية لمنصة SaaS",
  "descriptionEn": "A SaaS landing page presenting a concept for AI-assisted workflow management. It combines a product preview with interactive billing and currency controls, FAQ accordions, and illustrative signup flows in responsive Arabic and English layouts.",
  "descriptionAr": "صفحة هبوط تصوّر منصة لإدارة العمل بمساعدة الذكاء الاصطناعي، وتجمع عرض المزايا مع تسعير تفاعلي حسب الفوترة والعملة وأسئلة شائعة ونماذج تسجيل توضيحية ضمن تصميم متجاوب باللغتين.",
  "technologies": [
    "HTML5",
    "JavaScript",
    "Tailwind CSS",
    "Vite"
  ],
  "demoUrl": "https://eng-ayatnassar.github.io/taskflow-saas/",
  "sourceUrl": "https://github.com/eng-ayatnassar/taskflow-saas"
}, preview: taskflowPreview }
];
