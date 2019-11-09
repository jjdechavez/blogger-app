import React, {useState, useContext} from 'react';
import { BlogContext } from '../BlogContext';

export const AddBlogForm = () => {
  const {dispatch} = useContext(BlogContext);

  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(title, blog)
    dispatch({type: 'ADD_BLOG', newBlog: {title, blog}});
    setTitle('');
    setBlog('');
  }

  return (
    <div className="form-container">
      <div className="m-center">
        <div className="head-title">
          <p className="form-title">Add Blog :</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="label">Title</label>
            <input 
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title for the blog..."
            />
          </div>
          <div className="form-row">
            <label>Blog</label>
            <textarea 
              name="blog"
              className="form-textarea"
              cols="30" 
              rows="10"
              value={blog}
              onChange={e => setBlog(e.target.value)} 
            />
          </div>
          <div className="btn-container">
            <button className="btn btn-save">Save</button>
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}