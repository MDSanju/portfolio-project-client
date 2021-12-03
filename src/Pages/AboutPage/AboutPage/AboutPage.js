import React from "react";
import About from "../../Home/About/About";
import Address from "../../Home/Address/Address";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AboutMeBanner from "../AboutMeBanner/AboutMeBanner";

const AboutPage = () => {
  return (
    <div>
      <title>About Me || MERN Stack Developer</title>
      <Navbar></Navbar>
      <AboutMeBanner></AboutMeBanner>
      <About></About>
      <Address></Address>
      <Footer></Footer>
    </div>
  );
};

export default AboutPage;
