import { Link } from "react-router-dom";
import Hero from "../Hero/hero";
import Skills from "../Skills/skills";
import About from "../About/about";

const Home = () => {
  return (
    <>
      <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
        <Hero />
        <About />
        <Skills />
      </Link>
    </>
  );
};
export default Home;
