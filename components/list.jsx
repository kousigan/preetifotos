import React, { useState, useEffect } from 'react'; // update
 import { db } from "../db/config";
  import { Trash2 } from 'react-feather';

const BookList = ( ) => {
  const [pic, setPic] = useState([]); // update
 
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
      console.log('cleanup List');
      unsub();
    };
  }, []);

  // add
  const deletePic = id => {
    db.collection('photos')
      .doc(id)
      .delete();
  };
 
  return (
    <div className='section section-books'>
      <div className='listContainer'>
        <h2>Photos</h2>
    
          {pic.map(pic => (
       
              <div key={pic.id} className= 'listItem pure-g'>
                <div className='pure-u-1-5 listImage'>
                 <img className='galleryItem' src={pic.image}/>
                 </div>
                <div className='pure-u-3-5 listDetails'>
                  <div className='photo-title'><h3>{pic.title}</h3></div>
                  <div className='photo-link'>{pic.author}</div>
                 
                </div>
                <div
                  onClick={() => deletePic(pic.id)}
                  className='pure-u-1-5 deleteImage'
                  style={{ cursor: 'pointer' }} // add
                >
                  <i className='feather-icons'><Trash2/></i>
                </div>
              </div>
           
          ))}
       </div>
    </div>
  );
};

export default BookList;