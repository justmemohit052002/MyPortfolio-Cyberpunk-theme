import { useEffect, useState, useRef } from "react";

const loadingSteps = [
  { label: "Initializing Portfolio...", icon: "⬡" },
  { label: "Loading Projects...", icon: "⬡" },
  { label: "Connecting GitHub...", icon: "⬡" },
  { label: "Loading Skills...", icon: "⬡" },
  { label: "Launching Experience...", icon: "⬡" },
  { label: "Ready.", icon: "⬡" },
];

/* ── Inline SVG icons (no dependency) ── */
const IconBolt = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconReact = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
  </svg>
);

const IconCode = ({ color }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconGithub = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconJava = ({ color }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 20S6 18.5 6 16c0-4 4-5 4-9" />
    <path d="M11.5 4C12 8 8 9 8 13c0 3 2.5 4 2.5 4" />
    <path d="M7 17h10" />
    <path d="M17 10s-1.5 1-4 1-4-1-4-1" />
  </svg>
);

const IconCheck = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none"
    stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ── Particle component ── */
const Particle = ({ style }) => (
  <div style={{
    position: "absolute",
    width: "2px",
    height: "2px",
    borderRadius: "50%",
    background: "rgba(99,102,241,0.6)",
    ...style,
  }} />
);

/* ── Main Preloader ── */
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [exitAnim, setExitAnim] = useState(false);
  const intervalRef = useRef(null);

  /* particles config (generated once) */
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`,
    }))
  ).current;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        const currentStep = Math.min(Math.floor(next / 20), loadingSteps.length - 1);
        setStep(currentStep);

        if (next >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return next;
      });
    }, 28);

    return () => clearInterval(intervalRef.current);
  }, []);

  /* trigger exit when onComplete is provided */
  useEffect(() => {
    if (done && onComplete) {
      setTimeout(() => {
        setExitAnim(true);
        setTimeout(onComplete, 600);
      }, 800);
    }
  }, [done, onComplete]);

  return (
    <>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes pulse {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50%      { transform: scale(1.1); opacity: 1; }
        }
        @keyframes glow {
          0%,100% { box-shadow: 0 0 24px rgba(99,102,241,0.3); }
          50%      { box-shadow: 0 0 48px rgba(99,102,241,0.7), 0 0 80px rgba(236,72,153,0.3); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%,100% { opacity: 0.65; }
          50%      { opacity: 1; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); opacity: 0.5; }
          50%      { transform: translateY(-12px); opacity: 1; }
        }
        @keyframes bgPulse {
          0%,100% { transform: scale(1); opacity: 0.15; }
          50%      { transform: scale(1.2); opacity: 0.28; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.6); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        @keyframes exitFade {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(1.04); }
        }
        @keyframes checkDraw {
          from { stroke-dashoffset: 60; }
          to   { stroke-dashoffset: 0; }
        }
        .preloader-root {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100vh;
          min-height: 520px;
          background: #050508;
          overflow: hidden;
          font-family: 'Courier New', monospace;
        }
        .preloader-root.exit {
          animation: exitFade 0.6s ease forwards;
        }
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(99,102,241,0.2);
          animation: spin linear infinite;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .orbit-icon {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 0 6px currentColor);
        }
        .center-icon {
          animation: pulse 2.2s ease-in-out infinite, glow 2.2s ease-in-out infinite;
        }
        .step-label {
          animation: fadeSlide 0.35s ease forwards;
        }
        .pct-label {
          animation: shimmer 1.6s ease-in-out infinite;
        }
        .progress-fill {
          transition: width 28ms linear;
        }
        .particle {
          animation: float ease-in-out infinite;
        }
        .done-check svg polyline {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: checkDraw 0.5s ease forwards 0.2s;
        }
        .done-wrapper {
          animation: scaleIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
      `}</style>

      <div className={`preloader-root${exitAnim ? " exit" : ""}`}>

        {/* Radial bg glow */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.2), transparent 65%)"
        }} />

        {/* Animated blob */}
        <div style={{
          position: "absolute", width: 380, height: 380, borderRadius: "50%",
          background: "rgba(99,102,241,0.08)", pointerEvents: "none",
          animation: "bgPulse 4s ease-in-out infinite"
        }} />

        {/* Floating particles */}
        {particles.map((p) => (
          <Particle key={p.id} style={{
            top: p.top, left: p.left,
            animation: `float ${p.duration} ease-in-out ${p.delay} infinite`
          }} />
        ))}

        {/* Outer orbit ring — 192px */}
        <div className="orbit-ring" style={{ width: 192, height: 192, animationDuration: "10s" }}>
          <div className="orbit-icon" style={{ top: -14, left: "50%", transform: "translateX(-50%)", color: "#f472b6" }}>
            <IconBolt color="#f472b6" />
          </div>
          <div className="orbit-icon" style={{ right: -14, top: "50%", transform: "translateY(-50%)", color: "#22d3ee" }}>
            <IconReact color="#22d3ee" />
          </div>
          <div className="orbit-icon" style={{ bottom: -14, left: "50%", transform: "translateX(-50%)", color: "#facc15" }}>
            <IconJava color="#facc15" />
          </div>
          <div className="orbit-icon" style={{ left: -14, top: "50%", transform: "translateY(-50%)", color: "#4ade80" }}>
            <IconGithub color="#4ade80" />
          </div>
        </div>

        {/* Inner orbit ring — 120px (reverse) */}
        <div className="orbit-ring" style={{
          width: 120, height: 120,
          borderColor: "rgba(236,72,153,0.15)",
          animation: "spinReverse 7s linear infinite"
        }}>
          <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", width: 8, height: 8, borderRadius: "50%", background: "#ec4899", boxShadow: "0 0 8px #ec4899" }} />
          <div style={{ position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)", width: 6, height: 6, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 8px #6366f1" }} />
        </div>

        {/* Center content */}
        <div style={{ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {!done ? (
            <>
              {/* Icon box */}
              <div className="center-icon" style={{
                width: 84, height: 84, borderRadius: 20,
                border: "1px solid rgba(99,102,241,0.45)",
                background: "rgba(99,102,241,0.1)",
                backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <IconCode color="#818cf8" />
              </div>

              {/* Step label */}
              <p key={step} className="step-label" style={{
                marginTop: 24, fontSize: 11, letterSpacing: "0.28em",
                textTransform: "uppercase", color: "rgba(199,210,254,0.72)", margin: "24px 0 0"
              }}>
                {loadingSteps[step].label}
              </p>

              {/* Step dots */}
              <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
                {loadingSteps.map((_, i) => (
                  <div key={i} style={{
                    width: i === step ? 18 : 6, height: 6, borderRadius: 999,
                    background: i <= step
                      ? "linear-gradient(90deg, #6366f1, #ec4899)"
                      : "rgba(255,255,255,0.12)",
                    transition: "all 0.3s ease",
                  }} />
                ))}
              </div>

              {/* Progress bar */}
              <div style={{
                marginTop: 20, width: 232, height: 6, borderRadius: 999,
                background: "rgba(255,255,255,0.1)", overflow: "hidden"
              }}>
                <div className="progress-fill" style={{
                  height: "100%", borderRadius: 999,
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #6366f1, #ec4899, #22d3ee)",
                }} />
              </div>

              {/* Percentage */}
              <p className="pct-label" style={{
                marginTop: 12, fontSize: 14, color: "#a5b4fc", margin: "12px 0 0"
              }}>
                {progress}%
              </p>
            </>
          ) : (
            <div className="done-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div className="done-check" style={{
                width: 84, height: 84, borderRadius: "50%",
                border: "2px solid #4ade80",
                background: "rgba(74,222,128,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 32px rgba(74,222,128,0.3)"
              }}>
                <IconCheck />
              </div>
              <p style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#a5b4fc" }}>
                Portfolio Ready
              </p>
              {!onComplete && (
                <button
                  onClick={() => {
                    setDone(false);
                    setProgress(0);
                    setStep(0);
                    setExitAnim(false);
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setProgress((prev) => {
                        const next = prev + 1;
                        setStep(Math.min(Math.floor(next / 20), loadingSteps.length - 1));
                        if (next >= 100) {
                          clearInterval(intervalRef.current);
                          setTimeout(() => setDone(true), 400);
                          return 100;
                        }
                        return next;
                      });
                    }, 28);
                  }}
                  style={{
                    padding: "8px 22px", background: "rgba(99,102,241,0.14)",
                    border: "1px solid rgba(99,102,241,0.4)", borderRadius: 8,
                    color: "#a5b4fc", fontSize: 12, cursor: "pointer",
                    letterSpacing: "0.1em", fontFamily: "inherit"
                  }}
                >
                  Replay ↺
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Preloader;