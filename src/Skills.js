import React from "react";
import MagicBento from "./react-bits/MagicBento.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
    <section id={"skills"} className={"proj-container"}>
      <div data-aos={"fade-up"} data-aos-once={"true"}>
        <h1 className={"center-mobile code-type"}>
          <span className={"code"}>02.</span> Skills
        </h1>
        <hr />
        <div className={"d-block"}>
          <h3 className={"center-mobile code-type mt-4 mb-4"}>
            <span style={{ marginRight: "20px" }}>
              <FontAwesomeIcon icon={faCode} className="fa-fw" />
            </span>
            Languages & Technologies
          </h3>
          <MagicBento
            textAutoHide={true}
            enableStars
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={200}
            particleCount={12}
            glowColor="100, 238, 252"
            disableAnimations={false}
          />
        </div>
      </div>
    </section>
  );
}
