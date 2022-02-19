import React from "react";
import { Col, Row } from "react-bootstrap";
import Assets from "../Layout/Assets";
import Style from "./DoctorProfileMobileScreen.module.scss";

function MobileDoctorProfile({ doctorDetail }) {
  const addDefaultSrc = (ev) => {
    ev.target.src = Assets.avatar;
  };

  return (
    <>
      <div className={Style.doctor_mobile_span_heading}>
        <div className={Style.doctorProfileImg}>
          <img src={doctorDetail.doctorImage} alt="" onError={addDefaultSrc} />
        </div>
        <div className={Style.doctorProfiledesc}>
          <img
            className={Style.doctorProfilelogo}
            src={doctorDetail.thirdPartySiteLogo}
          />
          <h4>
            {doctorDetail.doctorName}
            {doctorDetail.onlineStatus == "Online" && (
              <img
                src={Assets.mini_tick}
                className={Style.doctor_mobile_tick_icon}
              />
            )}
          </h4>
          <div className={Style.cat_det}>
            <p className={Style.doctor_mobile_first_para}>
              <span>{doctorDetail.doctorSpecialityName}</span>
            </p>
            {doctorDetail.yearsOfExperience && (
              <p className={Style.doctor_mobile_first_para}>
                <span>Experience : {doctorDetail.yearsOfExperience}</span>
              </p>
            )}
            <p className={Style.doctor_mobile_second_para}>
              <img
                src={Assets.location_icon}
                className={Style.doctor_mobile_location_icon}
              />
              {doctorDetail.c2mdLocation}
            </p>
          </div>
        </div>
      </div>
      <div className={Style.doctorProfileProfsdesc}>
        {doctorDetail.qualification}
        {/* MS, DNB, MRCS (Edinburgh), M.Ch (Endocrine Surgery), MNAMS, FACS (USA), FRCS (Glasgow), FRCS (England) */}
      </div>
      <p className={Style.doctor_mobile_last_para}>
        {doctorDetail.languages && doctorDetail?.languages?.length > 0 && (
          <>
            <img
              src={Assets.globe_icon}
              className={Style.doctor_mobile_location_icon}
            />
            <span className={Style.doctor_mobile_lang}>
              {doctorDetail.languages && doctorDetail.languages.join(", ")}
            </span>
          </>
        )}
        {doctorDetail.licenseNumber&&doctorDetail.licenseNumber != "" && (
          <span>Reg No: {doctorDetail.licenseNumber}</span>
        )}
      </p>
    </>
  );
}

export default MobileDoctorProfile;
