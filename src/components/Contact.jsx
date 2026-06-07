import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const EMAIL = "mohit2002pc@gmail.com";

const CONTACT_INFO = [
  {
    icon: <FiMail />,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    tone: "cyan",
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+91-7725812910",
    href: "tel:+917725812910",
    tone: "pink",
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: "Pune, Maharashtra, India",
    tone: "emerald",
  },
];

const SOCIAL_LINKS = [
  { icon: <FiGithub />, label: "GitHub", href: "https://github.com" },
  { icon: <FiLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
];

const toneCls = {
  cyan: "border-cyan-300/25 bg-cyan-400/10 text-cyan-200 hover:border-cyan-200/60 hover:bg-cyan-400/15",
  pink: "border-pink-300/25 bg-pink-400/10 text-pink-200 hover:border-pink-200/60 hover:bg-pink-400/15",
  emerald:
    "border-emerald-300/25 bg-emerald-400/10 text-emerald-200 hover:border-emerald-200/60 hover:bg-emerald-400/15",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState("");
  const [copied, setCopied] = useState(false);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire to your backend / EmailJS / Formspree.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputCls = (field) =>
    `w-full rounded-xl border bg-black/35 px-4 py-2.5 text-sm text-white outline-none transition-all duration-200 placeholder:text-neutral-600 ${
      focus === field
        ? "border-cyan-300/70 shadow-[0_0_0_4px_rgba(34,211,238,.12),0_0_32px_rgba(236,72,153,.12)]"
        : "border-white/10 hover:border-white/25"
    }`;

  return (
    <section
      id="contact"
      onPointerMove={handlePointerMove}
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 md:flex md:items-center md:py-20"
      style={{
        background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(34,211,238,.18), transparent 28%),
          linear-gradient(135deg, rgba(236,72,153,.13), rgba(34,211,238,.11) 45%, rgba(16,185,129,.1))`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-30" />
      <div className="absolute left-0 top-16 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-48 w-48 rounded-full bg-pink-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-cyan-300" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-200">Let's Connect</span>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Build something
              <span className="block bg-gradient-to-r from-cyan-200 via-pink-200 to-emerald-200 bg-clip-text text-transparent">
                memorable together.
              </span>
            </motion.h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-200 md:text-lg">
              I'm open to full-time roles, freelance builds, and sharp technical conversations around Java, Spring Boot,
              React, and clean product engineering.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {CONTACT_INFO.map((item) => {
              const content = (
                <>
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border ${toneCls[item.tone]}`}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-xs font-mono uppercase tracking-wider text-neutral-500">{item.label}</div>
                    <div className="break-words text-sm font-semibold text-neutral-100">{item.value}</div>
                  </div>
                  {item.href && (
                    <FiArrowUpRight className="mt-1 flex-shrink-0 text-neutral-500 transition-colors group-hover:text-cyan-200" />
                  )}
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex min-h-24 items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-2xl shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.06]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="group flex min-h-24 items-start gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-2xl shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200/35 hover:bg-white/[0.06]"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2.5 text-sm font-bold text-cyan-100 transition-all hover:-translate-y-0.5 hover:border-cyan-200/60 hover:bg-cyan-300/15"
            >
              {copied ? <FiCheckCircle size={16} /> : <FiCopy size={16} />}
              {copied ? "Email copied" : "Copy email"}
            </button>

            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-neutral-200 transition-all hover:-translate-y-0.5 hover:border-pink-200/50 hover:bg-pink-300/10 hover:text-pink-100"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-emerald-300/25 bg-emerald-400/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,.9)]" />
            <div>
              <div className="text-sm font-bold text-emerald-100">Available for opportunities</div>
              <div className="text-xs font-mono text-emerald-200/70">Full-time - Freelance - Open Source</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-cyan-300/35 via-pink-300/25 to-emerald-300/30 blur-lg" />
          <div className="relative overflow-hidden rounded-[1.2rem] border border-white/15 bg-neutral-950/80 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-pink-200">Message Me</div>
                <h3 className="mt-1 text-2xl font-black text-white">Start a conversation</h3>
              </div>
              <div className="hidden rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-mono text-emerald-100 sm:block">
                Replies soon
              </div>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[420px] flex-col items-center justify-center gap-4 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-300/10">
                  <FiCheckCircle size={36} className="text-emerald-300" />
                </div>
                <div className="text-2xl font-black text-white">Message Sent!</div>
                <div className="text-sm font-mono text-neutral-400">I'll get back to you soon.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocus("name")}
                      onBlur={() => setFocus("")}
                      placeholder="John Doe"
                      required
                      className={inputCls("name")}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocus("email")}
                      onBlur={() => setFocus("")}
                      placeholder="john@example.com"
                      required
                      className={inputCls("email")}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocus("subject")}
                    onBlur={() => setFocus("")}
                    placeholder="Project opportunity / Collaboration"
                    className={inputCls("subject")}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-neutral-500">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocus("message")}
                    onBlur={() => setFocus("")}
                    placeholder="Tell me about your project..."
                    required
                    rows={4}
                    className={`${inputCls("message")} min-h-32 resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 via-pink-300 to-emerald-300 px-7 py-3 text-sm font-black tracking-wide text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_38px_rgba(34,211,238,.25)] sm:w-auto"
                >
                  Send Message <FiSend size={16} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
