import React from 'react';
import {
    BookOpen,
    School,
    GraduationCap,
    Layout,
    Code2,
    Database,
    Award,
    Globe,
    Terminal,
    Github,
    Calendar,
    ShieldCheck
} from 'lucide-react';
import {
    FaPython,
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaFigma
} from 'react-icons/fa';
import {
    SiMongodb,
    SiDart,
    SiCplusplus,
    SiC,
    SiMysql,
    SiSpringboot,
    SiDjango,
    SiOpencv,
    SiDocker,
    SiTailwindcss,
    SiPostman,
    SiExpress,
    SiBootstrap,
    SiFlutter,
    SiPostgresql,
    SiJsonwebtokens,
    SiLeetcode,
    SiHackerrank,
    SiGeeksforgeeks,
    SiCodechef
} from 'react-icons/si';
import { title } from 'framer-motion/client';

export const educationData = [
    {
        year: '2020 - 2022',
        degree: 'Secondary Education (SSLC)',
        school: 'PKD Matric Higher Secondary School',
        desc: 'Early academic development focusing on fundamental science and mathematics.',
        highlights: 'Score: 66.8%',
        icon: <BookOpen size={20} />,
        accent: 'bg-slate-400'
    },
    {
        year: '2022 - 2024',
        degree: 'Higher Secondary (HSC)',
        school: 'PKD Matric Higher Secondary School',
        desc: 'Built a strong foundation in core sciences and mathematics, developing analytical thinking skills.',
        highlights: 'Score: 73.3%',
        icon: <School size={20} />,
        accent: 'bg-primary'
    },
    {
        year: '2024 - 2028',
        degree: 'B.Tech Computer Science',
        school: 'Sri Eshwar College of Engineering',
        desc: 'Specializing in advanced computing, data structures, and algorithmic problem solving.',
        highlights: 'Sem 4 • CGPA: 7.6',
        icon: <GraduationCap size={20} />,
        accent: 'bg-accent'
    }
];

export const skillsData = {
    'Languages': [
        { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
        { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
        { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: 'Dart', icon: <SiDart className="text-[#00CCFF]" /> },
    ],
    'Frontend': [
        { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
        { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
    ],
    'Backend': [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-slate-900" /> },
        { name: 'REST API', icon: <Globe className="text-[#0055ff]" /> },
        { name: 'JWT Auth', icon: <SiJsonwebtokens className="text-[#d63384]" /> },
    ],
    'Database': [
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" /> },
    ],
    'Tools': [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <Github className="text-[#181717]" /> },
        { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: 'VS Code', icon: <Terminal className="text-[#007ACC]" /> },
        { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
    ]
};

export const projectsData = [
    {
        title: "Createathon-2024",
        category: "First Repo / Hackathon",
        date: "Nov 2024",
        desc: "My debut GitHub project, engineered for the Createathon Hackathon at Sri Eshwar College. A specialized platform designed for participants to seamlessly explore and track scheduled events.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://createathon.github.io/Createathon2024/",
        github: "https://github.com/saikriz898/Createathon-2024",
        color: "from-indigo-500/20 to-purple-600/20",
        icon: <Calendar size={24} />
    },
    {
        title: "Tech-Spot-Mobiles",
        category: "Web Development",
        date: "Dec 2024",
        desc: "Award-winning mobile marketplace with highly responsive design. Developed for a college inter-level hackathon and secured the 🏆 3rd Prize.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "https://saikriz898.github.io/Tech-Spot-Mobiles/",
        github: "https://github.com/saikriz898/Tech-Spot-Mobiles",
        color: "from-red-500/20 to-orange-500/20",
        icon: <Globe size={24} />
    },
    {
        title: "CryptoAlertPro",
        category: "Python Project",
        date: "May 2025",
        desc: "Real-time cryptocurrency monitoring system with SMS alerts, technical indicators, and interactive charts.",
        tech: ["Django", "MongoDB", "Twilio", "Python"],
        link: "https://github.com/saikriz898/CryptoAlertPro",
        github: "https://github.com/saikriz898/CryptoAlertPro",
        color: "from-orange-500/20 to-yellow-500/20",
        icon: <SiDjango size={24} />
    },
    {
        title: "Grievance System",
        category: "Full Stack / SIH",
        date: "Oct 2025",
        desc: "Institutions-focused software with role-based access. Developed specifically for the Smart India Hackathon (SIH) with real-time notifications.",
        tech: ["React", "Node.js", "MySQL", "JWT"],
        link: "https://github.com/saikriz898/Grievance-Management-System",
        github: "https://github.com/saikriz898/Grievance-Management-System",
        color: "from-blue-600/20 to-cyan-500/20",
        icon: <Layout size={24} />
    },
    {
        title: "SmartPlayAdvisor",
        category: "AI & ML",
        date: "Oct 2025",
        desc: "AI-powered game recommendation system using advanced machine learning algorithms for personalized discovery.",
        tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-Learn"],
        link: "https://github.com/saikriz898/SmartPlayAdvisor",
        github: "https://github.com/saikriz898/SmartPlayAdvisor",
        color: "from-purple-600/20 to-pink-500/20",
        icon: <SiOpencv size={24} />
    },
    {
        title: "ItineraryHub",
        category: "Java Project",
        date: "Oct 2025",
        desc: "Comprehensive travel management system built on a scalable Java Spring Boot microservices architecture.",
        tech: ["Java", "Spring Boot", "Microservices"],
        link: "https://github.com/saikriz898/ItineraryHub",
        github: "https://github.com/saikriz898/ItineraryHub",
        color: "from-green-600/20 to-teal-500/20",
        icon: <SiSpringboot size={24} />
    },
    {
        title: "School Management ERP",
        category: "Full Stack / Internship",
        date: "Dec 2025",
        desc: "Developed a full-stack ERP system during internship at Aptitude Guru Hem to manage student records, attendance, fees, and academic workflows with role-based dashboards.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        link: "#",
        github: "#",
        color: "from-green-500/20 to-emerald-500/20",
        icon: <Layout size={24} />
    },
    {
        title: "Datasential",
        category: "Cybersecurity / AI",
        date: "Mar 2026",
        desc: "Developed during Cyberathon, Datasential is an intelligent system that detects and monitors sensitive data across organizational systems using AI-based analysis. The platform provides real-time insights and dashboards.",
        tech: ["React", "Node.js", "MongoDB", "Python"],
        link: "#",
        github: "https://github.com/saikriz898/Datasential",
        color: "from-blue-500/20 to-indigo-600/20",
        icon: <ShieldCheck size={24} />
    },
    {
        title: "Eshwar EventSphere",
        category: "🚧 Ongoing / Full Stack",
        date: "2026",
        desc: "Developing a full-stack platform to manage and streamline campus events at Sri Eshwar College of Engineering, enabling event discovery, registration, scheduling, and organizer dashboards.",
        tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
        link: "#",
        github: "https://github.com/saikriz898/eshwar-eventsphere",
        color: "from-purple-500/20 to-indigo-500/20",
        icon: <Layout size={24} />
    }
];

export const experienceData = [
    {
        company: "Aptitude Guru Hem",
        role: "Full Stack Developer Intern",
        duration: "Dec 2025",
        location: "Chennai, India",
        desc: "Developed a full-stack School Management ERP system to streamline academic operations. Engineered role-based dashboards for administrators and teachers to manage student records.",
        details: ["ERP Architecture", "Role-Based Auth", "API Integration", "Database Design"],
        tech: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://aptitudeguru.in",
        github: "https://github.com/saikriz898/",
        icon: <Globe size={22} />
    },
];

export const certificationsData = [
    {
        title: "Mastering Data Structures & Algorithms using C/C++",
        issuer: "Udemy (Instructor: Abdul Bari)",
        date: "May 2025",
        desc: "Completed an in-depth course on Data Structures and Algorithms using C and C++, covering algorithm design, problem-solving strategies, and optimized coding techniques. (Duration: 58.5 Hours)",
        icon: <Code2 size={20} />,
        link: "#",
        tags: ["C", "C++", "DSA"]
    },

    {
        title: "Python for Complete Beginners",
        issuer: "Udemy (Instructor: Cyber Quince)",
        date: "Oct 2024",
        desc: "Completed an introductory course on Python programming, covering variables, loops, functions, and basic programming concepts.",
        icon: <FaPython size={20} />,
        link: "#",
        tags: ["Python", "Programming"]
    },
    {
        title: "JavaScript Bootcamp",
        issuer: "LetsUpgrade + NSDC + GDG MAD",
        date: "Mar 2025",
        desc: "Completed a JavaScript Bootcamp, learning JavaScript fundamentals, modern syntax, and real-world application development concepts. (Duration: 3 Days)",
        icon: <FaJs size={20} />,
        link: "#",
        tags: ["JavaScript", "Web Dev"]
    },
    {
        title: "C++ Bootcamp",
        issuer: "LetsUpgrade + NSDC",
        date: "Jan 2025",
        desc: "Completed an intensive C++ Bootcamp, covering core programming concepts, OOP basics, and practical coding exercises. (Duration: 2 Days)",
        icon: <SiCplusplus size={20} />,
        link: "#",
        tags: ["C++", "OOP"]
    },
    {
        title: "C Programming Certification",
        issuer: "Spoken Tutorial – IIT Bombay",
        date: "2024",
        desc: "Successfully completed the C Programming Certification exam conducted remotely by IIT Bombay as part of the Spoken Tutorial Project. (Score: 87.5%, Credits: 2)",
        icon: <SiC size={20} />,
        link: "#",
        tags: ["C", "IIT Bombay"]
    },
    {
        title: "C++ Programming Certification",
        issuer: "Spoken Tutorial – IIT Bombay",
        date: "2024",
        desc: "Completed the C++ Programming Certification exam organized by IIT Bombay, demonstrating foundational knowledge in C++ programming. (Score: 62.5%, Credits: 2)",
        icon: <SiCplusplus size={20} />,
        link: "#",
        tags: ["C++", "IIT Bombay"]
    },
];

export const achievementsData = [
    {
        title: "Createathon 2024 Web Hackathon – Runner Up",
        event: "Sri Eshwar College of Engineering",
        year: "Dec 2024",
        desc: "Achieved 4th place / Runner-up in the Createathon 2024 Web Hackathon, where innovation meets creativity. Built and presented a technical solution in a competitive environment organized by the Department of Computer Science and Engineering.",
        icon: <Award className="text-orange-500" />,
        stat: "Runner Up"
    },
    {
        title: "Createathon 2024 Web Hackathon",
        event: "Sri Eshwar College of Engineering",
        year: "Dec 2024",
        desc: "Participated in the Createathon 2024 Web Hackathon, collaborating with peers to develop innovative web-based solutions and gaining hands-on experience in real-time problem solving and team development.",
        icon: <Terminal className="text-blue-500" />,
        stat: "Participant"
    },
    {
        title: "INTELLINA 2K25 Hackathon Participation",
        event: "Coimbatore Institute of Technology",
        year: "2025",
        desc: "Participated in the INTELLINA 2K25 Hackathon, focusing on Artificial Intelligence and Data Science applications and building innovative technology solutions in a competitive environment.",
        icon: <Database className="text-purple-500" />,
        stat: "Participant"
    },
    {
        title: "Melinia’26 Hackathon – Solution Design & Mentorship",
        event: "Coimbatore Institute of Technology",
        year: "2026",
        desc: "Contributed to solution design and mentorship in the Melinia’26 Hackathon, collaborating with participants to ideate and develop technical solutions for real-world problems.",
        icon: <Globe className="text-green-500" />,
        stat: "Participant"
    },
    {
        title: "Cyberathon ’26 – Cybersecurity Event",
        event: "SRM Institute of Science and Technology",
        year: "Mar 2026",
        desc: "Participated in a cybersecurity hackathon focusing on security challenges, threat analysis, and practical cyber defense strategies.",
        icon: <Terminal size={20} />,
        stat: "Participant"
    },
];

export const upcomingEventsData = [
    {
        title: "Smart India Hackathon (SIH) 2026",
        date: "Mid 2026",
        location: "National Level",
        desc: "Preparing for the national-level innovation challenge to solve real-world problems through technology.",
        type: "Hackathon"
    },
    {
        title: "Advanced AI Workshop",
        date: "May 2026",
        location: "IIT Madras (Proposed)",
        desc: "Participating in research-driven workshops to deepen expertise in Large Language Models and Generative AI.",
        type: "Workshop"
    }
];

export const codingProfilesData = [
    {
        platform: "LeetCode",
        username: "Sai__kriz",
        link: "https://leetcode.com/u/Sai__kriz/",
        icon: <SiLeetcode className="text-[#FFA116]" />,
        stats: "180 Problems Solved",
        rating: "Contest Rating: 1458",
        color: "bg-[#FFA116]/10"
    },
    {
        platform: "HackerRank",
        username: "saikrishnan_s201",
        link: "https://www.hackerrank.com/profile/saikrishnan_s201",
        icon: <SiHackerrank className="text-[#2EC866]" />,
        stats: "4+ Certifications",
        rating: "SQL (Intermediate) ⭐⭐",
        color: "bg-[#2EC866]/10"
    },
    {
        platform: "CodeChef",
        username: "sai_kriz898",
        link: "https://www.codechef.com/users/sai_kriz898",
        icon: <SiCodechef className="text-[#5B4638]" />,
        stats: "33 Problems Solved",
        rating: "1 Star ★",
        color: "bg-[#5B4638]/10"
    }
];
