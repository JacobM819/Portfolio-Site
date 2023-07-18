export default function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content" style={{backgroundColor:"var(--primary)"}}>
                <div className="modal-header p-0">
                    <img id={"modal-img"} className={"card-img-top"} src={""} alt={"project image"} width={1000}/>
                    <h1 className="modal-title text-white fs-5" id="exampleModalLabel">Title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close" style={{color:"limegreen"}}></button>
                </div>
                <div className="modal-body">
                    <h6 id={"modal-langs"} className={"code"}></h6>
                </div>
                <div className="modal-footer">
                    <div className={"d-flex justify-content-between"} style={{width:"20%", maxWidth:"50px", marginRight: "5%"}}>
                        <a id={"git-link"} href={"#"} style={{color: "limegreen"}} target="_blank" rel={"noreferrer"}><i className="fab fa-github"></i></a>
                        <a id={"web-link"} href={"#"} style={{color: "limegreen"}} target="_blank" rel={"noreferrer"}><i className="fa-regular fa-arrow-up-right-from-square"></i></a>
                    </div>
                    <button type="button" className="btn resume-button" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
);
}