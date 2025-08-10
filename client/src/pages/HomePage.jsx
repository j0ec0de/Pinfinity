import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import ImageGallery from '../components/ImageGallery';
import ProfileNav from '../components/ProfileNav';
import { getImagesAndVideos, searchImagesAndVideos } from '../../services/api';

const HomePage = () => {

  // we give the functions here
  // and we pass it as a prop to the other components
  // ImageGallery and SearchBar

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // useEffect to fetch all the images

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getImagesAndVideos();
      setImages(result);
      console.log('API response: ',result);
    } catch (err) {
      console.log(err);
      setError("Failed to load images");
    } finally {
      setLoading(false);
    }
  }

  // search function to pass to Searchbar
  const handleSearch = async (searchQuery) => {
    // update search query state

    setSearchQuery(searchQuery);

    if(!searchQuery.trim()) {
      // if search is empty, fetch initial images
      fetchImages();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const searchResults = await searchImagesAndVideos(searchQuery);
      setImages(searchResults);
      console.log('Search results: ', searchResults);
    } catch (err) {
      console.log(err);
      setError("Failed to search image");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="flex min-h-screen">
      <SideBar />
      
      <div className="flex-1 ml-16">
        <div className="mt-6 px-10">
          <div className='flex justify-between items-center mb-4'>
            <SearchBar 
              onSearch={handleSearch}
              loading={loading}
            />
            <ProfileNav />
          </div>

          {error && (
           <div className="text-red-500 text-center mb-4 p-4 bg-red-50 rounded-lg">
              {error}
            </div>  
          )}

          <ImageGallery images={images} loading={loading} />

            {/*<ImageGallery
              images={images.map((photo)=>(
                photo.alt.toLowerCase().startsWith(searchQuery)        
              ))}  
          
              loading={loading}
            />
            */}

        </div>
      </div>
    </div>
  );
};

export default HomePage;
