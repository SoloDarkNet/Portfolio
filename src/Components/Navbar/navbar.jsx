import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/context";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./index.css";

const WebNavbar = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  // This is Webpage View Navbar
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: darkMode ? "navbar" : "nav-dark" }}
    >
      <div className="container">
        <a className="navbar-brand text-white">Solomon</a>
        <div className="d-flex">
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
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "18px",
              color: "white",
            }}
            className="icon-button ms-3"
          >
            {darkMode ? (
              <FaSun style={{ color: "yellow", fontSize: "25px" }} />
            ) : (
              <FaMoon style={{ color: "#bdbdc6", fontSize: "25px" }} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const MobileNavbar = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: darkMode ? "navbar" : "nav-dark" }}
    >
      <div className="container">
        <a className="navbar-brand text-white">Solomon</a>
        <div>
          <button
            className="hamburger-button"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoCloseCircleOutline
                style={{ color: "white", fontSize: "25px", border: "none" }}
              />
            ) : (
              <FaBars style={{ color: "white", fontSize: "25px" }} />
            )}
          </button>
          <div>
            {isOpen && (
              <ul className="navbar-nav listed-gap">
                <li>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Skills
                  </Link>
                </li>
                <Link
                  to="/projects"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <li> Projects</li>
                </Link>
                <li>
                  <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "20px",
              color: "white",
            }}
            className="icon-button mt-2"
          >
            {darkMode ? (
              <FaSun style={{ color: "yellow", fontSize: "25px" }} />
            ) : (
              <FaMoon style={{ color: "#bdbdc6", fontSize: "25px" }} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile ? <MobileNavbar /> : <WebNavbar />}</>;
};

export default Navbar;
