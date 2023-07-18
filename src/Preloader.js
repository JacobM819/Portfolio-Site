import React, {useEffect, useState} from 'react';
import App from "./App";
export default function Preloader() {

    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('https://jsonplaceholder.typicode.com/posts/1')
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 setData(json);
    //                 setDone(true);
    //             });
    //         }, 4200);
    //     }, [])

    if (done) {
        return(
            <body className={"z-5"}>
            <div id={"loader"}>
                <h1 className={"type"}>
                    <span className={"code"}>Jacob Meyer's</span>
                    <span className={"code"}> Portfolio </span>
                </h1>
            </div>
            </body>
        );
    } else {
        return(<App/>);
    }

}