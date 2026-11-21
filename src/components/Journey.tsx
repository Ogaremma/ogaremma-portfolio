"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2022",
    title: "Started Web Development",
    description: "Began learning HTML, CSS, JavaScript, and React. Built first projects and understood the fundamentals of modern web development.",
    icon: "code",
  },
  {
    year: "2023",
    title: "Full-Stack & TypeScript",
    description: "Moved to full-stack development with Next.js, TypeScript, Node.js, and databases. Started building production-ready applications.",
    icon: "layers",
  },
  {
    year: "2023",
    title: "Web3 & Blockchain",
    description: "Entered Web3 development: Solidity, Foundry, Wagmi, Viem. Built smart contracts and decentralized applications. First blockchain project shipped.",
    icon: "link",
  },
  {
    year: "2024",
    title: "Production Systems & Open Source",
    description: "Built Veyronis — cross-chain escrow platform. Contributed to Cashu/NodeSignal payment reliability. Worked on AMEN prediction platform backend.",
    icon: "rocket",
  },
  {
    year: "2025",
    title: "Product Engineering Focus",
    description: "SMC Academy referral systems, Jamfolk music platform concept, SMC HUB UYO booking experience. Focus on product thinking and user-facing features.",
    icon: "package",
  },
  {
    year: "Now",
    title: "Building & Learning",
    description: "Continuing to build practical products, blockchain infrastructure, and developer tools. AI-assisted development with human judgment. Always shipping.",
    icon: "sparkles",
  },
];

const icons: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  layers: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5l7 3.5v7.5M4 5l7-3.5M4 5v15l7-3.5M12 18l7-3.5v-7.5M12 18l7 3.5M12 18v-15l-7 3.5" />
    </svg>
  ),
  link: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  rocket: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  package: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  sparkles: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9M19 3l-14 9 14 9" />
    </svg>
  ),
};

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-royal-navy mb-4">Engineering Journey</h2>
          <p className="text-lg text-muted-blue">From learning web development to building production blockchain products.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-royal-blue to-electric-blue" aria-hidden="true" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-royal-blue z-10">
                  <span className={`text-royal-blue ${icons[item.icon]}`} />
                </div>

                <div className="p-5 rounded-xl border border-border bg-card-bg hover:border-royal-blue/30 transition-colors">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-semibold text-royal-blue px-3 py-1 rounded-full bg-royal-blue/10 border border-royal-blue/20">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-royal-navy">{item.title}</h3>
                  </div>
                  <p className="text-muted-blue leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}