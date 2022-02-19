import React from "react";
import Style from "./CustomTab.Module.scss";

function CustomTab({ activeTab, handleTab, tabs }) {
  return (
    <div className={Style.CustomTab}>
      {tabs.map(
        (value) =>
          value && (
            <div
              className={`${Style.tab} ${
                value.value === activeTab ? Style.selectedTab : ""
              }`}
              onClick={() => {
                handleTab(value.value);
              }}
              key={value.value}
            >
              {value.label}
            </div>
          )
      )}
    </div>
  );
}

export default CustomTab;
