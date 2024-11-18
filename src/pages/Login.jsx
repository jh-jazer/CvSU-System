import React from 'react';
import Logo from '../assets/university-logo.png';
import StudentImage from '../assets/student.jpg';
import TopNav from '../components/TopNav'; // Import the TopNav component

const Login = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <TopNav />

      {/* Main Content */}
      <div
        className="flex items-center justify-center min-h-screen  bg-cover bg-center"
        style={{ backgroundImage: `url(${StudentImage})` }}
      >
        {/* Login Card */}
        <div className="w-full max-w-md p-8 space-y-6 bg-white bg-opacity-90 shadow-lg rounded-lg z-51">
          {/* Header with Logo and Title */}
          <div className="flex flex-col items-center ">
            <img src={Logo} alt="University Logo" className="w-20 h-20 mb-4" />
            <h2 className="text-3xl font-extrabold text-[#C61A01]">Login</h2>
          </div>

          {/* Login Form */}
          <form className="space-y-4  " >
            {/* ID Input */}
            <div>
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700"
              >
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01]"
                placeholder="Enter your ID"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C61A01]"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 text-white bg-[#C61A01] rounded-lg hover:bg-[#C61A01]/90 focus:outline-none focus:ring-2 focus:ring-[#C61A01]"
            >
              Log In
            </button>
          </form>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-sm text-[#C61A01] hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
