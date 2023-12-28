import React from "react";
import slpa from "../assets/slpa.png";
import logo from "../assets/logo.png";
import circle from "../assets/circle.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <img className="circle" src={circle} alt="circle" />
      <img className="logo" src={logo} alt="logo" />
      <img className="slpa" src={slpa} alt="slpa" />
    </div>
  );
};

export default Home;
