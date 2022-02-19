import React, { useState } from "react";
import Style from "./CustomAccordion.module.scss";
import { Accordion } from "react-bootstrap";

function CustomAccordion({
  title,
  inputLabel1,
  inputLabel2,
  placeholder1,
  placeholder2,
  period,
  onSelect,
  onSelectStatus,
  Status,
  page,
  duration,
  surgeryDuration,
  changeDays,
}) {
  const [medicalLabel, setLabel] = useState("Days");
  const renderSelect = (inputLabel1) => {
    return (
      <select
        className={Style.period_accordion_select_field}
        onChange={(e) => onSelect(e, title, inputLabel1)}
      >
        {period.duration &&
          period.duration.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    );
  };
  const renderSelect3 = (inputLabel2) => {
    return (
      <select
        className={Style.period_accordion_select_field}
        onChange={(e) => onSelect(e, title, inputLabel2)}
      >
        {Status.status &&
          Status.status.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    );
  };
  const renderSelect2 = (inputLabel1) => {
    return (
      <select
        className={Style.period_accordion_select_field}
        onChange={(e) => {
          onSelect(e, title, inputLabel1);
          setLabel(e.target.value);
        }}
      >
        {duration &&
          duration.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    );
  };
  const renderSelect4 = (inputLabel1) => {
    return (
      <select
        className={Style.period_accordion_select_field}
        onChange={(e) => {
          onSelect(e, title, inputLabel1);
        }}
      >
        {surgeryDuration &&
          surgeryDuration.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    );
  };
  return (
    <>
      <Accordion className={Style.CustomAccordion}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className={Style.period_accordion_main_heading}>{title}</span>
          </Accordion.Header>
          <Accordion.Body>
            {/* <p className={Style.period_accordion_body_para}>Since 3 Months</p> */}
            <div className="form-group">
              <label className={Style.period_accordion_label}>
                {inputLabel1}
              </label>
              {page === "Symptom" && renderSelect(inputLabel1)}
              {page === "medicalConditions" && renderSelect2(inputLabel1)}
              {page === "Surgeries" && renderSelect4(inputLabel1)}
            </div>
            {page === "Symptom" && (
              <div className="form-group">
                <label className={Style.period_accordion_label}>
                  {inputLabel2}
                </label>
                {page === "Symptom" && renderSelect3(inputLabel2)}
              </div>
            )}
            {page === "Surgeries" && (
              <div className="form-group">
                <label className={Style.period_accordion_label}>
                  {inputLabel2}
                </label>
                <input
                  type="text"
                  name="nationalId"
                  className={Style.period_accordion_input_field}
                  placeholder={placeholder2}
                  onChange={(e) => changeDays(e, title)}
                />
              </div>
            )}
            {page === "medicalConditions" && (
              <div className="form-group">
                <label className={Style.period_accordion_label}>
                  Since {medicalLabel}
                </label>
                <input
                  type="text"
                  name="nationalId"
                  className={Style.period_accordion_input_field}
                  placeholder={`Since ${medicalLabel}`}
                  onChange={(e) => changeDays(e, title)}
                />
              </div>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default CustomAccordion;
