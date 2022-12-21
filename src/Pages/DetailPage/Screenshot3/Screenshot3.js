import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ScreenshotBanner from "../ScreenshotBanner/ScreenshotBanner";

const Screenshot3 = () => {
  const { projectId } = useParams();
  const [screenshot, setScreenshot] = useState({});

  useEffect(() => {
    fetch(`https://portfolio-project-server.onrender.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setScreenshot(data));
  }, [projectId]);
  return (
    <>
      <title>Screenshot 03 || MERN Stack Developer</title>
      <Navbar></Navbar>
      <ScreenshotBanner></ScreenshotBanner>

      <div className="screenshot-1-img-page">
        <img src={screenshot.screenshot3} alt="" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Screenshot3;
