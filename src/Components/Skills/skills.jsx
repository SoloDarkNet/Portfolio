import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/context";
import { motion } from "framer-motion";
import { SiMongodb, SiExpress, SiPython, SiPostman } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

const skillGroups = [
  {
    title: "Frontend",
    emoji: "⬡",
    accentColor: "#378ADD",
    glowColor: "rgba(55,138,221,0.25)",
    skills: [
      {
        label: "React",
        icon: <FaReact style={{ color: "#34c0c7", fontSize: 15 }} />,
      },
      {
        label: "HTML5",
        icon: <FaHtml5 style={{ color: "#e34c26", fontSize: 15 }} />,
      },
      {
        label: "CSS3",
        icon: <FaCss3Alt style={{ color: "#8a3ca0", fontSize: 15 }} />,
      },
      {
        label: "JavaScript",
        icon: <FaJs style={{ color: "#c8b942", fontSize: 15 }} />,
      },
    ],
  },
  {
    title: "Backend",
    emoji: "⬡",
    accentColor: "#3dd68c",
    glowColor: "rgba(61,214,140,0.2)",
    skills: [
      {
        label: "Node.js",
        icon: <FaNodeJs style={{ color: "#387c43", fontSize: 15 }} />,
      },
      {
        label: "Express.js",
        icon: <SiExpress style={{ color: "#38a13b", fontSize: 15 }} />,
      },
      {
        label: "Python",
        icon: <SiPython style={{ color: "#6352c0", fontSize: 15 }} />,
      },
    ],
  },
  {
    title: "Database",
    emoji: "⬡",
    accentColor: "#f97316",
    glowColor: "rgba(249,115,22,0.2)",
    skills: [
      {
        label: "MongoDB",
        icon: <SiMongodb style={{ color: "#548e64", fontSize: 15 }} />,
      },
      {
        label: "SQL",
        icon: <FaDatabase style={{ color: "#c842a0", fontSize: 15 }} />,
      },
    ],
  },
  {
    title: "Tools",
    emoji: "⬡",
    accentColor: "#a78bfa",
    glowColor: "rgba(167,139,250,0.2)",
    skills: [
      {
        label: "Git",
        icon: <FaGitAlt style={{ color: "#9473b4", fontSize: 15 }} />,
      },
      {
        label: "VS Code",
        icon: <DiVisualstudio style={{ color: "#78dbeb", fontSize: 15 }} />,
      },
      {
        label: "Postman",
        icon: <SiPostman style={{ color: "#f18553", fontSize: 15 }} />,
      },
    ],
  },
];

const Skills = () => {
  const { darkMode } = useContext(AppContext);

  const sectionStyle = {
    marginTop: "3rem",
    padding: "clamp(1.5rem, 4vw, 2.5rem) clamp(1rem, 3vw, 2rem)",
    background: darkMode
      ? "linear-gradient(135deg, rgba(15,32,39,0.9), rgba(32,58,67,0.9), rgba(44,83,100,0.9))"
      : "linear-gradient(135deg, #1e3a5f, #2c5364)",
    borderRadius: "24px",
    position: "relative",
    overflow: "hidden",
  };

  const headingStyle = {
    color: "#fff",
    fontSize: "clamp(16px, 3.5vw, 22px)",
    fontWeight: 700,
    marginBottom: "clamp(1.2rem, 3vw, 2rem)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    opacity: 0.9,
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
    gap: "clamp(12px, 2.5vw, 20px)",
  };

  return (
    <Link to="/skills" style={{ textDecoration: "none" }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sectionStyle}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse at 90% 10%, rgba(55,138,221,0.12), transparent 50%)",
          }}
        />

        <h2 style={headingStyle}>Skills</h2>

        <div style={gridStyle}>
          {skillGroups.map((group, i) => (
            <SkillCard
              key={group.title}
              group={group}
              index={i}
              darkMode={darkMode}
            />
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

const SkillCard = ({ group, index, darkMode }) => {
  return (
    <motion.div
      custom={index}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        y: -6,
        boxShadow: `0 16px 48px ${group.glowColor}`,
        border: `1px solid ${group.accentColor}40`,
      }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.background = darkMode
          ? `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.07), rgba(255,255,255,0.03) 60%)`
          : `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.95), rgba(255,255,255,0.8) 60%)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = darkMode
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.85)";
      }}
      style={{
        position: "relative",
        background: darkMode
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: "16px",
        padding: "clamp(1.1rem, 3vw, 1.8rem) clamp(1rem, 2.5vw, 1.6rem)",
        cursor: "pointer",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.12)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Gradient accent border top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "15%",
          right: "15%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${group.accentColor}, transparent)`,
          borderRadius: "0 0 4px 4px",
        }}
      />

      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          background: group.accentColor,
          filter: "blur(50px)",
          opacity: 0.12,
          top: -20,
          right: -20,
          pointerEvents: "none",
        }}
      />

      {/* Title row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "clamp(10px, 2vw, 14px)",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "8px",
            background: `${group.accentColor}22`,
            border: `1px solid ${group.accentColor}44`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: group.accentColor,
            }}
          />
        </div>
        <p
          style={{
            fontSize: "clamp(11px, 2vw, 13px)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: darkMode ? "rgba(255,255,255,0.7)" : "#1e3a5f",
            margin: 0,
          }}
        >
          {group.title}
        </p>
      </div>

      {/* Skills chips */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
        {group.skills.map((skill) => (
          <motion.span
            key={skill.label}
            whileHover={{ scale: 1.06, y: -1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px clamp(8px, 2vw, 11px)",
              borderRadius: "999px",
              background: darkMode
                ? "rgba(255,255,255,0.07)"
                : "rgba(255,255,255,0.75)",
              border: darkMode
                ? "1px solid rgba(255,255,255,0.12)"
                : "1px solid rgba(0,0,0,0.08)",
              fontSize: "clamp(10px, 2vw, 12px)",
              fontWeight: 500,
              color: darkMode ? "rgba(255,255,255,0.85)" : "#1e3a5f",
              backdropFilter: "blur(6px)",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            {skill.icon}
            {skill.label}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
