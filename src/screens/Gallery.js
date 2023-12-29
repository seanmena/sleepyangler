import React, { useState, useEffect } from "react";
import "./Gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { storage } from "../firebase";
import { deleteObject, getDownloadURL, listAll, ref } from "firebase/storage";
import { useUserAuth } from "../components/UserAuthContext";

const Gallery = () => {
  const user = useUserAuth();
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");
  console.log(imageListRef);

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      const urls = response.items.map((item) => getDownloadURL(item));

      Promise.all(urls).then((items) => setImageList(items));
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="gallery-container">
      <Carousel className="car">
        {imageList.map((url, index) => {
          const picRef = ref(storage, url);

          const handleDelete = () => {
            deleteObject(picRef)
              .then(() => {
                alert("deleted!");
              })
              .catch((error) => {
                console.error(error);
              });
          };
          return (
            <div key={index}>
              {user && user.user && (
                <button className="img-del" onClick={handleDelete}>
                  Delete
                </button>
              )}
              <img className="gallery-img" alt="fish" src={url} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;
