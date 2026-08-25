import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const Contact: React.FC = () => {
  const email = 'saikrishnan2116@gmail.com';

  return (
    <section id="contact" className="w-full py-20 lg:py-28 bg-[#fafaf8] border-t border-neutral-200/80">
      <div className="container-custom">
        <SectionHeader
          badge="CONTACT"
          title="Open for Engineering Roles,"
          highlightTitle="Internships & Projects."
          description="Whether you are a recruiter, engineering leader, founder, or collaborator, feel free to reach out."
        />

        {/* ── Executive Contact Card ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 lg:p-14 shadow-xl border border-neutral-800 relative overflow-hidden text-left"
        >
          <div className="relative z-10 space-y-8">
            {/* Location Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-800 border border-neutral-700/80 rounded-full font-mono text-xs text-neutral-200">
                <MapPin size={13} className="text-neutral-300" />
                <span>Pollachi / Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                Let's build something together.
              </h2>
              <p className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed max-w-2xl">
                Available for Full-Stack Development roles, Software Engineering Internships, AI Applications, and Technical Collaborations.
              </p>
            </div>

            {/* Action CTAs — Clean & Direct */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Send Email — Matte White Button */}
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(255,255,255,0.15)' }}
                whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold text-xs rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all group"
              >
                <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-neutral-900" />
                <span>Send Email</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/saikriz898"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.3)' }}
                whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-800/90 hover:bg-neutral-800 text-white font-semibold text-xs rounded-xl border border-neutral-700/80 shadow-sm transition-all group"
              >
                <Linkedin size={15} className="text-neutral-300" />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/saikriz898"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, borderColor: 'rgba(255,255,255,0.3)' }}
                whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-800/90 hover:bg-neutral-800 text-white font-semibold text-xs rounded-xl border border-neutral-700/80 shadow-sm transition-all group"
              >
                <Github size={15} className="text-neutral-300" />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
