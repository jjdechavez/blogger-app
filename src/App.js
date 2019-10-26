import React from 'react';

import BgNavbar from './components/BgNavbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <div className="bg-black">
          <div className="side-column-container lside-column">
            <div className="navbar-brand">
              <p>Blog</p>
            </div>
            <div className="img-selectors">
              <p>01</p>
              <p>02</p>
            </div>
            <div className="footer">
              <p className="footer-item-faq">FAQ</p>
              <p className="footer-item-help">Help</p>
            </div>
          </div>
        </div>
        <div className="img-carousel"></div>
        <div className="headline">
          <div className="headline-grid">
            <div className="badge">
              <p className="badge-editorial">Editorial</p>
            </div>
            <p className="main-headline">Our Story</p>
            <div className="headline-about">
              <p className="short-about">read the story of four girls who have carved out their space in the world.</p>
              <p>READ THE FULL STORY</p>
            </div>
          </div>
        </div>
        <div className="rside-column">
          <div className="side-grid-column">
            <div className="nav-icon">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="7.5" height="7.5" fill="black"/>
                <rect y="11.25" width="7.5" height="7.5" fill="black"/>
                <rect y="22.5" width="7.5" height="7.5" fill="black"/>
                <rect x="11.25" y="22.5" width="7.5" height="7.5" fill="black"/>
                <rect x="22.5" y="22.5" width="7.5" height="7.5" fill="black"/>
                <rect x="11.25" y="11.25" width="7.5" height="7.5" fill="black"/>
                <rect x="22.5" y="11.25" width="7.5" height="7.5" fill="black"/>
                <path d="M11.25 0H18.75V7.5H11.25V0Z" fill="black"/>
                <path d="M22.5 0H30V7.5H22.5V0Z" fill="black"/>
              </svg>
            </div>
            <p className="social-item facebook">facebook</p>
            <p className="social-item instagram">instagram</p>
            <p className="social-item twitter">twitter</p>
            <div className="footer-right-column">
              <p className="footer-item-en">En</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
