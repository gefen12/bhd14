import React from "react";
import "../styles/TopNav.css"; 
import bhd14logo from "../assets/bhd14logo.svg"; 
import peleLogo from "../assets/pelelogo.svg";
function TopNav({ onNavigate }) {
    return (
      <>
        <img src={peleLogo} alt="peleLogo" className="peleLogo" />
      <div className="top-nav">
        <div className="item" onClick={() => onNavigate("bach")} >בא"ח</div>
        <div className="item" onClick={() => onNavigate("gdodha")} >גדוד הפיקוד</div>
        <div className="bhd14" onClick={() => onNavigate("home")} ></div>
        <div className="item" onClick={() => onNavigate("miktzot")} >מקצועות</div>
        <div className="item" onClick={() => onNavigate("mifkada")} >מפקדה</div>

      </div>
        <img src={bhd14logo} alt="bhd14logo" className="bhd14logo" />
      
      </>
    );
  }
  
  export default TopNav;