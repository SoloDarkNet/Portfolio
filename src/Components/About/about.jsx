import Solomon from "../../assets/solomon.png";

const About = () => {
  return (
    <div className="container mt-5" id="about">
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
            <strong> MERN Stack Developer</strong>. I enjoy building modern full
            stack web applications using React, Node.js and MongoDB.
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
    </div>
  );
};

export default About;
