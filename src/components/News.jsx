import React from 'react';
import NewBldg from '../assets/newbldg.png'; // Path to the background image

const NewsUpdates = () => {
  return (
   
    <div 
    className=" py-12 w-full h-screen flex items-center justify-center min-h-screen bg-cover bg-center z-20"
    style={{ backgroundImage: `url(${NewBldg})` }} >

    <div className=" top-0 left-0 w-full h-screen bg-[#081708]/50 flex items-center justify-center z-10"> 

      <div className="max-w-7xl w-full bg-black bg-opacity-90 p-6 mx-auto lg:px-8 ">
        <h2 className="text-[40px] font-bold text-center text-[#c5ffdf] mb-6">NEWS AND UPDATES</h2>

        {/* Three Column Grid Layout for News Items */}
        <div className=" px-4 sm:px-[100px] grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl p-6 bg-[#c5ffdf] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#C61A01]">Spring 2024 Enrollment Deadline</h3>
            <p className="text-gray-600 mt-2">
              Don't miss out! The Spring 2024 enrollment deadline is January 5th. Make sure to register for your classes before then.
            </p>
          </div>

          <div className="transition-transform transform hover:scale-105 hover:shadow-xl p-6 bg-[#c5ffdf] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#C61A01]">System Maintenance Notice</h3>
            <p className="text-gray-600 mt-2">
              Please be aware that the system will undergo scheduled maintenance on December 20th, from 10 PM to 2 AM. During this time, the portal will be unavailable.
            </p>
          </div>

          <div className="md:block hidden transition-transform transform hover:scale-105 hover:shadow-xl p-6 bg-[#c5ffdf] rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#C61A01]">New Course Offerings for Fall 2024</h3>
            <p className="text-gray-600 mt-2">
              We are excited to announce new courses for the Fall 2024 semester. Check out the updated course catalog for more information!
            </p>
          </div>
        </div>

        {/* View More Link */}
        <div className="text-center mt-8">
          <a href="/news" className="text-[#c5ffdf] hover:underline">
            View All News and Updates
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsUpdates;
