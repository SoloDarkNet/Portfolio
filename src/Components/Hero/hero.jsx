import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
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
          className="btn btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Projects
        </motion.button>
      </Link>
    </div>
  );
};
export default Hero;
