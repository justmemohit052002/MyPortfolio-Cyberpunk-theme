import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PROJECTS = [
  {
    id: 1,
    title: "Personal Loan Application",
    subtitle: "Full-Stack Loan Management System",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "Spring Boot", "Spring Security", "React.js", "PostgreSQL", "JWT", "Razorpay", "Scheduling"],
    highlights: [
      "Role-based authentication for USER, ADMIN, and LOAN OFFICER",
      "Custom credit score evaluation using income and loan history",
      "Razorpay payment gateway integration for EMI processing",
      "Automated EMI scheduler with Spring Scheduling",
      "Email notifications and global exception handling",
    ],
    description:
      "A full-stack loan management system for applications, document verification, credit assessment, EMI tracking, and repayment workflows.",
    github: "https://github.com",
    live: null,
    accent: "cyan",
  },
  {
    id: 2,
    title: "Flood Risk Assessment System",
    subtitle: "AI-Powered Terrain Risk Analysis",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    tags: ["React.js", "Next.js", "FastAPI", "Google Gemini", "TypeScript", "Tailwind CSS", "REST APIs"],
    highlights: [
      "AI-powered flood risk evaluation from terrain images",
      "FastAPI backend with image analysis and fallback handling",
      "Responsive Next.js and TypeScript frontend",
      "Risk detection using elevation and water-proximity signals",
      "Actionable recommendations with automated reporting",
    ],
    description:
      "An AI-powered web app that analyzes terrain images and produces flood-risk insights, safety recommendations, and structured reports.",
    github: "https://github.com",
    live: null,
    accent: "emerald",
  },
];

const CERTS = [
  { title: "Java Full Stack Development", issuer: "Fusion Software Institute, Pune", tag: "Training", tone: "cyan" },
  { title: "Java Certification", issuer: "OneRoadmap", tag: "Java", tone: "violet" },
  { title: "ICICRTC Conference Participant", issuer: "International Conference - April 2023", tag: "Conference", tone: "amber" },
  { title: "Google Developer Student Club", issuer: "CDGI, Indore", tag: "Community", tone: "emerald" },
];

const accentClass = {
  cyan: {
    border: "border-cyan-300/35",
    text: "text-cyan-100",
    soft: "bg-cyan-400/10",
    glow: "shadow-cyan-500/10",
    dot: "bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.85)]",
  },
  emerald: {
    border: "border-emerald-300/35",
    text: "text-emerald-100",
    soft: "bg-emerald-400/10",
    glow: "shadow-emerald-500/10",
    dot: "bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.85)]",
  },
};

const certToneClass = {
  cyan: {
    line: "from-cyan-300 to-blue-400",
    border: "border-cyan-300/25 hover:border-cyan-300/55",
    bg: "bg-cyan-400/5",
    tag: "border-cyan-300/30 bg-cyan-400/10 text-cyan-100",
    text: "text-cyan-200",
  },
  violet: {
    line: "from-violet-300 to-fuchsia-400",
    border: "border-violet-300/25 hover:border-violet-300/55",
    bg: "bg-violet-500/5",
    tag: "border-violet-300/30 bg-violet-500/10 text-violet-100",
    text: "text-violet-200",
  },
  amber: {
    line: "from-amber-300 to-orange-400",
    border: "border-amber-300/25 hover:border-amber-300/55",
    bg: "bg-amber-400/5",
    tag: "border-amber-300/30 bg-amber-400/10 text-amber-100",
    text: "text-amber-200",
  },
  emerald: {
    line: "from-emerald-300 to-teal-400",
    border: "border-emerald-300/25 hover:border-emerald-300/55",
    bg: "bg-emerald-400/5",
    tag: "border-emerald-300/30 bg-emerald-400/10 text-emerald-100",
    text: "text-emerald-200",
  },
};

const ProjectCard = ({ project, direction }) => {
  const accent = accentClass[project.accent];

  return (
    <motion.div
      key={project.id}
      custom={direction}
      initial={{ opacity: 0, x: direction * 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -60 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid lg:grid-cols-[1fr_1.08fr] gap-8 items-center"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-72 w-full object-cover md:h-[430px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <p className="text-white/70 text-sm font-mono mb-2">{project.subtitle}</p>
          <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">{project.title}</h3>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3.5 py-2 rounded-full border ${accent.border} ${accent.soft} ${accent.text} text-xs md:text-sm font-bold shadow-sm ${accent.glow}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-neutral-100 text-base md:text-lg leading-8 mb-7">{project.description}</p>

        <div className="mb-7">
          <div className="text-cyan-300 text-sm font-mono uppercase tracking-widest mb-3">Key Highlights</div>
          <ul className="grid gap-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 items-start text-neutral-200 text-sm md:text-base leading-7">
                <span className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full ${accent.dot}`} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-lg border border-cyan-300/35 bg-cyan-400/10 text-cyan-100 text-sm font-bold hover:bg-cyan-300/15 hover:border-cyan-200/60 transition-all"
          >
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg border border-violet-300/35 bg-violet-500/15 text-violet-100 text-sm font-bold hover:bg-violet-400/20 hover:border-violet-200/60 transition-all"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setIdx((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const next = () => {
    setDirection(1);
    setIdx((i) => (i + 1) % PROJECTS.length);
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-24 px-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(124,58,237,.08), rgba(6,182,212,.07), rgba(15,23,42,.2))",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-cyan-300" />
          <span className="text-cyan-300 text-sm font-mono uppercase tracking-widest">What I've Built</span>
        </div>

        <div className="flex items-end justify-between mb-10 flex-wrap gap-5">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black tracking-tight mb-3 text-white"
            >
              Projects
            </motion.h2>
            <p className="text-neutral-200 text-lg leading-8 max-w-3xl">
              Full-stack applications built with secure APIs, production-minded workflows, and clean user interfaces.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-neutral-300 text-sm font-mono">
              {idx + 1} / {PROJECTS.length}
            </span>
            <button
              onClick={prev}
              aria-label="Previous project"
              className="w-11 h-11 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-neutral-200 hover:border-cyan-300/50 hover:text-cyan-200 transition-all"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="w-11 h-11 rounded-xl border border-white/15 bg-white/[0.04] flex items-center justify-center text-neutral-200 hover:border-cyan-300/50 hover:text-cyan-200 transition-all"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden mb-6">
          <AnimatePresence mode="wait" custom={direction}>
            <ProjectCard key={PROJECTS[idx].id} project={PROJECTS[idx]} direction={direction} />
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mb-20">
          {PROJECTS.map((project, i) => (
            <button
              key={project.id}
              onClick={() => {
                setDirection(i > idx ? 1 : -1);
                setIdx(i);
              }}
              aria-label={`Show ${project.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "bg-cyan-300 w-8" : "bg-white/25 w-2"}`}
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 lg:gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-amber-300" />
              <span className="text-amber-300 text-sm font-mono uppercase tracking-widest">Credentials</span>
            </div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white"
            >
              Certifications & Activities
            </motion.h3>
            <p className="text-neutral-200 text-base md:text-lg leading-8">
              Training, certifications, conferences, and community involvement that support the technical work above.
            </p>
          </div>

          <div className="grid gap-3">
            {CERTS.map((cert, i) => {
              const tone = certToneClass[cert.tone];

              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-xl border ${tone.border} ${tone.bg} px-4 py-4 md:px-5 transition-all duration-300 hover:-translate-y-0.5`}
                >
                  <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${tone.line}`} />
                  <div className="flex flex-wrap items-start justify-between gap-4 pl-3">
                    <div>
                      <h4 className="text-lg md:text-xl font-black text-white leading-tight mb-1">{cert.title}</h4>
                      <p className="text-sm md:text-base text-neutral-300 font-mono leading-6">{cert.issuer}</p>
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-mono font-semibold ${tone.tag}`}>
                      {cert.tag}
                    </span>
                  </div>
                  <div className={`mt-4 ml-3 h-px bg-gradient-to-r ${tone.line} opacity-35 group-hover:opacity-70 transition-opacity`} />
                  <p className={`ml-3 mt-3 text-xs font-mono uppercase tracking-widest ${tone.text}`}>
                    Verified learning milestone
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
