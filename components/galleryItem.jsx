import React, {useState} from 'react';

const GalleryItem =(e)=>{
  const [details,setDetails] = useState({title:e.title,image:e.img});
   
   
  return(
    <div className="gItem">{details.title}
    <img src={details.image}/>
    </div>
  )
}

export default GalleryItem;