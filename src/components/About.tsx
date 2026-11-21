"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-royal-navy mb-4">About</h2>
          <p className="text-lg text-muted-blue max-w-2xl mx-auto">Three years of building software that matters.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="p-6 rounded-xl border border-border bg-card-bg hover:border-royal-blue/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-royal-blue/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-royal-navy mb-3">Experience</h3>
            <p className="text-muted-blue leading-relaxed">
              Three years of professional software development across web applications, blockchain systems, and product engineering. From early-stage concepts to production systems serving real users.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="p-6 rounded-xl border border-border bg-card-bg hover:border-royal-blue/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-electric-blue/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.734-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-royal-navy mb-3">Engineering Mindset</h3>
            <p className="text-muted-blue leading-relaxed">
              I care about understanding the code, architecture, and engineering decisions behind what I build. My approach: learn, build, test, contribute, and ship. AI-assisted development with human judgment.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="p-6 rounded-xl border border-border bg-card-bg hover:border-royal-blue/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-royal-navy mb-3">Focus Areas</h3>
            <p className="text-muted-blue leading-relaxed">
              Web3 infrastructure, developer tools, and products that solve real problems. Blockchain escrow, payment reliability, prediction systems, and community platforms. Building for practitioners, not speculators.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}