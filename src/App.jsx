import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleCanvas from "./components/ParticleCanvas";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-violet-400 selection:text-violet-900">
      {/* 3D Particle Canvas Background */}
      <ParticleCanvas />

      {/* Fixed Gradient Overlay */}
      <div className="fixed inset-0 -z-10 h-full w-full"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #0a0a0f 40%, #1e0a3c 80%, #0a1a2e 100%)"
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
