import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./hero.css";
const Hero = () => {
  const navigate = useNavigate();

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const gitHubLink = () => {
    const link = document.createElement("a");
    link.href = "https://github.com/SoloDarkNet";
    link.click();
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <div id="home" className="container text-center mt-5">
      <motion.h1
        className="display-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi, I'm Solomon
      </motion.h1>
      <motion.p
        className="lead"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        MERN Stack Developer
      </motion.p>

      <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
        <motion.button
          className="btn-color"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Projects
        </motion.button>
      </Link>

      <motion.button
        onClick={downloadResume}
        className="btn-color ms-5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Download Resume
      </motion.button>

      <motion.button
        className="btn-color btnColor ms-5 mt-4 me-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={gitHubLink}
      >
        GitHub
      </motion.button>
    </div>
  );
};
export default Hero;
