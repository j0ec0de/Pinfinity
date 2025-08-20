import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfileNav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');    
  } 


  return (
    <div className='flex space-x-3 items-center'>
        <div className='px-3 py-3 rounded-md bg-gray-100 hover:bg-gray-200'>
            <VscAccount
            />
            <h1> {user.name} </h1>
        </div>
        <div className='px-1 h-5 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center'>
            <IoIosArrowDown />
        </div>
                <button 
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Logout
                </button>        
    </div>

  )
}

export default ProfileNav;