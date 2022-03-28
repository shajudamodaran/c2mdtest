import React, { useState, useEffect, useRef } from "react";

import { useHistory, useParams } from "react-router-dom";

import Style from "./DoctorProfileMain.module.scss";
import Assets from "../../Layout/Assets";
import { useDimensions } from "../../../logic/Dimensions";
import BookAppointment from "../../BookAppointment";
import Button from "react-bootstrap/Button";
const CustomTab = React.lazy(() => import("../../Layout/CustomTab"));
const Schedule = React.lazy(() => import("../Schedule"));

function DoctorProfilemain({ doctorDetail, doctorid }) {
  const { width } = useDimensions();
  const [activeTab, handleTab] = useState(width >= 992 ? 1 : 2);

  const scheduleTab = useRef(null);
  const professionalTab = useRef(null);
  const areasTab = useRef(null);
  const educationTab = useRef(null);
  const awardsTab = useRef(null);
  const papersTab = useRef(null);
  const faqTab = useRef(null);
  const scrollArea = useRef(null);

  const [showModal, setModal] = useState(false);

  let [scrollAmount,setScrollAmount]=useState(0)

  useEffect(() => {

     

    

    // if (scrollAmount > 0) {
    //     setActiveLeft(leftMenus[0].name)
    // }

    // if (scrollAmount > 371) {
    //     setActiveLeft(leftMenus[1].name)
    // }

    // if (scrollAmount >= 774) {
    //     setActiveLeft(leftMenus[2].name)
    // }


}, [scrollAmount])

  const hidemodal = () => {
    setModal(false);
  };

  useEffect(() => {
    if (activeTab == 1) {
      width >= 992 &&
      scheduleTab.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
           inline: "start",
        });
    } else if (activeTab == 2) {
      scrollToTab(professionalTab);
    } else if (activeTab == 3) {
      scrollToTab(areasTab);
    } else if (activeTab == 4) {
      scrollToTab(educationTab);
    } else if (activeTab == 5) {
      scrollToTab(awardsTab);
    } else if (activeTab == 6) {
      scrollToTab(papersTab);
    } else if (activeTab == 7) {
      scrollToTab(faqTab);
    }
  }, [activeTab]);

  const scrollToTab = (tabSection) => {
    {
      width >= 992 &&
        tabSection.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
           inline: "start",
        });
    }
  };

  const TABS = [
    { label: "Schedule", value: 1 },
    (doctorDetail?.summary!=""||doctorDetail?.professionalExperience?.length>0)&&{ label: "Professional Info", value: 2 },
    doctorDetail?.speciality?.length>0&&{ label: "Areas Of Specialities", value: 3 },
    doctorDetail?.education?.length>0&&{ label: "Education", value: 4 },
    doctorDetail?.awards?.length>0&&{ label: "Awards", value: 5 },
    doctorDetail?.research?.length>0&&{ label: "Papers", value: 6 },
    // { label: "FAQ", value: 7 },
  ];



  let array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1200 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  const DayCounter = width>1500? { next: 5, back: 7 }:width>1200?{ next: 4, back: 6 }:width>464?{ next: 3, back: 5 }:{next: 1, back: 1}
  return (
    <div className={Style.DoctorProfilemain}>
      <CustomTab tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
      <div className={Style.tab_content} ref={scrollArea} onScroll={(e) => { setScrollAmount(e.target.scrollTop) }}  >
        <div className={Style.Schedule} ref={scheduleTab}>
          <Schedule
            responsive={responsive}
            activeTab={activeTab}
            appoinmentType={doctorDetail && doctorDetail.TypeofConsultation}
            Typeofappointment={doctorDetail}
            doctorId={doctorid}
            DayCounter={DayCounter}
          />
        </div>

        {((doctorDetail&&(doctorDetail.summary!=""||doctorDetail?.professionalExperience?.length>0))&&(width >= 992 || (width < 992 && activeTab == 2))) && (
          <div className={Style.ProfessionalInfo} ref={professionalTab}>
            <h6 className={Style.common_head}>Professional Info</h6>
            <p className={Style.doctorSummary}>
              {doctorDetail && doctorDetail.summary}
            </p>
            <h6>Services</h6>
            <div className={Style.commonPtag}>
              {doctorDetail.professionalExperience &&
                doctorDetail.professionalExperience.map((profile, index) => {
                  return (
                    <div className={Style.info} key={index}>
                      <img src={Assets.TickIcon} />

                      <p className={Style.content}>
                        {profile.details.position}-{profile.details.practised}(
                        {profile.details.startYear}-{profile.details.endYear})
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {((doctorDetail&&(doctorDetail?.speciality?.length>0))&&(width >= 992 || (width < 992 && activeTab == 3))) && (
          <div className={Style.AreasOfSpecialities} ref={areasTab}>
            <h6 className={Style.common_head}>Areas Of Specialities</h6>
            <div className={Style.commonPtag}>
              {doctorDetail &&
                doctorDetail.speciality &&
                doctorDetail.speciality.split(",").map((item, index) => {
                  return (
                    <div className={Style.info} key={index}>
                      <img src={Assets.TickIcon} />
                      <p className={Style.content}>{item}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {((doctorDetail&&(doctorDetail?.education?.length>0))&&(width >= 992 || (width < 992 && activeTab == 4))) && (
          <div className={Style.Education} ref={educationTab}>
            <h6 className={Style.common_head}>Education</h6>
            <div className={Style.commonPtag}>
              {doctorDetail &&
                doctorDetail.education &&
                doctorDetail.education.map((item, index) => {
                  return (
                    <div className={Style.info} key={index}>
                      <img src={Assets.TickIcon} />
                      <p className={Style.content}>
                        {item.course}-{item.institution}-({item.year})
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {((doctorDetail&&(doctorDetail?.awards?.length>0))&&(width >= 992 || (width < 992 && activeTab == 5))) && (
          <div className={Style.Awards} ref={awardsTab}>
            <h6 className={Style.common_head}>Awards</h6>

            <div className={Style.commonPtag}>
              {doctorDetail &&
                doctorDetail.awards &&
                doctorDetail.awards.map((item, index) => {
                  return (
                    <div className={Style.info} key={index}>
                      <img src={Assets.TickIcon} />
                      <p className={Style.content}>
                        {item.details.name} ({item.year})-{item.details.details}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {((doctorDetail&&(doctorDetail?.research?.length>0))&&(width >= 992 || (width < 992 && activeTab == 6))) && (
          <div className={Style.Papers} ref={papersTab}>
            <h6 className={Style.common_head}>Papers</h6>
            <div className={Style.commonPtag}>
              {doctorDetail &&
                doctorDetail.research &&
                doctorDetail.research.map((item, index) => {
                  return (
                    <div className={Style.info} key={index}>
                      <img src={Assets.TickIcon} />
                      <p className={Style.content}>
                        {item.details.name} ({item.year})
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
        {width < 992 && (
          <>
            <div className={Style.btn_floating}>
              <Button
                variant="outline-dark"
                // className={}
                onClick={() => setModal(true)}
              >
                Book Appointment
              </Button>
            </div>
            <BookAppointment
              show={showModal}
              handleClose={hidemodal}
              // Details={Details}
              doctorId={doctorDetail.doctorId}
            />
          </>
        )}
        {/* <div className={Style.FAQ} ref={faqTab}>
          <h6 className={Style.common_head}>FAQ</h6>
        </div> */}
      </div>
    </div>
  );
}

export default DoctorProfilemain;
