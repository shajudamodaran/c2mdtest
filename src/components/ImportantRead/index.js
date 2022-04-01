import React, { useEffect, useState } from "react";
import Style from "./ImportantRead.module.scss";
import Assets from "../Layout/Assets";
import { Accordion, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function ImportantRead({
  progressIncrementer,
  Store_formData,
  appoinment_form,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setModal] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);

  const hidemodal = () => {
    setModal(false);
  };

  return (
    <>
      <h3 className={Style.book_appointment_main_heading}>
        Is this for an Emergency? <span className="mandatory">*</span>
      </h3>
      <Button
        variant="outline-secondary"
        className={Style.book_appointment_emergency_type}
        onClick={() => {
          setModal(true);
        }}
      >
        Yes, this is an emergency
      </Button>
      <Button
        variant="outline-secondary"
        className={Style.book_appointment_emergency_type}
        onClick={() => {
          dispatch(
            Store_formData({ ...appoinment_form, status: "Non critical" })
          );
          progressIncrementer();
        }}
      >
        No, not an emergency
      </Button>
      <Accordion className={Style.book_appointment_important_read}>
        <Accordion.Item
          eventKey="0"
          onClick={() => {
            setHeaderOpen(!headerOpen);
          }}
        >
          <Accordion.Header>
            <div className={Style.accordionHeader}>
              <img src={Assets.warning_icon}></img>
              <span className={Style.book_appointment_warning_heading}>
                Important Read
              </span>
              {/* {!headerOpen && ( */}
              <p className={Style.titleSubhead}>
                What does my video consultation cover and not cover?
              </p>
              {/* )} */}
            </div>
          </Accordion.Header>
          <Accordion.Body>
            {/* {headerOpen && (
              <span className={Style.book_appointment_body_heading}>
                What does my video consultation cover and not cover?
              </span>
            )} */}
            <ul className={Style.book_appointment_body_details}>
              <li>
                This virtual consultation is for a non emergency care. If you
                believe you have a medical emergency, call your local emergency
                service or reach out to the hospital/medical center closest to
                you.
              </li>
              <li>
                This consultation with the healthcare provider may be via text,
                audio, or video. Please note, text consultation may not be in
                real time, please expect a delay in response.
              </li>
              <li>
                It is completely up to the healthcare provider to write a
                prescription or lab orders.
              </li>
              <li>
                Please detail out your symptoms, medical conditions, previous
                surgery information, health queries and add any reports while
                booking. It is best the health provider has as much information
                as possible before the consultation.
              </li>
              <li>
                The health provider may recommend you to see them in person or a
                health professional of your choice after assessing your medical
                issues.
              </li>
            </ul>
            <span className={Style.book_appointment_second_heading}>
              What is not covered in a virtual consultation?
            </span>
            <ul className={Style.book_appointment_body_details}>
              <li>
                You cannot use video consultation for a medical emergency. If
                you believe you have a medical emergency, call your local
                emergency service or reach out to the hospital/medical center
                closest to you.
              </li>
              <li>
                The healthcare provider cannot prescribe controlled substances,
                narcotics, psychiatric or lifestyle medications.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


      <div style={{marginTop:"8px"}}> <span className="mandatory" style={{fontSize:"14px"}}>* </span> - Mandatory</div>
     

      <Modal
        show={showModal}
        onHide={hidemodal}
        className={Style.patient_consent_modal_align}
        backdrop="static"

      >
        <Modal.Body>
          <div className={Style.modalContent}>
            <img src={Assets.ambulance}></img>
            <span className={Style.patient_consent_body}>
              If you need an emergency care please call your local emergency
              service and/or rush to a nearby hospital/critical care unit.
            </span>
          </div>
        </Modal.Body>
        <Button
          className={Style.patient_consent_accept_button}
          onClick={() =>
            history.push({
              pathname: "/dashboard",
            })
          }
        >
          Go to Dashboard
        </Button>

        <div onClick={hidemodal} className={Style.not_emergency_back}>Not an emergency</div>
      </Modal>
    </>
  );
}

export default ImportantRead;
