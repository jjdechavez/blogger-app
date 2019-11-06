import React from 'react';

function BlogItem() {
  return (
    <>
      <div className="blog-grid">
        <div className="item-container">
          <div className="feature-img d-none-mobile"></div>
          <div className="item-grid">
            <h5 className="item-title about-title">Count Octagon</h5>
            <p className="item-author about-author">Friz Knuckle</p>
            <p className="item-date about-date">Feb 2019</p>
          </div>
        </div>
        <div className="item-container2">
          <div className="feature-img d-none-mobile"></div>
          <div className="item-grid">
            <h5 className="item-title about-title">Winter Vibe</h5>
            <p className="item-author about-author">Kose Side</p>
            <p className="item-date about-date">Aug 2019</p>
          </div>
        </div>
        <div className="item-container3">
          <div className="feature-img d-none-mobile"></div>
          <div className="item-grid">
            <h5 className="item-title about-title">New Anime</h5>
            <p className="item-author about-author">Weeb Man</p>
            <p className="item-date about-date">Sept 2019</p>
          </div>
        </div>
        <div className="item-container3">
          <div className="feature-img d-none-mobile"></div>
          <div className="item-grid">
            <h5 className="item-title about-title">Hide</h5>
            <p className="item-author about-author">Peter Parker</p>
            <p className="item-date about-date">Jun 2019</p>
          </div>
        </div>
        {/* <div className="item-container3">
          <div className="feature-img d-none-mobile"></div>
          <div className="item-grid">
            <h5 className="item-title about-title">Hide</h5>
            <p className="item-author about-author">Peter Parker</p>
            <p className="item-date about-date">Jun 2019</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default BlogItem;