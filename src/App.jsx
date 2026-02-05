
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import profileImg from './assets/profile.jpeg';
import aboutProfileImg from './assets/Profile-Picture.jpeg';
import resume from './assets/Resume/Resume.pdf'

const TypeWriter = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Typing effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : subIndex === words[index].length ? 2000 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{`${words[index].substring(0, subIndex)}`}</span>;
};

import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code2,
    Terminal,
    Cpu,
    Globe,
    Database,
    Layout,
    Menu,
    X,
    ChevronDown,
    Download,
    Phone,
    MapPin,
    GraduationCap,
    School,
    BookOpen,
    Calendar,
    Award,
    Home,
    User,
    Send,
    ArrowUp,
    Search
} from 'lucide-react';
import {
    FaPython,
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGitAlt,
    FaFigma,
    FaInstagram
} from 'react-icons/fa';
import { SiMongodb, SiDart, SiCplusplus, SiCanva, SiMysql, SiSpringboot, SiDjango, SiTwilio, SiOpencv } from 'react-icons/si';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Dark Energy Field */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.05)_0%,_transparent_70%)] animate-vortex"></div>

            <div className="relative w-64 h-64 flex items-center justify-center perspective-2000 preserve-3d">
                {/* 3D Fractal Shards */}
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="flux-shard animate-shard"
                        style={{
                            transform: `rotateY(${i * 45}deg) rotateX(${i * 20}deg)`,
                            animationDelay: `${i * 0.5}s`,
                            opacity: 0.6
                        }}
                    ></div>
                ))}

                {/* The Singularity (Core) */}
                <div className="relative w-16 h-16 preserve-3d">
                    <div className="absolute inset-0 bg-white rounded-full animate-singularity z-10"></div>
                    <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-50 animate-pulse"></div>

                    {/* Event Horizon Rings */}
                    <div className="absolute -inset-8 border border-white/10 rounded-full rotate-x-45 animate-[spin_4s_linear_infinite]"></div>
                    <div className="absolute -inset-12 border border-indigo-500/20 rounded-full -rotate-x-45 animate-[spin_6s_linear_infinite_reverse]"></div>
                </div>

                {/* Floating Quantum Particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`p-${i}`}
                        animate={{
                            y: [0, -40, 0],
                            x: [0, Math.sin(i) * 20, 0],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${50 + (Math.random() - 0.5) * 100}%`,
                            top: `${50 + (Math.random() - 0.5) * 100}%`,
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="mt-20 text-center z-20"
            >
                <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-3xl font-black font-mono text-white tracking-[0.2em]">SAI</span>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    <span className="text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 tracking-[0.2em]">CANVAS</span>
                </div>
                <div className="text-[11px] uppercase text-slate-400 tracking-[0.4em] font-semibold">Transcending Digital Boundaries</div>
            </motion.div>

            {/* Neural Progress Bar */}
            <div className="mt-12 w-64 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                <motion.div
                    initial={{ width: "0%", left: "0%" }}
                    animate={{ width: ["10%", "30%", "60%", "100%"] }}
                    transition={{ duration: 4.5, ease: "easeInOut" }}
                    className="absolute h-full bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-400"
                ></motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite]"></div>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        // Simulate loading process
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 300);
        };
        // Enforce smooth scrolling for the entire page
        document.documentElement.style.scrollBehavior = 'smooth';

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Home size={18} /> },
        { name: 'Persona', href: '#about', icon: <User size={18} /> },
        { name: 'Milestones', href: '#academic', icon: <GraduationCap size={18} /> },
        { name: 'Tech Stack', href: '#skills', icon: <Cpu size={18} /> },
        { name: 'Creations', href: '#projects', icon: <Code2 size={18} /> },
        { name: 'Connect', href: '#contact', icon: <Mail size={18} /> },
    ];

    const educationData = [
        {
            year: '2024 - 2028',
            degree: 'B.Tech Computer Science',
            school: 'Sri Eshwar College of Engineering',
            desc: 'Specializing in advanced computing, data structures, and algorithmic problem solving.',
            grade: 'Current: Sem 4',
            status: 'Pursuing',
            icon: <GraduationCap size={20} />,
            color: 'from-indigo-500 to-purple-600'
        },
        {
            year: '2022 - 2024',
            degree: 'Higher Secondary (HSC)',
            school: 'PKD Matric Higher Secondary School',
            desc: 'Built a strong foundation in core sciences and mathematics, developing analytical thinking skills.',
            grade: '73.3%',
            tags: ['Maths', 'Physics', 'Chemistry'],
            icon: <School size={20} />,
            color: 'from-purple-500 to-pink-500'
        },
        {
            year: '2020 - 2022',
            degree: 'Secondary Education (SSLC)',
            school: 'PKD Matric Higher Secondary School',
            desc: 'Early academic development focusing on fundamental science and mathematics.',
            grade: '66.8%',
            icon: <BookOpen size={20} />,
            color: 'from-cyan-500 to-blue-500'
        }
    ];

    const [activeTab, setActiveTab] = useState('Languages');

    const skills = {
        'Languages': [
            { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
            { name: 'Java', icon: <FaJava className="text-orange-500" /> },
            { name: 'C', icon: <Code2 className="text-blue-400" /> },
            { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
            { name: 'Dart', icon: <SiDart className="text-cyan-400" /> },
        ],
        'Frontend': [
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
            { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
            { name: 'React', icon: <FaReact className="text-cyan-400" /> },
        ],
        'Backend': [
            { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
            { name: 'Django', icon: <SiDjango className="text-green-700" /> },
            { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
        ],
        'Database': [
            { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        ],
        'Tools': [
            { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
            { name: 'VS Code', icon: <Terminal className="text-slate-300" /> },
            { name: 'Figma', icon: <FaFigma className="text-purple-400" /> },
            { name: 'Canva', icon: <SiCanva className="text-blue-400" /> },
        ]
    };

    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const projects = [
        {
            title: "CryptoAlertPro",
            desc: "Real-time cryptocurrency price monitoring system with SMS alerts, technical indicators, and interactive charts.",
            tags: ['Django', 'MongoDB', 'Twilio'],
            link: "https://github.com/saikriz898/CryptoAlertPro",
            color: "from-orange-500 to-yellow-500",
            icon: <SiDjango size={28} />,
            size: "lg:col-span-2 lg:row-span-2",
            featured: true,
            category: "Full Stack"
        },
        {
            title: "Grievance System",
            desc: "Full-stack system with role-based access, real-time notifications, and secure authentication for institutions.",
            tags: ['React', 'Node.js', 'MySQL', 'JWT'],
            link: "https://github.com/saikriz898/Grievance-Management-System",
            color: "from-blue-600 to-cyan-500",
            icon: <Layout size={24} />,
            size: "lg:col-span-2",
            category: "Full Stack"
        },
        {
            title: "SmartPlayAdvisor",
            desc: "AI-powered game recommendation system using machine learning algorithms.",
            tags: ['Python', 'ML', 'AI'],
            link: "https://github.com/saikriz898/SmartPlayAdvisor",
            color: "from-purple-600 to-pink-500",
            icon: <SiOpencv size={24} />,
            size: "lg:col-span-1",
            category: "AI & ML"
        },
        {
            title: "ItineraryHub",
            desc: "Travel management system built on scalable Java architecture.",
            tags: ['Java', 'Spring', 'Microservices'],
            link: "https://github.com/saikriz898/ItineraryHub",
            color: "from-green-600 to-teal-500",
            icon: <SiSpringboot size={24} />,
            size: "lg:col-span-1",
            category: "Backend"
        },
        {
            title: "Tech-Spot-Mobiles",
            desc: "Award-winning mobile marketplace with responsive design. 🏆 3rd Prize Winner.",
            tags: ['HTML', 'CSS', 'JS'],
            link: "https://github.com/saikriz898/Tech-Spot-Mobiles",
            live: "https://saikriz898.github.io/Tech-Spot-Mobiles/",
            color: "from-red-500 to-orange-500",
            icon: <Globe size={24} />,
            size: "lg:col-span-2",
            category: "Web Dev"
        },
        {
            title: "Createathon-2024",
            desc: "Official hackathon event website featuring event details and registration.",
            tags: ['HTML', 'CSS', 'JS'],
            link: "https://github.com/saikriz898/Createathon-2024",
            live: "https://createathon.github.io/Createathon2024/",
            color: "from-indigo-500 to-purple-600",
            icon: <Code2 size={24} />,
            size: "lg:col-span-2",
            category: "Web Dev"
        },
        {
            title: "Upcoming Works",
            desc: "Exciting new projects are currently in development. Stay tuned for updates!",
            tags: ['In Progress', 'Coming Soon'],
            color: "from-slate-700 to-slate-800",
            icon: <Calendar size={28} />,
            size: "lg:col-span-2",
            category: "Upcoming",
            upcoming: true
        }
    ];

    const filteredProjects = projects.filter(p => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.desc.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader key="preloader" />}
            </AnimatePresence>

            <div className="min-h-screen font-sans selection:bg-cyan-500/30 text-slate-200">
                {/* Navigation */}
                <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="relative flex items-center justify-center w-10 h-10">
                                <div className="absolute inset-0 border-2 border-indigo-500 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
                                <div className="absolute inset-0 border-2 border-purple-600 rounded-full opacity-60 scale-90 group-hover:rotate-180 transition-transform duration-700"></div>
                                <span className="font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">SK</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-tight text-white leading-none">Sai Krishnan S</span>
                                <span className="text-xs text-indigo-400 font-medium tracking-widest uppercase">Student Developer</span>
                            </div>
                        </a>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white relative group overflow-hidden flex items-center gap-2"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {link.icon}
                                        {link.name}
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                                </a>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="#contact"
                                className="pushable w-fit"
                            >
                                <span className="shadow-3d"></span>
                                <span className="edge-3d"></span>
                                <span className="front-3d flex items-center gap-2">
                                    <Send size={16} /> Hire Me
                                </span>
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="lg:hidden text-white hover:text-indigo-400 transition-colors" onClick={toggleMenu}>
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Nav Dropdown */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                            >
                                <div className="flex flex-col p-6 space-y-2">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 text-slate-300 hover:text-cyan-400 transition-all border border-transparent hover:border-white/5"
                                        >
                                            <span className="text-lg font-medium flex items-center gap-3">
                                                {link.icon}
                                                {link.name}
                                            </span>
                                            <ChevronDown size={16} className="-rotate-90 opacity-50" />
                                        </a>
                                    ))}
                                    <a
                                        href="#contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="pushable w-full mt-4"
                                    >
                                        <span className="shadow-3d"></span>
                                        <span className="edge-3d"></span>
                                        <span className="front-3d flex items-center justify-center gap-2">
                                            <Send size={20} /> Hire Me
                                        </span>
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden" id="home">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
                    </div>

                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <h2 className="text-xl md:text-2xl font-medium text-indigo-400 mb-4 tracking-wide">Hi, I'm</h2>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                <span className="text-white">Sai Krishnan</span>
                            </h1>

                            <div className="text-2xl md:text-4xl font-bold text-slate-300 mb-6 h-12 flex items-center">
                                <span className="mr-3">I AM</span>
                                <TypeWriter words={['A Developer', 'A Student', 'A Creative Thinker', 'A Tech Enthusiast']} />
                                <span className="animate-blink ml-1 text-indigo-400">|</span>
                            </div>

                            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                                Engineering student specializing in Computer Science, passionate about creating web applications and turning innovative ideas into reality through code.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#projects"
                                    className="pushable"
                                >
                                    <span className="shadow-3d"></span>
                                    <span className="edge-3d"></span>
                                    <span className="front-3d flex items-center gap-2 px-8 py-3.5">
                                        View My Work <ChevronDown size={18} />
                                    </span>
                                </a>
                                <a
                                    href="#contact"
                                    className="pushable"
                                >
                                    <span className="shadow-3d"></span>
                                    <span className="edge-3d secondary"></span>
                                    <span className="front-3d secondary flex items-center gap-2 px-8 py-3.5">
                                        <Mail size={18} /> Contact Me
                                    </span>
                                </a>
                            </div>

                            <div className="mt-12 flex items-center space-x-6">
                                <SocialLink href="https://github.com/saikriz898" icon={<Github size={22} />} />
                                <SocialLink href="https://www.linkedin.com/in/saikriz898" icon={<Linkedin size={22} />} />
                                <SocialLink href="https://www.instagram.com/sai__kriz?igsh=ZTAwcWFqcXIyN2x4" icon={<FaInstagram size={22} />} />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative w-full max-w-md mx-auto aspect-square">
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

                                {/* Profile Image Container with Ring */}
                                <div className="relative z-10 p-2 rounded-full border-2 border-dashed border-white/20 w-fit mx-auto">
                                    <div className="w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-slate-900 relative">
                                        <img
                                            src={profileImg}
                                            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop' }}
                                            alt="Sai Krishnan"
                                            className="w-full h-full object-cover object-top hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
                                        />
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="absolute top-10 right-0 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                                    <Code2 className="text-indigo-400" size={24} />
                                </div>
                                <div className="absolute bottom-20 left-0 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                                    <Database className="text-purple-400" size={24} />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Down Indicator */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                        <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] transform rotate-90 mb-6 origin-left"
                        >
                            Scroll
                        </motion.span>
                        <div className="w-1 h-16 bg-slate-900 rounded-full flex justify-center p-1 overflow-hidden border border-white/5">
                            <motion.div
                                animate={{ y: [0, 40, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-4 bg-gradient-to-b from-indigo-500 to-cyan-400 rounded-full"
                            />
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-24 bg-slate-950/50 relative overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
                            {/* Left: Developer ID Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30, rotateY: 15 }}
                                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                viewport={{ amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-2 relative group perspective-1000"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                                <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
                                    <div className="flex justify-between items-start mb-8">
                                        <Code2 size={32} className="text-white opacity-80" />
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] font-mono text-indigo-400 tracking-widest">ID: SK-2024</span>
                                            <div className="flex gap-1 mt-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mb-8 relative">
                                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] mb-4">
                                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                                                <img src={aboutProfileImg} alt="Profile" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1">Sai Krishnan S</h3>
                                        <p className="text-sm text-indigo-400 font-mono">Computer Science Student</p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div>
                                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                <span>Academic Level</span>
                                                <span className="text-white">Year 2</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-indigo-500 w-[50%]"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                                <span>Semester Progress</span>
                                                <span className="text-white">Sem 4 (Pursuing)</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-purple-500 w-[20%] animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                        <div className="text-center">
                                            <div className="text-xl font-bold text-white">6+</div>
                                            <div className="text-[10px] uppercase text-slate-500 tracking-widest">Projects</div>
                                        </div>
                                        <div className="text-center border-l border-white/5">
                                            <div className="text-xl font-bold text-white">10+</div>
                                            <div className="text-[10px] uppercase text-slate-500 tracking-widest">Tech Stack</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Narrative Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: 0.3 }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-3 space-y-8"
                            >
                                <div>
                                    <h2 className="text-sm font-bold text-indigo-400 tracking-widest uppercase mb-2">About The Developer</h2>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Decoding Complex Problems into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Elegant Solutions</span>.</h3>
                                </div>

                                <div className="prose prose-lg prose-invert text-slate-300">
                                    <p className="leading-relaxed">
                                        I am a <span className="text-white font-semibold">Computer Science student</span> passionate about learning software development and problem solving. I am currently focused on building a strong foundation in programming, data structures, and web development.
                                    </p>
                                    <p className="leading-relaxed mt-4">
                                        I actively practice coding, work on hands-on projects, and explore new technologies to improve my understanding of how real-world applications are built. My goal is to grow as a skilled software engineer and contribute meaningfully to a development team in the future.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 pt-3">
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-3 px-5 py-3 bg-slate-900 border border-white/10 rounded-xl hover:border-indigo-500/50 transition-colors flex-1 min-w-[200px]">
                                            <Terminal size={20} className="text-indigo-400" />
                                            <div>
                                                <div className="text-xs text-slate-500">Current Focus</div>
                                                <div className="text-sm font-medium text-white">Full Stack, Gen AI, DSA</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 px-5 py-3 bg-slate-900 border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors flex-1 min-w-[150px]">
                                            <Globe size={20} className="text-purple-400" />
                                            <div>
                                                <div className="text-xs text-slate-500">Location</div>
                                                <div className="text-sm font-medium text-white">Pollachi, India</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <a
                                            href={resume}
                                            download="Sai_Krishnan_Resume.pdf"
                                            className="pushable w-fit"
                                        >
                                            <span className="shadow-3d"></span>
                                            <span className="edge-3d"></span>
                                            <span className="front-3d flex items-center gap-2 px-8">
                                                <Download size={18} /> Grab My CV
                                            </span>
                                        </a>

                                        <div className="flex items-center gap-4 py-1">
                                            <span className="text-sm text-slate-500 font-medium uppercase tracking-wider">Connect:</span>
                                            <div className="flex items-center gap-3">
                                                <SocialLink href="https://github.com/saikriz898" icon={<Github size={20} />} />
                                                <SocialLink href="https://www.linkedin.com/in/saikriz898" icon={<Linkedin size={20} />} />
                                                <SocialLink href="https://www.instagram.com/sai__kriz?igsh=ZTAwcWFqcXIyN2x4" icon={<FaInstagram size={20} />} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section id="academic" className="py-24 relative overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 relative z-10">
                        <SectionHeader title="Academic Journey" subtitle="Milestones" />
                        <div className="relative mt-16 max-w-5xl mx-auto">
                            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-purple-500/0 md:transform md:-translate-x-1/2"></div>
                            <div className="space-y-12">
                                {educationData.map((item, index) => (
                                    <TimelineItem key={index} data={item} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-24 bg-slate-900/30 relative">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <SectionHeader title="Tech Ecosystem" subtitle="My Digital Toolkit" />
                        <div className="flex flex-col items-center">
                            <div className="flex flex-wrap justify-center gap-4 mb-12 p-1.5 bg-slate-950/50 backdrop-blur-md rounded-2xl border border-white/5 inline-flex">
                                {Object.keys(skills).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveTab(category)}
                                        className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === category ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl">
                                <AnimatePresence mode="popLayout">
                                    {skills[activeTab].map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 30, delay: index * 0.02 }}
                                        >
                                            <div className="group h-full bg-slate-900/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-indigo-500/50 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all cursor-default relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                <div className="text-4xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10 filter drop-shadow-lg">
                                                    {skill.icon}
                                                </div>
                                                <span className="font-semibold text-slate-300 group-hover:text-white transition-colors relative z-10">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-24 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <SectionHeader title="Innovation Lab" subtitle="featured Works" />
                        <div className="flex flex-col items-center gap-8 mb-12">
                            <div className="relative w-full max-w-md group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search size={18} className="text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search projects by name or technology..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all backdrop-blur-xl"
                                />
                            </div>
                            <div className="flex justify-center gap-3 flex-wrap">
                                {['All', 'Full Stack', 'Web Dev', 'AI & ML', 'Backend', 'Upcoming'].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${activeCategory === category ? 'bg-white text-slate-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' : 'bg-transparent text-slate-400 border-white/10 hover:border-white/30 hover:text-white'}`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[minmax(180px,auto)]">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {filteredProjects.map((project) => (
                                    <BentoProjectCard key={project.title} data={project} />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 pointer-events-none"></div>
                    <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-block mb-6">
                            <span className="py-2 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-widest uppercase">Open for Opportunities</span>
                        </div>
                        <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ amount: 0.5 }} className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Ready to turn ideas into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Digital Reality?</span>
                        </motion.h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed">Whether it's a complex full-stack application, an AI integration, or a sleek website - I'm ready to bring your vision to life.</p>
                        <div className="relative group inline-block">
                            <motion.a
                                href="mailto:saikrishnan2116@gmail.com"
                                className="pushable"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95, y: 4 }}
                            >
                                <span className="shadow-3d"></span>
                                <span className="edge-3d white"></span>
                                <span className="front-3d white flex items-center gap-4 px-10 py-5 text-lg">
                                    <span>Start a Project</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        <Send size={20} />
                                    </motion.div>
                                </span>
                            </motion.a>
                        </div>
                        <div className="mt-24 flex justify-center gap-8 flex-wrap">
                            <SocialPill href="https://github.com/saikriz898" icon={<Github size={20} />} label="Github" />
                            <SocialPill href="https://www.linkedin.com/in/saikriz898" icon={<Linkedin size={20} />} label="LinkedIn" />
                            <SocialPill href="https://www.instagram.com/sai__kriz?igsh=ZTAwcWFqcXIyN2x4" icon={<FaInstagram size={20} />} label="Instagram" />
                        </div>
                    </div>
                </section>

                <footer className="bg-slate-950 border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
                            <div className="col-span-2 md:col-span-1">
                                <a href="#" className="inline-flex items-center gap-3 mb-6 group">
                                    <div className="p-2.5 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-xl">
                                        <span className="text-white font-bold font-mono text-xl">SK</span>
                                    </div>
                                    <span className="text-2xl font-bold text-white tracking-tight">Sai Krishnan</span>
                                </a>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">Engineering reliable digital solutions with a focus on scalability and user experience. Driven by innovation and quality code.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-8 text-lg">Quick Links</h4>
                                <ul className="space-y-4 text-sm text-slate-400">
                                    {navLinks.map(link => <li key={link.name}><a href={link.href} className="hover:text-indigo-400 transition-colors">{link.name}</a></li>)}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-8 text-lg">Connect</h4>
                                <ul className="space-y-4 text-sm text-slate-400">
                                    <li><a href="https://github.com/saikriz898" className="flex items-center gap-3 hover:text-white transition-colors"><Github size={16} /> Github</a></li>
                                    <li><a href="https://www.linkedin.com/in/saikriz898" className="flex items-center gap-3 hover:text-white transition-colors"><Linkedin size={16} /> LinkedIn</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-8 text-lg">Get in Touch</h4>
                                <ul className="space-y-4 text-sm text-slate-400">
                                    <li className="flex items-center gap-3"><MapPin size={16} className="text-purple-400" /> Pollachi, India</li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-white/5 pt-12 flex justify-center items-center text-xs text-slate-500 font-mono">
                            <p>© {new Date().getFullYear()} Sai Krishnan. All rights reserved.</p>
                        </div>
                    </div>
                </footer>

                {/* Scroll To Top Button */}
                <AnimatePresence>
                    {showScrollTop && (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-center"
                        >
                            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest vertical-text transform -rotate-180 opacity-50">Back to Top</span>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="pushable circular group"
                            >
                                <span className="shadow-3d"></span>
                                <span className="edge-3d"></span>
                                <span className="front-3d bg-indigo-600">
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowUp size={24} />
                                    </motion.div>
                                </span>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

// Sub-components
const SectionHeader = ({ title, subtitle }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-16">
        <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm bg-indigo-500/10 px-3 py-1 rounded-full">{subtitle}</span>
        <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-white">{title}</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-600 mx-auto mt-4 rounded-full"></div>
    </motion.div>
);

const TimelineItem = ({ data, index }) => {
    const isEven = index % 2 === 0;
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8 md:gap-0">
            <div className={`hidden md:block w-[45%] ${isEven ? 'text-right pr-12' : 'order-last text-left pl-12'}`}>
                <div className="space-y-2 group">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-indigo-400 mb-2 ${isEven ? 'flex-row-reverse' : ''}`}>
                        <Calendar size={12} /> {data.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{data.degree}</h3>
                    <div className="text-slate-400 font-medium">{data.school}</div>
                    <p className="text-slate-500 text-sm leading-relaxed mt-2">{data.desc}</p>
                </div>
            </div>
            <div className="absolute left-[10px] md:left-1/2 transform md:-translate-x-1/2 top-0 flex flex-col items-center h-full">
                <div className={`w-5 h-5 rounded-full border-2 border-slate-950 z-20 relative bg-gradient-to-r ${data.color}`}></div>
            </div>
            <div className="md:hidden pl-12 w-full">
                <div className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl">
                    <div className="text-indigo-400 text-xs font-mono mb-2">{data.year}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{data.degree}</h3>
                    <div className="text-sm text-slate-400">{data.school}</div>
                </div>
            </div>
            <div className={`hidden md:flex w-[45%] ${isEven ? 'justify-start pl-12 order-last' : 'justify-end pr-12'}`}>
                <div className="w-16 h-16 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-white opacity-80">
                    {data.icon}
                </div>
            </div>
        </motion.div>
    );
};

const BentoProjectCard = ({ data }) => (
    <motion.div layout initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className={`group relative rounded-3xl overflow-hidden border border-white/5 bg-slate-900/50 backdrop-blur-sm ${data.size || 'col-span-1'} ${data.featured ? 'min-h-[440px]' : 'min-h-[260px]'}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-10`}></div>
        <div className="relative h-full p-6 flex flex-col z-10">
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-white">{data.icon}</div>
                <div className="flex gap-2">
                    {data.link && <a href={data.link} target="_blank" className="p-2 bg-slate-950/50 rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors border border-white/10"><Github size={16} /></a>}
                    {data.live && <a href={data.live} target="_blank" className="p-2 bg-slate-950/50 rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors border border-white/10"><ExternalLink size={16} /></a>}
                </div>
            </div>
            <div className="mt-auto">
                <div className="text-xs font-bold text-indigo-400 mb-1 uppercase tracking-widest">{data.category}</div>
                <h3 className={`font-bold text-white mb-2 ${data.featured ? 'text-3xl' : 'text-xl'}`}>{data.title}</h3>
                <p className="text-slate-400 font-medium text-sm line-clamp-2 mb-4">{data.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {data.tags.map(tag => <span key={tag} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70 bg-white/5 rounded-full border border-white/5">{tag}</span>)}
                </div>
            </div>
        </div>
    </motion.div>
);

const SocialLink = ({ href, icon }) => (
    <a href={href} target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 transition-all shadow-lg hover:shadow-indigo-500/20">{icon}</a>
);

const SocialPill = ({ href, icon, label }) => (
    <a href={href} target="_blank" className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 border border-white/10 text-slate-400 hover:bg-white hover:text-slate-950 transition-all">
        {icon}
        <span className="font-bold text-sm tracking-wide">{label}</span>
    </a>
);

export default Portfolio;