import "./App.css";
import React from "react";

//components
import Navbar from "./pages/Navbar";
import ContactMe from "./pages/ContactMe";

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
            <h2 class=" u-custom-font u-font-merriweather u-text u-text-default u-text-palette-2-base u-text-1">
               Biography
            </h2>
            <img src={logo} className="u-image u-image-circle u-image-1" alt="logo" />
            <p>Juan P Contreras</p>
            <p class="u-align-justify u-text u-text-grey-40 u-text-3">
               {" "}
               I'm a driven individual that highly values knowledge and hard work. I am
               motivated by challenges in my tasks, I love critical thinking, my work
               environment and most importantly my family. I aspire to grow in a
               company with upward mobility that promotes self growth and team
               building.
            </p>
            <div className="u-social-icons u-spacing-31 u-social-icons-1">
               <img src={linkedin} alt="linkedin" />
               <img src={github} alt="github" />
            </div>
            <ContactMe />
         </body>
      </div>
   );
}

export default App;
