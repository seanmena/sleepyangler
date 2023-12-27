import React from "react";
import "./Gallery.css";
import photo from "../assets/images/josh.jpeg";

export default function Gallery() {
  function handleClick(e) {
    console.log("touching");
  }

  return (
    <div className="gallery">
      <div>
        <img
          onClick={handleClick}
          className="photo"
          alt="filler"
          src={photo}
        ></img>
      </div>
      <div>
        <img
          onClick={handleClick}
          className="photo"
          alt="filler"
          src={photo}
        ></img>
      </div>
      <div>
        <img
          onClick={handleClick}
          className="photo"
          alt="filler"
          src={photo}
        ></img>
      </div>
      <div>
        <img
          onClick={handleClick}
          className="photo"
          alt="filler"
          src={photo}
        ></img>
      </div>

      <div>
        <img
          onClick={handleClick}
          className="photo"
          alt="filler"
          src={photo}
        ></img>
      </div>
      <div>
        <img
          onClick={handleClick}
          className="photo"
          alt="filler"
          src={photo}
        ></img>
      </div>
      <div>
        <img
          onClick={handleClick}
          className="photo"
          alt="filler"
          src={photo}
        ></img>
      </div>
      <div>
        <img
          onClick={handleClick}
          className="photo"
          alt="filler"
          src={photo}
        ></img>
      </div>
    </div>
  );
}
