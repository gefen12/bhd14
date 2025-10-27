import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/BottomNav.css";
import Elipse from "../assets/ellipse.png";
import NewFeatureImg from "../assets/icons/newFeatureIcon.svg";

function BottomNav({ activePage }) {
    const location = useLocation();

  // show badge only on home page
    const showNewBadge = activePage === "home"; // ✅ Show only when home is active

  return (
    <div className="bottom-nav">
        <img src={Elipse} alt="ellipse" className="ellipse" />
        <img src={Elipse} alt="ellipse" className="ellipse" />
        <img src={Elipse} alt="ellipse" className="ellipse" />
        <img src={Elipse} alt="ellipse" className="ellipse" />
        <div className="new-feature-icon-container">
            {showNewBadge &&<img src={NewFeatureImg} alt="New Feature" className="new-feature-icon" />}
            {/* {showNewBadge && <div className="new-badge">חדש</div>} */}
        <img src={Elipse} alt="ellipse" className="ellipse" />
        </div>
    </div>
  );
}

export default BottomNav;