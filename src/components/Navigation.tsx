"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            className="text-xl font-bold text-royal-navy hover:text-royal-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 rounded"
            aria-label="Ogar Emma - Home"
          >
            OE
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-blue hover:text-royal-blue transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 rounded"
                whileHover={{ x: 2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-royal-blue text-royal-blue font-medium text-sm hover:bg-royal-blue/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2"
            >
              Contact
            </a>

            <button
              className="md:hidden p-2 rounded-lg text-muted-blue hover:text-royal-blue hover:bg-royal-blue/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-white border-t border-border"
            >
              <div className="py-4 space-y-2 px-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleMobileMenuClick(item.href)}
                    className="block px-4 py-3 rounded-lg text-muted-blue hover:text-royal-blue hover:bg-royal-blue/5 font-medium transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => handleMobileMenuClick("#contact")}
                  className="block mt-2 px-4 py-3 rounded-lg border-2 border-royal-blue text-royal-blue font-medium text-center hover:bg-royal-blue/5 transition-colors"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}