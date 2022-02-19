import React from "react";
import Style from "./DoctorProfileSidebar.module.scss";
import { ImgUrl } from "../../../apis/imgServerApi";
import Assets from "../../Layout/Assets";
function DoctorProfileSidebar({ doctorDetail }) {
  const data = doctorDetail && doctorDetail;
  const addDefaultSrc = (ev) => {
    ev.target.src = Assets.avatar;
  };

  return (
    <div className={Style.DoctorProfileSidebar}>
      <div className={Style.sidebarTop}>
        <div className={Style.profileImg}>
          <img src={data.doctorImage} alt="" onError={addDefaultSrc} />
        </div>

        <div className={Style.doctorSpeciality}>
          <img src={data.thirdPartySiteLogo} alt="hospital" />
          <h5>{data.doctorName}</h5>
          {data.doctorSpecialityName != "" && (
            <p className={Style.content1}>{data.doctorSpecialityName}</p>
          )}
          {data.licenseNumber&&data.licenseNumber != "" && (
            <p className={Style.content2}>Reg No: {data.licenseNumber}</p>
          )}
        </div>
      </div>
      <div className={Style.sidebarBottom}>
        {data?.qualification && (
          <>
            <h6 className={Style.heading}>Qualification</h6>
            <h6
              className={Style.Bottom_content1}
              dangerouslySetInnerHTML={{
                __html: data?.qualification
                  ?.replace(/[(]/g, "<span>(")
                  .replace(/[)]/g, ")</span>"),
              }}
            ></h6>
          </>
        )}
        {data.c2mdLocation && (
          <>
            <h6 className={Style.heading}>Location </h6>
            <h6 className={Style.Bottom_content2}>{data.c2mdLocation}</h6>
          </>
        )}
        {data.yearsOfExperience && (
          <>
            <h6 className={Style.heading}>Experience</h6>
            <h6 className={Style.Bottom_content2}>{data.yearsOfExperience}</h6>
          </>
        )}

        {data && data.languages && (
          <>
            <h6 className={Style.heading}>Languages</h6>
            <h6 className={Style.Bottom_content2}>
              {data &&
                data.languages &&
                data.languages.map((item, index) => {
                  if (data.languages.length - 1 == index) {
                    return <span key={index}>{item}</span>;
                  }
                  return <span key={index}>{item},</span>;
                })}
            </h6>
          </>
        )}
      </div>
    </div>
  );
}

export default DoctorProfileSidebar;
