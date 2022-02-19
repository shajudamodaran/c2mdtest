import React, { useState, useEffect } from "react";
import Style from "./HospitalVisit.module.scss";
import YesNoButton from "../YesNoButton";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

function HospitalVisit({
  progressIncrementer,
  appoinment_form,
  Store_formData,
}) {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const [hospitalVisit, setHospitalVisit] = useState({
    flag:
      appoinment_form.patientId && appoinment_form.patientId != "" ? "Yes" : "",
    patientId: appoinment_form.patientId,
  });
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const yes_btn_Change = () => {
    setHospitalVisit({ ...hospitalVisit, flag: "Yes" });
  };
  const No_btn_Change = () => {
    setHospitalVisit({ ...hospitalVisit, flag: "No" });
    progressIncrementer();
  };
  const handleChange = (e) => {
    const re = /^[a-z0-9]+$/i;
    if (e.target.value === "" || re.test(e.target.value)) {
      setHospitalVisit({ ...hospitalVisit, patientId: e.target.value });
      setError(false);
    } else {
    }
  };

  const onSubmit = () => {
    if (hospitalVisit.patientId && hospitalVisit.patientId != "") {
      dispatch(
        Store_formData({
          ...appoinment_form,
          patientId: hospitalVisit.patientId,
        })
      );
      progressIncrementer();
    } else {
      setError(true);
    }
  };
  return (
    <>
      <h3 className={Style.hospital_visit_main_heading}>
        Have you visited this practitioner/hospital/clinic before?
      </h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        No_btn_Change={No_btn_Change}
        flag={hospitalVisit.flag}
      />

      {hospitalVisit.flag === "Yes" && (
        <>
          <div className="form-group">
            <label className={Style.hospital_visit_label}>
              Enter you Patient ID/MRN
            </label>
            <input
              type="text"
              name="hospitalId"
              className={`${Style.hospital_visit_input_field} ${
                error && Style.inputError
              }`}
              placeholder=""
              onChange={handleChange}
              value={hospitalVisit.patientId}
            />
            {error && (
              <p className={Style.error}>
                Please provide the Patient ID or MRN{" "}
              </p>
            )}
          </div>
          <div className={`${Style.btn_floating} btn_floating`}>
            <Button
              className={Style.hospital_visit_continue_button}
              onClick={onSubmit}
            >
              Continue
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default HospitalVisit;
