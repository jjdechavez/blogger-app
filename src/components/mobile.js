import React from 'react';
import './mobile.css';
import Image from '../landing-page-girl.png';

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <div className="bg-black">
          <div className="header-container">
            <div className="navbar-brand">
              <p>Blog</p>
            </div>
            <div className="navbar-menu">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="7.5" height="7.5" fill="white"/>
                <rect y="11.25" width="7.5" height="7.5" fill="white"/>
                <rect x="11.25" y="11.25" width="7.5" height="7.5" fill="white"/>
                <path d="M11.25 0H18.75V7.5H11.25V0Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white"></div>
        <div className="img-carousel">
          {/* <img className="img-item" src="./img/landing-page-girl.png" alt=""/> */}
        </div>
        <div className="headline-container">
          <div className="headline-grid">
            <div className="badge">
              <p className="badge-editorial">Editorial</p>
            </div>
            <p className="main-headline">Our Story</p>
            <div className="headline-about">
              <p className="short-about">read the story of four girls who have carved out their space in the world.</p>
              <p className="read-more">READ THE FULL STORY</p>
            </div>
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
