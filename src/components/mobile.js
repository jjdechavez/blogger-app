import React from 'react';
import './mobile.css';

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <div className="bg-black">
          <div className="header-container">
            <div className="navbar-brand">
              <p className="navbar-title">Blog</p>
            </div>
            <div className="navbar-menu">
              <svg className="d-none-desktop" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="7.5" height="7.5" fill="white"/>
                <rect y="11.25" width="7.5" height="7.5" fill="white"/>
                <rect x="11.25" y="11.25" width="7.5" height="7.5" fill="white"/>
                <path d="M11.25 0H18.75V7.5H11.25V0Z" fill="white"/>
              </svg>
              <svg className="d-none-mobile" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          </div>
        </div>
        <div className="bg-white"></div>
        <div className="img-carousel">
        </div>
        <div className="headline-container">
          <div className="headline-grid">
            <div className="badge">
              <p className="badge-editorial">Editorial</p>
            </div>
            <p className="main-headline">Our Story</p>
            <p className="short-about">read the story of four girls who have carved out their space in the world.</p>
            <p className="read-more">READ THE FULL STORY</p>
          </div>
        </div>
        <div className="social-links d-none-mobile">
          <div className="social-grid">
            <p className="social-item facebook">facebook</p>
            <p className="social-item instagram">instagram</p>
            <p className="social-item twitter">twitter</p>
          </div>
        </div>
        <div className="footer footer-grid">
          <p className="footer-item-faq">FAQ</p>
          <p className="footer-item-help">Help</p>
        </div>
      </div>
    </div>
  );
}

export default App;
