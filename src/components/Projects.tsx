"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Veyronis",
    description: "A cross-chain, self-custodial escrow platform designed to make digital agreements safer. Combines blockchain escrow with evidence-based dispute resolution, exploring how independently verifiable evidence can help arbitrators make better decisions without automatically controlling the outcome.",
    technologies: ["Next.js", "React", "TypeScript", "Wagmi", "Viem", "Solidity", "Foundry", "Node.js", "PostgreSQL"],
    contribution: "Full-stack development: smart contracts, frontend, backend API, and infrastructure.",
    status: "Live",
    link: "https://veyronis-proof.vercel.app/",
    github: null,
  },
  {
    name: "Cashu / NodeSignal Contribution",
    description: "Worked on durable Nutzap outbox recovery for a Cashu ecash player. Focused on improving payment reliability through persistent payment state, recovery mechanisms, cross-tab coordination, and safer handling of payment proofs.",
    technologies: ["TypeScript", "Bitcoin", "Cashu", "Nostr", "Lightning"],
    contribution: "Engineering work around payment reliability and recovery in the Bitcoin ecash ecosystem. Contributor, not maintainer of upstream project.",
    status: "Open Source Contribution",
    link: null,
    github: "https://github.com/Ogaremma",
  },
  {
    name: "AMEN",
    description: "A football prediction and analytics platform focused on structured prediction workflows, data integrity, and automated daily operations. Worked on Python backend development, prediction orchestration, automated scheduling, database-backed workflows, production debugging and deployment, reliability and recovery improvements.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Automation", "API Development"],
    contribution: "Backend development, prediction orchestration, automated scheduling, database workflows, production deployment and reliability improvements.",
    status: "Live",
    link: "https://amen-six.vercel.app/",
    github: null,
  },
  {
    name: "SMC Academy",
    description: "Worked on referral and course discovery experiences for a developer education community. Focus on course discovery, referral workflows, student-facing experiences, practical education and community growth.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    contribution: "Referral workflows, course discovery features, student-facing experiences.",
    status: "In Development",
    link: null,
    github: "https://github.com/Ogaremma",
  },
  {
    name: "Jamfolk",
    description: "A music community and marketplace concept designed to help musicians discover opportunities, connect with one another, find studios, and access music-related services. Product concept in development, not a fully launched platform.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    contribution: "Product concept, architecture, and initial development.",
    status: "Concept / In Development",
    link: null,
    github: null,
  },
  {
    name: "SMC HUB UYO",
    description: "Worked on a booking and digital presence experience for a community hub. Focus on website development, booking experience, and user-friendly digital services.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    contribution: "Website development, booking experience, digital services.",
    status: "Live",
    link: null,
    github: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-royal-navy mb-4">Selected Projects</h2>
          <p className="text-lg text-muted-blue max-w-2xl mx-auto">Real projects I&apos;ve built and contributed to. No filler, no fake metrics.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group p-6 rounded-xl border border-border bg-card-bg hover:border-royal-blue/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-semibold text-royal-navy group-hover:text-royal-blue transition-colors">{project.name}</h3>
                <span className="flex-shrink-0 px-2.5 py-1 text-xs font-medium rounded-full bg-royal-blue/10 text-royal-blue border border-royal-blue/20">
                  {project.status}
                </span>
              </div>

              <p className="text-muted-blue text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-royal-navy uppercase tracking-wider mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded bg-muted-blue/10 text-muted-blue border border-muted-blue/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4 pt-4 border-t border-border">
                <h4 className="text-xs font-semibold text-royal-navy uppercase tracking-wider mb-2">My Contribution</h4>
                <p className="text-sm text-muted-blue">{project.contribution}</p>
              </div>

              <div className="flex items-center gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-royal-blue hover:text-royal-blue/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 rounded"
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-blue hover:text-royal-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 rounded"
                  >
                    GitHub
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}