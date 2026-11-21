export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-b border-border bg-section">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue">01 / About</p>
            <h2 id="about-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              About
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-relaxed text-foreground">
              I&apos;m a software engineer with three years of experience building web applications, blockchain systems, and product engineering work — from early-stage concepts to production systems serving real users.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
              I care about understanding the code, architecture, and engineering decisions behind what I build. My approach is simple: learn, build, test, contribute, and ship.
            </p>

            <div className="mt-10 grid gap-x-12 gap-y-8 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-white">Engineering approach</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Understand the problem and its constraints, build a reliable solution, then improve it through testing and feedback.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">What I value</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Clear engineering decisions, dependable systems, and products that are genuinely useful to the people who rely on them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
