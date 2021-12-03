import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Detail.css";

const Detail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`https://quiet-shelf-64321.herokuapp.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [projectId]);
  return (
    <div>
      <img src={project.image} alt="" />
    </div>
  );
};

export default Detail;
