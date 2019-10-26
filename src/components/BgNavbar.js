import React from 'react';

function BgNavbar() {
  return (
    <header className="navbar-container">
      <div className="navbar-item">
        <div className="navbar-brand">Blog</div>
        <div className="nav-icon">
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="7.5" height="7.5" fill="white"/>
            <rect y="11.25" width="7.5" height="7.5" fill="white"/>
            <rect x="11.25" y="11.25" width="7.5" height="7.5" fill="white"/>
            <path d="M11.25 0H18.75V7.5H11.25V0Z" fill="white"/>
          </svg>
        </div>
      </div>
    </header>
  )
}

export default BgNavbar;