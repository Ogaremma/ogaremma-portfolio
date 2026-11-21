import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16 min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </main>
    </>
  );
}