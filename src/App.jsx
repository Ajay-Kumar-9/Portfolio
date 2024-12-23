import React from "react";
import Navbar from "./Navbar"; 
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div>
        <Navbar />
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        
    </div>
  );
}

export default App;
