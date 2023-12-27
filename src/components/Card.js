import React, { useState } from "react";
import card from "../assets/images/Business Card Front.png";
import back from "../assets/images/card-back.png";
import "./Card.css";

export default function Card() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <div className={click ? "hide-me" : "card-hero show-me"}>
        <img className="img-card" src={card} alt="card"></img>
        <h1 className="flip-card" onClick={handleClick}>
          FLIP
        </h1>
      </div>

      <div
        className={click ? "show-me" : "card-hero2 hide-me"}
        onClick={handleClick}
      >
        <img className="img-card" src={back} alt="card"></img>
        <h1 className="flip-card" onClick={handleClick}>
          FLIP
        </h1>
      </div>
    </div>
  );
}
