import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../Context/context";

const Hero = () => {
  const { darkMode } = useContext(AppContext);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  const gitHubLink = () => {
    window.open("https://github.com/SoloDarkNet", "_blank");
  };

  const styles = {
    wrapper: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1rem",
      position: "relative",
      overflow: "hidden",
      background: darkMode
        ? "radial-gradient(ellipse at 20% 50%, rgba(55,138,221,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,198,255,0.08) 0%, transparent 50%), #0a0f1a"
        : "radial-gradient(ellipse at 20% 50%, rgba(55,138,221,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,198,255,0.06) 0%, transparent 50%), #f0f4ff",
    },
    orb1: {
      position: "absolute",
      width: "clamp(200px, 40vw, 500px)",
      height: "clamp(200px, 40vw, 500px)",
      borderRadius: "50%",
      background: darkMode
        ? "radial-gradient(circle, rgba(55,138,221,0.15), transparent 70%)"
        : "radial-gradient(circle, rgba(55,138,221,0.12), transparent 70%)",
      top: "-10%",
      right: "-10%",
      pointerEvents: "none",
    },
    orb2: {
      position: "absolute",
      width: "clamp(150px, 30vw, 350px)",
      height: "clamp(150px, 30vw, 350px)",
      borderRadius: "50%",
      background: darkMode
        ? "radial-gradient(circle, rgba(0,198,255,0.1), transparent 70%)"
        : "radial-gradient(circle, rgba(0,198,255,0.08), transparent 70%)",
      bottom: "5%",
      left: "-5%",
      pointerEvents: "none",
    },
    inner: {
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      maxWidth: "700px",
      width: "100%",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: "6px 16px",
      borderRadius: "999px",
      background: darkMode ? "rgba(55,138,221,0.15)" : "rgba(55,138,221,0.1)",
      border: `1px solid ${darkMode ? "rgba(55,138,221,0.3)" : "rgba(55,138,221,0.25)"}`,
      color: darkMode ? "#7ec8f0" : "#1a6bad",
      fontSize: "clamp(11px, 2.5vw, 13px)",
      fontWeight: 500,
      letterSpacing: "0.08em",
      marginBottom: "1.5rem",
    },
    dot: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#378ADD",
      animation: "pulse 2s infinite",
    },
    heading: {
      fontSize: "clamp(2.2rem, 8vw, 4.5rem)",
      fontWeight: 800,
      lineHeight: 1.1,
      marginBottom: "0.5rem",
      color: darkMode ? "#ffffff" : "#0d1b2a",
      letterSpacing: "-0.02em",
    },
    gradientText: {
      background:
        "linear-gradient(135deg, #378ADD 0%, #00c6ff 50%, #a78bfa 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtitle: {
      fontSize: "clamp(1rem, 3.5vw, 1.35rem)",
      color: darkMode ? "rgba(255,255,255,0.55)" : "rgba(13,27,42,0.55)",
      marginBottom: "2.5rem",
      fontWeight: 400,
      letterSpacing: "0.04em",
    },
    btnRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
      justifyContent: "center",
    },
    btnPrimary: {
      padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)",
      borderRadius: "12px",
      border: "none",
      background: "linear-gradient(135deg, #378ADD, #00c6ff)",
      color: "#fff",
      fontSize: "clamp(13px, 2.5vw, 15px)",
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      boxShadow: "0 4px 20px rgba(55,138,221,0.4)",
      letterSpacing: "0.02em",
    },
    btnOutline: {
      padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)",
      borderRadius: "12px",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.2)"
        : "1px solid rgba(0,0,0,0.15)",
      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.8)",
      color: darkMode ? "#fff" : "#0d1b2a",
      fontSize: "clamp(13px, 2.5vw, 15px)",
      fontWeight: 600,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      backdropFilter: "blur(8px)",
      letterSpacing: "0.02em",
    },
    statsRow: {
      display: "flex",
      justifyContent: "center",
      gap: "clamp(20px, 5vw, 48px)",
      marginTop: "3rem",
      flexWrap: "wrap",
      pointerEvents: "none",
    },
    statItem: {
      textAlign: "center",
    },
    statNum: {
      fontSize: "clamp(1.4rem, 4vw, 2rem)",
      fontWeight: 800,
      color: darkMode ? "#fff" : "#0d1b2a",
    },
    statLabel: {
      fontSize: "clamp(10px, 2vw, 12px)",
      color: darkMode ? "rgba(255,255,255,0.45)" : "rgba(13,27,42,0.45)",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="home" style={styles.wrapper}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <motion.div
        style={styles.inner}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <div style={styles.badge}>
            <div style={styles.dot} />
            Available for Work
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} style={styles.heading}>
          Hi, I'm <span style={styles.gradientText}>Solomon</span>
        </motion.h1>

        <motion.p variants={itemVariants} style={styles.subtitle}>
          MERN Stack Developer
        </motion.p>

        <motion.div variants={itemVariants} style={styles.btnRow}>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/projects" style={{ ...styles.btnPrimary }}>
              View Projects →
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <button onClick={downloadResume} style={styles.btnOutline}>
              ↓ Resume
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <button onClick={gitHubLink} style={styles.btnOutline}>
              ⌥ GitHub
            </button>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} style={styles.statsRow}>
          {[
            { num: "5+", label: "Projects" },
            { num: "MERN", label: "Stack" },
            { num: "PWA", label: "Ready" },
          ].map((s) => (
            <div key={s.label} style={styles.statItem}>
              <div style={styles.statNum}>{s.num}</div>
              <div style={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
