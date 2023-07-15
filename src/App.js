import Nav from "./Nav";
import React, { useEffect } from "react";
import Aos from "aos";
import "./misc/aos.scss";
import blank from "./images/blank.png";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Modal from "./Modal";

function App() {
    useEffect(() => {
       Aos.init({ duration: 750});
    }, []);
        return (
      <body>
      <Modal/>
      <header>
          <Nav/>
          <aside>
              <ul>
                  <li data-aos={"fade-left"}><a href="https://github.com/JacobM819" target="_blank" rel={"noreferrer"}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                  <li data-aos={"fade-left"} data-aos-delay={"100"}><a href="https://www.linkedin.com/in/jacob-meyer-151b57245/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
                  <li data-aos={"fade-left"} data-aos-delay={"200"}><a href="https://www.instagram.com/jacob_meyer115/" target={"_blank"} rel="noreferrer"><i height="24px" className="fa-brands fa-instagram fa-fw"></i></a></li>
                  <li data-aos={"fade-left"} data-aos-delay={"300"}><a href="mailto:jakem3350@gmail.com" target="_blank" rel="noreferrer"><i className="fa-light fa-envelope fa-fw"></i></a></li>
              </ul>
          </aside>
        <table className={"header-table"}>
            <tbody>
              <tr className={"header-table"}>
                <td>
                  <div className={"row"}>
                    <div className={"col-lg-auto m-auto"}>
                        <h3 className={"code-text mb-0"} data-aos={"fade-up"} data-aos-once="true">
                            Hi, nice to meet you. My name is
                        </h3>
                        <h1 className={"text-white"} style={{fontSize:"6.5vw"}} data-aos={"fade-up"} data-aos-delay={"100"} data-aos-once="true">
                            Jacob Meyer
                        </h1>
                        <h2 className={"text-white"} style={{fontSize:"2vw"}} data-aos={"fade-up"} data-aos-delay={"200"} data-aos-once="true">
                            Computer Science Major | Penn State University
                        </h2>
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
          <About/>
          <Skills/>
          <Projects/>
      </main>
      <footer>
          <Contact></Contact>
          <h6 style={{color: "limegreen"}}>Designed & Developed by Jacob Meyer 2023</h6>
      </footer>
      </body>
  );
}

export default App;
