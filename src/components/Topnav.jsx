import React from 'react';
import logo from '../assets/cvsulogo.png';

const TopNav = () => {
  return (
    <nav className="bg-white bg-opacity-20 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          {/* Logo with transform effects */}
          <div className="logo transform transition-all duration-300 ease-in-out shadow-lg py-[-8] hover:scale-110 hover:rotate-0">
            <img src={logo} alt="Logo" className="h-[80px]" />
          </div>
          
        </div>

        
    </nav>
  );
};

export default TopNav;
