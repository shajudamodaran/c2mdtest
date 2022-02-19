import React from "react";
import { Fragment } from "react";
import MicrositeConsultation from "./MicrositeConsultation";
import MicrositeTitle from "./MicrositeTitle";
import MicrositePayment from "./MicrositePayment";


function Microsite({clientDetails}) {
  return (
    <Fragment >
     <MicrositeTitle clientDetails={clientDetails}/>
     <MicrositeConsultation />
     <MicrositePayment />
     </Fragment>
   
  );
}

export default Microsite;
