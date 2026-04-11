import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/context";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const { darkMode } = useContext(AppContext);

  const s = {
    footer: {
      position: "relative",
      overflow: "hidden",
      background: darkMode
        ? "linear-gradient(135deg, #0d1520, #111827)"
        : "linear-gradient(135deg, #1e3a5f, #2c5364)",
      padding:
        "clamp(2.5rem, 5vw, 4rem) clamp(1rem, 4vw, 2.5rem) clamp(1.5rem, 3vw, 2rem)",
    },
    glow1: {
      position: "absolute",
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "rgba(55,138,221,0.08)",
      filter: "blur(80px)",
      top: "-80px",
      right: "-40px",
      pointerEvents: "none",
    },
    glow2: {
      position: "absolute",
      width: 200,
      height: 200,
      borderRadius: "50%",
      background: "rgba(167,139,250,0.06)",
      filter: "blur(60px)",
      bottom: "-40px",
      left: "-20px",
      pointerEvents: "none",
    },
    inner: {
      maxWidth: "1000px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    topRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "clamp(1.5rem, 4vw, 2.5rem)",
      marginBottom: "clamp(1.5rem, 4vw, 2.5rem)",
    },
    brandCol: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    brandName: {
      fontSize: "clamp(22px, 4vw, 28px)",
      fontWeight: 800,
      background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.7))",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      letterSpacing: "-0.02em",
      margin: 0,
    },
    brandSub: {
      fontSize: "clamp(12px, 2vw, 13px)",
      color: "rgba(255,255,255,0.45)",
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    linksCol: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
    },
    colTitle: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.35)",
      marginBottom: "6px",
    },
    navLink: {
      textDecoration: "none",
      fontSize: "clamp(13px, 2vw, 14px)",
      color: "rgba(255,255,255,0.6)",
      fontWeight: 500,
      transition: "color 0.2s ease",
    },
    divider: {
      width: "100%",
      height: "1px",
      background: "rgba(255,255,255,0.08)",
      margin: "0 0 clamp(1rem, 3vw, 1.5rem)",
    },
    bottomRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
    },
    copy: {
      fontSize: "clamp(11px, 2vw, 13px)",
      color: "rgba(255,255,255,0.35)",
    },
    socialRow: {
      display: "flex",
      gap: "10px",
    },
    socialBtn: {
      width: "38px",
      height: "38px",
      borderRadius: "10px",
      border: "1px solid rgba(255,255,255,0.12)",
      background: "rgba(255,255,255,0.06)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      color: "rgba(255,255,255,0.7)",
      transition: "all 0.2s ease",
      fontSize: "16px",
    },
  };

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const socials = [
    {
      href: "https://github.com/SoloDarkNet",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/solomon-d-s152535",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "mailto:dsolomongiri@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
    },
  ];

  return (
    <footer style={s.footer}>
      <div style={s.glow1} />
      <div style={s.glow2} />

      <div style={s.inner}>
        {/* Top */}
        <div style={s.topRow}>
          {/* Brand */}
          <motion.div
            style={s.brandCol}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 style={s.brandName}>Solomon D</h3>
            <span style={s.brandSub}>MERN Stack Developer</span>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "rgba(61,214,140,0.12)",
                border: "1px solid rgba(61,214,140,0.22)",
                marginTop: "4px",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#3dd68c",
                  animation: "footerPulse 2s infinite",
                }}
              />
              <span
                style={{
                  fontSize: "11px",
                  color: "#3dd68c",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                Open to Work
              </span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            style={s.linksCol}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p style={s.colTitle}>Quick Links</p>
            {quickLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={s.navLink}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#7ec8f0")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                }
              >
                {label}
              </Link>
            ))}
          </motion.div>

          {/* Contact */}
          <motion.div
            style={s.linksCol}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p style={s.colTitle}>Contact</p>
            <a
              href="mailto:dsolomongiri@gmail.com"
              style={{ ...s.navLink, wordBreak: "break-all" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7ec8f0")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
              }
            >
              dsolomongiri@gmail.com
            </a>
            <a
              href="https://github.com/SoloDarkNet"
              target="_blank"
              rel="noreferrer"
              style={s.navLink}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#7ec8f0")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
              }
            >
              github.com/SoloDarkNet
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div style={s.divider} />

        {/* Bottom */}
        <div style={s.bottomRow}>
          <p style={s.copy}>© 2026 Solomon D. All Rights Reserved.</p>

          <div style={s.socialRow}>
            {socials.map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                style={s.socialBtn}
                whileHover={{
                  scale: 1.1,
                  background: "rgba(55,138,221,0.2)",
                  borderColor: "rgba(55,138,221,0.4)",
                  color: "#7ec8f0",
                }}
                whileTap={{ scale: 0.94 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes footerPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.45; transform: scale(0.8); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
