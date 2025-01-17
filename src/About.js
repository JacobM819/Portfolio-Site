import portrait from "./images/portrait.jpg";
import Resume from "./misc/Jacob Meyer Resume 2024.pdf";
import React from "react";

export default function About() {
return (
    <section id={"about"} style={{ maxWidth: '1000px'}} className={"mt-0"} data-aos={"fade-up"} data-aos-once={"true"}>

        <div className={"row"}>
            <div className={"col-lg-8 col-12 order-1 order-lg-1"}>
                <div className={"d-flex gap-5"}>
                    <h1 className={"code-type"}><span style={{color: "limegreen"}}>1.</span>About Me</h1>
                </div>
                <hr/>
                <p>
                    Hello! I’m Jacob Meyer, and I have a passion for creating software that solves real problems.
                    My interest in creating apps started in high school, where I learned to code to make online school easier
                    and more enjoyable for students. Through the years, I have gained experience in designing applications
                    from simple landing pages, all the way to full scale applications with thousands of users.
                    I am always eager to learn new things and find ways to improve my code to provide seamless user
                    experiences.
                </p>
                <p>
                    Currently, I am in my third year at Penn State University, where I am studying computer science.
                    I am searching for a Software Engineering Internship for the Summer of 2025, if you
                    are interested in hiring, feel free to contact me via email or LinkedIn.
                    After college, I would like to have a career in back-end software-engineering, where I can create
                    efficient, scalable code for others to enjoy.
                </p>
                <p>
                    When I am not working on passion projects, I like to stay active by playing tennis or going to
                    the gym. I also like to play video games and watch movies or TV shows.
                </p>
            </div>
            <div className={"col-lg-4 col-12 order-2 order-lg-2 img-frame img-frame"}>
                <br/>
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