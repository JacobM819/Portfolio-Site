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
                <li><a href={"#section1"}>About Me</a></li>
                <li><a href={"#section2"}>Skills</a></li>
                <li><a href={"#section3"}>Projects</a></li>
                <li><a href={"#section4"}>Contact</a></li>
                <li><a href={Resume} target={"_blank"} rel={"noreferrer"}>Resume</a></li>
            </ul>
        </nav>
    );
}
