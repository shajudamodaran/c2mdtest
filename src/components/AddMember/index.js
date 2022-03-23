import React, { useState, useEffect } from "react";
import Style from "./AddMember.module.scss";
import Assets from "../Layout/Assets";
import classNames from "classnames";
import { Button, Collapse } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AgeGender from "../AgeGender";
import { addMember } from "../../actions/BookAppoinmentAction";
import { useDispatch, useSelector } from "react-redux";
import CustomDropDown from "../Common/CustomDropDown";

function AddMember({ setInnerPage, innerPage, setMemberMain }) {
  const [member, setMember] = useState({
    memberName: "",
    relationship: "",
    gender: "",
    dob: "",
  });
  const errorInit = {
    memberName: false,
    relationship: false,
    gender: false,
    dob: false,
    error: false,
  };
  const [error, setError] = useState(errorInit);
  const dispatch = useDispatch();
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

  useEffect(() => {
    errroCheck();
  }, [member]);

  const errroCheck = () => {
    if (error.error) {
      let temp = errorInit;
      if (member.memberName == "") {
        temp = { ...temp, memberName: true, error: true };
      }
      if (member.relationship == "") {
        temp = { ...temp, relationship: true, error: true };
      }

      if (member.gender == "") {
        temp = { ...temp, gender: true, error: true };
      }
      if (member.dob == "") {
        temp = { ...temp, dob: true, error: true };
      }
      setError(temp);
    }
  };

  const submit = async () => {
    let temp = errorInit;
    if (member.memberName == "") {
      temp = { ...temp, memberName: true, error: true };
    }
    if (member.relationship == "") {
      temp = { ...temp, relationship: true, error: true };
    }

    if (member.gender == "") {
      temp = { ...temp, gender: true, error: true };
    }
    if (member.dob == "") {
      temp = { ...temp, dob: true, error: true };
    }

    setError(temp);
    if (temp.error == false) {

      setMemberMain(member)
      await dispatch(addMember(member));
      setInnerPage(innerPage - 1);
    } else {
    }
  };

  return (
    <>
      {/* <img src={Assets.previous_icon} ></img> <span className={Style.book_appointment_previous_step}>Back</span> */}
      <h3 className={Style.book_appointment_main_heading}>
        OK, Lets add this member
      </h3>
      <div className="form-group">
        <label className={Style.book_appointment_label}>Patient Name</label>
        <input
          type="text"
          name="patientName"
          className={`${Style.book_appointment_input_field} ${
            error.memberName && Style.inputError
          }`}
          placeholder="Enter patient name"
          onChange={(e) => {
            setMember({ ...member, memberName: e.target.value });
          }}
          value={member.memberName}
        />
        {error.memberName && (
          <p className={Style.error}>Please enter the name of the patient</p>
        )}
      </div>
      <div className="form-group mb-spce">
        <label className={Style.book_appointment_label}>
          What is your relationship with this member?
        </label>
        <CustomDropDown
          error={error.relationship}
          DataItem={relat}
          onClick={(e) => {
            setMember({ ...member, relationship: e });
          }}
          selectedData={
            member.relationship != ""
              ? member.relationship
              : "Choose Relationship"
          }
          defaultPlaceH={member.relationship != ""}
        />

        {error.relationship && (
          <p className={Style.error}>
            {" "}
            Select your relationship with this member
          </p>
        )}
      </div>

      <AgeGender member={member} error={error} setMember={setMember} />

      <p className={Style.book_appointment_confirmation_paragraph}>
        By continuing, you confirm that you have the necessary consent to book
        this virtual consult.
      </p>
      <div className={`${Style.btn_floating} btn_floating`}>
        <Button
          className={Style.book_appointment_continue_button}
          onClick={submit}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default AddMember;
