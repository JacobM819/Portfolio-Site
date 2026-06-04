import Nav from "./Nav";
import React, { useEffect } from "react";
import Aos from "aos";
import "./misc/aos.scss";
// import blank from "./images/blank.png";
import { TypeAnimation } from "react-type-animation";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Modal from "./Modal";
import Mobile from "./mobileWarning.js";
import PixelBlast from "./react-bits/PixelBlast.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function App() {
  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  return (
    <div className="app-container">
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#326489"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.1}
          transparent
        />
      </div>
      <Modal />
      <Nav />
      <header className={"d-flex align-items-center justify-content-center"}>
        <aside>
          <ul>
            <li data-aos={"fade-left"} data-aos-delay={"100"}>
              <a
                href="https://github.com/JacobM819"
                target="_blank"
                rel={"noreferrer"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li data-aos={"fade-left"} data-aos-delay={"200"}>
              <a
                href="https://www.linkedin.com/in/jacob-meyer-151b57245/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-linkedin"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
            <li data-aos={"fade-left"} data-aos-delay={"300"}>
              <a
                href="https://www.instagram.com/jacob.meyerr/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="fa-fw"
                />
              </a>
            </li>
            <li data-aos={"fade-left"} data-aos-delay={"400"}>
              <a
                href="mailto:jakem3350@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="fa-regular"
                />
              </a>
            </li>
          </ul>
        </aside>
        <div
          className="d-flex flex-column align-items-start text-start px-4 px-md-5"
          style={{ width: "100%", maxWidth: "1000px" }}
        >
          <div data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
            <h3
              style={{
                fontSize: "clamp(1.0rem, 1.2vw, 1.5rem)",
                color: "var(--accent)",
              }}
              className="code mb-3"
            >
              Hi, nice to meet you. My name is
            </h3>
          </div>
          <div data-aos="fade-up" data-aos-delay="900" data-aos-once="true">
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                fontWeight: "700",
                lineHeight: "1.1",
              }}
              className="text-white mb-2"
            >
              Jacob Meyer.
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="1100"
            data-aos-once="true"
            className="mb-4"
            style={{ minHeight: "3.5rem" }}
          >
            <TypeAnimation
              sequence={[
                "I build robust software solutions.",
                2000,
                "I design resilient cloud systems.",
                2000,
                "I engineer site reliability.",
                2000,
                "I deploy autonomous agents.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                fontWeight: "600",
                display: "inline-block",
                color: "var(--accent)",
              }}
              repeat={Infinity}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="1300" data-aos-once="true">
            <p
              className="dim col-12 col-md-9 px-0 mb-5"
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
                lineHeight: "1.6",
                color: "#a0aEC0",
              }}
            >
              I am a Software Engineer and SRE specializing in building scalable
              systems, automating DevOps pipelines, and architecting resilient
              infrastructure. Penn State Computer Science alumnus.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="1500" data-aos-once="true">
            <a
              href="#projects"
              className="btn btn-outline-info px-4 py-2.5 fw-semibold"
              style={{
                color: "var(--accent)",
                borderColor: "var(--accent)",
                borderRadius: "4px",
                transition: "all 0.3s ease",
                fontFamily: "var(--f-code)",
                fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(110, 238, 252, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View my work
             <FontAwesomeIcon
               icon={faAngleDown}
               className="fa-fw ms-2"
             />
            </a>
          </div>
        </div>
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <footer>
        <Contact />
        <h6 style={{ color: "limegreen" }}>
          Designed & Developed by Jacob Meyer 2026
        </h6>
      </footer>
      <Mobile />
    </div>
  );
}

export default App;
