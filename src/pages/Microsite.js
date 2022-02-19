import React, { lazy ,useEffect}  from "react";
import {fetch_clientDetails} from '../actions/MicrositeAction';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const MicrositeLayout = lazy(() =>import("../components/MicrositeLayout/Layout"));
const Microsite = lazy(() =>import("../components/Microsite"));

function MicrositePage() {
  let { clinicId } = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetch_clientDetails(clinicId))

  },[])

  const clientDetails = useSelector(
    (state) => state.clientDetails
  );

  useEffect(() => {

    setClinicdataInLocal(clientDetails)
   
  }, [clientDetails])


  let setClinicdataInLocal= async (data)=>{

    await localStorage.setItem("clinicDetails", JSON.stringify(data));

  }
  


  return (
    <MicrositeLayout clientDetails={clientDetails}>
      <Microsite clientDetails={clientDetails}/>
    </MicrositeLayout>
  );
}

export default MicrositePage;
