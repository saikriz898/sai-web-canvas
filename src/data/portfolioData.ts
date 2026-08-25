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
  { name: 'Work', href: '#projects', iconName: 'Wrench' },
  { name: 'About', href: '#about', iconName: 'User' },
  { name: 'Experience', href: '#experience', iconName: 'Briefcase' },
  { name: 'Skills', href: '#skills', iconName: 'Code2' },
  { name: 'Contact', href: '#contact', iconName: 'Mail' }
];

export const projectsData: Project[] = [
  {
    id: 'datasential',
    title: 'Datasential Security AI',
    category: 'Cybersecurity / AI',
    date: 'Mar 2026',
    tagline: 'Intelligent sensitive data detection & monitoring platform built for Cyberathon.',
    desc: 'Engineered an enterprise security platform that scans organizational assets for exposed PII and sensitive credentials using AI-assisted pattern analysis.',
    problem: 'Organizations struggle to detect accidental exposure of sensitive data (API keys, PII, internal tokens) across distributed developer repositories and cloud storage in real time.',
    solution: 'Architected an automated threat-monitoring engine powered by Python NLP heuristics with a React/Node.js dashboard delivering instant security alert notifications and audit analytics.',
    keyFeatures: [
      'Automated PII & Secret Scanning Engine',
      'Role-Based Security Dashboard & Audit Logs',
      'Real-Time Threat Notifications & Webhooks',
      'Multi-Repository Compliance Risk Analytics'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Python', 'Tailwind CSS'],
    featured: true,
    github: 'https://github.com/saikriz898/Datasential',
    link: 'https://github.com/saikriz898/Datasential',
    color: 'from-blue-500/20 to-indigo-600/20',
    iconName: 'ShieldCheck',
    metrics: 'Cyberathon ’26 Finalist Project'
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
    category: 'Full-Stack / SIH',
    date: 'Oct 2025',
    tagline: 'Institutional issue escalation platform built for Smart India Hackathon.',
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
    metrics: 'Smart India Hackathon Build'
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
    desc: 'Engineered a full-stack School Management ERP platform to streamline institutional academic workflows. Developed role-based admin and teacher portals for managing admissions, student grades, and real-time attendance.',
    details: [
      'Architected modular Express backend APIs handling multi-role RBAC permissions.',
      'Designed MongoDB document collections for student rosters and attendance records.',
      'Built responsive React frontend dashboards with low latency query filtering.',
      'Integrated authentication middleware for secure administrative access.'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    link: 'https://aptitudeguru.in',
    github: 'https://github.com/saikriz898/',
    impact: 'Engineered production ERP system for student & faculty administrative workflows.'
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'dsa-abdul-bari',
    title: 'Mastering Data Structures & Algorithms using C/C++',
    issuer: 'Udemy (Instructor: Abdul Bari)',
    date: 'May 2025',
    desc: 'In-depth 58.5-hour rigorous training in algorithm design, memory management, recursion, trees, graphs, and dynamic programming optimization.',
    link: '#',
    tags: ['C++', 'Data Structures', 'Algorithms', 'Memory Optimization'],
    hours: '58.5 Hours'
  },
  {
    id: 'c-spoken-tutorial',
    title: 'C Programming National Certification',
    issuer: 'Spoken Tutorial – IIT Bombay',
    date: '2024',
    desc: 'National certification exam conducted remotely by IIT Bombay covering C memory model, pointers, file handling, and structured programming. Passed with distinction.',
    link: '#',
    tags: ['C', 'IIT Bombay', 'Score: 87.5%'],
    score: '87.5% (Distinction)'
  },
  {
    id: 'cpp-spoken-tutorial',
    title: 'C++ Programming National Certification',
    issuer: 'Spoken Tutorial – IIT Bombay',
    date: '2024',
    desc: 'Certification exam conducted by IIT Bombay testing object-oriented design, operator overloading, and inheritance hierarchies in C++.',
    link: '#',
    tags: ['C++', 'IIT Bombay', 'Score: 62.5%'],
    score: '62.5%'
  },
  {
    id: 'js-bootcamp',
    title: 'JavaScript Web Engineering Bootcamp',
    issuer: 'LetsUpgrade + NSDC + GDG MAD',
    date: 'Mar 2025',
    desc: 'Intensive 3-day bootcamp covering modern ES6+ syntax, asynchronous JS, DOM execution context, and RESTful API integrations.',
    link: '#',
    tags: ['JavaScript', 'ES6+', 'Web Dev']
  },
  {
    id: 'cpp-bootcamp',
    title: 'C++ OOP Intensive Bootcamp',
    issuer: 'LetsUpgrade + NSDC',
    date: 'Jan 2025',
    desc: 'Comprehensive practical training covering C++ class abstractions, templates, exception handling, and optimized I/O operations.',
    link: '#',
    tags: ['C++', 'OOP', 'NSDC']
  },
  {
    id: 'python-beginners',
    title: 'Python Software Engineering Fundamentals',
    issuer: 'Udemy (Instructor: Cyber Quince)',
    date: 'Oct 2024',
    desc: 'Foundational course covering Python data structures, module architecture, file I/O, and object-oriented scripting.',
    link: '#',
    tags: ['Python', 'Scripting', 'Basics']
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
    stat: 'Finalist',
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
    highlights: 'Sem 4 • CGPA: 7.6 / 10',
    accent: 'bg-indigo-600'
  },
  {
    id: 'hsc',
    year: '2022 - 2024',
    degree: 'Higher Secondary Certificate (HSC - Computer Science)',
    school: 'PKD Matric Higher Secondary School',
    desc: 'Focused on Advanced Physics, Chemistry, Mathematics, and Computer Science fundamentals.',
    highlights: 'Score: 73.3%',
    accent: 'bg-slate-900'
  },
  {
    id: 'sslc',
    year: '2020 - 2022',
    degree: 'Secondary School Leaving Certificate (SSLC)',
    school: 'PKD Matric Higher Secondary School',
    desc: 'Developed foundational mathematical logic, analytical reasoning, and core science concepts.',
    highlights: 'Score: 66.8%',
    accent: 'bg-slate-400'
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
