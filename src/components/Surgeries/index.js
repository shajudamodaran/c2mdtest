import React, { useState, useEffect } from "react";
import Style from "./Surgeries.module.scss";
import YesNoButton from "../YesNoButton";
import CustomAccordion from "../CustomAccordion";
import AddMoreContinue from "../AddContinueButtons";
import { useSelector, useDispatch } from "react-redux";
import { Accordion } from "react-bootstrap";
import CustomDropDown from "../Common/CustomDropDown";
import { toast } from "react-toastify";
import Custommodal from "../Layout/Custommodal";
import Assets from "../Layout/Assets";
function Surgeries({
  progressIncrementer,
  appoinment_form,
  Store_formData,
  settingsdata,
}) {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setItem] = useState(
    "Do you really want to delete this surgeries ?"
  );
  const patient_data = useSelector(
    (state) => state.bookAppoinment.patient_data
  );
  const [deleteItems, setDeleteItem] = useState("");
  const [showForm, setForm] = useState(true);
  const DataItem =
    settingsdata[0] && settingsdata[0].SurgeyDetails[0].surgerylist;
  const surgeryDuration =
    settingsdata[0] && settingsdata[0].SurgeyDetails[1].Surgeryduration;
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(
    appoinment_form?.surgeries?.length > 0 ? "Yes" : ""
  );
  const surgeriesFormInit = {
    surgery: "",
    date: "",
    note: "",
  };
  const [surgeriesForm, setSurgeriesForm] = useState(surgeriesFormInit);
  const [surgeries, setsurgeries] = useState(
    appoinment_form.surgeries ? appoinment_form.surgeries : []
  );
  const errorInit = {
    surgery: false,
    date: false,
    note: false,
    error: false,
  };
  const [error, setError] = useState(errorInit);
  useEffect(() => {
    if (surgeries?.length !== 0) {
      setForm(false);
    }
  }, []);
  useEffect(() => {
    if (appoinment_form.surgeries?.length == 0) {
      if (patient_data?.hasOwnProperty("Surgery")) {
        if (Array.isArray(patient_data?.Surgery)) {
          if (patient_data?.Surgery?.length !== 0) {
            setsurgeries(patient_data?.Surgery);
          }
        }
      }
    }
  }, []);
  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (surgeriesForm.surgery == "") {
        errorTemp = { ...errorTemp, surgery: true, error: true };
      }
      if (surgeriesForm.date == "") {
        errorTemp = { ...errorTemp, date: true, error: true };
      }

      setError({ ...errorTemp, error: true });
    }
  }, [surgeriesForm]);

  const Continue = () => {
    let errorTemp = errorInit;
    if (surgeriesForm.surgery == "") {
      errorTemp = { ...errorTemp, surgery: true, error: true };
    }
    if (surgeriesForm.date == "") {
      errorTemp = { ...errorTemp, date: true, error: true };
    }

    setError(errorTemp);

    if (
      !errorTemp.error ||
      (surgeries.length > 0 && errorTemp.surgery && errorTemp.date)
    ) {
      setForm(false);
      setsurgeries(
        surgeriesForm ? [surgeriesForm] : [...surgeries, surgeriesForm]
      );
      if (surgeriesForm.surgery != "") {
        dispatch(
          Store_formData({
            ...appoinment_form,
            surgeries: [...surgeries, surgeriesForm],
          })
        );
      } else {
        dispatch(
          Store_formData({ ...appoinment_form, surgeries: [...surgeries] })
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
      if (surgeriesForm.surgery == "") {
        errorTemp = { ...errorTemp, surgery: true, error: true };
      }
      if (surgeriesForm.date == "") {
        errorTemp = { ...errorTemp, date: true, error: true };
      }

      setError(errorTemp);

      if (!errorTemp.error) {
        setsurgeries([...surgeries, surgeriesForm]);
        setSurgeriesForm(surgeriesFormInit);
      }
    } else {
      setForm(true);
    }
  };
  const onsurgeryChange = (e) => {
    let foundItem = surgeries.some((el) => el.surgery === e);

    if (foundItem) {
      toast.error(`${e}  already added`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      setSurgeriesForm({ ...surgeriesForm, surgery: e });
    }
  };
  const deleteSurgeries = (item, index) => {
    setShowModal(true);
    setDeleteItem(item);
  };
  const onCancel = (item) => {
    let filter1 = surgeries.filter((obj) => {
      return obj.surgery != item?.surgery;
    });
    dispatch(Store_formData({ ...appoinment_form, surgeries: filter1 }));
    setsurgeries(filter1);
    setShowModal(false);
  };
  return (
    <>
      <h3 className={Style.symptoms_main_heading}>
        Have you undergone any recent surgeries?
      </h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        No_btn_Change={No_btn_Change}
        flag={flag}
      />
      {flag === "Yes" && (
        <>
          <Accordion className={Style.medications_accordion_align}>
            {surgeries?.map((sur, index) => {
              return (
                <Accordion.Item key={index} eventKey={index}>
                  <div className={Style.medication_accordion_repeat}>
                    <Accordion.Header>
                      <span className={Style.medication_accordion_main_heading}>
                        {sur.surgery}
                      </span>
                    </Accordion.Header>
                    <img
                      src={Assets.symtomsClose}
                      alt=""
                      onClick={() => deleteSurgeries(sur, index)}
                    />
                  </div>
                  <Accordion.Body>
                    <div className={Style.add_medicine_medicine_details}>
                      <div className="form-group  mb-spce">
                        <label className={Style.add_medicine_label}>
                          Surgeries type
                        </label>
                        <CustomDropDown
                          error={false}
                          DataItem={DataItem}
                          onClick={(e) => {
                            let newSur = [...surgeries];
                            newSur[index].surgery = e;
                            setsurgeries(newSur);
                          }}
                          defaultPlaceH={sur.surgery != ""}
                          selectedData={
                            sur.surgery != "" ? sur.surgery : "Select Surgery"
                          }
                        />
                      </div>
                      <div className="form-group  mb-spce">
                        <label className={Style.add_medicine_label}>
                          Period (When Did You Have It?)
                        </label>
                        <CustomDropDown
                          error={false}
                          DataItem={surgeryDuration}
                          onClick={(e) => {
                            let newSur = [...surgeries];
                            newSur[index].date = e;
                            setsurgeries(newSur);
                          }}
                          defaultPlaceH={sur.date != ""}
                          selectedData={
                            sur.date != "" ? sur.date : "Select Frequency"
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className={Style.add_medicine_label}>
                          Optional Notes
                        </label>
                        <textarea
                          name="medication"
                          className={`${Style.add_medicine_input_field}`}
                          placeholder="Optional Notes"
                          value={sur.note}
                          onChange={(e) => {
                            let newSur = [...surgeries];
                            newSur[index].note = e.target.value;
                            setsurgeries(newSur);
                          }}
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
                  Surgeries {surgeries.length + 1}
                </label>
                <CustomDropDown
                  error={error.surgery}
                  DataItem={DataItem}
                  onClick={(e) => {
                    onsurgeryChange(e);
                  }}
                  defaultPlaceH={surgeriesForm.surgery != ""}
                  selectedData={
                    surgeriesForm.surgery != ""
                      ? surgeriesForm.surgery
                      : "Select Surgery"
                  }
                />
                {error.surgery && (
                  <p className={Style.error}>
                    Select a surgery from the list below that you would like
                    your practitioner to know
                  </p>
                )}
              </div>
              <div className="form-group  mb-spce">
                <label className={Style.add_medicine_label}>
                  Period (When Did You Have It?)
                </label>
                <CustomDropDown
                  error={error.surgery}
                  DataItem={surgeryDuration}
                  onClick={(e) => {
                    setSurgeriesForm({ ...surgeriesForm, date: e });
                  }}
                  defaultPlaceH={surgeriesForm.date != ""}
                  selectedData={
                    surgeriesForm.date != ""
                      ? surgeriesForm.date
                      : "Surgery Occurs in"
                  }
                />
                {error.date && (
                  <p className={Style.error}>
                    It would be appropriate to let the practitioner know when
                    you had this procedure
                  </p>
                )}
              </div>
              <div className="form-group">
                <label className={Style.add_medicine_label}>
                  Optional Notes
                </label>
                <textarea
                  name="medication"
                  className={`${Style.add_medicine_input_field}`}
                  placeholder="Optional Notes"
                  value={surgeriesForm.note}
                  onChange={(e) => {
                    setSurgeriesForm({
                      ...surgeriesForm,
                      note: e.target.value,
                    });
                  }}
                />
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

export default Surgeries;
