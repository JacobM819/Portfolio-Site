import Project from "./Project";
import zoom from "./images/zoom.jpg";
import portfolio from "./images/portfolio.png";
import zuzaplan from "./images/zuzaplan.png";
import times from "./images/ringgold.png";
import React from "react";

export default function Projects() {
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach( entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('typing')
    //         }
    //         });
    //
    // });
    // observer.observe(document.querySelector('.header-type'));
    Project.defaultProps = {
        github: null,
        link: null
    }
    return (
        <section id={"section3"} className={"proj-container"}>
            <div className={"d-flex gap-5"}>
                <h1 className={"code"} data-aos={"fade-right"} data-aos-once={"true"}><span style={{color: "limegreen"}}>3.</span> My Projects</h1>
                <div style={{marginTop:"1.5rem"}}><h6 className={"code type"}>Click on the picture for more information</h6></div>
            </div>
            <hr/>
            <div className={"row mb-4"} data-aos={"fade-up"} data-aos-once={"true"}>
                <div className={"col-sm-12 col-lg-4"}>
                    <Project
                        title={"Portfolio Website"}
                        descr={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum" +
                            "lorem ipsum"}
                        img={portfolio}
                        imgPath={"./images/portfolio.png"}
                        langs={"React.js, Node.js, JavaScript, HTML, CSS"}
                        github={"https://github.com/JacobM819/Portfolio-Site"}
                        // link={"link.com"}
                    ></Project>
                </div>
                <div className={"col-sm-12 col-lg-4"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        langs={"Python, Zoom API"}
                        github={""}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col-sm-12 col-lg-4"}>
                    <Project
                        title={"ZuzaPlan"}
                        img={zuzaplan}
                        langs={"C#, Visual Basic"}
                        github={""}
                        link={"link.com"}
                        description={""}
                    ></Project>
                </div>
            </div>
            <div className={"row mb-4"} data-aos={"fade-up"} data-aos-once={"true"}>
                <div className={"col"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        langs={"Python, Zoom API"}
                        github={""}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col"}>
                    <Project
                        title={"School Management System"}
                        img={zoom}
                        langs={"PHP, Bootstrap, HTML, CSS"}
                        github={""}
                        link={"link.com"}
                        description={""}
                    ></Project>
                </div>
                <div className={"col"}>
                    <Project
                        title={"The Ringgold Times"}
                        img={times}
                        langs={"Javascript, HTML, CSS"}
                        github={""}
                        link={"link.com"}
                        description={""}
                    ></Project>
                </div>
            </div>
        </section>
    );
}