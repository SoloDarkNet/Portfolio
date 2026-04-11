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
    accentColor: "#378ADD",
    skills: [
      { label: "React", icon: <FaReact style={{ color: "#34c0c7" }} /> },
      { label: "HTML5", icon: <FaHtml5 style={{ color: "#e34c26" }} /> },
      { label: "CSS3", icon: <FaCss3Alt style={{ color: "#8a3ca0" }} /> },
      { label: "JavaScript", icon: <FaJs style={{ color: "#c8b942" }} /> },
    ],
  },
  {
    title: "Backend",
    accentColor: "#639922",
    skills: [
      { label: "Node.js", icon: <FaNodeJs style={{ color: "#387c43" }} /> },
      { label: "Express.js", icon: <SiExpress style={{ color: "#38a13b" }} /> },
      { label: "Python", icon: <SiPython style={{ color: "#6352c0" }} /> },
    ],
  },
  {
    title: "Database",
    accentColor: "#D85A30",
    skills: [
      { label: "MongoDB", icon: <SiMongodb style={{ color: "#548e64" }} /> },
      { label: "SQL", icon: <FaDatabase style={{ color: "#c842a0" }} /> },
    ],
  },
  {
    title: "Tools",
    accentColor: "#BA7517",
    skills: [
      { label: "Git", icon: <FaGitAlt style={{ color: "#9473b4" }} /> },
      {
        label: "VS Code",
        icon: <DiVisualstudio style={{ color: "#78dbeb" }} />,
      },
      { label: "Postman", icon: <SiPostman style={{ color: "#f18553" }} /> },
    ],
  },
];

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Skills = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <Link to="/skills" style={{ textDecoration: "none" }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          marginTop: "3rem",
          padding: "2rem 1.5rem",
          background: darkMode
            ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
            : "#2c5364",
          borderRadius: 24,
        }}
      >
        <h2
          style={{
            color: "#fff",
            fontSize: 24,
            fontWeight: 700,
            marginBottom: "2rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            opacity: 0.9,
            textAlign: "center",
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 22,
          }}
        >
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: `0 12px 40px ${group.accentColor}40`,
              }}
              whileTap={{ scale: 0.97 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.12), transparent 60%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = darkMode
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.85)";
              }}
              style={{
                position: "relative",
                background: darkMode
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.85)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                borderRadius: 18,
                padding: "2.2rem 2rem",
                minHeight: "125px",
                cursor: "pointer",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: darkMode
                  ? "0 8px 30px rgba(0,0,0,0.4)"
                  : "0 8px 25px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Gradient Border */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 18,
                  padding: "1px",
                  background: `linear-gradient(120deg, ${group.accentColor}, transparent)`,
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  pointerEvents: "none",
                }}
              />

              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  width: 140,
                  height: 140,
                  background: group.accentColor,
                  filter: "blur(60px)",
                  opacity: 0.15,
                  top: -30,
                  right: -30,
                }}
              />

              {/* Title */}
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: darkMode ? "rgba(255,255,255,0.6)" : "#272424",
                  marginBottom: 12,
                }}
              >
                {group.title}
              </p>

              {/* Skills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill.label}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 12px",
                      borderRadius: 999,
                      background: darkMode
                        ? "rgba(58, 56, 56, 0.08)"
                        : "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      fontSize: 12,
                      fontWeight: 500,
                      color: darkMode ? "#fff" : "#333",
                      backdropFilter: "blur(6px)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {skill.icon}
                    {skill.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default Skills;
