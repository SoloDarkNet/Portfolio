import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/context";
import Solomon from "../../assets/solomon.png";

const highlights = [
  { icon: "⚡", label: "Full Stack", desc: "MERN end-to-end" },
  { icon: "📱", label: "PWA Ready", desc: "Offline capable apps" },
  { icon: "🔗", label: "REST APIs", desc: "JWT secured backends" },
];

const About = () => {
  const { darkMode } = useContext(AppContext);

  const styles = {
    wrapper: {
      minHeight: "100vh",
      padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2.5rem)",
      background: darkMode
        ? "radial-gradient(ellipse at 80% 20%, rgba(167,139,250,0.07) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(55,138,221,0.07) 0%, transparent 50%), #0a0f1a"
        : "radial-gradient(ellipse at 80% 20%, rgba(167,139,250,0.05) 0%, transparent 50%), #f4f7ff",
      position: "relative",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "1000px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    headerWrap: {
      textAlign: "center",
      marginBottom: "clamp(2rem, 5vw, 3.5rem)",
    },
    eyebrow: {
      display: "inline-block",
      fontSize: "clamp(10px, 2vw, 12px)",
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: darkMode ? "#c4b5fd" : "#7c3aed",
      background: darkMode ? "rgba(167,139,250,0.12)" : "rgba(167,139,250,0.1)",
      border: `1px solid ${darkMode ? "rgba(167,139,250,0.25)" : "rgba(167,139,250,0.2)"}`,
      padding: "5px 14px",
      borderRadius: "999px",
      marginBottom: "1rem",
    },
    heading: {
      fontSize: "clamp(1.8rem, 5.5vw, 3rem)",
      fontWeight: 800,
      color: darkMode ? "#fff" : "#0d1b2a",
      margin: "0 0 0.5rem",
      letterSpacing: "-0.02em",
    },
    headingAccent: {
      background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    divider: {
      width: "48px",
      height: "3px",
      background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
      borderRadius: "999px",
      margin: "1rem auto 0",
    },
    card: {
      background: darkMode
        ? "rgba(255,255,255,0.04)"
        : "rgba(255,255,255,0.95)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(0,0,0,0.07)",
      borderRadius: "24px",
      padding: "clamp(1.5rem, 4vw, 2.5rem)",
      boxShadow: darkMode
        ? "0 20px 60px rgba(0,0,0,0.4)"
        : "0 20px 48px rgba(0,0,0,0.08)",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "clamp(1.5rem, 4vw, 3rem)",
      alignItems: "start",
    },
    photoCol: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
      minWidth: "clamp(120px, 18vw, 180px)",
    },
    avatarRing: {
      position: "relative",
      width: "clamp(120px, 18vw, 170px)",
      height: "clamp(120px, 18vw, 170px)",
      flexShrink: 0,
    },
    avatarGlow: {
      position: "absolute",
      inset: "-4px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #a78bfa, #378ADD, #00c6ff)",
      zIndex: 0,
    },
    avatarBg: {
      position: "absolute",
      inset: "2px",
      borderRadius: "50%",
      background: darkMode ? "#0a0f1a" : "#f4f7ff",
      zIndex: 1,
    },
    avatar: {
      position: "absolute",
      inset: "4px",
      borderRadius: "50%",
      objectFit: "cover",
      width: "calc(100% - 8px)",
      height: "calc(100% - 8px)",
      zIndex: 2,
    },
    statusBadge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "5px 12px",
      borderRadius: "999px",
      background: "rgba(61,214,140,0.12)",
      border: "1px solid rgba(61,214,140,0.25)",
      color: "#3dd68c",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.04em",
      whiteSpace: "nowrap",
    },
    statusDot: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#3dd68c",
      animation: "aboutPulse 2s infinite",
    },
    textCol: {
      minWidth: 0,
    },
    nameRow: {
      marginBottom: "0.6rem",
    },
    name: {
      fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
      fontWeight: 800,
      color: darkMode ? "#fff" : "#0d1b2a",
      letterSpacing: "-0.01em",
      margin: 0,
    },
    role: {
      fontSize: "clamp(12px, 2.5vw, 14px)",
      color: darkMode ? "#7ec8f0" : "#1a6bad",
      fontWeight: 600,
      letterSpacing: "0.04em",
      marginTop: "4px",
    },
    bio: {
      color: darkMode ? "rgba(255,255,255,0.65)" : "#4a5568",
      fontSize: "clamp(13px, 2vw, 15px)",
      lineHeight: 1.8,
      margin: "0 0 1.5rem",
    },
    strong: {
      color: darkMode ? "rgba(255,255,255,0.9)" : "#0d1b2a",
      fontWeight: 700,
    },
    highlights: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      marginBottom: "1.5rem",
    },
    chip: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      padding: "7px 14px",
      borderRadius: "12px",
      background: darkMode
        ? "rgba(167,139,250,0.08)"
        : "rgba(167,139,250,0.07)",
      border: darkMode
        ? "1px solid rgba(167,139,250,0.2)"
        : "1px solid rgba(167,139,250,0.18)",
      fontSize: "clamp(11px, 2vw, 13px)",
      fontWeight: 600,
      color: darkMode ? "#c4b5fd" : "#6d28d9",
    },
    chipIcon: { fontSize: "14px" },
    chipSub: {
      fontWeight: 400,
      color: darkMode ? "rgba(196,181,253,0.65)" : "rgba(109,40,217,0.65)",
      fontSize: "11px",
      marginLeft: "2px",
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  // Responsive: stack on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div style={styles.wrapper}>
      <style>{`
        @keyframes aboutPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.8); }
        }
        @media (max-width: 580px) {
          .about-card { grid-template-columns: 1fr !important; }
          .about-photo-col { flex-direction: row !important; align-items: center !important; gap: 16px !important; min-width: unset !important; }
        }
      `}</style>

      {/* Orb decorations */}
      <div
        style={{
          position: "absolute",
          width: "clamp(200px, 35vw, 400px)",
          height: "clamp(200px, 35vw, 400px)",
          borderRadius: "50%",
          background: darkMode
            ? "rgba(167,139,250,0.08)"
            : "rgba(167,139,250,0.06)",
          filter: "blur(60px)",
          top: "-5%",
          right: "-5%",
          pointerEvents: "none",
        }}
      />

      <div style={styles.inner}>
        {/* Header */}
        <motion.div
          style={styles.headerWrap}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={styles.eyebrow}>Who I Am</div>
          <h2 style={styles.heading}>
            About <span style={styles.headingAccent}>Me</span>
          </h2>
          <div style={styles.divider} />
        </motion.div>

        {/* Card */}
        <motion.div
          className="about-card"
          style={styles.card}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Photo column */}
          <div className="about-photo-col" style={styles.photoCol}>
            <div style={styles.avatarRing}>
              <div style={styles.avatarGlow} />
              <div style={styles.avatarBg} />
              <img src={Solomon} alt="Solomon" style={styles.avatar} />
            </div>
            <div style={styles.statusBadge}>
              <span style={styles.statusDot} />
              Open to Work
            </div>
          </div>

          {/* Text column */}
          <div style={styles.textCol}>
            <div style={styles.nameRow}>
              <h3 style={styles.name}>Solomon D</h3>
              <p style={styles.role}>MERN Stack Developer</p>
            </div>

            <p style={styles.bio}>
              Hello! I'm <span style={styles.strong}>Solomon</span>, a
              passionate <span style={styles.strong}>MERN Stack Developer</span>{" "}
              who enjoys building modern, full-stack web applications. I focus
              on clean architecture, scalable backends, and responsive UIs that
              solve real-world problems.
            </p>

            <p style={{ ...styles.bio, marginBottom: "1.5rem" }}>
              I've built projects ranging from{" "}
              <span style={styles.strong}>E-Commerce platforms</span> to{" "}
              <span style={styles.strong}>Job search apps</span> and{" "}
              <span style={styles.strong}>Task managers</span> with PWA support.
              My goal is to create user-friendly applications with great
              performance and clean code.
            </p>

            {/* Highlight chips */}
            <div style={styles.highlights}>
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  style={styles.chip}
                >
                  <span style={styles.chipIcon}>{h.icon}</span>
                  <span>{h.label}</span>
                  <span style={styles.chipSub}>— {h.desc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
