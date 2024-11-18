import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Apply from './pages/Apply.jsx';
import Privacy from './pages/DataPrivacyNotice.jsx';
import Create from './pages/Create.jsx';
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
]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
  
