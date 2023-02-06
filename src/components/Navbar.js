import React from "react";
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
        <li className="nav-item">
          <a className="nav-link" href="/">
            Sleepy
          </a>
        </li>
      </nav>
    </div>
  );
}
