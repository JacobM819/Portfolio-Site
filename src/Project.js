export default function Project(props) {
    return (
        <>
            <div className="modal fade" id="projectModal" tabIndex="-1" role="dialog"
                 aria-labelledby="projectModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="projectModal">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"card"} style={{width:'21vw', maxWidth:'300px', border: 'none'}} data-toggle="modal" data-target="#exampleModal">
                <button className={"proj-button"}>
                    <div className={"overlay"}>
                        <img className={"card-img-top"} src={props.img} alt={"project image"}/>
                    </div>
                </button>
                <div className={"card-body proj-body"}>
                    <h5 className={"card-title"}>{props.title}</h5>
                    <p className={"card-text code"}>{props.description}</p>
                    <a href={props.link} style={{color: "limegreen"}} target="_blank" rel={"noreferrer"}><i className="fab fa-github"></i></a>
                </div>
            </div>
        </>
);
}