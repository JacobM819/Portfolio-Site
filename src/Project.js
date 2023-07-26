export default function Project(props) {
    function updateModal() {
        document.getElementById("exampleModalLabel").innerText = props.title;
        // document.getElementById("modal-img").style.backgroundImage = props.imgPath;
        document.getElementById("modal-descr").innerText = props.descr;
        document.getElementById("modal-img").style.backgroundImage = `url(${props.img})`;
        console.log(props.imgPath);
        document.getElementById("modal-langs").innerHTML = props.langs;
        document.getElementById("git-link").href = props.github;
        document.getElementById("web-link").href = props.link;
}

    function hideLinks() {
        if (props.github) {
            document.getElementById("git-link").hidden = true;
        }
        // if (props.link) {
            document.getElementById("web-link").style.display = 'none';
        // }
    }

    return (
        <>
            <div className={"card"} style={{width:'21vw', maxWidth:'300px', border: 'none'}} data-toggle="modal" data-target="#exampleModal">
                <button onClick={updateModal} type={"button"} className={"proj-button btn"} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img className={"card-img-top"} src={props.img} alt={"project image"}/>
                    <div className={"overlay"}>
                        <i className="fa-regular fa-magnifying-glass-plus proj-icon"></i>
                    </div>
                </button>
                <div className={"card-body proj-body position-relative"}>
                    <h5 className={"card-title"}>{props.title}</h5>
                    <p className={"card-text code"} style={{color:"#bebebe"}}>{props.langs}</p>
                    <div className={"d-flex justify-content-between position-absolute"} style={{width:"20%", maxWidth:"50px", minWidth:"40px", bottom: "1.3rem"}}>
                        <a href={props.github} style={{color: "limegreen"}} target="_blank" rel={"noreferrer"}><i id={"git-link"} className="fab fa-github"></i></a>
                        <a  id={"web-link"} href={props.link} style={{color: "limegreen"}} target="_blank" rel={"noreferrer"}><i className="fa-regular fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            {hideLinks}
        </>
);
}