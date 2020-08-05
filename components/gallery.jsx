import React, { useState, useEffect } from 'react'; // update
 import { db } from "../db/config";
 import GalleryItem  from './galleryItem';


 const Gallery = () => {
  const [pic, setPic] = useState([]); // update
  const [loadPic, setLoadPic] = useState({
    visible:2,
    error:false
  })
  // add
  useEffect(() => {
    console.log('effect');
    const unsub = db.collection('photos').onSnapshot(snapshot => {
      const allpic = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPic(allpic);
    });
    return () => {
      console.log('cleanup gallery');
      unsub();
    };
  }, []);

  const loadMore=()=>{
    return setLoadPic(loadPic+4)
  }
  return(
    <div className="gallery">
     {pic.slice(0,2).map(picture=>(
        
       
       <GalleryItem key={picture.id} title={picture.title} img={picture.image}/>
     ))}
            <button className="pure-button"> Load more</button>

    </div>
  )
 }

 export default Gallery;