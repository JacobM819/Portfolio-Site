import portrait from "./images/portrait.png";
import Resume from "./misc/Meyer_CS_PSU_2022.pdf";
import React from "react";

export default function About() {
return (
    <section id={"section1"} style={{width: '60%', maxWidth: '1000px'}} className={"mt-0"}>
        <div className={"row"}>
            <div className={"col-8"}>
                <h1 className={"code-type"} data-aos={"fade-right"} data-aos-once="true"><span
                    style={{color: 'limegreen'}}>1.</span> About Me</h1>
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
        </div>
        <div className={"row"}>
            <div className={"col mt-4"}>
            <a href={Resume} className={"link-button resume-button code"} target={"_blank"} rel={"noreferrer"}>Check out my resume</a>
            </div>
        </div>
    </section>
);
}