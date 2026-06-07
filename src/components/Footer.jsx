import { motion } from "framer-motion";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    icon: <FiMail />,
    label: "Email",
    href: "mailto:mohit2002pc@gmail.com",
    tone: "hover:border-cyan-200/60 hover:bg-cyan-300/10 hover:text-cyan-100",
  },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohit-singh-chouhan-3b2325223",
    tone: "hover:border-violet-200/60 hover:bg-violet-300/10 hover:text-violet-100",
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    href: "https://github.com/justmemohit052002",
    tone: "hover:border-white/40 hover:bg-white/[0.07] hover:text-white",
  },
  {
    icon: <SiLeetcode />,
    label: "LeetCode",
    href: "https://leetcode.com/u/mohit2002pc/",
    tone: "hover:border-amber-200/60 hover:bg-amber-300/10 hover:text-amber-100",
  },
  {
    icon: <SiHackerrank />,
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/mohit2002pc",
    tone: "hover:border-emerald-200/60 hover:bg-emerald-300/10 hover:text-emerald-100",
  },
];

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => (
  <footer className="relative z-10 overflow-hidden border-t border-white/10 px-4 py-8 sm:px-6">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:54px_54px] opacity-20" />
    <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-pink-400/15 blur-3xl" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-6xl rounded-[1.2rem] border border-white/10 bg-neutral-950/65 p-5 shadow-2xl shadow-black/25 backdrop-blur-xl"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr_1fr] lg:items-center">
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left text-2xl font-black leading-tight tracking-tight"
            style={{
              background: "linear-gradient(135deg,#67e8f9,#f9a8d4,#86efac)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mohit Singh Chouhan
          </button>
          <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-cyan-100">
              <FiMapPin size={12} /> Pune, Maharashtra
            </span>
            <a
              href="tel:+917725812910"
              className="inline-flex items-center gap-1.5 rounded-full border border-pink-300/20 bg-pink-300/10 px-3 py-1 text-pink-100 transition-all hover:border-pink-200/60"
            >
              <FiPhone size={12} /> +91-7725812910
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2 lg:justify-center" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/10 hover:text-cyan-100"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {socials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              aria-label={link.label}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-300 transition-all hover:-translate-y-0.5 ${link.tone}`}
            >
              {link.icon}
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-100 transition-all hover:-translate-y-0.5 hover:border-emerald-200/60 hover:bg-emerald-300/15"
          >
            <FiArrowUp size={17} />
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs font-mono text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <span>Java Full Stack Developer</span>
        <span>© {new Date().getFullYear()} MSC · Built with React.js & Framer Motion</span>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
