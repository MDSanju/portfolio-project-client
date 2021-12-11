import React from "react";
import "./SkillProgressBar.css";

const SkillProgressBar = () => {
  return (
    <div>
      <div>
        <h2 className="skill-header-title">
          SKILLS & PROFI<span style={{ color: "crimson" }}>CIENCIES</span>
        </h2>

        <div className="skill-body">
          <img
            src="https://i.ibb.co/DMvjhdL/freelancer-business-person-sitting-working-alone-25147-29.jpg"
            className="skill-image"
            alt=""
          />
          <div className="progress-bar">
            <div className="skills-bar">
              <div className="skill-bar">
                <div className="skill-bar-name">JAVASCRIPT</div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-per"
                    per="95%"
                    style={{ maxWidth: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-name">Bootstrap</div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-per"
                    per="98%"
                    style={{ maxWidth: "98%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-name">React</div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-per"
                    per="95%"
                    style={{ maxWidth: "95%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-name">Node.js</div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-per"
                    per="86%"
                    style={{ maxWidth: "86%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-name">Express.js</div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-per"
                    per="93%"
                    style={{ maxWidth: "93%" }}
                  ></div>
                </div>
              </div>
              <div className="skill-bar">
                <div className="skill-bar-name">MongoDB</div>
                <div className="skill-progress-bar">
                  <div
                    className="skill-per"
                    per="82%"
                    style={{ maxWidth: "82%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
