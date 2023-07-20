export default function Project(props) {

    function updateModal() {
        document.getElementById("exampleModalLabel").innerHTML = props.title;
        // document.getElementById("modal-img").src = props.img;
        document.getElementById("modal-img").style.backgroundImage = `images${props.img}`;
        console.log(`./images${props.img}`);
        document.getElementById("modal-langs").innerHTML = props.description;
        document.getElementById("git-link").href = props.link;
        document.getElementById("web-link").href = props.link;
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
                <div className={"card-body proj-body"}>
                    <h5 className={"card-title"}>{props.title}</h5>
                    <p className={"card-text code"}>{props.description}</p>
                    <div className={"d-flex justify-content-between"} style={{width:"20%", maxWidth:"50px", minWidth:"40px"}}>
                        <a href={props.link} style={{color: "limegreen"}} target="_blank" rel={"noreferrer"}><i className="fab fa-github"></i></a>
                        <a href={props.link} style={{color: "limegreen"}} target="_blank" rel={"noreferrer"}><i className="fa-regular fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </>
);
}