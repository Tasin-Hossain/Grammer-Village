// All visible text lives here as { en, bn } pairs so you can edit copy in one place.
export type L = { en: string; bn: string };

export const site = {
  name: "Grammar Village",
  phone: "+880 1675-578242",
  whatsapp: "8801675578242",
  email: "info@grammarvillage.com",
  address: {
    en: "Block C, House 8, Lane 14, Dhaka 1216",
    bn: "ব্লক সি, বাড়ি ৮, লেন ১৪, ঢাকা ১২১৬",
  } as L,
  youtube: "https://www.youtube.com/@GrammarVillage",
  mapLink: "https://maps.app.goo.gl/vfNLTUx292K6EieJA",
  mapEmbed:
    "https://maps.google.com/maps?q=Grammar%20Village,%20Block%20C,%20House%208%20Ln%2014,%20Dhaka%201216&z=16&output=embed",
};

// The old site said "Enroll by July 13, 2026". Change the date (or set null) to control the banner.
export const offer = {
  percent: 50,
  endsAt: "2026-07-13T23:59:59+06:00" as string | null,
  text: {
    en: "Admissions offer: 50% off admission fees",
    bn: "ভর্তিতে ৫০% ছাড়",
  } as L,
};

export const nav: { id: string; label: L }[] = [
  { id: "courses", label: { en: "Courses", bn: "কোর্স" } },
  { id: "skill-test", label: { en: "Skill test", bn: "দক্ষতা পরীক্ষা" } },
  { id: "kids-land", label: { en: "Kids Land", bn: "কিডস ল্যান্ড" } },
  { id: "notice", label: { en: "Notices", bn: "নোটিশ" } },
  { id: "videos", label: { en: "Videos", bn: "ভিডিও" } },
  { id: "about", label: { en: "About", bn: "আমাদের কথা" } },
  { id: "contact", label: { en: "Contact", bn: "যোগাযোগ" } },
];

export const heroSentences = [
  {
    parts: ["Yesterday", "she", "go", "to", "school", "by", "rickshaw."],
    wrong: 2,
    options: ["went", "goes", "going"],
    answer: "went",
    note: { en: "“Yesterday” means the past, so use went.", bn: "“Yesterday” মানে অতীত, তাই went হবে।" } as L,
  },
  {
    parts: ["He", "don't", "like", "green", "chillies."],
    wrong: 1,
    options: ["doesn't", "isn't", "not"],
    answer: "doesn't",
    note: { en: "He, she, it takes doesn't.", bn: "He, she, it এর সাথে doesn't বসে।" } as L,
  },
  {
    parts: ["There", "is", "many", "books", "on", "the", "table."],
    wrong: 1,
    options: ["are", "be", "am"],
    answer: "are",
    note: { en: "“Books” is plural, so use are.", bn: "“Books” বহুবচন, তাই are হবে।" } as L,
  },
];

export type Course = {
  id: string;
  name: L;
  classes: L;
  age: L;
  intro: L;
  topics: L[];
  format: L;
};

export const courses: Course[] = [
  {
    id: "kids",
    name: { en: "Kids", bn: "কিডস" },
    classes: { en: "Play to K.G.", bn: "প্লে থেকে কেজি" },
    age: { en: "Ages 3 to 6", bn: "বয়স ৩ থেকে ৬" },
    intro: {
      en: "Letters, sounds and first words through songs, stories and play.",
      bn: "গান, গল্প আর খেলার মাধ্যমে বর্ণ, ধ্বনি ও প্রথম শব্দ শেখা।",
    },
    topics: [
      { en: "Alphabet and phonics sounds", bn: "বর্ণমালা ও ফনিক্স" },
      { en: "Everyday words and greetings", bn: "প্রতিদিনের শব্দ ও শুভেচ্ছা" },
      { en: "Rhymes and short stories", bn: "ছড়া ও ছোট গল্প" },
      { en: "Listening and simple speaking", bn: "শোনা ও সহজ কথা বলা" },
    ],
    format: { en: "Small groups, activity based", bn: "ছোট গ্রুপ, কার্যক্রমভিত্তিক" },
  },
  {
    id: "primary",
    name: { en: "Primary", bn: "প্রাইমারি" },
    classes: { en: "Class 1 to 2", bn: "প্রথম থেকে দ্বিতীয় শ্রেণি" },
    age: { en: "Ages 6 to 8", bn: "বয়স ৬ থেকে ৮" },
    intro: {
      en: "Reading short passages and building simple sentences with confidence.",
      bn: "ছোট অনুচ্ছেদ পড়া এবং আত্মবিশ্বাসের সাথে সহজ বাক্য গঠন।",
    },
    topics: [
      { en: "Phonics to fluent reading", bn: "ফনিক্স থেকে সাবলীল পড়া" },
      { en: "Nouns, verbs and simple tenses", bn: "Noun, Verb ও সহজ Tense" },
      { en: "Monthly story listening", bn: "মাসিক গল্প শোনা" },
      { en: "Handwriting and spelling", bn: "হাতের লেখা ও বানান" },
    ],
    format: { en: "Weekly classes plus listening practice", bn: "সাপ্তাহিক ক্লাস ও লিসেনিং অনুশীলন" },
  },
  {
    id: "junior",
    name: { en: "Junior", bn: "জুনিয়র" },
    classes: { en: "Class 3 to 5", bn: "তৃতীয় থেকে পঞ্চম শ্রেণি" },
    age: { en: "Ages 8 to 11", bn: "বয়স ৮ থেকে ১১" },
    intro: {
      en: "Grammar rules you can use: tenses, parts of speech and paragraph writing.",
      bn: "কাজে লাগানোর মতো গ্রামার: Tense, Parts of Speech ও অনুচ্ছেদ লেখা।",
    },
    topics: [
      { en: "All basic tenses", bn: "সব Basic Tense" },
      { en: "Parts of speech with examples", bn: "উদাহরণসহ Parts of Speech" },
      { en: "Paragraph and letter writing", bn: "অনুচ্ছেদ ও চিঠি লেখা" },
      { en: "Spoken English drills", bn: "Spoken English অনুশীলন" },
    ],
    format: { en: "Class, oral drill board and weekly test", bn: "ক্লাস, মৌখিক অনুশীলন ও সাপ্তাহিক পরীক্ষা" },
  },
  {
    id: "advanced",
    name: { en: "Advanced", bn: "অ্যাডভান্সড" },
    classes: { en: "Class 6 to 12", bn: "ষষ্ঠ থেকে দ্বাদশ শ্রেণি" },
    age: { en: "Ages 11 to 18", bn: "বয়স ১১ থেকে ১৮" },
    intro: {
      en: "Board-ready grammar, composition and fluent speaking with one-to-one feedback.",
      bn: "বোর্ড পরীক্ষার গ্রামার, কম্পোজিশন ও সাবলীল বলা, সাথে একক ফিডব্যাক।",
    },
    topics: [
      { en: "Advanced grammar and transformation", bn: "অ্যাডভান্সড গ্রামার ও Transformation" },
      { en: "Composition, essay and application", bn: "কম্পোজিশন, রচনা ও আবেদন" },
      { en: "Phonetics and voice projection", bn: "ফোনেটিক্স ও উচ্চারণ" },
      { en: "Vocabulary and communication", bn: "ভোকাবুলারি ও যোগাযোগ দক্ষতা" },
    ],
    format: { en: "Intensive care classes for weaker students available", bn: "দুর্বল শিক্ষার্থীদের জন্য ইনটেনসিভ কেয়ার ক্লাস" },
  },
];

export const why: { title: L; body: L }[] = [
  {
    title: { en: "English-only environment", bn: "ইংরেজি-ভাষী পরিবেশ" },
    body: {
      en: "Classes run in English with Bangla support, so students speak from day one.",
      bn: "ক্লাস চলে ইংরেজিতে, প্রয়োজনে বাংলায় সহায়তা। প্রথম দিন থেকেই শিক্ষার্থীরা কথা বলে।",
    },
  },
  {
    title: { en: "A syllabus with a clear path", bn: "স্পষ্ট ধাপের সিলেবাস" },
    body: {
      en: "Every level has a written outline, so parents know what is taught each month.",
      bn: "প্রতিটি লেভেলের লিখিত আউটলাইন আছে, অভিভাবকরা জানেন প্রতি মাসে কী পড়ানো হয়।",
    },
  },
  {
    title: { en: "Teachers who correct kindly", bn: "দয়ালু কিন্তু যত্নশীল শিক্ষক" },
    body: {
      en: "One-to-one reviews and regular progress notes for every student.",
      bn: "প্রতি শিক্ষার্থীর জন্য একক রিভিউ ও নিয়মিত অগ্রগতির নোট।",
    },
  },
  {
    title: { en: "Extra care when it is needed", bn: "প্রয়োজনে বাড়তি যত্ন" },
    body: {
      en: "Intensive classes with oral drills and feedback for students who need more time.",
      bn: "যাদের বেশি সময় দরকার তাদের জন্য মৌখিক অনুশীলন ও ফিডব্যাকসহ ইনটেনসিভ ক্লাস।",
    },
  },
];

export const quiz = [
  { q: "She ___ a book every night.", options: ["reads", "read", "reading", "readed"], a: 0 },
  { q: "They ___ football when it started to rain.", options: ["play", "were playing", "have played", "plays"], a: 1 },
  { q: "I have lived here ___ 2019.", options: ["for", "since", "from", "in"], a: 1 },
  { q: "Which sentence is correct?", options: ["He have gone to market.", "He gone to market.", "He has gone to market.", "He has went to market."], a: 2 },
  { q: "If I ___ you, I would study more.", options: ["am", "was", "were", "be"], a: 2 },
  { q: "Neither of the boys ___ present.", options: ["were", "was", "are", "have been"], a: 1 },
];

export const sentenceGame = [
  "The cat sat on the mat",
  "I like to eat mangoes",
  "We play in the garden",
  "Birds fly in the sky",
  "My mother cooks rice every day",
];

// Placeholder notices. Replace with real ones (or load them from a CMS / database).
export const notices: { date: string; tag: L; title: L; body: L }[] = [
  {
    date: "2026-07-01",
    tag: { en: "Admission", bn: "ভর্তি" },
    title: { en: "New session admissions are open", bn: "নতুন সেশনের ভর্তি চলছে" },
    body: { en: "Visit the campus or message us on WhatsApp to reserve a seat.", bn: "সরাসরি ক্যাম্পাসে আসুন অথবা WhatsApp এ মেসেজ করে আসন নিশ্চিত করুন।" },
  },
  {
    date: "2026-06-20",
    tag: { en: "Exam", bn: "পরীক্ষা" },
    title: { en: "Monthly listening test schedule", bn: "মাসিক লিসেনিং টেস্টের সময়সূচি" },
    body: { en: "Class 1 to 10 listening tests are held in the last week of every month.", bn: "প্রথম থেকে দশম শ্রেণির লিসেনিং টেস্ট প্রতি মাসের শেষ সপ্তাহে হবে।" },
  },
  {
    date: "2026-06-05",
    tag: { en: "Event", bn: "অনুষ্ঠান" },
    title: { en: "Student showcase day", bn: "শিক্ষার্থী প্রদর্শনী দিবস" },
    body: { en: "Students present speeches and short plays in English.", bn: "শিক্ষার্থীরা ইংরেজিতে বক্তৃতা ও ছোট নাটক পরিবেশন করবে।" },
  },
];

export const videoCategories: { id: string; label: L }[] = [
  { id: "all", label: { en: "All", bn: "সব" } },
  { id: "kids", label: { en: "Kids and phonics", bn: "কিডস ও ফনিক্স" } },
  { id: "spoken", label: { en: "Spoken English", bn: "Spoken English" } },
  { id: "grammar", label: { en: "Grammar rules", bn: "গ্রামার রুলস" } },
  { id: "showcase", label: { en: "Student showcase", bn: "শিক্ষার্থী প্রদর্শনী" } },
];

// Add a real `youtubeId` to each item to show the YouTube thumbnail automatically.
export const videos: { cat: string; title: L; youtubeId?: string }[] = [
  { cat: "kids", title: { en: "Phonics: sounds A to Z", bn: "ফনিক্স: A থেকে Z ধ্বনি" } },
  { cat: "spoken", title: { en: "Ten sentences for the classroom", bn: "ক্লাসরুমের দশটি বাক্য" } },
  { cat: "grammar", title: { en: "Present perfect in five minutes", bn: "পাঁচ মিনিটে Present Perfect" } },
  { cat: "showcase", title: { en: "Annual speech day highlights", bn: "বার্ষিক বক্তৃতা দিবসের ঝলক" } },
  { cat: "grammar", title: { en: "Articles: a, an, the", bn: "Articles: a, an, the" } },
  { cat: "spoken", title: { en: "Introduce yourself in English", bn: "ইংরেজিতে নিজের পরিচয় দিন" } },
];
