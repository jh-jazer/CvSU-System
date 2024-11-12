import React, { useState } from 'react';
import { AiOutlineLogin, AiOutlineInfoCircle, AiOutlineFileText, AiOutlinePhone, AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';

const Sidenav = ({ homeRef, loginRef, aboutRef, newsRef, contactRef }) => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to scroll to a specific section
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setNav(false);
  };

  return (
    <div>
      {/* Menu Toggle Icon for Mobile */}
      <AiOutlineMenu size={30}
        onClick={handleNav}
        className=" absolute top-4 right-4 z-[99] md:hidden"
      />

      {/* Mobile Navigation Menu */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-40">
          {/* Home link */}
          <a
            onClick={() => scrollToSection(homeRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 transition-opacity duration-300">Home</span>
          </a>

          {/* Other Links */}
          <a
            onClick={() => scrollToSection(loginRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlineLogin size={20} />
            <span className="pl-4 transition-opacity duration-300">Login</span>
          </a>
          <a
            onClick={() => scrollToSection(aboutRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlineInfoCircle size={20} />
            <span className="pl-4 transition-opacity duration-300">About</span>
          </a>
          <a
            onClick={() => scrollToSection(newsRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlineFileText size={20} />
            <span className="pl-4 transition-opacity duration-300">News</span>
          </a>
          <a
            onClick={() => scrollToSection(contactRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlinePhone size={20} />
            <span className="pl-4 transition-opacity duration-300">Contact</span>
          </a>
        </div>
      )}

      {/* Desktop Navigation Menu */}
      <div className="md:block hidden pl-5 fixed top-[25%] z-[99]">
        <div className="flex flex-col">
          {/* Home link */}
          <a
            onClick={() => scrollToSection(homeRef)}
            className="flex items-center mb-4 group"
          >
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineHome size={20} />
            </div>
            <span className="pl-4 text-gray-800 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Home
            </span>
          </a>

          {/* Other Links */}
          <a
            onClick={() => scrollToSection(loginRef)}
            className="flex items-center mb-4 group"
          >
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineLogin size={20} />
            </div>
            <span className="pl-4 text-gray-800 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Login
            </span>
          </a>
          <a
            onClick={() => scrollToSection(aboutRef)}
            className="flex items-center mb-4 group"
          >
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineInfoCircle size={20} />
            </div>
            <span className="pl-4 text-gray-800 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              About
            </span>
          </a>
          <a
            onClick={() => scrollToSection(newsRef)}
            className="flex items-center mb-4 group"
          >
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineFileText size={20} />
            </div>
            <span className="pl-4 text-gray-800 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              News
            </span>
          </a>
          <a
            onClick={() => scrollToSection(contactRef)}
            className="flex items-center group"
          >
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlinePhone size={20} />
            </div>
            <span className="pl-4 text-gray-800 group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Contact
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
