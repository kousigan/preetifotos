import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db/config";
import Img from "react-cool-img";

const Post = () => {
  const [check, setLike] = useState(false);
  const [post, setPost] = useState({});
  let { id } = useParams();
  const loaderImage = "https://kousigan.github.io/inkjs/preloader.svg";

  db.collection("photos")
    .doc(id)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        setPost(doc.data());
        // console.log("Document data:", post.title);
        return;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });


  return (
    <div class="pure-g">
      <div class="pure-u-2-3">
        <Img src={post.image} className="postImage" placeholder={loaderImage} />
      </div>
      <div class="pure-u-1-3">
        <div class="pure-g">
          <div class="pure-u-2-3">
            <h2>{post.title}</h2>
          </div>
          <div class="pure-u-1-3 showLikes">
            <p>{post.like} Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
