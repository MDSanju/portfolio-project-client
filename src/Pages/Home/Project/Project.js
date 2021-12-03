import React from "react";
import { useNavigate } from "react-router";

const Project = ({ project }) => {
  const { _id, title, image, serial, description } = project;
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${_id}`);
  };
  return (
    <div className="project-item">
      <div className="project-info">
        <h1>Project {serial}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          onClick={handleDetail}
          className="app-form-button"
          style={{ margin: "20px 0", fontSize: "20px" }}
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
