import React, { useState } from "react";
import LogOut from "./LogOut";
import "./NavBar.css";
import { useUserAuth } from "./UserAuthContext";

const NavBar = () => {
  const { user } = useUserAuth();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  if (user) {
    return (
      <div>
        <div>
          <div
            className={click ? "hide-me" : "hamburger"}
            onClick={handleClick}
          >
            <div className="burger burger1" />
            <div className="burger burger2" />
            <div className="burger burger3" />
          </div>

          <div className={click ? "x-p" : "hide-me"} onClick={handleClick}>
            <div className="x x1" />
            <div className="x x2" />
          </div>

          <div id="nav-box" className={click ? "nav-menu active " : "navbar"}>
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/blog">Blog</a>
            </li>
            <li className="nav-item">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>

            <li className="nav-item">
              <a href="/editor">Editor</a>
            </li>

            <li className="nav-item">
              <LogOut />
            </li>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="nav-hero">
        <div className={click ? "hide-me" : "hamburger"} onClick={handleClick}>
          <div className="burger burger1" />
          <div className="burger burger2" />
          <div className="burger burger3" />
        </div>

        <div className={click ? "x-p" : "hide-me"} onClick={handleClick}>
          <div className="x x1" />
          <div className="x x2" />
        </div>

        <div id="nav-box" className={click ? "nav-menu active " : "navbar"}>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/blog">Blog</a>
          </li>
          <li className="nav-item">
            <a href="/gallery">Gallery</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
