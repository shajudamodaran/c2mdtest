import React from "react";
import Style from "./HospitalMobileScreen.module.scss";

function MobileHospital({hospitalData,hospitalchange}) {

  return (
    <div className={Style.filter_mobile_hospital_content}>
  
          {/* <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">All Hospital</label>
          </div> */}
          {hospitalData &&
              hospitalData.length !== 0 &&
              hospitalData.map((item, index) => {
                return (
                  <div className={Style.checkboxList} key={index}>
                    <input
                      type="checkbox"
                      value={item.value}
                      id={item.value}
                      checked={item.checked}
                      onChange={(e) => hospitalchange(item, e)}
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
            <label htmlFor="All">Snehaa Medical Mission Hospital</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Maedical Mission Hospital</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Ave Medical Mission Hospital</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Magh Medical Mission Hospital</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Ave Medical Mission Hospital</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Snehaa Medical Mission Hospital</label>
          </div>
          <div className={Style.checkboxList}>
            <input
              type="checkbox"
              value="All"
              id="All"
            />
            <label htmlFor="All">Maedical Mission Hospital</label>
          </div> */}

  </div>
                   
  );
}

export default MobileHospital;