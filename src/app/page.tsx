import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
