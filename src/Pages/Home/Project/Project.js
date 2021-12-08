import React from "react";
import { useNavigate } from "react-router";
import "./Project.css";

const Project = ({ project }) => {
  const { _id, title, image, serial, feature1, feature2, feature3 } = project;
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
            <li>{feature1}</li>
            <li>{feature2}</li>
            <li>{feature3}</li>
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
