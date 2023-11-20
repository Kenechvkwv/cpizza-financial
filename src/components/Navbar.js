import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "./images/logo.png";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" width={80} />
        </a>
        <div className="hamburger">
          <FaBars />
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/">About</a>
          </li>
          <li className="nav-item">
            <a href="/">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
