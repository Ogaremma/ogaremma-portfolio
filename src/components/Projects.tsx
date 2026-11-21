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
    <section id="projects" aria-labelledby="projects-heading" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue">02 / Selected work</p>
            <h2 id="projects-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Projects
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Products, open-source contributions, and systems I have worked on.
            </p>
          </div>

          <div className="border-t border-border">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="grid gap-6 border-b border-border py-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:gap-12"
              >
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-electric-blue">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl font-semibold tracking-tight text-white">{project.name}</h3>
                  </div>
                  <p className="mt-3 pl-8 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {project.status}
                  </p>
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-muted">{project.description}</p>

                  <dl className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-electric-blue">Role</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-foreground">{project.contribution}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-electric-blue">Stack</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-foreground">{project.technologies.join(" · ")}</dd>
                    </div>
                  </dl>

                  <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-electric-blue transition-colors hover:text-white"
                      >
                        View project
                        <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white"
                      >
                        GitHub
                        <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
