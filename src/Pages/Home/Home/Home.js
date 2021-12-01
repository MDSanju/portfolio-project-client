import React, { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
