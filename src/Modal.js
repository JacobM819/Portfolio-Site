export default function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content" style={{backgroundColor:"var(--primary)"}}>
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close" style={{color:"limegreen"}}></button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn resume-button" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
);
}