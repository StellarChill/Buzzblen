import './cssfile/Navbar1.css';
import './cssfile/Footer.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import About from './components/About.jsx';
import Contact from './components/Contact';
import Login from './components/Login.jsx';
import Homepage from './components/Homepage.jsx';
import Register from './components/Register.jsx';
import Profile from './components/Profile.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
      path: "/",
    element: <Homepage />,
    },
    {
      path: "/about",
    element: <About />,
    },
    {
      path: "/login",
    element: <Login />,
    },
    {
      path: "/contact",
    element: <Contact />,
    },
    {
      path: "/register",
    element: <Register />,
    },
    {
      path: "/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
