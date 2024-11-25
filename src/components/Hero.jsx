import React from 'react';
import { Link } from 'react-router-dom';
import Entrance from '../assets/entrance.png';

const Hero = () => {
  return (
    <div id="main">
      <div className="relative w-full h-screen">
        <img
          className="w-full h-full object-cover object-center"
          src={Entrance}
          alt="Entrance"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#081708]/80 flex items-center justify-center z-10">
          <div className="text-center mt-10 text-white space-y-6">
            <h1 className="text-5xl font-bold text-[#c5ffdf]">
              Your Journey Starts Here
            </h1>
            <p className="text-lg hidden sm:block px-3 text-[#c5ffdf]">
              "A comprehensive curriculum designed to equip you with in-demand
              skills in programming, software development, and more."
            </p>

            {/* Centered Apply Button */}
            <div className=" flex justify-center mx-20">
              <Link to="/apply">
                <h2 className="mainButton text-3xl text-[#C61A01] font-bold text-center bg-white py-4 px-8 rounded-full shadow-md hover:bg-[#C61A01] hover:text-white transition duration-300">
                  APPLY NOW
                </h2>
              </Link>
            </div>
          </div>
        </div>

        {/* White Rectangle at the Bottom */}
        <div className="absolute bottom-0 w-full  sm:h-28 bg-[#E8E8E8] h-20 z-20">
          {/* Optional Content Inside the Rectangle */}
          <div className="flex items-center justify-center h-full">
            <p className="text-[#033D04] text-sm sm:text-lg font-semibold">
              Begin your journey today with Cavite State University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
