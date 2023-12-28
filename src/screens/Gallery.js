import React from "react";
import picture from "../assets/fish.jpeg";
import "./Gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  let images = [picture, picture, picture, picture, picture, picture];

  return (
    <div className="gallery-container">
      <Carousel className="car">
        <div>
          <img className="gallery-img" src={images[0]} alt="fish!" />
        </div>
        <div>
          <img className="gallery-img" src={images[1]} alt="fish!" />
        </div>
        <div>
          <img className="gallery-img" src={images[2]} alt="fish!" />
        </div>
        <div>
          <img className="gallery-img" src={images[3]} alt="fish!" />
        </div>
        <div>
          <img className="gallery-img" src={images[4]} alt="fish!" />
        </div>
        <div>
          <img className="gallery-img" src={images[5]} alt="fish!" />
        </div>
      </Carousel>
    </div>

    // onChange={onChange}
    // onClickItem={onClickItem}
    // onClickThumb={onClickThumb}
  );
};

export default Gallery;
