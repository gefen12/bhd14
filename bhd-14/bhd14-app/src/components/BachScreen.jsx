import React from "react";
import "../styles/BachScreen.css";

function BachScreen() {
  return (
    <div className="bach">
      <div className="top-row">
        <div className="item2">גרף</div>
        <div className="item2">גאנט</div>
        <div className="item2">מבנה הבא"ח</div>
        <div className="item2">ישיבות</div>
        <div className="item2">הכנות סגל</div>
        <div className="item2">הוראות ונהלים</div>
      </div>

      <div className="bottom-row">
        <div className="left-section">
          <div className="sub-header">הכש”י</div>
          <div className="item2">סיכומי הכשרה</div>
          <div className="item2">גרף פרטי</div>
            <div className="item2">תיקי מדריך</div>
          <div className="item2">תיקי תרגיל</div>
        </div>
        <div className="vertical-divider"></div>
        <div className="right-section">
          <div className="sub-header">הכש”מ</div>
          <div className="item2">סיכומי הכשרה</div>
          <div className="item2">גרף פרטי</div>
          <div className="item2">תיקי מדריך</div>
          <div className="item2">תיקי תרגיל</div>
        </div>
      </div>
    </div>
  );
}

export default BachScreen;