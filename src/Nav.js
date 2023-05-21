import Resume from "../src/misc/Meyer_CS_PSU_2022.pdf"
export default function Nav() {
    var prevScrollPos = window.scrollY;
    window.onscroll = function() {
        var currentScrollPos = window.scrollY;
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
                <li><a href={""}>Home</a></li>
                <li><a href={""}>About Me</a></li>
                <li><a href={""}>Projects</a></li>
                <li><a href={""}>Contact</a></li>
                <li><a href={Resume} target={"_blank"} rel={"noreferrer"}>Resume</a></li>
            </ul>
            <hr/>
        </nav>
    );
}
