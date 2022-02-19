import React from "react";
import { useDimensions } from "../logic/Dimensions";
import DoctorlistingLayout from "../components/Layout/DoctorListingLayout";
const DoctorProfileSchedule = React.lazy(() =>
  import("../components/DoctorprofileSchedule")
);

function DoctorProfileSchedulePage() {
  const { width } = useDimensions();
  return (
    <div
      className="doctor-profile-layout"
      style={{ marginBottom: width < 992 ? "100px" : "0px" }}
    >
      <DoctorlistingLayout>
        <DoctorProfileSchedule />
      </DoctorlistingLayout>
    </div>
  );
}

export default DoctorProfileSchedulePage;
