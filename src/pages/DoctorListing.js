import React, { useState } from "react";
import DoctorlistingLayout from "../components/Layout/DoctorListingLayout";
import DoctorListing from "../components/DoctorListing";
import { useParams } from "react-router-dom";
function DoctorListingPage() {

  let [pagination, setPagination] = useState(0)

  let { speciality } = useParams();

  const [selectedSpeciality, setSpeciality] = useState(
    speciality ? speciality : ""
  );


  return (
    <DoctorlistingLayout
      pagination={pagination}
      setPagination={setPagination}
      selectedSpeciality={selectedSpeciality}
      setSpeciality={setSpeciality} >
      <DoctorListing
        pagination={pagination}
        setPagination={setPagination}
        selectedSpeciality={selectedSpeciality}
        setSpeciality={setSpeciality} />
    </DoctorlistingLayout>
  );
}

export default DoctorListingPage;
