import React from "react";
import Style from "./ContinueSkipLinks.module.scss";
import { Button } from "react-bootstrap";
import { Store_formData } from "../../actions/BookAppoinmentAction";
import { useDispatch, useSelector } from "react-redux";
function ContinueSkipLinks({ progressIncrementer, onContinue }) {
  return (
    <>
     <div className={`${Style.btn_floating} btn_floating`}>
      <Button
        className={Style.national_id_continue_button}
        onClick={() => onContinue()}
      >
        Continue
      </Button>
      </div>
      <p className={Style.national_id_skip_link} onClick={progressIncrementer}>
        Skip this question
      </p>
    </>
  );
}

export default ContinueSkipLinks;
