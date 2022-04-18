import React, { useState, useEffect } from "react";
import Style from "./EmergencyContact.module.scss";
import { Button } from "react-bootstrap";
import CountryJson from "../../constants/country.json";
import { useDispatch, useSelector } from "react-redux";
import CustomDropDown from "../Common/CustomDropDown";
import ContinueSkipLinks from "../ContinueSkipLinks";
import Custommodal from "./ConfirmModal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CustomPhoneInput from "../CustomPhoneInput/CustomPhoneInput";
function EmergencyContact({
  progressIncrementer,
  appoinment_form,
  Store_formData,
}) {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [emergencyData, setEmergencyData] = useState({
    name: appoinment_form.emergencyname ? appoinment_form.emergencyname : "",
    relation: appoinment_form.emergencyrelation
      ? appoinment_form.emergencyrelation
      : "",
    mobileNo: appoinment_form.emergencyphone
      ? appoinment_form.emergencyphone?.slice(3)?.replace(/ /g, "")
      : "",
    emergencyNoCode: appoinment_form.emergencyNoCode
      ? appoinment_form.emergencyNoCode
      : "91",
  });
  const errorInit = {
    name: false,
    relation: false,
    mobileNo: false,
    error: false,
  };

  const relat = [
    "Father",
    "Mother",
    "Brother",
    "Sister",
    "Son",
    "Daughter",
    "Grandfather",
    "Grandmother",
    "Friend",
    "Wife",
    "Husband",
    "Cousin",
    "Aunt",
    "Uncle",
  ];

  const [error, setError] = useState(errorInit);

  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (emergencyData.name == "") {
        errorTemp = { ...errorTemp, name: true, error: true };
      }

      if (emergencyData.relation == "") {
        errorTemp = { ...errorTemp, relation: true, error: true };
      }

      if (emergencyData.mobileNo == "") {
        errorTemp = {
          ...errorTemp,
          mobileNo: true,
          error: true,
          mobileErrormsg: `Please let us know the number we can reach you`,
        };
      } else if (
        emergencyData.mobileNo != "" &&
        !emergencyData.mobileNo.match(/^[1-9]{1}[0-9]{11}$/)
      ) {
        errorTemp = {
          ...errorTemp,
          mobileNo: true,
          error: true,
          mobileErrormsg: `There seems to be some issue with the mobile number you entered.
        Please check`,
        };
      }

      setError({ ...errorTemp, error: true });
    }
  }, [emergencyData]);

  const onContinue = () => {
    let errorTemp = errorInit;
    if (emergencyData.name == "") {
      errorTemp = { ...errorTemp, name: true, error: true };
    }

    if (emergencyData.relation == "") {
      errorTemp = { ...errorTemp, relation: true, error: true };
    }

    if (emergencyData.mobileNo == "") {
      errorTemp = {
        ...errorTemp,
        mobileNo: true,
        error: true,
        mobileErrormsg: `Please let us know the number we can reach you`,
      };
    } else if (
      emergencyData.mobileNo != "" &&
      !emergencyData.mobileNo.match(/^[1-9]{1}[0-9]{11}$/)
    ) {
      errorTemp = {
        ...errorTemp,
        mobileNo: true,
        error: true,
        mobileErrormsg: `There seems to be some issue with the mobile number you entered.
        Please check`,
      };
    }

    setError(errorTemp);

    if (!errorTemp.error) {
      let phoneNo = emergencyData.mobileNo?.slice(
        emergencyData?.emergencyNoCode?.length
      );
      let emergencyNum = `%2B${emergencyData.emergencyNoCode} ${phoneNo}`;
      if (
        appoinment_form?.reminderNumber?.replace(/ /g, "") ==
        emergencyNum?.replace(/ /g, "")
      ) {
        setShowModal(true);
      } else {
        dispatch(
          Store_formData({
            ...appoinment_form,
            emergencyphone: emergencyNum,
            emergencyname: emergencyData.name,
            emergencyrelation: emergencyData.relation,
            emergencyNoCode: emergencyData.emergencyNoCode,
          })
        );
        progressIncrementer();
      }
    }
  };
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setEmergencyData({ ...emergencyData, mobileNo: e.target.value });
    }
  };
  const onCancel = () => {
    progressIncrementer();
  };
  // const onblurAction = () => {

  // };
  const handleOnChange = (value, data, event, formattedValue) => {};
  return (
    <>
      <h3 className={Style.emergency_contact_main_heading}>
        Incase of an emergency, who would you like us to contact?
      </h3>
      <div className={`form-group`}>
        <label className={Style.emergency_contact_label}>Name</label>
        <br />
        <input
          type="text"
          name="name"
          className={`${Style.emergency_contact_input_field} ${
            error.name && Style.inputError
          }`}
          placeholder="Enter Your Name"
          value={emergencyData.name}
          onChange={(e) => {
            setEmergencyData({ ...emergencyData, name: e.target.value });
          }}
        />
        {error.name && (
          <p className={Style.error}>
            Please let us know who would you like us to contact incase of an
            emergency
          </p>
        )}
      </div>
      <div className="form-group  mb-spce">
        <label className={`${Style.emergency_contact_label}`}>
          Relationship
        </label>
        <CustomDropDown
          error={error.relation}
          DataItem={relat}
          onClick={(e) => {
            setEmergencyData({ ...emergencyData, relation: e });
          }}
          defaultPlaceH={emergencyData.relation != ""}
          selectedData={
            emergencyData.relation != ""
              ? emergencyData.relation
              : "Choose Relationship"
          }
        />
        {error.relation && (
          <p className={Style.error}>
            Please let us know how is this person related
          </p>
        )}
      </div>
      <div>
        <label className={Style.emergency_contact_label}>Mobile Number</label>
        <div
          className={`mob-flag-wrp${" "}${Style.emergency_phoneInpt}${" "} ${
            error.mobileNo && Style.inputError
          }`}
        >
          {/* <select
            className={Style.emergency_contact_country_code}
            value={emergencyData.code}
            name="code"
            onChange={(e) => {
              setEmergencyData({ ...emergencyData, code: e.target.value });
            }}
          >
            {CountryJson.map((item, index) => {
              return (
                <option value={item.dial_code}>
                  {item.flag} {item.dial_code}
                </option>
              );
            })}
          </select> */}
          <CustomPhoneInput
            country={"in"}
            value={emergencyData.mobileNo?.slice(emergencyData.emergencyNoCode?.length)}
            name="mobileNo"
            autoFormat={false}
            countryCodeEditable={false}
            onChange={(value, data, event, formattedValue) => {
              setEmergencyData({
                ...emergencyData,
                mobileNo: value,
                emergencyNoCode: data.dialCode,
              });
              handleOnChange(value, data, event, formattedValue);
            }}
          />
          {/* <input
            type="text"
            name="mobileNo"
            className={Style.emergency_contact_mobile_input_field}
            placeholder="Enter Mobile Number"
            value={emergencyData.mobileNo}
            onChange={handleChange}
            // onBlur={(e) => onblurAction()}
          /> */}
        </div>
        {error.mobileNo && (
          <p className={Style.error}>{error.mobileErrormsg}</p>
        )}
      </div>
      <ContinueSkipLinks
        progressIncrementer={progressIncrementer}
        onContinue={onContinue}
      />
      <Custommodal
        showModal={showModal}
        setShowModal={setShowModal}
        onCancel={onCancel}
        number={
          "+" +
          emergencyData.emergencyNoCode +
          " " +
          emergencyData.mobileNo?.slice(emergencyData.emergencyNoCode?.length)
        }
        // deleteItems={deleteItems}
        // modalItem={modalItem}
      />
      {/* <div className={`${Style.btn_floating} btn_floating`}> */}
      {/* <Button
          className={Style.emergency_contact_continue_button}
          onClick={() => onsubmit()}
        >
          Continue
        </Button> */}

      {/* </div> */}
    </>
  );
}

export default EmergencyContact;
