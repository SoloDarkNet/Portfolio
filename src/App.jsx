import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/hero";
import Skills from "./Components/Skills/skills";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contacts/contact";
import Footer from "./Components/Footer";
import About from "./Components/About/about";
const App = () => {
  return (
    <div>
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
