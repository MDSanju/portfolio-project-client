import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});


  const port1 = {
    backgroundImage: `url(${project.screenshot1})`,
  };
  const port2 = {
    backgroundImage: `url(${project.screenshot2})`,
  };
  const port3 = {
    backgroundImage: `url(${project.screenshot3})`,
  };
  const port4 = {
    backgroundImage: `url(${project.screenshot4})`,
  };
  const port5 = {
    backgroundImage: `url(${project.screenshot5})`,
  };
  const port6 = {
    backgroundImage: `url(${project.screenshot6})`,
  };

  useEffect(() => {
    fetch(`https://portfolio-project-server.onrender.com/projects/${projectId}`)
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
      </div>
      <section className={styles.portfolio}>
        <div className={styles.portfolioHeader}>
          <h3>
            PROJECT <span style={{ color: "crimson" }}>SCREENSHOTS</span>
          </h3>
        </div>

        <div className={styles.firstRow}>
          <div className={styles.port1} style={port1}>
            <div className={styles.overlay}>
              <Link
                to={`/screenshot1/${project._id}`}
                className={styles.linkOfImg}
              >
                See Big
              </Link>
            </div>
          </div>
          <div className={styles.port2} style={port2}>
            <div className={styles.overlay}>
              <Link
                to={`/screenshot2/${project._id}`}
                className={styles.linkOfImg}
              >
                See Big
              </Link>
            </div>
          </div>
          <div className={styles.port3} style={port3}>
            <div className={styles.overlay}>
              <Link
                to={`/screenshot3/${project._id}`}
                className={styles.linkOfImg}
              >
                See Big
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.secondRow}>
          <div className={styles.port4} style={port4}>
            <div className={styles.overlay}>
              <Link
                to={`/screenshot4/${project._id}`}
                className={styles.linkOfImg}
              >
                See Big
              </Link>
            </div>
          </div>
          <div className={styles.port5} style={port5}>
            <div className={styles.overlay}>
              <Link
                to={`/screenshot5/${project._id}`}
                className={styles.linkOfImg}
              >
                See Big
              </Link>
            </div>
          </div>
          <div className={styles.port6} style={port6}>
            <div className={styles.overlay}>
              <Link
                to={`/screenshot6/${project._id}`}
                className={styles.linkOfImg}
              >
                See Big
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
