import React from "react";
import "../styles/SideNav.css";
import calendarIcon from "../assets/icons/calendarIcon.svg";
import filesIcon from "../assets/icons/filesIcon.svg";
import graphIcon from "../assets/icons/graphIcon.svg";
import inspoIcon from "../assets/icons/inspoIcon.svg";
import privacyIcon from "../assets/icons/privacyIcon.svg";

function SideNav({}) {
    return (
        <div className="side-nav">
        <div className="item-side">
            <img src={calendarIcon} alt="Calendar" />
            <span>גאנט</span>
        </div>
        <div className="item-side">
            <img src={graphIcon} alt="Graph" />
            <span>גרף</span>
        </div>
        <div className="item-side">
            <img src={filesIcon} alt="Files" />
            <span>תיקי יסוד</span>
        </div>
        <div className="item-side">
            <img src={inspoIcon} alt="Inspo" />
            <span>חזון ויעדים</span>
        </div>
        <div className="item-side">
            <img src={privacyIcon} alt="Privacy" />
            <span>הוראות ונהלים</span>
        </div>
        </div>
    );
    }
export default SideNav;