import { useContext } from "react";
import { AppContext } from "../../Context/context";
import Hero from "../Hero/hero";
import About from "../About/about";
import Skills from "../Skills/skills";
import Certifications from "../Certifications/certification";
import Contact from "../Contacts/contact";
import Projects from "../Projects/projects";

const Home = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div style={{ background: darkMode ? "#0a0f1a" : "#f4f7ff" }}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;
