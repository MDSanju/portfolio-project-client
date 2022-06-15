import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="brand">
          <h1>
            <span>MD</span> Sa<span>n</span>ju
          </h1>
        </div>
        <h2>Your Complete Web Solution</h2>
        <div className="social-icon">
          <div className="social-item">
            <a href="https://www.facebook.com/md.sanju.509/">
              <img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://www.linkedin.com/in/mdsanju/">
              <img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://twitter.com/MERN_Stack_Dev">
              <img src="https://img.icons8.com/bubbles/344/twitter-circled.png" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://github.com/MDSanju">
              <img src="https://img.icons8.com/bubbles/100/000000/github.png" />
            </a>
          </div>
        </div>
        <p>Copyright © 2021 Sanju. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
