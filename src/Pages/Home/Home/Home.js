import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Address from "../Address/Address";
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import SkillProgressBar from "../SkillProgressBar/SkillProgressBar";

const Home = () => {
  return (
    <div>
      <title>Home || MERN Stack Developer</title>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <About></About>
      <SkillProgressBar></SkillProgressBar>
      <Address></Address>
      <Footer></Footer>
    </div>
  );
};

export default Home;
