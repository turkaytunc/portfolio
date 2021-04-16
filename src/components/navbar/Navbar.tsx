import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-container pl-7 md:pl-0">
      <Link className="navbar-list-item" to="/">
        Home
      </Link>
      <Link className="navbar-list-item" to="/projects">
        Projects
      </Link>
      {/* <Link className="navbar-list-item" to="/articles">
        Articles
      </Link> */}
    </nav>
  );
};

export default Navbar;
