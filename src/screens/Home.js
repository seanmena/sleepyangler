// import React, { useEffect, useState } from "react";
import slpa from "../assets/slpa.png";
import logo from "../assets/logo.png";
import circle from "../assets/circle.png";
import "./Home.css";
import Gallery from "./Gallery";
import Contact from "./Contact";
// import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <div className="container">
        <img className="circle" src={circle} alt="circle" />
        <img className="logo" src={logo} alt="logo" />
        <img className="slpa" src={slpa} alt="slpa" />
      </div>
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
