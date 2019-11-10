import React, { useContext } from 'react';
import { BlogContext } from '../BlogContext';

const BlogDetail = () => {
  const {state: {currentBlog}} = useContext(BlogContext);
  return (
    <>
      <div className="detail-container">
        <h1>{currentBlog.title}</h1>
        <p>{currentBlog.author}</p>
      </div>
    </>
  )
}

export default BlogDetail;