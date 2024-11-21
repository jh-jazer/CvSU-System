import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Apply from './pages/Apply.jsx';
import Privacy from './pages/DataPrivacyNotice.jsx';
import Create from './pages/Create.jsx';
import Studentdb from './pages/Studentdb.jsx';
import Profile from './StudentdbPages/Profile.jsx';
import Courses from "./StudentdbPages/Courses.jsx";
import Notifications from "./StudentdbPages/Notifications.jsx";
import Profile from "./StudentdbPages/Profile.jsx";
import Settings from "./StudentdbPages/Settings.jsx";
import CreateApplication from "./pages/CreateApplication.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/apply",
    element: <Apply />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/CreateApplication",
    element: <CreateApplication />,
  },

  {
    path: "/studentdb",
    element: <Studentdb />,
    children: [
      {
        path: "profile",
<<<<<<< HEAD
        element: <Profile />, // Component to render when /studentdb/courses is visited
=======
        element: <Profile />, // Component for /studentdb/settings
>>>>>>> 8ba5e1f17060fba6a8eb9fcf405656b802e72cb9
      },
      {
        path: "courses",
        element: <Courses />, // Component to render when /studentdb/courses is visited
      },
      {
        path: "notifications",
        element: <Notifications />, // Component for /studentdb/notifications
      },
      {
        path: "settings",
        element: <Settings />, // Component for /studentdb/settings
      },
    ],
  },
]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
  
