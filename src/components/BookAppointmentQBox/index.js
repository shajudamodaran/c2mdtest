import React from "react";
import Style from "./BookAppointmentQBox.module.scss";
import Assets from "../Layout/Assets";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const BookAppointmentQBox = ({
  children,
  progressDescrementer,
  progress,
  innerPage,
  setInnerPage,
}) => {


  const appoinment_form = useSelector(
    (state) => state.bookAppoinment.appoinment_form
  );

  console.log(appoinment_form?.bookingType, progress);

  let location=useLocation()


  return (
    <div className={Style.book_appointment_div}>
      <form className={Style.book_appointment_form_align}>
        {progress < 14 && (
          <>
            {progress !== 1 && (

             location.isRequestMode && progress == 13 ? null :
                <img
                  src={Assets.previous_icon}
                  className={Style.book_appointment_previous_icon}
                  onClick={progressDescrementer}
                />
            )}
            {innerPage == 0 ? (
              <>

                {
                  location.isRequestMode && progress == 13 ? null :
                    <>

                      <span
                        className={Style.book_appointment_previous_step}
                        onClick={progressDescrementer}
                      >
                        {progress !== 1 && "Previous Step"}
                      </span>
                      <span className={Style.book_appointment_form_pages}>
                        {progress}/13{" "}
                      </span>
                      <div classname="progress-bar" style={{ width: `1%` }}></div>

                    </>
                }


                {
                 location.isRequestMode && progress == 13 ? null :
                    <ProgressBar
                      now={(progress / 13) * 100}
                      variant="success"
                      className={Style.book_appointment_progress_bar}
                    />
                }
              </>
            ) : (


              location.isRequestMode && progress == 13 ? null :
                <span
                  className={Style.book_appointment_previous_step}
                  onClick={() => {
                    setInnerPage(innerPage - 1);
                  }}
                >
                  back
                </span>



            )}
          </>
        )}

        {children}
      </form>
    </div>
  );
};

export default BookAppointmentQBox;