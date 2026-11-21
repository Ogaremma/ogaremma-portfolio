export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue">
              Software Engineer · Web3 Developer · Product Builder
            </p>
            <h1 id="hero-heading" className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Ogar Emma
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground sm:text-2xl">
              I build practical products, blockchain infrastructure, and developer tools that solve real problems.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              Three years of shipping production software across web applications, blockchain systems, and product engineering.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 border-b border-electric-blue pb-1 text-sm font-semibold text-white transition-colors hover:text-electric-blue"
              >
                View selected work
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </a>
              <a href="#contact" className="text-sm font-medium text-muted transition-colors hover:text-white">
                Get in touch
              </a>
            </div>
          </div>

          <aside className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" aria-label="Profile summary">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">At a glance</p>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-electric-blue">Experience</dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground">
                  Three years across web applications, blockchain systems, and product engineering.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-electric-blue">Focus</dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground">
                  Web3 infrastructure, developer tools, and user-facing products.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-electric-blue">Stack</dt>
                <dd className="mt-1 text-sm leading-relaxed text-foreground">
                  TypeScript, Next.js, React, Python, and Solidity.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
