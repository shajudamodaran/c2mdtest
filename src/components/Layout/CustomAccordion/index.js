import React, { useState } from "react";
import Style from "./CustomAccordion.module.scss";
function CustomAccordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={Style.accordion}>
        <div className={Style.accordion_item}>
          <div
            className={Style.accordion_title}
            onClick={() => setIsActive(!isActive)}
          >
            <div className={Style.title}>{title}</div>
            <div className={Style.Icon}>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && <div className={Style.accordion_content}>{content}</div>}
        </div>
      </div>
    </>
  );
}

export default CustomAccordion;
