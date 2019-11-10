import React from 'react';
import {Link} from 'react-router-dom';

function Headline() {
  return (
    <section className="headline-container">
      <div className="headline-grid">
        <div className="badge">
          <p className="badge-editorial">Editorial</p>
        </div>
        <p className="main-headline">Our Story</p>
        <p className="short-about">read the story and expercience who travel in Huma Island.</p>
        <p className="read-more">
          <Link to="/blog" style={{color: '#000'}}>
            READ THE FULL STORY
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Headline;