import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ScreenshotBanner from "../ScreenshotBanner/ScreenshotBanner";
import "./Screenshot1.css";

const Screenshot1 = () => {
  const { projectId } = useParams();
  const [screenshot, setScreenshot] = useState({});

  useEffect(() => {
    fetch(`https://quiet-shelf-64321.herokuapp.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => setScreenshot(data));
  }, [projectId]);

  return (
    <>
      <title>Screenshot 01 || MERN Stack Developer</title>
      <Navbar></Navbar>
      <ScreenshotBanner></ScreenshotBanner>

      <div className="screenshot-1-img-page">
        <img src={screenshot.screenshot1} alt="" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Screenshot1;
