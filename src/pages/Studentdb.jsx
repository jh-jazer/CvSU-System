import { Link, Outlet } from "react-router-dom";
import {
  FaChartBar,
  FaUserCircle,
  FaBook,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const StudentDashboard = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/100",
  };

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
            <li>
              <Link
                to="profile"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <FaUserCircle />
                <span>Profile</span>
              </Link>
              <Link
                to="courses"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <FaBook />
                <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link
                to="notifications"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <FaBell />
                <span>Notifications</span>
              </Link>
            </li>
            <li>
              <Link
                to="settings"
                className="px-4 py-2 flex items-center space-x-3 hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <FaCog />
                <span>Settings</span>
              </Link>
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
        <Outlet /> {/* This renders the nested route components */}
      </main>
    </div>
  );
};

export default StudentDashboard;
