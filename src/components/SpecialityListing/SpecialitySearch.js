import React, { useState } from "react";
import Style from "./SpecialitySearch.module.scss";
import Button from "react-bootstrap/Button";
import Assets from "../Layout/Assets";
function SpecialitySearch({ setSearchQuery, searchQuery }) {
  const OnSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className={Style.specialityListing_search_wrapper}>
      <img src={Assets.search} alt="Search" />
      <input
        type="text"
        placeholder="Search Specialities"
        onChange={OnSearch}
        value={searchQuery}
      />
      <div>
        <Button variant="primary" className={Style.search_btn}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SpecialitySearch;
