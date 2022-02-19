import React from "react";
import Style from "./Treatment.module.scss";

function Speciality({ Item }) {
  return (
    <div className={Style.Treatment}>
      <div className={Style.ImgStyle}>
        <div className={Style.mobhead}>
          <h6 className={Style.head}>{Item.treatmentName}</h6>
        </div>
        <img src={Item.treatmentImage} />
      </div>
      <div className={Style.TextStyle}>
        <h6 className={Style.head}>{Item.treatmentName}</h6>
        <p className={Style.text1}>For tre heart and blood pressure problems</p>
        <p className={Style.text2}> Chest pain, Heart Failure, Cholesterol</p>
      </div>
    </div>
  );
}

export default Speciality;
