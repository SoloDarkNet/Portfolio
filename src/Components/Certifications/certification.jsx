import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/context";
import {
  FaReact,
  FaJs,
  FaPython,
  FaMedal,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaTrophy,
  FaDatabase,
  FaHtml5,
  FaCode,
  FaBootstrap,
} from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

const certs = [
  {
    id: 1,
    title: "Industry Ready Certificate",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "Mar 2026",
    type: "flagship",
    icon: <FaTrophy style={{ fontSize: 28, color: "#facc15" }} />,
    accentFrom: "#f59e0b",
    accentTo: "#ef4444",
    glowColor: "rgba(245,158,11,0.25)",
    badgeColor: "rgba(245,158,11,0.15)",
    badgeBorder: "rgba(245,158,11,0.35)",
    badgeText: "#f59e0b",
    skills: ["Full Stack", "MERN", "Projects", "DSA"],
    desc: "Completed Full Stack MERN specialization with 600+ coding hours.",
    credentialId: "EIPMEI18MR",
    pdfPath: "/assets/IRC.pdf",
    featured: true,
  },
  {
    id: 2,
    title: "React.js Development",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "May 2025",
    type: "frontend",
    icon: <FaReact style={{ fontSize: 26, color: "#34c0c7" }} />,
    accentFrom: "#34c0c7",
    accentTo: "#378ADD",
    glowColor: "rgba(52,192,199,0.2)",
    badgeColor: "rgba(52,192,199,0.12)",
    badgeBorder: "rgba(52,192,199,0.3)",
    badgeText: "#34c0c7",
    skills: ["React Hooks", "Context API", "Router v5", "PWA", "REST APIs"],
    desc: "Comprehensive certification covering React ecosystem, component architecture, and modern frontend development patterns.",
    credentialId: "RCT-2024-SOL",
    pdfPath: "/assets/React.pdf",
    featured: false,
  },
  {
    id: 3,
    title: "JavaScript (Advanced)",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "Nov 2024",
    type: "language",
    icon: <FaJs style={{ fontSize: 26, color: "#eab308" }} />,
    accentFrom: "#eab308",
    accentTo: "#f97316",
    glowColor: "rgba(234,179,8,0.2)",
    badgeColor: "rgba(234,179,8,0.12)",
    badgeBorder: "rgba(234,179,8,0.3)",
    badgeText: "#eab308",
    skills: ["ES6+", "Async/Await", "Closures", "Event Loop", "DOM APIs"],
    desc: "Advanced JavaScript certification covering core language internals, async patterns, and browser APIs for production-grade apps.",
    credentialId: "JS-2024-SOL",
    pdfPath: "/assets/JS ES6.pdf",
    featured: false,
  },
  {
    id: 4,
    title: "Python Programming",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "Sep 2024",
    type: "language",
    icon: <FaPython style={{ fontSize: 26, color: "#a78bfa" }} />,
    accentFrom: "#a78bfa",
    accentTo: "#7c3aed",
    glowColor: "rgba(167,139,250,0.2)",
    badgeColor: "rgba(167,139,250,0.12)",
    badgeBorder: "rgba(167,139,250,0.3)",
    badgeText: "#a78bfa",
    skills: ["OOP", "File I/O", "Data Structures", "Modules", "Scripting"],
    desc: "Python certification covering object-oriented programming, data structures, and scripting for automation and backend tasks.",
    credentialId: "PY-2024-SOL",
    pdfPath: "/assets/python.pdf",
    featured: false,
  },
  {
    id: 5,
    title: "Node.js Development",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "Jan 2025",
    type: "backend",
    icon: <SiNestjs style={{ fontSize: 26, color: "#22c55e" }} />,
    accentFrom: "#22c55e",
    accentTo: "#16a34a",
    glowColor: "rgba(34,197,94,0.2)",
    badgeColor: "rgba(34,197,94,0.12)",
    badgeBorder: "rgba(34,197,94,0.3)",
    badgeText: "#22c55e",
    skills: ["Node.js", "Express", "REST API", "Middleware", "NPM"],
    desc: "Backend development certification covering Node.js, Express framework, REST APIs, and server-side JavaScript patterns.",
    credentialId: "NODE-2024-SOL",
    pdfPath: "/assets/node.pdf",
    featured: false,
  },
  {
    id: 6,
    title: "Introduction to Databases",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "Aug 2024",
    type: "database",
    icon: <FaDatabase style={{ fontSize: 26, color: "#3b82f6" }} />,
    accentFrom: "#3b82f6",
    accentTo: "#1d4ed8",
    glowColor: "rgba(59,130,246,0.2)",
    badgeColor: "rgba(59,130,246,0.12)",
    badgeBorder: "rgba(59,130,246,0.3)",
    badgeText: "#3b82f6",
    skills: ["SQL", "DBMS", "Queries", "Joins", "Normalization"],
    desc: "Database fundamentals certification covering SQL, relational database design, queries, and data management concepts.",
    credentialId: "SQL-2024-SOL",
    pdfPath: "/assets/sql.pdf",
    featured: false,
  },
  {
    id: 7,
    title: "Build Your Own Static Website",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "June 2024",
    type: "frontend",
    icon: <FaHtml5 style={{ fontSize: 26, color: "#f97316" }} />,
    accentFrom: "#f97316",
    accentTo: "#ea580c",
    glowColor: "rgba(249,115,22,0.2)",
    badgeColor: "rgba(249,115,22,0.12)",
    badgeBorder: "rgba(249,115,22,0.3)",
    badgeText: "#f97316",
    skills: ["HTML5", "CSS3", "Layouts", "Selectors", "Box Model"],
    desc: "Static website development certification covering HTML5, CSS3, page layouts, and building production-ready static sites.",
    credentialId: "STATIC-2024-SOL",
    pdfPath: "/assets/static-web.pdf",
    featured: false,
  },
  {
    id: 8,
    title: "Responsive Web Design",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "Dec 2024",
    type: "frontend",
    icon: <FaReact style={{ fontSize: 26, color: "#34c0c7" }} />,
    accentFrom: "#34c0c7",
    accentTo: "#378ADD",
    glowColor: "rgba(52,192,199,0.2)",
    badgeColor: "rgba(52,192,199,0.12)",
    badgeBorder: "rgba(52,192,199,0.3)",
    badgeText: "#34c0c7",
    skills: ["Flexbox", "Media Queries", "Grid", "Mobile First", "Responsive"],
    desc: "Responsive design certification covering Flexbox, CSS Grid, media queries, and mobile-first development techniques.",
    credentialId: "RESP-2024-SOL",
    pdfPath: "/assets/Responsive.pdf",
    featured: false,
  },
  {
    id: 9,
    title: "Dynamic Web Application",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "Dec 2024",
    type: "frontend",
    icon: <FaJs style={{ fontSize: 26, color: "#eab308" }} />,
    accentFrom: "#eab308",
    accentTo: "#f97316",
    glowColor: "rgba(234,179,8,0.2)",
    badgeColor: "rgba(234,179,8,0.12)",
    badgeBorder: "rgba(234,179,8,0.3)",
    badgeText: "#eab308",
    skills: ["JavaScript", "DOM", "Events", "Fetch API", "Dynamic UI"],
    desc: "Dynamic web application certification covering JavaScript DOM manipulation, event handling, and building interactive UIs.",
    credentialId: "DYNAMIC-2024-SOL",
    pdfPath: "/assets/Dynamic-web.pdf",
    featured: false,
  },
  {
    id: 10,
    title: "Developer Foundations",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "Nov 2024",
    type: "foundation",
    icon: <FaCode style={{ fontSize: 26, color: "#6366f1" }} />,
    accentFrom: "#6366f1",
    accentTo: "#4f46e5",
    glowColor: "rgba(99,102,241,0.2)",
    badgeColor: "rgba(99,102,241,0.12)",
    badgeBorder: "rgba(99,102,241,0.3)",
    badgeText: "#6366f1",
    skills: ["Git", "CLI", "VS Code", "Linux", "Problem Solving"],
    desc: "Developer foundations certification covering version control, command line, development tools, and core programming concepts.",
    credentialId: "FOUND-2024-SOL",
    pdfPath: "/assets/Developer-Foundation.pdf",
    featured: false,
  },
  {
    id: 11,
    title: "Bootstrap & Flexbox",
    issuer: "NxtWave",
    issuerFull: "NxtWave Institute of Advanced Technologies",
    date: "June 2024",
    type: "frontend",
    icon: <FaBootstrap style={{ fontSize: 26, color: "#7c3aed" }} />,
    accentFrom: "#7c3aed",
    accentTo: "#6d28d9",
    glowColor: "rgba(124,58,237,0.2)",
    badgeColor: "rgba(124,58,237,0.12)",
    badgeBorder: "rgba(124,58,237,0.3)",
    badgeText: "#7c3aed",
    skills: ["Bootstrap", "Flexbox", "Grid", "Components", "Utilities"],
    desc: "UI design certification covering Bootstrap framework, Flexbox layouts, responsive grid systems, and component-driven design.",
    credentialId: "BOOT-2024-SOL",
    pdfPath: "/assets/Boot-flex.pdf",
    featured: false,
  },
];

const shimmerKeyframes = `
  @keyframes certShimmer {
    0%   { transform: translateX(-150%) skewX(-15deg); }
    100% { transform: translateX(350%) skewX(-15deg); }
  }
  @keyframes certFloat {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-6px); }
  }
  @keyframes certPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.8); }
  }
  @keyframes certGlow {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.9; }
  }
`;

const FeaturedCard = ({ cert, darkMode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -10, scale: 1.015 }}
      transition={{ duration: 0.38, ease: "easeOut" }}
      style={{
        position: "relative",
        borderRadius: "28px",
        overflow: "hidden",
        padding: "3px",
        background: `linear-gradient(135deg, ${cert.accentFrom}, ${cert.accentTo}, #a78bfa)`,
        boxShadow: hovered
          ? `0 32px 80px ${cert.glowColor}, 0 0 0 1px ${cert.accentFrom}44`
          : `0 16px 48px ${cert.glowColor}`,
        transition: "box-shadow 0.4s ease",
        cursor: "default",
        animation: "certFloat 5s ease-in-out infinite",
      }}
    >
      <div
        style={{
          borderRadius: "26px",
          background: darkMode
            ? "linear-gradient(135deg, #0d1520 0%, #111827 50%, #0a0f1a 100%)"
            : "linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)",
          padding: "clamp(1.6rem, 4vw, 2.4rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {hovered && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)`,
              width: "60%",
              animation: "certShimmer 0.8s ease forwards",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "-20%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${cert.accentFrom}22, transparent 70%)`,
            pointerEvents: "none",
            animation: "certGlow 3s ease-in-out infinite",
          }}
        />

        {/* FEATURED badge */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "4px 12px",
            borderRadius: "999px",
            background: "rgba(250,204,21,0.15)",
            border: "1px solid rgba(250,204,21,0.35)",
            color: "#facc15",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#facc15",
              animation: "certPulse 2s infinite",
            }}
          />
          Featured
        </div>

        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "18px",
            marginBottom: "1.4rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "clamp(56px, 10vw, 68px)",
              height: "clamp(56px, 10vw, 68px)",
              borderRadius: "20px",
              background: `linear-gradient(135deg, ${cert.accentFrom}22, ${cert.accentTo}22)`,
              border: `2px solid ${cert.accentFrom}44`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: `0 8px 24px ${cert.glowColor}`,
            }}
          >
            {cert.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontSize: "clamp(16px, 3vw, 20px)",
                fontWeight: 800,
                color: darkMode ? "#fff" : "#0d1b2a",
                margin: "0 0 4px",
                letterSpacing: "-0.02em",
              }}
            >
              {cert.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(11px, 2vw, 13px)",
                color: darkMode ? "rgba(255,255,255,0.5)" : "#64748b",
                margin: "0 0 8px",
                fontWeight: 500,
              }}
            >
              {cert.issuerFull}
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "3px 10px",
                borderRadius: "999px",
                background: cert.badgeColor,
                border: `1px solid ${cert.badgeBorder}`,
                color: cert.badgeText,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              <FaCheckCircle style={{ fontSize: 10 }} />
              Certified · {cert.date}
            </div>
          </div>
        </div>

        <p
          style={{
            fontSize: "clamp(12px, 2vw, 14px)",
            color: darkMode ? "rgba(255,255,255,0.6)" : "#4a5568",
            lineHeight: 1.75,
            margin: "0 0 1.4rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {cert.desc}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {cert.skills.map((s) => (
            <span
              key={s}
              style={{
                padding: "4px 12px",
                borderRadius: "8px",
                background: darkMode
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.05)",
                border: darkMode
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.08)",
                fontSize: "11px",
                fontWeight: 600,
                color: darkMode ? "rgba(255,255,255,0.75)" : "#334155",
                letterSpacing: "0.03em",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1.4rem",
            paddingTop: "1.2rem",
            borderTop: darkMode
              ? "1px solid rgba(255,255,255,0.07)"
              : "1px solid rgba(0,0,0,0.06)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: darkMode ? "rgba(255,255,255,0.3)" : "#94a3b8",
              fontFamily: "monospace",
              letterSpacing: "0.05em",
            }}
          >
            ID: {cert.credentialId}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "11px",
                fontWeight: 700,
                color: cert.badgeText,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              <FaMedal style={{ fontSize: 12 }} />
              Verified
            </div>
            <a
              href={cert.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 14px",
                borderRadius: "8px",
                background: cert.badgeColor,
                border: `1px solid ${cert.badgeBorder}`,
                color: cert.badgeText,
                fontSize: "11px",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = cert.badgeBorder;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = cert.badgeColor;
              }}
            >
              <FaExternalLinkAlt style={{ fontSize: 9 }} />
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MiniCard = ({ cert, darkMode, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      custom={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3 + index * 0.08,
        duration: 0.55,
        ease: "easeOut",
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        position: "relative",
        borderRadius: "20px",
        overflow: "hidden",
        background: darkMode
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: hovered
          ? `1px solid ${cert.accentFrom}55`
          : darkMode
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(0,0,0,0.07)",
        boxShadow: hovered
          ? `0 20px 56px ${cert.glowColor}`
          : darkMode
            ? "0 8px 32px rgba(0,0,0,0.35)"
            : "0 8px 24px rgba(0,0,0,0.07)",
        transition: "all 0.35s ease",
        cursor: "default",
        padding: "clamp(1.2rem, 3vw, 1.6rem)",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {hovered && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "50%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
            animation: "certShimmer 0.7s ease forwards",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${cert.accentFrom}, ${cert.accentTo}, transparent)`,
          borderRadius: "0 0 3px 3px",
          opacity: hovered ? 1 : 0.6,
          transition: "opacity 0.3s ease",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${cert.accentFrom}18, transparent 70%)`,
          pointerEvents: "none",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "14px",
            background: `linear-gradient(135deg, ${cert.accentFrom}1a, ${cert.accentTo}1a)`,
            border: `1.5px solid ${cert.accentFrom}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {cert.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4
            style={{
              fontSize: "clamp(13px, 2.5vw, 15px)",
              fontWeight: 700,
              color: darkMode ? "#fff" : "#0d1b2a",
              margin: "0 0 3px",
              letterSpacing: "-0.01em",
            }}
          >
            {cert.title}
          </h4>
          <p
            style={{
              fontSize: "11px",
              color: darkMode ? "rgba(255,255,255,0.45)" : "#64748b",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {cert.issuer} · {cert.date}
          </p>
        </div>
        <div
          style={{
            padding: "3px 9px",
            borderRadius: "999px",
            background: cert.badgeColor,
            border: `1px solid ${cert.badgeBorder}`,
            color: cert.badgeText,
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.06em",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            flexShrink: 0,
          }}
        >
          <FaCheckCircle style={{ fontSize: 9 }} />
          Verified
        </div>
      </div>

      <p
        style={{
          fontSize: "clamp(11px, 2vw, 12px)",
          color: darkMode ? "rgba(255,255,255,0.55)" : "#4a5568",
          lineHeight: 1.7,
          margin: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {cert.desc}
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {cert.skills.map((s) => (
          <span
            key={s}
            style={{
              padding: "3px 9px",
              borderRadius: "6px",
              background: darkMode
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.04)",
              border: darkMode
                ? "1px solid rgba(255,255,255,0.09)"
                : "1px solid rgba(0,0,0,0.07)",
              fontSize: "10px",
              fontWeight: 600,
              color: darkMode ? "rgba(255,255,255,0.7)" : "#475569",
              letterSpacing: "0.02em",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <a
        href={cert.pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "7px 14px",
          borderRadius: "8px",
          background: cert.badgeColor,
          border: `1px solid ${cert.badgeBorder}`,
          color: cert.badgeText,
          fontSize: "11px",
          fontWeight: 700,
          textDecoration: "none",
          alignSelf: "flex-start",
          position: "relative",
          zIndex: 1,
          letterSpacing: "0.04em",
          transition: "all 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = cert.badgeBorder;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = cert.badgeColor;
        }}
      >
        <FaExternalLinkAlt style={{ fontSize: 9 }} />
        View Certificate
      </a>
    </motion.div>
  );
};

const Certifications = () => {
  const { darkMode } = useContext(AppContext);
  const featured = certs.filter((c) => c.featured);
  const others = certs.filter((c) => !c.featured);

  const totalCerts = certs.length - 1;

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2.5rem)",
        background: darkMode
          ? "radial-gradient(ellipse at 85% 15%, rgba(245,158,11,0.06) 0%, transparent 45%), radial-gradient(ellipse at 15% 85%, rgba(167,139,250,0.07) 0%, transparent 50%), #0a0f1a"
          : "radial-gradient(ellipse at 85% 15%, rgba(245,158,11,0.05) 0%, transparent 45%), #f4f7ff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{shimmerKeyframes}</style>

      <div
        style={{
          position: "absolute",
          width: "clamp(250px, 40vw, 500px)",
          height: "clamp(250px, 40vw, 500px)",
          borderRadius: "50%",
          background: darkMode
            ? "rgba(245,158,11,0.07)"
            : "rgba(245,158,11,0.05)",
          filter: "blur(80px)",
          top: "-8%",
          right: "-8%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "clamp(180px, 28vw, 350px)",
          height: "clamp(180px, 28vw, 350px)",
          borderRadius: "50%",
          background: darkMode
            ? "rgba(167,139,250,0.08)"
            : "rgba(167,139,250,0.05)",
          filter: "blur(70px)",
          bottom: "8%",
          left: "-5%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <motion.div
          style={{
            textAlign: "center",
            marginBottom: "clamp(2rem, 5vw, 3.5rem)",
          }}
          initial={{ opacity: 0, y: -22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div
            style={{
              display: "inline-block",
              fontSize: "clamp(10px, 2vw, 12px)",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: darkMode ? "#fcd34d" : "#b45309",
              background: darkMode
                ? "rgba(245,158,11,0.12)"
                : "rgba(245,158,11,0.1)",
              border: `1px solid ${darkMode ? "rgba(245,158,11,0.28)" : "rgba(245,158,11,0.25)"}`,
              padding: "5px 14px",
              borderRadius: "999px",
              marginBottom: "1rem",
            }}
          >
            Achievements
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 5.5vw, 3rem)",
              fontWeight: 800,
              color: darkMode ? "#fff" : "#0d1b2a",
              margin: "0 0 0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Certifications &{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #f59e0b, #ef4444, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Awards
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(13px, 2.5vw, 15px)",
              color: darkMode ? "rgba(255,255,255,0.45)" : "rgba(13,27,42,0.5)",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Verified credentials from structured learning — full-stack
            development, core languages & industry readiness.
          </p>
          <div
            style={{
              width: "48px",
              height: "3px",
              background: "linear-gradient(90deg, #f59e0b, #ef4444)",
              borderRadius: "999px",
              margin: "1rem auto 0",
            }}
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 6vw, 64px)",
            marginBottom: "clamp(2rem, 4vw, 3rem)",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: totalCerts.toString(), label: "Certifications" },
            { num: "1", label: "Industry Ready" },
            { num: "NxtWave", label: "Institute" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
                  fontWeight: 800,
                  color: darkMode ? "#fff" : "#0d1b2a",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{ marginBottom: "clamp(1.5rem, 3vw, 2rem)" }}
        >
          {featured.map((cert) => (
            <FeaturedCard key={cert.id} cert={cert} darkMode={darkMode} />
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "clamp(1.5rem, 3vw, 2rem)",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: darkMode
                ? "rgba(255,255,255,0.07)"
                : "rgba(0,0,0,0.07)",
            }}
          />
          <span
            style={{
              fontSize: "11px",
              color: darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {others.length} More Certifications
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: darkMode
                ? "rgba(255,255,255,0.07)"
                : "rgba(0,0,0,0.07)",
            }}
          />
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(14px, 2.5vw, 20px)",
          }}
        >
          {others.map((cert, i) => (
            <MiniCard key={cert.id} cert={cert} darkMode={darkMode} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
