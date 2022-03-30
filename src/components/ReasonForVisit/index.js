import React, { useState, useEffect } from "react";
import Style from "./ReasonForVisit.module.scss";
import { Button } from "react-bootstrap";
import Assets from "../Layout/Assets";
import { useDispatch, useSelector } from "react-redux";
function ReasonForVisit({
  progressIncrementer,
  appoinment_form,
  Store_formData,
}) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(null);
  const reasons = useSelector((state) => state.bookAppoinment.reasonForVisit);
  const patient_data = useSelector(
    (state) => state.bookAppoinment.patient_data
  );

  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const changeReason = (data, item, index) => {
    dispatch(
      Store_formData({
        ...appoinment_form,
        reasonForVisit: data,
        reasonForVisitIndex: index,
      })
    );
    progressIncrementer();
  };
  const searchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filterData =
    reasons &&
    reasons.legth !== 0 &&
    reasons.filter((item) => {
      if (searchQuery === null) {
        return item;
      } else if (
        item.Reason.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return item;
      }
    });

  let first = appoinment_form?.reasonForVisit;

  let finalfilterData =
    first !== ""
      ? filterData.sort(function (x, y) {
          return x.Reason == first ? -1 : y == first ? 1 : 0;
        })
      : filterData;

  return (
    <>
      <h3 className={Style.visit_reason_main_heading}>
        What is the reason for this visit? <span className="mandatory">*</span>
      </h3>
      <div className={Style.visit_reason_search_input}>
        <img
          src={Assets.search_icon}
          className={Style.visit_reason_search_icon_image}
        ></img>
        <input
          autocomplete="off"
          id="search"
          placeholder="Search for a reason"
          className={Style.visit_reason_search_input_box}
          value={searchQuery}
          onChange={searchChange}
        />
      </div>
      <p className={Style.visit_reason_or_option}>
        {finalfilterData?.length !== 0
          ? `or Choose from reason(s) below`
          : searchQuery != ""
          ? `No results matched for your search`
          : `No data available`}
      </p>
      <div className={Style.scroll_div}>
        {finalfilterData &&
          finalfilterData.length !== 0 &&
          finalfilterData.map((item, index) => {
            return (
              <Button
                key={item.Reason}
                className={`${Style.visit_reason_button_input_box} ${
                  appoinment_form?.reasonForVisit == item.Reason
                    ? Style.visit_reason_button_input_box_active
                    : ""
                }`}
                onClick={() => {
                  changeReason(item.Reason, item, index);
                }}
              >
                {item.Reason}
              </Button>
            );
          })}
      </div>
      {/* <div className={Style.visit_reason_button_clicked_input}>
        <Button
          className={Style.visit_reason_button_clicked_input_box}
          onClick={progressIncrementer}
          onClick={() => {
            changeReason("data");
          }}
        >
          Reason 4
        </Button>
        <img
          src={Assets.reason_tick_icon}
          className={Style.visit_reason_tick_icon}
        ></img>
      </div> */}
    </>
  );
}

export default ReasonForVisit;
