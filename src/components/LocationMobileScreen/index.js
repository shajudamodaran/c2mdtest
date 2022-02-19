import React from "react";
import Style from "./LocationMobileScreen.module.scss";

function MobileLocation({locationData,handlechange}) {

  return (
    <div className={Style.filter_mobile_location_content}>

          {locationData &&
              locationData.length !== 0 &&
              locationData.map((item, index) => {
                return (
                  <div className={Style.checkboxList} key={index}>
                    <input
                      type="checkbox"
                      value={item.value}
                      checked={item.checked}
                      onChange={(e) => handlechange(item, index, e)}
                      name="location"
                      id={item.value}
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
            <label htmlFor="All">All Locations</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Kochi</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Dubai</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Thamilnadu</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Koretty</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Kanjirappaly</label>
          </div> */}
  </div>
                   
  );
}

export default MobileLocation;