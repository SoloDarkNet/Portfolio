import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/context";
import { FaMoon, FaSun } from "react-icons/fa";
import "./index.css";
const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand text-white">Solomon</a>
        <ul className="navbar-nav listed-gap">
          <li className="nav-item">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>

          <li className="nav-item text-white">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </li>
          <li className="nav-item text-white">
            <Link
              to="/skills"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Skills
            </Link>
          </li>

          <li className="nav-item text-white">
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Projects
            </Link>
          </li>

          <li className="nav-item text-white">
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "20px",
              color: "white",
            }}
          >
            {darkMode ? (
              <FaSun style={{ color: "yellow" }} />
            ) : (
              <FaMoon style={{ color: "#3a46cd" }} />
            )}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
