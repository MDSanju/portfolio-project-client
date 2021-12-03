import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, logout, admin } = useAuth();
  const [navActive, setNavActive] = useState("");
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleClick = () => {
    if (navActive) {
      setNavActive(false);
    } else {
      setNavActive(true);
    }
  };

  document.addEventListener("scroll", () => {
    let scroll_position = window.scrollY;

    if (scroll_position > 100) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  });

  return (
    <div
      id="header"
      className={navbarBackground ? "bg-color-scroll" : "bg-color-stil"}
    >
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <Link to="/">
              <h1 className="logo">
                <span>MD</span> Sa<span>n</span>ju
              </h1>
            </Link>
          </div>
          <div className="nav-list">
            <div
              onClick={handleClick}
              className={navActive ? "hamburger active" : "hamburger"}
            >
              <div className="bar"></div>
            </div>
            <ul className={navActive ? "active" : ""}>
              <li>
                <Link to="/home" data-after="Home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" data-after="About">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/blogs" data-after="Blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" data-after="Contact">
                  Contact
                </Link>
              </li>
              {admin && (
                <li>
                  <Link to="/makeAdmin" data-after="Make Admin">
                    Make Admin
                  </Link>
                </li>
              )}

              {admin && (
                <li>
                  <Link to="/addProject" data-after="Add Project">
                    Add Project
                  </Link>
                </li>
              )}

              {admin && (
                <li>
                  {!user.email ? (
                    <Link to="/login" data-after="Login">
                      Login
                    </Link>
                  ) : (
                    <button
                      onClick={logout}
                      style={{
                        backgroundColor: "crimson",
                        color: "white",
                        marginRight: "20px",
                        padding: "10px 18px",
                        border: "none",
                        borderRadius: "2px",
                        cursor: "pointer",
                      }}
                    >
                      Logout
                    </button>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
