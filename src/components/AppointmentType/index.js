import React, { useState, useEffect } from "react";
import Style from "./AppointmentType.module.scss";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
function AppointmentType({
  progressIncrementer,
  appoinment_form,
  Store_formData,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const typeofappoinmnt = useSelector(
    (state) => state.bookAppoinment.typeofAppoinment
  );
  const onSubmit = (item) => {
    dispatch(
      Store_formData({
        ...appoinment_form,
        typeofconsultation: item.Type,
        doctorfees: item.doctorfees,
        gstamount: item.Gst,
        fees: item.Amount,
        duration: item.Duration,
        c2mdfees: item.c2mdFees,
        basicFees: item.doctorfees.split(" ")[1],
      })
    );
    progressIncrementer();
  };

  return (
    <>
      <h3 className={Style.appointment_type_main_heading}>
        Type of appointment
      </h3>
      {typeofappoinmnt &&
        typeofappoinmnt.map((item) => {
          return (
            <div className={Style.appointment_type_button_input}>
              <Button
                className={Style.appointment_type_button_input_box}
                onClick={() => onSubmit(item)}
                key={item.Type}
              >
                {item.Type} - {item.doctorfees}
              </Button>
            </div>
          );
        })}
    </>
  );
}

export default AppointmentType;
