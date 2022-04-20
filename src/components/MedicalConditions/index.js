import React, { useState, useEffect } from "react";
import Style from "./MedicalConditions.module.scss";
import YesNoButton from "../YesNoButton";
import CustomAccordion from "../CustomAccordion";
import AddMoreContinue from "../AddContinueButtons";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import CustomDropDown from "../Common/CustomDropDown";
import { toast } from "react-toastify";
import Custommodal from "../Layout/Custommodal";
import Assets from "../Layout/Assets";
function MedicalConditions({
  progressIncrementer,
  appoinment_form,
  Store_formData,
  settingsdata,
}) {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const patient_data = useSelector(
    (state) => state.bookAppoinment.patient_data
  );
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setItem] = useState(
    "Do you really want to delete this medical conditions ?"
  );
  const [deleteItems, setDeleteItem] = useState("");
  // const dataItem = settingsdata[4].Medicalcondition[0].Medicalconditionlist;
  const [showForm, setForm] = useState(true);
  const DataItem = settingsdata[4]?.Medicalcondition[0]?.Medicalconditionlist;
  const duration =
    settingsdata[4] && settingsdata[4].Medicalcondition[1].duration;
  const status = settingsdata[4] && settingsdata[3].Symptoms[2].status;
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(
    appoinment_form.medicalConditions?.length > 0 ? "Yes" : ""
  );
  const medConditionInit = {
    medicalcondition: "",
    sincePeriod: "",
    numberofdays: "",
    status: "",
  };
  const [medConditionForm, setMedConditionForm] = useState(medConditionInit);
  const [medCondition, setmedCondition] = useState(
    appoinment_form.medicalConditions
  );
  const errorInit = {
    medicalcondition: false,
    numberofdays: false,
    sincePeriod: false,
    status: false,
    error: false,
  };
  const [error, setError] = useState(errorInit);
  useEffect(() => {
    if (medCondition?.length !== 0) {
      setForm(false);
    }
  }, []);

  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (medConditionForm.medicalcondition == "") {
        errorTemp = { ...errorTemp, medicalcondition: true, error: true };
      }
      if (medConditionForm.numberofdays == "") {
        errorTemp = { ...errorTemp, numberofdays: true, error: true };
      }
      if (medConditionForm.sincePeriod == "") {
        errorTemp = { ...errorTemp, sincePeriod: true, error: true };
      }
      if (medConditionForm.status == "") {
        errorTemp = { ...errorTemp, status: true, error: true };
      }

      setError({ ...errorTemp, error: true });
    }
  }, [medConditionForm]);

  const Continue = () => {
    let errorTemp = errorInit;
    if (medConditionForm.medicalcondition == "") {
      errorTemp = { ...errorTemp, medicalcondition: true, error: true };
    }
    if (medConditionForm.numberofdays == "") {
      errorTemp = { ...errorTemp, numberofdays: true, error: true };
    }
    if (medConditionForm.sincePeriod == "") {
      errorTemp = { ...errorTemp, sincePeriod: true, error: true };
    }
    if (medConditionForm.status == "") {
      errorTemp = { ...errorTemp, status: true, error: true };
    }
    setError(errorTemp);

    if (!errorTemp.error || (medCondition.length > 0 && (errorTemp.medicalcondition && errorTemp.numberofdays && errorTemp.status && errorTemp.sincePeriod))) {
      setForm(false);
      setmedCondition(
        medConditionForm
          ? [medConditionForm]
          : [...medCondition, medConditionForm]
      );
      if (medConditionForm.medicalcondition != "") {
        dispatch(
          Store_formData({
            ...appoinment_form,
            medicalConditions: [...medCondition, medConditionForm],
          })
        );
      } else {
        dispatch(
          Store_formData({
            ...appoinment_form,
            medicalConditions: [...medCondition],
          })
        );
      }
      progressIncrementer();
    }

    // let itemData = Object.values(medicalCondition.Items);

    // let temp =  itemData.map(element => {

    //   return {
    //     medicalcondition: element.symptoms,
    //     numberofdays: `${element.days ? element.days : 0} ${element.numberofdays ? element.numberofdays : 'days'}`
    //   }

    // });

    // dispatch(
    //   Store_formData({
    //     ...appoinment_form,
    //     medicalConditions: temp,
    //   })
    // );
    // progressIncrementer();
  };

  const yes_btn_Change = () => {
    setFlag("Yes");
  };

  const No_btn_Change = () => {
    setFlag("No");
    progressIncrementer();
  };

  const AddMore = () => {
    let errorTemp = errorInit;
    if (showForm) {
      if (medConditionForm.medicalcondition == "") {
        errorTemp = { ...errorTemp, medicalcondition: true, error: true };
      }
      if (medConditionForm.numberofdays == "") {
        errorTemp = { ...errorTemp, numberofdays: true, error: true };
      }
      if (medConditionForm.sincePeriod == "") {
        errorTemp = { ...errorTemp, sincePeriod: true, error: true };
      }
      if (medConditionForm.status == "") {
        errorTemp = { ...errorTemp, status: true, error: true };
      }

      setError(errorTemp);

      if (!errorTemp.error) {
        setmedCondition([...medCondition, medConditionForm]);
        setMedConditionForm(medConditionInit);
      }
    } else {
      setForm(true);
    }
  };
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setMedConditionForm({
        ...medConditionForm,
        sincePeriod: e.target.value,
      });
    }
  };
  const medicalChange = (e, index) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      let newSur = [...medCondition];
      newSur[index].sincePeriod = e.target.value;
      setmedCondition(newSur);
    }
  };
  const onMedicalCondtionChange1 = (e, index) => {
    let newSur = [...medCondition];
    newSur[index].medicalcondition = e;
    setmedCondition(newSur);
  };
  const onMedicalCondtionChange2 = (e, index) => {
    let foundItem = medCondition.some((el) => el.medicalcondition === e);

    if (foundItem) {
      toast.error(`${e}  already added`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setMedConditionForm({
        ...medConditionForm,
        medicalcondition: e,
      });
    }
  };
  const deleteMedication = (item, index) => {
    setShowModal(true);
    setDeleteItem(item);
  };
  const onCancel = (item) => {
    let filter1 = medCondition.filter((obj) => {
      return obj.medicalcondition != item?.medicalcondition;
    });
    dispatch(
      Store_formData({
        ...appoinment_form,
        medicalConditions: filter1,
      })
    );
    setmedCondition(filter1);
    setShowModal(false);
  };
  return (
    <>
      <h3 className={Style.symptoms_main_heading}>
        Do you have any medical conditions?
      </h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        No_btn_Change={No_btn_Change}
        flag={flag}
      />
      {flag === "Yes" && (
        <>
          <Accordion className={Style.medications_accordion_align}>
            {medCondition?.map((sur, index) => {
              return (
                <Accordion.Item key={index} eventKey={index}>
                  <div className={Style.medication_accordion_repeat}>
                    <Accordion.Header>
                      <span className={Style.medication_accordion_main_heading}>
                        {sur.medicalcondition}
                      </span>
                    </Accordion.Header>
                    <img
                      src={Assets.symtomsClose}
                      alt=""
                      onClick={() => deleteMedication(sur, index)}
                    />
                  </div>
                  <Accordion.Body>
                    <div className={Style.add_medicine_medicine_details}>
                      <div className="form-group  mb-spce">
                        <label className={Style.add_medicine_label}>
                          Select Medical Conditions
                        </label>



                        <CustomDropDown
                          error={false}
                          DataItem={DataItem}
                          onClick={(e) => {
                            onMedicalCondtionChange1(e, index);
                          }}
                          defaultPlaceH={sur.medicalcondition != ""}
                          selectedData={
                            sur.medicalcondition != ""
                              ? sur.medicalcondition
                              : "Select Medical Conditions"
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className={Style.add_medicine_label}>
                          Since
                        </label>
                        <input
                          type="text"
                          name="since"
                          className={`${Style.add_medicine_input_field}`}
                          placeholder="Since"
                          value={sur.sincePeriod}
                          onChange={(e) => {
                            medicalChange(e, index);
                          }}
                        />
                      </div>
                      <div className="form-group  mb-spce">
                        <label className={Style.add_medicine_label}>
                          Since Period
                        </label>
                        <CustomDropDown
                          error={false}
                          DataItem={duration}
                          onClick={(e) => {
                            let newSur = [...medCondition];
                            newSur[index].numberofdays = e;
                            setmedCondition(newSur);
                          }}
                          defaultPlaceH={sur.numberofdays != ""}
                          selectedData={
                            sur.numberofdays != ""
                              ? sur.numberofdays
                              : "Since Period"
                          }
                        />
                      </div>

                      <div className="form-group">
                        <label className={Style.add_medicine_label}>
                          Status
                        </label>
                        <CustomDropDown
                          error={false}
                          DataItem={status}
                          onClick={(e) => {
                            let newSur = [...medCondition];
                            newSur[index].status = e;
                            setmedCondition(newSur);
                          }}
                          defaultPlaceH={sur.status != ""}
                          selectedData={
                            sur.status != "" ? sur.status : "Status"
                          }
                        />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
          {showForm && (
            <div className={Style.add_medicine_medicine_details}>
              <div className="form-group  mb-spce">
                <label className={Style.add_medicine_label}>
                  Medical Conditions {medCondition.length + 1}
                </label>

                {
                  console.log(DataItem.push("Other"))
                }

                <CustomDropDown
                  error={error.medicalcondition}
                  DataItem={DataItem}
                  onClick={(e) => {
                    onMedicalCondtionChange2(e);
                  }}
                  defaultPlaceH={medConditionForm.medicalcondition != ""}
                  selectedData={
                    medConditionForm.medicalcondition != ""
                      ? medConditionForm.medicalcondition
                      : "Select Medical Conditions"
                  }
                />
                {error.medicalcondition && (
                  <p className={Style.error}>
                    Select a medical condition you would like the practitioner
                    to know
                  </p>
                )}
              </div>

              {
                medConditionForm?.medicalcondition == "Other" ?

                  <div className="form-group">
                    <label className={Style.add_medicine_label}>
                      Other medical condition
                    </label>
                    <input
                      type="text"
                      name="since"
                      className={`${Style.add_medicine_input_field}`}
                      placeholder="Other medical condition"
                      onBlur={(e) => { onMedicalCondtionChange2(e.target.value) }}

                    // value={sym.sincePeriod}
                    // onChange={(e) => {
                    //   sinceOnChange(e, index);
                    // }}
                    />
                  </div> : null

              }

              <div className={Style.add_medicine_align_contents}>

                <div className={Style.add_medicine_align_col1}>
                  <label className={Style.add_medicine_label}>Since</label>
                  <input
                    type="text"
                    name="since"
                    error={error.sincePeriod}
                    className={`${Style.add_medicine_input_field} ${error.sincePeriod
                      ? Style.add_medicine_input_field_error
                      : ""
                      }`}
                    placeholder="Since"
                    value={medConditionForm.sincePeriod}
                    onChange={handleChange}
                  />
                  {error.sincePeriod && (
                    <p className={Style.error}>Since is required</p>
                  )}
                </div>

                <div className={Style.add_medicine_align_col2}>
                <label className={Style.add_medicine_label}>&nbsp;</label>
                <CustomDropDown
                  error={error.numberofdays}
                  DataItem={duration}
                  onClick={(e) => {
                    setMedConditionForm({
                      ...medConditionForm,
                      numberofdays: e,
                    });
                  }}
                  defaultPlaceH={medConditionForm.numberofdays != ""}
                  selectedData={
                    medConditionForm.numberofdays != ""
                      ? medConditionForm.numberofdays
                      : "Since Period"
                  }
                />
                {error.numberofdays && (
                  <p className={Style.error}>
                    It would be appropriate to let the practitioner know how
                    long have you had this medical condition
                  </p>
                )}
              </div>

              </div>


            

              <div className="form-group  mb-spce">
                <label className={Style.add_medicine_label}>Current Status</label>
                <CustomDropDown
                  error={error.status}
                  DataItem={status}
                  onClick={(e) => {
                    setMedConditionForm({ ...medConditionForm, status: e });
                  }}
                  defaultPlaceH={medConditionForm.status != ""}
                  selectedData={
                    medConditionForm.status != ""
                      ? medConditionForm.status
                      : "Current Status"
                  }
                />
                {error.status && (
                  <p className={Style.error}>Status is required</p>
                )}
              </div>
            </div>
          )}
          <AddMoreContinue
            progressIncrementer={progressIncrementer}
            Continue={Continue}
            AddMore={AddMore}
          />
          <Custommodal
            showModal={showModal}
            setShowModal={setShowModal}
            onCancel={onCancel}
            deleteItems={deleteItems}
            modalItem={modalItem}
          />
        </>
      )}
    </>
  );
}

export default MedicalConditions;
