import React, { useEffect, useState } from 'react';

const PhotoComponent = () => {
  const [photoUrl, setPhotoUrl] = useState('/images/crossed.png');

  useEffect(() => {
    // Fetch a random photo from an API, like Unsplash
    const fetchPhoto = async () => {
      try {
        const response = await fetch('/images/crossed.png');
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
