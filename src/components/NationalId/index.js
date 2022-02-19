import React, { useState, useEffect } from "react";
import Style from "./NationalId.module.scss";
import Assets from "../Layout/Assets";
import { Accordion, Button, Collapse } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import ContinueSkipLinks from "../ContinueSkipLinks";
import { useDispatch } from "react-redux";
import axios from "axios";
import { emptyCheck } from "../Validation/index";
import Custommodal from "../Layout/Custommodal";
function NationalId({ progressIncrementer, appoinment_form, Store_formData }) {
  const [showModal, setShowModal] = useState(false);
  const [deleteItems, setDeleteItem] = useState("");
  const [modalItem, setItem] = useState(
    "Do you really want to delete this file?"
  );
  const hiddenFileInput = React.useRef(null);
  const [showHelpContent, setHelpContent] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const [nationalId, setNationalId] = useState(
    appoinment_form.nationalId == "" ? "" : appoinment_form.nationalId
  );
  const [error, setError] = useState(false);
  const [fileItem, setFileName] = useState(
    appoinment_form.nationalIdfile == "" ? "" : appoinment_form.nationalIdfile
  );
  useEffect(() => {}, [fileItem]);
  const handleChange = (e) => {
    const re = /^[a-z0-9]+$/i;
    if (e.target.value === "" || re.test(e.target.value)) {
      setNationalId(e.target.value);
      setError(false);
    }
  };

  const onContinue = async () => {
    let test = await emptyCheck(nationalId);

    if (test.status === true) {
      dispatch(
        Store_formData({
          ...appoinment_form,
          nationalId: nationalId,
          nationalIdfile: fileItem,
        })
      );
      progressIncrementer();
    } else {
      // progressIncrementer();
      setError(true);
    }
  };

  const onFileChange = (file) => {
    // const file = e.target.files[0];

    const formData = new FormData();
    formData.append("name", file?.name);
    formData.append("file", file);

    axios
      .post(
        "https://uat.c2mdr.com/c2mydrrestdemo/v1/c2mdapi/reportsuploads",
        formData,
        {}
      )
      .then((res) => {
        let ImgRes = res.data && res.data.data.fileName;

        setFileName(ImgRes);
      })
      .catch((error) => {});
  };
  const handleClick = (event) => {
    hiddenFileInput.current.click();
    event.preventDefault();
  };
  const onHelp = () => {
    setHelpContent(!showHelpContent);
  };
  const onCancel = (item) => {
    setFileName("");
    dispatch(
      Store_formData({
        ...appoinment_form,
        nationalIdfile: "",
      })
    );
    setShowModal(false);
  };
  const onView = () => {
    setShowModal(true);
  };
  return (
    <>
      <h3 className={Style.national_id_main_heading}>National ID</h3>
      <div className="form-group">
        <label className={Style.national_id_label}>Enter ID</label>
        <input
          type="text"
          name="nationalId"
          className={`${Style.national_id_input_field} ${
            error && Style.inputError
          }`}
          placeholder="Enter your National ID"
          value={nationalId}
          onChange={handleChange}
        />
        {error && <p className={Style.error}>Please enter National Id</p>}
      </div>

      <input
        type="file"
        id="upload"
        ref={hiddenFileInput}
        style={{ display: "none" }}
        onChange={(e) => {
          onFileChange(e.target.files[0]);
        }}
      />
      {fileItem == "" ? (
        <div className={Style.national_id_upload_button}>
          <Button
            className={Style.national_id_upload_button_box}
            onClick={handleClick}
          >
            <img
              src={Assets.upload_icon}
              className={Style.national_id_upload_icon_image}
            ></img>
            Upload ID
          </Button>

          <span
            className={Style.national_id_help_icon}
            onClick={() => setHelpContent(!showHelpContent)}
          >
            Help
            {!showHelpContent && <img src={Assets.help_arrow} />}
            {showHelpContent && <img src={Assets.helparrow2} />}
          </span>
        </div>
      ) : (
        <div className={Style.national_id_updated_btn}>
          <Button className={Style.national_id_upload_button_box}>
            <img
              src={Assets.tick_icon}
              className={Style.national_id_upload_icon_image}
              align="left"
            />
            Uploaded
            <img
              src={Assets.upload_close_icon}
              className={Style.national_id_upload_delete_image}
              align="right"
              onClick={onView}
            />
          </Button>
        </div>
      )}
      {showHelpContent && (
        <div className={Style.helpContent}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      )}
      <ContinueSkipLinks
        progressIncrementer={progressIncrementer}
        onContinue={onContinue}
      />
      <Custommodal
        showModal={showModal}
        setShowModal={setShowModal}
        onCancel={onCancel}
        deleteItems={deleteItems}
        modalItem={modalItem}
      />
    </>
  );
}

export default NationalId;
