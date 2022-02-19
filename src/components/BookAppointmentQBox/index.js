import React from "react";
import Style from "./BookAppointmentQBox.module.scss";
import Assets from "../Layout/Assets";
import { ProgressBar } from "react-bootstrap";

const BookAppointmentQBox = ({
  children,
  progressDescrementer,
  progress,
  innerPage,
  setInnerPage,
}) => {
  return (
    <div className={Style.book_appointment_div}>
      <form className={Style.book_appointment_form_align}>
        {progress < 17 && (
          <>
            {progress !== 1 && (
              <img
                src={Assets.previous_icon}
                className={Style.book_appointment_previous_icon}
                onClick={progressDescrementer}
              />
            )}
            {innerPage == 0 ? (
              <>
                <span
                  className={Style.book_appointment_previous_step}
                  onClick={progressDescrementer}
                >
                  {progress !== 1 && "Previous Step"}
                </span>
                <span className={Style.book_appointment_form_pages}>
                  {progress}/16{" "}
                </span>
                <div classname="progress-bar" style={{ width: `1%` }}></div>
                <ProgressBar
                  now={(progress / 16) * 100}
                  variant="success"
                  className={Style.book_appointment_progress_bar}
                />
              </>
            ) : (
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
