import React, { useState, useEffect } from "react";
import Style from "./Symptoms.module.scss";
import YesNoButton from "../YesNoButton";
import AddMoreContinue from "../AddContinueButtons";
import { useSelector, useDispatch } from "react-redux";
import { Accordion, Dropdown } from "react-bootstrap";
import CustomDropDown from "../Common/CustomDropDown";
import { toast } from "react-toastify";
import Assets from "../Layout/Assets";
import Custommodal from "../Layout/Custommodal";
function Symptoms({
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
  const [deleteItems, setDeleteItem] = useState("");
  const [modalItem, setItem] = useState(
    "Do you really want to delete this Symptoms ?"
  );
  const dispatch = useDispatch();
  const [showForm, setForm] = useState(true);
  const DataItem = settingsdata && settingsdata[3].Symptoms[0].Symptomslist;
  const duration = settingsdata[4] && settingsdata[3].Symptoms[1].duration;
  const status = settingsdata[4] && settingsdata[3].Symptoms[2].status;
  const [flag, setFlag] = useState(
    appoinment_form.symptoms?.length > 0 ? "Yes" : ""
  );
  const symptomsInit = {
    symptoms: "",
    sincePeriod: "",
    numberofdays: "",
    status: "",
  };
  const [symptomsForm, setSymptomsForm] = useState(symptomsInit);
  const [symptoms, setSymptoms] = useState(appoinment_form.symptoms);

  let [otherSymptom, setOtherSymptom] = useState(null)


  const errorInit = {
    symptoms: false,
    sincePeriod: false,
    numberofdays: false,
    status: false,
    error: false,
  };
  const [error, setError] = useState(errorInit);
  useEffect(() => {
    if (symptoms?.length !== 0) {
      setForm(false);
    }
  }, []);
  useEffect(() => {
    if (appoinment_form.symptoms?.length == 0) {
      if (patient_data?.hasOwnProperty("Symptoms")) {
        if (patient_data?.Symptoms?.length !== 0) {
          setSymptoms(patient_data?.Symptoms);
        }
      }
    }
  }, []);
  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (symptomsForm.symptoms == "") {
        errorTemp = { ...errorTemp, symptoms: true, error: true };
      }
      if (symptomsForm.numberofdays == "") {
        errorTemp = { ...errorTemp, numberofdays: true, error: true };
      }
      if (symptomsForm.status == "") {
        errorTemp = { ...errorTemp, status: true, error: true };
      }
      if (symptomsForm.sincePeriod == "") {
        errorTemp = { ...errorTemp, sincePeriod: true, sincePeriod: true };
      }

      setError({ ...errorTemp, error: true });
    }
  }, [symptomsForm]);

  const Continue = () => {
    // let itemData = Object.values(symptons.symptomList);
    // dispatch(Store_formData({ ...appoinment_form, symptoms: itemData }));
    // progressIncrementer();
    let errorTemp = errorInit;
    if (symptomsForm.symptoms == "") {
      errorTemp = { ...errorTemp, symptoms: true, error: true };
    }
    if (symptomsForm.numberofdays == "") {
      errorTemp = { ...errorTemp, numberofdays: true, error: true };
    }
    if (symptomsForm.status == "") {
      errorTemp = { ...errorTemp, status: true, error: true };
    }
    if (symptomsForm.sincePeriod == "") {
      errorTemp = { ...errorTemp, sincePeriod: true, error: true };
    }
    setError(errorTemp);

    if (!errorTemp.error || (symptoms.length > 0 && (errorTemp.symptoms && errorTemp.numberofdays && errorTemp.status && errorTemp.sincePeriod))) {
      setForm(false);
      setSymptoms(symptomsForm ? [symptomsForm] : [...symptoms, symptomsForm]);
      if (symptomsForm.symptoms != "") {
        dispatch(
          Store_formData({
            ...appoinment_form,
            symptoms: [...symptoms, symptomsForm],
          })
        );
      } else {
        dispatch(
          Store_formData({ ...appoinment_form, symptoms: [...symptoms] })
        );
      }
      progressIncrementer();
    }
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
      if (symptomsForm.symptoms == "") {
        errorTemp = { ...errorTemp, symptoms: true, error: true };
      }
      if (symptomsForm.numberofdays == "") {
        errorTemp = { ...errorTemp, numberofdays: true, error: true };
      }
      if (symptomsForm.status == "") {
        errorTemp = { ...errorTemp, status: true, error: true };
      }
      if (symptomsForm.sincePeriod == "") {
        errorTemp = { ...errorTemp, sincePeriod: true, sincePeriod: true };
      }

      setError(errorTemp);

      if (!errorTemp.error) {
        setSymptoms([...symptoms, symptomsForm]);
        setSymptomsForm(symptomsInit);
      }
    } else {
      setForm(true);
    }
  };
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setSymptomsForm({
        ...symptomsForm,
        sincePeriod: e.target.value,
      });
    }
  };

  const sinceOnChange = (e, index) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      let newSur = [...symptoms];
      newSur[index].sincePeriod = e.target.value;
      setSymptoms(newSur);
    }
  };



  const symptomsOnChange = (e) => {
    let foundItem = symptoms.some((el) => el.symptoms === e);

    if (foundItem) {
      toast.error(`${e}  Already Added`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setSymptomsForm({ ...symptomsForm, symptoms: e });
    }
  };

  const Other_symptomsOnChange = (e) => {
    let foundItem = symptoms.some((el) => el.symptoms === e);

    if (foundItem) {
      toast.error(`${e}  Already Added`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setSymptomsForm({ ...symptomsForm, symptoms: e });
    }
  };


  const deleteSymptoms = (item, index) => {
    setShowModal(true);
    setDeleteItem(item);
  };
  const onCancel = (item) => {
    let filter1 = symptoms.filter((obj) => {
      return obj.symptoms != item?.symptoms;
    });
    dispatch(
      Store_formData({
        ...appoinment_form,
        symptoms: filter1,
      })
    );
    setSymptoms(filter1);
    setShowModal(false);
  };
  return (
    <>
      <h3 className={Style.symptoms_main_heading}>
        Would you like to provide any symptoms?
      </h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        No_btn_Change={No_btn_Change}
        flag={flag}
      />
      {flag === "Yes" && (
        <>
          <Accordion className={Style.medications_accordion_align}>
            {symptoms?.map((sym, index) => {
              return (
                <Accordion.Item key={index} eventKey={index}>

                  <div className={Style.medication_accordion_repeat}>
                    <Accordion.Header>
                      <span className={Style.medication_accordion_main_heading}>
                        {sym.symptoms}
                      </span>
                    </Accordion.Header>
                    <img
                      src={Assets.symtomsClose}
                      alt=""
                      onClick={() => deleteSymptoms(sym, index)}
                    />
                  </div>
                  <Accordion.Body>
                    <div className={Style.add_medicine_medicine_details}>


                      <div className="form-group mb-spce">
                        <label className={Style.add_medicine_label}>
                          Select Symptoms
                        </label>
                        <CustomDropDown
                          error={false}
                          DataItem={DataItem}
                          onClick={(e) => {
                            let newSur = [...symptoms];
                            newSur[index].symptoms = e;
                            setSymptoms(newSur);
                          }}
                          defaultPlaceH={sym.symptoms != ""}
                          selectedData={
                            sym.symptoms != ""
                              ? sym.symptoms
                              : "Select Symptoms"
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
                          value={sym.sincePeriod}
                          onChange={(e) => {
                            sinceOnChange(e, index);
                          }}
                        />
                      </div>
                      <div className="form-group mb-spce">
                        <label className={Style.add_medicine_label}>
                          Since Period
                        </label>
                        <CustomDropDown
                          error={false}
                          DataItem={duration}
                          onClick={(e) => {
                            let newSur = [...symptoms];
                            newSur[index].numberofdays = e;
                            setSymptoms(newSur);
                          }}
                          defaultPlaceH={sym.numberofdays != ""}
                          selectedData={
                            sym.numberofdays != ""
                              ? sym.numberofdays
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
                            let newSur = [...symptoms];
                            newSur[index].status = e;
                            setSymptoms(newSur);
                          }}
                          defaultPlaceH={sym.status != ""}
                          selectedData={
                            sym.status != "" ? sym.status : "Status"
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
              <div className="form-group mb-spce">
                <label className={Style.add_medicine_label}>
                  Symptoms {symptoms.length + 1}
                </label>

                {
                  console.log(DataItem.push("Other"))
                }
                <CustomDropDown
                  error={error.symptoms}
                  DataItem={DataItem}
                  onClick={(e) => symptomsOnChange(e)}
                  defaultPlaceH={symptomsForm.symptoms != ""}
                  selectedData={
                    symptomsForm.symptoms != ""
                      ? symptomsForm.symptoms
                      : "Select Symptoms"
                  }
                />

                {error.symptoms && (
                  <p className={Style.error}>
                    Select a symptom you would like the practitioner to know
                  </p>
                )}
              </div>



              {
                symptomsForm?.symptoms == "Other" ?

                  <div className="form-group">
                    <label className={Style.add_medicine_label}>
                      Other symptom
                    </label>
                    <input
                      type="text"
                      name="since"
                      className={`${Style.add_medicine_input_field}`}
                      placeholder="Other symptom"
                      onBlur={(e) => { symptomsOnChange(e.target.value) }}

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
                      ? Style.add_medicine_input_field_Error
                      : ""
                      }`}
                    placeholder="Since"
                    value={symptomsForm.sincePeriod}
                    onChange={handleChange}
                  />
                  {error.sincePeriod && (
                    <p className={Style.error}>Since is required </p>
                  )}
                </div>
                <div className={Style.add_medicine_align_col2}>
                  <label className={Style.add_medicine_label}>&nbsp;</label>
                  <CustomDropDown
                   
                    error={error.numberofdays}
                    DataItem={duration}
                    onClick={(e) => {
                      setSymptomsForm({ ...symptomsForm, numberofdays: e });
                    }}
                    defaultPlaceH={symptomsForm.numberofdays != ""}
                    selectedData={
                      symptomsForm.numberofdays != ""
                        ? symptomsForm.numberofdays
                        : "Since Period"
                    }
                  />
                  {error.numberofdays && (
                    <p className={Style.error}>
                      It would be appropriate to let the practitioner know how
                      long have you felt this symptom
                    </p>
                  )}
                </div>
              </div>

              <div className="form-group  mb-spce">
                <label className={Style.add_medicine_label}>Status</label>
                <CustomDropDown
                  error={error.status}
                  DataItem={status}
                  onClick={(e) => {
                    setSymptomsForm({ ...symptomsForm, status: e });
                  }}
                  defaultPlaceH={symptomsForm.status != ""}
                  selectedData={
                    symptomsForm.status != "" ? symptomsForm.status : "Status"
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

export default Symptoms;
