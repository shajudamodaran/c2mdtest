import React, { useState, useEffect } from "react";
import Style from "./BookingSummary.module.scss";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import DoctorDetails from "../DoctorDetails";
import PatientConsent from "../PatientConsent";
import { book_slot } from "../../actions/BookAppoinmentAction";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ConfirmModal from "./ConfirmModal";

function BookingSummary({
  progressIncrementer,
  appoinment_form,
  setProgress,
  old_appointment,
}) {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const [showModal, setModal] = useState(false);
  const [patientConsentdata, setPatientConsent] = useState(false);
  const [tc, setTC] = useState(false);
  let { doctorId } = useParams();
  const viewModal = () => {
    setModal(true);
  };

  const hidemodal = () => {
    setModal(false);
  };
  let reportLength = appoinment_form?.reportsArray?.length;
  let SelectedReportLength = appoinment_form?.selectedFiles?.length;

  let surgeryLength = appoinment_form?.surgerydetails?.length;

  const bookingConfirm = useSelector(
    (state) => state.bookAppoinment.bookingConfirmation
  );
  const userData = useSelector((state) => state.login.user);

  let [paymentLoading, setPaymentLoading] = useState(false)

  useEffect(() => {
    if (bookingConfirm) {
      progressIncrementer();
    }
  }, [bookingConfirm]);

  const onsubmit = () => 
  {

    setPaymentLoading(true)

    dispatch(
      book_slot({
        data: appoinment_form,
        userr: userData,
        progressIncrementer,
        old_appointment: old_appointment,
      })
    ).then((res) => {


      setPaymentLoading(false)
      console.log("book_slot API result ==> ", res);
      // progressIncrementer()
    });
  };

  console.log("Appointment Form:", appoinment_form);

  let getReportsCount = () => {

    let uploaded = reportLength ? reportLength : 0
    let selected = SelectedReportLength ? SelectedReportLength : 0

    return (uploaded + selected)

  }

  return (
    <>

      {/* <ConfirmModal
        showModal={paymentLoading}
        setShowModal={() => { setPaymentLoading(true) }}
        onCancel={() => { setPaymentLoading(false) }}

      /> */}
      <h3 className={Style.booking_summary_main_heading}>Booking summary</h3>
      <label className={`${Style.booking_summary_label} booking_summary_label`}>
        Doctor Details
      </label>
      <DoctorDetails></DoctorDetails>
      <div className={Style.title_linkwrp}>
        <label className={Style.booking_summary_doctor_details}>
          Patient Details
        </label>
        {/* <Link
          className={Style.booking_summary_change_link}
          onClick={() => {
            setProgress(2);
          }}
        >
          Change
        </Link> */}
      </div>
      <div className={Style.booking_summary_details_div}>
        <div className={Style.booking_desc}>
          Patient Name : <label>{appoinment_form.firstName}</label>
        </div>
        <div className={Style.booking_desc}>
          Age :{" "}
          <label>
            {moment().diff(moment(appoinment_form.dob, "DD/MMM/YYYY"), "years")}{" "}
            ({appoinment_form?.dob})
          </label>
        </div>
        <div className={Style.booking_desc}>
          Gender : <label>{appoinment_form.gender}</label>
        </div>
        <div className={Style.booking_desc}>
          Mobile :{" "}
          <label>
            
            {appoinment_form.reminderNumber.replace("%2B","+")}
          </label>
        </div>
        {appoinment_form?.emergencyname && (
          <div className={Style.booking_desc}>
            Emergency Contact : <label>{appoinment_form.emergencyname}</label>
          </div>
        )}
        {appoinment_form?.emergencyphone && (
          <div className={Style.booking_desc}>
            Emergency Contact number :{" "}
            <label>
              {"+"}
              {appoinment_form.emergencyphone?.slice(3)}
            </label>
          </div>
        )}
        {appoinment_form?.emergencyrelation && (
          <div className={Style.booking_desc}>
            Relation : <label>{appoinment_form.emergencyrelation}</label>
          </div>
        )}
      </div>
      <div className={Style.title_linkwrp}>
        <label className={Style.booking_summary_doctor_details}>
          Consultation Details
        </label>
        {/* <Link
          className={Style.booking_summary_consultation_change_link}
          onClick={() => {
            setProgress(6);
          }}
        >
          Change
        </Link> */}
      </div>
      <div className={Style.booking_summary_details_div}>
        <div className={Style.booking_desc}>
          Reason for visit : <label>{appoinment_form.reasonForVisit}</label>
        </div>
        {appoinment_form?.symptoms?.length > 0 && (
          <div className={Style.booking_desc}>
            Symptom(s) :{" "}
            <label>
              {appoinment_form?.symptoms?.map((res, index) => {
                if (appoinment_form?.symptoms?.length - 1 == index) {
                  return <span key={index}>{res.symptoms}</span>;
                }
                return <span key={index}>{res.symptoms},</span>;
              })}
            </label>
          </div>
        )}
        {appoinment_form?.medicalConditions?.length > 0 && (
          <div className={Style.booking_desc}>
            Medical Condition :{" "}
            <label>
              {appoinment_form?.medicalConditions?.map((res, index) => {
                if (appoinment_form?.medicalConditions?.length - 1 == index) {
                  return <span key={index}>{res.medicalcondition}</span>;
                }
                return <span key={index}>{res.medicalcondition},</span>;
              })}
            </label>
          </div>
        )}
        {appoinment_form?.surgeries?.length > 0 && (
          <div className={Style.booking_desc}>
            Surgeries :{" "}
            <label>
              {appoinment_form?.surgeries?.map((res, index) => {
                if (appoinment_form?.surgeries?.length - 1 == index) {
                  return <span key={index}>{res.surgery}</span>;
                }
                return <span key={index}>{res.surgery},</span>;
              })}
            </label>
          </div>
        )}
        {appoinment_form?.allergies?.length > 0 && (
          <div className={Style.booking_desc}>
            Allergy(s) :{" "}
            <label>
              {appoinment_form?.allergies?.map((res, index) => {
                if (appoinment_form?.allergies?.length - 1 == index) {
                  return <span key={index}>{res.allergen}</span>;
                }
                return <span key={index}>{res.allergen},</span>;
              })}
            </label>
          </div>
        )}
        <div className={Style.booking_desc}>
          Report(s) :{" "}
          <label>{getReportsCount()} attachment(s)</label>
        </div>


        {appoinment_form.patientId != undefined &&
          appoinment_form.patientId != "" &&
          appoinment_form.patientId != null ? (
          <div className={Style.booking_desc}>
            Patient ID/MRN : <label>{appoinment_form.patientId}</label>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={Style.booking_summary_checkbox_align}>
        {appoinment_form?.bookingType != "Request" && (
          <>
            <div className={Style.chckbx_input}>
              <input
                type="checkbox"
                name="checkboxId1"
                checked={patientConsentdata}
                placeholder=""
                onChange={(e) => {
                  e.target.checked == true
                    ? setModal(true)
                    : setPatientConsent(false);
                }}
              />
            </div>
            <label className={Style.booking_summary_label}>
              I understand the{" "}
              <Link onClick={viewModal}>Patient Consent Form</Link>
            </label>
          </>
        )}
      </div>

      {appoinment_form?.bookingType == "Request" ? (
        ""
      ) : (
        <>
          <div className={Style.booking_summary_checkbox_align}>
            <div className={Style.chckbx_input}>
              <input
                type="checkbox"
                name="checkboxId2"
                checked={tc}
                placeholder=""
                onChange={(e) => {
                  setTC(e.target.checked);
                }}
              />
            </div>

            <label className={Style.booking_summary_label}>
              I agree to the{" "}
              <Link
                to={{
                  pathname: "/termsofUse/terms",
                  state: "terms",
                }}
                target="_blank"
              >
                Terms and Conditions
              </Link>{" "}
              and{" "}
              <Link
                to={{
                  pathname: "/termsofUse/privacy",
                  state: "privacy",
                }}
                target="_blank"
              >
                Privacy Policy
              </Link>{" "}
              (Open in a New Tab/Window). I also understand that video
              consultation does not replace personal doctor care and online
              consultations does not guarantee any prescription. It is up to the
              doctor to recommend the best treatment. For more details on the
              prescription policy{" "}
              <Link to="/prescriptionpolicy" target="_blank">
                click here
              </Link>{" "}
              (Open in a New Tab/Window)
            </label>
          </div>
          <div className={Style.booking_summary_note_div}>
            Note:- On clicking "Proceed To Payment", you will be redirected to
            our Payment Gateway. After completing the payment process, you will
            be redirected back to view your appointment details.
          </div>
        </>
      )}

      <div className={`${Style.btn_floating} btn_floating`}>
        {appoinment_form?.bookingType == "Request" ? (
          <Button
            className={Style.booking_summary_continue_button}
            onClick={() => onsubmit()}
          >
            Send Request
          </Button>
        ) : (
          <Button
            className={Style.booking_summary_continue_button}
            onClick={() => onsubmit()}
            disabled={!(patientConsentdata && tc)}
          >
            Proceed To Payment
          </Button>
        )}
      </div>
      <PatientConsent
        show={showModal}
        handleClose={hidemodal}
        setPatientConsent={setPatientConsent}
      />
    </>
  );
}

export default BookingSummary;