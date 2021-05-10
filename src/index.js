import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HakProfilePage from './pages/HakProfilePage';
import MainPage from './pages/MainPage';
import reportWebVitals from './reportWebVitals';
import SignUpForm from './pages/SignUpForm';
import Main from './pages/Main';
import NoTeamPage from './pages/NoTeamPage';

ReactDOM.render(
    <Main/>
    // <NoTeamPage />
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
