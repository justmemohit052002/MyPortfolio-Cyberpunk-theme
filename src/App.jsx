import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarfieldCanvas from "./components/StarfieldCanvas";
import Preloader from "./components/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

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
  }, [loading]);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-violet-400 selection:text-violet-900">

      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Deep space base gradient */}
          <div
            className="fixed inset-0 -z-20 h-full w-full"
            style={{
              background:
                "radial-gradient(125% 125% at 50% 10%, #03010a 35%, #0d0730 65%, #050d1f 100%)",
            }}
          />

          {/* Three.js starfield + nebula */}
          <StarfieldCanvas />

          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </>
      )}

    </div>
  );
};

export default App;
