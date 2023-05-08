import React from 'react';
import ReactDOM from 'react-dom/client';
// import {Helmet} from "react-helmet"
import './index.css';
import './bootstrap/bootstrap.css'
import './bootstrap/bootstrap-grid.css'
import './bootstrap/bootstrap-reboot.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

function Page() {
    return (
       <div>Hello World!</div>
    //     <header>
    //         <Nav></Nav>
    //         <table className="header-table">
    //             <tbody>
    //             <tr className="align-middle banner container">
    //                 <td>
    //                     <div className="row">
    //                         <div className="col-lg-auto my-auto">
    //                             <div style="margin: 0 auto;">
    //                                 <h1 className="text-white" style="font-size:6.5vw;">Jacob Meyer</h1>
    //                                 <h2 className="text-white">Computer Science Major | Penn State University</h2>
    //                                 <div className="flex" style="padding-top:10px;">
    //                                     <a href="https://github.com/JacobM819" target="_blank"><i className="fab fa-github"></i></a>
    //                                     <a href="https://www.linkedin.com/in/jacob-meyer-151b57245/" target="_blank"><i className="fab fa-linkedin"></i></a>
    //                                     <a href="mailto:jakem3350@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <img id="portrait" src="images/portrait.png" alt="portrait" width="300px">
    //                     </div>
    //                 </td>
    //             </tr>
    //             </tbody>
    //         </table>
    //     </header>
    // <main>
    //     <h1 className="text-primary">Hello World!</h1>
    // </main>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
