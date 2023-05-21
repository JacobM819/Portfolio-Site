import './App.css';
import Nav from "./Nav";
import Project from "./Project"
import React from "react";
import blank from "./images/blank.png"
import portrait from "./images/portrait.png"
import zoom from "./images/zoom.jpg"

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
                        <h3 className={"code-text mb-0"}>Hi, nice to meet you. My name is</h3>
                        <h1 className={"text-white"} style={{fontSize:"6.5vw"}}>Jacob Meyer</h1>
                        <h2 className={"text-white"} style={{fontSize:"2vw"}}>Computer Science Major | Penn State University</h2>
                        <div className="flex" style={{paddingTop:"10px"}}>
                            <a href="https://github.com/JacobM819" target="_blank" rel={"noreferrer"}><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/jacob-meyer-151b57245/" target="_blank" rel={"noreferrer"}><i className="fab fa-linkedin"></i></a>
                            <a href="mailto:jakem3350@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                        </div>
                    </div>
                    <div className={"col-lg-3"}><img id={"portrait"} className={"img-fluid"} src={blank} alt={"portrait"} width={"300vw"}/></div>
                  </div>
                </td>
              </tr>
            </tbody>
        </table>
      </header>
      <main>
          <div style={{width:'50vw', marginBottom:'60px'}} className={"center row"}>
              <div className={"col-8"}>
                  <h1 className={"code"}><span style={{color: 'limegreen'}}>1.</span> About Me</h1>
                  <hr/>
                  <p>
                      Hello, my name is Jacob Meyer and I am a student who has a passion for programming.
                      I am currently a sophomore studying computer science at Penn State University. After college,
                      I am looking forward to having a great career in the tech field.
                  </p>
                  <p>
                      In my free time, I enjoy creating software for other people to use. I have created a number of
                      apps and programs over the past few years, all of which I keep open source on my github page.
                      I am currently searching for a Software Engineering internship position for Summer 2024, and I am
                      excited to learn and grow in tech.
                  </p>
                  <p>
                      Here are some of the technologies I have worked with in my projects:
                  </p>
              </div>
              <div className={"col-4 img-frame"}>
                  <span className={"helper"}></span>
                  <img className={"img-fluid about-portrait"} src={portrait} width={"400vw"} alt={"portrait"}/>
              </div>
              <div className={"row"}>
                  <ul >
                      <li>Python</li>
                      <li>C#</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                      <li>Node.js</li>
                      <li>React</li>
                  </ul>
              </div>
          </div>
          <div className={"m-auto proj-container"}>
              <h1 className={"code"}><span style={{color: "limegreen"}}>2.</span> My Projects</h1>
              <hr/>
            <div className={"row mb-4"}>
                <div className={"col"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        description={"Lorem ipsum"}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        description={"Lorem ipsum"}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        description={"Lorem ipsum"}
                        link={"link.com"}
                    ></Project>
              </div>
            </div>
            <div className={"row mb-4"}>
                <div className={"col"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        description={"Lorem ipsum"}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        description={"Lorem ipsum"}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        description={"Lorem ipsum"}
                        link={"link.com"}
                    ></Project>
                </div>
            </div>
          </div>
      </main>
      </body>
  );
}

export default App;
