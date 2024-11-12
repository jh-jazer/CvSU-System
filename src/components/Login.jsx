import React from 'react';
import Logo from '../assets/university-logo.png'; // Logo image path
import StudentImage from '../assets/student.jpg'; // Path to the background image

const Login = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${StudentImage})` }} // Apply the background image
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg z-20">
        {/* Header with University Logo and Login Title */}
        <div className="flex items-center justify-center space-x-4">
          <img src={Logo} alt="University Logo" className="w-20 h-20" />
          <h2 className="text-3xl font-extrabold text-center text-[#C61A01] pb-0">
            LOGIN
          </h2>
        </div>

        {/* Login Form */}
        <form className="space-y-2 px-11">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm pl-8 font-medium text-gray-700">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-300 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your ID"
              required
            />
          </div>

          {/* Password Field */}
          <div className="pb-4">
            <label htmlFor="password" className="block text-sm pl-6 font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-300 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#C61A01] rounded-full hover:bg-[#C61A01]/90 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="text-center">
          <a href="#" className="text-sm text-[#C61A01] hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
