import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Solomon from "../../assets/solomon.png";

const About = () => {
  return (
    <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        id="about"
        className="container mt-5"
      >
        <h2 className="text-center mb-5">About Me</h2>

        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={Solomon}
              alt="profile"
              className="img-fluid rounded-circle"
              style={{ width: "200px" }}
            />
          </div>

          <div className="col-md-8">
            <p>
              Hello! I'm <strong>Solomon</strong>, a passionate
              <strong> MERN Stack Developer</strong>. I enjoy building modern
              full stack web applications using React, Node.js and MongoDB.
            </p>

            <p>
              I have experience building projects like E-Commerce applications,
              Job search platforms, and Event management systems.
            </p>

            <p>
              My goal is to create scalable, responsive and user-friendly web
              applications.
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default About;
