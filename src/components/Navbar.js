import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header-container">
      <div className="navbar-brand">
        <Link to="/">
          <p className="navbar-title" style={{width: 'max-content'}}>Blog IT</p>
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/add-blog-form">
          <svg className="menu-item d-none-desktop" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="7.5" height="7.5" fill="white" />
            <rect y="11.25" width="7.5" height="7.5" fill="white" />
            <rect x="11.25" y="11.25" width="7.5" height="7.5" fill="white" />
            <path d="M11.25 0H18.75V7.5H11.25V0Z" fill="white" />
          </svg>
        </Link>
        <Link to="/add-blog-form">
          <svg className="menu-item d-none-mobile" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="7.5" height="7.5" fill="black" />
            <rect y="11.25" width="7.5" height="7.5" fill="black" />
            <rect y="22.5" width="7.5" height="7.5" fill="black" />
            <rect x="11.25" y="22.5" width="7.5" height="7.5" fill="black" />
            <rect x="22.5" y="22.5" width="7.5" height="7.5" fill="black" />
            <rect x="11.25" y="11.25" width="7.5" height="7.5" fill="black" />
            <rect x="22.5" y="11.25" width="7.5" height="7.5" fill="black" />
            <path d="M11.25 0H18.75V7.5H11.25V0Z" fill="black" />
            <path d="M22.5 0H30V7.5H22.5V0Z" fill="black" />
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Navbar;