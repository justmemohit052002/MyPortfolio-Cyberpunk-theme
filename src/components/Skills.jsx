
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Backend Development",
    color: "cyan",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JDBC",
      "MySQL",
      "PostgreSQL",
    ],
  },
  {
    title: "Frontend Development",
    color: "pink",
    skills: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Programming Languages",
    color: "violet",
    skills: [
      "Java",
      "C++",
      "JavaScript",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
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
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-cyan-100 text-lg mt-6 max-w-3xl"
        >
          Technologies I use to build scalable, secure and modern applications.
        </motion.p>

        {/* Skills */}
        <div className="mt-16 space-y-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      px-5 py-3
                      border border-cyan-500/40
                      rounded-xl
                      bg-black/40
                      text-cyan-300
                      font-semibold
                      hover:border-cyan-400
                      hover:text-white
                      hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]
                      hover:-translate-y-1
                      transition-all
                      duration-300
                      cursor-default
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

