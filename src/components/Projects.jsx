import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const PROJECTS = [
  {
    id: 1,
    emoji: "🏦",
    title: "Personal Loan Application",
    subtitle: "Full-Stack Loan Management System",
    gradient: "from-indigo-950 to-violet-950",
    tags: ["Java", "Spring Boot", "Spring Security", "React.js", "PostgreSQL", "JWT", "Razorpay", "Spring Scheduling"],
    highlights: [
      "Role-based auth: USER · ADMIN · LOAN OFFICER with JWT",
      "Custom Credit Score Evaluation Engine based on income & loan history",
      "Razorpay Payment Gateway integration for EMI processing",
      "Automated EMI Scheduler with Spring Scheduling",
      "Asynchronous email notifications & global exception handling",
    ],
    description:
      "A full-stack Personal Loan Management System automating loan applications, document verification, credit assessment, EMI tracking, and repayment management. Built with Spring Boot and React.js, featuring secure JWT-based authentication, RESTful API design, and a custom credit scoring engine.",
    github: "https://github.com",
    live: null,
  },
  {
    id: 2,
    emoji: "🌊",
    title: "Flood Risk Assessment System",
    subtitle: "AI-Powered Terrain Risk Analysis",
    gradient: "from-emerald-950 to-teal-950",
    tags: ["React.js", "Next.js", "FastAPI", "Google Gemini", "TypeScript", "Tailwind CSS", "REST APIs", "Postman"],
    highlights: [
      "AI-powered flood risk evaluation from terrain images via Google Gemini",
      "FastAPI backend with image analysis & fallback mechanisms",
      "Responsive Next.js & TypeScript frontend",
      "Evaluates elevation, water proximity, and risk levels",
      "Actionable recommendations with automated reporting",
    ],
    description:
      "An AI-powered web application assessing flood risk from terrain images using Google Gemini AI and a FastAPI backend. Features comprehensive image analysis for elevation mapping, water proximity detection, risk level classification, and actionable safety recommendations with a responsive Next.js frontend.",
    github: "https://github.com",
    live: null,
  },
];

const CERTS = [
  { icon: "🎓", title: "Java Full Stack Development", issuer: "Fusion Software Institute, Pune" },
  { icon: "☕", title: "Java Certification", issuer: "OneRoadmap" },
  { icon: "🔬", title: "ICICRTC Conference Participant", issuer: "International Conference · April 2023" },
  { icon: "🌐", title: "Google Developer Student Club", issuer: "CDGI, Indore" },
];

const ProjectCard = ({ project, direction }) => (
  <motion.div
    key={project.id}
    custom={direction}
    initial={{ opacity: 0, x: direction * 60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: direction * -60 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="grid md:grid-cols-5 gap-0 rounded-2xl border border-white/8 overflow-hidden bg-white/[0.02]"
  >
    {/* Visual Panel */}
    <div className={`md:col-span-2 bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center p-12 gap-4`}>
      <span className="text-7xl">{project.emoji}</span>
      <div className="text-center">
        <div className="text-white font-bold text-lg">{project.title}</div>
        <div className="text-white/50 text-xs font-mono mt-1">{project.subtitle}</div>
      </div>
      <div className="flex gap-3 mt-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-mono hover:bg-white/20 transition-all"
        >
          <FiGithub size={13} /> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-white text-xs font-mono hover:bg-white/20 transition-all"
          >
            <FiExternalLink size={13} /> Live
          </a>
        )}
      </div>
    </div>

    {/* Content Panel */}
    <div className="md:col-span-3 p-8 flex flex-col justify-center">
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-mono">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed mb-6">{project.description}</p>
      <div>
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">Key Highlights</div>
        <ul className="flex flex-col gap-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 items-start text-neutral-400 text-sm">
              <span className="text-cyan-400 flex-shrink-0 mt-0.5">▸</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

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
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">What I've Built</span>
        </div>
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tight mb-1"
            >
              Projects
            </motion.h2>
            <p className="text-neutral-500 font-mono text-sm">
              Full-stack applications built with production-grade architecture
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <span className="text-neutral-500 text-sm font-mono">
              {idx + 1} / {PROJECTS.length}
            </span>
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-neutral-400 hover:border-violet-500/40 hover:text-violet-300 transition-all"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-neutral-400 hover:border-violet-500/40 hover:text-violet-300 transition-all"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slideshow */}
        <div className="relative overflow-hidden mb-4">
          <AnimatePresence mode="wait" custom={direction}>
            <ProjectCard key={PROJECTS[idx].id} project={PROJECTS[idx]} direction={direction} />
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-20">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > idx ? 1 : -1); setIdx(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === idx ? "bg-violet-500 w-6" : "bg-white/20"}`}
            />
          ))}
        </div>

        {/* Certifications */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px bg-amber-400" />
          <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">Credentials</span>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-black tracking-tight mb-8"
        >
          Certifications & Activities
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex gap-3 items-start p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-xl flex-shrink-0">
                {cert.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-200 leading-tight mb-0.5">{cert.title}</h4>
                <p className="text-xs text-neutral-500 font-mono">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
