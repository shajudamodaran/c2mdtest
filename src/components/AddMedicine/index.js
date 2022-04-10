import React, { useState, useEffect } from "react";
import Style from "./AddMedicine.module.scss";
import YesNoButton from "../YesNoButton";
import PeriodAccordion from "../PeriodAccordion";
import AddMoreContinue from "../AddContinueButtons";
import { useDispatch, useSelector } from "react-redux";
import { Accordion } from "react-bootstrap";
import CustomDropDown from "../Common/CustomDropDown";
import Custommodal from "../Layout/Custommodal";
import Assets from "../Layout/Assets";
function AddMedicine({
  progressIncrementer,
  settingsdata,
  appoinment_form,
  Store_formData,
}) {
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setItem] = useState(
    "Do you really want to delete this medicine ?"
  );
  const patient_data = useSelector(
    (state) => state.bookAppoinment.patient_data
  );
  const [deleteItems, setDeleteItem] = useState("");
  const [showForm, setForm] = useState(true);
  const dispatch = useDispatch();

  let medicationData = []
  medicationData = settingsdata[1] && settingsdata[1]?.Medication;

  console.log(medicationData);

  const feq = medicationData?[0].Frequency:null;
  const status = medicationData?[3].Status:null;
  const unit = medicationData?[2].Unit:null;

  const [isMedication, setIsMedication] = useState(
    appoinment_form.medications?.length > 0 ? "Yes" : ""
  );
  const [medicine, setMedicine] = useState(appoinment_form.medications);
  const medicineFormInit = {
    medication: "",
    quantity: "",
    measurement: "",
    frequency: "",
    status: "",
  };
  const [medicineForm, setMedicineForm] = useState(medicineFormInit);

  const errorInit = {
    medication: false,
    quantity: false,
    measurement: false,
    frequency: false,
    error: false,
  };
  const [error, setError] = useState(errorInit);
  useEffect(() => {
    if (medicine?.length !== 0) {
      setForm(false);
    }
  }, []);
  useEffect(() => {
    if (appoinment_form.medications == 0) {
      if (patient_data?.hasOwnProperty("medications")) {
        if (Array.isArray(patient_data?.medications)) {
          if (patient_data?.medications?.length !== 0) {
            setMedicine(patient_data?.medications);
          }
        }
      }
    }
  }, []);
  useEffect(() => {
    if (error.error) {
      let errorTemp = errorInit;
      if (medicineForm.medication == "") {
        errorTemp = { ...errorTemp, medication: true, error: true };
      }
      if (medicineForm.quantity == "") {
        errorTemp = { ...errorTemp, quantity: true, error: true };
      }
      if (medicineForm.measurement == "") {
        errorTemp = { ...errorTemp, measurement: true, error: true };
      }
      if (medicineForm.frequency == "") {
        errorTemp = { ...errorTemp, frequency: true, error: true };
      }
      if (medicineForm.status == "") {
        errorTemp = { ...errorTemp, status: true, error: true };
      }
      setError({ ...errorTemp, error: true });
    }
  }, [medicineForm]);

  const Continue = () => {
    let errorTemp = errorInit;
    if (medicineForm.medication == "") {
      errorTemp = { ...errorTemp, medication: true, error: true };
    }
    if (medicineForm.quantity == "") {
      errorTemp = { ...errorTemp, quantity: true, error: true };
    }
    if (medicineForm.measurement == "") {
      errorTemp = { ...errorTemp, measurement: true, error: true };
    }
    if (medicineForm.frequency == "") {
      errorTemp = { ...errorTemp, frequency: true, error: true };
    }
    if (medicineForm.status == "") {
      errorTemp = { ...errorTemp, status: true, error: true };
    }
    setError(errorTemp);

    if (!errorTemp.error || (medicine.length > 0 && (errorTemp.medication && errorTemp.quantity && errorTemp.measurement && errorTemp.frequency && errorTemp.status))) {
      setForm(false);
      // setMedicine(medicineForm?[medicineForm]:[...medicine,medicineForm])
      if (medicineForm.medication != "") {
        dispatch(
          Store_formData({
            ...appoinment_form,
            medications: [...medicine, medicineForm],
          })
        );
      } else {
        dispatch(
          Store_formData({ ...appoinment_form, medications: [...medicine] })
        );
      }
      // dispatch(Store_formData({ ...appoinment_form, medications: [...medicine,medicineForm]}));
      progressIncrementer();
    }
  };

  const AddMore = () => {
    let errorTemp = errorInit;
    if (showForm) {
      if (medicineForm.medication == "") {
        errorTemp = { ...errorTemp, medication: true, error: true };
      }
      if (medicineForm.quantity == "") {
        errorTemp = { ...errorTemp, quantity: true, error: true };
      }
      if (medicineForm.measurement == "") {
        errorTemp = { ...errorTemp, measurement: true, error: true };
      }
      if (medicineForm.frequency == "") {
        errorTemp = { ...errorTemp, frequency: true, error: true };
      }
      if (medicineForm.status == "") {
        errorTemp = { ...errorTemp, status: true, error: true };
      }
      setError(errorTemp);

      if (!errorTemp.error) {
        setMedicine([...medicine, medicineForm]);
        setMedicineForm(medicineFormInit);
      }
    } else {
      setForm(true);
    }
  };

  const yes_btn_Change = () => {
    // setIsAllergies(true)
    setIsMedication("Yes");
  };

  const No_btn_Change = () => {
    // setIsAllergies(false)
    setIsMedication("No");
    progressIncrementer();
  };
  const deleteMedication = (item, index) => {
    setShowModal(true);
    setDeleteItem(item);
  };
  const onCancel = (item) => {
    let filter1 = medicine.filter((obj) => {
      return obj.medication != item?.medication;
    });
    dispatch(
      Store_formData({
        ...appoinment_form,
        medications: filter1,
      })
    );
    setMedicine(filter1);
    setShowModal(false);
  };
  return (
    <>
      <h3 className={Style.add_medicine_main_heading}>Are you taking any medicines?</h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        flag={isMedication}
        No_btn_Change={No_btn_Change}
      />
      {isMedication && (
        <>
          <Accordion className={Style.medications_accordion_align}>
            {medicine?.map((med, index) => {
              return (
                <Accordion.Item key={index} eventKey={index}>
                  <div className={Style.medication_accordion_repeat}>
                    <Accordion.Header>
                      <span className={Style.medication_accordion_main_heading}>
                        {med.medication}
                      </span>
                    </Accordion.Header>
                    <img
                      src={Assets.symtomsClose}
                      alt=""
                      onClick={() => deleteMedication(med, index)}
                    />
                  </div>
                  <Accordion.Body>
                    <div className={Style.add_medicine_medicine_details}>
                      <div className="form-group">
                        <label className={Style.add_medicine_label}>
                          Medicine Name
                        </label>
                        <input
                          type="text"
                          name="medication"
                          className={Style.add_medicine_input_field}
                          placeholder="Enter Medicine Name"
                          value={med.medication}
                          onChange={(e) => {
                            let newMedicine = [...medicine];
                            newMedicine[index].medication = e.target.value;
                            setMedicine(newMedicine);
                          }}
                        />
                      </div>
                      <div className={Style.add_medicine_align_contents}>
                        <div className={Style.add_medicine_align_col1}>
                          <label className={Style.add_medicine_label}>
                            Quantity
                          </label>
                          <input
                            type="number"
                            name="quantity"
                            min="0"
                            className={Style.add_medicine_input_field}
                            placeholder="Enter Quantity"
                            value={med.quantity}
                            onChange={(e) => {
                              let newMedicine = [...medicine];
                              newMedicine[index].quantity = e.target.value;
                              setMedicine(newMedicine);
                            }}
                          />
                        </div>
                        <div className={Style.add_medicine_align_col2}>
                          <label className={Style.add_medicine_label}>
                            Unit
                          </label>
                          <CustomDropDown
                            error={false}
                            DataItem={unit}
                            onClick={(e) => {
                              let newMedicine = [...medicine];
                              newMedicine[index].measurement = e;
                              setMedicine(newMedicine);
                            }}
                            defaultPlaceH={med.measurement != ""}
                            selectedData={
                              med.measurement != ""
                                ? med.measurement
                                : "Select Unit"
                            }
                          />
                        </div>
                      </div>
                      <div className="form-group  mb-spce">
                        <label className={Style.add_medicine_label}>
                          Frequency
                        </label>
                        <CustomDropDown
                          error={false}
                          DataItem={feq}
                          onClick={(e) => {
                            let newMedicine = [...medicine];
                            newMedicine[index].frequency = e;
                            setMedicine(newMedicine);
                          }}
                          defaultPlaceH={med.frequency != ""}
                          selectedData={
                            med.frequency != ""
                              ? med.frequency
                              : "Select Frequency"
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label className={Style.add_medicine_label}>
                          Current Status
                        </label>
                        <CustomDropDown
                          error={false}
                          DataItem={status}
                          onClick={(e) => {
                            let newMedicine = [...medicine];
                            newMedicine[index].status = e;
                            setMedicine(newMedicine);
                          }}
                          defaultPlaceH={med.status != ""}
                          selectedData={
                            med.status != "" ? med.status : "Current Status"
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
              <div className="form-group">
                <label className={Style.add_medicine_label}>
                  Medicine Name {medicine.length + 1}
                </label>
                <input
                  type="text"
                  name="medication"
                  className={`${Style.add_medicine_input_field} ${error.medication && Style.inputError
                    }`}
                  placeholder="Enter Medicine Name"
                  value={medicineForm.medication}
                  onChange={(e) => {
                    setMedicineForm({
                      ...medicineForm,
                      medication: e.target.value,
                    });
                  }}
                />
                {error.medication && (
                  <p className={Style.error}>Enter name of the medicine</p>
                )}
              </div>
              <div className={Style.add_medicine_align_contents}>
                <div className={Style.add_medicine_align_col1}>
                  <label className={Style.add_medicine_label}>Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    min="0"
                    className={`${Style.add_medicine_input_field} ${error.quantity && Style.inputError
                      }`}
                    placeholder="Enter Quantity"
                    value={medicineForm.quantity}
                    onChange={(e) => {
                      setMedicineForm({
                        ...medicineForm,
                        quantity: e.target.value,
                      });
                    }}
                  />
                  {error.quantity && (
                    <p className={Style.error}>
                      Enter how much of the medicine do you take/use
                    </p>
                  )}
                </div>
                <div className={Style.add_medicine_align_col2}>
                  <label className={Style.add_medicine_label}>Unit</label>
                  <CustomDropDown
                    error={error.measurement}
                    DataItem={unit}
                    onClick={(e) => {
                      setMedicineForm({ ...medicineForm, measurement: e });
                    }}
                    defaultPlaceH={medicineForm.measurement != ""}
                    selectedData={
                      medicineForm.measurement != ""
                        ? medicineForm.measurement
                        : "Select Unit"
                    }
                  />

                  {error.measurement && (
                    <p className={Style.error}>Select Unit</p>
                  )}
                </div>
              </div>
              <div className="form-group  mb-spce">
                <label className={Style.add_medicine_label}>Frequency</label>
                <CustomDropDown
                  error={error.frequency}
                  DataItem={feq}
                  onClick={(e) => {
                    setMedicineForm({ ...medicineForm, frequency: e });
                  }}
                  defaultPlaceH={medicineForm.frequency != ""}
                  selectedData={
                    medicineForm.frequency != ""
                      ? medicineForm.frequency
                      : "Select Frequency"
                  }
                />

                {error.frequency && (
                  <p className={Style.error}>
                    Enter how often do you take/use the medicine
                  </p>
                )}
              </div>
              <div className="form-group  mb-spce">
                <label className={Style.add_medicine_label}>
                  Current Status
                </label>
                <CustomDropDown
                  error={error.status}
                  DataItem={status}
                  onClick={(e) => {
                    setMedicineForm({ ...medicineForm, status: e });
                  }}
                  defaultPlaceH={medicineForm.status != ""}
                  selectedData={
                    medicineForm.status != ""
                      ? medicineForm.status
                      : "Current Status"
                  }
                />
                {error.status && (
                  <p className={Style.error}>
                    Do you still take/use the medicine
                  </p>
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

export default AddMedicine;
