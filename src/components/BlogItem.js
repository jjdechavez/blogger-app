import React from 'react';

function BlogItem() {
  return (
    <>
      <div className="item-container">
        <div className="feature-img d-none-mobile"></div>
        <div className="item-grid">
          <h5 className="about-title">Count Octagon</h5>
          <p className="about-author">Friz Knuckle</p>
          <p className="about-date">Feb 2019</p>
        </div>
      </div>
      <div className="item-container2">
        <div className="item-grid">
          <h5 className="about-title">Winter Vibe</h5>
          <p className="about-author">Kose Side</p>
          <p className="about-date">Aug 2019</p>
        </div>
      </div>
      <div className="item-container3">
        <div className="item-grid">
          <h5 className="about-title">New Anime</h5>
          <p className="about-author">Weeb Man</p>
          <p className="about-date">Sept 2019</p>
        </div>
      </div>
    </>
  )
}

export default BlogItem;