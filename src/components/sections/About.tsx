import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Code2, Cpu, Layout, Layers, Compass, Rocket, Quote, MapPin } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import resumePdf from '../../assets/Sai_Krishnan_S_Resume.pdf';

const CAPABILITIES = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'Building modern web applications and scalable backend systems.'
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Exploring AI agents, intelligent workflows, RAG, automation, and AI-powered products.'
  },
  {
    icon: Layout,
    title: 'Product Design',
    description: 'Turning ideas into structured products with clear user flows and purposeful experiences.'
  },
  {
    icon: Layers,
    title: 'System Design',
    description: 'Thinking through architecture, data flow, APIs, security, scalability, and maintainability.'
  },
  {
    icon: Compass,
    title: 'UI/UX Design',
    description: 'Designing interfaces that feel intentional, functional, and human rather than simply visually impressive.'
  },
  {
    icon: Rocket,
    title: 'Product Development',
    description: 'Taking projects from idea → validation → architecture → development → refinement.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-28 bg-[#fafaf8] border-t border-neutral-200/80">
      <div className="container-custom">
        <SectionHeader
          badge="ABOUT ME"
          title="Building with clarity,"
          highlightTitle="structure & purpose."
          description="A Computer Science student & project designer focused on turning ideas into well-engineered digital products."
        />

        <div className="max-w-5xl mx-auto space-y-12">
          {/* ── TOP SECTION: Story & Quote ──────────────────────────────── */}
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
                I work at the intersection of <strong className="text-neutral-900 font-semibold">software engineering, AI, product design, and system architecture</strong> — from defining a problem and designing the product to building the underlying systems and refining the experience.
              </p>

              <p>
                My work goes beyond simply building interfaces. I think about <strong className="text-neutral-900 font-semibold">how products work, how systems scale, how users interact with them, and how technology can be used to solve meaningful problems</strong>. I regularly explore areas such as AI agents, AI automation, SaaS, backend systems, product architecture, UI/UX, and emerging technologies.
              </p>

              <p>
                I learn primarily by building. Every project is an opportunity to understand something deeper — whether that means designing a system from scratch, experimenting with a new technology, improving an existing product, or breaking down a complex problem into something practical.
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
              <div className="bg-white border-l-4 border-l-neutral-900 border border-neutral-200/90 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] relative">
                <Quote size={24} className="text-neutral-300 mb-3" />
                <p className="font-display font-semibold text-neutral-900 italic text-base leading-relaxed">
                  "I don't want to just build software. I want to understand the problem deeply, design the system intelligently, and build something worth using."
                </p>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between font-mono text-xs text-neutral-500">
                  <span className="font-bold text-neutral-900">Sai Krishnan</span>
                  <span>Building Philosophy</span>
                </div>
              </div>

              {/* Institution & Location Card */}
              <div className="bg-white border border-neutral-200/90 p-5 rounded-2xl flex items-center gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0 border border-neutral-200/60">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-mono text-xs font-semibold text-neutral-500 tracking-wider">
                    Current Institution
                  </h3>
                  <p className="font-display font-bold text-xs sm:text-sm text-neutral-900 mt-0.5 leading-tight">
                    Sri Eshwar College of Engineering, TN, India
                  </p>
                </div>
              </div>

              {/* CV Action */}
              <div className="flex items-center gap-3 pt-1">
                <a href={resumePdf} download="Sai_Krishnan_S_Resume.pdf">
                  <button className="btn-primary gap-2 text-xs">
                    <Download size={15} />
                    <span>Download Resume</span>
                  </button>
                </a>
                <a
                  href="https://github.com/saikriz898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary gap-2 text-xs"
                >
                  <Github size={15} />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── BOTTOM SECTION: What I Do (Capabilities Grid) ─────────────── */}
          <div className="pt-6 border-t border-neutral-200/80 text-left">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-extrabold text-xl text-neutral-900 tracking-tight">
                What I Do
              </h3>
              <span className="font-mono text-xs text-neutral-400 font-semibold tracking-widest uppercase">
                CAPABILITIES &amp; FOCUS
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
                    className="bg-white border border-neutral-200/90 p-5 rounded-2xl hover:border-neutral-300 hover:shadow-xs transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-800 flex items-center justify-center mb-3 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
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
