import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiShield,
} from "react-icons/fi";

const STATS = [
  { value: "2+", label: "Projects", tone: "cyan" },
  { value: "1+", label: "Years Coding", tone: "pink" },
  { value: "100+", label: "DSA Problems", tone: "emerald" },
  { value: "10+", label: "Technologies", tone: "violet" },
];

const STACK = [
  { icon: <FiCode />, label: "React.js", value: "Frontend" },
  { icon: <FiShield />, label: "Spring Boot", value: "Secure APIs" },
  { icon: <FiDatabase />, label: "PostgreSQL", value: "Data Layer" },
  { icon: <FiLayers />, label: "JWT + Hibernate", value: "Backend Core" },
];

const statTone = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-cyan-500/10",
  pink: "border-pink-300/30 bg-pink-300/10 text-pink-200 shadow-pink-500/10",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200 shadow-emerald-500/10",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-200 shadow-violet-500/10",
};

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const [spotlight, setSpotlight] = useState({ x: 28, y: 35 });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="hero"
      onPointerMove={handlePointerMove}
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-6 pt-20 sm:px-6 md:pt-20"
      style={{
        background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(34,211,238,.2), transparent 27%),
          linear-gradient(135deg, rgba(236,72,153,.12), rgba(10,10,15,.92) 36%, rgba(34,211,238,.12) 72%, rgba(16,185,129,.1))`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:58px_58px] opacity-25" />
      <div className="absolute left-4 top-28 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-pink-400/18 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-400/14 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[1fr_.92fr]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-3 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-cyan-100"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,.95)]" />
            Java Full Stack Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl"
          >
            Mohit
            <span className="block bg-gradient-to-r from-pink-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
              Singh
            </span>
            <span className="block text-cyan-300">Chouhan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-4 max-w-2xl text-base leading-7 text-neutral-200 sm:text-lg lg:text-sm lg:leading-6 xl:text-lg xl:leading-8"
          >
            Building scalable, secure, and high-performance web applications with Spring Boot, React.js, JWT
            Authentication, PostgreSQL, Hibernate, and clean engineering practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            className="mt-5 flex flex-wrap gap-3"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-pink-300 to-emerald-300 px-5 py-3 text-sm font-black text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(34,211,238,.24)]"
            >
              View Projects <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="group flex items-center gap-2 rounded-xl border border-pink-300/35 bg-pink-300/10 px-5 py-3 text-sm font-bold text-pink-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200/70 hover:bg-pink-300/15"
            >
              Contact Me <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-200 transition-all hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/10 hover:text-cyan-100"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.46 }}
            className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl border px-4 py-3 text-center shadow-2xl backdrop-blur transition-all duration-300 hover:-translate-y-1 ${statTone[stat.tone]}`}
              >
                <h3 className="text-2xl font-black sm:text-3xl">{stat.value}</h3>
                <p className="mt-1 text-xs font-mono uppercase tracking-wider text-neutral-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.24 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -inset-2 rounded-[1.6rem] bg-gradient-to-br from-cyan-300/35 via-pink-300/25 to-emerald-300/30 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.4rem] border border-white/15 bg-neutral-950/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl xl:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-pink-300" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-300" />
              </div>
              <span className="text-xs font-mono text-neutral-500">portfolio/api/status</span>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-200">Current Focus</div>
              <div className="mt-2 text-xl font-black text-white xl:text-2xl">Production-ready full stack apps</div>
              <p className="mt-2 text-sm leading-6 text-neutral-300">
                Secure APIs, polished React interfaces, reliable databases, and deployment-minded workflows.
              </p>
            </div>

            <div className="mt-3 grid gap-3">
              {STACK.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.52 + index * 0.08 }}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-all hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-white/[0.07]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-300/25 bg-pink-300/10 text-pink-100 transition-colors group-hover:text-cyan-100">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.label}</div>
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <button
          onClick={() => scrollTo("#about")}
          aria-label="Scroll to about section"
          className="absolute bottom-4 left-1/2 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 transition-all hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/15 md:flex lg:hidden"
        >
          <FiArrowDown size={22} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
