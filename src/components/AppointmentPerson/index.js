import React, { useState, useEffect } from "react";
import Style from "./AppointmentPerson.module.scss";
import Assets from "../Layout/Assets";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddMember from "../AddMember";
import AgeGender from "../AgeGender";
import { editMember } from "../../actions/BookAppoinmentAction";
import moment from "moment";
import {
  fetch_family_members,
  fetch_patient_medicalDetails,
} from "../../actions/FamilyMembersAction";
import { updateLoginDetails } from '../../actions/LoginAction';

function AppointmentPerson({
  progressIncrementer,
  setAddMemeber,
  setInnerPage,
  innerPage,
  appoinment_form,
  Store_formData,
}) {
  const userData = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.bookAppoinment?.familyMember);
  const selectedMemberRedux = useSelector((state) => state.bookAppoinment?.appoinment_form?.selectedMember);
  const loginData = useSelector((state) => state.login);



  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
    if (memberList.length <= 1) {
      dispatch(fetch_family_members({ userid: userData }));

    }
  }, []);

  const [editDob, setEditDob] = useState(false);
  let prevMember = memberList[0];
  const [member, setMember] = useState();

  console.log(selectedMemberRedux);

  useEffect(() => {
    setMember(prevMember);
  }, [prevMember]);

  const errorInit = {
    gender: false,
    dob: false,
    error: false,
  };
  const [error, setError] = useState(errorInit);

  const selectProfile = (member) => {
    setMember(member);

    setEditDob(true);
    setInnerPage(1);

    console.log("Setting on redux***************");

    dispatch(
      Store_formData({
        ...appoinment_form,
        selectedMember: member,
      })
    );

    // if (member.dob == "") {
    //   setEditDob(true);
    //   setInnerPage(1);
    // }
  };

  useEffect(() => {
    if (editDob && error.error) {
      let temp = errorInit;
      if (member.gender == "") {
        temp = { ...temp, gender: true, error: true };
      }
      if (member.dob == "") {
        temp = { ...temp, dob: true, error: true };
      }
      setError(temp);
    }
  }, [member]);

  const editSubmited = () => {
    let temp = errorInit;
    if (member.gender == "") {
      temp = { ...temp, gender: true, error: true };
    }
    if (member.dob == "") {
      temp = { ...temp, dob: true, error: true };
    }
    setError(temp);
    if (temp.error == false) {

      dispatch(editMember(member));
      setEditDob(false);
      setInnerPage(0);
    }
  };

  const Continue = (selected) => {
    if (selected.dob == undefined || selected.dob == "") {
      setEditDob(true);
      setInnerPage(1);
    } else {
      dispatch(updateLoginDetails({ ...loginData, user: { ...loginData.user, dob: selected.dob } }))
      dispatch(
        Store_formData({
          ...appoinment_form,
          firstName:
          selected.relationship == "self"
              ? userData?.user?.profileName
              : selected.memberName,
          relationship: selected?.id ? selected?.id : `rel-${selected.relationship}`,
          gender: selected.gender,
          dob: selected.dob,
          appointmentFor: selected.relationship == "self" ? "Self" : "Loved One",
          selectedMember:selected
        })
      );
      let userID =
        member.relationship == "self" ? userData?.user?.userId : member?.id;
      dispatch(
        fetch_patient_medicalDetails({
          userdata: userData?.user,
          date: appoinment_form,
          userID: userID,
        })
      );
      progressIncrementer();
    }
  };


  let getAgeInMonths = (dob) => {

    let months = moment().diff(moment(dob, 'DD/MMM/YYYY'), "months")
    let days = moment().diff(moment(dob, 'DD/MMM/YYYY'), "days")

    let result = `${months} months)`

    if (months <= 0) {
      result = `${days} days)`

    }
    else {

      result = `${months} months ${moment(new Date()).date()} days)`

    }





    return result

  }

  let getAgeInYears = (dob) => {



    let result = moment()
      .diff(moment(dob, 'DD/MMM/YYYY'), "years")
      ?.toString()


    return `${result} yrs)`

  }

  let handleSelectMember = (e,member) => {

    e.stopPropagation()
    console.log("Setting redux********************",member);
    setMember(member)

    Continue(member)

  }


  return innerPage == 0 ? (
    <>
      <h3 className={Style.book_appointment_main_heading}>
        Who is this appointment for? <span className="mandatory">*</span>
      </h3>
      <div className={Style.memberList}>
        {memberList &&
          memberList.length > 0 &&
          memberList.map((memer, index) => (

            // member?.memberName == memer.memberName?console.log("Match"):null

            <div
              className={`${Style.book_appointment_person_input} ${(selectedMemberRedux?.memberName == memer.memberName && selectedMemberRedux?.id == memer.id) && Style.active
                }`}
              onClick={()=>{Continue(memer)}}
            >
              <div className={Style.book_appointment_person_img}>
                <img
                  src={Assets.person_icon}
                  className={Style.book_appointment_person_icon_image}
                ></img>
                <img
                  src={Assets.icon_person_blue}
                  className={Style.book_appointment_person_active_icon_image}
                ></img>
              </div>

              <Button
                className={Style.book_appointment_person_input_box}
                onClick={(e) =>{handleSelectMember(e,memer)}}
              >
                {memer.memberName}{" "}
                {(memer.dob && memer.dob != "") &&
                  `(${memer.gender}, ${moment()
                    .diff(moment(memer.dob, 'DD/MMM/YYYY'), "years") <= 0 ?

                    getAgeInMonths(memer.dob)

                    :

                    getAgeInYears(memer.dob)

                  }
                  `}
              </Button>
              <img
                src={Assets.pencil_icon}
                className={Style.book_appointment_pencil_icon_image}
                onClick={(e) => {
                  e.stopPropagation()
                  selectProfile(memer);
                }}
              ></img>
              <img
                src={Assets.blue_edit_icon}
                className={Style.book_appointment_pencil_active_image}
                onClick={(e) => {
                  e.stopPropagation()
                  selectProfile(memer);
                }}
              ></img>
            </div>
          ))}

        <div className={Style.book_appointment_person_input}>
          <div className={Style.book_appointment_person_img}>
            <img
              src={Assets.plus_icon}
              className={Style.book_appointment_person_icon_image}
            ></img>
            <img
              src={Assets.icon_plus_blue}
              className={Style.book_appointment_person_active_icon_image}
            ></img>
          </div>
          <Button
            className={Style.book_appointment_person_input_box}
            onClick={() => {
              setAddMemeber(true);
              setInnerPage(innerPage + 1);
              setEditDob(false);
            }}
          >
            For someone else
          </Button>
          <img
            src={Assets.right_arrow_icon}
            className={Style.book_appointment_pencil_icon_image}
          ></img>
          <img
            src={Assets.icon_arrow_blue}
            className={Style.book_appointment_pencil_active_image}
          ></img>
        </div>
      </div>

      {/* <div className={`${Style.btn_floating} btn_floating`}>
        <Button
          className={Style.book_appointment_continue_button}
          onClick={Continue}
        >
          Continue
        </Button>
      </div> */}
    </>
  ) : !editDob ? (
    <AddMember setMemberMain={setMember} setInnerPage={setInnerPage} innerPage={innerPage} />
  ) : (
    <>
      <h3 className={Style.book_appointment_main_heading}>Age & Gender</h3>
      <AgeGender member={member} setMember={setMember} error={error} />
      <div className={`${Style.btn_floating} btn_floating`}>
        <Button
          className={Style.book_appointment_continue_button}
          onClick={editSubmited}
        >
          Continue
        </Button>
      </div>
    </>
  );
}

export default AppointmentPerson;
