import React from 'react';
import Laya from '../assets/laya.png';
import Logo from '../assets/university-logo.png'; // Logo image path

const Hero = () => {
  return (
    <div id="main">
      {/* Hero Section (Background Image) */}
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover object-center"
          src={Laya}
          alt="Laya"
        />

        {/* Overlay with Darkened Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#081708]/80 flex items-center justify-center z-10">
        
          <div className="text-center text-white space-y-6">
            <img src={Logo} alt="University Logo" className="w-32 h-32 mx-auto" />
            <h1 className="text-4xl font-bold">Welcome to Bacoor CvSU Portal</h1>
            <p className="text-lg">Register for courses, manage your profile, and access academic information.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
