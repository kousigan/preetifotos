import React, {useState} from 'react';

const GalleryItem =(e)=>{
  const [details,setDetails] = useState([{title:e.title,}]);
   
   
  return(
    <div className="gItem">{details}
    <img src={</div>
  )
}

export default GalleryItem;