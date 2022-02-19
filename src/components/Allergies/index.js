import React, { useState, useEffect } from "react";
import Style from "./Allergies.module.scss";
import YesNoButton from "../YesNoButton";
import PeriodAccordion from "../PeriodAccordion";
import AddMoreContinue from "../AddContinueButtons";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import CustomDropDown from "../Common/CustomDropDown";
import Custommodal from "../Layout/Custommodal";
import Assets from "../Layout/Assets";
function Allergies({
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
    "Do you really want to delete this Allergy ?"
  );
  const [deleteItems, setDeleteItem] = useState("");
  const dispatch = useDispatch();
  const [showForm, setForm] = useState(true);
  let allergiesStatus = settingsdata && settingsdata[2].Allergies[0].Status;

  const [isAllergies, setIsAllergies] = useState(
    appoinment_form.allergies?.length > 0 ? "Yes" : ""
  );
  const [allergies, setAllergies] = useState(appoinment_form.allergies);
  const allergiesFormInit = {
    allergen: "",
    reaction: "",
    status: "",
  };
  const [allergiesForm, setAllergiesForm] = useState(allergiesFormInit);

  const errorInit = {
    allergen: false,
    reaction: false,
    status: false,
    error: false,
  };
  const [error, setError] = useState(errorInit);
  useEffect(() => {
    if (allergies?.length !== 0) {
      setForm(false);
    }
  }, []);
  useEffect(() => {
    if (appoinment_form.allergies?.length == 0) {
      if (patient_data?.hasOwnProperty("allergies")) {
        if (Array.isArray(patient_data?.allergies)) {
          if (patient_data?.allergies?.length !== 0) {
            setAllergies(patient_data?.allergies);
          }
        }
      }
    }
  }, []);
  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (allergiesForm.allergen == "") {
        errorTemp = { ...errorTemp, allergen: true, error: true };
      }
      if (allergiesForm.reaction == "") {
        errorTemp = { ...errorTemp, reaction: true, error: true };
      }
      if (allergiesForm.status == "") {
        errorTemp = { ...errorTemp, status: true, error: true };
      }
      setError({ ...errorTemp, error: true });
    }
  }, [allergiesForm]);

  // const Continue = () => {
  //   let itemData = Object.values(allergies.Items);
  // };

  const yes_btn_Change = () => {
    setIsAllergies("Yes");
  };

  const No_btn_Change = () => {
    setIsAllergies("No");
    progressIncrementer();
  };

  const Continue = () => {
    let errorTemp = errorInit;
    if (allergiesForm.allergen == "") {
      errorTemp = { ...errorTemp, allergen: true, error: true };
    }
    if (allergiesForm.reaction == "") {
      errorTemp = { ...errorTemp, reaction: true, error: true };
    }
    if (allergiesForm.status == "") {
      errorTemp = { ...errorTemp, status: true, error: true };
    }
    setError(errorTemp);

    if (!errorTemp.error || (allergies.length > 0&&(errorTemp.allergen&&errorTemp.reaction&&errorTemp.status))) {
      setForm(false);
      setAllergies(
        allergiesForm ? [allergiesForm] : [...allergies, allergiesForm]
      );
      if (allergiesForm.allergen != "") {
        dispatch(
          Store_formData({
            ...appoinment_form,
            allergies: [...allergies, allergiesForm],
          })
        );
      } else {
        dispatch(
          Store_formData({ ...appoinment_form, allergies: [...allergies] })
        );
      }
      // dispatch(Store_formData({ ...appoinment_form, allergies: allergies?[...allergies,allergiesForm]:[allergiesForm] }));
      progressIncrementer();
    }
  };

  const AddMore = () => {
    let errorTemp = errorInit;
    if (showForm) {
      if (allergiesForm.allergen == "") {
        errorTemp = { ...errorTemp, allergen: true, error: true };
      }
      if (allergiesForm.reaction == "") {
        errorTemp = { ...errorTemp, reaction: true, error: true };
      }
      if (allergiesForm.status == "") {
        errorTemp = { ...errorTemp, status: true, error: true };
      }
      setError(errorTemp);
      if (!errorTemp.error) {
        setAllergies([...allergies, allergiesForm]);
        setAllergiesForm(allergiesFormInit);
      }
    } else {
      setForm(true);
    }
  };
  const deleteAllergies = (item, index) => {
    setShowModal(true);
    setDeleteItem(item);
  };
  const onCancel = (item) => {
    let filter1 = allergies.filter((obj) => {
      return obj.allergen != item?.allergen;
    });
    setAllergies(filter1);
    dispatch(
      Store_formData({
        ...appoinment_form,
        allergies: filter1,
      })
    );
    setShowModal(false);
  };
  return (
    <>
      <h3 className={Style.symptoms_main_heading}>
        Are you aware of any known allergies?
      </h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        No_btn_Change={No_btn_Change}
        flag={isAllergies}
      />
      {isAllergies == "Yes" && (
        <>
          <Accordion className={Style.period_accordion_accordion_align}>
            {allergies?.map((aller, index) => {
              return (
                <Accordion.Item key={index} eventKey={index}>
                  <div className={Style.medication_accordion_repeat}>
                    <Accordion.Header>
                      <span className={Style.period_accordion_main_heading}>
                        {aller.allergen}
                      </span>
                    </Accordion.Header>
                    <img
                      src={Assets.symtomsClose}
                      alt=""
                      onClick={() => deleteAllergies(aller, index)}
                    />
                  </div>
                  <Accordion.Body>
                    <div className="form-group">
                      <label className={Style.period_accordion_label}>
                        Allergy Name
                      </label>
                      <input
                        type="text"
                        name="allergen"
                        className={`${Style.period_accordion_input_field}`}
                        placeholder={`Allergy Name`}
                        value={aller.allergen}
                        onChange={(e) => {
                          let newAllergies = [...allergies];
                          newAllergies[index].allergen = e.target.value;
                          setAllergies(newAllergies);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label className={Style.period_accordion_label}>
                        Reactions
                      </label>
                      <input
                        type="text"
                        name="Reaction"
                        className={`${Style.period_accordion_input_field}`}
                        placeholder={`Enter Reactions`}
                        value={aller.reaction}
                        onChange={(e) => {
                          let newAllergies = [...allergies];
                          newAllergies[index].reaction = e.target.value;
                          setAllergies(newAllergies);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label className={Style.period_accordion_label}>
                        Current Status
                      </label>
                      <CustomDropDown
                        error={false}
                        DataItem={allergiesStatus}
                        onClick={(e) => {
                          let newAllergies = [...allergies];
                          newAllergies[index].status = e;
                          setAllergies(newAllergies);
                        }}
                        defaultPlaceH={aller.status != ""}
                        selectedData={
                          aller.status != "" ? aller.status : "Current Status"
                        }
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
          {showForm && (
            <div className={Style.add_medicine_medicine_details}>
              <div className="form-group">
                <label className={Style.add_medicine_label}>Allergy Name</label>
                <input
                  type="text"
                  name="allergen"
                  className={`${Style.add_medicine_input_field} ${
                    error.allergen && Style.inputError
                  }`}
                  placeholder={`Allergy Name`}
                  value={allergiesForm.allergen}
                  onChange={(e) => {
                    setAllergiesForm({
                      ...allergiesForm,
                      allergen: e.target.value,
                    });
                  }}
                />
                {error.allergen && (
                  <p className={Style.error}>Enter the name of the allergent</p>
                )}
              </div>
              <div className="form-group">
                <label className={Style.add_medicine_label}>Reactions</label>
                <input
                  type="text"
                  name="Reaction"
                  className={`${Style.add_medicine_input_field} ${
                    error.reaction && Style.inputError
                  }`}
                  placeholder={`Enter Reactions`}
                  value={allergiesForm.reaction}
                  // onChange={(e) => handleChange(e, title)}
                  onChange={(e) => {
                    setAllergiesForm({
                      ...allergiesForm,
                      reaction: e.target.value,
                    });
                  }}
                />
                {error.reaction && (
                  <p className={Style.error}>
                    Let us know what kind of reaction does the allergent cause
                  </p>
                )}
              </div>
              <div className="form-group  mb-spce">
                <label className={Style.add_medicine_label}>
                  Current Status
                </label>
                <CustomDropDown
                  error={error.status}
                  DataItem={allergiesStatus}
                  onClick={(e) => {
                    setAllergiesForm({ ...allergiesForm, status: e });
                  }}
                  defaultPlaceH={allergiesForm.status != ""}
                  selectedData={
                    allergiesForm.status != ""
                      ? allergiesForm.status
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
            AddMore={() => AddMore()}
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

export default Allergies;
