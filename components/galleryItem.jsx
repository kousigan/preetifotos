import React, {useState} from 'react';
import Img from 'react-cool-img';
import { Heart } from 'react-feather';
import { db } from "../db/config";
import { Link } from 'react-router-dom';


const GalleryItem =(e)=>{
  const [check,setLike]=useState(false);
  const [details,setDetails] = useState(
    {
      key:e.uid,
      title:e.title,
      image:e.img,
      like:e.like
      });
  const loaderImage = 'https://kousigan.github.io/inkjs/preloader.svg';

  if(details.like == undefined){
    details.like = 0;
  }
  const handleLike = e => {
    e.preventDefault();
    if(!check){
      details.like++;
      const id_=details.key
      db.collection('photos').doc(id_).set({
        like:details.like
      },{merge:true}); // update
      setLike(true);
    }
    else{
    details.like--;
      const id_=details.key
      db.collection('photos').doc(id_).set({
        like:details.like
      },{merge:true}); // update
      setLike(false);
    }
    console.log(check)
  };


  return(
    <div className="gItem">
    <span>{details.title}</span>  
     <Link to={`/post/${details.key}`}  exact >
     <Img src={details.image} debounce={1000} placeholder={loaderImage}  cache />
     </Link>
    <div className="imageDetails">
      <span className="likeCount">{details.like} Likes</span>
      <button className={check ? 'liked like pure-button' : 'like pure-button'} onClick={handleLike}><Heart/></button>
    </div>
    </div>
  )
}

export default GalleryItem;