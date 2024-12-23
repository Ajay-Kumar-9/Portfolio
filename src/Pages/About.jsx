import React from "react";
import "./Style.css";

export default function About() {
  return (
    <div>
      <div className="row about_div">
        <div className="col-6 about" id="about">
          <h1>Hi, I’m Ajay, a MERN Stack Developer</h1>
          <p className="about_skills">
            I create robust and scalable web applications with MongoDB, Express,
            React, and Node.js, focusing on both seamless front-end experiences
            and efficient back-end solutions.
          </p>
        </div>
        <div className="col-5">
          <img src="Media/Ajay.jpg" className="image" />
        </div>
      </div>
    </div>
  );
}
