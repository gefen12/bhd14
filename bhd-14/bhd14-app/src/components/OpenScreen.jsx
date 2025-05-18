import React from "react";
import "../styles/OpenScreen.css";
import searchIcon from "../assets/icons/searchIcon.svg";
import Quote from "../assets/quote.svg";

function OpenScreen({ onStart }) {
    return (
      <div className="welcome-screen">
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="חפש באתר..." />
      </div>
      <div className="saying">
        <h3>דבר המפקד</h3>
        <p>
          <img className="quote" src={Quote}  />
          בלה בלה בלה בלה בלה בלה בלה הלחממחמ כן המפקד בלה בלה בלה
          <br />
          לה בלה בלה בלה בלה בלה בלה בלה בלה
      <img className="quote2" src={Quote}  />
        </p>
      </div>
      </div>
    );
  }
  
  export default OpenScreen;