import { useState } from "react";
import "./index.css";

const ProjectCard = ({
  title,
  description,
  image,
  github,
  live,
  credential,
}) => {
  const [showCredentials, setShowCredentials] = useState(false);

  return (
    <div className="btn-gap container1">
      <div className="col-md-4 mb-4">
        <div className="card" style={{ background: "#c8e8e9" }}>
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={github} className="btn btn-primary ms-2">
              View on GitHub
            </a>
            <a href={live} className="btn btn-success ml-2 ms-2">
              Live Demo
            </a>
            {credential && (
              <button
                className="btn btn-info ml-2 ms-2 mt-2"
                onClick={() => setShowCredentials(!showCredentials)}
              >
                Application Credential
              </button>
            )}
            {showCredentials && (
              <div className="text-center text-gray mt-3">
                <p>Username: rahul</p>
                <p>Password: rahul@123</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
