import { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiCode, FiShield, FiDatabase } from "react-icons/fi";

const EXPERIENCE = {
  period: "Nov 2025 - April 2026",
  role: "Java Full Stack Developer Intern",
  company: "Greateway Software Pvt. Ltd.",
  location: "Pune, Maharashtra",
  type: "IT Services Company",
  bullets: [
    "Developed and maintained enterprise web applications using Java, Spring Boot, React.js, and PostgreSQL.",
    "Designed secure RESTful APIs with Spring Security, JWT authentication, and role-based access control.",
    "Worked with Spring Data JPA, Hibernate, and PostgreSQL for persistence and database operations.",
    "Implemented loan processing, document verification, and payment workflows to reduce manual effort.",
    "Used Git/GitHub, Maven, Postman, and debugging tools in an Agile development workflow.",
  ],
  tech: ["Java", "Spring Boot", "React.js", "PostgreSQL", "JWT", "Spring Security", "Hibernate", "Maven"],
};

const InfoPill = ({ icon, children }) => (
  <span
    className="flex items-center gap-1.5 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-mono text-cyan-100 shadow-sm shadow-cyan-500/10"
  >
    {icon}
    {children}
  </span>
);

const Experience = () => {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 45 });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="experience"
      onPointerMove={handlePointerMove}
      className="relative min-h-screen overflow-hidden px-4 py-14 sm:px-6 md:flex md:items-center md:py-14"
      style={{
        background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(236,72,153,.16), transparent 30%),
          linear-gradient(135deg, rgba(34,211,238,.1), rgba(124,58,237,.11) 48%, rgba(16,185,129,.09))`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-25" />
      <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-cyan-400/18 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-pink-400/18 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-px bg-cyan-300" />
        <span className="text-cyan-300 text-sm font-mono uppercase tracking-widest">Career</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
          Experience
        </h2>
        <p className="mt-4 max-w-3xl text-neutral-200 text-lg leading-8">
          Practical full stack work across secure APIs, database-driven systems, and React interfaces.
        </p>
      </motion.div>

      <div className="relative max-w-6xl">
        <div className="absolute left-0 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-400 to-transparent md:block" />
        <div className="absolute left-[-7px] top-2 hidden h-3.5 w-3.5 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.9)] md:block" />

        <motion.article
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:pl-10"
        >
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-8 lg:gap-12 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <InfoPill icon={<FiCalendar size={12} />}>{EXPERIENCE.period}</InfoPill>
                <InfoPill icon={<FiMapPin size={12} />}>{EXPERIENCE.location}</InfoPill>
                <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-300/35 text-violet-100 text-xs font-mono shadow-sm shadow-violet-500/10">
                  {EXPERIENCE.type}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                {EXPERIENCE.role}
              </h3>
              <p
                className="text-xl md:text-2xl font-black mb-6"
                style={{
                  background: "linear-gradient(135deg,#67e8f9,#c4b5fd,#f0abfc)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {EXPERIENCE.company}
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="border-l-2 border-cyan-300 pl-3">
                  <FiCode className="text-cyan-300 mb-2" />
                  <span className="block text-white text-sm font-bold">Full Stack</span>
                  <span className="text-neutral-300 text-xs font-mono">Java + React</span>
                </div>
                <div className="border-l-2 border-violet-300 pl-3">
                  <FiShield className="text-violet-300 mb-2" />
                  <span className="block text-white text-sm font-bold">Security</span>
                  <span className="text-neutral-300 text-xs font-mono">JWT + Roles</span>
                </div>
                <div className="border-l-2 border-emerald-300 pl-3">
                  <FiDatabase className="text-emerald-300 mb-2" />
                  <span className="block text-white text-sm font-bold">Database</span>
                  <span className="text-neutral-300 text-xs font-mono">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div>
              <ul className="grid gap-3 mb-7">
                {EXPERIENCE.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 items-start text-neutral-100 text-base md:text-lg leading-8"
                  >
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2.5">
                {EXPERIENCE.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-300/35 text-cyan-50 text-sm md:text-base font-bold shadow-sm shadow-cyan-500/10 hover:bg-cyan-300/15 hover:border-cyan-200/60 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
    </section>
  );
};
export default Experience;
