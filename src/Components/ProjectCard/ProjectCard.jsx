import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../../Context/context";

const ProjectCard = ({
  title,
  description,
  image,
  github,
  live,
  credential,
}) => {
  const [showCredentials, setShowCredentials] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { darkMode } = useContext(AppContext);

  const styles = {
    card: {
      position: "relative",
      borderRadius: "20px",
      overflow: "hidden",
      background: darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.9)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(0,0,0,0.07)",
      boxShadow: hovered
        ? darkMode
          ? "0 24px 64px rgba(55,138,221,0.25), 0 0 0 1px rgba(55,138,221,0.2)"
          : "0 24px 48px rgba(55,138,221,0.2)"
        : darkMode
          ? "0 8px 32px rgba(0,0,0,0.4)"
          : "0 8px 32px rgba(0,0,0,0.08)",
      transition: "box-shadow 0.35s ease, border 0.35s ease",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    imageWrap: {
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    },
    image: {
      width: "100%",
      height: "clamp(160px, 25vw, 210px)",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.5s ease",
      transform: hovered ? "scale(1.07)" : "scale(1)",
      filter: darkMode ? "brightness(0.8)" : "brightness(0.97)",
    },
    imageOverlay: {
      position: "absolute",
      inset: 0,
      background: darkMode
        ? "linear-gradient(to top, rgba(10,15,26,0.85) 0%, rgba(10,15,26,0.2) 50%, transparent 100%)"
        : "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)",
      pointerEvents: "none",
    },
    liveChip: {
      position: "absolute",
      top: "12px",
      right: "12px",
      padding: "4px 10px",
      borderRadius: "999px",
      background: "rgba(0,198,100,0.85)",
      backdropFilter: "blur(8px)",
      color: "#fff",
      fontSize: "10px",
      fontWeight: 700,
      letterSpacing: "0.08em",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    liveDot: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#fff",
      animation: "cardPulse 1.5s infinite",
    },
    content: {
      padding: "clamp(1rem, 3vw, 1.5rem)",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      gap: "12px",
    },
    title: {
      color: darkMode ? "#fff" : "#0d1b2a",
      fontSize: "clamp(15px, 2.5vw, 17px)",
      fontWeight: 700,
      margin: 0,
      letterSpacing: "-0.01em",
    },
    desc: {
      color: darkMode ? "rgba(255,255,255,0.6)" : "#5a6a7a",
      fontSize: "clamp(12px, 2vw, 13px)",
      lineHeight: 1.65,
      margin: 0,
      flexGrow: 1,
    },
    btnRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
    },
    btnGithub: {
      padding: "9px 8px",
      borderRadius: "10px",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.15)"
        : "1px solid rgba(0,0,0,0.15)",
      background: "transparent",
      color: darkMode ? "rgba(255,255,255,0.85)" : "#0d1b2a",
      fontSize: "clamp(11px, 2vw, 12px)",
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      transition: "all 0.2s ease",
      letterSpacing: "0.02em",
    },
    btnLive: {
      padding: "9px 8px",
      borderRadius: "10px",
      border: "none",
      background: "linear-gradient(135deg, #378ADD, #00c6ff)",
      color: "#fff",
      fontSize: "clamp(11px, 2vw, 12px)",
      fontWeight: 600,
      cursor: "pointer",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
      boxShadow: "0 4px 16px rgba(55,138,221,0.35)",
      transition: "all 0.2s ease",
      letterSpacing: "0.02em",
    },
    credBtn: {
      width: "100%",
      padding: "9px",
      borderRadius: "10px",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid rgba(0,0,0,0.1)",
      background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
      color: darkMode ? "rgba(255,255,255,0.7)" : "#5a6a7a",
      fontSize: "clamp(11px, 2vw, 12px)",
      fontWeight: 500,
      cursor: "pointer",
      letterSpacing: "0.03em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",
    },
    credBox: {
      borderRadius: "12px",
      background: darkMode ? "rgba(55,138,221,0.08)" : "rgba(55,138,221,0.06)",
      border: darkMode
        ? "1px solid rgba(55,138,221,0.2)"
        : "1px solid rgba(55,138,221,0.15)",
      padding: "12px 16px",
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    credRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "clamp(11px, 2vw, 12px)",
    },
    credLabel: {
      color: darkMode ? "rgba(255,255,255,0.45)" : "#8a9baa",
      fontWeight: 500,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      fontSize: "10px",
    },
    credValue: {
      color: darkMode ? "#7ec8f0" : "#1a6bad",
      fontWeight: 600,
      fontFamily: "monospace",
      fontSize: "clamp(11px, 2vw, 13px)",
    },
  };

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
      style={styles.card}
    >
      <style>{`
        @keyframes cardPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* IMAGE */}
      <div style={styles.imageWrap}>
        <img src={image} alt={title} style={styles.image} />
        <div style={styles.imageOverlay} />
        {live && (
          <div style={styles.liveChip}>
            <span style={styles.liveDot} />
            LIVE
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.desc}>{description}</p>

        {/* BUTTONS */}
        <div style={styles.btnRow}>
          <motion.a
            href={github}
            target="_blank"
            rel="noreferrer"
            style={styles.btnGithub}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            ⌥ GitHub
          </motion.a>
          <motion.a
            href={live}
            target="_blank"
            rel="noreferrer"
            style={styles.btnLive}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            → Live
          </motion.a>
        </div>

        {/* CREDENTIAL TOGGLE */}
        {credential && (
          <>
            <motion.button
              onClick={() => setShowCredentials(!showCredentials)}
              style={styles.credBtn}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {showCredentials ? "▲ Hide" : "▼ Test Credentials"}
            </motion.button>

            <AnimatePresence>
              {showCredentials && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={styles.credBox}>
                    <div style={styles.credRow}>
                      <span style={styles.credLabel}>Username</span>
                      <span style={styles.credValue}>rahul</span>
                    </div>
                    <div style={styles.credRow}>
                      <span style={styles.credLabel}>Password</span>
                      <span style={styles.credValue}>rahul@2021</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
