import React from "react";
import DoctorlistingLayout from "../components/Layout/DoctorListingLayout";
import DoctorListing from "../components/DoctorListing";
function DoctorListingPage() {
  return (
    <DoctorlistingLayout>
      <DoctorListing />
    </DoctorlistingLayout>
  );
}

export default DoctorListingPage;
