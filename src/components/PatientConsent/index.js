import React, { useEffect, useState } from "react";
import Style from "./PatientConsent.module.scss";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import moment from "moment";

function PatientConsent({ show, handleClose, setPatientConsent }) {
  const [deviceLocation, setDeviceLocation] = useState("");

  const doctorDetails = useSelector(
    (state) => state.doctorDetail.doctor_Details
  );

  const appoinment_form = useSelector(
    (state) => state.bookAppoinment.appoinment_form
  );

  const login = useSelector((state) => state.login.user);

  let platform = window.navigator.platform;
  let userAgent = window.navigator.userAgent;

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    }
  }

  function showPosition(position) {
    setDeviceLocation(
      position.coords.latitude + "," + position.coords.longitude
    );
  }

  useEffect(() => {
    // getLocation();
  }, []);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className={Style.patient_consent_modal_align}
      >
        <Modal.Header closeButton className={Style.patient_consent_heading}>
          <Modal.Title className={Style.modal_title}>
            Patient Consent Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className={Style.patient_consent_body}>
            <p>
              I{" "}
              <span className={Style.header}>
                {appoinment_form.gender == "Female" ? `Mrs` : `Mr`}.{" "}
                {appoinment_form.firstName}
              </span>{" "}
              hereby attest that I have requested,{" "}
              <span className={Style.header}>{doctorDetails.doctorName}</span> ,
              for online video consult for me regarding . I understand that
              "online video consultation" includes the practice of health care
              delivery, diagnosis, consultation, treatment, transfer of medical
              data, and education using interactive audio, video, or data
              communications.
            </p>
            <p>
              To facilitate the online consult and providing his or her
              diagnosis (may be provisional), I agree to share records or
              information pertaining to my health including medical history,
              pathology, laboratory and diagnostic results
            </p>
            <p>In addition, I understand and agree that:</p>
            <p>
              <ul>
                <li>
                  The online video consult is solely based on the information
                  provided by me and, in the absence of a physical evaluation,
                  the doctor/specialist may not be aware of certain facts that
                  may limit or affect his or her assessment or diagnosis of my
                  condition and recommended treatment.
                </li>
                <li>
                  The online video consult is very different from a regular
                  face-to-face examination and that the doctor/specialist
                  providing the consult is limited by the information and
                  imaging provided by me. Accordingly, the diagnosis I will
                  receive is limited and provisional.
                </li>
                <li>
                  An online video consult is not intended to replace a full
                  medical face-to-face evaluation by a physician.
                </li>
                <li>
                  The doctor/specialist is only rendering an online consult and
                  does not assume any responsibility for my continued medical
                  care or treatment.
                </li>
                <li>
                  I am responsible for all the expenses related to my online
                  consult request including, but not limited to, fees, medical
                  report translation fees, and material shipment fees
                </li>
                <li>
                  My medical information will be handled with strict
                  confidentiality, privacy and security; however, I understand
                  there are risks associated with any electronic transfer
                  process from one location to another.
                </li>
              </ul>
            </p>
            <p>
              I solely assume the risk of the limitations set forth herein, and
              I further understand that no warranty or guarantee has been made
              to me concerning any particular result related to my condition or
              diagnosis.
            </p>
            <p>
              The laws that protect the privacy and confidentiality of medical
              information also apply to online video consultation. No
              information obtained during an online video consult encounter
              which identifies me will be disclosed to researchers or other
              entities without my consent.
            </p>
            <p>
              <span className={Style.header}>Disclaimer and Release</span>
            </p>
            <p>
              <span className={Style.header}>
                I {appoinment_form.gender == "Female" ? `Mrs` : `Mr`}.{" "}
                {appoinment_form.firstName}
              </span>{" "}
              hereby completely and irrevocably release the doctor/specialist
              and the technology provider Connect2MyDoctor/Neev Labs and its
              parent and sister corporations and their respective medical staff
              members, physicians and other health care professionals, insurance
              providers, administrators, officers, employees and directors
              (collectively, the "Released Parties") of any and all errors and
              omissions, known or unknown, foreseen or unforeseen, knowingly or
              unknowingly, as well as all claims, actions or damages arising
              from or in connection with the online second opinion consult,
              conclusions or recommendations provided by the doctor/specialist.
            </p>
            <p>
              Furthermore, I agree that the Released Parties have no liability
              or responsibility for the accuracy or completeness of the medical
              information submitted to them or for any errors in its electronic
              transmission. As a condition to receiving the online consult
              service for a non-emergency card, I have read and acknowledge that
              I have given this consent of my own free will.
            </p>
            <p>
              I hereby give my informed consent for the use of telemedicine in
              my medical care. I hereby consent to and authorize{" "}
              <span className={Style.header}>{doctorDetails.doctorName}</span>{" "}
              to use online video consultation in the course of my diagnosis and
              treatment.
            </p>
            <p>
              <span className={Style.header}>Official Purpose Only</span>
              <br />
              User ID - {login.userId}
              <br />
              Platform - {userAgent} on {platform}
              <br />
              {deviceLocation != "" && `Device Location ${deviceLocation}`}
              <br />
              Time and Date Stamp -{" "}
              {moment().format("ddd, DD MMM YYYY hh:mm A")}
            </p>
          </span>
        </Modal.Body>
        <Button
          className={Style.patient_consent_accept_button}
          onClick={() => {
            setPatientConsent(true);
            handleClose();
          }}
        >
          I Accept
        </Button>
      </Modal>
    </>
  );
}

export default PatientConsent;
