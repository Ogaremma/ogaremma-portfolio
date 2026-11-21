"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Solidity"],
    color: "royal-blue",
    bgColor: "bg-royal-blue/10",
    borderColor: "border-royal-blue/20",
    textColor: "text-royal-blue",
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "React", "Next.js"],
    color: "electric-blue",
    bgColor: "bg-electric-blue/10",
    borderColor: "border-electric-blue/20",
    textColor: "text-electric-blue",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI"],
    color: "emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-500",
  },
  {
    category: "Blockchain",
    items: ["Solidity", "Foundry", "Wagmi", "Viem", "Ethereum", "Bitcoin ecash / Cashu"],
    color: "amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-500",
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB"],
    color: "violet-500",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-500",
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Docker", "AI-assisted development tools"],
    color: "rose-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    textColor: "text-rose-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-royal-navy mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-blue max-w-2xl mx-auto">Technologies I work with. Not expert-level mastery in everything — just tools I&apos;ve used to build real things.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="p-6 rounded-xl border border-border bg-card-bg hover:border-royal-blue/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-royal-navy mb-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${skill.bgColor.replace("bg-", "bg-")}`} aria-hidden="true" />
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg border ${skill.bgColor} ${skill.borderColor} ${skill.textColor}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}