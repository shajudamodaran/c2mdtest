import React, { useState } from "react";
import Style from "./BookAppointment.module.scss";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Assets from "../Layout/Assets";
import Schedule from "../DoctorprofileSchedule/Schedule";
import MobileSchedule from "../DoctorprofileSchedule/MobileSchedule";
import { useDimensions } from "../../logic/Dimensions";

function BookAppointment({ show, handleClose, doctorId }) {
  const { width } = useDimensions();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const DayCounter = { next: 2, back: 4 };


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className={`${Style.doctor_listing_modal_align} book_modal`}
      >
        <Modal.Header closeButton className={Style.doctor_listing_heading}>
          <Modal.Title>Book your Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {width >= 992 ? (
            <Schedule
              responsive={responsive}
              doctorId={doctorId}
              DayCounter={DayCounter}
            />
          ) : (
            <MobileSchedule
              responsive={responsive}
              doctorId={doctorId}
              DayCounter={DayCounter}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookAppointment;
