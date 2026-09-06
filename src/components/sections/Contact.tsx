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
          align="center"
          badge="GET IN TOUCH"
          title="Open for Engineering Roles,"
          highlightTitle="Internships & Projects."
          description="Whether you are a recruiter, engineering lead, founder, or collaborator, feel free to reach out directly."
        />

        {/* ── Editorial Clean Contact Card ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto rounded-3xl bg-white border border-neutral-200/90 p-8 sm:p-12 lg:p-14 shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-left relative overflow-hidden"
        >
          <div className="relative z-10 space-y-8">
            {/* Status & Location Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full font-mono text-xs text-emerald-800 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for 2026 Roles &amp; Internships</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 border border-neutral-200/80 rounded-full font-mono text-xs text-neutral-600 font-medium">
                <MapPin size={13} className="text-neutral-500" />
                <span>Pollachi / Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Headline & Description */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-neutral-900 leading-[1.08]">
                Let's build something extraordinary together.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-2xl">
                Ready to contribute to AI systems engineering, full-stack web applications, and autonomous workforce workflows. Reach out via email or connect on social platforms.
              </p>
            </div>

            {/* Action CTAs — Clean & Direct */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Send Email Button */}
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-mono text-xs font-semibold rounded-xl shadow-sm hover:shadow-md transition-all group"
              >
                <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
                <span>Send Direct Email</span>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com/in/saikriz898"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-50 text-neutral-900 font-mono text-xs font-semibold rounded-xl border border-neutral-200 shadow-2xs hover:border-neutral-300 transition-all group"
              >
                <Linkedin size={15} className="text-neutral-700" />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/saikriz898"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 1 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-50 text-neutral-900 font-mono text-xs font-semibold rounded-xl border border-neutral-200 shadow-2xs hover:border-neutral-300 transition-all group"
              >
                <Github size={15} className="text-neutral-700" />
                <span>GitHub</span>
                <ArrowUpRight size={14} className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
