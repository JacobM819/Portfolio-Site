export default function Contact() {
    return (
        <section id={"contact"} className={"contact mb-4"} style={{marginTop:"5rem"}}>
            <h1 className={"code-type"} data-aos={"fade-right"} data-aos-once={"true"}><span style={{color: "limegreen"}}>4.</span> Get in Contact</h1>
            <h5 className={"code"} style={{color:"limegreen"}}>I'd love to hear from you.</h5>
            <div className={"row justify-content-center"} style={{marginTop: "5rem", marginBottom:"5rem"}}>
            <div className={"col-3"}>
                <i className="fa-solid fa-location-dot mb-2" style={{fontSize:"30px"}}></i>
                <h4>Where I'm located</h4>
                <a href={"https://goo.gl/maps/FnPWgECYtr7W2sMUA"} target={"_blank"} rel="norefferer" className={"text-white"}>South Park, PA</a>
            </div>
            <div className={"col-3"}>
                <i className="fa-solid fa-mailbox-flag-up fs-4 mb-2" style={{fontSize:"30px"}}></i>
                <h4>Email me at</h4>
                <a href={"mailto:jakem3350@gmail.com"} target="_blank" rel="norefferer" className={"text-white"}>jakem3350@gmail.com</a>
            </div>
            <div className={"col-3"}>
                <i className="fa-brands fa-linkedin fs-4 mb-2" style={{fontSize:"30px"}}></i>
                <h4>Connect on LinkedIn</h4>
                <a href={"https://www.linkedin.com/in/jacob-meyer-151b57245/"} target="_blank" rel="norefferer" className={"text-white"}>My Profile</a>
            </div>
            </div>
        </section>
    );
}