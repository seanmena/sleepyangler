import React, { useEffect } from "react";
import { useState } from "react";
import { db, storage } from "../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "./Editor.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import Create from "./blogs/Create";
import { useUserAuth } from "./UserAuthContext";

const Editor = () => {
  const user = useUserAuth();
  const current = user.user.uid;
  const josh = process.env.REACT_APP_USERID;
  console.log(josh);

  const deleteConctact = async (id) => {
    try {
      const contDoc = doc(db, "Contact", id);
      await deleteDoc(contDoc);
      alert("deleted contact");
    } catch (e) {
      console.error("Error deleting", e);
    }
  };

  const [imageUpload = { files: [] }, setImageUpload] = useState(null);

  const uploadImage = () => {
    try {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        alert("uploaded");
      });
    } catch (e) {
      console.log("Error deleting", e);
    }
  };

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const contactCollectionRef = collection(db, "Contact");
    const getContacts = async () => {
      const data = await getDocs(contactCollectionRef);
      setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getContacts();
  }, []);

  if (current === josh) {
    return (
      <div>
        <div>
          <h1>ADD PHOTO TO GALLERY HERE:</h1>
          <input
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadImage}>Upload</button>
        </div>

        <Create />

        <div className="contact-piece">
          {contacts.map((contact, index) => {
            return (
              <div key={index} className="con-mes">
                <h1 className="name">{contact.Name}</h1>
                <p className="email-con">{contact.Email}</p>
                <p className="message-con">{contact.Message}</p>
                <button
                  onClick={() => {
                    deleteConctact(contact.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default Editor;
