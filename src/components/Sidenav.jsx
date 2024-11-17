import React, { useState, useEffect } from 'react';
import {
  AiOutlineLogin,
  AiOutlineInfoCircle,
  AiOutlineFileText,
  AiOutlinePhone,
  AiOutlineMenu,
  AiOutlineHome,
} from 'react-icons/ai';
import logo from '../assets/cvsulogo.png';

const Sidenav = ({ homeRef, aboutRef, newsRef, contactRef }) => {
  const [nav, setNav] = useState(false);
  const [showTopNav, setShowTopNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowTopNav(false); // Hide top nav on scroll down
      } else {
        setShowTopNav(true); // Show top nav on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Handle screen resize event
  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu if screen size is >= 'md' (768px and above)
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Top Navigation Bar */}
      <div
        className={`fixed top-0 left-0 h-[100px] w-full z-[90] bg-transparent shadow-lg transition-transform duration-300 ${
          showTopNav ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center px-20 py-3">
        
          {/* Logo with transform effects */}
          <div className="logo transform transition-all duration-300 ease-in-out shadow-lg py-[-8] hover:scale-110 hover:rotate-0">
            <img src={logo} alt="Logo" className="h-[80px]" />
          </div>

          {/* Navigation buttons */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection(homeRef)} className="text-white hover:text-black">
              Home
            </button>
            
            <button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-black">
              About
            </button>
            <button onClick={() => scrollToSection(newsRef)} className="text-white hover:text-black">
              News
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="text-white hover:text-black">
              Contact
            </button>
          </div>
          <AiOutlineMenu
            size={30}
            onClick={handleNav}
            className="md:hidden cursor-pointer text-gray-600"
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-40">
          <a
            onClick={() => scrollToSection(homeRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
         
          <a
            onClick={() => scrollToSection(aboutRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlineInfoCircle size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            onClick={() => scrollToSection(newsRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlineFileText size={20} />
            <span className="pl-4">News</span>
          </a>
          <a
            onClick={() => scrollToSection(contactRef)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 group"
          >
            <AiOutlinePhone size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      )}

      {/* Side Navigation Menu (For larger screens) */}
      {!showTopNav && (
        <div
          className={`fixed top-[25%] left-0 z-[99] transition-transform duration-300 hidden md:block`}
        >
          <div className="flex flex-col pl-5">
            <a
              onClick={() => scrollToSection(homeRef)}
              className="flex items-center mb-4 group"
            >
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineHome size={20} />
              </div>
              <span className="pl-4 text-gray-800 group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Home
              </span>
            </a>
           
          
            <a
              onClick={() => scrollToSection(aboutRef)}
              className="flex items-center mb-4 group"
            >
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineInfoCircle size={20} />
              </div>
              <span className="pl-4 text-gray-800 group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
              <span className="pl-4 text-gray-800 group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                News
              </span>
            </a>
            <a
              onClick={() => scrollToSection(contactRef)}
              className="flex items-center mb-4 group"
            >
              <div className="flex justify-center items-center w-12 h-12 rounded-full bg-gray-100 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlinePhone size={20} />
              </div>
              <span className="pl-4 text-gray-800 group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Contact
              </span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidenav;
