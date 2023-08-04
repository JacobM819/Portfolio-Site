import React, {useEffect, useState} from 'react';
import Mobile from "./mobileWarning.js"
import App from "./App";
export default function Preloader() {

    const [data, setData] = useState([]);
    const [done, setDone] = useState(undefined);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                    setDone(true);
                });
            }, 4200);
            // 4200);
        }, [])

    if (!done) {
        return(
            <body>
            <div id={"loader"}>
                <h1 className={"type user-select-none"}>
                    <span className={"code"}>Jacob Meyer's</span>
                    <span id={"desk-pre"} className={"code"}> Portfolio </span>
                </h1>
            </div>
            <Mobile/>
            </body>
        );
    } else {
        return(<App/>);
    }

}