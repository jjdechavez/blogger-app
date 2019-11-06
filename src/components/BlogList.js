import React from 'react';
import BlogFeature from './BlogFeature';
import BlogItem from './BlogItem';

function BlogList() {
  return (
    <>
      <div className="blog-container">
        <BlogFeature />
        <BlogItem />
      </div>
    </>
  )
}

export default BlogList;