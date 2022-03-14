import React, { useEffect, useState } from "react";
import Style from "./DoctorListingFilters.module.scss";
import Assets from "../Layout/Assets";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { CharacterSet } from "../Constants/characterSet";
import { object } from "yup";
function DoctorListingFilters({
  filterForm,
  setFilter,
  setFilterkey,
  filterKey,
  ResetFilter,
  clientDetails,
}) {
  const locationData = useSelector((state) => state.doctorListing.location);
  const languageData = useSelector((state) => state.doctorListing.languagesSet);
  const hospitalData = useSelector((state) => state.doctorListing.hospitals);
  const indexCharacters = useSelector(
    (state) => state.doctorListing.indexCharacters
  );

  const [showSelect, setSelect] = useState({
    byname: false,
    byGender: false,
    hospital: false,
    location: false,
    language: false,
  });

  document.addEventListener("click", function (event) {
    var ignoreClickOnMeElement = document.getElementById("filterList");
    if (ignoreClickOnMeElement != null) {
      var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);

      if (
        !isClickInsideElement &&
        (showSelect.byname ||
          showSelect.byGender ||
          showSelect.hospital ||
          showSelect.location ||
          showSelect.language)
      ) {
        //Do something click is outside specified element
        setSelect({
          byname: false,
          byGender: false,
          hospital: false,
          location: false,
          language: false,
        });
      }
    }
  });

  const colDetailsDiv = classNames(Style.doctor_listing_details_div);
  const dropdownClassGender = classNames(
    Style.doctor_listing_byname,
    Style.doctor_listing_gender
  );
  const dropdownClassHospital = classNames(
    Style.doctor_listing_byname,
    Style.doctor_listing_hospital
  );
  const dropdownClassLocation = classNames(
    Style.doctor_listing_byname,
    Style.doctor_listing_location
  );
  const dropdownClassLanguage = classNames(
    Style.doctor_listing_byname,
    Style.doctor_listing_language
  );

  const [submenu, setSubmenu] = useState({
    byname: false,
    byGender: false,
    hospital: false,
    location: false,
    language: false,
  });

  const handlechange = (item, position, e) => {
    if (item.value === "All") {
      locationData.map((data) => {
        data.checked = e.target.checked;
      });

      delete filterKey?.city;
      if (e.target.checked) {
        setFilter({
          ...filterForm,
          location: ["All"],
        });
      } else {
        setFilter({
          ...filterForm,
          location: [],
        });
      }
    } else {
      locationData.map((data) => {
        if (data.value == item.value) {
          data.checked = e.target.checked;
        }
        if (data.value == "All") {
          data.checked = false;
        }
      });
      let selectedItem = [];
      locationData.map((obj) => {
        if (obj.checked == true && object.value !== "All") {
          return selectedItem.push(obj.value.toLowerCase());
        }
      });

      setFilter({
        ...filterForm,
        location: selectedItem,
      });
      if (selectedItem.includes("all") || selectedItem.length == 0) {
        delete filterKey.city;
      } else {
        setFilterkey({
          ...filterKey,
          city: selectedItem,
        });
      }
    }

    setSelect({ location: !showSelect.location });
  };

  const hospitalchange = (item, e) => {
    if (item.value === "All") {
      hospitalData.map((data) => {
        data.checked = e.target.checked;
      });
      delete filterKey?.hospitalname;
      if (e.target.checked) {
        setFilter({
          ...filterForm,
          hospital: ["All"],
        });
      } else {
        setFilter({
          ...filterForm,
          hospital: [],
        });
      }
    } else {
      hospitalData.map((data) => {
        if (data.value == item.value) {
          data.checked = e.target.checked;
        }
        if (data.value == "All") {
          data.checked = false;
        }
      });

      let selectedItem = [];
      hospitalData.map((obj) => {
        if (obj.checked == true && object.value !== "All") {
          return selectedItem.push(obj.value.toLowerCase());
        }
      });
      setFilter({ ...filterForm, hospital: selectedItem });
      if (selectedItem.includes("all") || selectedItem.length == 0) {
        delete filterKey.hospitalname;
      } else {
        setFilterkey({ ...filterKey, hospitalname: selectedItem });
      }
    }
    setSelect({ hospital: !showSelect.hospital });
  };

  const languagechange = (item, e) => {
    if (item.value === "All") {
      languageData.map((data) => {
        data.checked = e.target.checked;
      });
      delete filterKey?.languages;
      if (e.target.checked) {
        setFilter({
          ...filterForm,
          language: ["All"],
        });
      } else {
        setFilter({
          ...filterForm,
          language: [],
        });
      }
    } else {
      languageData.map((data) => {
        if (data.value == item.value) {
          data.checked = e.target.checked;
        }
        if (data.value == "All") {
          data.checked = false;
        }
      });
      let selectedItem = [];
      languageData.map((obj) => {
        if (obj.checked == true && object.value !== "All") {
          return selectedItem.push(obj.value);
        }
      });
      setFilter({ ...filterForm, language: selectedItem });
      if (selectedItem.includes("all") || selectedItem.length == 0) {
        delete filterKey.languages;
      } else {
        setFilterkey({ ...filterKey, languages: selectedItem });
      }
    }
    setSelect({ language: !showSelect.language });
  };

  const change_gender = (e) => {
    setFilter({ ...filterForm, gender: e.target.value });
    setFilterkey({ ...filterKey, gender: e.target.value });
    setSelect({ byGender: !showSelect.byGender });
  };
  const Change_name = (e) => {
    setFilter({ ...filterForm, doctorName: e.target.value });
    setFilterkey({ ...filterKey, doctorName: e.target.value });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSelect({ byname: !showSelect.byname });
    }
  };

  // const ResetFilter = () => {
  //   setFilter({
  //     location: [],
  //     hospital: [],
  //     language: [],
  //     gender: "Gender",
  //     doctorName: "",
  //   });
  //   setFilterkey(null);

  //   hospitalData.map((data) => {
  //     data.checked = false;
  //   });
  //   locationData.map((data) => {
  //     data.checked = false;
  //   });
  //   languageData.map((data) => {
  //     data.checked = false;
  //   });
  // };

  const handleStarts = (name) => {
    setFilter({ ...filterForm, doctorName: name });
    setFilterkey({ ...filterKey, doctorName: name });
  };

  const getSample = (item, index) => {
    if (indexCharacters.includes(item)) {
      return (
        <li key={index} onClick={() => handleStarts(item)}>
          {item}
        </li>
      );
    } else {
      return (
        <li
          key={index}
          className={Style.ActiveIndex}
          style={{ color: "#D1D1D1", cursor: "not-allowed" }}
        >
          {item}
        </li>
      );
    }
  };

  return (
    <div className={colDetailsDiv} id="filterList">
      <div className={Style.doctor_listing_byname}>
        <span
          className={Style.filterNamelabelBox}
          onClick={() => setSelect({ byname: !showSelect.byname })}
        >
          <span className={Style.filterNamelabel}>
            By Name
            <img src={Assets.down_arrow} alt="" />
          </span>
        </span>
        {showSelect.byname && (
          <div className={Style.doctor_listing_byname_content}>
            <input
              autocomplete="off"
              id="search"
              placeholder="Search by Name"
              className={Style.doctor_listing_search_by_name}
              value={filterKey?.doctorName}
              onChange={Change_name}
              onKeyDown={handleKeyDown}
            />
            <ul>
              {CharacterSet &&
                CharacterSet.map(
                  (item, index) => getSample(item, index)
                  // return (
                  //   <li key={index} onClick={() => handleStarts(item)}>
                  //     {item}
                  //   </li>
                  // );
                )}
            </ul>
            <img
              src={Assets.close_icon}
              alt=""
              onClick={() => setSelect({ byname: !showSelect.byname })}
            />
          </div>
        )}
      </div>
      <div className={dropdownClassGender}>
        <span
          className={Style.filterNamelabelBox}
          onClick={() => setSelect({ byGender: !showSelect.byGender })}
        >
          <span className={Style.filterNamelabel}>{filterForm.gender}</span>
          <img src={Assets.down_arrow} alt="" />
        </span>
        {showSelect.byGender && (
          <div className={Style.doctor_listing_gender_content}>
            <div className={Style.doctor_listing_gender_content_male}>
              <input
                type="radio"
                value="Male"
                name="gender"
                checked={filterForm.gender === "Male"}
                onChange={change_gender}
                id="male"
              />{" "}
              <label htmlFor="male"> Male</label>
            </div>{" "}
            <div className={Style.doctor_listing_gender_content_female}>
              <input
                type="radio"
                value="Female"
                name="gender"
                checked={filterForm.gender === "Female"}
                onChange={change_gender}
                id="female"
              />{" "}
              <label htmlFor="female"> Female</label>
            </div>
          </div>
        )}
      </div>
      
      
      {clientDetails?.clinicurl === "shalby" && (
        <div
          className={dropdownClassHospital}
          onClick={() => setSelect({ hospital: !showSelect.hospital })}
        >
          <span
            className={Style.filterNamelabelBox}
            onClick={() => setSelect({ hospital: !showSelect.hospital })}
          >
            <span
              className={Style.filterNamelabel}
              // onClick={() => setSelect({ hospital: !showSelect.hospital })}
            >
              {" "}
              {filterForm.hospital?.length == 0
                ? "Hospital"
                : filterForm.hospital[0]}
            </span>
            <img
              src={Assets.down_arrow}
              alt=""
              // onClick={() => setSelect({ hospital: !showSelect.hospital })}
            />
          </span>
          {showSelect.hospital && (
            <div
              className={Style.doctor_listing_hospital_content}
              onClick={() => setSelect({ hospital: true })}
            >
              {hospitalData &&
                hospitalData.length !== 0 &&
                hospitalData.map((item, index) => {
                  return (
                    <div className={Style.checkboxList} key={index}>
                      <input
                        type="checkbox"
                        value={item.value}
                        id={item.value}
                        // checked={filterForm.hospital === item.value}
                        checked={item.checked}
                        onChange={(e) => hospitalchange(item, e)}
                      />
                      <label htmlFor={item.value}>{item.value}</label>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      )}
      {/* <div
        className={dropdownClassLocation}
        onClick={() => setSelect({ location: !showSelect.location })}
      >
        <span
          className={Style.filterNamelabelBox}
          onClick={() => setSelect({ location: !showSelect.location })}
        >
          <span
            className={Style.filterNamelabel}
            // onClick={() => setSelect({ location: !showSelect.location })}
          >
            {filterForm.location?.length == 0
              ? "Location"
              : filterForm.location[0]}
          </span>
          <img
            src={Assets.down_arrow}
            alt=""
            // onClick={() => setSelect({ location: !showSelect.location })}
          />
        </span>
        {showSelect.location && (
          <div className={Style.doctor_listing_location_content}>
            {locationData &&
              locationData.length !== 0 &&
              locationData.map((item, index) => {
                return (
                  <div className={Style.checkboxList} key={index}>
                    <input
                      type="checkbox"
                      value={item.value}
                      // checked={filterForm.location === item.value}
                      checked={item.checked}
                      onChange={(e) => handlechange(item, index, e)}
                      name="location"
                      id={item.value}
                    />
                    <label htmlFor={item.value}>{item.value}</label>
                  </div>
                );
              })}
          </div>
        )}
      </div> */}

      {/* <div className={dropdownClassLanguage}>
        <span
          className={Style.filterNamelabelBox}
          onClick={() => setSelect({ language: !showSelect.language })}
        >
          <span
            className={Style.filterNamelabel}
            // onClick={() => setSelect({ language: !showSelect.language })}
          >
            {filterForm.language?.length == 0
              ? "Language"
              : filterForm.language[0]}
          </span>
          <img
            src={Assets.down_arrow}
            className={Style.doctor_listing_lang_img}
            alt=""
            // onClick={() => setSelect({ language: !showSelect.language })}
          />
        </span>
        {showSelect.language && (
          <div className={Style.doctor_listing_language_content}>
            {languageData &&
              languageData.length !== 0 &&
              languageData.map((item, index) => {
                return (
                  <div className={Style.checkboxList}>
                    <input
                      type="checkbox"
                      value={item.value}
                      id={item.value}
                      // checked={filterForm.language === item.value}
                      checked={item.checked}
                      onChange={(e) => languagechange(item, e)}
                    />
                    <label>{item.value}</label>
                  </div>
                );
              })}
          </div>
        )}
      </div>
       */}
      <div className={Style.resetText}>
        <div onClick={ResetFilter}>
          <img src={Assets.reset_icon} alt="" />
          <span>Reset Filter</span>
        </div>
      </div>
    </div>
  );
}

export default DoctorListingFilters;
