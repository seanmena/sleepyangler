import React from "react";
import "./Home.css";
import fish from "../assets/images/IMG_0872.jpeg";
import biglogo from "../assets/images/white-logo.png";
import card from "../assets/images/Business Card Front.png";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <img className="bkg-img" src={fish} alt="trout"></img>
        <img className="big-logo fade-in" src={biglogo} alt="logo"></img>
      </div>

      <div className="card-hero">
        <img className="img-card" src={card} alt="card"></img>
      </div>

      {/* <div className="contact-hero">
        <h1 className="contact-title">CONTACT</h1>
        <break></break>
        <p className="email">filler@filler.com</p>
      </div> */}
    </div>
  );
}
