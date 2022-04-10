import React, { useState, useEffect } from "react";
import Style from "./GettingInTouch.module.scss";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CountryJson from "../../constants/country.json";
import CustomDropDown from "../Common/CustomDropDown";
import { useSelector } from "react-redux";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function GettingInTouch({
  progressIncrementer,
  Store_formData,
  appoinment_form,
}) {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const user = useSelector((state) => state.login.user);

  let usrNo = user?.mobileNumber?.split(" ");

  let userPhoneNo =
    appoinment_form.reminderNumber == ""
      ? (user?.mobileNumber == "") | (user?.mobileNumber == undefined)
        ? ""
        : user?.mobileNumber?.slice(1)?.replace(/ /g, "")
      : appoinment_form.reminderNumber?.slice(3)?.replace(/ /g, "");
  const [mainNumber, setMainNumber] = useState(
    appoinment_form?.alternativeNumber == undefined ||
      appoinment_form?.alternativeNumber == ""
      ? true
      : false
  );
  const [phoneNum, setPhoneNum] = useState(userPhoneNo);
  const [countryCode, setCountrycode] = useState(
    appoinment_form.reminderNumber == ""
      ? (user?.mobileNumber == "") | (user?.mobileNumber == undefined)
        ? "91"
        : usrNo[0]?.slice(1)
      : appoinment_form.countryCode
  );
  const [alternativeCode, setAlterCode] = useState(
    appoinment_form.alternativeCode == "" ? "" : appoinment_form.alternativeCode
  );
  const [alterPhoneNUmber, setAlterPhoneNUmber] = useState(
    appoinment_form.alternativeNumber == ""
      ? ""
      : appoinment_form.alternativeNumber?.slice(3)?.replace(/ /g, "")
  );

  const brands = ["WhatsApp", "Telegram", "Botim","Viber","Signal","Skype","IMO","Others"];
  const [brand, setBrand] = useState(
    appoinment_form.Channel == undefined || appoinment_form.Channel == ""
      ? ""
      : appoinment_form.Channel
  );
  const dispatch = useDispatch();
  const errorInit = {
    phoneNum: false,
    alterPhoneNumber: false,
    brand: false,
    error: false,
  };
  const [error, setError] = useState(errorInit);
  const regexp = /^[0-9\b]+$/;
  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (phoneNum == "") {
        errorTemp = {
          ...errorTemp,
          phoneNum: true,
          error: true,
          phoneErrorMsg: "Please enter Mobile Number",
        };
      } else if (!phoneNum?.match(/^[1-9]{1}[0-9]{11}$/)) {
        errorTemp = {
          ...errorTemp,
          phoneNum: true,
          error: true,
          phoneErrorMsg: `There seems to be some issue with the mobile number you entered.
        Please check`,
        };
      }

      if (!mainNumber) {
        if (alterPhoneNUmber == "") {
          errorTemp = {
            ...errorTemp,
            alterPhoneNUmber: true,
            error: true,
            alterPhoneErrorMsg: "Please enter alternative mobile number",
          };
        } else if (!alterPhoneNUmber?.match(/^[1-9]{1}[0-9]{11}$/)) {
          errorTemp = {
            ...errorTemp,
            alterPhoneNUmber: true,
            error: true,
            alterPhoneErrorMsg: `There seems to be some issue with the mobile number your
          entered. Please check`,
          };
        } else if (phoneNum == alterPhoneNUmber) {
          errorTemp = {
            ...errorTemp,
            alterPhoneNUmber: true,
            error: true,
            alterPhoneErrorMsg: `Reminder number and alternative mobile number
            are same. Please check`,
          };
        }
        if (brand == "") {
          errorTemp = { ...errorTemp, brand: true, error: true };
        }
      }

      setError({ ...errorTemp, error: true });
    }
  }, [phoneNum, alterPhoneNUmber, brand]);

  const contine = () => {
    let errorTemp = errorInit;

    if (phoneNum == undefined || phoneNum == "") {
      errorTemp = {
        ...errorTemp,
        phoneNum: true,
        error: true,
        phoneErrorMsg: "Please enter mobile number",
      };
    } else if (!phoneNum?.match(/^[1-9]{1}[0-9]{11}$/)) {
      errorTemp = {
        ...errorTemp,
        phoneNum: true,
        error: true,
        phoneErrorMsg: `There seems to be some issue with the mobile number you entered.
      Please check`,
      };
    }

    if (!mainNumber) {
      if (alterPhoneNUmber == "") {
        errorTemp = {
          ...errorTemp,
          alterPhoneNUmber: true,
          error: true,
          alterPhoneErrorMsg: "Please enter alternative mobile number",
        };
      } else if (!alterPhoneNUmber?.match(/^[1-9]{1}[0-9]{11}$/)) {
        errorTemp = {
          ...errorTemp,
          alterPhoneNUmber: true,
          error: true,
          alterPhoneErrorMsg: `There seems to be some issue with the mobile number your
        entered. Please check`,
        };
      } else if (phoneNum == alterPhoneNUmber) {
        errorTemp = {
          ...errorTemp,
          alterPhoneNUmber: true,
          error: true,
          alterPhoneErrorMsg: `Reminder number and alternative mobile number
          are same. Please check`,
        };
      }
      if (brand == "") {
        errorTemp = { ...errorTemp, brand: true, error: true };
      }
    }

    setError(errorTemp);

    if (!errorTemp.error) {
      let mobileNo = phoneNum?.slice(countryCode?.length);
      let alternativeNO = alterPhoneNUmber?.slice(alternativeCode?.length);

      if (mainNumber) {
        dispatch(
          Store_formData({
            ...appoinment_form,
            reminderNumber: `%2B${countryCode} ${mobileNo}`,
            countryCode: countryCode,
            alternativeNumber: "",
            Channel: "",
          })
        );
      } else {
        dispatch(
          Store_formData({
            ...appoinment_form,
            reminderNumber: `%2B${countryCode} ${mobileNo}`,
            alternativeNumber: `%2B${alternativeCode} ${alternativeNO}`,
            alternativeCode: alternativeCode,
            Channel: brand,
          })
        );
      }

      progressIncrementer();
    }
  };

  const onblurAction = () => {
    if (phoneNum == alterPhoneNUmber) {
      setError({
        ...error,
        alterPhoneNumber: true,
        error: true,
        alterPhoneErrorMsg: `Reminder number and alternative mobile number
        are same. Please check`,
      });
    }
  };
  const handleOnChange = (value, data, event, formattedValue) => {};
  return (
    <>
      <h3 className={Style.getting_touch_main_heading}>
        How do we get in touch with you?
      </h3>
      <div>
        <label className={Style.getting_touch_label}>Mobile Number</label>
        <div
          className={`mob-flag-wrp${" "}${Style.gettinginfo_phoneinput}${" "}${
            error.phoneNum && Style.inputError
          }`}
        >
          <PhoneInput
            country={"in"}
            value={phoneNum}
            name="mobileNumber"
            autoFormat={false}
            countryCodeEditable={false}
            onChange={(value, data, event, formattedValue) => {
              setPhoneNum(value);
              setCountrycode(data?.dialCode);
              handleOnChange(value, data, event, formattedValue);
            }}
          />
        </div>
        {error.phoneNum && (
          <p className={Style.error}>{error.phoneErrorMsg} </p>
        )}
      </div>
      <div className={Style.getting_touch_checkbox_align}>
        <input
          type="checkbox"
          name="checkboxId"
          id="get_touch_check"
          placeholder=""
          value={mainNumber}
          checked={mainNumber}
          onChange={(e) => setMainNumber(e.target.checked)}
        />
        <label for="get_touch_check" className={Style.getting_touch_label}>
          This is my number on WhatsApp
        </label>
      </div>

      {!mainNumber && (
        <div className={Style.getting_touch_medicine_details}>
          <div className="form-group">
            <label className={Style.getting_touch_label}>
              Alternative number
            </label>
            <div
              className={`mob-flag-wrp ${" "}${
                Style.gettinginfo_phoneinput
              }${" "}${error.alterPhoneNUmber && Style.inputError}`}
            >
              <PhoneInput
              style={{borderRadious:"10px"}}
                country={"in"}
                value={alterPhoneNUmber}
                name="mobileNumber"
                autoFormat={false}
                countryCodeEditable={false}
                onChange={(value, data, event, formattedValue) => {
                  setAlterPhoneNUmber(value);
                  setAlterCode(data?.dialCode);
                  handleOnChange(value, data, event, formattedValue);
                }}
                onBlur={(e) => onblurAction(e)}
              />
            </div>
            {error.alterPhoneNUmber && (
              <p className={Style.error}>{error.alterPhoneErrorMsg}</p>
            )}
          </div>
          <div className="form-group">
            <label className={Style.getting_touch_label}>
              What is the Communication channel?
            </label>
            <CustomDropDown
              error={error.brand}
              DataItem={brands}
              onClick={(e) => {
                setBrand(e);
              }}
              defaultPlaceH={brand != ""}
              selectedData={brand != "" ? brand : "Enter Channel/brand"}
            />
            {/* <select
                      className={Style.getting_touch_frequency_select_field}
                      name="frequency">
                      <option value="">Enter Channel/brand</option>
                  </select> */}
            {error.brand && (
              <p className={Style.error}>
                Please select the communication channel
              </p>
            )}
          </div>
        </div>
      )}
      <div className={`${Style.btn_floating} btn_floating`}>
        <Button
          className={Style.getting_touch_continue_button}
          onClick={contine}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default GettingInTouch;
