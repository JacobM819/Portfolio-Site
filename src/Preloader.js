import React, { useEffect, useState } from "react";
import Mobile from "./mobileWarning.js";
import App from "./App";
import { TypeAnimation } from "react-type-animation";

export default function Preloader() {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setDone(true);
        });
    }, 4200);
    // 4200);
  }, []);

  if (!done) {
    return (
      <body>
        <div id={"loader"}>
          <h4>
            <TypeAnimation
              sequence={["Jacob Meyer's Portfolio", 4200]}
              wrapper="span"
              speed={10}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              className="code"
            />
          </h4>
        </div>
        <Mobile />
      </body>
    );
  } else {
    return <App />;
  }
}
