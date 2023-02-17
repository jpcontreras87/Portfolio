import React from "react";
import "../App.css";

//images
import photo1 from "../assets/images/chatbot.jpg";
import photo2 from "../assets/images/photo2.jpeg";
import photo3 from "../assets/images/photo1.jpeg";
import photo4 from "../assets/images/photo4.jpeg";
import photo5 from "../assets/images/photo5.jpeg";
import photo6 from "../assets/images/photo6.jpeg";

function Content() {
   return (
      <>
         <table className="profile-table">
            <tr>
               <td>
                  <a href="https://jpcontreras87.com/">
                     <img className="profile-images" src={photo1} alt="chatbot" />
                  </a>
                  <div>
                     <h4>
                        <b>Chatbot</b>
                     </h4>
                     <p>Created using PHP, mySql and JQuery</p>
                  </div>
               </td>
               <td>
                  <a href="https://jpcontreras87.com/">
                     <img className="profile-images" src={photo2} alt="photo2" />
                  </a>
                  <div>
                     <h4>
                        <b>John Doe</b>
                     </h4>
                     <p>Architect & Engineer</p>
                  </div>
               </td>
               <td>
                  <a href="https://jpcontreras87.com/">
                     <img className="profile-images" src={photo3} alt="photo3" />
                  </a>
                  <div>
                     <h4>
                        <b>John Doe</b>
                     </h4>
                     <p>Architect & Engineer</p>
                  </div>
               </td>
            </tr>
            <tr>
               <td>
                  <a href="https://jpcontreras87.com/">
                     <img className="profile-images" src={photo4} alt="photo4" />
                  </a>
                  <div>
                     <h4>
                        <b>John Doe</b>
                     </h4>
                     <p>Architect & Engineer</p>
                  </div>
               </td>
               <td>
                  <a href="https://jpcontreras87.com/">
                     <img className="profile-images" src={photo5} alt="photo5" />
                  </a>
                  <div>
                     <h4>
                        <b>John Doe</b>
                     </h4>
                     <p>Architect & Engineer</p>
                  </div>
               </td>
               <td>
                  <a href="https://jpcontreras87.com/">
                     <img className="profile-images" src={photo6} alt="photo6" />
                  </a>
                  <div>
                     <h4>
                        <b>John Doe</b>
                     </h4>
                     <p>Architect & Engineer</p>
                  </div>
               </td>
            </tr>
         </table>
         <div className="profile">
            <a href="https://jpcontreras87.com/">View Full Portfolio</a>
         </div>
      </>
   );
}

export default Content;
