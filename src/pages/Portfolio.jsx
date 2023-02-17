import React from "react";
import "../App.css";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { IconContext } from "react-icons";

function Portfolio() {
   return (
      <table className="portfolio-table">
         <tr className="portfolio-1">
            This page was designed to showcase my projects using different coding
            languages
         </tr>
         <tr>
            <IconContext.Provider value={{ color: "white", size: "3em" }}>
               <div>
                  <HiOutlineArrowLongDown />
               </div>
            </IconContext.Provider>
         </tr>
         <tr className="portfolio-2">View Portfolio</tr>
      </table>
   );
}

export default Portfolio;
