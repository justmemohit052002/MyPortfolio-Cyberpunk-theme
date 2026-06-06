import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const TECHS = [
  { name: "Java", color: "#e85d04" },
  { name: "Spring Boot", color: "#6db33f" },
  { name: "React.js", color: "#61dafb" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Spring Security", color: "#6db33f" },
  { name: "Hibernate JPA", color: "#59666c" },
  { name: "REST APIs", color: "#7c3aed" },
  { name: "JWT Auth", color: "#f59e0b" },
  { name: "Next.js", color: "#ffffff" },
  { name: "FastAPI", color: "#009688" },
  { name: "Git / GitHub", color: "#f05032" },
  { name: "Maven", color: "#c71a36" },
  { name: "Postman", color: "#ff6c37" },
  { name: "AWS EC2", color: "#ff9900" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "JUnit / Mockito", color: "#25a162" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "MySQL", color: "#4479a1" },
];

const CHIPS = [
  "Problem Solver",
  "Agile Mindset",
  "Backend Specialist",
  "API Designer",
  "GDSC Member",
  "Conference Participant",
  "Performance Optimization",
  "Security Expert",
];

const LINKS = [
  { icon: <FiMail />, label: "mohit2002pc@gmail.com", href: "mailto:mohit2002pc@gmail.com" },
  { icon: <FiLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: <FiGithub />, label: "GitHub", href: "https://github.com" },
  { icon: <SiLeetcode />, label: "LeetCode", href: "https://leetcode.com" },
  { icon: <SiHackerrank />, label: "HackerRank", href: "https://hackerrank.com" },
];

const doubled = [...TECHS, ...TECHS];

const About = () => (
  <section id="about" className="py-24 px-6" style={{ background: "linear-gradient(135deg, rgba(124,58,237,.03), rgba(6,182,212,.03))" }}>
    <div className="max-w-6xl mx-auto">
      {/* Tech Ticker */}
      <div className="relative overflow-hidden mb-20" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div
          className="flex gap-4"
          style={{
            width: "max-content",
            animation: "ticker 25s linear infinite",
          }}
        >
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 bg-white/[0.03] whitespace-nowrap text-sm font-mono text-neutral-400"
            >
              <span className="w-2 h-2 rounded-full" style={{ background: tech.color }} />
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Avatar Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative">
            <div
              className="w-64 h-64 rounded-3xl flex items-center justify-center text-7xl"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              <span aria-hidden="true">MSC</span>
            </div>
            {/* Glowing ring */}
            <div className="absolute inset-[-10px] rounded-[36px] border border-violet-500/20" />
            <div className="absolute inset-[-20px] rounded-[44px] border border-violet-500/10" />
            {/* Location badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-1.5 whitespace-nowrap">
              <FiMapPin size={11} className="text-cyan-400" />
              <span className="text-xs font-mono text-neutral-400">Pune, Maharashtra</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/8 bg-white/[0.03] text-neutral-400 text-xs font-mono hover:border-violet-500/40 hover:text-violet-300 transition-all duration-200"
              >
                <span className="text-[13px]">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-cyan-400" />
            <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Who I Am</span>
          </div>
          <h2 className="text-4xl font-black tracking-tight mb-6 leading-tight">
            Crafting robust backends &amp;
            <span className="block" style={{ background: "linear-gradient(135deg,#a78bfa,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              fluid frontends
            </span>
          </h2>

          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Java Full Stack Developer with hands-on experience building scalable enterprise web applications using <strong className="text-neutral-200">Java, Spring Boot, Spring Security, Hibernate (JPA), React.js</strong>, and PostgreSQL.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            Strong foundation in OOP, Data Structures &amp; Algorithms, Collections Framework, Java Streams, Multithreading, and DBMS. Experienced in designing secure RESTful APIs with JWT Authentication and role-based access control.
          </p>
          <p className="text-neutral-500 text-xs font-mono mb-6">
            Phone: +91-7725812910 &nbsp;-&nbsp; Email: mohit2002pc@gmail.com
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-neutral-400 text-xs font-mono hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-200 cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    <style>{`
      @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
    `}</style>
  </section>
);

export default About;
