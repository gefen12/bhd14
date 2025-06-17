import React from "react";
import "../styles/BachScreen.css";

function BachScreen() {
  return (
    <div className="bach">
      <div className="top-row">
        <a href="https://www.figma.com/design/i1m2VFbwliz7hhW7ao1r4t/pele14?node-id=302-8076&m=draw">
        <div className="item2">גרף</div>
        </a>
        <div className="item2">גאנט</div>
        <div className="item2">מבנה הבא"ח</div>
        <div className="item2">ישיבות</div>
        <div className="item2">הכנות סגל</div>
        <div className="item2">הוראות ונהלים</div>
      </div>

      <div className="bottom-row">
          <div className="sub-header">הכש”י</div>
        <div className="left-section">
          <div className="item2">סיכומי הכשרה</div>
          <div className="item2">גרף פרטי</div>
            <div className="item2">תיקי מדריך</div>
          <div className="item2">תיקי תרגיל</div>
        </div>
        <div className="vertical-divider"></div>
          <div className="sub-header">הכש”מ</div>
        <div className="right-section">
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