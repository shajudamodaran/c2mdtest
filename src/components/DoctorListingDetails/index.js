import React, { useState, useEffect } from "react";

// import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import Style from "./DoctorListingDetails.module.scss";
import Assets from "../Layout/Assets";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import BookAppointment from "../BookAppointment";
import { NavItem } from "react-bootstrap";
import { useDimensions } from "../../logic/Dimensions";
import { useDispatch, useSelector } from "react-redux";
import { Store_formData } from "../../actions/BookAppoinmentAction";
function DoctorListingDetails({ Details }) {
  const toastId = React.useRef(null);
  const notify = () => toastId.current = toast("Sorry,This booking facility is allowed only for patients", {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
    onOpen: (props) => setToastOpen(true),
    onClose: (props) => setToastOpen(false),
  });
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
    return () => {
      toast.dismiss(toastId.current)
    }
  }, []);
  const dispatch = useDispatch();
  const appoinment_form = useSelector(
    (state) => state.bookAppoinment.appoinment_form
  );
  const history = useHistory();
  const user = useSelector((state) => state.login.user);
  const clientDetails = useSelector((state) => state.clientDetails);
  const [toastOpen, setToastOpen] = useState(false);

  const doctorDetailsDiv = classNames(
    Style.doctor_listing_profile_details_row,
    "row"
  );
  const doctorDetailsSpan = classNames(
    Style.doctor_listing_border_align,
    "col-md-4"
  );
  const last_column = classNames(
    Style.doctor_listing_last_column_align,
    "col-md-4"
  );
  const { width } = useDimensions();

  const [showModal, setModal] = useState(false);

  const viewModal = (e) => {

    e.stopPropagation()

    if (user?.userType === "Doctor") {
      if (!toastOpen) {
        notify();
      }
    } else {
      dispatch(
        Store_formData({
          ...appoinment_form,
          clinicLogo: Details?.clinicLogo,
          hospitalname: clientDetails?.clinicName,
        })
      );
      setModal(true);
    }
  };
  const hidemodal = () => {
    setModal(false);
  };
  const addDefaultSrc = (ev) => {
    ev.target.src = Assets.avatar;
  };
  const view_profile = () => {
    dispatch(
      Store_formData({
        ...appoinment_form,
        clinicLogo: Details?.clinicLogo,
        hospitalname: clientDetails?.clinicName,
      })
    );
    history.push({
      pathname: "/doctorProfile/" + Details.doctorId,
      state: { detail: Details },
    });
  };
  return (

    <>
      <div className={Style.doctor_listing_profile_details} onClick={view_profile}>
        <div
          className={doctorDetailsDiv}
          onClick={() =>
            width < 992 &&
            history.push({
              pathname: "/doctorProfile/" + Details.doctorId,
              state: { detail: Details },
            })
          }
        >
          <div className="col-md-2 doc-list-fcol">
            <img
              src={Details.doctorImage}
              className={Style.doctorImage}
              alt=""
              onError={addDefaultSrc}
            />
            <span className={Style.mobverifytext}>
              <img src={Assets.tick_Outline} />
              Verified
            </span>
          </div>
          <div className="col-md-6 doc-list-mcol">
            <h3>
              {Details.doctorName}{" "}
              <img className={Style.mainverifytext} src={Assets.tick_Outline} />
            </h3>
            <div className={Style.doctorProfDesc}>
              {Details.specialization != "" && (
                <span className={doctorDetailsSpan}>
                  {Details.specialization}
                </span>
              )}
              {Details.expirence != "" && (
                <span className={doctorDetailsSpan}>
                  Experience : {Details.expirence}
                </span>
              )}
              <span className="">
                <img
                  src={Assets.location_icon}
                  className={Style.doctor_listing_location_icon}
                  alt=""
                />
                {Details.location}
              </span>
            </div>
            <div className={Style.doctor_listing_horizontal_line}></div>
            <p
              className={Style.doctor_listing_content}
              dangerouslySetInnerHTML={{
                __html: Details.qualification
                  .replace(/[(]/g, "<span>(")
                  .replace(/[)]/g, ")</span>"),
              }}
            ></p>

            {/* {Details.clinicLogo !== "" &&
            Details.clinicLogo !== undefined &&
            Details.clinicLogo !== null && (
              <img
                src={Details.clinicLogo}
                className={Style.doctor_listing_hospital_icon}
                alt="hospital"
              />
            )} */}
            <div className={Style.doctorListTimerColmob}>
              <div className={Style.doctorListTimerCol}>
                <div style={{whiteSpace:"nowrap", flexDirection:"row"}}>
                  <img
                    src={Assets.timer_icon}
                    className={Style.doctor_listing_timer_icon}
                  ></img>
                  <span className={Style.doctor_listing_timer_text}>
                    Up to {Details.duration} min
                  </span>
                </div>
                <div style={{whiteSpace:"nowrap", flexDirection:"row"}}>
                  <img
                    src={Assets.fee_icon}
                    className={Style.doctor_listing_timer_icon}
                  ></img>
                  <span className={Style.doctor_listing_timer_text}>
                    
                    {Details.fees}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={last_column}>
            <div className={Style.doctorListTimerCol}>
            <div style={{whiteSpace:"nowrap", flexDirection:"row"}}>
                <img
                  src={Assets.timer_icon}
                  className={Style.doctor_listing_timer_icon}
                ></img>
                <span className={Style.doctor_listing_timer_text}>
                  Up to {Details.duration} min
                </span>
              </div>
              <div style={{whiteSpace:"nowrap", flexDirection:"row"}}>
                <img
                  src={Assets.fee_icon}
                  className={Style.doctor_listing_timer_icon}
                ></img>
                <span className={Style.doctor_listing_timer_text}>
                  {Details.fees}
                </span>
              </div>
            </div>

            <Button
              variant="outline-secondary"
              className={Style.doctor_listing_appointment_btn}
              type="submit"
              onClick={viewModal}
            >
              Book Appointment
            </Button>
            {width > 992 && (
              <Button
                variant="outline-secondary"
                className={Style.doctor_listing_view_btn}
                type="submit"
                onClick={view_profile}
              >
                View Profile
              </Button>
            )}
          </div>
        </div>

      </div>

      <BookAppointment
        show={showModal}
        handleClose={hidemodal}
        // Details={Details}
        doctorId={Details.doctorId}
      />

    </>
  );
}

export default DoctorListingDetails;
