import React from "react";
import Style from "./YesNoButton.module.scss";
import { Button } from "react-bootstrap";

function YesNoButton({
  yes_btn_Change,
  No_btn_Change,
  flag
}) {
  return (
    <div className={Style.YesNoButton_align_buttons}>
      <Button
        className={`${Style.YesNoButton_button} ${flag=='Yes'&&Style.active}`}
        onClick={() => yes_btn_Change()}
      >
        Yes
      </Button>
      <Button
        className={`${Style.YesNoButton_button} ${flag=='No'&&Style.active}`}
        style={{ float: "right" }}
        onClick={() => No_btn_Change()}
      >
        No
      </Button>
    </div>
  );
}

export default YesNoButton;
