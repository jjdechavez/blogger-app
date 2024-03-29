import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import BlogContextProvider from './BlogContext';
import * as serviceWorker from './serviceWorker';
import AuthContextProvider from './AuthContext';

ReactDOM.render(
  <AuthContextProvider>
    <BlogContextProvider>
      <Router>
        <App />
      </Router>
    </BlogContextProvider>
  </AuthContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
