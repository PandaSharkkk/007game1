import React, { useEffect, useState } from 'react';
import shootPic from "./images/shoot.png";
import reloadPic from "./images/reload.png";
import blockPic from "./images/block.png";

var imagesList = [shootPic, reloadPic, blockPic];

var ranNum = Math.floor(Math.random() * 4);

const PhotoComponent = () => {
  const [photoUrl, setPhotoUrl] = useState(reloadPic);

  useEffect(() => {
    // Fetch a random photo from an API, like Unsplash
    const fetchPhoto = async () => {
      try {
        const response = await fetch(shootPic);
        setPhotoUrl(response.url);
      } catch (error) {
        console.error('Error fetching the photo:', error);
      }
    };

    fetchPhoto();
  }, []);

  return (
    <div className="src">
      {photoUrl && <img src={photoUrl} alt="Random" />}
    </div>

  );
};

export default PhotoComponent;
