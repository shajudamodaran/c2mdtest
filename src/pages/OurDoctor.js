import React,{useEffect,lazy} from "react";
import {fetch_clientDetails} from '../actions/MicrositeAction';
import { useSelector, useDispatch } from "react-redux";

import LoginLayout from "../components/Layout/LoginLayout";
import DoctorListing from "../components/DoctorListing";
const MicrositeLayout = lazy(() => import("../components/MicrositeLayout/Layout"));

function OurDoctorPage() {

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetch_clientDetails())
    },[])
  
    const clientDetails = useSelector(
      (state) => state.clientDetails
    );

  return (
    <MicrositeLayout clientDetails={clientDetails}>
      <DoctorListing clientDetails={clientDetails} />
    </MicrositeLayout>
  );
}

export default OurDoctorPage;
