import React from "react";
import "./Pages/Style.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <input type="checkbox" id="check"></input>
          <label className="checkbox" htmlFor="check"><i class="fa-solid fa-bars"></i></label>
          <label>Mern Stack Dev</label>
          <ul>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500}>
                Project
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
