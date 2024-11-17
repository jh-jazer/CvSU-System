import React from 'react';
import Footer from './Footer';
import Maps from '../assets/maps.png';

const Contacts = () => {
  return (
      
    <div id="contacts" 
    className="bg-gray-440 min-h-screen flex flex-col justify-between"
    style={{ backgroundImage: `url(${Maps})` }}
    >
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 md:px-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#092919] text-primary mb-8">Contact Information</h1>

          {/* Single Contact Panel */}
          <div className="transition-transform transform hover:scale-105 hover:shadow-xl p-6 bg-[#c5ffdf] rounded-lg shadow-md max-w-lg mx-auto">
            <p className="text-gray-600 mt-4">
              <strong>Address:</strong><br />
              Sampaguita St., Phase 2, Soldiers Hills IV, Molino VI<br />
              Bacoor, Cavite, Philippines, 4102
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Email:</strong><br />
              <a href="mailto:cvsubacoor@cvsu.edu.ph" className="text-primary hover:underline">cvsubacoor@cvsu.edu.ph</a>
            </p>
            <p className="text-gray-600 mt-4">
              <strong>Landline:</strong><br />
              <a href="tel:+63464765029" className="text-primary hover:underline">(046)476-5029</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contacts;
