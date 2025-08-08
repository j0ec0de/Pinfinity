import React from 'react';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import ImageGallery from '../components/ImageGallery';
import ProfileNav from '../components/ProfileNav';

const HomePage = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      
      <div className="flex-1 ml-16">
        <div className="mt-6 px-10">
          <div className='flex justify-between items-center mb-4'>
            <SearchBar />
            <ProfileNav />
          </div>

          <ImageGallery />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
