import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function ProjectLanguages({ langs }) {
  console.log("first", langs);

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {langs.map((logo) => {
            return <p style={{ fontSize: "15px" }}> {logo.name}</p>;
          })}
        </ul>
      </div>
    </div>
  );
}
