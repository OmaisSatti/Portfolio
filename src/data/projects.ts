import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    "id": 0,
    "title": "Instant Translator",
    "image": "/images/pngs/translator-app.png",
    "techStack": [
      { "name": "React Native", "icon": "/images/svgs/react.svg" },
      { "name": "Redux", "icon": "/images/svgs/redux.svg" },
      { "name": "Node.js", "icon": "/images/svgs/nodejs.svg" },
      { "name": "Express.js", "icon": "/images/pngs/express.png" },
      { "name": "MongoDB", "icon": "/images/svgs/mongodb.svg" }
    ],
    "overview": "Instant Translator is a powerful multi-language translation app designed to facilitate real-time communication across different languages. Users can easily translate text, conversations, or even physical objects using various modes. The app offers voice-to-voice translation for fluid bilingual conversations, optical character recognition (OCR) for scanning and translating text from images or objects, and a dedicated camera translator to interpret text seen through the device’s camera. It also includes a multilingual dictionary, a history section for reviewing previous translations, and customizable settings for enhanced control. The app supports both manual and voice input, shows translation waveforms, and allows switching between languages in a single tap. With a sleek UI and smooth navigation, Instant Translator is a comprehensive tool for travelers, learners, and multilingual users alike.",
    "deployment": {
      "android": "https://play.google.com/store/apps/details?id=com.multisyn.InstantTranslator",
      "ios": "https://apps.apple.com/app/id6450913450"
    }
  },
  {
    id: 1,
    title: "Sommos AI",
    image: "/images/pngs/sommos-app.png",
    techStack: [
      { name: "Express.js", icon: "/images/pngs/express.png" },
      { name: "React Native", icon: "/images/svgs/react.svg" },
      { name: "Node.js", icon: "/images/svgs/nodejs.svg" }
    ],
    overview:
      "An AI-powered internal company game designed to improve name recall among employees.",
    deployment: {
      web: "https://sommos.app"
    }
  },
  {
    id: 2,
    title: "ConciseApp",
    image: "/images/pngs/concise-app.png",
    techStack: [
      { name: "React Native", icon: "/images/svgs/react.svg" },
      { name: "Node.js", icon: "/images/svgs/nodejs.svg" },
      { name: "Express.js", icon: "/images/pngs/express.png" },
      { name: "Firebase", icon: "/images/svgs/firebase.svg" },
      { name: "MongoDB", icon: "/images/svgs/mongodb.svg" }
    ],
    overview:
      "Concise5 is a microlearning mobile platform designed for busy professionals who want to learn on the go. It offers bite-sized tutorials — each under 5 minutes — in both audio and text formats across key domains like Azure Cloud, Cyber Security, IT Infrastructure, Microsoft, and Professional Development. Users can explore personalized content based on their interests, track progress through a scoring and grading system, and visualize performance using detailed graphs and analytics. The app includes a leaderboard, level-up achievements, playlists for tutorials, and assessment tools to evaluate understanding. Users can select preferred languages and switch between audio or reading modes for flexible learning. With features like biometric login, language preferences, user history, and tutorial value tracking, Concise5 delivers a complete learning experience tailored to individual goals and learning styles.",
    deployment: {
      android: "https://play.google.com/store/apps/details?id=com.concise5",
      ios: "https://apps.apple.com/app/id9876543210"
    }
  },

  {
    "id": 3,
    "title": "Legify",
    "image": "/images/pngs/legify-app.png",
    "techStack": [
      { name: "React Native", "icon": "/images/svgs/react.svg" },
      { name: "Node.js", icon: "/images/svgs/nodejs.svg" },
      { name: "Express.js", icon: "/images/pngs/express.png" },
      { name: "MongoDB", icon: "/images/svgs/mongodb.svg" },
      { name: "Redux", "icon": "/images/svgs/redux.svg" }
    ],
    "overview": "Legify is an online marketplace tailored for the buying and selling of authentic gold and luxury jewelry. The app offers a secure platform for sellers to showcase their gold items — including rings, bars, and coins — with verified authenticity. Buyers can explore products through category filters and visually appealing listings, all while enjoying the confidence that each purchase is verified and traceable. Users can add items to their cart, place orders, and track their shipping status in real time. The app also provides a comprehensive order history, both for buyers and sellers, complete with detailed breakdowns, discounts, delivery charges, and order statuses (Shipped, Delivered, Cancelled). Legify emphasizes transparency and trust through seller verification, clean UI, and seamless order management, making it a robust digital storefront for the luxury gold trade.",
    "deployment": {
      "android": "https://play.google.com/store/apps/details?id=com.legify",
      "ios": "https://apps.apple.com/app/id9988776655"
    }
  },
  {
    id: 4,
    title: "Kutsbee",
    image: "/images/pngs/kutsbee-app.png",
    techStack: [
      { name: "React Native", icon: "/images/svgs/react.svg" },
      { name: "Node.js", icon: "/images/svgs/nodejs.svg" },
      { name: "Express.js", icon: "/images/pngs/express.png" },
      { name: "Firebase", icon: "/images/svgs/firebase.svg" },
      { name: "MongoDB", icon: "/images/svgs/mongodb.svg" }
    ],
    overview:
      "Kutsbee is a full-featured mobile application designed for seamless salon and spa appointment booking. It empowers users to easily search, discover, and schedule services from a wide range of beauty and wellness providers based on location, service category (like hair styling, coloring, spa treatments, etc.), price, and user reviews. The app features a clean, intuitive interface allowing users to view salon details, select time slots from a dynamic calendar, and confirm bookings in just a few taps. Integrated payment methods support both online card payments and cash options. For salon owners, Kutsbee offers a backend system to manage bookings, service listings, pricing, staff, and availability in real time. The goal of Kutsbee is to modernize the beauty service industry by reducing wait times, streamlining appointment management, and improving customer satisfaction with a professional, tech-driven solution.",
    deployment: {
      android: "https://play.google.com/store/apps/details?id=com.kutsbee",
      ios: "https://apps.apple.com/app/id1234567890"
    }
  },
  {
    id: 5,
    title: "SoulMatch",
    image: "/images/pngs/soulmatch-app.png",
    techStack: [
      { name: "React Native", icon: "/images/svgs/react.svg" },
      { name: "Node.js", icon: "/images/svgs/nodejs.svg" },
      { name: "Express.js", icon: "/images/pngs/express.png" },
      { name: "MongoDB", icon: "/images/svgs/mongodb.svg" }
    ],
    overview:
      "SoulMatch is a modern matrimonial and partner-finding mobile application designed to help users discover compatible life partners through smart filtering, verified profiles, and secure messaging. Users can register using email, Google, or Facebook, and create rich personal profiles including interests, education, religion, and location. The app offers role-based filters (like Doctor, Engineer, Business, Freelancer) and features such as recently joined/viewed users, image privacy controls, OTP verification for security, and chat with voice message support. SoulMatch emphasizes privacy and personalization, allowing users to control who can see their photos and contact them. With real-time messaging, heart/favorite interactions, and a profile upgrade system, it creates a respectful and engaging space for individuals seeking serious relationships.",
    deployment: {
      android: "https://play.google.com/store/apps/details?id=com.soulmatch",
      ios: "https://apps.apple.com/app/id1122334455"
    }
  },

  {
    "id": 6,
    "title": "LocalBaba",
    "image": "/images/pngs/localbaba-app.png",
    "techStack": [
      { "name": "React Native", "icon": "/images/svgs/react.svg" },
      { "name": "Node.js", "icon": "/images/svgs/nodejs.svg" },
      { "name": "Express.js", "icon": "/images/pngs/express.png" },
      { "name": "MongoDB", "icon": "/images/svgs/mongodb.svg" },
      { "name": "Redux", "icon": "/images/svgs/redux.svg" }
    ],
    "overview": "LocalBaba is a hyperlocal food delivery app designed to connect customers with nearby restaurants and grocery stores. With a sleek and intuitive interface, users can log in or register, browse categorized menus, search for dishes or brands, and enjoy visually rich listings of popular restaurants and food items. The app supports multi-category filtering (Vegetables, Fruits, Beverages, Grocery, etc.), highlights trending brands, and features promotional banners with discounts. Users can seamlessly add items to their cart, modify quantities, and view detailed order summaries with calculated totals, delivery charges, and applied discounts. LocalBaba emphasizes speed and reliability by showcasing estimated delivery times, allowing customers to track their orders conveniently. The platform also integrates multiple login options including Google and Apple, enhancing user onboarding. Designed with scalability and user satisfaction in mind, LocalBaba brings convenience, variety, and comfort food to users’ doorsteps.",
    "deployment": {
      "android": "https://play.google.com/store/apps/details?id=com.localbaba",
      "ios": "https://apps.apple.com/app/id1122334455"
    }
  }

];
