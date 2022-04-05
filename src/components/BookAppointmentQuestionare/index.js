import React, { useState, useEffect } from "react";
import Style from "./BookAppointmentQuestionare.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetch_appoinment_questions,
  Store_formData,
} from "../../actions/BookAppoinmentAction";
import { fetch_DoctorDetail } from "../../actions/DoctorDetailsAction";
import { Col } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import {
  fetchReasonforVisit,
  fetchTypeofAppoinment,
  fetch_Symptoms,
} from "../../actions/ReasonforVisitAction";
import { useParams } from "react-router-dom";

import NationalId from "../NationalId";
import InsuranceForm from "../InsuranceForm";
import AppointmentType from "../AppointmentType";
import ReasonForVisit from "../ReasonForVisit";
import Symptoms from "../Symptoms";
import AddMedicine from "../AddMedicine";
import Medications from "../Medications";
import UploadReports from "../UploadReports";
import HospitalVisit from "../HospitalVisit";
import GettingInTouch from "../GettingInTouch";
import EmergencyContact from "../EmergencyContact";
import Reference from "../Reference";
import BookingSummary from "../BookingSummary";
import BookingConfirmation from "../BookingConfirmation";
import BookAppointmentQBox from "../BookAppointmentQBox";
import ImportantRead from "../ImportantRead";
import AppointmentPerson from "../AppointmentPerson";
import MedicalConditions from "../MedicalConditions";
import Surgeries from "../Surgeries";
import Allergies from "../Allergies";
import AddToCalendar from "@culturehq/add-to-calendar";
import "@culturehq/add-to-calendar/dist/styles.css";

function BookAppointmentQuestionare({setSummary}) {
  const dispatch = useDispatch();
  const history = useHistory();
  // const doctorId = history.location.state.doctorId;
  let { doctorId } = useParams();

  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
    dispatch(fetch_appoinment_questions());
    dispatch(fetch_Symptoms("75917831"));
  }, []);

  const [progress, setProgress] = useState(1);
  const [innerPage, setInnerPage] = useState(0);
  const [addMember, setAddMemeber] = useState(false);
  const [addMedicine, setMedicine] = useState(false);

  const appoinment_form = useSelector(
    (state) => state.bookAppoinment.appoinment_form
  );

  useEffect(() => {

    if(progress==14)
    {
      setSummary(true)
    }
    else{
      setSummary(false)
    }
   
  }, [progress])
  

  let reduxData = useSelector(state => state)

  console.log("appoinment_form---",appoinment_form)

  const old_appointment = useSelector(
    (state) => state.bookAppoinment.appointmentResult
  );

  useEffect(() => {
    if (innerPage == 0) {
      if (addMember) {
        setAddMemeber(false);
      }
      if (appoinment_form.referenceId != "" && appoinment_form.bookingFrom === "Book") {
        setProgress(progress + 12);
        setSummary(true)
      //  dispatch(fetch_DoctorDetail(doctorId));
        //console.log(progress + 3)
      }
    }

    window.scrollTo(0, 0);
  }, [innerPage]);

  useEffect(() => {
    dispatch(fetchReasonforVisit(doctorId));
    dispatch(fetchTypeofAppoinment(doctorId));
    dispatch(fetch_DoctorDetail(doctorId));
  }, []);

  const progressIncrementer = () => {

    console.log(progress+1);
    setProgress(progress + 1);
  };



  const progressDescrementer = () => {

    if (progress != 1) {
      if (progress == 9 && appoinment_form?.medicalConditions?.length == 0) {
        setProgress(progress - 1);
      }

      else {
        setProgress(progress - 1);
      }
    }
  };
  
  const settingsdata = useSelector(
    (state) => state.bookAppoinment.settingsdata
  );

  return (
    <div className={Style.book_appointment_topSection}>
      <Col>

        {
          progress == 14 ? null :
            <h2 className={Style.book_appointment_header_align} data={progress}>
              {appoinment_form?.bookingType == "Request"
                ? "Request an Appointment"
                : "Book your appointment"}
            </h2>

        }


        <BookAppointmentQBox
          progressDescrementer={progressDescrementer}
          progress={progress}
          innerPage={innerPage}
          setInnerPage={setInnerPage}
        >
          {progress == 1 && (
            <>
              <ImportantRead
                progressIncrementer={progressIncrementer}
                appoinment_form={appoinment_form}
                Store_formData={Store_formData}
              />
            </>
          )}

          {progress == 2 && (
            <AppointmentPerson
              progressIncrementer={progressIncrementer}
              setAddMemeber={setAddMemeber}
              setInnerPage={setInnerPage}
              innerPage={innerPage}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
          )}

          {/* {progress == 3 && (
            <NationalId
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
          )} */}
{/* 
          {progress == 4 && (
            <InsuranceForm
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
          )} */}

          {/* {progress == 5 && (
            <AppointmentType
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
          )} */}

          {progress == 3 && (
            <ReasonForVisit
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
          )}

          {progress == 4 && (
            <Symptoms
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
              settingsdata={settingsdata}
            />
          )}

          {progress == 5 && (
            <MedicalConditions
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
              settingsdata={settingsdata}
            />
          )}

          {progress == 7 && (
            <Surgeries
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
              settingsdata={settingsdata}
            />
          )}

          {/* {progress == 9 && (
            <Medications
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
              settingsdata={settingsdata}
              setMedicine={setMedicine}
              addMedicine={addMedicine}
            />
          )} */}
          {progress == 6 &&
            // (appoinment_form?.medicalConditions?.length == 0 ? (
            //   progressIncrementer()
            // ) : (
            <AddMedicine
              progressIncrementer={progressIncrementer}
              settingsdata={settingsdata}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
            // ))
          }
          {/* {progress == 9 &&
            (appoinment_form?.medicalConditions?.length == 0 ? (
              progressIncrementer()
            ) : (
              <AddMedicine
                progressIncrementer={progressIncrementer}
                settingsdata={settingsdata}
                appoinment_form={appoinment_form}
                Store_formData={Store_formData}
              />
            ))} */}

          {/* {progress == 12 && (
            <Medications progressIncrementer={progressIncrementer} />
          )} */}

          {progress == 8 && (
            <Allergies
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
              settingsdata={settingsdata}
            />
          )}

          {progress == 9 && (
            <UploadReports
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
          )}

          {progress == 10 && (
            <HospitalVisit
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
          )}

          {progress == 11 && (
            <GettingInTouch
              progressIncrementer={progressIncrementer}
              Store_formData={Store_formData}
              appoinment_form={appoinment_form}
            />
          )}

          {progress == 12 && (
            <EmergencyContact
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
            />
          )}
{/* 
          {progress == 15 && (
            <Reference
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
              progress={progress}
            />
          )} */}

          {progress == 13 && (
            <BookingSummary
              progressIncrementer={progressIncrementer}
              appoinment_form={appoinment_form}
              Store_formData={Store_formData}
              setProgress={setProgress}
              old_appointment={old_appointment}
            />
          )}

          {progress == 14 && (
            <BookingConfirmation progressIncrementer={progressIncrementer} />
          )}
        </BookAppointmentQBox>
      </Col>
    </div>
  );
}

export default BookAppointmentQuestionare;