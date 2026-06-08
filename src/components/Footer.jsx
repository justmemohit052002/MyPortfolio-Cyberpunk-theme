import { motion } from "framer-motion";
import { FiArrowUp, FiBookOpen, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
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
  <footer
    id="footer"
    className="relative z-10 overflow-hidden border-t border-white/10 px-4 py-10 sm:px-6"
    style={{
      background: "radial-gradient(circle at 45% 45%, rgba(236,72,153,.16), transparent 30%), linear-gradient(135deg, rgba(34,211,238,.1), rgba(124,58,237,.11) 48%, rgba(16,185,129,.09))",
    }}
  >
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:54px_54px] opacity-20" />
    <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
    <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-pink-400/15 blur-3xl" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.2rem] border border-white/10 bg-neutral-950/65 p-6 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr] lg:items-start">
        <div className="space-y-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left text-3xl font-black leading-tight tracking-tight text-white"
            style={{
              background: "linear-gradient(135deg,#67e8f9,#f9a8d4,#86efac)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mohit Singh Chouhan
          </button>
          <p className="max-w-md text-sm leading-6 text-neutral-400">
            Java full stack developer building responsive applications with a polished UI and strong backend fundamentals. Let&apos;s connect and turn ideas into impact.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
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

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Quick links
          </h2>
          <div className="flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-300 transition-all hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/10 hover:text-cyan-100"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Connect with me
          </h2>
          <p className="mb-4 max-w-sm text-sm leading-6 text-neutral-400">
            Reach out by email or follow me on GitHub, LinkedIn, LeetCode, and HackerRank.
          </p>
          <div className="flex flex-wrap items-center gap-2">
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
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/25 bg-emerald-300/10 text-emerald-100 transition-all hover:-translate-y-0.5 hover:border-emerald-200/60 hover:bg-emerald-300/15"
            >
              <FiArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs font-mono text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <span>Ready to collaborate on your next web project?</span>
        <span>© {new Date().getFullYear()} MSC · Built with React & Framer Motion</span>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
