import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import BlogBanner from "../BlogBanner/BlogBanner";
import Blogs from "../Blogs/Blogs";

const BlogPage = () => {
  return (
    <div>
      <title>Blogs || MERN Stack Developer</title>
      <Navbar></Navbar>
      <BlogBanner></BlogBanner>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default BlogPage;
