// StudentDashboard.jsx
import React from "react";

import {
  FaUserGraduate,
  FaBook,
  FaBell,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const StudentDashboard = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/100",
  };

  const notifications = [
    "Your assignment is due tomorrow.",
    "Grades for Math 101 have been updated.",
    "New event: Career Fair on Dec 10.",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#081708] text-white flex flex-col">
        <div className="p-6 flex flex-col items-center border-b border-gray-700">
          <img
            src={user.avatar}
            alt="Profile"
            className="rounded-full w-20 h-20 mb-3 border-4 border-white"
          />
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-2">
            <li className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer">
              <FaChartBar />
              <span>Dashboard</span>
            </li>
            <li className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer">
              <FaBook />
              <span>Courses</span>
            </li>
            <li className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer">
              <FaBell />
              <span>Notifications</span>
            </li>
            <li className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer">
              <FaCog />
              <span>Settings</span>
            </li>
            <li className="px-4 py-2 flex items-center space-x-3 hover:bg-red-600 rounded-lg cursor-pointer mt-auto">
              <FaSignOutAlt />
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-700">Welcome, {user.name}</h1>
          <button className="px-4 py-2 bg-[#C61A01] text-white rounded-lg shadow-md hover:bg-[#9f1701]">
            Quick Action
          </button>
        </header>

        {/* Academic Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">GPA</h3>
            <p className="text-4xl font-bold text-[#C61A01]">3.85</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Completed Credits</h3>
            <p className="text-4xl font-bold text-[#C61A01]">24</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Active Courses</h3>
            <p className="text-4xl font-bold text-[#C61A01]">5</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Attendance</h3>
            <p className="text-4xl font-bold text-[#C61A01]">95%</p>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Notifications</h3>
          <ul className="space-y-3">
            {notifications.map((note, idx) => (
              <li
                key={idx}
                className="flex items-start space-x-4 border-b border-gray-200 pb-3"
              >
                <FaBell className="text-gray-600 mt-1" />
                <p className="text-gray-700">{note}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;
