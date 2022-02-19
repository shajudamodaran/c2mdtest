import React, { useState } from "react";
import Style from "./AgeGender.module.scss";
import Assets from "../Layout/Assets";
import classNames from "classnames";
import { Button } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";

function AgeGender({ member, setMember, error }) {
  let min_yr = moment().subtract(18, "years");
  let min_date = min_yr.format("YYYY-MM-DD");
  const [defaultvalue, setDefaultValue] = useState(
    member.memberName == "For myself"
      ? moment().subtract(18, "years")
      : moment()
  );

  let default_user =
    member.firstName === "For myself" ? moment(min_date, "DD/MMM/YYYY") : "";

  const disabledDate = (current) => {
    return current > moment().subtract(18, "years");
  };

  const disabledDate2 = (current) => {
    return current > moment().subtract(1, "day");
  };

  const buttonSelection = classNames(
    Style.book_appointment_button_type,
    "col-md-6"
  );

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  return (
    <>
      <div className="form-group">
        <label className={Style.book_appointment_label}>Date of Birth</label>
        <DatePicker
          defaultPickerValue={defaultvalue}
          placeholder="Date - Month - Year"
          format={dateFormatList}
          className={`${Style.book_appointment_input_field} ${
            error.dob && Style.inputError
          }`}
          onChange={(date) =>
            setMember({ ...member, dob: moment(date).format("DD/MMM/YYYY") })
          }
          // defaultValue={moment(min_date, "DD/MMM/YYYY")}
          defaultValue={
            member?.dob != undefined &&
            member?.dob != "" &&
            moment(member?.dob, "DD/MMM/YYYY")
          }
          showYearDropdown
          dropdownMode="select"
          disabledDate={
            member.memberName === "For myself" ? disabledDate : disabledDate2
          }
        />
        {error.dob && (
          <p className={Style.error}>Please enter the Date of Birth</p>
        )}
      </div>

      <div className="form-group">
        <label className={Style.book_appointment_label}>Gender</label>
        <div className={Style.book_appointment_gender_wrp}>
          <div className={Style.book_appointment_gender_selection}>
            <Button
              variant="outline-secondary"
              className={`${buttonSelection} ${
                member.gender == "Male" && Style.active
              } ${error.gender && Style.inputError}`}
              style={{ "margin-right": "2%" }}
              onClick={() => setMember({ ...member, gender: "Male" })}
            >
              <img
                src={Assets.male_icon}
                className={Style.book_appointment_icon_size}
              />
              Male
            </Button>
            <Button
              variant="outline-secondary"
              className={`${buttonSelection} ${
                member.gender == "Female" && Style.active
              } ${error.gender && Style.inputError}`}
              onClick={() => setMember({ ...member, gender: "Female" })}
            >
              <img
                src={Assets.female_icon}
                className={Style.book_appointment_icon_size}
              />
              Female
            </Button>
          </div>
          {error.gender && (
            <p className={Style.error}>
              We need to know you a little better, please enter your gender
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AgeGender;
