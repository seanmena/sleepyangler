import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";

const Create = () => {
  const postsCollectionRef = collection(db, "Posts");

  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newDate, setNewDate] = useState("");

  const makePost = async (e) => {
    e.preventDefault();

    try {
      await addDoc(postsCollectionRef, {
        Title: newTitle,
        Description: newBody,
        Date: newDate,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error("error", e);
    }
    alert("posted");
  };

  return (
    <div>
      <form>
        <h1>CREATE BLOG POST HERE:</h1>
        <input
          placeholder="Title of Post"
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        ></input>
        <input
          placeholder="Body of Post"
          onChange={(event) => {
            setNewBody(event.target.value);
          }}
        ></input>
        <input
          type="date"
          placeholder="Date"
          onChange={(event) => {
            setNewDate(event.target.value);
          }}
        ></input>
        <button onClick={makePost}>Post</button>
      </form>
    </div>
  );
};

export default Create;
