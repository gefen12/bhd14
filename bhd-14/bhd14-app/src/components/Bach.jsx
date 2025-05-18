import React from "react";
import "../styles/Bach.css";

function Bach() {
  return (
    <div className="bach">
      <div className="top-section">
        <div className="row">
          <div className="column">גרף</div>
          <div className="column">גאנט</div>
          <div className="column">מבנה הבא״ח</div>
          <div className="column">ישיבות</div>
          <div className="column">הכנות סגל</div>
          <div className="column">הוראות ונהלים</div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="bottom-section">
        <div className="row">
          <div className="column">הכשרת״מ</div>
          <div className="column">סיכומי הכשרה</div>
          <div className="column">גרף פרסני</div>
          <div className="column">תיקי מדריך</div>
          <div className="column">תיקי תרגיל</div>
        </div>
      </div>
    </div>
  );
}

export default Bach;