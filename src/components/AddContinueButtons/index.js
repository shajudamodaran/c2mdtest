import React from "react";
import Style from "./AddContinueButtons.module.scss";
import { Button } from "react-bootstrap";

function AddMoreContinue({ progressIncrementer, Continue, AddMore,flag }) {
  return (
    <div className={`${Style.btn_floating} btn_floating`}>
    <div className={Style.AddMoreContinue_align_buttons}>
      <Button
        className={Style.AddMoreContinue_add_more_button}
        onClick={() => AddMore()}
      >
        Add More
      </Button>
      <Button
        className={Style.AddMoreContinue_continue_button}
        onClick={() => {
          Continue();
        }}
      >
        Continue
      </Button>
    </div>
    </div>
  );
}

export default AddMoreContinue;
