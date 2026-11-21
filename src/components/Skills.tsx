const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Solidity"] },
  { category: "Frontend", items: ["HTML", "CSS", "React", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI"] },
  { category: "Blockchain", items: ["Solidity", "Foundry", "Wagmi", "Viem", "Ethereum", "Bitcoin ecash / Cashu"] },
  { category: "Data", items: ["PostgreSQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "GitHub", "Docker"] },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-b border-border bg-section">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue">03 / Skills</p>
            <h2 id="skills-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Technical skills
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Technologies I use across the projects above.
            </p>
          </div>

          <div className="border-t border-border">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="grid gap-2 border-b border-border py-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8"
              >
                <h3 className="text-sm font-medium text-white">{skill.category}</h3>
                <p className="text-sm leading-relaxed text-muted">{skill.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
