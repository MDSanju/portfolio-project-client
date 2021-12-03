import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="body">
      <h1
        style={{
          textAlign: "center",
          marginTop: "48px",
          marginBottom: "18px",
          fontSize: "6rem",
          fontWeight: "500",
        }}
      >
        SKILLS <span style={{ color: "crimson" }}>& </span>PROFIC
        <span style={{ color: "crimson" }}>I</span>
        ENCIES
      </h1>
      <div id="my-skils">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="https://i.ibb.co/Wxjs58q/1200px-HTML5-Shiny-Icon-svg.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co/vYqwBRy/CSS3-icon.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co/fngh43B/logo-03.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co/Dk7cjRG/logo-04.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co/g93GLWQ/1611079.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co/m00XYG3/Untitled-design-8.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co/n6CYn11/logo-09.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co/0qLtTn9/Untitled-design-12.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://i.ibb.co/GPWYFRS/mongodb-logo.png"
                height="100"
                width="100"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
