import { useState } from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBookOpen, FiAward } from "react-icons/fi";

const EDUCATION = {
  period: "2020 - 2024",
  degree: "B.Tech",
  college: "Chameli Devi Group of Institutions",
  location: "Indore, Madhya Pradesh",
  branch: "Computer Science & Engineering",
  highlights: [
    "Member - Google Developer Student Clubs (GDSC)",
    "Participant - ICICRTC International Conference, April 2023",
  ],
  subjects: ["Java", "C++", "Data Structures", "DBMS", "Operating Systems"],
};

const Education = () => {
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
      id="education"
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
        <div className="w-10 h-px bg-amber-300" />
        <span className="text-amber-300 text-sm font-mono uppercase tracking-widest">Academics</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
          Education
        </h2>
        <p className="mt-4 max-w-3xl text-neutral-200 text-lg leading-8">
          Strong computer science foundation with practical exposure to programming, databases, and core engineering subjects.
        </p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="rounded-2xl border border-amber-300/25 bg-slate-950/80 p-5 md:p-7 shadow-xl shadow-amber-950/10 backdrop-blur-md"
      >
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-xs font-mono text-amber-100">
            <FiCalendar size={12} />
            {EDUCATION.period}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-xs font-mono text-amber-100">
            <FiMapPin size={12} />
            {EDUCATION.location}
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_.9fr] gap-8 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">{EDUCATION.degree}</h3>
            <p className="text-amber-100 text-base md:text-lg font-bold mb-2">{EDUCATION.college}</p>
            <p className="flex items-center gap-2 text-neutral-200 text-sm md:text-base leading-7 mb-6">
              <FiBookOpen className="text-amber-300" />
              {EDUCATION.branch}
            </p>

            <div className="flex flex-wrap gap-2">
              {EDUCATION.subjects.map((subject) => (
                <span
                  key={subject}
                  className="px-3 py-1.5 rounded-md bg-amber-400/10 border border-amber-300/25 text-amber-100 text-xs md:text-sm font-mono font-semibold"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2 mb-4">
              <FiAward className="text-amber-300" />
              <span className="text-white font-bold">Highlights</span>
            </div>
            <ul className="grid gap-2.5">
              {EDUCATION.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 items-start text-neutral-200 text-sm md:text-base leading-7">
                  <span className="text-amber-300 mt-1 flex-shrink-0 font-black">&gt;</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
      </div>
    </section>
  );
};

export default Education;
