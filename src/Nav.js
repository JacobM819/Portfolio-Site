import React from "react";
import Resume from "../src/misc/Meyer_CS_PSU_2022.pdf"
import logo from "./images/logo.svg";
export default function Nav() {
    let prevScrollPos = window.scrollY;
    window.onscroll = function() {
        let currentScrollPos = window.scrollY;
        if (prevScrollPos >= currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
        prevScrollPos = currentScrollPos;
    }
    return  (
        <nav id={'navbar'}>
            <ul>
                <li data-aos={"fade-down"} data-aos-delay={"100"} data-aos-once={"true"}><a href={"#about"}>About Me</a></li>
                <li data-aos={"fade-down"} data-aos-delay={"200"} data-aos-once={"true"}><a href={"#skills"}>Skills</a></li>
                <li data-aos={"fade-down"} data-aos-delay={"300"} data-aos-once={"true"}><a href={"#projects"}>Projects</a></li>
                <li data-aos={"fade-down"} data-aos-delay={"400"} data-aos-once={"true"}><a href={"#contact"}>Contact</a></li>
                <li data-aos={"fade-down"} data-aos-delay={"500"} data-aos-once={"true"}><a href={Resume} target={"_blank"} rel={"noreferrer"}>Resume</a></li>
            </ul>
        </nav>
    );
}
