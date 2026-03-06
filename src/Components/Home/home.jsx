import { Link } from "react-router-dom";
import Hero from "../Hero/hero";
import Skills from "../Skills/skills";

const Home = () => {
  return (
    <>
      <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
        <Hero />
        <Skills />
      </Link>
    </>
  );
};
export default Home;
