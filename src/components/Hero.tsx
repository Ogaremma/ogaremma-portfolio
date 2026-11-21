"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--royal-blue)_0%,_transparent_70%)] opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_50%,_var(--background)_100%)]" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card-bg text-sm font-medium text-royal-blue">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue" />
            </span>
            Building practical software & blockchain products
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-royal-navy mb-6"
        >
          Ogar Emma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl font-medium text-muted-blue mb-4"
        >
          Software Engineer · Web3 Developer · Product Builder
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-lg sm:text-xl text-muted-blue max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build practical products, blockchain infrastructure, and developer tools that solve real problems.
          3 years of experience shipping production software with Next.js, React, TypeScript, Solidity, and Python.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-royal-blue text-white font-semibold text-lg hover:bg-royal-blue/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2"
          >
            View Projects
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-royal-blue text-royal-blue font-semibold text-lg hover:bg-royal-blue/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card-bg"
        >
          <div className="flex items-center gap-1.5 text-sm text-muted-blue">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Open to interesting projects & collaborations
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-muted-blue/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}