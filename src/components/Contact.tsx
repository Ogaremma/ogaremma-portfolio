const contacts = [
  {
    name: "GitHub",
    description: "Code, contributions, and projects",
    href: "https://github.com/Ogaremma",
  },
  {
    name: "LinkedIn",
    description: "Professional network and experience",
    href: "https://www.linkedin.com/in/ogar-emma-021140341/",
  },
  {
    name: "X (Twitter)",
    description: "Thoughts on Web3, engineering, and building",
    href: "https://x.com/Web3Launcher",
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-electric-blue">05 / Contact</p>
            <h2 id="contact-heading" className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Start a conversation
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground">
              Open to interesting projects, collaborations, and conversations about Web3, product engineering, and developer tools.
            </p>

            <div className="mt-10 border-t border-border">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-border py-5"
                >
                  <span>
                    <span className="block text-sm font-medium text-white">{contact.name}</span>
                    <span className="mt-1 block text-sm text-muted">{contact.description}</span>
                  </span>
                  <svg className="h-4 w-4 shrink-0 text-electric-blue transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </a>
              ))}
            </div>

            <p className="mt-10 font-mono text-xs text-muted">
              Ogar Emma · Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
