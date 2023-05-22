import React from "react";

export default function Project(props) {
    return (
        <>
            <div className={"card"} style={{width:'21vw', maxWidth:'300px', border: 'none'}}>
                <img className={"card-img-top"} src={props.img}  alt={""}/>
                <div className={"card-body proj-body"}>
                    <h5 className={"card-title"}>{props.title}</h5>
                    <p className={"card-text"}>{props.description}</p>
                    <a href={props.link} style={{color: "limegreen"}} target="_blank" rel={"noreferrer"}><i className="fab fa-github"></i></a>
                </div>
            </div>
        </>
);
}