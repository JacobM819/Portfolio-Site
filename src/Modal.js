export default function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div className="modal-dialog modal-lg modal-sm modal-dialog-centered" >
            <div className="modal-content" style={{backgroundColor:"var(--primary)"}}>
                <div id={"modal-img"} className="modal-header d-flex p-5 position-relative" style={{height:"300px", backgroundSize:"cover", backgroundPosition:"center"}}>
                    <div className={"position-absolute"} style={{bottom:"15px"}}><h1 className="type modal-title code-b fs-1" id="exampleModalLabel"></h1></div>
                </div>
                <div className="modal-body">
                    <p id={"modal-descr"}></p>
                    <h6 id={"modal-langs"} className={"code mt-4"} style={{color:"#bebebe"}}></h6>
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