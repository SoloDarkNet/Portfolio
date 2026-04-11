import { useContext, useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../Context/context";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const s = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: "all 0.3s ease",
      background: scrolled
        ? darkMode
          ? "rgba(10,15,26,0.92)"
          : "rgba(255,255,255,0.92)"
        : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled
        ? darkMode
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid rgba(0,0,0,0.07)"
        : "1px solid transparent",
      boxShadow: scrolled
        ? darkMode
          ? "0 4px 24px rgba(0,0,0,0.3)"
          : "0 4px 24px rgba(0,0,0,0.06)"
        : "none",
    },
    inner: {
      maxWidth: "1100px",
      margin: "0 auto",
      padding: "0 clamp(1rem, 4vw, 2rem)",
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    brand: {
      fontSize: "clamp(18px, 3.5vw, 22px)",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      textDecoration: "none",
      background: "linear-gradient(135deg, #378ADD, #00c6ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    desktopLinks: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(8px, 2.5vw, 28px)",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    linkBase: {
      textDecoration: "none",
      fontSize: "clamp(13px, 1.8vw, 14px)",
      fontWeight: 500,
      letterSpacing: "0.02em",
      padding: "6px 2px",
      position: "relative",
      transition: "color 0.2s ease",
    },
    right: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    themeBtn: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.12)"
        : "1px solid rgba(0,0,0,0.1)",
      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 0.2s ease",
    },
    hamburger: {
      width: "38px",
      height: "38px",
      borderRadius: "10px",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.12)"
        : "1px solid rgba(0,0,0,0.1)",
      background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    mobileMenu: {
      position: "absolute",
      top: "calc(100% + 8px)",
      left: "clamp(1rem, 4vw, 2rem)",
      right: "clamp(1rem, 4vw, 2rem)",
      background: darkMode ? "rgba(15,22,36,0.97)" : "rgba(255,255,255,0.98)",
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      border: darkMode
        ? "1px solid rgba(255,255,255,0.1)"
        : "1px solid rgba(0,0,0,0.08)",
      borderRadius: "18px",
      boxShadow: darkMode
        ? "0 20px 60px rgba(0,0,0,0.5)"
        : "0 20px 48px rgba(0,0,0,0.12)",
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    mobileLink: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px",
      borderRadius: "12px",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: 500,
      transition: "background 0.2s ease",
    },
  };

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  const linkColor = (to) => {
    if (isActive(to)) return "#378ADD";
    return darkMode ? "rgba(255,255,255,0.75)" : "rgba(13,27,42,0.7)";
  };

  return (
    <nav style={s.nav} ref={menuRef}>
      <style>{`
        @media (max-width: 640px) { .nav-desktop { display: none !important; } .nav-hamburger { display: flex !important; } }
        @media (min-width: 641px) { .nav-desktop { display: flex !important; } .nav-hamburger { display: none !important; } }
        .nav-link-item::after {
          content: ""; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; border-radius: 2px;
          background: linear-gradient(90deg, #378ADD, #00c6ff);
          transform: scaleX(0); transition: transform 0.25s ease;
        }
        .nav-link-item:hover::after, .nav-link-active::after { transform: scaleX(1) !important; }
        .mobile-link-item:hover { background: ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}; }
      `}</style>

      <div style={s.inner}>
        {/* Brand */}
        <Link to="/" style={s.brand}>
          Solomon
        </Link>

        {/* Desktop nav */}
        <ul
          className="nav-desktop"
          style={{ ...s.desktopLinks, display: "none" }}
        >
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`nav-link-item ${isActive(to) ? "nav-link-active" : ""}`}
                style={{ ...s.linkBase, color: linkColor(to) }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={s.right}>
          {/* Theme toggle */}
          <motion.button
            style={s.themeBtn}
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
          >
            {darkMode ? (
              <FaSun style={{ color: "#facc15", fontSize: "16px" }} />
            ) : (
              <FaMoon style={{ color: "#7c9cbf", fontSize: "16px" }} />
            )}
          </motion.button>

          {/* Hamburger */}
          <motion.button
            className="nav-hamburger"
            style={{ ...s.hamburger, display: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.93 }}
          >
            {menuOpen ? (
              <FaTimes
                style={{
                  color: darkMode ? "#fff" : "#0d1b2a",
                  fontSize: "15px",
                }}
              />
            ) : (
              <FaBars
                style={{
                  color: darkMode ? "#fff" : "#0d1b2a",
                  fontSize: "15px",
                }}
              />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ position: "relative", zIndex: 999 }}
          >
            <div style={s.mobileMenu}>
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="mobile-link-item"
                  style={{
                    ...s.mobileLink,
                    color: isActive(to)
                      ? "#378ADD"
                      : darkMode
                        ? "rgba(255,255,255,0.8)"
                        : "#0d1b2a",
                    background: isActive(to)
                      ? darkMode
                        ? "rgba(55,138,221,0.1)"
                        : "rgba(55,138,221,0.06)"
                      : "transparent",
                  }}
                >
                  {label}
                  {isActive(to) && (
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#378ADD",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
