import {
  Project,
  Experience,
  SkillDomain,
  Certification,
  Achievement,
  EducationItem,
  CodingProfile,
  NavLink
} from '../types';

export const navLinksData: NavLink[] = [
  { name: 'Work', href: '#projects', iconName: 'FolderGit2' },
  { name: 'About', href: '#about', iconName: 'User' },
  { name: 'Experience', href: '#experience', iconName: 'Briefcase' },
  { name: 'Skills', href: '#skills', iconName: 'Code2' },
  { name: 'Contact', href: '#contact', iconName: 'Mail' }
];

export const projectsData: Project[] = [
  {
    id: 'ruraldr-xai',
    title: 'RuralDR-XAI — DR Screening AI',
    category: 'Healthcare AI / XAI',
    date: '2026',
    tagline: 'Explainable AI diabetic retinopathy screening & clinical decision support for rural healthcare.',
    desc: 'Evidence-grounded diabetic retinopathy screening and clinical decision-support system developed for SIH26038, sponsored by MathWorks.',
    problem: 'Rural healthcare centers in India lack specialized ophthalmologists and interpretable AI diagnostics for early diabetic retinopathy screening in low-resource environments.',
    solution: 'Engineered an evidence-grounded screening engine combining ICDR 5-class severity grading, fundus image quality assessment (FIQA), Grad-CAM/Grad-CAM++/Score-CAM explainability, and clinical report generation.',
    keyFeatures: [
      '5-Class ICDR Diabetic Retinopathy Severity Grading (Grade 0–4)',
      'Automated Fundus Image Quality Assessment (FIQA) & Guidance',
      'Retinal Lesion Localization (Microaneurysms, Exudates, Hemorrhages)',
      'Grad-CAM, Grad-CAM++ & Score-CAM Explainability Pipelines',
      'Evidence Consistency Engine & Confidence Calibration',
      'FastAPI Screening Dashboard & Automated Clinical PDF Reporting'
    ],
    tech: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'MATLAB', 'Simulink', 'Explainable AI'],
    featured: true,
    github: 'https://github.com/Surya-RedOps/RuralDR-XAI',
    link: 'https://github.com/Surya-RedOps/RuralDR-XAI',
    color: 'from-emerald-500/20 to-teal-600/20',
    iconName: 'Cpu',
    metrics: 'SIH26038 Project · Sponsored by MathWorks'
  },
  {
    id: 'lifeos-agentverse',
    title: 'LifeOS — AgentVerse Hackathon',
    category: 'Multi-Agent AI · AI Agents',
    date: '2026',
    tagline: 'Autonomous multi-agent AI workforce for software & product development workflows.',
    desc: 'Autonomous AI ecosystem developed for the AgentVerse Hackathon, designed as an AI workforce for software and product development workflows. Combines specialized AI agents for research, planning, financial estimation, persistent memory, quality/security review, and stakeholder communication with collaborative multi-agent orchestration.',
    problem: 'Product development teams spend immense manual effort orchestrating market research, milestone roadmapping, infrastructure cost estimation, and security QA across fragmented tools.',
    solution: 'Designed a Single-Agent + Multi-Agent fleet architecture with centralized context, agent coordination, retry/fallback mechanisms, and automated verification workflows using LangGraph and FastAPI.',
    keyFeatures: [
      'Single-Agent + Multi-Agent Fleet Orchestration Architecture',
      'Research Agent: Multi-Source Web, Paper & Repo Research Verification',
      'Planning Agent: LangGraph Milestone-Based Structured Execution Plans',
      'Finance Agent: Development, Infrastructure & Multi-Cloud Costing',
      'Memory Agent: pgvector Persistent Memory & Knowledge Graph Visualizer',
      'Review Agent: Automated QA & Security Review with Approval Gate',
      'Communication Agent: Stakeholder-Ready Documents & Presentations'
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'Google Gemini', 'Next.js', 'PostgreSQL', 'pgvector', 'Docker'],
    featured: true,
    github: 'https://github.com/saikriz898/AgentVerse-Hackathon',
    link: 'https://github.com/saikriz898/AgentVerse-Hackathon',
    color: 'from-indigo-500/20 to-purple-600/20',
    iconName: 'Cpu',
    metrics: 'AgentVerse Hackathon Build'
  },
  {
    id: 'iniq-platform',
    title: 'INIQ — Interview Intelligence Platform',
    category: 'Full-Stack AI / Web Engineering',
    date: '2026',
    tagline: 'Full-stack AI-powered interview preparation platform built with React 19 & Node.js.',
    desc: 'Full-stack interview preparation platform designed to provide users with an intelligent, interactive environment for preparing for technical and interview-related questions.',
    problem: 'Engineering candidates lack real-time structured feedback and interactive AI assistance when practicing technical interview scenarios.',
    solution: 'Built a Client–Server architecture using React 19, Node.js/Express, JWT session authentication, protected AI chat assistance, and rate limiting.',
    keyFeatures: [
      'React 19 + Vite + Tailwind CSS & Node.js Architecture',
      'Protected AI Chat Functionality for Interactive Interview Prep',
      'JWT Authentication & Bcrypt Password Hashing',
      'API Rate Limiting & Request Queuing Protection',
      'MongoDB / Mongoose Persistent Application Store',
      'CORS-Controlled Client/Server Proxying'
    ],
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    featured: true,
    github: 'https://github.com/saikriz898/',
    link: 'https://github.com/saikriz898/',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconName: 'Code2',
    metrics: 'Production Web App'
  },
  {
    id: 'datasentinel-ai',
    title: 'DataSentinel AI — Privacy & Security Platform',
    category: 'Privacy Engineering / Cybersecurity',
    date: 'Mar 2026',
    tagline: 'AI-powered privacy, DPDPA compliance & PII security platform built for Cyberathon.',
    desc: 'Intelligent security and data-protection platform helping organizations identify sensitive privacy risks, scan exposed credentials/PII, and manage DPDPA compliance requirements.',
    problem: 'Organizations handle sensitive personal data across distributed developer repositories and cloud storage without automated tools to audit exposed credentials and ensure DPDPA regulatory compliance.',
    solution: 'Engineered an AI-assisted privacy and secret-scanning engine delivering automated risk assessments, DPDPA workflow automation, and real-time security threat webhooks.',
    keyFeatures: [
      'Automated PII & Secret Scanning Engine',
      'AI-Assisted Privacy Risk Identification & Assessment',
      'DPDPA-Oriented Compliance Workflow Support',
      'Role-Based Security Dashboard & Audit Logs',
      'Real-Time Threat Notifications & Webhooks'
    ],
    tech: ['Python', 'React', 'Node.js', 'MongoDB', 'Privacy Engineering', 'NLP'],
    featured: true,
    github: 'https://github.com/Surya-RedOps/DPDPA_Guardian',
    link: 'https://github.com/Surya-RedOps/DPDPA_Guardian',
    color: 'from-indigo-600/20 to-blue-500/20',
    iconName: 'ShieldCheck',
    metrics: 'Cyberathon ’26 Participant · DPDPA Guardian'
  },
  {
    id: 'mindbridge-ai',
    title: 'MindBridge — AI Mental Health Support',
    category: 'Design Thinking / Healthcare AI',
    date: '2026',
    tagline: 'Human-centered AI mental health monitoring & support platform.',
    desc: 'Human-centered mental health platform combining clinical assessments, mood tracking, AI companionship, journal sentiment analysis, therapist booking, and crisis intervention.',
    problem: 'Individuals lack continuous, non-stigmatizing mental health support, leading to late intervention during psychological stress.',
    solution: 'Designed a human-centered user journey (Assessment → Monitoring → Reflection → AI Companion → Therapist Booking) backed by Next.js, Groq/Llama AI, and Upstash Redis.',
    keyFeatures: [
      'PHQ-9, GAD-7 & PSS Clinical Assessments & Scoring',
      'Daily Mood, Sleep, Emotion & Trigger Tracking',
      'Groq / Llama AI Supportive Companion & Coping Strategies',
      'Journal Sentiment Analysis & Well-Being Analytics',
      'Therapist Discovery, Booking & Direct Helpline Access'
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Drizzle ORM', 'Groq / Llama', 'Upstash Redis'],
    featured: true,
    github: 'https://github.com/saikriz898/MindBridge-An-AI-Powered-Mental-Health-Monitoring-and-Support-System',
    link: 'https://github.com/saikriz898/MindBridge-An-AI-Powered-Mental-Health-Monitoring-and-Support-System',
    color: 'from-purple-500/20 to-pink-500/20',
    iconName: 'Globe',
    metrics: 'Design Thinking AI Project'
  },
  {
    id: 'reux-evaluation',
    title: 'REUX — AI Academic Evaluation Platform',
    category: 'Academic AI / Full-Stack',
    date: '2026',
    tagline: 'AI-powered evaluation assessing conceptual understanding & reasoning over rote memorization.',
    desc: 'AI-powered academic evaluation platform designed to assess students based on conceptual understanding and reasoning. Combines automated subjective answer evaluation, academic analytics, weak-concept detection, anti-cheating controls, reporting, and notifications.',
    problem: 'Traditional online evaluation relies on rote multiple-choice questions or manual subjective grading, lacking automated conceptual gap detection and proctoring controls.',
    solution: 'Engineered a full-stack platform using React 18, Node.js/Express, Drizzle ORM + Neon PostgreSQL, and Groq/Llama 3 for conceptual AI answer evaluation, automated weak-topic identification, and tab-switch anti-cheat logs.',
    keyFeatures: [
      'AI-Powered Conceptual Evaluation of Subjective Answers',
      'Automated Weak-Concept & Individual Gap Analytics',
      'Anti-Cheat Controls (Tab-Switch Logs, Copy/Paste Prevention)',
      'Student & Educator Interactive Dashboards (Recharts)',
      'Professional PDF Result Cards & Excel Reports (jsPDF / SheetJS)',
      'JWT Access/Refresh Tokens & Bcrypt Password Protection'
    ],
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Groq / Llama 3', 'JWT'],
    featured: true,
    github: 'https://github.com/saikriz898/reux-concept-evaluation-system',
    link: 'https://github.com/saikriz898/reux-concept-evaluation-system',
    color: 'from-blue-600/20 to-indigo-600/20',
    iconName: 'GraduationCap',
    metrics: 'Academic AI System'
  },
  {
    id: 'smart-coffee-vending',
    title: 'Smart Coffee Vending System',
    category: 'Enterprise Java / Systems',
    date: '2025',
    tagline: 'Enterprise Java desktop application with multi-layer MVC architecture & MySQL persistence.',
    desc: 'Java-based smart coffee vending application built to demonstrate enterprise application architecture, database integration, secure authentication, inventory management, transaction workflows, and administrative analytics.',
    problem: 'Legacy desktop vending interfaces lack modular multi-layer architecture, transactional integrity, automated unit testing, and real-time inventory telemetry.',
    solution: 'Built a 4-layer MVC enterprise application using Java 11+, Swing GUI, MySQL 8, Maven, and Docker with BCrypt password hashing, connection pooling, and JUnit 5 test coverage.',
    keyFeatures: [
      'Built 4-Layer MVC Architecture (Presentation, Service, DAO, DB)',
      'Customer Registration, Menu Browsing & Wallet Checkout',
      'Admin Dashboard for Inventory, Orders & Sales Analytics',
      'MySQL Transactional Integrity & Connection Pooling',
      'Password Hashing, SQLi Prevention & Health Checks',
      'JUnit 5 Unit/Integration Tests & Docker Support'
    ],
    tech: ['Java 11+', 'Java Swing', 'MySQL 8', 'Maven', 'JUnit 5', 'Docker', 'SLF4J'],
    featured: true,
    github: 'https://github.com/saikriz898/smart-coffee-vending-system',
    link: 'https://github.com/saikriz898/smart-coffee-vending-system',
    color: 'from-amber-600/20 to-orange-600/20',
    iconName: 'Coffee',
    metrics: 'Enterprise Java App'
  },
  {
    id: 'eshwar-eventsphere',
    title: 'Eshwar EventSphere',
    category: 'Full-Stack Web App',
    date: '2026',
    tagline: 'Campus event governance and ticketing platform for Sri Eshwar College.',
    desc: 'Developing a full-stack campus event management platform connecting 3,000+ students with department event organizers, QR ticketing, and real-time attendance verification.',
    problem: 'Fragmented campus communication led to missed event registrations, inefficient manual check-ins, and lack of unified attendance reporting for faculty leads.',
    solution: 'Built a centralized web portal with relational database modeling in PostgreSQL, role-based admin workflows, QR registration passes, and live RSVP metrics.',
    keyFeatures: [
      'QR Code Event Registration & Fast Verification',
      'Organizer Dashboard & Department Analytics',
      'Role-Based Access Control (Admin / Faculty / Student)',
      'Automated Calendar Sync & Reminder Schedule'
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    featured: true,
    github: 'https://github.com/saikriz898/eshwar-eventsphere',
    link: 'https://github.com/saikriz898/eshwar-eventsphere',
    color: 'from-purple-500/20 to-indigo-500/20',
    iconName: 'Calendar',
    metrics: 'Active Production Build'
  },
  {
    id: 'smartplay-advisor',
    title: 'SmartPlayAdvisor AI',
    category: 'AI & Machine Learning',
    date: 'Oct 2025',
    tagline: 'ML-driven game recommendation engine utilizing content & collaborative filtering.',
    desc: 'Created an intelligent recommendation algorithm that analyzes player preferences, playtime metrics, and genre affinities to deliver personalized game recommendations.',
    problem: 'Generic search filters fail to capture subtle gameplay preferences, leading to uninspired suggestions and poor content discovery.',
    solution: 'Implemented machine learning pipelines using Scikit-Learn, vectorizing gameplay metadata to output high-accuracy game recommendations.',
    keyFeatures: [
      'Scikit-Learn Recommendation Pipeline',
      'Multi-Vector Affinity Score Engine',
      'Custom User Preference Profiling',
      'Interactive Discovery UI'
    ],
    tech: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-Learn'],
    featured: true,
    github: 'https://github.com/saikriz898/SmartPlayAdvisor',
    link: 'https://github.com/saikriz898/SmartPlayAdvisor',
    color: 'from-purple-600/20 to-pink-500/20',
    iconName: 'Cpu',
    metrics: 'Scikit-Learn ML Model'
  },
  {
    id: 'grievance-system',
    title: 'Grievance Management System',
    category: 'Full-Stack Web App',
    date: 'Oct 2025',
    tagline: 'Institutional issue escalation and ticket resolution platform.',
    desc: 'Full-stack institutional management system enabling students and staff to log, track, and resolve operational complaints with automated SLA tracking.',
    problem: 'Unstructured complaints in institutions get delayed without transparent status tracking and clear administrative accountability.',
    solution: 'Engineered a secure React + Node.js platform with MySQL relational persistence, JWT auth, SLA ticket routing, and real-time progress timelines.',
    keyFeatures: [
      'Role-Based Escalation Matrix (Student / HOD / Principal)',
      'JWT Signed Session Security & RBAC',
      'Real-Time Ticket Progress Timeline',
      'Analytics Dashboard for Administrative Audits'
    ],
    tech: ['React', 'Node.js', 'MySQL', 'Express', 'JWT'],
    featured: true,
    github: 'https://github.com/saikriz898/Grievance-Management-System',
    link: 'https://github.com/saikriz898/Grievance-Management-System',
    color: 'from-blue-600/20 to-cyan-500/20',
    iconName: 'Layout',
    metrics: 'Production Web App'
  },
  {
    id: 'cryptoalertpro',
    title: 'CryptoAlertPro',
    category: 'Python Backend',
    date: 'May 2025',
    tagline: 'Real-time crypto monitoring & automated SMS threshold trigger system.',
    desc: 'Built a Python backend monitoring live market price streams and triggering automated SMS threshold notifications via Twilio integration.',
    problem: 'Monitoring price volatility and technical indicator breaches requires continuous manual chart tracking.',
    solution: 'Created an automated Django worker pipeline storing price series in MongoDB and evaluating indicator rules against real-time market APIs.',
    keyFeatures: [
      'Real-Time Market Ticker Ingestion',
      'Automated Twilio SMS Alert Triggers',
      'Technical Indicator Calculation (RSI/MA)',
      'MongoDB Time-Series Data Layer'
    ],
    tech: ['Django', 'MongoDB', 'Twilio', 'Python', 'REST API'],
    featured: false,
    github: 'https://github.com/saikriz898/CryptoAlertPro',
    link: 'https://github.com/saikriz898/CryptoAlertPro',
    color: 'from-orange-500/20 to-yellow-500/20',
    iconName: 'Terminal'
  },
  {
    id: 'school-erp',
    title: 'School Management ERP',
    category: 'Full-Stack Internship',
    date: 'Dec 2025',
    tagline: 'Production ERP software engineered during internship at Aptitude Guru Hem.',
    desc: 'Full-stack institutional software managing student admissions, academic records, attendance rosters, and role-based staff portals.',
    problem: 'Paper-based administrative logs and disconnected spreadsheets caused high manual effort and slow query lookups.',
    solution: 'Designed modular Express API routes backed by MongoDB document stores, paired with responsive React administrative dashboards.',
    keyFeatures: [
      'Role-Based Portals for Faculty & Admins',
      'Student Admissions & Attendance Roster',
      'RESTful API Integration & Validation',
      'MongoDB Aggregation Pipeline'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    featured: false,
    github: 'https://github.com/saikriz898',
    link: 'https://aptitudeguru.in',
    color: 'from-emerald-500/20 to-teal-500/20',
    iconName: 'Briefcase'
  },
  {
    id: 'itineraryhub',
    title: 'ItineraryHub',
    category: 'Java Spring Boot',
    date: 'Oct 2025',
    tagline: 'Java Spring Boot microservices travel management backend.',
    desc: 'Modular backend service for multi-city trip planning, route mapping, and schedule customization.',
    problem: 'Complex travel planning requires resilient backend APIs to manage multi-city stops and budget allocations.',
    solution: 'Implemented Spring Boot RESTful services with domain-driven modular architecture and PostgreSQL relational persistence.',
    keyFeatures: [
      'Spring Boot Architecture',
      'Multi-City Trip Customization API',
      'Relational Database Schema Design',
      'Clean Controller-Service-Repository Pattern'
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
    featured: false,
    github: 'https://github.com/saikriz898/ItineraryHub',
    link: 'https://github.com/saikriz898/ItineraryHub',
    color: 'from-green-600/20 to-teal-500/20',
    iconName: 'Code2'
  },
  {
    id: 'tech-spot-mobiles',
    title: 'Tech-Spot-Mobiles',
    category: 'Web Development',
    date: 'Dec 2024',
    tagline: 'Award-winning mobile marketplace web app (🏆 3rd Prize Winner).',
    desc: 'Responsive product marketplace interface created for college hackathon, securing 3rd Prize.',
    problem: 'Delivering an interactive, fast mobile catalogue experience without heavy framework overhead during a 24-hour hackathon.',
    solution: 'Crafted lightweight HTML5/CSS3/JavaScript architecture featuring real-time client filtering and modal product views.',
    keyFeatures: [
      'Real-Time Client Filter Engine',
      'Interactive Mobile Spec Modal',
      '🏆 3rd Prize Hackathon Award',
      'Zero-Dependency Lightweight Bundle'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    featured: false,
    github: 'https://github.com/saikriz898/Tech-Spot-Mobiles',
    link: 'https://saikriz898.github.io/Tech-Spot-Mobiles/',
    color: 'from-red-500/20 to-orange-500/20',
    iconName: 'Globe'
  },
  {
    id: 'createathon-2024',
    title: 'Createathon 2024 Portal',
    category: 'Hackathon Debut',
    date: 'Nov 2024',
    tagline: 'Event tracking portal for Createathon Hackathon at Sri Eshwar College.',
    desc: 'Debut GitHub project serving as the central schedule hub for hackathon participants.',
    problem: 'Event attendees needed a fast, mobile web schedule to track live speaker sessions and room locations.',
    solution: 'Designed clean event schedule portal featuring responsive schedule cards and venue navigation guides.',
    keyFeatures: [
      'Live Event Schedule Timeline',
      'Department Hackathon Debut',
      'Clean Mobile Layout',
      'GitHub Pages Production Build'
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    featured: false,
    github: 'https://github.com/saikriz898/Createathon-2024',
    link: 'https://createathon.github.io/Createathon2024/',
    color: 'from-indigo-500/20 to-purple-600/20',
    iconName: 'Calendar'
  }
];

export const skillsDomainData: SkillDomain[] = [
  {
    category: 'Core & Systems',
    description: 'Algorithmic fundamentals, object-oriented design, and memory efficiency.',
    skills: [
      { name: 'C', level: 'Advanced Core', iconName: 'SiC', badge: 'Certified' },
      { name: 'C++', level: 'DSA & OOP', iconName: 'SiCplusplus', badge: 'Certified' },
      { name: 'Java', level: 'Spring & OOP', iconName: 'FaJava' },
      { name: 'Python', level: 'Automation & ML', iconName: 'FaPython' },
      { name: 'JavaScript (ES6+)', level: 'Async & Web', iconName: 'FaJs' },
      { name: 'Dart', level: 'Mobile Systems', iconName: 'SiDart' }
    ]
  },
  {
    category: 'Full-Stack Web & Mobile',
    description: 'Modern frontend interfaces and scalable REST API architectures.',
    skills: [
      { name: 'React.js', level: 'Component Systems', iconName: 'FaReact' },
      { name: 'Node.js', level: 'Backend Runtime', iconName: 'FaNodeJs' },
      { name: 'Express.js', level: 'REST APIs', iconName: 'SiExpress' },
      { name: 'Tailwind CSS', level: 'Design Systems', iconName: 'SiTailwindcss' },
      { name: 'HTML5 / CSS3', level: 'Semantic Markup', iconName: 'FaHtml5' },
      { name: 'Flutter', level: 'Cross-Platform UI', iconName: 'SiFlutter' }
    ]
  },
  {
    category: 'Databases & Infrastructure',
    description: 'Relational & document databases, authentication, and containerization.',
    skills: [
      { name: 'PostgreSQL', level: 'Relational DB', iconName: 'SiPostgresql' },
      { name: 'MongoDB', level: 'NoSQL Document Store', iconName: 'SiMongodb' },
      { name: 'MySQL', level: 'Relational DB', iconName: 'SiMysql' },
      { name: 'Docker', level: 'Containers', iconName: 'SiDocker' },
      { name: 'RESTful Architecture', level: 'API Contracts', iconName: 'Globe' },
      { name: 'JWT Auth', level: 'RBAC Security', iconName: 'SiJsonwebtokens' }
    ]
  },
  {
    category: 'AI & Data Engineering',
    description: 'Machine learning algorithms, numerical computing, and AI integration.',
    skills: [
      { name: 'Machine Learning', level: 'Scikit-Learn Models', iconName: 'Cpu' },
      { name: 'OpenCV', level: 'Vision Processing', iconName: 'SiOpencv' },
      { name: 'Pandas', level: 'Data Wrangling', iconName: 'Database' },
      { name: 'NumPy', level: 'Matrix Computation', iconName: 'Code2' }
    ]
  },
  {
    category: 'Developer Tooling & UX',
    description: 'Version control, API testing, and interface prototyping.',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control', iconName: 'FaGitAlt' },
      { name: 'Postman', level: 'API Testing', iconName: 'SiPostman' },
      { name: 'VS Code', level: 'IDE Workflow', iconName: 'Terminal' },
      { name: 'Figma', level: 'UI Prototyping', iconName: 'FaFigma' }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'aptitude-guru-hem',
    company: 'Aptitude Guru Hem',
    role: 'Full Stack Developer Intern',
    type: 'Internship',
    duration: 'Dec 2025',
    location: 'Chennai, India',
    desc: 'Engineered a full-stack School Management ERP platform managing student admissions, academic rosters, and multi-role RBAC portals.',
    details: [
      'Architected modular Express backend APIs with RBAC authentication.',
      'Designed responsive React dashboards for student & faculty rosters.'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    link: 'https://aptitudeguru.in',
    github: 'https://github.com/saikriz898/',
    impact: 'Production ERP software for institutional workflows.',
    upcoming: false,
    status: 'Completed'
  },
  {
    id: 'upcoming-opportunities',
    company: 'Open for Opportunities',
    role: 'Upcoming Software Engineering Roles',
    type: 'Upcoming',
    duration: '2026',
    location: 'Remote / On-Site',
    desc: 'Actively seeking 2026 software engineering internships and full-stack developer roles. Ready to build scalable web architecture.',
    details: [
      'Available for Full-Stack, Web & Systems Developer roles.',
      'Core stack: React, Node.js, C++, Python, PostgreSQL & MongoDB.'
    ],
    tech: ['Full-Stack', 'Software Engineering', 'Systems Architecture'],
    link: '#contact',
    github: 'https://github.com/saikriz898',
    impact: 'Ready for production engineering teams.',
    upcoming: true,
    status: 'Available'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'c-spoken-tutorial',
    title: 'C Programming National Certification',
    issuer: 'Spoken Tutorial – IIT Bombay',
    category: 'National Certification',
    date: '2024',
    desc: 'National certification exam conducted remotely by IIT Bombay covering C memory model, pointers, file handling, and structured programming. Passed with distinction.',
    link: 'https://spoken-tutorial.org',
    tags: ['C', 'IIT Bombay', 'Distinction', 'Memory Management'],
    score: '87.5% (Distinction)',
    certificateId: 'IITB-ST-C-2024-875',
    featured: true,
    iconName: 'Award',
    skillsLearned: [
      'C Memory Model & Pointer Arithmetic',
      'Dynamic Memory Allocation (malloc/free)',
      'Low-Level File Handling & Streams',
      'Structs, Unions & Bitwise Operations',
      'Algorithmic Logic in Structured C'
    ]
  },
  {
    id: 'dsa-abdul-bari',
    title: 'Mastering Data Structures & Algorithms using C/C++',
    issuer: 'Udemy (Instructor: Abdul Bari)',
    category: 'Algorithms & DSA',
    date: 'May 2025',
    desc: 'In-depth 58.5-hour rigorous training in algorithm design, memory management, recursion, trees, graphs, and dynamic programming optimization.',
    link: 'https://www.udemy.com',
    tags: ['C++', 'Data Structures', 'Algorithms', 'Memory Optimization'],
    hours: '58.5 Hours',
    score: 'Mastery Completed',
    certificateId: 'UC-585-DSA-AB-2025',
    featured: true,
    iconName: 'Cpu',
    skillsLearned: [
      'Recursion & Backtracking Algorithms',
      'AVL Trees, B-Trees & Binary Heap Trees',
      'Graph Traversals (BFS, DFS, Dijkstra, Prim)',
      'Dynamic Programming & Memoization',
      'Time & Space Complexity Optimization'
    ]
  },
  {
    id: 'cpp-spoken-tutorial',
    title: 'C++ Programming National Certification',
    issuer: 'Spoken Tutorial – IIT Bombay',
    category: 'National Certification',
    date: '2024',
    desc: 'Certification exam conducted by IIT Bombay testing object-oriented design, operator overloading, and inheritance hierarchies in C++.',
    link: 'https://spoken-tutorial.org',
    tags: ['C++', 'IIT Bombay', 'OOP', 'Inheritance'],
    score: '62.5%',
    certificateId: 'IITB-ST-CPP-2024-625',
    featured: false,
    iconName: 'GraduationCap',
    skillsLearned: [
      'Object-Oriented Architecture (Encapsulation, Polymorphism)',
      'Operator Overloading & Custom Constructors',
      'Inheritance Hierarchies & Virtual Functions',
      'C++ Standard I/O Streams & Exception Blocks'
    ]
  },
  {
    id: 'js-bootcamp',
    title: 'JavaScript Web Engineering Bootcamp',
    issuer: 'LetsUpgrade + NSDC + GDG MAD',
    category: 'Web Engineering',
    date: 'Mar 2025',
    desc: 'Intensive 3-day bootcamp covering modern ES6+ syntax, asynchronous JS, DOM execution context, and RESTful API integrations.',
    link: 'https://letsupgrade.in',
    tags: ['JavaScript', 'ES6+', 'Web Dev', 'Async/Await'],
    hours: '3-Day Intensive',
    certificateId: 'LU-NSDC-JS-2025-88',
    featured: false,
    iconName: 'Code2',
    skillsLearned: [
      'ES6+ Promises, Async/Await & Event Loop',
      'DOM Manipulation & Event Propagation',
      'Fetch API & RESTful Endpoints Ingestion',
      'Modular JavaScript Bundling Concepts'
    ]
  },
  {
    id: 'cpp-bootcamp',
    title: 'C++ OOP Intensive Bootcamp',
    issuer: 'LetsUpgrade + NSDC',
    category: 'Systems Programming',
    date: 'Jan 2025',
    desc: 'Comprehensive practical training covering C++ class abstractions, templates, exception handling, and optimized I/O operations.',
    link: 'https://letsupgrade.in',
    tags: ['C++', 'OOP', 'NSDC', 'Templates'],
    hours: 'Bootcamp',
    certificateId: 'LU-NSDC-CPP-2025-41',
    featured: false,
    iconName: 'ShieldCheck',
    skillsLearned: [
      'Class Abstractions & Access Modifiers',
      'Generic Programming with C++ Templates',
      'Structured Exception Handling',
      'I/O Optimization Techniques'
    ]
  },
  {
    id: 'python-beginners',
    title: 'Python Software Engineering Fundamentals',
    issuer: 'Udemy (Instructor: Cyber Quince)',
    category: 'Systems Programming',
    date: 'Oct 2024',
    desc: 'Foundational course covering Python data structures, module architecture, file I/O, and object-oriented scripting.',
    link: 'https://www.udemy.com',
    tags: ['Python', 'Scripting', 'Basics', 'File I/O'],
    hours: 'Foundational',
    certificateId: 'UC-PY-FUND-2024-90',
    featured: false,
    iconName: 'BookOpen',
    skillsLearned: [
      'Python Native Data Structures & Methods',
      'Module Architecture & Package Management',
      'File System I/O & Exception Blocks',
      'Object-Oriented Scripting Fundamentals'
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'createathon-runnerup',
    title: 'Createathon Web Hackathon – 4th Place Finalist',
    event: 'Department of CSE, Sri Eshwar College of Engineering',
    year: 'Dec 2024',
    desc: 'Secured 4th Place out of 40+ competing engineering teams. Designed and deployed a live event tracking platform within an intense 24-hour sprint.',
    stat: '4th Place Finalist',
    badge: 'Hackathon Award',
    iconName: 'Award'
  },
  {
    id: 'techspot-winner',
    title: 'Tech-Spot Mobile Hackathon – 🏆 3rd Prize',
    event: 'Sri Eshwar Inter-College Tech Fest',
    year: 'Dec 2024',
    desc: 'Awarded 3rd Prize for engineering a high-speed, mobile-optimized marketplace interface with dynamic zero-dependency search filtering.',
    stat: '🏆 3rd Prize Winner',
    badge: 'Product Design',
    iconName: 'Trophy'
  },
  {
    id: 'cyberathon-26',
    title: 'Cyberathon ’26 Cybersecurity Hackathon',
    event: 'SRM Institute of Science and Technology',
    year: 'Mar 2026',
    desc: 'Developed Datasential Security AI to scan and audit organizational repositories for credential leaks and PII exposures during national cybersecurity event.',
    stat: 'Participant',
    badge: 'Cybersecurity',
    iconName: 'ShieldCheck'
  },
  {
    id: 'intellina-2k25',
    title: 'INTELLINA 2K25 AI & Data Science Hackathon',
    event: 'Coimbatore Institute of Technology (CIT)',
    year: '2025',
    desc: 'Participated in competitive AI/ML problem-solving sprint, designing data processing workflows for real-world predictive analytics.',
    stat: 'Participant',
    badge: 'AI & Data Science',
    iconName: 'Database'
  },
  {
    id: 'melinia-26',
    title: 'Melinia’26 Hackathon – Technical Solution Mentorship',
    event: 'Coimbatore Institute of Technology (CIT)',
    year: '2026',
    desc: 'Contributed to architecture design and peer mentorship during regional hackathon focused on urban technology challenges.',
    stat: 'Mentor & Participant',
    badge: 'System Design',
    iconName: 'Globe'
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'btech-cs',
    year: '2024 - 2028',
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Sri Eshwar College of Engineering',
    desc: 'Specializing in core computer science, algorithm analysis, database systems, web architecture, and AI models.',
    highlights: 'Sem 4 • CGPA: 7.54 / 10',
    accent: 'bg-indigo-600',
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++)',
      'Database Management Systems',
      'Operating Systems & Networks',
      'AI & Machine Learning'
    ]
  },
  {
    id: 'hsc',
    year: '2022 - 2024',
    degree: 'Higher Secondary Certificate (HSC - Computer Science)',
    school: 'PKD Matric Higher Secondary School',
    desc: 'Focused on Advanced Physics, Chemistry, Mathematics, and Computer Science fundamentals.',
    highlights: 'Score: 73.3%',
    accent: 'bg-slate-900',
    courses: [
      'Computer Science Fundamentals',
      'Mathematics & Logic',
      'Physics & Chemistry'
    ]
  },
  {
    id: 'sslc',
    year: '2020 - 2022',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    school: 'PKD Matric Higher Secondary School',
    desc: 'Developed foundational mathematical logic, analytical reasoning, and core science concepts.',
    highlights: 'Score: 66.8%',
    accent: 'bg-slate-400',
    courses: ['Mathematics', 'Science & Logic', 'General Sciences']
  }
];

export const codingProfilesData: CodingProfile[] = [
  {
    id: 'leetcode',
    platform: 'LeetCode',
    username: 'Sai__kriz',
    link: 'https://leetcode.com/u/Sai__kriz/',
    stats: '180+ Problems Solved',
    rating: 'Contest Rating: 1458',
    color: 'bg-amber-500/10 text-amber-600 border-amber-200',
    iconName: 'SiLeetcode'
  },
  {
    id: 'hackerrank',
    platform: 'HackerRank',
    username: 'saikrishnan_s201',
    link: 'https://www.hackerrank.com/profile/saikrishnan_s201',
    stats: '4+ Skills Certified',
    rating: 'SQL (Intermediate) ⭐⭐',
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    iconName: 'SiHackerrank'
  },
  {
    id: 'codechef',
    platform: 'CodeChef',
    username: 'sai_kriz898',
    link: 'https://www.codechef.com/users/sai_kriz898',
    stats: '33+ Problems Solved',
    rating: '1 Star Rated Developer',
    color: 'bg-amber-900/10 text-amber-900 border-amber-300',
    iconName: 'SiCodechef'
  }
];
