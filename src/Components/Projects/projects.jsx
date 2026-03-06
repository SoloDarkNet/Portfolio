import ProjectCard from "../ProjectCard/ProjectCard";
import project from "../../Data/projects";
import "./index.css";

const Projects = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="projects-grid">
        {project.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
