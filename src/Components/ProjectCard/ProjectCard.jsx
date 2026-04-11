import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../Context/context";

const ProjectCard = ({
  title,
  description,
  image,
  github,
  live,
  credential,
}) => {
  // ✅ FIXED TYPO
  const [showCredentials, setShowCredentials] = useState(false);

  const { darkMode } = useContext(AppContext);

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: darkMode
          ? "0 20px 60px rgba(0, 150, 255, 0.3)"
          : "0 20px 40px rgba(0,0,0,0.15)",
      }}
      transition={{ duration: 0.3 }}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff",
        backdropFilter: "blur(14px)",
        border: darkMode
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(0,0,0,0.08)",
        boxShadow: darkMode
          ? "0 10px 30px rgba(0,0,0,0.3)"
          : "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      {/* IMAGE */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          boxShadow: darkMode
            ? "inset 0 -40px 80px rgba(0,0,0,0.6)"
            : "inset 0 -20px 40px rgba(0,0,0,0.1)",
        }}
      >
        <motion.img
          src={image}
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            filter: darkMode ? "brightness(0.85)" : "brightness(1)",
          }}
        />

        {/* ✅ PERFECT OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: darkMode
              ? "linear-gradient(to top, rgba(0,0,0,0.7), transparent)"
              : "linear-gradient(to top, rgba(0,0,0,0.15), transparent)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            color: darkMode ? "#fff" : "#111",
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 10,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: darkMode ? "rgba(255,255,255,0.7)" : "#555",
            fontSize: 13,
            marginBottom: 14,
          }}
        >
          {description}
        </p>

        {/* BUTTONS */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "8px",
              borderRadius: 8,
              border: darkMode
                ? "1px solid rgba(255,255,255,0.2)"
                : "1px solid rgba(0,0,0,0.2)",
              color: darkMode ? "#fff" : "#111",
              fontSize: 12,
              textDecoration: "none",
            }}
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              textAlign: "center",
              padding: "8px",
              borderRadius: 8,
              background: "linear-gradient(135deg, #378ADD, #00c6ff)",
              color: "#fff",
              fontSize: 12,
              textDecoration: "none",
            }}
          >
            Live
          </a>
        </div>

        {/* CREDENTIAL BUTTON */}
        {credential && (
          <button
            onClick={() => setShowCredentials(!showCredentials)}
            style={{
              marginTop: 12,
              width: "100%",
              padding: "8px",
              borderRadius: 8,
              border: "none",
              background: darkMode ? "rgba(255,255,255,0.1)" : "#f3f3f3",
              color: darkMode ? "#fff" : "#111",
              fontSize: 12,
              cursor: "pointer",
            }}
          >
            {showCredentials ? "Hide Credentials" : "Show Credentials"}
          </button>
        )}

        {/* CREDENTIAL BOX */}
        {showCredentials && (
          <div
            style={{
              marginTop: 10,
              padding: "10px",
              borderRadius: 10,
              background: darkMode ? "rgba(0,0,0,0.5)" : "#f5f5f5",
              color: darkMode ? "#fff" : "#111",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            <p>Username: rahul</p>
            <p>Password: rahul@2021</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
