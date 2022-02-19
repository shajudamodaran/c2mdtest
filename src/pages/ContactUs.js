import React, { lazy,useEffect } from "react";
import {fetch_clientDetails} from '../actions/MicrositeAction';
import { useSelector, useDispatch } from "react-redux";

const MicrositeLayout = React.lazy(() =>
  import("../components/MicrositeLayout/Layout")
);
const ContactUs = React.lazy(() =>
  import("../components/ContactUs")
);

function ContactUsPage() {

  const clientDetails = useSelector(
    (state) => state.clientDetails
  );


  const dispatch = useDispatch();
  useEffect(()=>{
    if(!clientDetails.logo){
      dispatch(fetch_clientDetails())
    }
  },[])

  return (
    <MicrositeLayout clientDetails={clientDetails}>
      <ContactUs clientDetails={clientDetails} />
    </MicrositeLayout>
  );
}

export default ContactUsPage;
