export interface PersonalInfo {
  fullName: string;
  displayName: string;
  heroGreeting: string;
  heroTitle: string;
  heroSubtitle: string;
  professionalTitle: string;
  education: {
    degree: string;
    university: string;
    academicYear: string;
    graduationYear: string;
  };
  email: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
  resumeUrl: string;
  introduction: string;
  aboutMe: string;
  secondaryHeading: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level?: 'Beginner' | 'Fundamentals' | 'Learning' | 'Core';
}

export interface SkillCategory {
  num: string;
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  num: string;
  category: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  col1: [string, string];
  col2: string;
  githubUrl?: string;
  liveUrl?: string;
  isConcept?: boolean;
  conceptNote?: string;
}

export interface JourneyMilestone {
  num: string;
  title: string;
  description: string;
  focus: string;
}

export const PORTFOLIO_CONFIG: {
  personal: PersonalInfo;
  navLinks: NavLink[];
  tickerItems: string[];
  skillCategories: SkillCategory[];
  projects: Project[];
  journeyMilestones: JourneyMilestone[];
} = {
  personal: {
    fullName: "MASIREDDY VARUN KUMAR REDDY",
    displayName: "VARUN REDDY",
    heroGreeting: "HI, I'M VARUN",
    heroTitle: "AI DEVELOPER & TECHNOLOGY ENTHUSIAST",
    heroSubtitle: "Building intelligent solutions and exploring the future of technology.",
    professionalTitle: "Aspiring AI Developer | Software Developer | Technology Enthusiast",
    education: {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      university: "Sanjay Ghodawat University",
      academicYear: "Second Year",
      graduationYear: "2029",
    },
    email: "mvarunreddymassireddy@gmail.com",
    github: "https://github.com/Varunreddy1207",
    linkedin: "https://www.linkedin.com/in/varun-reddy-placeholder", // Configurable placeholder
    avatarUrl: "./images/profile.svg",
    resumeUrl: "./resume/varun-resume.pdf",
    introduction:
      "I am an aspiring AI developer and technology enthusiast passionate about artificial intelligence, software engineering and building innovative digital products. I enjoy exploring emerging technologies, developing practical applications and solving real-world problems through technology. My long-term ambition is to build intelligent products and technology companies that create meaningful impact.",
    aboutMe:
      "I am a second-year B.Tech student specializing in Artificial Intelligence and Data Science at Sanjay Ghodawat University. I am passionate about software development, artificial intelligence and emerging technologies. I enjoy building projects, learning new programming concepts and experimenting with innovative ideas. My goal is to become an AI developer and eventually build technology products that solve meaningful real-world problems.",
    secondaryHeading: "ALWAYS LEARNING. ALWAYS BUILDING.",
  },

  navLinks: [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CONTACT", href: "#contact" },
  ],

  tickerItems: [
    "ARTIFICIAL INTELLIGENCE",
    "PYTHON",
    "JAVASCRIPT",
    "REACT",
    "WEB DEVELOPMENT",
    "SOFTWARE ENGINEERING",
    "MACHINE LEARNING",
    "INNOVATION",
  ],

  skillCategories: [
    {
      num: "01",
      category: "PROGRAMMING",
      description: "Core logic, computational problem-solving and algorithmic foundations.",
      skills: [
        { name: "Python", level: "Beginner" },
        { name: "JavaScript", level: "Fundamentals" },
        { name: "HTML", level: "Core" },
        { name: "CSS", level: "Core" },
      ],
    },
    {
      num: "02",
      category: "FRONTEND",
      description: "Modern component architectures, interactive animations and responsive design.",
      skills: [
        { name: "React", level: "Learning" },
        { name: "Responsive Web Development", level: "Core" },
      ],
    },
    {
      num: "03",
      category: "BACKEND",
      description: "Server architecture, microservices, routing and asynchronous programming.",
      skills: [
        { name: "Node.js", level: "Learning" },
        { name: "Express.js", level: "Learning" },
        { name: "REST APIs", level: "Learning" },
      ],
    },
    {
      num: "04",
      category: "DATABASE",
      description: "Data modeling, schema design, relational queries and cloud databases.",
      skills: [
        { name: "SQL", level: "Fundamentals" },
        { name: "MongoDB", level: "Learning" },
        { name: "PostgreSQL", level: "Learning" },
      ],
    },
    {
      num: "05",
      category: "AI & TECHNOLOGY",
      description: "Intelligent systems, modern neural patterns and applied AI integration.",
      skills: [
        { name: "Artificial Intelligence", level: "Fundamentals" },
        { name: "Machine Learning Fundamentals", level: "Learning" },
        { name: "Generative AI", level: "Learning" },
        { name: "Prompt Engineering", level: "Fundamentals" },
      ],
    },
    {
      num: "06",
      category: "TOOLS",
      description: "Industry-standard developer tooling, version control and agentic workflows.",
      skills: [
        { name: "Git", level: "Core" },
        { name: "GitHub", level: "Core" },
        { name: "Google Antigravity", level: "Core" },
        { name: "VS Code", level: "Core" },
      ],
    },
  ],

  projects: [
    {
      num: "01",
      category: "Web Platform",
      name: "RIDECOMPARE",
      tagline: "Multi-Provider Ride Fare Comparison Platform",
      description:
        "RideCompare is a ride comparison platform designed to help users compare transportation prices across different providers such as Rapido, Uber and Ola.",
      technologies: ["React", "JavaScript", "Node.js", "APIs", "Supabase", "PostgreSQL"],
      col1: ["./images/projects/ridecompare-ui.png", "./images/projects/ridecompare-chip.jpg"],
      col2: "./images/projects/ridecompare.png",
      githubUrl: "https://github.com/Varunreddy1207/Ridecompare",
      liveUrl: "",
    },
    {
      num: "02",
      category: "Product Platform",
      name: "PRINTFLOW",
      tagline: "QR-Enabled Document Printing & Queue System",
      description:
        "PrintFlow is a document printing platform where users can scan a QR code, upload documents, select printing services and complete payments.",
      technologies: [
        "Web Development",
        "Backend APIs",
        "Database Integration",
        "Payment Integration",
      ],
      col1: ["./images/projects/printflow-ui.svg", "./images/projects/printflow.svg"],
      col2: "./images/projects/printflow.svg",
      githubUrl: "https://github.com/Varunreddy1207",
      liveUrl: "",
    },
    {
      num: "03",
      category: "Personal Innovation Concept",
      name: "VOZX",
      tagline: "Next-Gen Intelligent Automotive & AI Vision",
      description:
        "VOZX is my long-term technology vision focused on artificial intelligence, intelligent automotive systems and innovative technology products.",
      isConcept: true,
      conceptNote: "Personal Innovation Concept (Future-Oriented Vision)",
      technologies: ["Artificial Intelligence", "Autonomous Systems", "Future Tech"],
      col1: ["./images/projects/vozx-logo.png", "./images/projects/vozx-car.png"],
      col2: "./images/projects/vozx-concept.png",
      githubUrl: "https://github.com/Varunreddy1207",
      liveUrl: "",
    },
  ],

  journeyMilestones: [
    {
      num: "01",
      title: "Started learning programming.",
      description:
        "Began my coding journey by mastering computer science fundamentals, logic design, and problem-solving through Python and foundational programming concepts.",
      focus: "Foundational Programming & Logic",
    },
    {
      num: "02",
      title: "Explored frontend development and web technologies.",
      description:
        "Learned modern web technologies including HTML, CSS, JavaScript, and React, focusing on responsive design, UI dynamics, and interactive web experiences.",
      focus: "Web Technologies & React Architecture",
    },
    {
      num: "03",
      title: "Developed practical academic projects.",
      description:
        "Applied software engineering skills to build functional real-world projects such as RideCompare and PrintFlow, integrating frontend interfaces with databases and backend APIs.",
      focus: "Applied Product Engineering & Databases",
    },
    {
      num: "04",
      title: "Started exploring artificial intelligence and machine learning.",
      description:
        "Enrolled in B.Tech AI & Data Science at Sanjay Ghodawat University; actively exploring predictive modeling, data science pipelines, and generative AI systems.",
      focus: "AI, Machine Learning & Data Science",
    },
    {
      num: "05",
      title: "Building software projects and exploring technology entrepreneurship.",
      description:
        "Focusing on crafting intelligent digital products, conceptualizing innovative solutions like VOZX, and preparing to build high-impact technology ventures.",
      focus: "Intelligent Systems & Technology Entrepreneurship",
    },
  ],
};
