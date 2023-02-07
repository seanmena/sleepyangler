import React from "react";
import navlogo from "../assets/images/Circle Black.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className="nav-logo">
          <img className="nav-img" src={navlogo} alt="small circle logo"></img>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Sleepy
          </a>
        </li>
      </nav>
    </div>
  );
}
