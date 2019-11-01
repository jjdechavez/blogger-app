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
        <div className="social-links d-none-mobile">
          <div className="social-grid">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000">
              <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000">
              <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#000000">
              <path d="M12,0C5.373,0,0,5.373,0,12c0,6.016,4.432,10.984,10.206,11.852V15.18H7.237v-3.154h2.969V9.927c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L16.73,15.18h-3.106v8.697 C19.481,23.083,24,18.075,24,12C24,5.373,18.627,0,12,0z"/>
            </svg> */}
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
