import React from "react";
import Style from "./PeriodAccordion.module.scss";
import { Accordion } from "react-bootstrap";

function PeriodAccordion({
  title,
  inputLabel1,
  inputLabel2,
  placeholder1,
  placeholder2,
  inputLabel3,
  placeholder3,
  page,
  onSelect,
  Status,
  handleChange,
}) {
  const renderSelect = (inputLabel2) => {
    return (
      <select
        className={Style.period_accordion_select_field}
        onChange={(e) => onSelect(e, title, inputLabel2)}
      >
        {Status &&
          Status.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    );
  };
  return (
    <>
      <Accordion
        defaultActiveKey="0"
        className={Style.period_accordion_accordion_align}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className={Style.period_accordion_main_heading}>{title}</span>
          </Accordion.Header>
          <Accordion.Body>
            {/* <p className={Style.period_accordion_body_para}>Since 3 Months</p> */}
            {page === "allergies" && (
              <div className="form-group">
                <label className={Style.period_accordion_label}>
                  {inputLabel3}
                </label>
                <input
                  type="text"
                  name="allergen"
                  className={Style.period_accordion_input_field}
                  placeholder={placeholder3}
                  onChange={(e) => handleChange(e, title)}
                />
              </div>
            )}
            <div className="form-group">
              <label className={Style.period_accordion_label}>
                {inputLabel1}
              </label>
              <input
                type="text"
                name={inputLabel1}
                className={Style.period_accordion_input_field}
                placeholder={placeholder1}
                onChange={(e) => handleChange(e, title)}
              />
            </div>
            <div className="form-group">
              <label className={Style.period_accordion_label}>
                {inputLabel2}
              </label>
              {page === "allergies" && renderSelect()}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default PeriodAccordion;
