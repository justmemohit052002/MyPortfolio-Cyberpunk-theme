import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";

import {
  SiSpringboot,
  SiReact,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiHtml5,
  SiHibernate,
} from "react-icons/si";

const TECHS = [
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "React JS", icon: <SiReact />, color: "#61DAFB" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
  { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
];

const CHIPS = [
  "Java",
  "Spring Boot",
  "React",
  "Spring Security",
  "PostgreSQL",
  "REST APIs",
  "DSA",
  "JWT Authentication",
];

const LINKS = [
  {
    icon: <FiMail />,
    label: "mohit2002pc@gmail.com",
    href: "mailto:mohit2002pc@gmail.com",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohit-singh-chouhan-3b2325223",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    href: "https://github.com/justmemohit052002",
  },
  {
    icon: <SiLeetcode />,
    label: "LeetCode",
    href: "https://leetcode.com/u/mohit2002pc/",
  },
  {
    icon: <SiHackerrank />,
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/mohit2002pc",
  },
];

const doubled = [...TECHS, ...TECHS];



const About = () => (
  <section id="about" className="py-28 px-6" style={{ background: "linear-gradient(135deg, rgba(124,58,237,.08), rgba(6,182,212,.07), rgba(15,23,42,.25))" }}>
    <div className="max-w-6xl mx-auto">
    
{/* Tech Slider */}
<div
  className="relative overflow-hidden mb-20 md:mb-28 py-3"
  style={{
    maskImage:
      "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
  }}
>
  <div
    className="flex gap-8"
    style={{
      width: "max-content",
      animation: "ticker 35s linear infinite",
    }}
  >
    {doubled.map((tech, i) => (
      <div
        key={i}
        className="
          flex items-center gap-4
          px-8 py-5 md:px-10 md:py-6
          rounded-2xl
          border border-cyan-400/40
          bg-slate-950/85
          backdrop-blur-md
          whitespace-nowrap
          shadow-lg shadow-cyan-950/30
          hover:border-cyan-400
          hover:shadow-cyan-500/30
          hover:shadow-lg
          transition-all duration-300
        "
      >
        <span
  className="text-4xl md:text-5xl"
  style={{
    color: tech.color,
    filter: `drop-shadow(0 0 14px ${tech.color})`,
  }}
>
          {tech.icon}
        </span>

        <span className="text-white text-xl md:text-2xl font-black">
          {tech.name}
        </span>
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
          className="flex flex-col items-center gap-9"
        >
          <div className="relative">
            <div
              className="w-72 h-72 rounded-3xl flex items-center justify-center text-8xl shadow-2xl shadow-cyan-500/20"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              <span
  aria-hidden="true"
  className="font-black text-white tracking-wider"
  style={{
    textShadow: "0 0 20px rgba(34,211,238,0.8)",
  }}
>
  MSC
</span>
            </div>
            {/* Glowing ring */}
            <div className="absolute inset-[-10px] rounded-[36px] border border-violet-500/20" />
            <div className="absolute inset-[-20px] rounded-[44px] border border-violet-500/10" />
            {/* Location badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-slate-950/95 border border-cyan-400/30 rounded-full px-5 py-2 flex items-center gap-2 whitespace-nowrap shadow-lg shadow-cyan-950/40">
              <FiMapPin size={13} className="text-cyan-300" />
              <span className="text-sm font-mono text-cyan-100">Pune, Maharashtra</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 justify-center mt-5">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.05] text-neutral-200 text-sm font-mono hover:border-violet-400/60 hover:text-violet-200 hover:bg-violet-500/10 transition-all duration-200"
              >
                <span className="text-base text-cyan-300">{link.icon}</span>
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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-cyan-300" />
            <span className="text-cyan-300 text-sm font-mono uppercase tracking-widest">Who I Am</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight text-white">
            Crafting robust backends &amp;
            <span className="block" style={{ background: "linear-gradient(135deg,#a78bfa,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              fluid frontends
            </span>
          </h2>

          <p className="text-neutral-200 text-lg leading-8 mb-5">
            Java Full Stack Developer with hands-on experience building scalable enterprise web applications using <strong className="text-cyan-200 font-extrabold">Java, Spring Boot, Spring Security, Hibernate (JPA), React.js</strong>, and PostgreSQL.
          </p>
          <p className="text-neutral-300 text-lg leading-8 mb-6">
            Strong foundation in OOP, Data Structures &amp; Algorithms, Collections Framework, Java Streams, Multithreading, and DBMS. Experienced in designing secure RESTful APIs with JWT Authentication and role-based access control.
          </p>
          {/* <p className="text-cyan-100 text-sm font-mono mb-8 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-3">
            Phone: +91-7725812910 &nbsp;-&nbsp; Email: mohit2002pc@gmail.com
          </p> */}

          {/* Chips */}
          <div className="flex flex-wrap gap-3">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="px-5 py-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-100 text-sm md:text-base font-bold shadow-sm shadow-cyan-950/30 hover:border-cyan-300/70 hover:text-white hover:bg-cyan-400/15 transition-all duration-200 cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    
<style>{`
@keyframes ticker {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
`}</style>


  </section>
);

export default About;
