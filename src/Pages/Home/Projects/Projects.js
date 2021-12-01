import React, { useEffect, useState } from "react";
import Project from "../Project/Project";
import PuffLoader from "react-spinners/PuffLoader";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://quiet-shelf-64321.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title">
            Recent <span>Projects</span>
          </h1>
        </div>
        {projects.length ? (
          <div className="all-projects">
            {projects.map((project) => (
              <Project key={project._id} project={project}></Project>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <PuffLoader color={"crimson"} size={60} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
