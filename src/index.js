import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './pages/MainPage';
import reportWebVitals from './reportWebVitals';
import TwitterApi from './components/TwitterApi.js'
import Leagues from './pages/Leagues.js';

ReactDOM.render(
    <TwitterApi />
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
