/* ─────────────────────────────────────────────
   Talapker Navigator — main.js v3
   i18n (KZ/RU) + Dark/Light theme
───────────────────────────────────────────── */

/* ══ TRANSLATIONS ══════════════════════════ */
const translations = {
  ru: {
    /* NAV */
    navFeatures: 'Возможности', navAudience: 'Кому подходит',
    navUniversities: 'Вузы', navPricing: 'Услуги и цены',
    navHowItWorks: 'Как это работает', navContact: 'Контакты',
    navPriceBtn: 'Прайс-лист', navCta: 'Записаться',
    /* HERO */
    badgeText: '🇰🇿 Навигатор абитуриента Казахстана',
    greeting: 'Привет, Абитуриент!',
    heroTitle: 'Твой компас<br/>в мире <span class="gradient-text">ЕНТ и грантов</span><br/>Казахстана',
    heroSubtitle: 'Talapker Navigator — это экспертная платформа, которая помогает выпускникам школ выбрать специальность, рассчитать шансы на грант и пройти путь от заявки до зачисления.',
    heroBtn1: 'Посмотреть услуги', heroBtn2: 'Как мы помогаем',
    heroStat1: 'Вузов в базе', heroStat2: 'Специальностей', heroStat3: 'Поступили на грант',
    /* FEATURES */
    featEyebrow: 'Модули платформы',
    featTitle: 'Всё необходимое<br/>в одном месте',
    featDesc: 'Инструменты, которые реально помогают — от выбора профессии до получения места в вузе',
    feat1Title: 'Навигатор специальностей',
    feat1Desc: 'Полный каталог профессий Казахстана с описанием, зарплатами, профильными предметами ЕНТ и прогнозом востребованности через 4–5 лет.',
    feat2Title: 'Калькулятор шансов на грант',
    feat2Desc: 'Умный алгоритм учитывает баллы ЕНТ и квоты (сельская, многодетные и др.) — показывает вероятность поступления на грант.',
    feat3Title: 'Рейтинг вузов',
    feat3Desc: 'Фильтруемый чарт по трудоустройству выпускников, качеству общежитий и стоимости обучения на контракте.',
    feat4Title: 'Календарь абитуриента',
    feat4Desc: 'Уведомления о сроках подачи документов, апелляциях и выходе списков грантов. Не пропусти ни одного дедлайна!',
    feat5Title: 'Блог и новости МНВО',
    feat5Desc: 'Актуальные обновления от Министерства науки и высшего образования РК, советы экспертов и истории успеха студентов.',
    /* AUDIENCE */
    audEyebrow: 'Для кого платформа',
    audTitle: 'Кому подходит<br/>Talapker Navigator?',
    audDesc: 'Три ключевых сегмента — у каждого свои задачи, и мы решаем каждую',
    aud1Title: 'Абитуриенты', aud1Desc: 'Выпускники 11 классов, которые хотят поступить на грант, выбрать «правильную» специальность и не запутаться в системе ЕНТ.',
    aud2Title: 'Родители', aud2Desc: 'Мамы и папы, которые хотят понять: грант или контракт? Какой вуз лучше? Во сколько обойдётся образование?',
    aud3Title: 'Учителя & профориентаторы', aud3Desc: 'Классные руководители и специалисты, которые консультируют учеников и помогают ориентироваться в образовательной системе.',
    /* UNIVERSITIES */
    uniEyebrow: 'База вузов', uniTitle: 'Топ университетов<br/>Казахстана',
    uniDesc: 'Фильтруй по специализации, рейтингу, стоимости и условиям общежития',
    filterAll: 'Все города', filterAstana: '🏙️ Астана', filterAlmaty: '🌆 Алматы',
    filterIt: '💻 IT-вузы', filterTop: '🏆 Топ-3',
    uniViewAll: 'Смотреть все 120+ университетов →',
    /* PRICING */
    pricingEyebrow: 'Прайс-лист услуг',
    pricingTitle: '«Talapker Navigator»<br/>жобасы бойынша прайс-лист',
    pricingDesc: 'Выбери нужную услугу или получи полное сопровождение по специальной цене',
    priceBtn: 'Записаться', priceFeatBtn: 'Записаться сейчас',
    /* HOW IT WORKS */
    howEyebrow: 'Процесс работы', howTitle: '4 шага до<br/>места в вузе',
    step1Title: 'Профдиагностика', step1Desc: 'Определяем интересы и склонности абитуриента. Используем Kasip.kz и Edunavigator.',
    step2Title: 'Аналитика ЕНТ', step2Desc: 'Составляем 4 оптимальные комбинации вуз + специальность с максимальным шансом на грант.',
    step3Title: 'Подача документов', step3Desc: 'Сопровождаем при подаче заявки через egov или НЦТ с учётом всех квот.',
    step4Title: 'Зачисление!', step4Desc: 'Помогаем оформить документы, получить приказ о зачислении и подготовиться к студенческой жизни.',
    /* STATS */
    statsEyebrow: 'Наш результат', statsTitle: 'Цифры говорят<br/>сами за себя',
    stat1Text: 'Абитуриентов<br/>воспользовались платформой', stat2Text: 'Университетов<br/>в базе данных',
    stat3Text: 'Специальностей<br/>для выбора', stat4Text: 'Клиентов поступили<br/>на грант',
    /* TESTIMONIALS */
    reviewEyebrow: 'Отзывы', reviewTitle: 'Что говорят<br/>наши клиенты',
    /* CONTACT */
    contactEyebrow: 'Записаться на консультацию',
    contactTitle: 'Начни свой путь<br/>к гранту сегодня',
    contactDesc: 'Оставь заявку — мы свяжемся с тобой в течение часа и ответим на все вопросы о поступлении.',
    contactNameLabel: 'Имя', contactNamePlaceholder: 'Твоё имя',
    contactPhoneLabel: 'Телефон / WhatsApp',
    contactServiceLabel: 'Интересующая услуга',
    contactServiceDefault: '— Выберите услугу —',
    contactMsgLabel: 'Вопрос или сообщение', contactMsgPlaceholder: 'Напиши свой вопрос...',
    contactSubmit: 'Отправить заявку',
    toastSent: '🎉 Заявка отправлена! Ответим в течение часа.',
    /* PRICING TIMER */
    timerLabel: 'До конца акции осталось:',
    timerNote: 'С 20 марта цена вернется к 150 000 ₸',
    timerDays: 'дн', timerHours: 'час', timerMinutes: 'мин', timerSeconds: 'сек',
    /* UNIVERSITIES CARDS */
    uniCards: {
      'uni-nu': { name: 'Назарбаев Университет', city: '🏙️ Астана', tags: ['Международный', 'Гранты'], btn: 'Подробнее', score: 'Мин. балл:' },
      'uni-kaznu': { name: 'КазНУ им. аль-Фараби', city: '🌆 Алматы', tags: ['Национальный', '500+ программ'], btn: 'Подробнее', score: 'Мин. балл:' },
      'uni-enu': { name: 'ЕНУ им. Гумилёва', city: '🏙️ Астана', tags: ['Национальный', 'Гранты'], btn: 'Подробнее', score: 'Мин. балл:' },
      'uni-kbtu': { name: 'Казахстанско-Британский ТУ', city: '🌆 Алматы', tags: ['IT', 'Бизнес'], btn: 'Подробнее', score: 'Мин. балл:' },
      'uni-iitu': { name: 'Международный ун-т IT', city: '🌆 Алматы', tags: ['IT', 'Инновации'], btn: 'Подробнее', score: 'Мин. балл:' },
      'uni-aitu': { name: 'Astana IT University', city: '🏙️ Астана', tags: ['AI & Data', 'Современный'], btn: 'Подробнее', score: 'Мин. балл:' },
    },
    /* PRICING DETAILS */
    priceDetails: {
      'price-1': { title: 'Проф-диагностика', kaz: 'Кәсіби диагностика', desc: 'Приём абитуриента и родителей. Определяем способности и интересы ребёнка через платформы Kasip.kz и Edunavigator и помогаем выбрать подходящую специальность.' },
      'price-2': { title: 'ЕНТ балл аналитикасы', kaz: 'Аналитика баллов ЕНТ', desc: 'На основе баллов ЕНТ составляем 4 правильные комбинации вуза и специальности с учётом грантовой квоты — максимизируем шансы на бесплатное обучение.' },
      'price-3': { title: 'Конкурсқа өтінім беру', kaz: 'Подача заявки на конкурс', desc: 'Помогаем подать документы и выборы через egov или платформу НЦТ с учётом всех квот и правил — строго по стратегии гранта.' },
      'price-4': { title: 'Оқуға түсу', kaz: 'Поступление в университет', desc: 'Консультация после конкурса: выбор вуза из списка, оформление документов, помощь с акимовскими/корпоративными грантами для тех, кто не добрал баллов.' },
      'price-5': {
        title: 'Толық сүймелдеу', kaz: 'Полное сопровождение',
        desc: 'Сопровождаем абитуриента от первой консультации до выхода приказа «Поступил». Включает всё необходимое для 100% успеха.',
        includes: 'Включает:',
        feats: [
          'Профдиагностика', 'Аналитика баллов ЕНТ', 'Подача документов', 'Сопровождение до зачисления', 'Личный куратор',
          'Доступ в закрытый канал с полезными новостями (ЕНТ, гранты, изменения, сроки)',
          'Прямая работа с экспертом', 'Система, ориентированная на результат — 100% результат'
        ]
      },
    },
    /* FOOTER */
    footerTagline: 'Болашаққа жол сілтеуші —\nEdTech-навигатор для абитуриентов Казахстана',
    footerCopyright: '© 2025 Talapker Navigator. Барлық құқықтар қорғалған.',
  },

  kz: {
    /* NAV */
    navFeatures: 'Мүмкіндіктер', navAudience: 'Кімге арналған',
    navUniversities: 'ЖОО', navPricing: 'Қызметтер',
    navHowItWorks: 'Жұмыс тәртібі', navContact: 'Байланыс',
    navPriceBtn: 'Баға тізімі', navCta: 'Тіркелу',
    /* HERO */
    badgeText: '🇰🇿 Қазақстан абитуриентіне арналған навигатор',
    greeting: 'Сәлем, Талапкер!',
    heroTitle: 'Болашаққа бастайтын<br/><span class="gradient-text">ЕНТ және гранттар</span><br/>әлемінде компасың',
    heroSubtitle: 'Talapker Navigator — мектеп бітірушілеріне мамандық таңдауға, грантқа үміткерлік мүмкіндігін есептеуге және оқуға дейінгі жолды өтуге көмектесетін сарапшы платформа.',
    heroBtn1: 'Қызметтерді қарау', heroBtn2: 'Қалай көмектесеміз',
    heroStat1: 'ЖОО базада', heroStat2: 'Мамандық', heroStat3: 'Грантқа түсті',
    /* FEATURES */
    featEyebrow: 'Платформа модульдері',
    featTitle: 'Барлығы<br/>бір жерде',
    featDesc: 'Мамандық таңдаудан бастап жоғары оқу орнына түсуге дейін шынымен көмектесетін құралдар',
    feat1Title: 'Мамандық навигаторы',
    feat1Desc: 'Қазақстандағы барлық мамандықтардың толық каталогы — сипаттама, орташа жалақы, ЕНТ пәндері және 4–5 жылдан кейінгі сұраныс болжамы.',
    feat2Title: 'Грант мүмкіндігін есептегіш',
    feat2Desc: 'Ақылды алгоритм ЕНТ балдарын, квоталарды (ауылдық, көпбалалы ж.б.) ескере отырып, ЖОО-да гранттық оқуға түсу ықтималдығын көрсетеді.',
    feat3Title: 'ЖОО рейтингі',
    feat3Desc: 'Сүзгіленетін тізім — түлектердің жұмысқа орналасуы, жатақхана сапасы және контрактілік оқу бағасы бойынша аналитика.',
    feat4Title: 'Абитуриент күнтізбесі',
    feat4Desc: 'Құжаттар тапсыру мерзімдері, апелляция, грант тізімдері шыққанда хабарлама аласың. Ешбір мерзімді өткізіп алма!',
    feat5Title: 'Блог және МЖБМ жаңалықтары',
    feat5Desc: 'МЖБМ-нен өзекті жаңартулар, қабылдау ережелері, сарапшылар кеңесі және студенттердің табыс тарихтары.',
    /* AUDIENCE */
    audEyebrow: 'Платформа кімге арналған',
    audTitle: 'Talapker Navigator<br/>кімге пайдалы?',
    audDesc: 'Үш негізгі топ — әрқайсысының өз міндеттері бар, оларды шешуге көмектесеміз',
    aud1Title: 'Абитуриенттер', aud1Desc: 'Гранттық оқуға түсіп, дұрыс мамандық таңдап, ЕНТ жүйесінде шатаспауды қалайтын 11-сынып түлектері.',
    aud2Title: 'Ата-аналар', aud2Desc: 'Грант па, контрактілік пе? Қай ЖОО жақсы? Жатақхана қауіпсіз бе? — деген сұрақтары бар ата-аналарға.',
    aud3Title: 'Мұғалімдер & профориентаторлар', aud3Desc: 'Оқушыларды кеңесіп, білім жүйесінде бағыт-бағдар беретін сынып жетекшілері мен мамандарға.',
    /* UNIVERSITIES */
    uniEyebrow: 'ЖОО базасы', uniTitle: 'Қазақстанның<br/>үздік университеттері',
    uniDesc: 'Мамандану, рейтинг, баға және жатақхана жағдайы бойынша сүзгілеу',
    filterAll: 'Барлық қалалар', filterAstana: '🏙️ Астана', filterAlmaty: '🌆 Алматы',
    filterIt: '💻 IT-ЖОО', filterTop: '🏆 Топ-3',
    uniViewAll: 'Барлық 120+ университетті қарау →',
    /* PRICING */
    pricingEyebrow: 'Қызметтер бағасы',
    pricingTitle: '«Talapker Navigator»<br/>жобасы бойынша прайс-лист',
    pricingDesc: 'Қажетті қызметті таңдаңыз немесе арнайы бағамен толық сүймелдеуді алыңыз',
    priceBtn: 'Жазылу', priceFeatBtn: 'Қазір жазылу',
    /* HOW IT WORKS */
    howEyebrow: 'Жұмыс тәртібі', howTitle: 'ЖОО-ға дейінгі<br/>4 қадам',
    step1Title: 'Профдиагностика', step1Desc: 'Абитуриенттің қызығушылықтары мен бейімділіктерін анықтаймыз. Kasip.kz және Edunavigator платформаларын қолданамыз.',
    step2Title: 'ЕНТ аналитикасы', step2Desc: 'Грантқа максималды мүмкіндік беретін 4 оптималды ЖОО + мамандық комбинациясын құрамыз.',
    step3Title: 'Құжаттар тапсыру', step3Desc: 'egov немесе НЦТ арқылы өтінімді барлық квота мен конкурс ережелерін ескере отырып тапсыруда сүймелдейміз.',
    step4Title: 'Қабылдану!', step4Desc: 'Құжаттарды ресімдеуге, бұйрық алуға және студенттік өмірге дайындалуға көмектесеміз.',
    /* STATS */
    statsEyebrow: 'Біздің нәтиже', statsTitle: 'Сандар өздері<br/>айтады',
    stat1Text: 'Абитуриент<br/>платформаны пайдаланды', stat2Text: 'Университет<br/>деректер базасында',
    stat3Text: 'Мамандық<br/>таңдау үшін', stat4Text: 'Клиенттер грантқа<br/>түсті',
    /* TESTIMONIALS */
    reviewEyebrow: 'Пікірлер', reviewTitle: 'Біздің клиенттер<br/>не дейді',
    /* CONTACT */
    contactEyebrow: 'Кеңеске жазылу',
    contactTitle: 'Бүгін грантқа бастайтын<br/>жолыңды баста',
    contactDesc: 'Өтінім қалдыр — бір сағат ішінде хабарласып, түсу туралы барлық сұрақтарыңа жауап береміз.',
    contactNameLabel: 'Аты-жөні', contactNamePlaceholder: 'Атыңыз',
    contactPhoneLabel: 'Телефон / WhatsApp',
    contactServiceLabel: 'Қызмет түрі',
    contactServiceDefault: '— Қызметті таңдаңыз —',
    contactMsgLabel: 'Сұрақ немесе хабарлама', contactMsgPlaceholder: 'Сұрағыңызды жазыңыз...',
    contactSubmit: 'Өтінімді жіберу',
    toastSent: '🎉 Өтінім жіберілді! Бір сағат ішінде хабарласамыз.',
    /* PRICING TIMER */
    timerLabel: 'Акция аяқталуына қалды:',
    timerNote: '20 наурыздан бастап баға 150 000 ₸ болады',
    timerDays: 'күн', timerHours: 'сағ', timerMinutes: 'мин', timerSeconds: 'сек',
    /* UNIVERSITIES CARDS */
    uniCards: {
      'uni-nu': { name: 'Назарбаев Университеті', city: '🏙️ Астана', tags: ['Халықаралық', 'Гранттар'], btn: 'Толығырақ', score: 'Мин. балл:' },
      'uni-kaznu': { name: 'Әл-Фараби атындағы ҚазҰУ', city: '🌆 Алматы', tags: ['Ұлттық', '500+ бағдарлама'], btn: 'Толығырақ', score: 'Мин. балл:' },
      'uni-enu': { name: 'Гумилев атындағы ЕҰУ', city: '🏙️ Астана', tags: ['Ұлттық', 'Гранттар'], btn: 'Толығырақ', score: 'Мин. балл:' },
      'uni-kbtu': { name: 'Қазақстан-Британ ТУ', city: '🌆 Алматы', tags: ['IT', 'Бизнес'], btn: 'Толығырақ', score: 'Мин. балл:' },
      'uni-iitu': { name: 'Халықаралық IT университеті', city: '🌆 Алматы', tags: ['IT', 'Инновациялар'], btn: 'Толығырақ', score: 'Мин. балл:' },
      'uni-aitu': { name: 'Astana IT University', city: '🏙️ Астана', tags: ['AI & Data', 'Заманауи'], btn: 'Толығырақ', score: 'Мин. балл:' },
    },
    /* PRICING DETAILS */
    priceDetails: {
      'price-1': { title: 'Проф-диагностика', kaz: 'Кәсіби диагностика', desc: 'Абитуриент пен ата-аналарды қабылдау. Kasip.kz және Edunavigator платформалары арқылы баланың қабілетін анықтап, мамандық таңдауға көмектесеміз.' },
      'price-2': { title: 'ЕНТ балл аналитикасы', kaz: 'ЕНТ балл аналитикасы', desc: 'ЕНТ баллдары негізінде грант квотасын ескере отырып, ЖОО мен мамандықтың 4 тиімді комбинациясын құрамыз — грантқа түсу мүмкіндігін арттырамыз.' },
      'price-3': { title: 'Конкурсқа өтінім беру', kaz: 'Конкурсқа өтінім беру', desc: 'egov немесе ҰТО платформасы арқылы барлық квота мен ережелерді ескере отырып, грант стратегиясы бойынша құжат тапсыруға көмектесеміз.' },
      'price-4': { title: 'Оқуға түсу', kaz: 'Оқуға түсу', desc: 'Конкурстан кейінгі кеңес: ЖОО таңдау, құжаттарды рәсімдеу, балл жетпеген жағдайда әкімдік/корпоративтік гранттарға көмек.' },
      'price-5': {
        title: 'Толық сүймелдеу', kaz: 'Толық сүймелдеу',
        desc: 'Абитуриентті алғашқы кеңестен бастап «Оқуға түсті» бұйрығы шыққанға дейін сүйемелдейміз. 100% нәтиже үшін барлық қажеттіліктерді қамтиды.',
        includes: 'Қамтиды:',
        feats: [
          'Профдиагностика', 'ЕНТ балл аналитикасы', 'Құжаттар тапсыру', 'Оқуға қабылданғанша сүйемелдеу', 'Жеке куратор',
          'Пайдалы жаңалықтар бар жабық канал (ҰБТ, гранттар, өзгерістер, мерзімдер)',
          'Сарапшымен тікелей жұмыс', 'Нәтижеге бағытталған жүйе — 100% нәтиже'
        ]
      },
    },
    /* FOOTER */
    footerTagline: 'Болашаққа жол сілтеуші —\nАбитуриенттерге арналған EdTech-навигатор',
    footerCopyright: '© 2025 Talapker Navigator. Барлық құқықтар қорғалған.',
  }
};

/* ══ STATE ═════════════════════════════════ */
let currentLang = localStorage.getItem('tn-lang') || 'ru';
let isDark = localStorage.getItem('tn-theme') !== 'light';

/* ══ APPLY LANGUAGE ════════════════════════ */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('tn-lang', lang);
  const t = translations[lang];

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  // Nav links
  const setNavLink = (href, text) => {
    const el = document.querySelector(`.nav-link[href="${href}"]`);
    if (el) el.textContent = text;
  };
  setNavLink('#features', t.navFeatures);
  setNavLink('#audience', t.navAudience);
  setNavLink('#universities', t.navUniversities);
  setNavLink('#pricing', t.navPricing);
  setNavLink('#how-it-works', t.navHowItWorks);
  setNavLink('#contact', t.navContact);
  const navPrice = document.getElementById('nav-price-btn');
  if (navPrice) navPrice.textContent = t.navPriceBtn;
  const navCta = document.getElementById('nav-cta-btn');
  if (navCta) navCta.textContent = t.navCta;

  // Hero
  const setText = (id, html, isHTML = false) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isHTML) el.innerHTML = html;
    else el.textContent = html;
  };
  setText('hero-badge-text', t.badgeText);
  setText('hero-greeting', t.greeting);
  setText('hero-main-title', t.heroTitle, true);
  setText('hero-subtitle', t.heroSubtitle);
  setText('hero-price-btn', t.heroBtn1);
  setText('hero-learn-btn', t.heroBtn2);

  // Hero stat labels
  const statLabels = document.querySelectorAll('#hero .stat-label');
  if (statLabels[0]) statLabels[0].textContent = t.heroStat1;
  if (statLabels[1]) statLabels[1].textContent = t.heroStat2;
ы  if (statLabels[2]) statLabels[2].textContent = t.heroStat3;

  // Section helper
  const setSection = (sectionId, eyebrow, title, desc) => {
    const s = document.getElementById(sectionId);
    if (!s) return;
    const ey = s.querySelector('.section-eyebrow');
    const ti = s.querySelector('.section-title');
    const de = s.querySelector('.section-desc');
    if (ey) ey.textContent = eyebrow;
    if (ti) ti.innerHTML = title;
    if (de) de.textContent = desc;
  };

  // Features
  setSection('features', t.featEyebrow, t.featTitle, t.featDesc);
  const setCard = (id, title, desc) => {
    const c = document.getElementById(id);
    if (!c) return;
    const ti = c.querySelector('.feature-title');
    const de = c.querySelector('.feature-desc');
    if (ti) ti.textContent = title;
    if (de) de.textContent = desc;
  };
  setCard('feat-navigator', t.feat1Title, t.feat1Desc);
  setCard('feat-calc', t.feat2Title, t.feat2Desc);
  setCard('feat-rating', t.feat3Title, t.feat3Desc);
  setCard('feat-calendar', t.feat4Title, t.feat4Desc);
  setCard('feat-blog', t.feat5Title, t.feat5Desc);

  // Audience
  setSection('audience', t.audEyebrow, t.audTitle, t.audDesc);
  const setAud = (id, title, desc) => {
    const c = document.getElementById(id);
    if (!c) return;
    const ti = c.querySelector('.aud-title');
    const de = c.querySelector('.aud-desc');
    if (ti) ti.textContent = title;
    if (de) de.textContent = desc;
  };
  setAud('aud-student', t.aud1Title, t.aud1Desc);
  setAud('aud-parent', t.aud2Title, t.aud2Desc);
  setAud('aud-teacher', t.aud3Title, t.aud3Desc);

  // Universities
  setSection('universities', t.uniEyebrow, t.uniTitle, t.uniDesc);
  ['all', 'astana', 'almaty', 'it', 'top'].forEach(f => {
    const btn = document.getElementById(`filter-${f}`);
    if (btn) btn.textContent = t[`filter${f.charAt(0).toUpperCase() + f.slice(1)}`];
  });
  const viewAll = document.getElementById('view-all-uni-btn');
  if (viewAll) viewAll.textContent = t.uniViewAll;

  // University Cards Internal
  Object.keys(t.uniCards).forEach(id => {
    const card = document.getElementById(id);
    if (!card) return;
    const data = t.uniCards[id];
    const name = card.querySelector('.uni-name');
    const city = card.querySelector('.uni-city');
    const btn = card.querySelector('.btn');
    const scoreLabel = card.querySelector('.score-label');
    const tagsContainer = card.querySelector('.uni-tags');

    if (name) name.textContent = data.name;
    if (city) city.textContent = data.city;
    if (btn) btn.textContent = data.btn;
    if (scoreLabel) scoreLabel.textContent = data.score;
    if (tagsContainer && data.tags) {
      tagsContainer.innerHTML = data.tags.map(tag => `<span class="uni-tag">${tag}</span>`).join('');
    }
  });

  // Pricing
  setSection('pricing', t.pricingEyebrow, t.pricingTitle, t.pricingDesc);
  Object.keys(t.priceDetails).forEach(id => {
    const card = document.getElementById(id);
    if (!card) return;
    const details = t.priceDetails[id];
    const ti = card.querySelector('.price-title');
    const kzLabel = card.querySelector('.price-kaz');
    const de = card.querySelector('.price-desc');
    const btn = card.querySelector('.price-btn');
    if (ti) ti.textContent = details.title;
    if (kzLabel) kzLabel.textContent = details.kaz;
    if (de) de.textContent = details.desc;
    if (btn) btn.textContent = (id === 'price-5' ? t.priceFeatBtn : t.priceBtn);

    // Feature list for card 5
    if (id === 'price-5' && details.feats) {
      const incLabel = card.querySelector('.includes-label');
      if (incLabel) incLabel.textContent = details.includes;
      const list = card.querySelector('ul');
      if (list) {
        list.innerHTML = details.feats.map(f => `<li>✓ ${f}</li>`).join('');
      }
    }
  });

  // How it works
  setSection('how-it-works', t.howEyebrow, t.howTitle, '');
  [1, 2, 3, 4].forEach(i => {
    const step = document.getElementById(`step-${i}`);
    if (!step) return;
    const ti = step.querySelector('.step-title');
    const de = step.querySelector('.step-desc');
    if (ti) ti.textContent = t[`step${i}Title`];
    if (de) de.textContent = t[`step${i}Desc`];
  });

  // Stats
  setSection('stats', t.statsEyebrow, t.statsTitle, '');
  [1, 2, 3, 4].forEach(i => {
    const st = document.querySelector(`#stat-${i} .stat-text`);
    if (st) st.innerHTML = t[`stat${i}Text`];
  });

  // Testimonials
  setSection('testimonials', t.reviewEyebrow, t.reviewTitle, '');

  // Contact
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    const ey = contactSection.querySelector('.section-eyebrow');
    const ti = contactSection.querySelector('.contact-title');
    const de = contactSection.querySelector('.contact-desc');
    if (ey) ey.textContent = t.contactEyebrow;
    if (ti) ti.innerHTML = t.contactTitle;
    if (de) de.textContent = t.contactDesc;
  }
  const cfName = document.getElementById('cf-name');
  const cfPhone = document.getElementById('cf-phone');
  const cfService = document.getElementById('cf-service');
  const cfMsg = document.getElementById('cf-message');
  const labelFor = (inputId, text) => {
    const lbl = document.querySelector(`label[for="${inputId}"]`);
    if (lbl) lbl.textContent = text;
  };
  labelFor('cf-name', t.contactNameLabel);
  labelFor('cf-phone', t.contactPhoneLabel);
  labelFor('cf-service', t.contactServiceLabel);
  labelFor('cf-message', t.contactMsgLabel);
  if (cfName) cfName.placeholder = t.contactNamePlaceholder;
  if (cfMsg) cfMsg.placeholder = t.contactMsgPlaceholder;
  if (cfService && cfService.options[0]) cfService.options[0].text = t.contactServiceDefault;
  const submitBtn = document.getElementById('contact-submit-btn');
  if (submitBtn) submitBtn.textContent = t.contactSubmit;

  // Footer
  const ftag = document.querySelector('.footer-tagline');
  if (ftag) ftag.innerHTML = t.footerTagline.replace('\n', '<br/>');
  const fcopy = document.querySelector('.footer-bottom p');
  if (fcopy) fcopy.textContent = t.footerCopyright;

  // Timer Labels
  const tLabel = document.querySelector('.timer-label');
  if (tLabel) tLabel.textContent = t.timerLabel;
  const tNote = document.querySelector('.timer-note');
  if (tNote) tNote.textContent = t.timerNote;
  const setTUnit = (id, text) => {
    const el = document.querySelector(`#${id} + small`); // small is after span
    if (el) el.textContent = text;
  };
  setTUnit('days', t.timerDays);
  setTUnit('hours', t.timerHours);
  setTUnit('minutes', t.timerMinutes);
  setTUnit('seconds', t.timerSeconds);
}

/* ══ THEME ══════════════════════════════════ */
function applyTheme(dark) {
  isDark = dark;
  localStorage.setItem('tn-theme', dark ? 'dark' : 'light');
  document.body.classList.toggle('light-mode', !dark);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = dark ? '☀️' : '🌙';
}

/* ══ INIT ═══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR SCROLL ──────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ── BURGER ─────────────────────────────
  const burger = document.getElementById('burger-btn');
  const navLinks = document.getElementById('nav-links');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // ── LANGUAGE SWITCHER ──────────────────
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
      showToast(btn.dataset.lang === 'kz' ? '🇰🇿 Қазақша тілі таңдалды' : '🇷🇺 Русский язык выбран');
    });
  });

  // ── THEME TOGGLE ───────────────────────
  document.getElementById('theme-toggle').addEventListener('click', () => {
    applyTheme(!isDark);
  });

  // ── PARTICLES ──────────────────────────
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  const resizeCanvas = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3; this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1; this.gold = Math.random() > 0.7;
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.gold ? `rgba(245,200,66,${this.opacity})` : `rgba(255,255,255,${this.opacity * 0.5})`;
      ctx.fill();
    }
  }
  const particles = Array.from({ length: 120 }, () => new Particle());
  (function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  })();

  // ── UNI FILTER ─────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const uniCards = document.querySelectorAll('.uni-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      uniCards.forEach(card => {
        const show = f === 'all' || card.dataset.city === f || card.dataset.type === f;
        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        if (show) { card.style.display = 'flex'; requestAnimationFrame(() => { card.style.opacity = '1'; card.style.transform = ''; }); }
        else { card.style.opacity = '0'; card.style.transform = 'scale(0.94)'; setTimeout(() => { if (card.style.opacity === '0') card.style.display = 'none'; }, 350); }
      });
    });
  });

  // ── COUNTERS ───────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const start = performance.now();
    (function upd(now) {
      const p = Math.min((now - start) / 2000, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target).toLocaleString('ru');
      if (p < 1) requestAnimationFrame(upd);
    })(start);
  }
  document.querySelectorAll('.stat-big[data-target]').forEach(el => {
    new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !el.dataset.counted) { el.dataset.counted = '1'; animateCounter(el); }
    }, { threshold: 0.5 }).observe(el);
  });

  // ── SCROLL REVEAL ──────────────────────
  const revealEls = document.querySelectorAll('.step,.feature-card,.uni-card,.stat-card,.testimonial-card,.audience-card,.price-card');
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; revObs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  revealEls.forEach((el, i) => {
    el.style.opacity = '0'; el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.55s ease ${(i % 6) * 0.07}s, transform 0.55s ease ${(i % 6) * 0.07}s`;
    revObs.observe(el);
  });

  // ── CONTACT FORM ───────────────────────
  document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('contact-submit-btn');
    const orig = btn.textContent;

    // Get values
    const name = document.getElementById('cf-name')?.value || '';
    const phone = document.getElementById('cf-phone')?.value || '';
    const serviceEl = document.getElementById('cf-service');
    const serviceText = serviceEl ? serviceEl.options[serviceEl.selectedIndex].text : '';
    const message = document.getElementById('cf-message')?.value || '';

    // Create WhatsApp message
    const waText = encodeURIComponent(
      `🔔 *Новая заявка с сайта Talapker Navigator*\n\n` +
      `👤 *Имя:* ${name}\n` +
      `📞 *Телефон:* ${phone}\n` +
      `💼 *Услуга:* ${serviceText}\n` +
      `💬 *Вопрос:* ${message}`
    );
    const waUrl = `https://wa.me/77080199454?text=${waText}`;

    btn.disabled = true;
    btn.textContent = '...';

    setTimeout(() => {
      showToast(translations[currentLang].toastSent);
      document.getElementById('contact-form').reset();
      btn.disabled = false;
      btn.textContent = orig;

      // Redirect to WhatsApp
      window.open(waUrl, '_blank');
    }, 1000);
  });

  // ── TOAST ──────────────────────────────
  function showToast(msg, err = false) {
    document.querySelector('.toast')?.remove();
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    Object.assign(t.style, {
      position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%) translateY(80px)',
      background: err ? 'rgba(220,38,38,.97)' : 'rgba(8,13,31,.97)',
      border: `1px solid ${err ? 'rgba(220,38,38,.4)' : 'rgba(245,200,66,.4)'}`,
      color: '#fff', padding: '14px 28px', borderRadius: '100px',
      fontFamily: "'Outfit',sans-serif", fontSize: '.9rem', fontWeight: '500',
      zIndex: '9999', backdropFilter: 'blur(20px)', boxShadow: '0 8px 32px rgba(0,0,0,.5)',
      transition: 'transform .4s cubic-bezier(.4,0,.2,1),opacity .4s ease',
      opacity: '0', maxWidth: '90vw', textAlign: 'center',
    });
    document.body.appendChild(t);
    requestAnimationFrame(() => { t.style.transform = 'translateX(-50%) translateY(0)'; t.style.opacity = '1'; });
    setTimeout(() => { t.style.transform = 'translateX(-50%) translateY(80px)'; t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 3500);
  }

  // ── PRICING → CONTACT ──────────────────
  document.querySelectorAll('.price-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const title = btn.closest('.price-card')?.querySelector('.price-title')?.textContent?.trim() || '';
      const map = { 'Проф-диагностика': '1', 'ЕНТ балл аналитикасы': '2', 'Конкурсқа өтінім беру': '3', 'Оқуға түсу': '4', 'Толық сүймелдеу': '5' };
      const sel = document.getElementById('cf-service');
      if (sel && map[title]) sel.value = map[title];
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ── ACTIVE NAV ─────────────────────────
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 120;
    sections.forEach(s => {
      const link = document.querySelector(`.nav-link[href="#${s.id}"]`);
      if (!link) return;
      link.style.color = (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) ? 'var(--gold-500)' : '';
    });
  });

  // ── BUTTON RIPPLE ──────────────────────
  if (!document.getElementById('ripple-style')) {
    const s = document.createElement('style');
    s.id = 'ripple-style';
    s.textContent = '@keyframes rippleAnim{to{transform:scale(2.5);opacity:0}}';
    document.head.appendChild(s);
  }
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const r = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      Object.assign(r.style, {
        position: 'absolute', width: `${size}px`, height: `${size}px`,
        left: `${e.clientX - rect.left - size / 2}px`, top: `${e.clientY - rect.top - size / 2}px`,
        background: 'rgba(255,255,255,.15)', borderRadius: '50%', transform: 'scale(0)',
        animation: 'rippleAnim .5s ease-out forwards', pointerEvents: 'none'
      });
      this.style.position = 'relative'; this.style.overflow = 'hidden';
      this.appendChild(r); setTimeout(() => r.remove(), 600);
    });
  });

  // ── UNI CARD GLOW ──────────────────────
  document.querySelectorAll('.uni-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100, y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.background = `radial-gradient(circle at ${x}% ${y}%,rgba(245,200,66,.08),rgba(255,255,255,.03) 65%)`;
    });
    card.addEventListener('mouseleave', () => { card.style.background = ''; });
  });

  // ── PRICE COUNTDOWN ───────────────────
  function startPriceCountdown() {
    const targetDate = new Date('March 20, 2026 00:00:00').getTime();
    const timerBox = document.getElementById('price-timer-box');
    const priceVal = document.getElementById('featured-price-val');
    const oldPriceEl = document.querySelector('.price-old');
    const badgeEl = document.querySelector('.price-discount-badge');

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        if (timerBox) timerBox.style.display = 'none';
        if (priceVal) priceVal.textContent = '150 000';
        if (oldPriceEl) oldPriceEl.style.display = 'none';
        if (badgeEl) badgeEl.style.display = 'none';
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val < 10 ? '0' + val : val;
      };
      set('days', d);
      set('hours', h);
      set('minutes', m);
      set('seconds', s);
    };

    updateTimer();
    setInterval(updateTimer, 1000);
  }

  // ── INIT LANG + THEME ──────────────────
  applyTheme(isDark);
  applyLanguage(currentLang);
  startPriceCountdown();

  console.log('✅ Talapker Navigator v3 — KZ/RU + Dark/Light готов!');
});

