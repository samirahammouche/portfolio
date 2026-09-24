import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { site } from "../data/site";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">
        © {new Date().getFullYear()} {site.name}. Built with Next.js and deployed on Vercel.
      </footer>
    </>
  );
}
