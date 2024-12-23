import React from "react";
import "./Style.css";

export default function Contact() {
  return (
    <div className="container mb-5">
      <div className="row" id="contact">
        <h1>Contact</h1>
        <div className="col-12 col-md-6 col-sm-4">
          <img src="/Media/contact.png" className="contact-img" />
        </div>
        <div className="col-12 col-md-6 col-sm-4 connection">
          <h1 className="connect">Let's Connect on....</h1>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/ajay-kumar036/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin linkedin"></i>
            </a>
            <a href="mailto:ajayyy0036@gmail.com" target="_blank">
              <i class="fa fa-envelope email"></i>
            </a>
            <a href="https://github.com/Ajay-Kumar-9" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
