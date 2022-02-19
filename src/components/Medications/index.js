import React, { useState, UseState } from "react";
import Style from "./Medications.module.scss";
import YesNoButton from "../YesNoButton";
import AddMoreContinue from "../AddContinueButtons";
import { Accordion } from "react-bootstrap";
import { useDispatch } from "react-redux";
import AddMedicine from "../AddMedicine";
function Medications({
  progressIncrementer,
  appoinment_form,
  Store_formData,
  settingsdata,
  setMedicine,
}) {
  const dispatch = useDispatch();
  const [medications, setMedications] = useState({
    flag: "",
    medications: [],
  });

  const yes_btn_Change = () => {
    setMedicine(true);
    setMedications({ ...medications, flag: "Yes" });
  };
  const No_btn_Change = () => {
    setMedications({ ...medications, flag: "No" });
    progressIncrementer();
  };
  const Continue = () => {
    dispatch(
      Store_formData({
        ...appoinment_form,
        medications: medications.Items,
      })
    );
    progressIncrementer();
  };
  const AddMore = () => {
    // let errorTemp = errorInit;
    // if(surgeriesForm.surgery==""){
    //   errorTemp = {...errorTemp,surgery:true,error:true}
    // }
    // if(surgeriesForm.date==""){
    //   errorTemp = {...errorTemp,date:true,error:true}
    // }
    // setError(errorTemp);
    // if(!errorTemp.error){
    // setsurgeries([...surgeries,surgeriesForm])
    // setSurgeriesForm(surgeriesFormInit)
    // }
  };

  return (
    <>
      <h3 className={Style.medications_main_heading}>
        Do you take any medications?
      </h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        No_btn_Change={No_btn_Change}
        flag={medications.flag}
      />
      {medications.flag === "Yes" && (
        <>
          <Accordion
            defaultActiveKey="0"
            className={Style.medications_accordion_align}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className={Style.medication_accordion_main_heading}>
                  Medicine name
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <p className={Style.medications_body_para}>Medicine Name</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <AddMoreContinue
            progressIncrementer={progressIncrementer}
            Continue={Continue}
            AddMore={AddMore}
          />
        </>
      )}
    </>
  );
}

export default Medications;
