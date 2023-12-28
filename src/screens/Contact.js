import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleClick = () => {
    console.log("you hit submit dog");
  };

  return (
    <div className="contact-container">
      <h1 className="con-title">CONTACT</h1>
      <div className="cont">
        <input className="inp top" placeholder="Your Name"></input>
        <br></br>
        <input className="inp" placeholder="Your Email"></input>
        <br></br>
        <input className="inp message" placeholder="Message"></input>
        <br></br>
        <button className="btn" onClick={handleClick}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Contact;
