import React, { useEffect, useState } from "react";
import Project from "../Project/Project";
import PuffLoader from "react-spinners/PuffLoader";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-project-server.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <section id="projects">
      <div className="projects container">
        <div className="projects-header">
          <h1 className="section-title" style={{ marginBottom: "50px" }}>
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
              marginTop: "38px",
            }}
          >
            <PuffLoader color={"crimson"} size={60} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
