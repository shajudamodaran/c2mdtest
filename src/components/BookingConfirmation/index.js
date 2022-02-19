import React, { useState } from "react";
import Style from "./BookingConfirmation.module.scss";
import YesNoButton from "../YesNoButton";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import Assets from "../Layout/Assets";
import { Link, useHistory } from "react-router-dom";
import DoctorDetails from "../DoctorDetails";
import { useSelector, useDispatch } from "react-redux";
import AddToCalendar from "@culturehq/add-to-calendar";
import "@culturehq/add-to-calendar/dist/styles.css";
import { GotoDashboard_action } from "../../actions/BookAppoinmentAction";
import moment from "moment";
function BookingConfirmation({ progressIncrementer }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const clientDetails = useSelector((state) => state.clientDetails);

  const AppoinmentId = useSelector(
    (state) => state.bookAppoinment.bookingConfirmRes
  );

  const appoinment_form = useSelector(
    (state) => state.bookAppoinment.appoinment_form
  );
  const userdata = useSelector((state) => state.login.user);

  return (
    <>
      <img
        src={Assets.success_icon}
        className={Style.booking_confirmation_success_icon}
      ></img>
      <h3 className={Style.booking_confirmation_main_heading}>Thank you</h3>
      {AppoinmentId?.appoinmentType == "Book" ? (
        <h4 className={Style.booking_confirmation_sub_heading}>
          Your booking is complete
        </h4>
      ) : (
        <h4 className={Style.booking_confirmation_sub_heading}>
          Your booking request has been submitted
        </h4>
      )}
      <label className={Style.booking_confirmation_main_label}>
        You will soon receive an email/sms confirmation
      </label>
      {AppoinmentId?.appoinmentType == "Book" &&
        AppoinmentId?.appoinmentId?.info && (
          <div className={Style.booking_confirmation_appointment_id}>
            APPOINTMENT ID : {AppoinmentId?.appoinmentId?.info}
          </div>
        )}
      <DoctorDetails></DoctorDetails>
      {AppoinmentId?.appoinmentType == "Book" && (
        <AddToCalendar
          event={{
            name: "Appoinment Booking",
            details: "You have appoinment on Connect2MyDoctor",
            location: userdata?.country,
            startsAt: moment(
              AppoinmentId?.appoinmentFromTime,
              "YYYY-MM-DD HH:mm"
            ).toISOString(),
            endsAt: moment(
              AppoinmentId?.appoinmentToTime,
              "YYYY-MM-DD HH:mm"
            ).toISOString(),
          }}
        />
      )}
      {/* <Button className={Style.booking_confirmation_calender_button}>
        <img src={Assets.calender_icon}></img>
        Add To Calender
      </Button> */}

      <div className={Style.booking_confirmation_div_content}>
        It is very important that the doctor/specialist has accurate information
        on your current medications, allergies, lifestyle and other health
        details. Please ensure that the information is up to date in your
        profile (Add/Update information now).
      </div>
      {/* <div className={Style.booking_confirmation_select_content}>
        Appointment Confirmation:
        <img src={Assets.down_arrow}></img>
      </div>
      <div className={Style.booking_confirmation_select_content}>
        Any Queries?
        <img src={Assets.down_arrow}></img>
      </div> */}
      <Accordion className={Style.booking_confirm}>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={Style.booking_summary_header}>
            Appointment Confirmation:
          </Accordion.Header>
          <Accordion.Body className={Style.booking_summary_body}>
            <p>
              {" "}
              You will receive a confirmation on your appointment on via
              email/SMS. You may also view your appointment details in your
              dashboard at any time or to make changes to your appointment,
              please get in touch with us at{" "}
              {clientDetails == undefined || clientDetails == "" ? (
                <a href="mailto:support@connect2my.doctor">
                  support@connect2my.doctor.
                </a>
              ) : (
                <a href={`mailto:${clientDetails?.email}`}>
                  {clientDetails?.email}
                </a>
              )}
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className={Style.booking_confirm}>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={Style.booking_summary_header}>
            Any Queries?
          </Accordion.Header>
          <Accordion.Body className={Style.booking_summary_body}>
            <p>
              {" "}
              Incase of any further queries, please react out to{" "}
              {clientDetails == undefined || clientDetails == "" ? (
                <a href="mailto:support@connect2my.doctor">
                  support@connect2my.doctor
                </a>
              ) : (
                <a href={`mailto:${clientDetails?.email}`}>
                  {clientDetails?.email}
                </a>
              )}
              you will hear back from us within 24 hours.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className={`${Style.btn_floating} btn_floating`}>
        <Button
          className={Style.booking_confirmation_dashboard_button}
          onClick={() => {
            dispatch(GotoDashboard_action());
            history.push({
              pathname: "/dashboard",
            });
          }}
        >
          Go To Dashboard
        </Button>
      </div>
    </>
  );
}

export default BookingConfirmation;
