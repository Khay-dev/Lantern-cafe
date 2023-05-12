// import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaConciergeBell, FaTimes } from "react-icons/fa";
import { useRef } from "react";

import "./Nav.css";

const Nav = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
    return (
      <>
    <nav>
      <div className="nav-holder-1">LOGO</div>
      <div className="nav-holder-2">
        {" "}
        <button className="nav-btn " onClick={showNavbar}>
          <FaBars />
        </button>
      </div>

      <div className="main-nav" ref={navRef}>
        <div className="first-main">
          <div className="logo-div">LOGO</div>
        </div>
        <div className="nav-menu">
          <button className=" nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <div className="nav-menu-main">
            <div className="nav-22">
              <span>01</span>
              <p> Home</p>
            </div>
            <div className="nav-22">
              <span>02</span>
              <p>Menu</p>
            </div>
            <Link to="/gallery">
              <div className="nav-22">
                <span>03</span>
                <p>Gallery</p>
              </div>
            </Link>
            <div className="nav-22">
              <span>04</span>
              <p>Contact</p>
            </div>
            <div className="nav-22">
              <a href="mailto:xxxxxxxxxxxx.com">
                <span>05</span>
                <p>Reservation</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-holder-3">
        <a href="mailto:xxxxxxxxxxxx.com">
          <div className="book">
            <FaConciergeBell />
            <p>Reservation</p>
          </div>
        </a>
      </div>
            </nav>
            </>
  );
};

export default Nav;
