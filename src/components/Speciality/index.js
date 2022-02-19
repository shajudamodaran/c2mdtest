import React from "react";

import Style from "./Speciality.module.scss";
import assets from "../Layout/Assets";
import { useHistory } from "react-router-dom";

function Speciality({ Item }) {
  const history = useHistory();

  return (
    <div
      className={Style.Speciality}
      onClick={() => history.push("/DoctorListing/"+Item.specialityName)}
    >
      <div className={Style.ImgStyle}>
        <div className={Style.mobTextStyle}>
          <h6 className={Style.head}>{Item.specialityName}</h6>
        </div>
        <img src={Item.icons} alt="ImgUrl" />
      </div>
      <div className={Style.TextStyle}>
        <h6 className={Style.head}>{Item.specialityName}</h6>
        <p className={Style.text1}>{Item.Description}</p>
        <div className={Style.SpecialityItems}>
        <p className={Style.text2} >
          {Item.Specialities &&
            Item.Specialities.map((item, index) => {
              return (
                <>
                  {item},
                </>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Speciality;
