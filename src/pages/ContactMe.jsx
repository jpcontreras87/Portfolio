import React from "react";
import "../App.css";

function ContactMe() {
   return (
      <div class="u-layout">
         <div class="u-layout-row">
            <div class="u-align-left u-container-style u-layout-cell u-size-32 u-layout-cell-1">
               <div class="u-container-layout u-valign-top u-container-layout-1">
                  <h1 class="u-custom-font u-font-merriweather u-text u-text-palette-2-base u-text-1">
                     We collaborate with brands and agencies to create memorable
                     experiences.
                  </h1>
                  <h6 class="u-text u-text-2">Sample Headline</h6>
               </div>
            </div>
            <div class="u-align-left u-container-style u-layout-cell u-size-28 u-layout-cell-2">
               <div class="u-container-layout u-valign-top u-container-layout-2">
                  <h6 class="u-custom-font u-font-ubuntu u-text u-text-palette-2-base u-text-3">
                     We dwelling elegance do shutters appetite yourself diverted.
                  </h6>
                  <h5 class="u-custom-font u-text u-text-font u-text-4">
                     The principal reason we continue to adapt and evolve our business
                     model is to ensure that we are meeting our customers’
                     expectations. One example of this has been to use modern
                     technology and the introduction of the real time tracking our
                     teams using GPS. This ensures our customers get the time they have
                     paid for has been spent at our customers’ homes since this is the
                     most common problem within our industry.
                  </h5>
                  <a
                     href="https://nicepage.com/templates"
                     class="u-active-none u-btn u-button-style u-hover-none u-none u-text-body-alt-color u-text-hover-palette-2-base u-btn-1"
                  >
                     {" "}
                     <span class="u-icon u-text-palette-2-base u-icon-1"></span>
                     &nbsp;Chat Now
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ContactMe;
