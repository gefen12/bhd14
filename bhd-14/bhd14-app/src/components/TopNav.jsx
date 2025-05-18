import React from "react";
import "../styles/TopNav.css"; 
import bhd14logo from "../assets/bhd14logo.svg"; 
import peleLogo from "../assets/pelelogo.svg";
function TopNav({ }) {
    return (
      <>
        <img src={peleLogo} alt="peleLogo" className="peleLogo" />
      <div className="top-nav">
        <div className="item">בא"ח</div>
        <div className="item">גדוד הפיקוד</div>
        <div className="bhd14"></div>
        <div className="item">מקצועות</div>
        <div className="item">מפקדה</div>
      </div>
        <img src={bhd14logo} alt="bhd14logo" className="bhd14logo" />
      
      </>
    );
  }
  
  export default TopNav;