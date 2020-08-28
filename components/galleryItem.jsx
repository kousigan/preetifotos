import React, {useState} from 'react';
import Img from 'react-cool-img';

const GalleryItem =(e)=>{
  const [details,setDetails] = useState({title:e.title,image:e.img});
   
   const loaderImage = 'https://kousigan.github.io/inkjs/preloader.svg';
   
  return(
    <div className="gItem">
    <span>{details.title}</span> 
    <Img src={details.image} debounce={1000} placeholder={loaderImage}  cache />
    <div className="imageDetails"><button className="pure-button" >Like</button></div>
    </div>
  )
}

export default GalleryItem;