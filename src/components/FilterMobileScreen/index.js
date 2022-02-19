import React, { useEffect, useState } from "react";
import Style from "./FilterMobileScreen.module.scss";
import Assets from "../Layout/Assets";
import { Button, Container, Row } from "react-bootstrap";
import MobileCharacterSet from "../CharacterSetMobileScreen";
import MobileGender from "../GenderMobileScreen";
import MobileHospital from "../HospitalMobileScreen";
import MobileFooter from "../FooterMobileScreen";
import MobileLocation from "../LocationMobileScreen";
import MobileLanguage from "../LanguageMobileScreen";
import MobileSpecialities from "../SpecialitiesMobileScreen";
import { useSelector } from "react-redux";
import { object } from "yup";
function MobileFilter({
  showFilter,
  setShowFilter,
  filterForm,
  setFilter,
  setFilterkey,
  filterKey,
  clientDetails,
}) {
  const [filterType, setFilterType] = useState("Name");
  const locationData = useSelector((state) => state.doctorListing.location);
  const languageData = useSelector((state) => state.doctorListing.languagesSet);
  const hospitalData = useSelector((state) => state.doctorListing.hospitals);
  const specialityData = useSelector(
    (state) => state.specialityList.specialityList
  );

  const [showSelect, setSelect] = useState({
    byname: false,
    byGender: false,
    hospital: false,
    location: false,
    language: false,
  });

  const handleStarts = (name) => {
    setFilter({ ...filterForm, doctorName: name });
    setFilterkey({ ...filterKey, doctorName: name });
  };

  const change_gender = (e) => {
    setFilter({ ...filterForm, gender: e.target.value });
    setFilterkey({ ...filterKey, gender: e.target.value });
    setSelect({ byGender: !showSelect.byGender });
  };

  const hospitalchange = (item, e) => {
    if (item.value === "All") {
      hospitalData.map((data) => {
        data.checked = e.target.checked;
      });
      delete filterKey.hospitalname;
      setFilter({ ...filterForm, hospital: [] });
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
      if (selectedItem.includes("all")) {
        delete filterKey.hospitalname;
      } else {
        setFilterkey({ ...filterKey, hospitalname: selectedItem });
      }
    }
    setSelect({ hospital: !showSelect.hospital });
  };

  const handlechange = (item, position, e) => {
    if (item.value === "All") {
      locationData.map((data) => {
        data.checked = e.target.checked;
      });

      delete filterKey.city;
      setFilter({
        ...filterForm,
        location: [],
      });
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
      if (selectedItem.includes("all")) {
        delete filterKey?.city;
      } else {
        setFilterkey({
          ...filterKey,
          city: selectedItem,
        });
      }
    }

    setSelect({ location: !showSelect.location });
  };
  const languagechange = (item, e) => {
    if (item.value === "All") {
      languageData.map((data) => {
        data.checked = e.target.checked;
      });
      delete filterKey?.languages;
      setFilter({ ...filterForm, language: [] });
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
      if (selectedItem.includes("all")) {
        delete filterKey?.languages;
      } else {
        setFilterkey({ ...filterKey, languages: selectedItem });
      }
    }
    setSelect({ language: !showSelect.language });
  };

  const ResetFilter = () => {
    setFilter({
      location: "Location",
      hospital: "Hospital",
      language: "Language",
      gender: "Gender",
      doctorName: "",
    });
    setFilterkey(null);
  };

  return (
    <div className={Style.mobile_filter_popup}>
      <div className={Style.mobile_filter_align}>
        <img
          src={Assets.filter_close}
          className={Style.mobile_filter_close}
          onClick={() => {
            setShowFilter(false);
          }}
        />
        <span className={Style.mobile_filter_main_heading}>Filter by</span>
        <img
          src={Assets.filter_refresh}
          className={Style.mobile_filter_refresh}
          onClick={() => {
            ResetFilter();
            setShowFilter(false);
          }}
        />
      </div>
      <div className={Style.mobile_filter_wrp}>
        <div className={Style.mobile_filter_left}>
          <ul className={Style.mobile_filter_side_bar}>
            <li
              className={filterType == "Name" && Style.active}
              onClick={() => {
                setFilterType("Name");
              }}
            >
              Name
            </li>
            <li
              className={filterType == "Gender" && Style.active}
              onClick={() => {
                setFilterType("Gender");
              }}
            >
              Gender
            </li>
            {clientDetails?.clinicurl === "shalby" && (
              <li
                className={filterType == "Hospital" && Style.active}
                onClick={() => {
                  setFilterType("Hospital");
                }}
              >
                Hospital
              </li>
            )}
            <li
              className={filterType == "Location" && Style.active}
              onClick={() => {
                setFilterType("Location");
              }}
            >
              Location
            </li>
            <li
              className={filterType == "Language" && Style.active}
              onClick={() => {
                setFilterType("Language");
              }}
            >
              Language
            </li>
            <li
              className={filterType == "Specialities" && Style.active}
              onClick={() => {
                setFilterType("Specialities");
              }}
            >
              Specialities
            </li>
          </ul>
        </div>
        <div className={Style.mobile_filter_right}>
          {filterType == "Name" && (
            <MobileCharacterSet handleStarts={handleStarts} />
          )}
          {filterType == "Gender" && (
            <MobileGender
              filterForm={filterForm}
              change_gender={change_gender}
            />
          )}
          {filterType == "Hospital" && (
            <MobileHospital
              hospitalData={hospitalData}
              hospitalchange={hospitalchange}
            />
          )}
          {filterType == "Location" && (
            <MobileLocation
              locationData={locationData}
              handlechange={handlechange}
            />
          )}
          {filterType == "Language" && (
            <MobileLanguage
              languageData={languageData}
              languagechange={languagechange}
            />
          )}
          {filterType == "Specialities" && (
            <MobileSpecialities specialityData={specialityData} />
          )}
        </div>
      </div>
      <div className={Style.mobile_filter_btm_btn}>
        <Button
          className={Style.mobile_filter_apply_button}
          onClick={() => {
            setShowFilter(false);
          }}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}

export default MobileFilter;
