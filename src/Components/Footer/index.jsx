const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container text-center">
        <h5>Solomon</h5>
        <p>MERN Stack Developer</p>

        <div className="mb-3">
          <a
            href="https://github.com/SoloDarkNet"
            className="text-white me-3"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/solomon-d-s152535 "
            className="text-white me-3"
            target="_blank"
          >
            LinkedIn
          </a>

          <a href="mailto:dsolomongiri@email.com" className="text-white">
            dsolomongiri@gmail.com
          </a>
        </div>

        <p className="small">© 2026 Solomon. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
