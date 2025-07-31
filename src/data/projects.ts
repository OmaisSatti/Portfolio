import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 0,
    title: "LegifyAPP",
    image: "/images/pngs/legify-app.png",
    techStack: [
      { name: "Express.js", icon: "/images/express.png" },
      { name: "React Native", icon: "/images/react.svg" },
      { name: "Node.js", icon: "/images/nodejs.svg" }
    ],
    overview:
      "A secure and verified marketplace for buying and selling luxury items including gold and diamond jewelry.",
    deployment: {
      web: "https://legify.app"
    }
  },
  {
    id: 1,
    title: "Instant Translator",
    image: "/images/pngs/translator-app.png",
    techStack: [
      { name: "Express.js", icon: "/images/express.png" },
      { name: "React Native", icon: "/images/react.svg" },
      { name: "Node.js", icon: "/images/nodejs.svg" }
    ],
    overview:
      "A multilingual translation app supporting text, voice, and image input across 70+ languages.",
    deployment: {
      android: "https://play.google.com/store/apps/details?id=instant.translator",
      ios: "https://apps.apple.com/app/id0000000000"
    }
  },
  {
    id: 2,
    title: "Sommos AI",
    image: "/images/pngs/sommos-app.png",
    techStack: [
      { name: "Express.js", icon: "/images/express.png" },
      { name: "React Native", icon: "/images/react.svg" },
      { name: "Node.js", icon: "/images/nodejs.svg" }
    ],
    overview:
      "An AI-powered internal company game designed to improve name recall among employees.",
    deployment: {
      web: "https://sommos.app"
    }
  },
  {
    "id": 3,
    "title": "Kutsbee",
    "image": "/images/pngs/kutsbee-app.png",
    "techStack": [
      { "name": "React Native", "icon": "/images/react.svg" },
      { "name": "Node.js", "icon": "/images/nodejs.svg" },
      { "name": "Express.js", "icon": "/images/express.png" },
      { "name": "Firebase", "icon": "/images/firebase.svg" },
      { "name": "MongoDB", "icon": "/images/mongodb.svg" }
    ],
    "overview": "Kutsbee is a full-featured mobile application designed for seamless salon and spa appointment booking. It empowers users to easily search, discover, and schedule services from a wide range of beauty and wellness providers based on location, service category (like hair styling, coloring, spa treatments, etc.), price, and user reviews. The app features a clean, intuitive interface allowing users to view salon details, select time slots from a dynamic calendar, and confirm bookings in just a few taps. Integrated payment methods support both online card payments and cash options. For salon owners, Kutsbee offers a backend system to manage bookings, service listings, pricing, staff, and availability in real time. The goal of Kutsbee is to modernize the beauty service industry by reducing wait times, streamlining appointment management, and improving customer satisfaction with a professional, tech-driven solution.",
    "deployment": {
      "android": "https://play.google.com/store/apps/details?id=com.kutsbee",
      "ios": "https://apps.apple.com/app/id1234567890"
    }
  },
  {
    "id": 4,
    "title": "ConciseApp",
    "image": "/images/pngs/concise-app.png",
    "techStack": [
      { "name": "React Native", "icon": "/images/react.svg" },
      { "name": "Node.js", "icon": "/images/nodejs.svg" },
      { "name": "Express.js", "icon": "/images/express.png" },
      { "name": "Firebase", "icon": "/images/firebase.svg" },
      { "name": "MongoDB", "icon": "/images/mongodb.svg" }
    ],
    "overview": "Concise5 is a microlearning mobile platform designed for busy professionals who want to learn on the go. It offers bite-sized tutorials — each under 5 minutes — in both audio and text formats across key domains like Azure Cloud, Cyber Security, IT Infrastructure, Microsoft, and Professional Development. Users can explore personalized content based on their interests, track progress through a scoring and grading system, and visualize performance using detailed graphs and analytics. The app includes a leaderboard, level-up achievements, playlists for tutorials, and assessment tools to evaluate understanding. Users can select preferred languages and switch between audio or reading modes for flexible learning. With features like biometric login, language preferences, user history, and tutorial value tracking, Concise5 delivers a complete learning experience tailored to individual goals and learning styles.",
    "deployment": {
      "android": "https://play.google.com/store/apps/details?id=com.concise5",
      "ios": "https://apps.apple.com/app/id9876543210"
    }
  },
  {
    "id": 5,
    "title": "SoulMatch",
    "image": "/images/pngs/soulmatch-app.png",
    "techStack": [
      { "name": "React Native", "icon": "/images/react.svg" },
      { "name": "Node.js", "icon": "/images/nodejs.svg" },
      { "name": "Express.js", "icon": "/images/express.png" },
      { "name": "MongoDB", "icon": "/images/mongodb.svg" },
    ],
    "overview": "SoulMatch is a modern matrimonial and partner-finding mobile application designed to help users discover compatible life partners through smart filtering, verified profiles, and secure messaging. Users can register using email, Google, or Facebook, and create rich personal profiles including interests, education, religion, and location. The app offers role-based filters (like Doctor, Engineer, Business, Freelancer) and features such as recently joined/viewed users, image privacy controls, OTP verification for security, and chat with voice message support. SoulMatch emphasizes privacy and personalization, allowing users to control who can see their photos and contact them. With real-time messaging, heart/favorite interactions, and a profile upgrade system, it creates a respectful and engaging space for individuals seeking serious relationships.",
    "deployment": {
      "android": "https://play.google.com/store/apps/details?id=com.soulmatch",
      "ios": "https://apps.apple.com/app/id1122334455"
    }
  }
];
