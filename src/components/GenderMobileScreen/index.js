import React from "react";
import Style from "./GenderMobileScreen.module.scss";

function MobileGender({filterForm,change_gender}) {

  return (
        <div className={Style.doctor_listing_gender_content}>
            <div className={Style.doctor_listing_gender_content_male}>
            <input
                type="radio"
                value="Male"
                name="gender"
                id="male"
                checked={filterForm.gender === "Male"}
                onChange={change_gender}
            />
           <label for="male"> Male</label>
            </div>
            <div className={Style.doctor_listing_gender_content_male}>
            <input
                type="radio"
                value="Female"
                name="gender"
                id="female"
                checked={filterForm.gender === "Female"}
                onChange={change_gender}
            />
            <label for="female">Female</label>
            </div>
        </div>
                   
  );
}

export default MobileGender;