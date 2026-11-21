const timeline = [
  {
    year: "2022",
    title: "Started Web Development",
    description: "Began learning HTML, CSS, JavaScript, and React. Built first projects and understood the fundamentals of modern web development.",
  },
  {
    year: "2023",
    title: "Full-Stack & TypeScript",
    description: "Moved to full-stack development with Next.js, TypeScript, Node.js, and databases. Started building production-ready applications.",
  },
  {
    year: "2023",
    title: "Web3 & Blockchain",
    description: "Entered Web3 development: Solidity, Foundry, Wagmi, Viem. Built smart contracts and decentralized applications. First blockchain project shipped.",
  },
  {
    year: "2024",
    title: "Production Systems & Open Source",
    description: "Built Veyronis — cross-chain escrow platform. Contributed to Cashu/NodeSignal payment reliability. Worked on AMEN prediction platform backend.",
  },
  {
    year: "2025",
    title: "Product Engineering Focus",
    description: "SMC Academy referral systems, Jamfolk music platform concept, SMC HUB UYO booking experience. Focus on product thinking and user-facing features.",
  },
  {
    year: "Now",
    title: "Building & Learning",
    description: "Continuing to build practical products, blockchain infrastructure, and developer tools. Always shipping.",
  },
];

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue">04 / Journey</p>
            <h2 id="journey-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Engineering journey
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              How the work evolved over time.
            </p>
          </div>

          <div className="border-t border-border">
            {timeline.map((item, index) => (
              <div
                key={`${item.year}-${index}`}
                className="grid gap-2 border-b border-border py-7 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8"
              >
                <p className="font-mono text-xs text-electric-blue">{item.year}</p>
                <div>
                  <h3 className="text-base font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
