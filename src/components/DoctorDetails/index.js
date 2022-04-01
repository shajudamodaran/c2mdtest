import React, { useEffect } from "react";
import Style from "./DoctorDetails.module.scss";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import Assets from "../Layout/Assets";
import { Link, useParams } from "react-router-dom";
import { fetch_DoctorDetail } from "../../actions/DoctorDetailsAction";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

function DoctorDetails() {
  const dispatch = useDispatch();
  let { doctorId } = useParams();

  useEffect(() => {
    dispatch(fetch_DoctorDetail(doctorId));
  }, []);

  const doctorDetails = useSelector(
    (state) => state.doctorDetail.doctor_Details
  );

  const appoinment_form = useSelector(
    (state) => state.bookAppoinment.appoinment_form
  );

  const addDefaultSrc = (ev) => {
    ev.target.src = Assets.avatar;
  };

  return (
    <Accordion className={`${Style.booking_summary_accordion_align} ${appoinment_form?.bookingType == "Request"&&Style.accordion_disable}`}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className={Style.booking_summary_header}>
          <Row className={Style.booking_summary_span_heading}>
            <Col className={Style.doctorProfileImg} xs={3}>
              <img
                src={doctorDetails.doctorImage}
                onError={addDefaultSrc}
              ></img>
            </Col>
            <Col xs={9}>
              <h4>{doctorDetails.doctorName}</h4>
              <div className={Style.cat_det}>
                {
                  console.log(doctorDetails)
                }
                <p className={Style.booking_summary_first_para}>
                  {/* <span>{doctorDetails.doctorSpecialityName}</span> */}
                  {appoinment_form.appointmentTime != "" && (
                    <span>

                      {console.log(appoinment_form.appointmentDate)}
                      {/* {moment(appoinment_form.appointmentDate,"DD-MMMM-YYYY").format("ddd")} at{" "} */}
                      {appoinment_form.appointmentDate} at{" "}
                      {appoinment_form.appointmentTime} (IST)
                    </span>
                  )}
                </p>
                <p className={Style.booking_summary_second_para}>
                Total consultation fees - {appoinment_form.fees.split(".")[0]}
                </p>
              </div>
            </Col>
          </Row>
        </Accordion.Header>
        {appoinment_form?.bookingType != "Request"&&
        <Accordion.Body className={Style.booking_summary_body}>
          <p>
            <span className={Style.booking_summary_left_aligned}>
              Consultation fees
            </span>
            <span className={Style.booking_summary_right_aligned}>
              {appoinment_form.doctorfees?.split(".")[0]}
            </span>
          </p>
          {appoinment_form?.c2mdfees && (
            <p>
              <span className={Style.booking_summary_left_aligned}>
                Service fees
              </span>
              <span className={Style.booking_summary_right_aligned}>
                {appoinment_form.c2mdfees.split(".")[0]}
              </span>
            </p>
          )}
         
          {appoinment_form?.gstamount && appoinment_form?.gstamount.split(" ")[1]>0 &&  (
            <p>
              <span className={Style.booking_summary_left_aligned}>GST on service fees</span>
              <span className={Style.booking_summary_right_aligned}>
                {appoinment_form.gstamount.split(".")[0]}
              </span>
            </p>
          )}
          <p className={Style.booking_summary_top_border}>
            <span className={Style.booking_summary_left_total}>Total</span>
            <span className={Style.booking_summary_right_total}>
              {appoinment_form.fees.split(".")[0]}
            </span>
          </p>
        </Accordion.Body>}
      </Accordion.Item>
    </Accordion>
  );
}

export default DoctorDetails;
