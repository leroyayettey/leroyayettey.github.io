import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="site-header">
      <div className="brand-wrap">
        <div className="brand-mark">LA</div>
        <div className="brand-copy">
          <div className="brand-name">Leroy Ayettey</div>
          <div className="brand-role">Cloud Engineer</div>
        </div>
      </div>

      <nav className="main-nav">
        <Link
          to="/"
          className={`nav-link ${isActive('/') ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link ${isActive('/about') ? 'active' : ''}`}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
