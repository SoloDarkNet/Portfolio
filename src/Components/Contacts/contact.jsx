import emailjs from "@emailjs/browser";
import { useRef, useState, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/context";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const { darkMode } = useContext(AppContext);
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "service_98p1lwo",
        "template_vm8yfpm",
        form.current,
        "to06NPhyXKVER6KqU",
      )
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  const s = {
    wrapper: {
      minHeight: "100vh",
      padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2.5rem)",
      background: darkMode
        ? "radial-gradient(ellipse at 70% 10%, rgba(55,138,221,0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 90%, rgba(167,139,250,0.06) 0%, transparent 50%), #0a0f1a"
        : "radial-gradient(ellipse at 70% 10%, rgba(55,138,221,0.06) 0%, transparent 50%), #f4f7ff",
      position: "relative",
      overflow: "hidden",
    },
    inner: {
      maxWidth: "600px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    headerWrap: {
      textAlign: "center",
      marginBottom: "clamp(2rem, 5vw, 3rem)",
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
      color: darkMode ? "#fff" : "#0d1b2a",
      margin: "0 0 0.5rem",
      letterSpacing: "-0.02em",
    },
    accent: {
      background: "linear-gradient(135deg, #378ADD, #00c6ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    divider: {
      width: "48px",
      height: "3px",
      background: "linear-gradient(90deg, #378ADD, #00c6ff)",
      borderRadius: "999px",
      margin: "1rem auto 0",
    },
    subtext: {
      fontSize: "clamp(13px, 2.5vw, 14px)",
      color: darkMode ? "rgba(255,255,255,0.45)" : "rgba(13,27,42,0.5)",
      marginTop: "0.75rem",
      lineHeight: 1.7,
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
    },
    fieldWrap: {
      marginBottom: "clamp(1rem, 2.5vw, 1.4rem)",
    },
    label: {
      display: "flex",
      alignItems: "center",
      gap: "7px",
      fontSize: "clamp(11px, 2vw, 13px)",
      fontWeight: 600,
      color: darkMode ? "rgba(255,255,255,0.6)" : "#4a5568",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      marginBottom: "8px",
    },
    input: {
      width: "100%",
      padding: "clamp(10px, 2vw, 13px) clamp(12px, 2.5vw, 16px)",
      borderRadius: "12px",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid rgba(0,0,0,0.1)",
      background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(248,250,255,1)",
      color: darkMode ? "#fff" : "#0d1b2a",
      fontSize: "clamp(13px, 2vw, 14px)",
      outline: "none",
      transition: "border 0.2s ease, box-shadow 0.2s ease",
      boxSizing: "border-box",
      fontFamily: "inherit",
    },
    textarea: {
      width: "100%",
      padding: "clamp(10px, 2vw, 13px) clamp(12px, 2.5vw, 16px)",
      borderRadius: "12px",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid rgba(0,0,0,0.1)",
      background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(248,250,255,1)",
      color: darkMode ? "#fff" : "#0d1b2a",
      fontSize: "clamp(13px, 2vw, 14px)",
      outline: "none",
      resize: "vertical",
      minHeight: "120px",
      transition: "border 0.2s ease, box-shadow 0.2s ease",
      boxSizing: "border-box",
      fontFamily: "inherit",
      lineHeight: 1.7,
    },
    submitBtn: {
      width: "100%",
      padding: "clamp(12px, 2.5vw, 15px)",
      borderRadius: "12px",
      border: "none",
      background:
        status === "sending"
          ? darkMode
            ? "rgba(55,138,221,0.4)"
            : "rgba(55,138,221,0.5)"
          : "linear-gradient(135deg, #378ADD, #00c6ff)",
      color: "#fff",
      fontSize: "clamp(13px, 2vw, 15px)",
      fontWeight: 700,
      cursor: status === "sending" ? "not-allowed" : "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      boxShadow: "0 4px 20px rgba(55,138,221,0.35)",
      letterSpacing: "0.03em",
      transition: "opacity 0.2s ease",
      marginTop: "clamp(1rem, 2.5vw, 1.5rem)",
    },
    toast: {
      marginTop: "1rem",
      padding: "12px 16px",
      borderRadius: "12px",
      fontSize: "clamp(12px, 2vw, 13px)",
      fontWeight: 600,
      textAlign: "center",
      background:
        status === "success" ? "rgba(61,214,140,0.12)" : "rgba(239,68,68,0.1)",
      border:
        status === "success"
          ? "1px solid rgba(61,214,140,0.3)"
          : "1px solid rgba(239,68,68,0.25)",
      color: status === "success" ? "#3dd68c" : "#f87171",
    },
  };

  const focusStyle = `
    input:focus, textarea:focus {
      border-color: ${darkMode ? "rgba(55,138,221,0.5)" : "rgba(55,138,221,0.4)"} !important;
      box-shadow: 0 0 0 3px ${darkMode ? "rgba(55,138,221,0.12)" : "rgba(55,138,221,0.1)"} !important;
    }
    input::placeholder, textarea::placeholder {
      color: ${darkMode ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)"};
    }
  `;

  return (
    <div style={s.wrapper}>
      <style>{focusStyle}</style>

      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: "clamp(200px,35vw,400px)",
          height: "clamp(200px,35vw,400px)",
          borderRadius: "50%",
          background: darkMode
            ? "rgba(55,138,221,0.08)"
            : "rgba(55,138,221,0.06)",
          filter: "blur(70px)",
          top: "-8%",
          right: "-8%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "clamp(150px,25vw,280px)",
          height: "clamp(150px,25vw,280px)",
          borderRadius: "50%",
          background: darkMode
            ? "rgba(167,139,250,0.07)"
            : "rgba(167,139,250,0.05)",
          filter: "blur(60px)",
          bottom: "5%",
          left: "-5%",
          pointerEvents: "none",
        }}
      />

      <div style={s.inner}>
        {/* Header */}
        <motion.div
          style={s.headerWrap}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={s.eyebrow}>Get In Touch</div>
          <h2 style={s.heading}>
            Contact <span style={s.accent}>Me</span>
          </h2>
          <p style={s.subtext}>
            Open to full-time roles in Chennai, Bangalore, Hyderabad & Kochi.
          </p>
          <div style={s.divider} />
        </motion.div>

        {/* Form Card */}
        <motion.div
          style={s.card}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <form ref={form} onSubmit={sendEmail}>
            {/* Name */}
            <div style={s.fieldWrap}>
              <label style={s.label}>
                <FaUser style={{ fontSize: 11 }} /> Name
              </label>
              <input
                type="text"
                name="user_name"
                style={s.input}
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div style={s.fieldWrap}>
              <label style={s.label}>
                <FaEnvelope style={{ fontSize: 11 }} /> Email
              </label>
              <input
                type="email"
                name="user_email"
                style={s.input}
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Message */}
            <div style={s.fieldWrap}>
              <label style={s.label}>
                <FaCommentDots style={{ fontSize: 11 }} /> Message
              </label>
              <textarea
                name="message"
                style={s.textarea}
                placeholder="Tell me about the opportunity..."
                required
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              style={s.submitBtn}
              disabled={status === "sending"}
              whileHover={status !== "sending" ? { scale: 1.02, y: -1 } : {}}
              whileTap={status !== "sending" ? { scale: 0.98 } : {}}
            >
              {status === "sending" ? (
                <>Sending...</>
              ) : (
                <>
                  <FaPaperPlane style={{ fontSize: 14 }} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Toast */}
            {(status === "success" || status === "error") && (
              <motion.div
                style={s.toast}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status === "success"
                  ? "✓ Message sent! I'll get back to you soon."
                  : "✕ Something went wrong. Please try again."}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
