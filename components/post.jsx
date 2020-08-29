import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from "../db/config";

const Post = () =>{
  const [post,setPost]=useState();
    let { id } = useParams();

    db.collection("photos").doc(id)
  .get()
  .then(function(doc) {
    if (doc.exists) {
      // setPost(doc.data());
      console.log("Document data:", doc.data());
      return;
     } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function(error) {
    console.log("Error getting document:", error);
  });

  return(
    <div>
      Post {id}
    </div>
  )
}
export default Post;