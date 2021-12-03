import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Detail from "../Detail/Detail";
import DetailBanner from "../DetailBanner/DetailBanner";

const DetailPage = () => {
  return (
    <div>
      <title>Project View || MERN Stack Developer</title>
      <Navbar></Navbar>
      <DetailBanner></DetailBanner>
      <Detail></Detail>
      <Footer></Footer>
    </div>
  );
};

export default DetailPage;
