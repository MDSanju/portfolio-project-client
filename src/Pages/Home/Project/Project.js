import React from "react";
import { useNavigate } from "react-router";
import "./Project.css";

const Project = ({ project }) => {
  const { _id, title, image, serial } = project;
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${_id}`);
  };
  return (
    <div className="project-item">
      <div className="project-info">
        <h1>Project {serial}</h1>
        <h2>{title}</h2>
        <div className="project-features-container">
          <h3 className="features-project-title">Features:</h3>
          <ol className="entair-project-features">
            <li>Hello world!</li>
            <li>How are you?</li>
            <li>How you doing?</li>
          </ol>
        </div>
        <button
          onClick={handleDetail}
          className="project-detail-btn"
          style={{ fontSize: "20px", margin: "0" }}
        >
          Detail
        </button>
      </div>
      <div className="project-img">
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default Project;
