import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import {AddBlogForm} from './components/BlogForm';

import './App.css'

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <div className="bg-black">
          <Navbar />
        </div>
        <div className="bg-white"></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={BlogList} />
          <Route path="/add-blog-form" component={AddBlogForm} />
          <Route path="/detail" component={BlogDetail} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
