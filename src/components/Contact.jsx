import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

const CONTACT_INFO = [
  { icon: <FiMail />, label: "Email", value: "mohit2002pc@gmail.com", href: "mailto:mohit2002pc@gmail.com" },
  { icon: <FiPhone />, label: "Phone", value: "+91-7725812910", href: "tel:+917725812910" },
  { icon: <FiMapPin />, label: "Location", value: "Pune, Maharashtra, India", href: null },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, wire to your backend / EmailJS / Formspree
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputCls = (field) =>
    `w-full bg-white/[0.04] border rounded-xl px-4 py-3 text-neutral-200 text-sm placeholder-neutral-600 outline-none transition-all duration-200 ${
      focus === field ? "border-violet-500/60 shadow-[0_0_0_3px_rgba(124,58,237,.12)]" : "border-white/8 hover:border-white/15"
    }`;

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "linear-gradient(135deg,rgba(124,58,237,.03),rgba(6,182,212,.03))" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-cyan-400" />
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">Let's Connect</span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black tracking-tight mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              I'm open to full-time opportunities, freelance projects, or just an interesting conversation about technology.
              Drop me a message and I'll get back to you promptly.
            </p>

            {CONTACT_INFO.map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-neutral-300 text-sm hover:text-cyan-300 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-neutral-300 text-sm">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="mt-4 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <div className="text-emerald-400 text-sm font-semibold">Available for opportunities</div>
                <div className="text-neutral-500 text-xs font-mono">Full-time - Freelance - Open Source</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center"
              >
                <FiCheckCircle size={48} className="text-emerald-400" />
                <div className="text-lg font-bold text-neutral-200">Message Sent!</div>
                <div className="text-neutral-500 text-sm font-mono">I'll get back to you soon.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Your Name</label>
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
                    <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Email</label>
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
                  <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Subject</label>
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
                  <label className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocus("message")}
                    onBlur={() => setFocus("")}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className={`${inputCls("message")} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="self-start flex items-center gap-2 px-7 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,58,237,.4)]"
                >
                  Send Message <FiSend size={15} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
