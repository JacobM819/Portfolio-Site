import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import React from "react";
import portrait from "./images/portrait.png"

function App() {
  return (
      <body>
      <header>
        <Nav></Nav>
        <table className={"header-table"}>
            <tbody>
              <tr className={"header-table"}>
                <td>
                  <div className={"row"}>
                    <div className={"col-lg-auto m-auto"}>
                      <h1 className={"text-white"} style={{fontSize:"6.5vw"}}>Jacob Meyer</h1>
                      <h2 className={"text-white"}>Computer Science Major | Penn State University</h2>
                      <div className="flex" style={{paddingTop:"10px"}}>
                        <a href="https://github.com/JacobM819" target="_blank" rel={"noreferrer"}><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/jacob-meyer-151b57245/" target="_blank" rel={"noreferrer"}><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:jakem3350@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                      </div>
                    </div>
                    <div className={"col-lg"}><img id={"portrait"} src={portrait} alt={"portrait"} width={"300px"}/></div>
                  </div>
                </td>
              </tr>
            </tbody>
        </table>
      </header>
      <main>
        <h1 className={"text-primary"}>Hello World!</h1>
      </main>
      </body>
  );
}

export default App;
