import "./App.css";
import React from "react";

//components
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Content from "./pages/Content";

//images
import logo from "./assets/images/myphoto2.jpg";
import linkedin from "./assets/images/linkedin.jpg";
import github from "./assets/images/github.jpg";

function App() {
   return (
      <div className="App">
         <header>
            <Navbar />
         </header>
         <body className="App-header">
            <h2 className=" u-custom-font u-font-merriweather u-text u-text-default u-text-palette-2-base u-text-1">
               Biography
            </h2>
            <img src={logo} className="u-image u-image-circle u-image-1" alt="logo" />
            <p>Juan P Contreras</p>
            <p className="u-align-justify u-text u-text-grey-40 u-text-3">
               {" "}
               I'm a driven individual that highly values knowledge and hard work. I am
               motivated by challenges in my tasks, I love critical thinking, my work
               environment and most importantly my family. I aspire to grow in a
               company with upward mobility that promotes self growth and team
               building. Some of my hobbies include playing Guitar, going to Disneyland
               with my daughter, traveling with friends, watching Soccer, studying
               Swedish, and learning new coding languages.
            </p>
            <div>
               <a href="https://www.linkedin.com/in/jpcontreras87/">
                  <img className="icons" src={linkedin} alt="linkedin" />
               </a>

               <a href="https://github.com/jpcontreras87">
                  <img className="icons" src={github} alt="github" />
               </a>
            </div>
            <Portfolio />
            <Content />
         </body>
      </div>
   );
}

export default App;
