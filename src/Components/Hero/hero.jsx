import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../Context/context";

// ── Particle Canvas ──────────────────────────────────────────────
const ParticleCanvas = ({ darkMode }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    const COUNT = Math.min(
      90,
      Math.floor((window.innerWidth * window.innerHeight) / 14000),
    );
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.4,
      opacity: Math.random() * 0.5 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const REPEL = 90;

      // Draw connections first
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = darkMode
              ? `rgba(55,138,221,${alpha})`
              : `rgba(55,138,221,${alpha * 0.6})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw & update particles
      for (let p of particles) {
        // Mouse repel
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL && dist > 0) {
          const force = (REPEL - dist) / REPEL;
          p.vx += (dx / dist) * force * 0.6;
          p.vy += (dy / dist) * force * 0.6;
        }

        // Dampen velocity
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing opacity
        const pulse = Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.2;
        const finalOpacity = Math.max(0.05, p.opacity + pulse);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = darkMode
          ? `rgba(120,190,255,${finalOpacity})`
          : `rgba(55,138,221,${finalOpacity * 0.7})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const handleLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: darkMode ? 1 : 0.6,
      }}
    />
  );
};

// ── Tap-aware Button Wrapper ─────────────────────────────────────
const TapButton = ({
  children,
  style,
  onClick,
  as: Tag = "button",
  to,
  ...props
}) => {
  const [pressed, setPressed] = useState(false);

  const pressStyle = pressed
    ? { transform: "scale(0.96) translateY(1px)", filter: "brightness(0.92)" }
    : {};

  if (Tag === Link) {
    return (
      <Link
        to={to}
        style={{
          ...style,
          ...pressStyle,
          transition: "transform 0.12s ease, filter 0.12s ease",
        }}
        onTouchStart={() => setPressed(true)}
        onTouchEnd={() => setPressed(false)}
        onTouchCancel={() => setPressed(false)}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Tag
      onClick={onClick}
      style={{
        ...style,
        ...pressStyle,
        transition: "transform 0.12s ease, filter 0.12s ease",
      }}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      onTouchCancel={() => setPressed(false)}
      {...props}
    >
      {children}
    </Tag>
  );
};

// ── Hero ─────────────────────────────────────────────────────────
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
      zIndex: 0,
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
      zIndex: 0,
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

        /* Desktop hover effects */
        @media (hover: hover) {
          .btn-primary:hover {
            transform: scale(1.05) translateY(-2px) !important;
            box-shadow: 0 8px 28px rgba(55,138,221,0.55) !important;
          }
          .btn-outline:hover {
            transform: scale(1.05) translateY(-2px) !important;
            background: ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,1)"} !important;
          }
        }

        /* Mobile tap ripple */
        .btn-primary, .btn-outline {
          transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.15s ease !important;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        /* Active state for touch devices */
        .btn-primary:active {
          transform: scale(0.96) !important;
          box-shadow: 0 2px 10px rgba(55,138,221,0.3) !important;
        }
        .btn-outline:active {
          transform: scale(0.96) !important;
          opacity: 0.8 !important;
        }
      `}</style>

      {/* Particle background */}
      <ParticleCanvas darkMode={darkMode} />

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
            whileTap={{ scale: 0.96 }}
          >
            <Link
              to="/projects"
              style={styles.btnPrimary}
              className="btn-primary"
            >
              View Projects →
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <button
              onClick={downloadResume}
              style={styles.btnOutline}
              className="btn-outline"
            >
              ↓ Resume
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <button
              onClick={gitHubLink}
              style={styles.btnOutline}
              className="btn-outline"
            >
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
