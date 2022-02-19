import React, { lazy,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetch_clientDetails} from '../actions/MicrositeAction';
import { fetchSpeciality } from "../actions/SpecialityListingAction";
const Speciality = React.lazy(() => import("../components/Speciality"));


const MicrositeLayout = React.lazy(() =>
  import("../components/MicrositeLayout/Layout")
);
const Treatment = React.lazy(() =>
  import("../components/TreatmentListing")
);

function TreatmentsPage() {

  const clientDetails = useSelector(
    (state) => state.clientDetails
  );


  const dispatch = useDispatch();
  useEffect(()=>{
    if(!clientDetails.logo){
      dispatch(fetch_clientDetails())
    }
  },[])

  useEffect(() => {
    dispatch(fetchSpeciality());
  }, []);

  const speciality = useSelector(
    (state) => state.specialityList.specialityList
  );



  return (
    <MicrositeLayout clientDetails={clientDetails}>
      <Treatment />
      {/* {speciality &&
        speciality.legth !== 0 &&
        speciality.map((item) => {
          return <Speciality Item={item} key={item.specialityId} />;
        })} */}
    </MicrositeLayout>
  );
}

export default TreatmentsPage;
