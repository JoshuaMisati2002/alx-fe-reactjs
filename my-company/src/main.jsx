import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Services from '../components/Services.jsx';
import Contact from '../components/Contact.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Layout component
    children: [
      { index: true, element: <Home /> }, // loads at /
      { path: 'Home', element: <Home /> },
      { path: 'About', element: <About /> },
      { path: 'Services', element: <Services /> },
      { path: 'Contact', element: <Contact /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
