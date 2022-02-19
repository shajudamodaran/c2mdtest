import React from "react";
import Style from "./LanguageMobileScreen.module.scss";

function MobileLanguage({languageData,languagechange}) {

  return (
    <div className={Style.filter_mobile_language_content}>

          {languageData &&
              languageData.length !== 0 &&
              languageData.map((item, index) => {
                return (
                  <div className={Style.checkboxList}>
                    <input
                      type="checkbox"
                      value={item.value}
                      id={item.value}
                      checked={item.checked}
                      onChange={(e) => languagechange(item, e)}
                    />
                    <label htmlFor={item.value}>{item.value}</label>
                  </div>
                );
              })}
  
          {/* <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">All Language</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">English</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Malayalam</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Thamil</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Hindi</label>
          </div> */}
  </div>
                   
  );
}

export default MobileLanguage;