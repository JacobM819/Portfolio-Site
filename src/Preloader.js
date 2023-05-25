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
    //         }, 2000);
    //     }, [])

    if (done) {
        return(
            <body className={"z-5"}>
            <h1 id={"loader"}>
                <span className={"code"}>Jacob Meyer</span>
                <span className={"code"}> Portfolio_</span>
            </h1>
            </body>
        );
    } else {
        return(<App/>);
    }

}