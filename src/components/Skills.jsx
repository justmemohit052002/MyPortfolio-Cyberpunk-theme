import { useState } from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  SiHibernate,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiSpringboot,
} from "react-icons/si";
import { FiCode, FiDatabase, FiLock, FiServer, FiTerminal } from "react-icons/fi";

const skillGroups = [
  {
    title: "Backend Development",
    eyebrow: "API + Business Logic",
    icon: <FiServer />,
    color: "cyan",
    score: 88,
    skills: ["Java", "Spring Boot", "Spring Security", "Hibernate", "JDBC", "REST APIs", "Maven"],
  },
  {
    title: "Frontend Development",
    eyebrow: "Interactive Interfaces",
    icon: <FiCode />,
    color: "pink",
    score: 78,
    skills: ["React JS", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Database & Persistence",
    eyebrow: "Reliable Data Layer",
    icon: <FiDatabase />,
    color: "emerald",
    score: 82,
    skills: ["PostgreSQL", "MySQL", "JPA", "Hibernate ORM", "DBMS", "Query Design"],
  },
  {
    title: "Core Programming",
    eyebrow: "Problem Solving",
    icon: <FiTerminal />,
    color: "violet",
    score: 84,
    skills: ["Java", "C++", "OOP", "DSA", "Collections", "Streams", "Multithreading"],
  },
];

const featuredSkills = [
  { name: "Java", icon: <FaJava />, color: "#f89820", note: "OOP + DSA" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F", note: "REST APIs" },
  { name: "React JS", icon: <SiReact />, color: "#61DAFB", note: "Frontend UI" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", note: "Relational DB" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1", note: "SQL" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", note: "Web Logic" },
  { name: "Hibernate", icon: <SiHibernate />, color: "#BCAE79", note: "ORM" },
  { name: "Security", icon: <FiLock />, color: "#f9a8d4", note: "JWT + Roles" },
];

const tone = {
  cyan: {
    border: "border-cyan-300/25 hover:border-cyan-200/60",
    bg: "bg-cyan-300/10",
    text: "text-cyan-100",
    icon: "text-cyan-200",
    bar: "from-cyan-300 to-blue-400",
    shadow: "hover:shadow-cyan-500/15",
  },
  pink: {
    border: "border-pink-300/25 hover:border-pink-200/60",
    bg: "bg-pink-300/10",
    text: "text-pink-100",
    icon: "text-pink-200",
    bar: "from-pink-300 to-fuchsia-400",
    shadow: "hover:shadow-pink-500/15",
  },
  emerald: {
    border: "border-emerald-300/25 hover:border-emerald-200/60",
    bg: "bg-emerald-300/10",
    text: "text-emerald-100",
    icon: "text-emerald-200",
    bar: "from-emerald-300 to-teal-400",
    shadow: "hover:shadow-emerald-500/15",
  },
  violet: {
    border: "border-violet-300/25 hover:border-violet-200/60",
    bg: "bg-violet-300/10",
    text: "text-violet-100",
    icon: "text-violet-200",
    bar: "from-violet-300 to-purple-400",
    shadow: "hover:shadow-violet-500/15",
  },
};

const Skills = () => {
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
      id="skills"
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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[.78fr_1.22fr]">
        <div className="flex flex-col justify-center">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-10 bg-cyan-300" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-200">Technical Arsenal</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl"
          >
            Skills that build
            <span className="block bg-gradient-to-r from-cyan-200 via-pink-200 to-emerald-200 bg-clip-text text-transparent">
              real products.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="mt-4 max-w-xl text-base leading-7 text-neutral-200 lg:text-sm lg:leading-6 xl:text-lg xl:leading-8"
          >
            A focused stack for secure backends, responsive React interfaces, persistent data, and practical problem
            solving across the full application flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2"
          >
            {featuredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group rounded-2xl border border-white/10 bg-black/30 p-4 shadow-2xl shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-white/[0.06] ${
                  index > 3 ? "lg:hidden 2xl:block" : ""
                }`}
              >
                <span
                  className="mb-3 block text-3xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color, filter: `drop-shadow(0 0 12px ${skill.color}66)` }}
                >
                  {skill.icon}
                </span>
                <div className="text-sm font-black text-white">{skill.name}</div>
                <div className="mt-1 text-xs font-mono uppercase tracking-wider text-neutral-500">{skill.note}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid content-center gap-3 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const styles = tone[group.color];

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-[1.2rem] border ${styles.border} bg-neutral-950/72 p-4 shadow-2xl shadow-black/25 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${styles.shadow}`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${styles.bar}`} />
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className={`mb-2 text-xs font-mono uppercase tracking-widest ${styles.text}`}>
                      {group.eyebrow}
                    </div>
                    <h3 className="text-xl font-black leading-tight text-white lg:text-xl xl:text-2xl">{group.title}</h3>
                  </div>
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border ${styles.border} ${styles.bg} ${styles.icon}`}
                  >
                    {group.icon}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-500">
                    <span>Confidence</span>
                    <span className={styles.text}>{group.score}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${group.score}%` }}
                      transition={{ duration: 0.9, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full bg-gradient-to-r ${styles.bar}`}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border ${styles.border} ${styles.bg} px-2.5 py-1.5 text-xs font-bold ${styles.text} transition-all duration-200 group-hover:bg-white/[0.07]`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
