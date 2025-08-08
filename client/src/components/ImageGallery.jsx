import React, { useEffect, useState } from 'react'
import { getImagesAndVideos } from '../../services/api';

const ImageGallery = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const result = await getImagesAndVideos();
            setImages(result);
        }
        fetchImages();
    }, []);


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-10'>
        {images.map((photo) => (
            <div key={photo.id} className='overflow-hidden rounded-lg shadow-md'>
                <img
                    src={photo.src.large}
                    alt={photo.photographer}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform"
                />
            </div>
        ))}
    </div>
  );
};

export default ImageGallery;