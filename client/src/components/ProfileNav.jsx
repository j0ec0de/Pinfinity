import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";

const ProfileNav = () => {
  
  return (
    <div className='flex space-x-3 items-center'>
        <div className='px-3 py-3 rounded-md bg-gray-100 hover:bg-gray-200'>
            <VscAccount
            />
        </div>
        <div className='px-1 h-5 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center'>
            <IoIosArrowDown />
        </div>
    </div>

  )
}

export default ProfileNav;