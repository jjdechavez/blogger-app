import React, { createContext, useReducer } from 'react';
import { blogDatas } from './data';
import uuid from 'uuid/v1';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      const newDate = new Date();
      const nameMonth = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec");

      const dateData = nameMonth[newDate.getMonth()] + ' ' + newDate.getFullYear();

      return {
        ...state,
        blogs: [...state.blogs, {
          id: uuid(),
          title: action.newBlog.title,
          author: 'new author',
          blog: action.newBlog.blog,
          date: dateData
        }]
      }
    default:
      return state
  }
}

export const BlogContext = createContext();

function BlogContextProvider(props) {
  const initialState = { blogs: blogDatas }
  const [state, dispatch] = useReducer(blogReducer, initialState);
  // console.log(state.blog)
  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider;

