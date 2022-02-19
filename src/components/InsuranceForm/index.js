import React, { useState, useEffect } from "react";
import Style from "./Insurance.module.scss";
import ContinueSkipLinks from "../ContinueSkipLinks";
import { useSelector, useDispatch } from "react-redux";
import { fetch_Insurance } from "../../actions/ReasonforVisitAction";
import CustomDropDown from "../Common/CustomDropDown";

function InsuranceForm({
  progressIncrementer,
  Store_formData,
  appoinment_form,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
    dispatch(fetch_Insurance("84743113"));
  }, []);
  const insuranceList = useSelector(
    (state) => state.bookAppoinment.insuranceList
  );
  const [insuranceData, setInsuranceData] = useState({
    provider: appoinment_form?.insurance?.provider,
    membershipNo: appoinment_form?.insurance?.membershipNo,
  });
  const errorInit = {
    provider: false,
    membershipNo: false,
    error: false,
  };

  const [error, setError] = useState(errorInit);

  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (insuranceData.membershipNo == "") {
        errorTemp = { ...errorTemp, membershipNo: true, error: true };
      }
      setError({ ...errorTemp, error: true });
    }
  }, [insuranceData]);

  const handleChange = (e) => {
    const re = /^[a-z0-9]+$/i;
    if (e.target.value === "" || re.test(e.target.value)) {
      setInsuranceData({ ...insuranceData, membershipNo: e.target.value });
    }
  };

  const selectChange = (e) => {
    setInsuranceData({ ...insuranceData, provider: e.target.value });
  };

  const onContinue = () => {
    let errorTemp = errorInit;
    if (insuranceData.provider == "") {
      errorTemp = { ...errorTemp, provider: true, error: true };
    } else if (
      insuranceData.provider != "" &&
      insuranceData.membershipNo == ""
    ) {
      errorTemp = { ...errorTemp, membershipNo: true, error: true };
    }

    setError({ ...errorTemp });

    if (errorTemp.error) {
      return;
    }

    let data = {
      provider: insuranceData.provider,
      membershipNo: insuranceData.membershipNo,
    };
    dispatch(Store_formData({ ...appoinment_form, insurance: data }));
    progressIncrementer();
  };
  return (
    <>
      <h3 className={Style.insurance_form_main_heading}>Insurance</h3>
      <div className="form-group mb-spce">
        <label className={Style.insurance_form_label}>
          Choose your provider
        </label>
        {/* 
        <select
          name="relationType"
          className={`${Style.insurance_form_input_field} ${
            error?.provider && Style.inputError
          }`}
          onChange={selectChange}
          value={insuranceData.provider}
        >
          <option>Select Insurance</option>
          {insuranceList &&
            insuranceList.length !== 0 &&
            insuranceList.map((item) => {
              return <option value={item}>{item}</option>;
            })}
        </select> */}
        <CustomDropDown
          error={false}
          DataItem={insuranceList}
          onClick={(e) => {
            setInsuranceData({ ...insuranceData, provider: e });
          }}
          defaultPlaceH={insuranceData.provider != ""}
          selectedData={
            insuranceData.provider != ""
              ? insuranceData.provider
              : "Select Insurance"
          }
        />
        {error?.provider && (
          <p className={Style.error}>Please select your insurance</p>
        )}
      </div>
      <div className="form-group">
        <label className={Style.insurance_form_label}>
          Enter Membership No
        </label>
        <input
          type="text"
          name="providerName"
          className={`${Style.insurance_form_input_field} ${
            error?.membershipNo && Style.inputError
          }`}
          placeholder="Enter Membership No"
          onChange={handleChange}
          value={insuranceData.membershipNo}
        />
        {error?.membershipNo && (
          <p className={Style.error}>Please enter your membership number</p>
        )}
      </div>
      <ContinueSkipLinks
        progressIncrementer={progressIncrementer}
        onContinue={onContinue}
      />
    </>
  );
}

export default InsuranceForm;
