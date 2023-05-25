import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap/bootstrap.css'
import './bootstrap/bootstrap-grid.css'
import './bootstrap/bootstrap-reboot.css'
import Preloader from './Preloader.js';
import App from './App';
// import Preloader from './Preloader';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Preloader/>
      {/*<App/>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
