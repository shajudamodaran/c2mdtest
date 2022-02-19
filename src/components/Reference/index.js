import React, { useState, useEffect } from "react";
import Style from "./Reference.module.scss";
import YesNoButton from "../YesNoButton";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CustomDropDown from "../Common/CustomDropDown";

function Reference({
  progressIncrementer,
  appoinment_form,
  Store_formData,
  progress,
}) {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const [referenceDoctorName, setReferenceDoctorName] = useState(
    appoinment_form.referenceDoctorName
      ? appoinment_form.referenceDoctorName
      : ""
  );
  const [referenceFor, setReferenceFor] = useState(
    appoinment_form.referenceFor ? appoinment_form.referenceFor : ""
  );
  const errorInit = {
    referenceDoctorName: false,
    referenceFor: false,
    error: false,
  };
  const [isRef, setIsRef] = useState(appoinment_form.referenceFor ? "Yes" : "");
  const [error, setError] = useState(errorInit);
  const dispatch = useDispatch();
  const dataList = [
    "Treatment",
    "Evaluation",
    "Follow up",
    "Second Opinion",
    "Investigation",
    "Planning",
    "Review",
    "Other",
  ];

  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (referenceDoctorName == "") {
        errorTemp = { ...errorTemp, referenceDoctorName: true, error: true };
      }
      if (referenceFor == "") {
        errorTemp = { ...errorTemp, referenceFor: true, error: true };
      }
      setError({ ...errorTemp, error: true });
    }
  }, [referenceDoctorName, referenceFor]);

  const contine = () => {
    let errorTemp = errorInit;
    if (referenceDoctorName == "") {
      errorTemp = { ...errorTemp, referenceDoctorName: true, error: true };
    }
    if (referenceFor == "") {
      errorTemp = { ...errorTemp, referenceFor: true, error: true };
    }
    setError(errorTemp);

    if (!errorTemp.error) {
      dispatch(
        Store_formData({
          ...appoinment_form,
          referenceDoctorName: referenceDoctorName,
          referenceFor: referenceFor,
        })
      );
      progressIncrementer();
    }
  };

  const yes_btn_Change = () => {
    setIsRef("Yes");
  };

  const No_btn_Change = () => {
    setIsRef("No");
    progressIncrementer();
  };

  return (
    <>
      <h3 className={Style.reference_main_heading}>
        Have you been referred by any doctor/hospital?
      </h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        No_btn_Change={No_btn_Change}
        flag={isRef}
      />
      {isRef && (
        <>
          <div className="form-group">
            <label className={Style.reference_label}>
              Enter Doctor Or Hospital Name
            </label>
            <input
              type="text"
              name="referenceDoctorName"
              className={`${Style.reference_input_field} ${
                error.referenceDoctorName && Style.inputError
              }`}
              placeholder="Enter Doctor or Hospital Name"
              onChange={(e) => setReferenceDoctorName(e.target.value)}
              value={referenceDoctorName}
            />
            {error.referenceDoctorName && (
              <p className={Style.error}>
                Please enter the name of the doctor/hospital you have been
                referred by
              </p>
            )}
          </div>
          <div className="form-group">
            <label className={Style.reference_label}>Referred For</label>
            <CustomDropDown
              error={error.referenceFor}
              DataItem={dataList}
              onClick={(e) => {
                setReferenceFor(e);
              }}
              defaultPlaceH={referenceFor != ""}
              selectedData={referenceFor != "" ? referenceFor : "Referred For"}
            />
            {/* <input
                    type="text"
                    name="referenceFor"
                    className={`${Style.reference_input_field} ${error.referenceFor&&Style.inputError}`}
                    placeholder="Enter Referred For"
                    onChange={(e)=>setReferenceFor(e.target.value)}
                    value={referenceFor}
                /> */}
            {error.referenceFor && (
              <p className={Style.error}>
                Please let us know what have you been referred to
              </p>
            )}
          </div>
          <div className={`${Style.btn_floating} btn_floating`}>
            <Button
              className={Style.reference_continue_button}
              onClick={contine}
            >
              Continue
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Reference;
