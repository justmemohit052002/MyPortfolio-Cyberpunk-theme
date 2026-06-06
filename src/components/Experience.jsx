import { motion } from "framer-motion";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const EXPERIENCES = [
  {
    period: "Nov 2025 – April 2026",
    role: "Java Full Stack Developer Intern",
    company: "Greateway Software Pvt. Ltd.",
    location: "Pune, Maharashtra",
    type: "IT Services Company",
    color: "#7c3aed",
    bullets: [
      "Developed and maintained enterprise web applications using Java, Spring Boot, React.js, and PostgreSQL, contributing to feature development and system enhancements.",
      "Designed and implemented secure RESTful APIs with Spring Security and JWT authentication, ensuring role-based access control (USER, ADMIN, LOAN OFFICER) and application security.",
      "Worked with Spring Data JPA, Hibernate, and PostgreSQL to manage data persistence, entity relationships, and complex database operations.",
      "Implemented loan processing, document verification, and payment workflows — reducing manual processing effort and improving operational efficiency significantly.",
      "Collaborated in an Agile development environment using Git/GitHub, Maven, Postman, and debugging tools to deliver scalable and maintainable software solutions.",
    ],
    tech: ["Java", "Spring Boot", "React.js", "PostgreSQL", "JWT", "Spring Security", "Hibernate", "Maven"],
  },
];

const EDUCATION = [
  {
    period: "2019 – 2023",
    role: "B.E. / B.Tech",
    company: "Chameli Devi Group of Institutions",
    location: "Indore, Madhya Pradesh",
    bullets: [
      "Computer Science & Engineering",
      "Member – Google Developer Student Clubs (GDSC)",
      "Participant – ICICRTC International Conference, April 2023",
    ],
    tech: ["Java", "C++", "Data Structures", "DBMS", "Operating Systems"],
  },
];

const TimelineItem = ({ item, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
    viewport={{ once: true }}
    className="relative pl-12"
  >
    {/* Dot */}
    <div
      className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 z-10"
      style={{
        background: item.color || "#06b6d4",
        borderColor: "#0a0a0f",
        boxShadow: `0 0 0 4px ${(item.color || "#06b6d4")}33`,
      }}
    />

    <div className="group p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-violet-500/30 hover:translate-x-1 transition-all duration-300">
      {/* Period & Location */}
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
          <FiCalendar size={11} />
          {item.period}
        </span>
        <span className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
          <FiMapPin size={11} />
          {item.location}
        </span>
        {item.type && (
          <span className="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono">
            {item.type}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-neutral-100 mb-0.5">{item.role}</h3>
      <p className="text-violet-400 text-sm font-semibold mb-4">{item.company}</p>

      <ul className="flex flex-col gap-2 mb-4">
        {item.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start text-neutral-400 text-sm leading-relaxed">
            <span className="text-cyan-400 mt-0.5 flex-shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/15 text-violet-300 text-xs font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {!isLast && <div className="ml-1.5 w-px h-6 bg-gradient-to-b from-violet-600/30 to-transparent mt-2 mb-0" />}
  </motion.div>
);

const Experience = () => (
  <section
    id="experience"
    className="py-24 px-6"
    style={{ background: "linear-gradient(135deg, rgba(6,182,212,.02), rgba(124,58,237,.02))" }}
  >
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-px bg-cyan-400" />
        <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Work History</span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black tracking-tight mb-2"
      >
        Experience
      </motion.h2>
      <p className="text-neutral-500 font-mono text-sm mb-12">My professional journey</p>

      {/* Experience Timeline */}
      <div className="relative mb-12">
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-600 via-violet-600/30 to-transparent" />
        {EXPERIENCES.map((exp, i) => (
          <TimelineItem key={exp.role} item={exp} index={i} isLast={i === EXPERIENCES.length - 1} />
        ))}
      </div>

      {/* Education */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-px bg-amber-400" />
        <span className="text-amber-400 text-xs font-mono uppercase tracking-widest">Education</span>
      </div>
      <div className="relative">
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-amber-500/30 to-transparent" />
        {EDUCATION.map((edu, i) => (
          <TimelineItem key={edu.company} item={{ ...edu, color: "#f59e0b" }} index={i} isLast />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
