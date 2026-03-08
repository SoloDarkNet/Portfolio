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
import "./skills.css";

const Skills = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <Link
      to="/skills"
      style={{
        textDecoration: "none",
        color: darkMode ? "#000" : "inherit",
      }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mt-5 skill-card div-card"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
            : "#2c5364",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{ color: darkMode ? "#fff" : "#000" }}
        >
          Skills
        </h2>

        <motion.div
          className="skill-card"
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #85a9a8, #b2d2d3)"
              : "linear-gradient(135deg, #d3fbfb, #c9ecec)",
          }}
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(135deg, #8b9dee, #8d6dae)",
          }}
          whileTap={{ scale: 0.8 }}
        >
          <h3>Frontend</h3>

          <p>
            React <FaReact style={{ color: "#34c0c7", fontSize: "23px" }} />
          </p>
          <p>
            HTML
            <FaHtml5 style={{ color: "rgb(207, 79, 79)", fontSize: "21px" }} />
          </p>
          <p>
            CSS <FaCss3Alt style={{ color: "#8a3ca0", fontSize: "21px" }} />
          </p>
          <p>
            Javascript <FaJs style={{ color: "#c8b942", fontSize: "21px" }} />
          </p>
        </motion.div>

        <motion.div
          className="skill-card mt-3"
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(45deg, #134e5e, #71b280)",
          }}
          whileTap={{ scale: 0.8 }}
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #85a9a8, #b2d2d3)"
              : "linear-gradient(135deg, #d3fbfb, #c9ecec)",
          }}
        >
          <h3>Backend</h3>

          <p>
            Node.js
            <FaNodeJs style={{ color: "#387c43", fontSize: "21px" }} />
          </p>
          <p>
            Express.js
            <SiExpress style={{ color: "#38a13b", fontSize: "21px" }} />
          </p>
          <p>
            Python <SiPython style={{ color: "#6352c0", fontSize: "21px" }} />
          </p>
        </motion.div>

        <motion.div
          className="skill-card mt-4"
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(135deg, #8054a5, #9587b2)",
          }}
          whileTap={{ scale: 0.8 }}
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #85a9a8, #b2d2d3)"
              : "linear-gradient(135deg, #d3fbfb, #c9ecec)",
          }}
        >
          <h3>Database</h3>

          <p>
            MongoDB
            <SiMongodb style={{ color: "#548e64", fontSize: "21px" }} />
          </p>
          <p>
            Sql <FaDatabase style={{ color: "#c842a0", fontSize: "21px" }} />
          </p>
        </motion.div>

        <motion.div
          className="skill-card mt-4"
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(45deg, #daab71, #f8e27f)",
          }}
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #85a9a8, #b2d2d3)"
              : "linear-gradient(135deg, #d3fbfb, #c9ecec)",
          }}
          whileTap={{
            scale: 0.8,
            background: "linear-gradient(45deg, #daab71, #f8e27f)",
          }}
        >
          <h3>Tools</h3>

          <p>
            Git <FaGitAlt style={{ color: "#9473b4", fontSize: "21px" }} />
          </p>
          <p>
            Vs Code
            <DiVisualstudio style={{ color: "#78dbeb", fontSize: "21px" }} />
          </p>
          <p>
            Postman
            <SiPostman style={{ color: "#f18553", fontSize: "21px" }} />
          </p>
        </motion.div>
      </motion.div>
    </Link>
  );
};
export default Skills;
