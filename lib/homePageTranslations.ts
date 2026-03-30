/** Homepage (export layout) — English & Arabic copy. Imported into main translations bundle. */

export interface HomePageRow {
  title: string;
  description: string;
}

export interface HomePageCustomerBlock {
  title: string;
  description: string;
  pointsTitle: string;
  points: string[];
}

export interface HomePageFaqRow {
  question: string;
  answer: string;
}

export interface HomePageTranslations {
  hero: {
    h1Before: string;
    h1Brand: string;
    body: string;
    bannerAlt: string;
    customers: string;
    contractors: string;
    consultants: string;
    suppliers: string;
  };
  video: {
    titleLine1: string;
    titleAccent: string;
    posterAlt: string;
    playLabel: string;
  };
  journeyVisual: {
    eyebrow: string;
    h2Before: string;
    h2Accent: string;
    body: string;
    steps: HomePageRow[];
  };
  featuresGrid: {
    eyebrow: string;
    h2Line1: string;
    h2Accent: string;
    body: string;
    items: HomePageRow[];
  };
  customerFeatures: {
    blocks: HomePageCustomerBlock[];
  };
  providerFeatures: {
    title: string;
    description: string;
    pointsTitle: string;
    points: string[];
  };
  providerCta: {
    eyebrow: string;
    h2: string;
    body: string;
    cta: string;
  };
  help: {
    eyebrow: string;
    h2Before: string;
    h2Accent: string;
    faqSectionTitle: string;
    needMoreTitle: string;
    needMoreBody: string;
    emailTitle: string;
    emailAddress: string;
    chatTitle: string;
    chatDetail: string;
    faqs: HomePageFaqRow[];
  };
  downloadCta: {
    h2Line1: string;
    h2Line2Before: string;
    h2Brand: string;
    body: string;
    downloadNow: string;
    requestService: string;
    compareQuotes: string;
    trackProgress: string;
    phoneAlt: string;
    appleAlt: string;
    googleAlt: string;
  };
}

export const homePageEn: HomePageTranslations = {
  hero: {
    h1Before: "Build Smarter with",
    h1Brand: "Inchaa",
    body: "Inchaa is a digital platform that connects customers with verified contractors and consultants. Find trusted professionals, request quotations, and manage projects in one seamless experience.",
    bannerAlt: "Inchaa app and construction platform preview",
    customers: "Customers",
    contractors: "Contractors",
    consultants: "Consultants",
    suppliers: "Suppliers",
  },
  video: {
    titleLine1: "One Platform Connecting Everyone in the",
    titleAccent: "Construction Ecosystem",
    posterAlt:
      "Active construction site with cranes and structural work — representing the Inchaa construction ecosystem",
    playLabel: "Play video about the Inchaa platform",
  },
  journeyVisual: {
    eyebrow: "How It Works",
    h2Before: "Your Project Journey",
    h2Accent: "Made Simple",
    body: "Streamlined steps to get your project from idea to done.",
    steps: [
      {
        title: "Post Your Request",
        description: "Clarify project details with detailed documents.",
      },
      {
        title: "Get Multiple Quotes",
        description: "Receive competitive quotes from verified contractors.",
      },
      {
        title: "Compare & Choose",
        description: "Select the best fit based on price and reviews.",
      },
      {
        title: "Manage & Track",
        description: "Track progress and handle payments securely.",
      },
    ],
  },
  featuresGrid: {
    eyebrow: "Features",
    h2Line1: "Everything You Need,",
    h2Accent: "All in One Place",
    body: "Powerful tools designed to streamline your construction journey from start to finish.",
    items: [
      {
        title: "Verified Professionals",
        description: "Access contractors and consultants with verified credentials.",
      },
      {
        title: "Real-time Notifications",
        description: "Stay informed with instant updates on quotes and project status.",
      },
      {
        title: "Secure Document Uploads",
        description: "Upload and share project documents with end-to-end security.",
      },
      {
        title: "Quote Comparison",
        description: "Compare quotations side-by-side with transparent pricing.",
      },
      {
        title: "Ratings & Reviews",
        description: "Make informed decisions based on verified user feedback.",
      },
      {
        title: "Project Management",
        description: "Track all your properties and projects in one dashboard.",
      },
    ],
  },
  customerFeatures: {
    blocks: [
      {
        title: "Find Verified Professionals",
        description:
          "Discover trusted contractors and consultants — all verified before being listed. Inchaa helps you find the right professionals based on real ratings and services offered.",
        pointsTitle: "What you can do",
        points: [
          "Browse verified service providers by category",
          "View ratings, reviews, and past performance",
          "Filter by location, availability, and services",
          "Shortlist professionals with confidence",
          "Avoid unverified or unreliable providers",
        ],
      },
      {
        title: "Request & Compare Quotations",
        description:
          "Create a project, share your requirements, and request multiple quotations at once. Compare offers clearly before making the best decision.",
        pointsTitle: "What you can do",
        points: [
          "Create projects with documents and instructions",
          "Request quotes from multiple providers",
          "Compare pricing, scope, and timelines side by side",
          "Ask questions before accepting a quotation",
          "Choose the best value, not just the lowest price",
        ],
      },
      {
        title: "Manage Project Documentation",
        description:
          "Track every project from quotation to completion without scattered messages or paperwork. Inchaa keeps everything organized and accessible.",
        pointsTitle: "What you can do",
        points: [
          "Track project status and progress updates",
          "View all quotations and decisions in one dashboard",
          "Access documents, notes, and communications",
          "Keep full visibility across all your properties",
        ],
      },
    ],
  },
  providerFeatures: {
    title: "What service providers can do",
    description:
      "Get discovered by customers who need verified contractors and consultants. Inchaa helps you showcase your services, win work, and manage relationships professionally.",
    pointsTitle: "What you can do",
    points: [
      "Get listed and discovered by customers actively searching for services",
      "Receive clear project requirements and quotation requests",
      "Submit quotations professionally and track responses",
      "Manage projects, status updates, and customer communication from one portal",
    ],
  },
  providerCta: {
    eyebrow: "For Service Providers (Web Portal Experience)",
    h2: "Get discovered. Win more projects. Work smarter.",
    body: "Inchaa helps service providers grow their business by connecting them directly with customers looking for verified professionals.",
    cta: "Join as Provider",
  },
  help: {
    eyebrow: "Help & Support",
    h2Before: "We're Here to Help You",
    h2Accent: "Succeed",
    faqSectionTitle: "Frequently Asked Questions",
    needMoreTitle: "Need More Help?",
    needMoreBody: "Our onboarding team is ready to assist you with any questions.",
    emailTitle: "Email Support",
    emailAddress: "support@inchaa.com",
    chatTitle: "In-App Chat",
    chatDetail: "Available 24/7",
    faqs: [
      {
        question: "Can I have multiple accounts?",
        answer:
          "No. Each user can create only one Inchaa account per phone number. If you need another account, you must use a different mobile number.",
      },
      {
        question: "How do I update my phone number?",
        answer:
          "You can update your phone number from My Profile → Edit Profile. After updating, the changes will be saved to your Inchaa account.",
      },
      {
        question: "How can I delete my Inchaa account?",
        answer:
          "Go to Account → Delete Account and confirm the request. Account deletion will be completed after Email OTP verification.",
      },
      {
        question: "How do I contact customer support?",
        answer:
          "You can contact our support team from Help & Support in the app. You can also email us at support@inchaa.com.",
      },
      {
        question: "How do I change the app language?",
        answer:
          "Go to Account → Language and choose English or Arabic. The app will update based on your selected language.",
      },
    ],
  },
  downloadCta: {
    h2Line1: "Start Building",
    h2Line2Before: "Smarter with",
    h2Brand: "Inchaa",
    body: "Your complete platform for managing projects, quotes and professionals.",
    downloadNow: "Download Now",
    requestService: "Request Service",
    compareQuotes: "Compare Quotes",
    trackProgress: "Track Progress",
    phoneAlt: "Inchaa mobile app on a phone",
    appleAlt: "Download on the App Store",
    googleAlt: "Get it on Google Play",
  },
};

export const homePageAr: HomePageTranslations = {
  hero: {
    h1Before: "ابنِ بذكاء مع",
    h1Brand: "إنشاء",
    body: "إنشاء منصة رقمية تربط العملاء بالمقاولين والاستشاريين الموثّقين. اعثر على محترفين موثوقين، اطلب عروض الأسعار، وأدر مشاريعك في تجربة واحدة سلسة.",
    bannerAlt: "معاينة تطبيق إنشاء ومنصة البناء",
    customers: "العملاء",
    contractors: "المقاولون",
    consultants: "الاستشاريون",
    suppliers: "الموردون",
  },
  video: {
    titleLine1: "منصة واحدة تربط الجميع في",
    titleAccent: "منظومة البناء",
    posterAlt:
      "موقع بناء نشط مع رافعات وأعمال هيكلية — يمثل منظومة البناء في إنشاء",
    playLabel: "تشغيل فيديو عن منصة إنشاء",
  },
  journeyVisual: {
    eyebrow: "كيف يعمل",
    h2Before: "رحلة مشروعك",
    h2Accent: "ببساطة",
    body: "خطوات مبسطة لتحويل فكرتك إلى مشروع منجز.",
    steps: [
      {
        title: "قدّم طلبك",
        description: "وضّح تفاصيل المشروع مع المستندات المطلوبة.",
      },
      {
        title: "احصل على عروض متعددة",
        description: "استقبل عروض أسعار تنافسية من مقاولين موثّقين.",
      },
      {
        title: "قارن واختر",
        description: "اختر الأنسب بناءً على السعر والمراجعات.",
      },
      {
        title: "أدر وتابع",
        description: "تابع التقدم وتعامل مع المدفوعات بأمان.",
      },
    ],
  },
  featuresGrid: {
    eyebrow: "المزايا",
    h2Line1: "كل ما تحتاجه،",
    h2Accent: "في مكان واحد",
    body: "أدوات قوية تسهّل رحلة البناء من البداية إلى النهاية.",
    items: [
      {
        title: "محترفون موثّقون",
        description: "وصول إلى مقاولين واستشاريين بمؤهلات موثّقة.",
      },
      {
        title: "إشعارات فورية",
        description: "ابقَ على اطلاع بآخر تحديثات العروض وحالة المشروع.",
      },
      {
        title: "رفع مستندات آمن",
        description: "ارفع وشارك مستندات المشروع بأمان من طرف إلى طرف.",
      },
      {
        title: "مقارنة العروض",
        description: "قارن عروض الأسعار جنباً إلى جنب بشفافية في التسعير.",
      },
      {
        title: "التقييمات والمراجعات",
        description: "اتخذ قرارات مستنيرة بناءً على آراء مستخدمين موثّقة.",
      },
      {
        title: "إدارة المشاريع",
        description: "تتبع جميع عقاراتك ومشاريعك من لوحة تحكم واحدة.",
      },
    ],
  },
  customerFeatures: {
    blocks: [
      {
        title: "اعثر على محترفين موثّقين",
        description:
          "اكتشف مقاولين واستشاريين موثوقين — يُراجعون جميعاً قبل الإدراج. تساعدك إنشاء على إيجاد المحترف المناسب بناءً على التقييمات والخدمات الفعلية.",
        pointsTitle: "ما يمكنك فعله",
        points: [
          "تصفح مزوّدي الخدمة الموثّقين حسب الفئة",
          "اطلع على التقييمات والمراجعات والأداء السابق",
          "صفِّ حسب الموقع والتوفر والخدمات",
          "أضف محترفين إلى قائمة مختصرة بثقة",
          "تجنب مزوّدي خدمة غير موثّقين أو غير موثوقين",
        ],
      },
      {
        title: "اطلب وقارن عروض الأسعار",
        description:
          "أنشئ مشروعاً، شارك متطلباتك، واطلب عروض أسعار متعددة دفعة واحدة. قارن العروض بوضوح قبل اتخاذ أفضل قرار.",
        pointsTitle: "ما يمكنك فعله",
        points: [
          "أنشئ مشاريع مع مستندات وتعليمات",
          "اطلب عروض أسعار من عدة مزوّدين",
          "قارن السعر والنطاق والجداول الزمنية جنباً إلى جنب",
          "اطرح أسئلة قبل قبول عرض سعر",
          "اختر أفضل قيمة، وليس أقل سعر فقط",
        ],
      },
      {
        title: "إدارة وثائق المشروع",
        description:
          "تابع كل مشروع من عرض السعر حتى الإنجاز دون رسائل متفرقة أو أوراق مبعثرة. تحتفظ إنشاء بكل شيء منظماً وسهل الوصول.",
        pointsTitle: "ما يمكنك فعله",
        points: [
          "تابع حالة المشروع وتحديثات التقدم",
          "اعرض جميع عروض الأسعار والقرارات في لوحة واحدة",
          "الوصول إلى المستندات والملاحظات والمراسلات",
          "احتفظ برؤية كاملة لجميع عقاراتك",
        ],
      },
    ],
  },
  providerFeatures: {
    title: "ما يمكن لمزوّدي الخدمة فعله",
    description:
      "لتُكتشف من قبل العملاء الذين يحتاجون مقاولين واستشاريين موثّقين. تساعدك إنشاء على عرض خدماتك، كسب المشاريع، وإدارة العلاقات باحترافية.",
    pointsTitle: "ما يمكنك فعله",
    points: [
      "أُدرج ويُكتشف من قبل عملاء يبحثون بنشاط عن الخدمات",
      "استقبل متطلبات مشاريع واضحة وطلبات عروض أسعار",
      "قدّم عروض أسعار باحترافية وتتبع الردود",
      "أدر المشاريع وتحديثات الحالة وتواصل العملاء من بوابة واحدة",
    ],
  },
  providerCta: {
    eyebrow: "لمزوّدي الخدمة (تجربة البوابة الإلكترونية)",
    h2: "انطلق للظهور. اربح مشاريع أكثر. اعمل بذكاء.",
    body: "تساعد إنشاء مزوّدي الخدمة على تنمية أعمالهم بربطهم مباشرة بالعملاء الباحثين عن محترفين موثّقين.",
    cta: "انضم كمزوّد خدمة",
  },
  help: {
    eyebrow: "المساعدة والدعم",
    h2Before: "نحن هنا لمساعدتك على",
    h2Accent: "النجاح",
    faqSectionTitle: "الأسئلة الشائعة",
    needMoreTitle: "تحتاج مساعدة إضافية؟",
    needMoreBody: "فريق الإرشاد لدينا جاهز لمساعدتك في أي استفسار.",
    emailTitle: "الدعم عبر البريد",
    emailAddress: "support@inchaa.com",
    chatTitle: "الدردشة داخل التطبيق",
    chatDetail: "متاح 24/7",
    faqs: [
      {
        question: "هل يمكنني امتلاك أكثر من حساب؟",
        answer:
          "لا. يمكن لكل مستخدم امتلاك حساب واحد على إنشاء لكل رقم هاتف. إذا احتجت حساباً آخر، استخدم رقم جوال مختلف.",
      },
      {
        question: "كيف أحدّث رقم هاتفي؟",
        answer:
          "يمكنك تحديث رقم هاتفك من ملفي الشخصي ← تعديل الملف. بعد التحديث تُحفظ التغييرات في حسابك.",
      },
      {
        question: "كيف أحذف حسابي على إنشاء؟",
        answer:
          "اذهب إلى الحساب ← حذف الحساب وأكد الطلب. يُستكمل حذف الحساب بعد التحقق برمز البريد الإلكتروني.",
      },
      {
        question: "كيف أتواصل مع دعم العملاء؟",
        answer:
          "يمكنك التواصل مع فريق الدعم من المساعدة والدعم داخل التطبيق. يمكنك أيضاً مراسلتنا على support@inchaa.com.",
      },
      {
        question: "كيف أغيّر لغة التطبيق؟",
        answer:
          "اذهب إلى الحساب ← اللغة واختر الإنجليزية أو العربية. يُحدّث التطبيق وفقاً للغة التي تختارها.",
      },
    ],
  },
  downloadCta: {
    h2Line1: "ابدأ البناء",
    h2Line2Before: "بذكاء مع",
    h2Brand: "إنشاء",
    body: "منصتك الكاملة لإدارة المشاريع والعروض والمحترفين.",
    downloadNow: "حمّل الآن",
    requestService: "اطلب خدمة",
    compareQuotes: "قارن العروض",
    trackProgress: "تابع التقدم",
    phoneAlt: "تطبيق إنشاء على الهاتف",
    appleAlt: "تنزيل من App Store",
    googleAlt: "متاح على Google Play",
  },
};
