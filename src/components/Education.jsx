import { motion } from "framer-motion";
import { FiCalendar, FiMapPin, FiBookOpen, FiAward } from "react-icons/fi";

const EDUCATION = {
  period: "2019 - 2023",
  degree: "B.E. / B.Tech",
  college: "Chameli Devi Group of Institutions",
  location: "Indore, Madhya Pradesh",
  branch: "Computer Science & Engineering",
  highlights: [
    "Member - Google Developer Student Clubs (GDSC)",
    "Participant - ICICRTC International Conference, April 2023",
  ],
  subjects: ["Java", "C++", "Data Structures", "DBMS", "Operating Systems"],
};

const Education = () => (
  <section
    id="education"
    className="py-20 md:py-24 px-6"
    style={{
      background:
        "linear-gradient(135deg, rgba(245,158,11,.07), rgba(124,58,237,.06), rgba(15,23,42,.2))",
    }}
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-px bg-amber-300" />
        <span className="text-amber-300 text-sm font-mono uppercase tracking-widest">Academic Background</span>
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

export default Education;
