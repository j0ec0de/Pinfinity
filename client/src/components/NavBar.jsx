import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentSection }) => {
  const links = ['About', 'Services', 'Contact'];

  // determine text color based on the current section

  const getTextColor = () => {
    switch(currentSection) {
      case 'section-2':
      case 'section-3':
        return 'text-black'
      case 'section-1':
      default:
        return 'text-white'
    }
  }

  const textColorClass = getTextColor()

  return (
    <nav className="fixed top-0 left-0 w-full z-50  text-white px-6 py-2 flex justify-between items-center ">
      <div className='flex items-center space-x-5'>
        <Link to='/'>
        <div className="text-2xl font-extrabold text-purple-700 ">Pinfinity</div>
        </Link>
          <a href='/explore'
            className={`text-xl font-bold ${textColorClass}`}
          >Explore</a>
      </div>
  
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={`#${link.toLowerCase()}`}
              className={`hover:font-bold ${textColorClass}`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-gray-300 rounded-4xl text-black hover:bg-gray-400 hover:text-slate-800 transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-4 py-2 bg-purple-500 text-white rounded-4xl hover:bg-purple-800 transition">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;


