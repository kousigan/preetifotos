import React, { useState, useEffect } from "react"; // update
import { db } from "../db/config";
import GalleryItem from "./galleryItem";
import Masonry from "react-masonry-component";

const Gallery = () => {
  const [pic, setPic] = useState([]); // update
  const [loadPic, setLoadPic] = useState({
    visible: 3,
    error: false
  });
  // add
  useEffect(() => {
    console.log("effect");
    const unsub = db.collection("photos").onSnapshot(snapshot => {
      const allpic = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPic(allpic);
    });
    return () => {
      console.log("cleanup gallery");
      unsub();
    };
  }, []);

  const loadMore = () => {
    const i = loadPic.visible + 2;
    setLoadPic({
      visible: i
    });
    console.log(loadPic.visible);
  };

  const masonryOptions = {
    transitionDuration: 0
  };

  const imagesLoadedOptions = { background: ".my-bg-image-el" };

  return (
    <div className="gallery">
      <Masonry
        className={"my-gallery-class"} // default ''
        elementType={"div"} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {pic.slice(0,loadPic.visible).map(picture => (
          <GalleryItem
            key={picture.id}
            title={picture.title}
            img={picture.image}
          />
        ))}
      </Masonry>

      <div className="gallerySpan">
        <button className="pure-button button-large" onClick={loadMore}>
          Load more pics
        </button>
      </div>
    </div>
  );
};

export default Gallery;
