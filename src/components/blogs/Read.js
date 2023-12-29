import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useUserAuth } from "../UserAuthContext";
import "./Read.css";

const Read = () => {
  const user = useUserAuth();

  const [posts, setPosts] = useState([]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "Posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const postsCollectionRef = collection(db, "Posts");
    const q = query(postsCollectionRef, orderBy("timestamp", "desc"));
    const getPosts = async () => {
      const data = await getDocs(q);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div key={index} className="blog-post">
            <h1 className="blog-title">{post.Title}</h1>
            <p className="blog-date">{post.Date}</p>
            <h3 className="blog-body">{post.Description}</h3>

            {user && user.user && (
              <button
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Delete
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Read;
