import Project from "./Project";
import zoom from "./images/zoom.jpg";
import portfolio from "./images/portfolio.png";
import zuzaplan from "./images/zuzaplan.png";
import times from "./images/ringgold.png";
import sms from "./images/sms.png";
import primo from "./images/Primo.png";
import React from "react";

export default function Projects() {
    Project.defaultProps = {
        github: null,
        link: null
    }
    return (
        <section id={"projects"} className={"proj-container"}>
            <div className={"center-mobile d-flex gap-5"}>
                    <h1 className={"code-type"} data-aos={"fade-right"} data-aos-once={"true"}><span style={{color: "limegreen"}}>03.</span> My Projects</h1>
                <div className={"hide-mobile"} style={{marginTop:"1.5rem"}}>
                    <h6 className={"code type"}>Click on the picture for more information</h6>
                </div>
            </div>
            <hr/>
            <div className={"row mb-4"} data-aos={"fade-up"} data-aos-once={"true"}>
                <div className={"col-sm-12 col-lg-4"}>
                    <Project
                        title={"Portfolio Website"}
                        descr={"This is the site that you are on right now! It is digital portfolio with the purpose" +
                            " of showcasing what I have been working on as well as my up-to-date skills. " +
                            " It provides my contact info and makes getting in touch with me more accessible." +
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
                        descr={"A desktop application for automatically opening up Zoom calls when they are scheduled" +
                            " to start, and closing them when they are scheduled to close. This application" +
                            " makes online schooling easier by creating an organized list of calls each day." +
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
                        title={"Primo Online Store"}
                        descr={"Primo is an online store that I created for small businesses to purchase and " +
                            " to sell their products. This web application allows users to buy products" +
                            " directly from the business through the online store. " +
                            " Primo is complete with an admin panel and database, allowing store managers to add products to the page " +
                            " seamlessly with no additional coding required. Multiple businesses can use the app to upload their goods to sell, making" +
                            " it a great option for any business looking for a quick way to put their products online."}
                        img={primo}
                        langs={"PHP, PHPmyAdmin, JavaScript, HTML, CSS"}
                        github={""}
                        link={"link.com"}
                    ></Project>
                </div>
                <div className={"col"}>
                    <Project
                        title={"School Management System"}
                        descr={"This application is designed to help students create their upcoming schedules for school." +
                            " The School Management System (SMS) lets students input their previously taken classes and" +
                            " the app will provide a list of new classes that can be to take for the upcoming school" +
                            " year. Once the student creates their schedule, they can view it on the app, making it" +
                            " easier for students to stay organized."
                        }
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
                            " own, and it greatly helped my understanding of Javascript."}
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