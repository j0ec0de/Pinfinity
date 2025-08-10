import React, { useEffect, useState } from 'react'
import { getImagesAndVideos } from '../../services/api';

const ImageGallery = ({ images, loading }) => {

    // show loading state
    if(loading) {
        return(
        <div className="flex justify-center items-center mt-10">
            <div className="text-gray-500 text-lg">Loading images...</div>
        </div>            
        );
    }

  // Show empty state
  if (!images || images.length === 0) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="text-gray-500 text-lg">No images found</div>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-10'>
        {images.map((photo) => (
            <div key={photo.id} className='overflow-hidden rounded-lg shadow-md'>
                <img
                    src={photo.src.large}
                    alt={photo.photographer || `Photo by ${photo.photographer}`}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform"
                />
                {/* details */}
                <div className='p-5'>
                    <h3 className='font-bold'> { `Photo by ${photo.photographer}`} </h3>
                    <p> {photo.alt} </p>
                </div>
            </div>
            
        ))}
    </div>
  );
};

export default ImageGallery;