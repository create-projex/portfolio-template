export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: 1 | 2 | 3 | 4 | 5;
}


export const portfolioData = {
  personal: {
    name: "Dhruv Chheda",
    title: "Full-Stack Developer & Mobile App Creator",
    email: "me@dhruvchheda.com",
    phone: "+918097217836",
    location: "Thane, Maharashtra",
    bio: "I'm a passionate full-stack developer specializing in modern web applications, cross-platform mobile apps, and scalable backend systems. With expertise in React, React Native, Node.js, and cloud technologies, I create comprehensive solutions with clean code and modern best practices.",
    avatar: "/avatar.jpg",
    resume: "/Dhruv_Chheda_Resume__Full_Stack_Engineer.pdf",
    social: {
      github: "https://github.com/chhedadhruv",
      linkedin: "https://linkedin.com/in/dhruv-chheda",
      email: "mailto:me@dhruvchheda.com",
    },
  },

  projects: [
    {
      id: "mytodo",
      title: "MyTodo - Complete Task Management Ecosystem",
      description: "A modern, full-stack task management solution with web, mobile, and API",
      longDescription: "A modern, full-stack task management solution with web, mobile, and API. Features JWT authentication, real-time sync, dark/light themes, and comprehensive task management with priority levels and due date tracking.",
      image: "/projects/mytodo.jpg",
      tags: ["React", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Nginx"],
      demoUrl: "https://mytodo.dhruvchheda.com",
      sourceUrl: "https://github.com/chhedadhruv/mytodo",
      featured: true,
    },
    {
      id: "trackaexpense",
      title: "TrackaExpense - Personal Finance Manager",
      description: "A comprehensive, ad-free personal finance app built with React Native and Firebase",
      longDescription: "A comprehensive, ad-free personal finance app built with React Native and Firebase. Features expense tracking, income management, savings goals, bill splitting, and graphical insights.",
      image: "/projects/trackaexpense.jpg",
      tags: ["React Native", "Firebase", "React Navigation", "Chart Kit"],
      demoUrl: "https://trackaexpense.dhruvchheda.com",
      sourceUrl: "https://github.com/chhedadhruv/trackaexpense",
      featured: true,
    },
    {
      id: "quote-api",
      title: "Quote API",
      description: "A modern, secure REST API for inspirational quotes with advanced search and filtering",
      longDescription: "A modern, secure REST API for inspirational quotes with advanced search, tag-based filtering, rate limiting, and comprehensive documentation. Deployed on personal home server with Docker and Cloudflare tunnel integration.",
      image: "/projects/quote-api.jpg",
      tags: ["Node.js", "Express", "Docker", "Cloudflare", "PostgreSQL"],
      demoUrl: "https://quotes.dhruvchheda.com",
      sourceUrl: "https://github.com/chhedadhruv/inspirational-quotes-api",
      featured: true,
    },
    {
      id: "quotify",
      title: "Quotify - Daily Inspiration App",
      description: "A beautiful React Native app with 2,127+ inspiring quotes and smart category filtering",
      longDescription: "A beautiful React Native app with 2,127+ inspiring quotes, smart category filtering, home screen widgets, and elegant design. Works completely offline with instant quote loading and cross-platform support.",
      image: "/projects/quotify.jpg",
      tags: ["React Native", "TypeScript", "WidgetKit", "AsyncStorage"],
      demoUrl: "https://play.google.com/store/apps/details?id=com.dhruvchheda.quotify",
      sourceUrl: "https://github.com/chhedadhruv/quotify",
      featured: false,
    },
    {
      id: "trueyouteller",
      title: "TrueYouTeller - Personality Test Platform",
      description: "A delightful personality test website that reveals 16 distinct personality types",
      longDescription: "A delightful personality test website that reveals 16 distinct personality types with spirit animals, career insights, and relationship guidance. Features mini-games and comprehensive personality analysis.",
      image: "/projects/trueyouteller.jpg",
      tags: ["React", "Vite", "Firebase", "TypeScript"],
      demoUrl: "https://trueyouteller.com",
      sourceUrl: "https://github.com/chhedadhruv/trueyouteller",
      featured: false,
    },
    {
      id: "robofriends",
      title: "RoboFriends - Interactive Robot Gallery",
      description: "A modern React web application showcasing unique robot friends with smart search capabilities",
      longDescription: "A modern React web application showcasing unique robot friends with smart search capabilities, real-time suggestions, and beautiful UI animations. Features Google Sheets integration and Robohash avatars.",
      image: "/projects/robofriends.jpg",
      tags: ["React", "React Bootstrap", "Google Sheets API", "Robohash"],
      demoUrl: "https://robofriends.dhruvchheda.com",
      sourceUrl: "https://github.com/chhedadhruv/robofriends",
      featured: false,
    },
  ] as Project[],

  experience: [
    {
      id: "rapturous-tech",
      company: "Rapturous Technology Private Limited",
      position: "Full Stack React Native Developer Engineer",
      duration: "February 15, 2024 - May 15, 2024",
      location: "Delhi, India",
      description: [
        "Developed and maintained mobile applications using React Native",
        "Collaborated with cross-functional teams to implement new features and ensure optimal performance across various devices",
        "Specialized in writing clean code, debugging technical issues, and integrating APIs and third-party libraries",
        "Enhanced app functionality through seamless API integrations and third-party library implementations",
      ],
    },
    {
      id: "redx-ai-club",
      company: "Software Development Cell & REDX-AI Club",
      position: "Mobile App Developer Intern - Suraksha Women Safety App",
      duration: "July 2023 - August 2023",
      location: "Mumbai, India",
      description: [
        "Built a multilingual (3-language) Android and iOS application using React Native, leveraging i18n for localization",
        "Integrated Firebase Authentication (email, password, phone) and Firestore for real-time database functionality",
        "Applied design principles and testing best practices to ensure high reliability and usability",
        "Led an insightful session on 'Mobile App Development with React Native' during winter internship program",
      ],
    },
    {
      id: "cascade-geofencing",
      company: "CASCADE, K.J Somaiya Institute of Technology",
      position: "Geofencing Intern",
      duration: "April 10-14, 2023 - May 30 - June 3, 2023",
      location: "Mumbai, India",
      description: [
        "Focused on Geofencing technology with hands-on experience in plotting agricultural plots",
        "Demonstrated exceptional performance and practical skills in implementation",
        "Gained expertise in location-based services and geospatial technologies",
        "Applied geofencing concepts to real-world agricultural applications",
      ],
    },
    {
      id: "sdc-exam-system",
      company: "Software Development Cell, KJSIT",
      position: "Web Developer - Examination Management System",
      duration: "March 1, 2022 - May 31, 2022",
      location: "Mumbai, India",
      description: [
        "Designed and developed a full-stack web application using ASP.NET for managing university examination workflows",
        "Integrated MS SQL Server for secure, structured database operations including student records and exam data",
        "Gained experience in RESTful services and SQL database querying",
        "Achieved Intermediate Proficiency Level in HTML, CSS, JavaScript, .NET Framework, and MS SQL Server",
      ],
    },
  ] as Experience[],

  skills: [
    // Frontend
    { name: "HTML", category: "frontend", level: 5 },
    { name: "CSS", category: "frontend", level: 5 },
    { name: "JavaScript", category: "frontend", level: 5 },
    { name: "TypeScript", category: "frontend", level: 4 },
    { name: "React", category: "frontend", level: 5 },
    { name: "React Native", category: "frontend", level: 5 },
    { name: "Vite", category: "frontend", level: 4 },
    
    // Backend
    { name: "Node.js", category: "backend", level: 4 },
    { name: ".NET", category: "backend", level: 3 },
    { name: "PostgreSQL", category: "backend", level: 4 },
    { name: "MS SQL Server", category: "backend", level: 3 },
    { name: "Firebase", category: "backend", level: 4 },
    { name: "REST APIs", category: "backend", level: 5 },
    
    // DevOps & Deployment
    { name: "Docker", category: "tools", level: 4 },
    { name: "Nginx", category: "tools", level: 3 },
    { name: "Git", category: "tools", level: 5 },
    
    // Design & Creative Tools
    { name: "Canva", category: "tools", level: 4 },
    { name: "Figma", category: "tools", level: 4 },
    { name: "Photoshop", category: "tools", level: 3 },
    { name: "Illustrator", category: "tools", level: 3 },
    { name: "After Effects", category: "tools", level: 3 },
    { name: "Premiere Pro", category: "tools", level: 3 },
  ] as Skill[],

};
