import "./App.css";
import React from "react";

//components
import Navbar from "./pages/Navbar";

//images
import logo from "./assets/images/myphoto.jpeg";
import linkedin from "./assets/images/linkedin.jpg";
import github from "./assets/images/github.jpg";
import twitter from "./assets/images/twitter.jpg";

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
               Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.
               It’s not a story the Jedi would tell you. It’s a Sith legend. Darth
               Plagueis was a Dark Lord of the Sith, so powerful and so wise he could
               use the Force to influence the midichlorians to create life… He had such
               a knowledge of the dark side that he could even keep the ones he cared
               about from dying. The dark side of the Force is a pathway to many
               abilities some consider to be unnatural. He became so powerful… the only
               thing he was afraid of was losing his power, which eventually, of
               course, he did. Unfortunately, he taught his apprentice everything he
               knew, then his apprentice killed him in his sleep. Ironic. He could save
               others from death, but not himself
            </p>
            <div className="u-social-icons u-spacing-31 u-social-icons-1">
               <img src={linkedin} alt="linkedin" />
               <img src={github} alt="github" />
               <img src={twitter} alt="twitter" />
            </div>
         </body>
      </div>
   );
}

export default App;
