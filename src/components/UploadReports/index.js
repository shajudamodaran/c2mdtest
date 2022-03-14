import React, { useState, useEffect, useRef } from "react";
import Style from "./UploadReports.module.scss";
import YesNoButton from "../YesNoButton";
import Assets from "../Layout/Assets";
import { Accordion, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";
import { FileDrop } from "react-file-drop";
import { fetch_Uploaded_files } from "../../actions/FamilyMembersAction";
import { toast } from "react-toastify";
import ConfirmModal from "./ConfirmModal";
import { getFileTypeFromFileName } from "../../Helpers/FileHelper";
function UploadReports({
  progressIncrementer,
  appoinment_form,
  Store_formData,
}) {
  const fileInputRef = useRef(null);
  const [error, setError] = useState(false);
  const [deleteItems, setDeleteItem] = useState("");
  const [errorLimit, setErrorLimit] = useState(false);
  const userData = useSelector((state) => state.login);
  const [toastOpen, setToastOpen] = useState(false);
  const uploadedData = useSelector(
    (state) => state.bookAppoinment.uploadedData?.reportList
  );
  const [showModal, setShowModal] = useState(false);

  const [fileItem, setFileName] = useState([]);
  const [uploads, setUploads] = useState(appoinment_form?.reportsArray);
  const [selectedFiles,setSelectedFiles] = useState(appoinment_form.selectedFiles?appoinment_form.selectedFiles:[]);
// console.log(selectedFiles,"this is aupted")
  useEffect(() => {
    dispatch(fetch_Uploaded_files({ userId: userData?.user?.userId }));
    document.querySelector("body").scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const [reports, setReports] = useState({
    flag: appoinment_form?.reportsArray?.length > 0 ? "Yes" : "",
    url: "",
  });

  const [showError, setShowError] = useState(false);
  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  const yes_btn_Change = () => {
    setReports({ ...reports, flag: "Yes" });
  };
  const No_btn_Change = () => {
    setReports({ ...reports, flag: "No" });
    progressIncrementer();
  };

  const Continue = () => {
    let NewArry = fileItem.push(appoinment_form.reports);

    if (uploads?.length >= 1||selectFiles.length>=1) {
      setShowError(false);
      dispatch(
        Store_formData({
          ...appoinment_form,
          reports: fileItem?.toString(),
          reportsArray: uploads,
          selectedFiles:selectedFiles
        })
      );
      progressIncrementer();
    } else {
      setShowError(true);
    }
  };

  const onFileChange = (file) => {
    // const file = e.target.files[0];

    let imgSize = parseFloat(file?.size / (1024 * 1024)).toFixed(2);

    if (uploads.length <= 4) 
    {
      if (imgSize < 5) {
        setError(false);
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);

        axios
          .post(
            "https://uat.c2mdr.com/c2mydrrestdemo/v1/c2mdapi/reportsuploads",
            formData,
            {}
          )
          .then((res) => {
            let imgname = res.data.data.fileName?.split("!");

            setFileName([...fileItem, res.data && res.data.data.fileName]);
            setShowError(false);
            setUploads([
              ...uploads,
              {
                title: imgname[0],
                uploaded: moment().format("DD-MM-YYYY"),
                status: true,
                resName: res.data.data.fileName,
              },
            ]);
          })
          .catch((error) => {});
      } else {
        setError(true);
      }
    } else 
    {
      if (!toastOpen) {
        toast.error("Only 5 files are allowed to upload", {
          position: toast.POSITION.TOP_CENTER,
          hideProgressBar:true,
          onOpen: (props) => setToastOpen(true),
          onClose: (props) => setToastOpen(false),
        });
      }
    }
  };

  const fileUpload = (event) => {
    let files = [...event.dataTransfer.files];
  };
  const deleteUploads = (item) => {
    setShowModal(true);
    setDeleteItem(item);
  };
  const onCancel = (item) => {
    axios
      .post(
        "https://uat.c2mdr.com/c2mydrrestdemo/v1/c2mdapi/removereports",

        {
          requestType: 596,
          token: "C2MDVerificationToken",
          data: { filename: item?.title },
        }
      )
      .then((res) => {
        // if (res.data.info === "Success") {

        let filter1 = uploads.filter((obj) => {
          return obj.title != item.title;
        });
        let filter2 = fileItem.filter((value) => {
          return value != item.resName;
        });
        setUploads(filter1);
        setFileName(filter2);
        dispatch(
          Store_formData({
            ...appoinment_form,
            reports: filter2?.toString(),
            reportsArray: filter1,
          })
        );
        setShowModal(false);
        // } else {
        // }
      })
      .catch((error) => {});
  };

  const selectFiles = (file,index) => {
    if(selectedFiles.includes(file)){
      let x = [...selectedFiles]
      x = x.filter(function(el) { return el.filename != file.filename })
      let y = [...fileItem]
      y = y.filter(function(el) { return el.filename != file.filename })
      setSelectedFiles(x)
      setFileName(y)

    }else{
      setSelectedFiles([...selectedFiles,file])
      setFileName([...fileItem, file.filename]);
    }
  }

  const isSelected = (file) =>{
    // console.log(selectedFiles,file)
    // selectedFiles.filter(function(el) { return el.filename == file.filename })
    if(selectedFiles.some(item => item.filename === file.filename&&item.uploadRefId==file.uploadRefId)){
      return true;
    }
    return false;
  }

  console.log(uploadedData);

  return (
    <>
      <h3 className={Style.upload_reports_main_heading}>
        Do you have any reports to upload?
      </h3>
      <YesNoButton
        yes_btn_Change={yes_btn_Change}
        No_btn_Change={No_btn_Change}
        flag={reports.flag}
      />
      {reports.flag === "Yes" && (
        <>
          <Accordion
            defaultActiveKey="1"
            className={`${Style.upload_reports_accordion_align}`}
          >
            <Accordion.Item eventKey="0" className={`${uploads?.length==0&&Style.noFiles}`}>
              <Accordion.Header>
                <div className={Style.upload_button} onClick={()=>{fileInputRef.current.click()}}>
                  <input
                    type="file"
                    id="upload"
                    accept=".png, .jpg, .pdf"
                    ref={fileInputRef}
                    onChange={(e) => {
                      onFileChange(e.target.files[0]);
                    }}
                  />
                  <FileDrop
                    onFrameDragEnter={(event) =>
                      console.log("onFrameDragEnter", event)
                    }
                    onFrameDragLeave={(event) =>
                      console.log("onFrameDragLeave", event)
                    }
                    onFrameDrop={(event) => console.log("onFrameDrop", event)}
                    onDragOver={(event) => console.log("onDragOver", event)}
                    onDragLeave={(event) => console.log("onDragLeave", event)}
                    onDrop={(files, event) => {
                      onFileChange(files[0]);
                    }}
                  >
                    <label for="upload">
                      <img src={Assets.file_icon}></img>Open Files{" "}
                    </label>
                    <span className={Style.imageFormat}>
                      (Supported formats - PDF, PNG, JPEG, JPG, DOC, DOCX, DCM,
                      ZIP. File limits - 5 files of 5MB per file)
                    </span>
                  </FileDrop>
                </div>
                {/* <span className={Style.upload_reports_location_heading} onClick={fileUpload}>
                  <img
                    src={Assets.upload_icon}
                    className={Style.upload_reports_upload_icon}
                  ></img>
                  <span className={Style.upload_reports_dropdown_heading}>
                    Upload your reports here ({uploads.length} reports)
                  </span>
                </span> */}
              </Accordion.Header>
              <Accordion.Body>
                {uploads &&
                  uploads.map((item, index) => {
                    return (
                      <div
                        className={
                          Style.upload_reports_location_content_selected
                        }
                      >
                        <span className={Style.upload_reports_count}>
                          {index + 1}
                        </span>
                        <img
                          src={getFileTypeFromFileName(item.title)}
                          className={Style.upload_reports_pdf_icon}
                        ></img>
                        <span className={Style.upload_reports_dropdown_content}>
                          <span>{item.name}</span>
                          <span className={Style.upload_reports_description}>
                            {item.title} - {item.uploaded}
                          </span>
                        </span>
                        <figure>
                          <img
                            src={Assets.tick_icon}
                            className={Style.upload_reports_tick_icon}
                          ></img>
                        </figure>
                        <figure>
                          <img
                            src={Assets.deleteIcon}
                            className={Style.upload_reports_Delete_icon}
                            onClick={() => deleteUploads(item)}
                          />
                        </figure>
                      </div>
                    );
                  })}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={`${uploadedData?.length==0&&Style.noFiles}`}>
              <Accordion.Header>
                <span className={Style.upload_reports_location_heading}>
                  <img
                    src={Assets.upload_icon}
                    className={Style.upload_reports_upload_icon}
                  ></img>
                  <span className={Style.upload_reports_dropdown_heading}>
                    From My Uploads ({uploadedData?.length}
                    <span className={Style.reportsText}>reports</span>)
                  </span>
                </span>
              </Accordion.Header>
              <Accordion.Body>
                {uploadedData &&
                  uploadedData.map((item, index) => {
                    if(item.filename&&item.filename!=',')
                    {
                      return (
                        <div
                          className={`${Style.upload_reports_location_content_selected} ${isSelected(item)&&Style.active}`}
                          onClick={()=>{selectFiles(item,index)}}
                        >
                          <span className={Style.upload_reports_count}>
                            {index + 1}
                          </span>
                          <img
                            src={getFileTypeFromFileName(item.filename)}
                            className={Style.upload_reports_pdf_icon}
                          ></img>
                          <span className={Style.upload_reports_dropdown_content}>
                            <span>{item.filename}</span>
                            <span className={Style.upload_reports_description}>
                               {item.dateOfReport}
                            </span>
                          </span>
                          {isSelected(item)&&<figure>
                            <img
                              src={Assets.tick_icon}
                              className={Style.upload_reports_tick_icon}
                            ></img>
                          </figure>}
                        </div>
                      );
                    }
                    
                  })}

                {/* <div
                  className={Style.upload_reports_location_content_unselected}
                >
                  <span className={Style.upload_reports_count}>2</span>
                  <img
                    src={Assets.pdf_icon}
                    className={Style.upload_reports_pdf_icon}
                  ></img>
                  <span className={Style.upload_reports_dropdown_content}>
                    <span>Medical report</span>
                    <span className={Style.upload_reports_description}>
                      Uploaded - 18-8-2021
                    </span>
                  </span>
                </div> */}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <Button className={Style.upload_reports_open_files}>
                    <img src={Assets.file_icon}></img>
                    Open Files
            </Button> */}
          {/* <div className={Style.upload_button}>
            <input type="file" id="upload" ref={fileInputRef} onChange={(e)=>{onFileChange(e.target.files[0])}} />
            <FileDrop
          onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
          onFrameDrop={(event) => console.log('onFrameDrop', event)}
          onDragOver={(event) => console.log('onDragOver', event)}
          onDragLeave={(event) => console.log('onDragLeave', event)}
          onDrop={(files, event) => {console.log('onDrop!', files, event); onFileChange(files[0])}}
        >
            <label for="upload">
              <img src={Assets.file_icon}></img>Open Files
            </label>
            </FileDrop>
          </div> */}
          {error && (
            <div>
              {" "}
              <p className={Style.ShowErrormsg}>
                Please select image size less than 5 MB
              </p>
            </div>
          )}

          {showError && (
            <div>
              {" "}
              <p className={Style.ShowErrormsg}>Please upload report</p>
            </div>
          )}
          <div className={`${Style.btn_floating} btn_floating`}>
            <Button
              className={Style.upload_reports_continue_button}
              onClick={progressIncrementer}
              onClick={Continue}
            >
              Continue
            </Button>
          </div>
        </>
      )}
      <ConfirmModal
        showModal={showModal}
        setShowModal={setShowModal}
        onCancel={onCancel}
        deleteItems={deleteItems}
      />
    </>
  );
}

export default UploadReports;
