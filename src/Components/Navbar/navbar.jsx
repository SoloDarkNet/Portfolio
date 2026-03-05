import { useContext } from "react";
import { AppContext } from "../../Context/context";

const Navbar = () => {
const {darkMode, setDarkMode} = useContext(AppContext);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand text-white">Solomon</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#home" className="nav-link text-white">
              Home
            </a>
          </li>

          <li className="nav-item text-white">
            <a href="#about" className="nav-link text-white">
              About
            </a>
          </li>
          <li className="nav-item text-white">
            <a href="#skills" className="nav-link text-white">
              Skills
            </a>
          </li>

          <li className="nav-item text-white">
            <a href="#projects" className="nav-link text-white">
              Projects
            </a>
          </li>

          <li className="nav-item text-white">
            <a className="nav-link text-white" href="#contact">
              Contact
            </a>
          </li>
          <button onClick={setDarkMode(true)}>Toggle Theme</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
