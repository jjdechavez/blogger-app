import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Social from './components/Social';
import Headline from './components/Headline';
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <div className="bg-black">
          <Navbar />
        </div>
        <div className="bg-white"></div>
        <div className="img-carousel">
        </div>
        <Headline />
        <Social />
        <Footer />
      </div>
    </div>
  );
}

export default App;
