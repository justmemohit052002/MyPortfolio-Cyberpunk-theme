import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const SKILL_SECTIONS = [
  {
    cat: "Backend Development",
    items: [
      { name: "Java", pct: 90 },
      { name: "Spring Boot", pct: 88 },
      { name: "Spring Security", pct: 85 },
      { name: "Hibernate / JPA", pct: 85 },
      { name: "REST APIs", pct: 90 },
      { name: "JWT Authentication", pct: 85 },
    ],
  },
  {
    cat: "Frontend Development",
    items: [
      { name: "React.js", pct: 85 },
      { name: "JavaScript", pct: 82 },
      { name: "HTML5", pct: 90 },
      { name: "CSS3", pct: 88 },
      { name: "Tailwind CSS", pct: 85 },
      { name: "React Native", pct: 75 },
    ],
  },
  {
    cat: "Database & Tools",
    items: [
      { name: "PostgreSQL", pct: 85 },
      { name: "MySQL", pct: 85 },
      { name: "JDBC", pct: 82 },
      { name: "Git / GitHub", pct: 90 },
      { name: "Maven", pct: 85 },
      { name: "Postman", pct: 88 },
    ],
  },
  {
    cat: "Testing & Documentation",
    items: [
      { name: "JUnit", pct: 82 },
      { name: "Mockito", pct: 78 },
      { name: "Swagger", pct: 85 },
    ],
  },
  {
    cat: "Core Computer Science",
    items: [
      { name: "OOP", pct: 95 },
      { name: "DSA", pct: 85 },
      { name: "Java Streams", pct: 85 },
      { name: "Multithreading", pct: 80 },
      { name: "DBMS", pct: 85 },
      { name: "Operating Systems", pct: 80 },
    ],
  },
];

const SkillBar = ({ name, pct, visible }) => (
  <div className="flex items-center gap-4">
    <span className="text-white text-sm font-semibold min-w-[150px]">
      {name}
    </span>

    <div className="flex-1 h-2 rounded-full bg-gray-800 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background:
            "linear-gradient(90deg,#06b6d4,#22d3ee,#7c3aed)",
        }}
        initial={{ width: 0 }}
        animate={{ width: visible ? `${pct}%` : 0 }}
        transition={{ duration: 1 }}
      />
    </div>

    <span className="text-cyan-300 text-sm font-bold min-w-[45px]">
      {pct}%
    </span>
  </div>
);

const SkillCard = ({ section, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative rounded-2xl p-7 border border-cyan-500/20 bg-black/40 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">
            {section.icon}
          </span>

          <h3 className="font-bold text-white text-xl">
            {section.cat}
          </h3>
        </div>

        {/* Skills */}
        <div className="flex flex-col gap-4">
          {section.items.map((item) => (
            <SkillBar
              key={item.name}
              name={item.name}
              pct={item.pct}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4"
          >
            Technical Arsenal
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Skills & Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-cyan-100 text-lg mt-6 max-w-3xl leading-relaxed"
          >
            Specialized in Java Full Stack Development with expertise in
            Spring Boot, React.js, Secure APIs, Databases and
            modern software engineering practices.
          </motion.p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILL_SECTIONS.map((section, i) => (
            <SkillCard
              key={section.cat}
              section={section}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

