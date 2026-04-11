import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./Components/Navbar/navbar";
import Projects from "./Components/Projects/projects";
import Contact from "./Components/Contacts/contact";
import Footer from "./Components/Footer";
import About from "./Components/About/about";
import { AppContext } from "./Context/context";
import Skills from "./Components/Skills/skills";
import "./App.css";
import Home from "./Components/Home/home";

const App = () => {
  const { darkMode } = useContext(AppContext);

  return (
    <div
      className={darkMode ? "dark" : "light"}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />

      {/* paddingTop: 64px — Navbar fixed position, content overlap ஆகாம */}
      <main style={{ flex: 1, paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* /home → redirect to / */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          {/* Any unknown route → home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
