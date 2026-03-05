import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contacts/contact";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <Projects />
      <Contact />
    </div>
  );
};

export default App;
