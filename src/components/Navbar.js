import React from "react";
import navlogo from "../assets/images/Circle Black.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li className="nav-logo">
            <img
              className="nav-img"
              src={navlogo}
              alt="small circle logo"
            ></img>
          </li>
          <li className="nav-item">
            <a href="/">HOME</a>
          </li>
          <li className="nav-item">
            <a href="/">CONTACT</a>
          </li>
          <li className="nav-item nav-end">
            <a href="/">SLEEPY</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
