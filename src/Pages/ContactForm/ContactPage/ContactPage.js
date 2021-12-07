import React from "react";
import ContactForm from "../../Home/ContactForm/ContactForm";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ContactBanner from "../ContactBanner/ContactBanner";

const ContactPage = () => {
  return (
    <div>
      <title>Contact Me || MERN Stack Developer</title>
      <Navbar></Navbar>
      <ContactBanner></ContactBanner>
      <br />
      <br />
      <br />
      <br />
      <ContactForm></ContactForm>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};

export default ContactPage;
