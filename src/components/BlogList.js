import React, {useContext} from 'react';
import { BlogContext } from '../BlogContext';

function BlogFeature({feature}) {
  return (
    <>
      {/* <div className="feature-grid"> */}
        <div className="feature-container d-none-lg">
          <div className="feature-img"></div>
          <div className="feature-about feature-about-grid">
            <h5 className="about-title">{feature.title}</h5>
            <p className="about-author">{feature.author}</p>
            <p className="about-date">{feature.date}</p>
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

function BlogItem({blog}) {
  return (
    <>
      <div className="item-container">
        <div className="feature-img d-none-mobile"></div>
        <div className="item-grid">
          <h5 className="item-title about-title">{blog.title}</h5>
          <p className="item-author about-author">{blog.author}</p>
          <p className="item-date about-date">{blog.date}</p>
        </div>
      </div>
    </>
  )
}

function BlogList() {
  const {state: {blogs}} = useContext(BlogContext);
  return (
    <>
      <div className="blog-container">
        {blogs.sort((a,b) => new Date(b.date) - new Date(a.date))
          .map((feature, index) => index < 1 ? <BlogFeature feature={feature} /> : null)
        }
        <div className="blog-grid">
          {blogs.map(blogItem => {
            return <BlogItem key={blogItem.id} blog={blogItem} />
          })}
        </div>
        <p></p>
      </div>
    </>
  )
}

export default BlogList;