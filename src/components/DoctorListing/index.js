import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Style from "./DoctorListing.module.scss";
import classNames from "classnames";
import DoctorSpecialities from "../DoctorSpecialities";
import Container from "react-bootstrap/Container";
import DoctorListingDetails from "../DoctorListingDetails";
import DoctorListingFilters from "../DoctorListingFilters";
import BookAppointment from "../BookAppointment";
import { useParams } from "react-router-dom";
import { fetch_doctors } from "../../actions/DoctorListingAction";
import MobileFilter from "../FilterMobileScreen";
import MobileBookAppointment from "../BookAppointmentMobile";
import Assets from "../Layout/Assets";
import Spinner from "react-bootstrap/Spinner";
import { fetchSpeciality } from "../../actions/SpecialityListingAction";
import { fetch_clientDetails, getCountryData } from "../../actions/MicrositeAction";

function DoctorListing({
  showFilter,
  setShowFilter,
  setSearchDoctor,
  searchDoctor,
}) {
  const locationData = useSelector((state) => state.doctorListing.location);
  const languageData = useSelector((state) => state.doctorListing.languagesSet);
  const hospitalData = useSelector((state) => state.doctorListing.hospitals);

  let doctorListingScroll = useRef()

  const [filterForm, setFilter] = useState({
    location: [],
    hospital: [],
    language: [],
    gender: "Gender",
    doctorName: "",
  });

  const [filterKey, setFilterkey] = useState(null);
  const [loader, setLoader] = useState(false);

  let [pagination,setPagination]=useState(0)

  let { speciality } = useParams();
  const specialityData = useSelector(
    (state) => state.specialityList.specialityList
  );

  const [selectedSpeciality, setSpeciality] = useState(
    speciality ? speciality : ""
  );
  let { clinicId } = useParams();

  useEffect(() => {
    // dispatch(
    //   getCountryData()
    // );
    if (specialityData.length == 0) {
      dispatch(
        fetchSpeciality(clinicId == undefined ? "" : clinicId)
      );
      dispatch(
        fetch_clientDetails(clinicId == undefined ? "" : clinicId)
      );
    } else {
      // if (!speciality) {
      //   setSpeciality(specialityData[0].specialityName);
      // }
    }
  }, [specialityData]);

  const clientDetails = useSelector((state) => state.clientDetails);


   useEffect(() => {
    setSpeciality("ALL")
      dispatch(
        fetch_doctors(
          speciality,
          clientDetails != undefined ? clientDetails.clinicName : "",
          pagination
        )
      );
  }, []);

  const colSpecialityDiv = classNames(
    Style.doctor_listing_speciality_div,
    "col-md-3"
  );
  const dispatch = useDispatch();
  let clinitName = "";
  if (clientDetails != undefined) {
    clinitName = clientDetails.clinicName;
  }

  // useEffect(() => {
  //   if (clinicId != undefined) {
  //     dispatch(fetch_clientDetails());
  //   }
  // }, []);

  useEffect(() => {
    setFilter({ ...filterForm, doctorName: searchDoctor });
    setFilterkey({ ...filterKey, doctorName: searchDoctor });
  }, [searchDoctor]);


  useEffect(() => {

    loading();
  }, [selectedSpeciality, clientDetails, filterForm]);

  const loading = async () => {
    if (selectedSpeciality != "") {
      await setLoader(true);
      await dispatch(
        fetch_doctors(

          selectedSpeciality,
          clientDetails != undefined ? clientDetails.clinicName : "",
          pagination
        )
      );
      await setLoader(false);
    }
  };

  const doctorListing = useSelector((state) => state.doctorListing.doctorList);

  let filterList =
    doctorListing &&
    doctorListing.doctorDetails &&
    doctorListing.doctorDetails.filter((item) => {
      if (
        item.hospitalname === filterForm.hospital &&
        item.gender == filterForm.gender
      ) {
        return item;
      }
    });
  const findCommonElements3 = (arr1, arr2) => {

    if(arr1 && !Array.isArray(arr1))
    {
      arr1=arr1?.split(/[ ,]+/)
    }

   
   
    let test = Array.isArray(arr1);
    if (test) {
      return arr1?.some((item) => arr2.includes(item));
    }
  };

  let FilterItem =
    doctorListing &&
    doctorListing.doctorDetails &&
    doctorListing.doctorDetails.filter((item) => {
      if (filterKey) {
        const isSameDocName =
          filterKey["doctorName"] && filterKey["doctorName"] != undefined
            ? item?.doctorFirstName
              .toLowerCase()
              .startsWith(filterKey["doctorName"].toLowerCase())
            : true;
        const isSelectedGender = filterKey["gender"]
          ? item?.gender.toLowerCase() === filterKey["gender"].toLowerCase()
          : true;

        const isSelectedHospital = filterKey["hospitalname"]
          ? filterKey["hospitalname"].includes(item?.hospitalname.toLowerCase())
          : true;
        const isSelectedCity = filterKey["city"]
          ? filterKey["city"].includes(item?.city.toLowerCase())
          : true;
        // const isSelectedlanguages = filterKey["languages"]
        //   ? item?.languages.includes(filterKey["languages"])
        //   : true;
        const isSelectedlanguages = filterKey["languages"]
          ? findCommonElements3(item?.languages, filterKey["languages"])
          : true;

        if (
          isSameDocName &&
          isSelectedGender &&
          isSelectedHospital &&
          isSelectedlanguages &&
          isSelectedCity
        ) {
          return item;
        }
      } else {
        return item;
      }
    });

  const ResetFilter = () => {
    setFilter({
      location: [],
      hospital: [],
      language: [],
      gender: "Gender",
      doctorName: "",
    });
    setFilterkey(null);

    hospitalData.map((data) => {
      data.checked = false;
    });
    locationData.map((data) => {
      data.checked = false;
    });
    languageData.map((data) => {
      data.checked = false;
    });
  };

  let onScrollDoctorList = async()=>{

    const { scrollTop, scrollHeight, clientHeight } = doctorListingScroll.current;

    if (scrollTop + clientHeight === scrollHeight) {
      // TO SOMETHING HERE
      console.log('Reached bottom')

      
        // await setLoader(true);
        await dispatch(
          fetch_doctors(
            selectedSpeciality,
            clientDetails != undefined ? clientDetails.clinicName : "",
            pagination+10
          )
        );
        setPagination(pagination+10)
        // await setLoader(false);

      




    }

  }






  return !showFilter ? (
    <div className={Style.doctor_listing_topSection}>


      <Container>

        <div className={Style.doctorListWrap}>
          <div className={colSpecialityDiv}>
            <h2 className={Style.doctor_listing_main_heading}>Specialities</h2>
            <DoctorSpecialities
              selectedSpeciality={selectedSpeciality}
              setSpeciality={setSpeciality}
              clientDetails={clientDetails}
              ResetFilter={ResetFilter}
            />
          </div>
          <div className={`${Style.doctorListFilter} doctor_ListFilter`}>
            <DoctorListingFilters
              filterForm={filterForm}
              setFilter={setFilter}
              setFilterkey={setFilterkey}
              filterKey={filterKey}
              ResetFilter={ResetFilter}
              clientDetails={clientDetails}

            />
            <div className={Style.doctor_listing_scrolling} ref={doctorListingScroll} onScroll={() => { onScrollDoctorList() }}>
              {loader == true ? (
                <div className={Style.loader}>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : FilterItem && FilterItem.length !== 0 ? (
                FilterItem.map((item, index) => {
                  return <DoctorListingDetails Details={item} key={index} />;
                })
              ) : (
                <div className={Style.NoDataFound}>
                  <img src={Assets.nodataFound} alt="" />
                  <p className={Style.text}>There is nothing to display here</p>
                </div>
              )}
            </div>
          </div>
          <BookAppointment></BookAppointment>
        </div>
      </Container>
    </div>
  ) : (
    <MobileFilter
      showFilter={showFilter}
      setShowFilter={setShowFilter}
      filterForm={filterForm}
      setFilter={setFilter}
      setFilterkey={setFilterkey}
      filterKey={filterKey}
      clientDetails={clientDetails}
    // setSearchDoctor={setSearchDoctor}
    // searchDoctor={searchDoctor}
    />
  );
  //<MobileBookAppointment/>
}

export default DoctorListing;