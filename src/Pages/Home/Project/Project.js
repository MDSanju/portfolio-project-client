import React from "react";

const Project = ({ project }) => {
  const { title, image, serial, description } = project;
  return (
    <div className="project-item">
      <div className="project-info">
        <h1>Project {serial}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="project-img">
        <img src={image} alt="img" />
      </div>
    </div>
  );
};

export default Project;
