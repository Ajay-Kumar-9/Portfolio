import React from "react";
import "./Style.css";

export default function Skills() {
  return (
    <div className="container_div">

      <h1 className="skills_heading"  id="skills" >
        Skills
      </h1>
      <div className="skills">
        <div>
          <img src="/Media/html.png" alt="html" />
          <p>HTML</p>
        </div>
        <div>
          <img src="/Media/css.png" alt="css" />
          <p>CSS</p>
        </div>
        <div>
          <img src="/Media/javascript.png" alt="javaScript" />
          <p>javaScript</p>
        </div>
        <div>
          <img src="/Media/mongodb.png" alt="mongodb" />
          <p>MongoDB</p>
        </div>
        <div>
          {" "}
          <img src="/Media/expressjs.png" alt="express.js" />
          <p>Express.js</p>
        </div>
        <div>
          <img src="/Media/reactjs.png" alt="react.js" />
          <p>React.js</p>
        </div>
        <div>
          <img src="/Media/nodejs.png" alt="nodejs" />
          <p>Node.js</p>
        </div>
        <div>
          <img src="/Media/mongoose.png" alt="mongoose" />
          <p>Mongoose</p>
        </div>
        <div>
          <img src="/Media/git.png" alt="git" />
          <p>Git</p>
        </div>
        <div>
          <img src="/Media/github.png" alt="github" className="github" />
          <p>Github</p>
        </div>
        <div>
          <img src="/Media/bootstrap.jpg" />
          <p>Bootstrap</p>
        </div>
        <div>
          <img src="/Media/material-ui.png" alt="material-ui" />
          <p>Material-UI</p>
        </div>
        <div>
          <img src="/Media/tailwind.png" alt="tailwind CSS" />
          <p>Tailwind CSS</p>
        </div>

        <div>
          <img src="/Media/mongodbCompass.png" alt="mongoDB Compass" />
          <p>mongodbCompass</p>
        </div>
      </div>
      <h1 className="tools_heading">Tools & Software</h1>

      <div className="tools">
        <div>
          <img src="/Media/vscode.png" alt="vsCode" />
          <p>VS Code</p>
        </div>
        <div>
          <img src="/Media/chrome.png" alt="Chrome" />
          <p>Chrome</p>
        </div>
        <div>
          <img src="/Media/ChatGPT.png" alt="ChatGPT" />
          <p>ChatGPT</p>
        </div>
        <div>
          <img src="/Media/thunder.png" alt="thunder client" />
          <p>Thunder Client</p>
        </div>
      </div>
    </div>
  );
}
