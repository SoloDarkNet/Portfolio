import { useState } from "react";
import eventImg from "../../assets/event.png";
import "./index.css";

const Projects = () => {
  const [showCredentials, setShowCredentials] = useState(null);
  console.log(showCredentials);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">My Projects</h2>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="card-img-top card_image"
              alt="project"
            />

            <div className="card-body">
              <h5 className="card-title">Nxt Trendz</h5>

              <p className="card-text">E-Commerce Web Application</p>

              <a
                href="https://enhancement-of-nxt-trendz-payment5.onrender.com"
                className="btn btn-primary me-2"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/SoloDarkNet/Enhancement-of-Nxt-Trendz---Payment"
                className="btn btn-dark"
              >
                GitHub
              </a>
              <button
                className="btn btn-info ms-2"
                data-bs-toggle="modal"
                data-bs-target="#applicationCredentialsModal"
                onClick={() => setShowCredentials(2)}
              >
                Application Credentials
              </button>
              {showCredentials === 2 && (
                <div className="text-center mt-3">
                  <p>Username: rahul</p>
                  <p>Password: rahul@123</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
              className="card-img-top"
              alt="project"
            />

            <div className="card-body">
              <h5 className="card-title">Jobby App</h5>

              <p className="card-text">Job Search Platform</p>

              <a
                href="https://solokingtechs.ccbp.tech"
                className="btn btn-primary me-2"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/SoloDarkNet/Enhancement-Of-Jobby-App"
                className="btn btn-dark"
              >
                GitHub
              </a>
              <button
                className="btn btn-info ms-2"
                data-bs-toggle="modal"
                data-bs-target="#applicationCredentialsModal"
                onClick={() => setShowCredentials(1)}
              >
                Application Credentials
              </button>
              {showCredentials === 1 && (
                <div className="text-center mt-3">
                  <p>Username: rahul</p>
                  <p>Password: rahul@123</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src={eventImg}
              className="card-img-top card_image "
              alt="project"
            />

            <div className="card-body">
              <h5 className="card-title">Event Management Application</h5>

              <p className="card-text">Full Stack CRUD System</p>

              <a
                href="https://events-management-applications.onrender.com/"
                className="btn btn-primary me-2"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/SoloDarkNet/Event-Management-Application
"
                className="btn btn-dark"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
              className="card-img-top card_image "
              alt="project"
            />

            <div className="card-body">
              <h5 className="card-title">Movies App</h5>

              <p className="card-text">
                Personal developer portfolio using React.
              </p>

              <a
                href="https://enhancement-of-movie-database-app1-pber.onrender.com"
                className="btn btn-primary me-2"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/SoloDarkNet/Enhancement-of-Movie-Database-App"
                className="btn btn-dark"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
