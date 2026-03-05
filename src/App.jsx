import { useContext } from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contacts/contact";
import Footer from "./Components/Footer";
import About from "./Components/About/about";
import { AppContext } from "./Context/context";
import "./App.css";

const App = () => {
  const {darkMode} = useContext(AppContext);
  return (
    <div className={darkMode? "dark" : "light"}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
