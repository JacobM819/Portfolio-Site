import Project from "./Project";
import zoom from "./images/zoom.jpg";
import portfolio from "./images/portfolio.png";
import zuzaplan from "./images/zuzaplan.png";
import times from "./images/ringgold.png";
import sms from "./images/sms.png";
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
                <h1 className={"code-type"} data-aos={"fade-right"} data-aos-once={"true"}><span style={{color: "limegreen"}}>3.</span> My Projects</h1>
                <div style={{marginTop:"1.5rem"}}><h6 className={"code type"}>Click on the picture for more information</h6></div>
            </div>
            <hr/>
            <div className={"row mb-4"} data-aos={"fade-up"} data-aos-once={"true"}>
                <div className={"col-sm-12 col-lg-4"}>
                    <Project
                        title={"Portfolio Website"}
                        descr={"This is the site that you are on right now! It is digital portfolio with the purpose" +
                            " of showcasing what I have been working on as well as my up-to-date skills. " +
                            " It provides my contact info and makes getting in touch with me more accessable" +
                            " This project used a variety of front-end and back-end languages, and is one of my" +
                            " favorite projects."}
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
                        descr={"A desktop application for automatically opening up zoom calls when they are scheduled" +
                            " to start, and closing them when they are scheduled to close. This application" +
                            " Makes online schooling easier by creating an organized list of calls each day" +
                            " I creating this application with the aim of assisting students who take many online classes, and have to juggle around" +
                            " a bunch of zoom links each day."}
                        img={zoom}
                        langs={"Python, Zoom API"}
                        github={""}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col-sm-12 col-lg-4"}>
                    <Project
                        title={"ZuzaPlan"}
                        descr={"ZuzaPlan is a desktop event management application that makes it easy for a busy person to stay" +
                            " organized. It has an event calendar for each month, and lets the user add new events." +
                            " ZuzaPlan also has an online meeting organizer similar to the Zoom application." +
                            " In this project, I lead a small group of students on both the front-end and back-end." +
                            " This app was a great learning experience for me and taught me the ins and outs of C#."}
                        img={zuzaplan}
                        langs={"C#, Visual Basic"}
                        github={"https://github.com/Bubbycolditz/ZuzaPlan-OLD"}
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
                        descr={""}
                        img={sms}
                        langs={"PHP, Bootstrap, HTML, CSS"}
                        github={"https://github.com/Bubbycolditz/New-Blog"}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col"}>
                    <Project
                        title={"The Ringgold Times"}
                        descr={"In high school, I created a website to show news and events of my school district." +
                            " It had information like the monthly cafeteria menu, the class times, and the standings" +
                            " of the school sports teams. This was one of my first websites I created entirely on my" +
                            " it greatly helped my understanding of Javascript."}
                        img={times}
                        langs={"Javascript, HTML, CSS"}
                        github={"https://github.com/JacobM819/The-Ringgold-Times"}
                        link={""}
                    ></Project>
                </div>
            </div>
        </section>
    );
}