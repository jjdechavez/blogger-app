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
    case 'SET_BLOG':
      // const getId = state.blogs.filter(blog => blog.id === action.blog.id);
      // const getBlog = {
      //   id: action.blog.id,
      //   title: action.blog.title,
      //   author: action.blog.author,
      //   blog: action.blog.blog,
      //   date: action.blog.date
      // }
      // console.log(getId, getBlog);

      return {
        ...state,
        viewDetail: true,
        currentBlog: {
          id: action.blog.id,
          title: action.blog.title,
          author: action.blog.author,
          blog: action.blog.blog,
          date: action.blog.date
        }
      }
    case 'BACK_TO_LAST_PAGE':
      return {
        ...state,
        viewDetail: false
      }
    default:
      return state
  }
}

export const BlogContext = createContext();

function BlogContextProvider(props) {
  const initialFormState = {id: null, title: '', author: '', blog: '', date: null};
  const dark = {bg: '#1A1A1A', syntax: '#fff'};
  const light = {bg: '#fff', syntax: '#000'};

  const initialState = { blogs: blogDatas, currentBlog: initialFormState, viewDetail: false, dark, light };
  const [state, dispatch] = useReducer(blogReducer, initialState);
  // console.log(state.blog)
  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider;

