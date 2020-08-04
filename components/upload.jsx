import React, {  useState, useEffect } from "react";

import {   db, storage } from "../db/config";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  
 

  

   const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

const [temp] = useState();

  const handleImage = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const loaded = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(loaded);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(address => {
              setUrl(address);
             setBook({image:address})
          });
      }
    );
  };

  const [book, setBook] = useState({
    title: '',
    author: '',
    image: ''
  });

  const handleUpload = e => {
    e.preventDefault();
    db.collection('photos').add(book); // update
    setBook({
      title: '',
      author: ''
    });
  };

  const handleDetails = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };



  return (
    <div className="pure-form">
      <fieldset>
        <legend>Upload a new post</legend>
        <div className="pure-control-group">
          <label htmlFor="aligned-file">Select image</label>
          <input type="file" id="aligned-file" onChange={handleChange} />
          <span className="pure-form-message-inline">
            <button onClick={handleImage} className="pure-button">
              Load image
            </button>
          </span>
        </div>
        <div className="pure-control-group">
          <label htmlFor="aligned-name">Image title</label>
          <input type="text" id="aligned-name" placeholder="Image title" name="title" value={book.title} onChange={handleDetails}/>
          <span className="pure-form-message-inline">
            required
          </span>
        </div>
        <div className="pure-control-group">
          <label htmlFor="aligned-url">Instagram link</label>
          <input type="text" id="aligned-url" placeholder="Instagram URL" name="author" value={book.author} onChange={handleDetails} />
          <span className="pure-form-message-inline">optional</span>
        </div>
        <div className="pure-control-group">
          <label>Image preview</label>
          <div className="pure-u preview">
            <progress value={progress} max="100" />
            <br />
            <img src={url} />
          </div>
        </div>
        <div className="pure-control-group">
          <label />
          <button className="pure-button button-success" onClick={handleUpload} >Upload</button>
        </div>
      </fieldset>
    </div>
  );
};

export default Upload;
