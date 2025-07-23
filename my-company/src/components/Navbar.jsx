
import React from 'react';
import { Link } from 'react-router-dom';

// Define the Navbar component
const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          {/* Using Link components for navigation */}
          <Link to="/Home">
            Home
          </Link>
          <Link to="/About">
            About
          </Link>
          <Link to="/Services">
            Services
          </Link>
          <Link to="/Contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
