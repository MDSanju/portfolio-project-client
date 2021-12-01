import React from "react";
import Banner from "../../Home/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import LoginPage from "../LoginPage/LoginPage";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <LoginPage></LoginPage>
    </div>
  );
};

export default Login;
