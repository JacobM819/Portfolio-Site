import React from "react";
import html from "./images/langs/html.png";
import css from "./images/langs/css.png";
import js from "./images/langs/js.png";
import python from "./images/langs/python.png";
import java from "./images/langs/java.png";
import react from "./images/langs/react.png";
import node from "./images/langs/node.png";
import cs from "./images/langs/c#.png"
import php from "./images/langs/php.png";
import linux from "./images/langs/linux.png";
import github from "./images/langs/github.png";
import vs from "./images/langs/vs.svg.png"
import bootstrap from "./images/langs/bootstrap.svg.png";
import myadmin from "./images/langs/myadmin.png";


export default function Skills() {
    return (
        <section id={"skills"} className={"proj-container"}>
            <div data-aos={"fade-up"} data-aos-once={"true"}>
            <h1 className={"center-mobile code-type"}><span style={{color: "limegreen"}}>02.</span> Skills</h1>
            <hr/>
            <div className={"d-block"}>
            <h3 className={"center-mobile code-type mt-4 mb-4"}>
                <span style={{marginRight:"20px"}}>
                    <i className="fa-regular fa-code"></i>
                </span>
                Languages & Technologies
            </h3>
            <div className={"grid row ml-1"}>
                <div className={"col-12 col-md-6"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-3"}>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={python} alt={"python"}/></div>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={node} alt={"node"}/></div>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={html} alt={"html"}/></div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={java} alt={"java"}/></div>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={php} alt={"php"}/></div>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={css} alt={"css"}/></div>
                        </div>
                        <div className={"col-3"}>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={react} alt={"react"}/></div>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={cs} alt={"bootstrap"}/></div>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={js} alt={"js"}/></div>
                        </div>
                    </div>
                </div>
                <div className={"col-12 col-md-6 mr-0"}>
                    <div className={"skills-card"} style={{padding: "30px"}}>
                        <p>
                            I have worked with and created projects using some of the most popular and in-demand languages.
                            Many of the web apps that I have created recently use a combination of React.js, PHP, Node.js, and Javascript.
                        </p>
                        <p>
                            I am proficient with functional programming and object-oriented design patterns, as I have worked in languages
                            like Python and Java in some of my personal projects.
                        </p>
                        <p className={"mb-0"}>
                            One of my favorite parts about software engineering is learning new languages. I am always learning a
                            new language, and I am currently working on C++.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <div className={"hide-mobile"} style={{marginTop:"4rem"}}></div>
            <div className={"d-block"} style={{marginTop:"5rem"}} data-aos={"fade-up"} data-aos-once={"true"}>
            <h3 className={"center-mobile code-type mb-4"}>
                <span style={{marginRight:"20px"}}>
                    <i className="fa-light fa-screwdriver-wrench"></i>
                </span>
                Tools
            </h3>
            <div className={"grid row ml-1"}>
                <div className={"col-lg-6"}>
                    <div className={"skills-card"} style={{padding: "30px"}}>
                        <p>
                            Throughout my years in creating software, I have had the opportunity to explore a variety
                            of tools that are used in modern-day applications.
                        </p>
                        <p>
                            I have worked on many projects using Git and Github, while also hosting some applications
                            using an Ubuntu Linux server that I have at home. In many of my applications that require
                            a database, I typically use PHPmyAdmin as a front end for MySQL.
                        </p>
                        <p className={"mb-0"}>
                            Currently, I am focused on learning Amazon Web Services (AWS), as I know how big of a role cloud computing
                            plays in today's tech industry.
                        </p>
                    </div>
                </div>
                <div className={"col-lg-6 my-auto"}>
                <div className={"row justify-content-center"}>
                    <div className={"col-3"}><span className={"grid-helper"}></span><img src={github} alt={"github"}/></div>
                    <div className={"col-3"}><span className={"grid-helper"}></span><img src={vs} alt={"vs code"}/></div>
                    <div className={"col-3"}><span className={"grid-helper"}></span><img src={linux} alt={"linux"}/></div>
                    <div className={"col-3"}><span className={"grid-helper"}></span><img src={myadmin} alt={"mysql"}/></div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}