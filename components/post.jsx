import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../db/config";
import Img from "react-cool-img";
import { Heart } from 'react-feather';

const Post = () => {
  const [check, setLike] = useState(false);
  const [post, setPost] = useState({});
  const [comment,setComment]=useState({
      content: ''
  });
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


  const handleDetails = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  return (
    <div class="pure-g">
      <div class="pure-u-2-3 postImageContainer">
      <div class="pure-g">
          <div class="pure-u-2-3">
            <h2>{post.title}</h2>
          </div>
          <div class="pure-u-1-3 showLikes">
            <p>{post.like} Likes</p> <button className={check ? 'liked like pure-button' : 'like pure-button'} ><Heart/></button>
          </div>
        </div>
        <Img src={post.image} className="postImage" placeholder={loaderImage} />
      </div>
      <div class="pure-u-1-3">
        <h2>Comments</h2>
        <form class="pure-form comments">
           <fieldset>
                     <textarea type="text" placeholder="Enter comments" className="enterComments"></textarea>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
export default Post;
