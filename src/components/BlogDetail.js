import React, { useContext } from 'react';
import { BlogContext } from '../BlogContext';

const BlogDetail = () => {
  const {state: {currentBlog}} = useContext(BlogContext);
  return (
    <>
      <div className="detail-container">
        <div className="m-center m-top">
          <div className="header-detail">
            <h1 className="header-title">{currentBlog.title}</h1>
            <div className="about-detail">
              <p className="header-author">by: {currentBlog.author}</p>
              <p className="header-date">{currentBlog.date}</p>
            </div>
          </div>
          <div className="blog-detail">{currentBlog.blog}</div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail;