import React from "react";
import resume from "../../../MERN_Stack_Developer_Resume.pdf";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="hero">
      <div className="hero container">
        <div>
          <h1>
            MERN Stack Developer! <span></span>
          </h1>

          <h1>
            MD Sanju <span></span>
          </h1>
          <a
            href={resume}
            download="md_sanju_resume.pdf"
            type="button"
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
