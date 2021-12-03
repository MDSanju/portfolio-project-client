import React from "react";
import resume from "../../../finalResume.pdf";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img src="https://i.ibb.co/bHLXxCC/website-Img.png" alt="img" />
          </div>
        </div>
        <div className="col-right">
          <h1 className="section-title">
            About <span>me</span>
          </h1>
          <h2>MERN Stack Developer</h2>
          <p>
            Hi, It's me Sanju. I am a Junior MERN Stack Developer. I have
            developed a few more websites featuring React.js, Node.js,
            Express.js and connected the MongoDB database to the Express server
            for the backend management. I have worked with CSS frameworks such
            as Bootstrap Tailwind CSS, Material-UI for making websites
            responsive.
          </p>
          <a
            href={resume}
            download="md_sanju_resume.pdf"
            type="button"
            className="download-resume-about-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
