import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Code2, Cpu, Layers, Rocket, Quote, MapPin, Bot, ShieldCheck } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import resumePdf from '../../assets/Sai_Krishnan_S_Resume.pdf';

const CAPABILITIES = [
  {
    icon: Bot,
    title: 'Multi-Agent AI & Workflows',
    description: 'Engineering autonomous AI agent fleets, LangGraph orchestrations, RAG pipelines, and intelligent AI workforce systems.'
  },
  {
    icon: Cpu,
    title: 'Explainable AI (XAI) & ML',
    description: 'Developing evidence-grounded AI models, severity classification engines, FIQA assessment, and Grad-CAM interpretability.'
  },
  {
    icon: Code2,
    title: 'Full-Stack Software Systems',
    description: 'Building high-performance web applications using React 19, Next.js, Node.js, Express, and PostgreSQL/MongoDB.'
  },
  {
    icon: Layers,
    title: 'System Design & Architecture',
    description: 'Designing modular microservices, RESTful API contracts, persistent vector stores (pgvector), and secure RBAC data layers.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy & Security Engineering',
    description: 'Implementing secret-scanning engines, DPDPA compliance workflows, JWT session auth, and API rate-limiting security.'
  },
  {
    icon: Rocket,
    title: 'Product Development Sprint',
    description: 'Orchestrating end-to-end software engineering from problem research → system architecture → development → production build.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-[#fafaf8] border-t border-neutral-200/80">
      <div className="container-custom">
        <SectionHeader
          badge="ABOUT & PHILOSOPHY"
          title="Building with clarity,"
          highlightTitle="structure & purpose."
          description="A Computer Science Engineer architecting intelligent systems, explainable AI pipelines, and scalable software products."
        />

        <div className="w-full space-y-12">
          {/* ── TOP SECTION: Narrative & Quote Card ──────────────────────────────── */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Main Narrative (Left) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4 text-neutral-600 text-base leading-relaxed text-left"
            >
              <p className="text-neutral-800 text-base font-medium leading-relaxed">
                I work at the convergence of <strong className="text-neutral-900 font-bold">AI systems, multi-agent architecture, full-stack software, and system design</strong> — turning complex algorithmic challenges into elegant, production-grade applications.
              </p>

              <p>
                My engineering approach is rooted in <strong className="text-neutral-900 font-semibold">clarity, structure, and purpose</strong>. Whether engineering explainable diabetic retinopathy screening engines (XAI) or autonomous multi-agent workforces for hackathons, I focus on system reliability, data flow clarity, and end-to-end product execution.
              </p>

              <p>
                I learn primarily by building real systems. Every project is an opportunity to dive deep into underlying abstractions — from low-level memory allocation in C/C++ and PostgreSQL relational design to modern AI agent orchestration with LangGraph and Gemini models.
              </p>
            </motion.div>

            {/* Quote Card & Location (Right) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 space-y-5 text-left"
            >
              {/* Featured Quote Card */}
              <div className="bg-white border-l-4 border-l-neutral-900 border border-neutral-200/90 p-6 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative group hover:border-neutral-300 transition-all">
                <Quote size={22} className="text-neutral-300 mb-3" />
                <p className="font-display font-semibold text-neutral-900 italic text-base leading-relaxed">
                  "I don't just write code. I understand problems deeply, design scalable systems intelligently, and build software worth using."
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between font-mono text-xs text-neutral-500">
                  <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                    <Bot size={13} className="text-neutral-700" />
                    Sai Krishnan S
                  </span>
                  <span>Building Philosophy</span>
                </div>
              </div>

              {/* Institution Card */}
              <div className="bg-white border border-neutral-200/90 p-4.5 rounded-2xl flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    Institution &amp; Location
                  </h3>
                  <p className="font-display font-bold text-xs sm:text-sm text-neutral-900 mt-0.5 leading-tight">
                    Sri Eshwar College of Engineering, India
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <a href={resumePdf} download="Sai_Krishnan_S_Resume.pdf">
                  <button className="btn-primary gap-2 text-xs py-2.5 px-4 rounded-xl">
                    <Download size={14} />
                    <span>Download Resume</span>
                  </button>
                </a>
                <a
                  href="https://github.com/saikriz898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary gap-2 text-xs py-2.5 px-4 rounded-xl"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── BOTTOM SECTION: Capabilities Grid ─────────────── */}
          <div className="pt-8 border-t border-neutral-200/80 text-left">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-extrabold text-xl text-neutral-900 tracking-tight">
                Capabilities &amp; Core Systems Focus
              </h3>
              <span className="font-mono text-xs text-neutral-400 font-semibold tracking-widest uppercase">
                ENGINEERING DOMAINS
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CAPABILITIES.map((cap, index) => {
                const IconComponent = cap.icon;
                return (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="bg-white border border-neutral-200/90 p-5 rounded-2xl hover:border-neutral-900/30 hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center mb-3.5 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                        <IconComponent size={18} />
                      </div>
                      <h4 className="font-display font-bold text-base text-neutral-900 tracking-tight mb-1.5">
                        {cap.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {cap.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
