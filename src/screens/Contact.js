import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
import "./Contact.css";

const Contact = () => {
  const contactCollectionRef = collection(db, "Contact");

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await addDoc(contactCollectionRef, {
        Name: newName,
        Email: newEmail,
        Message: newMessage,
      });
    } catch (e) {
      console.error("error", e);
    }
    alert("Message Sent!");
  };

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="contact-container">
      <h1 className="con-title">CONTACT</h1>
      <div className="cont">
        <input
          onChange={(event) => {
            setNewName(event.target.value);
          }}
          className="inp top"
          placeholder="Your Name"
        ></input>
        <br></br>
        <input
          onChange={(event) => {
            setNewEmail(event.target.value);
          }}
          className="inp"
          placeholder="Your Email"
        ></input>
        <br></br>
        <input
          onChange={(event) => {
            setNewMessage(event.target.value);
          }}
          className="inp message"
          placeholder="Message"
        ></input>
        <br></br>
        <button className="btn" onClick={handleClick}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Contact;
