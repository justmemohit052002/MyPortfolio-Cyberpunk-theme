import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => (
  <footer className="border-t border-white/8 py-8 px-6 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-center sm:text-left">
        <div
          className="text-lg font-black mb-0.5"
          style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          Mohit Singh Chouhan
        </div>
        <div className="text-neutral-600 text-xs font-mono">
          Java Full Stack Developer · Pune, Maharashtra
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="mailto:mohit2002pc@gmail.com" className="p-2 rounded-lg border border-white/8 text-neutral-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
          <FiMail size={16} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/8 text-neutral-500 hover:text-violet-400 hover:border-violet-400/30 transition-all">
          <FiLinkedin size={16} />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/8 text-neutral-500 hover:text-white hover:border-white/20 transition-all">
          <FiGithub size={16} />
        </a>
        <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/8 text-neutral-500 hover:text-amber-400 hover:border-amber-400/30 transition-all">
          <SiLeetcode size={16} />
        </a>
      </div>

      <div className="text-neutral-600 text-xs font-mono text-center sm:text-right">
        © 2025 MSC · Built with React.js &amp; Framer Motion
      </div>
    </div>
  </footer>
);

export default Footer;
