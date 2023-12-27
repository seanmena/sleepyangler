import React from "react";
import "./Home.css";
import fish from "../assets/images/IMG_0872.jpeg";
import biglogo from "../assets/images/white-logo.png";
import Navbar from "./Navbar";
import Card from "./Card";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img className="bkg-img" src={fish} alt="trout"></img>
        <img className="big-logo fade-in" src={biglogo} alt="logo"></img>
      </div>
      <Card />
      <Gallery />
      <Footer />
    </div>
  );
}
