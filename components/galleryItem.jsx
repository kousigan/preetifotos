import React, {useState} from 'react';

const GalleryItem =(e)=>{
  const [details,setDetails] = useState({title:e.title,image:e.img});
   
   
  return(
    <div className="gItem">
    <span>{details.title}</span> 
    <img src={details.image}/>
    </div>
  )
}

export default GalleryItem;