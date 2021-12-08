import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch(`https://quiet-shelf-64321.herokuapp.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, [projectId]);
  return (
    <div
      className={styles.projectViewBody}
      style={{ paddingTop: "135px", paddingBottom: "185px" }}
    >
      <div>
        <div className={styles.detail__body}>
          <div className={styles.project_detail_info}>
            <div className={styles.project_detail_info__img}>
              <img className={styles.project__img} src={project.image} alt="" />
            </div>
            <div className="detail-info__text">
              <h1 className={styles.detailInfo__title}>
                <span style={{ color: "black" }}>PROJECT</span> INFO
              </h1>
              <p
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
                className={styles.detailInfo__description}
              >
                FEATURES:
              </p>
              <div className={styles.detailInfo__description}>
                <ul style={{ marginLeft: "25px" }}>
                  <li style={{ marginBottom: "10px" }}>{project.feature1}</li>
                  <li style={{ marginBottom: "10px" }}>{project.feature2}</li>
                  <li style={{ marginBottom: "10px" }}>{project.feature3}</li>
                  <li style={{ marginBottom: "10px" }}>{project.feature4}</li>
                  <li style={{ marginBottom: "10px" }}>{project.feature5}</li>
                </ul>
              </div>
              <p className={styles.detailInfo__description}>
                <span style={{ color: "black", fontWeight: "bold" }}>
                  TECHNOLOGY USED:
                </span>{" "}
                {project.technologies}
              </p>
              <a
                href={project.website_link}
                target="_blank"
                className={styles.websiteLive__link}
              >
                Website Link
              </a>
              <a
                href={project.client_code}
                target="_blank"
                className={styles.websiteLive__link}
              >
                Client code
              </a>
              <a
                href={project.server_code}
                target="_blank"
                className={styles.websiteLive__link}
              >
                Server code
              </a>
            </div>
          </div>
        </div>
        <h1
          className="blog-title"
          style={{ marginTop: "175px", marginBottom: "35px" }}
        >
          PROJECT <span style={{ color: "crimson" }}>SCREENSHOTS</span>
        </h1>
        <div className={styles.gallery}>
          <Link to={`/screenshot1/${project._id}`} className={styles.imgLink}>
            <img src={project.screenshot1} alt="" />
          </Link>
          <Link to={`/screenshot2/${project._id}`} className={styles.imgLink}>
            <img src={project.screenshot2} alt="" />
          </Link>
          <Link to={`/screenshot3/${project._id}`} className={styles.imgLink}>
            <img src={project.screenshot3} alt="" />
          </Link>
          <Link to={`/screenshot4/${project._id}`} className={styles.imgLink}>
            <img src={project.screenshot4} alt="" />
          </Link>
          <Link to={`/screenshot5/${project._id}`} className={styles.imgLink}>
            <img src={project.screenshot5} alt="" />
          </Link>
          <Link to={`/screenshot6/${project._id}`} className={styles.imgLink}>
            <img src={project.screenshot6} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
