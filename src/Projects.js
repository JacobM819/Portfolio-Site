import Project from "./Project";
import zoom from "./images/zoom.jpg";
import React from "react";

export default function Projects() {
    return (
        <section id={"section3"} className={"proj-container"}>
            <div className={"row"}>
                <h1 className={"code d-inline col-auto"} data-aos={"fade-right"} data-aos-once={"true"}><span style={{color: "limegreen"}}>3.</span> My Projects</h1>
                <span className={"col-auto position-relative"}><h6 className={"code header-type position-absolute"} style={{bottom: "20%"}}>Click on the picture for more information</h6></span>
            </div>
            <hr/>
            <div className={"row mb-4"} data-aos={"fade-up"} data-aos-once={"true"}>
                <div className={"col"}>
                    <Project
                        title={"Zoom Meeting Organizer"}
                        img={zoom}
                        description={"Python, Zoom API"}
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
            <div className={"row mb-4"} data-aos={"fade-up"} data-aos-once={"true"}>
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
        </section>
    );
}