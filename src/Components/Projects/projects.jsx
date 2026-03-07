import ProjectCard from "../ProjectCard/ProjectCard";
import project from "../../Data/projects";
import { motion } from "framer-motion";
import "./index.css";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="container mt-5"
    >
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="projects-grid">
        {project.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
