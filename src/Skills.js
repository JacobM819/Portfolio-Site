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
        <section id={"section2"} className={"proj-container"}>
            <h1 className={"code-type"} data-aos={"fade-right"} data-aos-once={"true"}><span style={{color: "limegreen"}}>2.</span> Skills</h1>
            <hr/>
            <div className={"d-block"}>
            <h3 className={"code-type mt-4 mb-4"}><span><i className="fa-regular fa-code"></i></span> Languages & Technologies</h3>
            <div className={"grid row ml-1"}>
                <div className={"col-6"}>
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
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={bootstrap} alt={"bootstrap"}/></div>
                            <div className={"table-block"}><span className={"grid-helper"}></span><img src={js} alt={"js"}/></div>
                        </div>
                    </div>
                </div>
                <div className={"col-6 mr-0"}>
                    <div className={"skills-card p-4"}>
                        <p>
                            I have worked with and created projects using some of the most popular and in-demand languages.
                            Many of the web apps that I have created recently use a combination of React.js, PHP, Node.js, and Javascript.
                        </p>
                        <p>
                            I am proficient with functional programming and object-oriented design patterns, as I have worked in languages
                            like Python and Java in some of my personal projects.
                        </p>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div className={"d-block"}>
            <h3 className={"code-type mb-4"} style={{marginTop: "8rem"}}><span><i className=" fa-light fa-screwdriver-wrench"></i></span> Tools</h3>
            <div className={"grid row ml-1"}>
                <div className={"col-lg-6"}>
                    <div className={"skills-card p-4"}>
                        <p>
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