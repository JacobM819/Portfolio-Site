import React, { useEffect, useRef, useState } from "react";
import Resume from "../src/misc/Jacob Meyer Resume 2024.pdf";
import logo from "./images/logo.svg";

export default function Nav() {
    const [showNav, setShowNav] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const prevScrollY = useRef(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10 || prevScrollY.current >= currentScrollY) {
                setShowNav(true);
            } else {
                setShowNav(false);
                setMenuOpen(false);
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav
            id="navbar"
            className={`navbar navbar-expand-md navbar-dark fixed-top shadow-sm py-3 ${
                showNav ? "navbar-visible" : "navbar-hidden"
            }`}
        >
            <div className="container">
                <a className="navbar-brand d-flex align-items-center gap-3" href="#top">
                    <img src={logo} alt="Jacob Meyer logo" height="32" />
                    <span className="fw-semibold">Jacob Meyer</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="mainNavbar"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse justify-content-end ${
                        menuOpen ? "show" : ""
                    }`}
                    id="mainNavbar"
                >
                    <ul className="navbar-nav align-items-md-center gap-md-3 ms-auto">
                        <li
                            className="nav-item"
                            data-aos="fade-down"
                            data-aos-delay="100"
                            data-aos-once="true"
                        >
                            <a className="nav-link code-type" href="#about" onClick={closeMenu}>
                                <span className="me-1 code">01.</span> About Me
                            </a>
                        </li>

                        <li
                            className="nav-item"
                            data-aos="fade-down"
                            data-aos-delay="200"
                            data-aos-once="true"
                        >
                            <a className="nav-link code-type" href="#skills" onClick={closeMenu}>
                                <span className="me-1 code">02.</span> Skills
                            </a>
                        </li>

                        <li
                            className="nav-item"
                            data-aos="fade-down"
                            data-aos-delay="300"
                            data-aos-once="true"
                        >
                            <a className="nav-link code-type" href="#projects" onClick={closeMenu}>
                                <span className="me-1 code">03.</span> Projects
                            </a>
                        </li>

                        <li
                            className="nav-item"
                            data-aos="fade-down"
                            data-aos-delay="400"
                            data-aos-once="true"
                        >
                            <a className="nav-link code-type" href="#contact" onClick={closeMenu}>
                                <span className="me-1 code">04.</span> Contact
                            </a>
                        </li>

                        <li
                            className="nav-item mt-2 mt-md-0"
                            data-aos="fade-down"
                            data-aos-delay="500"
                            data-aos-once="true"
                        >
                            <a
                                href={Resume}
                                className="nav-button ms-md-2 code-type"
                                target="_blank"
                                rel="noreferrer"
                                onClick={closeMenu}
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}