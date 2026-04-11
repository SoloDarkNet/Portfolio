import ProjectCard from "../ProjectCard/ProjectCard";
import project from "../../Data/projects";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../../Context/context";

const Projects = () => {
  const { darkMode } = useContext(AppContext);

  const styles = {
    wrapper: {
      minHeight: "100vh",
      padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2.5rem)",
      background: darkMode
        ? "radial-gradient(ellipse at 10% 20%, rgba(55,138,221,0.08) 0%, transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(167,139,250,0.06) 0%, transparent 50%), #0a0f1a"
        : "radial-gradient(ellipse at 10% 20%, rgba(55,138,221,0.06) 0%, transparent 50%), #f4f7ff",
      position: "relative",
      overflow: "hidden",
    },
    orb: {
      position: "absolute",
      borderRadius: "50%",
      pointerEvents: "none",
      filter: "blur(60px)",
    },
    inner: {
      maxWidth: "1100px",
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
      color: darkMode ? "#7ec8f0" : "#1a6bad",
      background: darkMode ? "rgba(55,138,221,0.12)" : "rgba(55,138,221,0.09)",
      border: `1px solid ${darkMode ? "rgba(55,138,221,0.25)" : "rgba(55,138,221,0.2)"}`,
      padding: "5px 14px",
      borderRadius: "999px",
      marginBottom: "1rem",
    },
    heading: {
      fontSize: "clamp(1.8rem, 5.5vw, 3rem)",
      fontWeight: 800,
      color: darkMode ? "#ffffff" : "#0d1b2a",
      margin: "0 0 0.75rem",
      letterSpacing: "-0.02em",
      lineHeight: 1.15,
    },
    headingAccent: {
      background: "linear-gradient(135deg, #378ADD, #00c6ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    subtext: {
      fontSize: "clamp(13px, 2.5vw, 15px)",
      color: darkMode ? "rgba(255,255,255,0.45)" : "rgba(13,27,42,0.5)",
      maxWidth: "440px",
      margin: "0 auto",
      lineHeight: 1.7,
    },
    divider: {
      width: "48px",
      height: "3px",
      background: "linear-gradient(90deg, #378ADD, #00c6ff)",
      borderRadius: "999px",
      margin: "1.2rem auto 0",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
      gap: "clamp(14px, 3vw, 24px)",
      alignItems: "start",
    },
    countBadge: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "clamp(1.2rem, 3vw, 2rem)",
    },
    countLine: {
      flex: 1,
      maxWidth: "80px",
      height: "1px",
      background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
    },
    countText: {
      fontSize: "12px",
      color: darkMode ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
      letterSpacing: "0.06em",
      fontWeight: 500,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div style={styles.wrapper}>
      {/* Background orbs */}
      <div
        style={{
          ...styles.orb,
          width: "clamp(200px, 35vw, 420px)",
          height: "clamp(200px, 35vw, 420px)",
          background: darkMode
            ? "rgba(55,138,221,0.1)"
            : "rgba(55,138,221,0.07)",
          top: "-8%",
          right: "-8%",
        }}
      />
      <div
        style={{
          ...styles.orb,
          width: "clamp(150px, 25vw, 300px)",
          height: "clamp(150px, 25vw, 300px)",
          background: darkMode
            ? "rgba(167,139,250,0.08)"
            : "rgba(167,139,250,0.05)",
          bottom: "5%",
          left: "-5%",
        }}
      />

      <div style={styles.inner}>
        {/* Header */}
        <motion.div
          style={styles.headerWrap}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div style={styles.eyebrow}>Portfolio</div>
          <h2 style={styles.heading}>
            My <span style={styles.headingAccent}>Projects</span>
          </h2>
          <p style={styles.subtext}>
            Real-world apps built with the MERN stack — from REST APIs to
            PWA-ready frontends.
          </p>
          <div style={styles.divider} />
        </motion.div>

        {/* Project count */}
        <motion.div
          style={styles.countBadge}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div style={styles.countLine} />
          <span style={styles.countText}>{project.length} Projects</span>
          <div style={styles.countLine} />
        </motion.div>

        {/* Grid */}
        <motion.div
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {project.map((proj) => (
            <motion.div key={proj.id} variants={cardVariants}>
              <ProjectCard {...proj} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
