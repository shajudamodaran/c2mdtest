import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Style from "./DoctorSpecialities.module.scss";
import Assets from "../Layout/Assets";
import classNames from "classnames";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchSpeciality } from "../../actions/SpecialityListingAction";
import { useHistory } from "react-router-dom";

function DoctorSpecialities({
  selectedSpeciality,
  setSpeciality,
  clientDetails,
  ResetFilter,
}) {
  const dispatch = useDispatch();
  const speciality = useSelector(
    (state) => state.specialityList.specialityList
  );
  useEffect(() => {
    if (speciality.legth == 0) {
      dispatch(fetchSpeciality());
    }
  }, [speciality]);
  const history = useHistory();

  const [searchQuery, setSearchQuery] = useState("");
  const OnSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const dataItem =
    speciality &&
    speciality.legth !== 0 &&
    speciality.filter((item) => {
      if (searchQuery === "") {
        return item;
      } else if (
        item.specialityName.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return item;
    });

  const onSelectSpeciality = (data) => {
    setSpeciality(data);
    ResetFilter();
    if (clientDetails == undefined) {
      history.push("/DoctorListing/" + data);
    }
  };

  return (
    <>
      <div className={Style.doctor_listing_search_input}>
        <img
          src={Assets.search_icon}
          className={Style.doctor_listing_search_icon_image}
        ></img>
        <input
          autoComplete="off"
          id="search"
          placeholder="Search"
          className={Style.doctor_listing_search_input_box}
          onChange={OnSearch}
          value={searchQuery}
        />
      </div>
      <div className={Style.doctor_listing_specialities_scroll}>
        {(dataItem &&
          dataItem.length !== 0) ?
          dataItem.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  item.specialityName === selectedSpeciality
                    ? Style.active_speciality
                    : Style.doctor_listing_selected_speciality
                }`}
                onClick={() => onSelectSpeciality(item.specialityName)}
              >
                {item.specialityName}

                <img src={Assets.arrow_right} />
              </div>
            );
          }):searchQuery != ""&&<div>The requested speciality is not found</div>}
      </div>
    </>
  );
}

export default DoctorSpecialities;
