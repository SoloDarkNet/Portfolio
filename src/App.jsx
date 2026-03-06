import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./Components/Navbar/navbar";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contacts/contact";
import Footer from "./Components/Footer";
import About from "./Components/About/about";
import { AppContext } from "./Context/context";
import "./App.css";
import Home from "./Components/Home/home";

const App = () => {
  const { darkMode } = useContext(AppContext);
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
