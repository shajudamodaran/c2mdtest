import React, { useEffect, useRef, useState } from 'react'
import './prescriptionform.css'
import axios from "axios";

import { notification, Popover, Tooltip } from 'antd';
import { AddIcon_Prescription, DeleteIcon_Prescription, LabelIcon_Prescription } from '../../assets/Logos/Icons';
import Modal from './Components/Modal/Modal';

import { Select } from 'antd';
import SuccessModal from './Components/SuccessModel/SuccessModal';

import moment from "moment";
import { useDispatch, useSelector } from 'react-redux';
import { getNumberOfDays, INVESTIGATION_HEAD, INVESTIGATION_TABLE_HEADING_COMMENTS, INVESTIGATION_TABLE_HEADING_NAME, MEDICINE_HEAD, MEDICINE_TABLE_HEADING_MEDICINE_DAYS, MEDICINE_TABLE_HEADING_MEDICINE_FREEQUANCY, MEDICINE_TABLE_HEADING_MEDICINE_INSTRUCTIONS, MEDICINE_TABLE_HEADING_MEDICINE_NAME, MEDICINE_TABLE_HEADING_MEDICINE_QUALITY, MEDICINE_TABLE_HEADING_MEDICINE_START_DATE, MEDICINE_TABLE_HEADING_MEDICINE_TYPE, MEDICINE_TABLE_HEADING_MEDICINE_UNIT, MEDICINE_TABLE_HEADING_MEDICINE_WHEN } from './Helpers/Constants';
// import { setInvestigationRedux, setMedicinesRedux, setSubmissionData, updateReduxData } from '../../Redux/Slice/SelectedDataSlice';

import {
    FileSearchOutlined,
    MedicineBoxOutlined,
    PlusCircleOutlined,
    UserOutlined
} from '@ant-design/icons';
import { getAddInvestigationButtonText, validateFormData, validateInvestigationtableForAddNewRow, validateMedicineTableForAddNewRow, validateNumberOnKeyPress } from './Helpers/helperFunctions';


import LoaderModel from './Components/LoaderModel/LoaderModel';
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import MuiAutoComplete from './Components/CustomeComponents/MuiAutoComplete';
import MuiDropdown from './Components/CustomeComponents/MuiDropdown';
import MuiDatePicker from './Components/CustomeComponents/MuiDatePicker';
import LmpdatePicker from './Components/CustomeComponents/LmpdatePicker';
import FailiureModal from './Components/FailiureModal/FailiureModal';
import { CLEAR_PRESCRIPTION, SET_DOCTORS, SET_SELECTED_DEPARTMENT, SET_SELECTED_DOCTORS, SET_SUBMISSION_DATA_PRESCRIPTION, UPDATE_INVESTIGATION_TABLE_DATA, UPDATE_MEDICINE_TABLE_DATA, UPDATE_REDUX_PRESCRIPTION } from '../../actions/type';
import { getDepartments, getDoctors } from '../../actions/PrescriptionFormActions';
import AutoCompleteWithCheckbox from './Components/CustomeComponents/AutoCompleteWithCheckbox';
import authHeader from '../../actions/auth-header';
// import NetworkErrorModal from './Components/NetworkErrorModal/NetworkErrorModal';


const useStyles = makeStyles(theme => ({
    quantityRoot: {
        color: "#FFFFFF",
        backgroundColor: "#ffffff",
        opacity: 0.6,
        borderRadius: "5px",
        outline: "0px !importanrt",
        "&:hover": {
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            opacity: 1,
            border: "0px !importanrt",
        },
        "&:focus-within": {

            borderRadius: "5px",
            opacity: 1,
            border: "0px !importanrt",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ffffff",
            border: "0px !importanrt",

        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ffffff",
            border: "0px !importanrt",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ffffff",
            borderRadius: "5px 5px 0 0",
            border: "0px !importanrt",
        },
        "& .Mui-disabled": {
            color: "#FFFFFF",
            opacity: 0.6,
            border: "0px !importanrt",
        },
        "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #ff0000",
            border: "0px !importanrt",
        },

    },
    selectRoot: {
        color: "#FFFFFF",
        border: 0,

        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #484850",
            borderRadius: "5px 5px 0 0"
        },
    },
    icon: {
        color: "#FFFFFF"
    },
    selectPaper: {
        backgroundColor: "#ffffff",
        border: "1px solid #ffffff",
        borderRadius: "5px",
        color: "#FFFFFF",
        "& li:hover": {
            backgroundColor: "#ffffff"
        }
    }
}
));



const { Option } = Select;

function PriscriptionForm({ preloadData, backAction, setEditMode }) {

    const dispatch = useDispatch()
    let history = useHistory()

    let [finalInvestigations, setFinalInvestigation] = useState([])
    let [finalMedicinesdata, setFinalMedicinesdata] = useState([])
    let [params, setParams] = useState(JSON.parse(localStorage.getItem("basicinfo")))

    let [isreadyToValidate, setReadyToValidate] = useState({
        templateName: false,
        doctos: false,
        department: false
    })


    const { selectedDataInvestigation, selectedDataMedicines, submissionData, investigationData, medicinesData } = useSelector((state) => state?.presctiptionFormReducer)
    const { selectedDoctors, selectedDepartment } = useSelector((state) => state?.presctiptionFormReducer)
    let leftMenus =
        [
            { name: "Patient Reports", icon: <UserOutlined /> },
            { name: "Investigations", icon: <FileSearchOutlined /> },
            { name: "Medicines", icon: <MedicineBoxOutlined /> },
            { name: "Additional Instructions", icon: <PlusCircleOutlined /> },
        ]

    let [isNetworkError, setNetworkError] = useState(true)

    useEffect(() => {

        let _params = JSON.parse(localStorage.getItem("basicinfo"));

        if (_params) {
            setNetworkError(false)
        }
        else {
            setNetworkError(true)
        }


    }, [])


    let [activeLeft, setActiveLeft] = useState(leftMenus[0].name)

    let [isConfirmDelete, setConfirmDelete] = useState(false)
    let [deleteIndex, setDeleteIndex] = useState(null)

    let [isConfirmDeleteMedicine, setConfirmDeleteMedicine] = useState(false)
    let [deleteIndexMedicine, setDeleteIndexMedicine] = useState(null)

    let [deletingFrom, setDeletingFrom] = useState(null)

    let [isSuccess, setSuccess] = useState(false)
    let [successMessage, setSuccessMessage] = useState("")
    let [isFailed, setFailed] = useState(false)
    let [isdisabled, setDisabled] = useState(false)
    let [test, settest] = useState(false)
    let [medicine, setMedicine] = useState(false)
    const [presciptioninfor, setPrescriptioninfo] = useState({
        height: "",
        weight: "",
        lmp: "",
        cheifcomplaints: "",
        relevantpointfromhistory: "",
        diagnosis: "",
        examinationlabfindings: "",
        additionalinstrunction: "",
        doctorName: params?.doctorname,
        registrationnumber: params?.registrationnumber,
        qualification: params?.qualification,
        patientname: params?.patientname,
        gender: params?.gender,
        age: params?.age,
        appointmentdate: params?.appointmentdate,
        appointmenttime: params?.appointmenttime,
        patientNO: params?.patientno,
        doctorcode: params?.doctorcode,
        appointmentID: params?.appointmentID,
        medicine: [],
        labTest: []
    });

    let [isReadyToSubmit, setRedyToSubmit] = useState(false)

    let [isDropDown, setDropDownClass] = useState({ status: false, key: 0 })

    let [isReadtToAddMedicine, setReadytoAddMedicine] = useState({ status: false })
    let [isReadyToAddInvestigation, setReadytoAddInvestigation] = useState(null)
    let [isLoading, setLoading] = useState(false)

    let [scrollAmount, setScrollAmount] = useState(0)

    let [selectedLmp, setSelectedLmp] = useState(null)

    let [preloadPrescription, setPreloadPrescription] = useState(preloadData)

    let [departmentsArray, setDepartmentsArray] = useState([])

    let [selectedDepartmentName, setSelectedDepartmentName] = useState(null)

    let [doctorsArray, setDoctors] = useState([])
    let [selectedDr, setDr] = useState([])


    let [templateName, setTemplateName] = useState(null)

    let [validationError, setvalidatoinError] = useState(
        {
            department: null,
            doctors: null,
            templateName: null
        }
    )


    let selectedDoctor = []




    useEffect(() => {

        loadmedicine()
        loadtest()
        //checkForLastPrescription()
        loadDepartments()

    }, []);



    useEffect(() => {

        if (preloadPrescription) {

            populatePreloadData()

        }
        else {
            clearPrepopulateddate()
        }

    }, [preloadPrescription])




    useEffect(() => {

        let result = validateMedicineTableForAddNewRow(medicinesData)

        console.log(result);

        setReadytoAddMedicine(result)
        setFinalMedicinesdata([])
        setFinalMedicinesdata(medicinesData)

    }, [medicinesData])



    useEffect(() => {

        let result = validateInvestigationtableForAddNewRow(investigationData)

        setReadytoAddInvestigation(result.status)

        setFinalInvestigation([])
        setFinalInvestigation(investigationData)

    }, [investigationData])






    const tests = [];
    const medicines = [];
    const units = ["GRAMS", "MCG", "MG", "MG/ML", "ML", "NUM", "μm", "PERCENTAGE",];
    const frequecny = ["30 Minutes Before Breakfast ", "30 Minutes Before Dinner", "30 Minutes Before Food ", "30 Minutes Before Lunch ", "6 hr for fever > 100 f ", "After Dinner", "After Food ", "After Lunch ", "As Directed ", "Before Food ", "Every fourth hourly ", "For immediate use", "Four Times Daily", "Half a Day-Evening ", "Half a Day-Evening and Noon ", "Half a Day-Morning ", "Half a Day-Morning and Evening ", "Half a Day-Morning and Noon ", "Half a Day-Noon ", "Half tablet, thrice daily", "Hourly ", "On Alternate Days", "On Empty Stomach", "Once Daily - Evening", "Once Daily - Morning", "Once Daily - Morning and Evening", "Once Daily - Night ", "Once Daily - Noon", "Once a Month", "Once a Week ", "SOS ", "Thrice a Day", "Thrice Daily", "Thrice Weekly", "Twice a Day - Noon and Night", "Twice Daily ", "Twice Daily - Morning and Evening", "Twice Daily - Morning and Night ", "Twice Daily - Morning and Noon ", "Twice Daily - Noon and Evening ", "Twice Weekly", "Use when required", "With First Bite of Food "]


    function loadtest() {
        axios.post("https://uat.c2mdr.com/c2mydrrestdemo/v1/c2mdapi/getbethanylabtest", {
            token: "token",
            data: {
                isFromMobile: true,
                clinicId: "Bethany",
                basicinfo: {
                    doctorName: presciptioninfor.doctorName,
                    registrationnumber: presciptioninfor.registrationnumber,
                    qualification: presciptioninfor.qualification,
                    patientname: presciptioninfor.patientname,
                    gender: presciptioninfor.gender,
                    age: presciptioninfor.age,
                    appointmentdate: presciptioninfor.appointmentdate,
                    appointmenttime: presciptioninfor.appointmenttime,
                    patientNO: presciptioninfor.patientNO,
                    doctorcode: presciptioninfor.doctorcode,
                    appointmentID: presciptioninfor.appointmentID

                }

            },
            requestType: 234,
        })
            .then((result) => {


                result.data.data.map((obj2, key) => {

                    tests.push(obj2.testname);

                });
                settest([...new Set(tests)]);



            })
            .catch((err) => {
                // Do somthing
            })
    }
    function onChange(date, dateString) {

        setPrescriptioninfo({ ...presciptioninfor, lmp: dateString })
    }

    function loadmedicine() {

        axios.post("https://uat.c2mdr.com/c2mydrrestuat/v1/c2mdapi/getbethanymedicinelist", {
            token: "token",
            data: {
                type: "DRUGS",
                clinicId: "Bethany",
                basicinfo: {
                    doctorName: presciptioninfor.doctorName,
                    registrationnumber: presciptioninfor.registrationnumber,
                    qualification: presciptioninfor.qualification,
                    patientname: presciptioninfor.patientname,
                    gender: presciptioninfor.gender,
                    age: presciptioninfor.age,
                    appointmentdate: presciptioninfor.appointmentdate,
                    appointmenttime: presciptioninfor.appointmenttime,
                    patientNO: presciptioninfor.patientNO,
                    doctorcode: presciptioninfor.doctorcode,
                    appointmentID: presciptioninfor.appointmentID

                }

            },
            requestType: 233,
        })
            .then((result) => {




                result.data.data.description.map((obj2, key) => {


                    medicines.push(obj2);
                });



                setMedicine([...new Set(medicines)]);

            })
    }

    const mm = ["DRUGS", "tesdt"];

    let [labtest, setLabtest] = useState([
        {
            testType: "",
            testNames: "",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.",
            id: 3
        }
    ])



    let addInvestigation = () => {

        setActiveLeft(leftMenus[1].name)



        if (investigationData.length <= 0) {

            let newArray = [...investigationData, {
                name: null,
                comment: null,
                id: investigationData.length
            }]

            dispatch({
                type: UPDATE_INVESTIGATION_TABLE_DATA,
                payload: newArray
            });


        }

        else if (investigationData[investigationData.length - 1].name != null) {


            let newArray = [...investigationData, {
                name: null,
                comment: null,
                id: investigationData[investigationData.length - 1].id + 1
            }]

            dispatch({
                type: UPDATE_INVESTIGATION_TABLE_DATA,
                payload: newArray
            });


        }
        else {

            // notification.error({
            //     message: `Investigation table is incomplete`,
            //     description:
            //         'Please fill the all fields in investigation table inorder to add new row.',
            //     placement: "bottomRight",
            // });

        }


    }



    let removeInvestigation = (id) => {

        setDeleteIndex(id)
        setConfirmDelete(true)
        setDeletingFrom(INVESTIGATION_HEAD)


    }



    let addMedicine = () => {

        setActiveLeft(leftMenus[2].name)



        if (medicinesData.length <= 0) {

            let newArray = [...medicinesData, {
                id: medicinesData.length,
                type: null,
                name: null,
                when: null,
                freequancy: null,
                quantity: null,
                unit: null,
                date: null,
                days: null,
                instructions: null
            }]

            dispatch({
                type: UPDATE_MEDICINE_TABLE_DATA,
                payload: newArray
            });

            MedicineElement.current.scrollLeft = 0


        }

        else if (medicinesData[medicinesData.length - 1].name != null) {



            let newArray = [...medicinesData, {
                id: medicinesData[medicinesData.length - 1].id + 1,
                type: null,
                name: null,
                when: null,
                freequancy: null,
                quantity: null,
                unit: null,
                date: null,
                days: null,
                instructions: null
            }]

            dispatch({
                type: UPDATE_MEDICINE_TABLE_DATA,
                payload: newArray
            });

            MedicineElement.current.scrollLeft = 0






        }
        else {

            notification.error({
                message: `Medicines table is incomplete`,
                description:
                    'Please fill the all fields in Medicines table inorder to add new row.',
                placement: "bottomRight",
            });


        }




    }

    let removeMedicine = (id) => {

        setDeleteIndexMedicine(id)
        setConfirmDeleteMedicine(true)
        setDeletingFrom(MEDICINE_HEAD)


    }

    var selectmedicine = []
    var selectlabtest = []

    let validateForSubmitButton = () => {

        let result = validateFormData(submissionData, investigationData, medicinesData)
        result ? setRedyToSubmit(true) : setRedyToSubmit(false)

    }

    useEffect(() => {
        validateForSubmitButton()
    }, [investigationData, medicinesData])



    async function saveprescription() {


        setLoading(true)

        console.log("No value is missing. Ready to submit");

        console.log("Other basic informations (Also update included)==>", submissionData);

        console.log("Investigation Table Data (Also update included)==>", investigationData);

        console.log("Medicine Table Data (Also update included)==>", medicinesData);




        medicinesData.map((obj, key) => {

            if (obj.name != null) {
                selectmedicine.push({
                    StartVal: obj.date !== null ? obj.date : "",
                    StrengthVal: '',
                    displayTablet: obj.freequancy != null ? obj.freequancy : "",
                    isPermitted: false,
                    measurement: obj.unit != null ? obj.unit : "",
                    mediComment: obj.instructions != null ? obj.instructions : "",
                    medtakeMethod: obj.when != null ? obj.when : "",
                    name: obj.name,
                    quandity: obj.quantity != null ? obj.quantity : "",
                    totalDays: obj.days != null ? obj.days : "",
                    type: "DRUGS"
                })
            }
        });

        investigationData.map(savedLabTest => {
            if (savedLabTest.name != null) {
                selectlabtest.push({
                    testType: savedLabTest.name,
                    testNames: "",
                    testComment: savedLabTest.comment != null ? savedLabTest.comment : ""
                })
            }
        })

        setPrescriptioninfo({ ...presciptioninfor, medicine: selectmedicine })
        setPrescriptioninfo({ ...presciptioninfor, labTest: selectlabtest })

        let requestdata = {
            attachementArrs: [],
            consultationDetails: {
                doctor_suggestion: "",
                chiefcomplaints: submissionData.chiefComplaints != null ? submissionData.chiefComplaints : "",
                diagnosis: submissionData.diagnosis != null ? submissionData.diagnosis : "",
                investigation: submissionData.examination != null ? submissionData.examination : "",
                notes: submissionData.releventPoint != null ? submissionData.releventPoint : "",
                instruction: submissionData.additionalInstruction != null ? submissionData.additionalInstruction : "",
                share: true,
                privateMessage: "",
                weight: submissionData.weight.value != null ? submissionData.weight.value + " " + submissionData.weight.unit : "",
                height: submissionData.height.value != null ? submissionData.height.value + " " + submissionData.height.unit : "",
                lmp: submissionData.lmp != null ? submissionData.lmp : "",
                medicine: selectmedicine,
                labTest: selectlabtest
            },
            basicinfo: {
                doctorName: presciptioninfor.doctorName,
                registrationnumber: presciptioninfor.registrationnumber,
                qualification: presciptioninfor.qualification,
                patientname: presciptioninfor.patientname,
                gender: presciptioninfor.gender,
                age: presciptioninfor.age,
                appointmentdate: presciptioninfor.appointmentdate,
                appointmenttime: presciptioninfor.appointmenttime,
                patientNO: presciptioninfor.patientNO,
                doctorcode: presciptioninfor.doctorcode,
                appointmentID: presciptioninfor.appointmentID

            }
        }

        let dummyParams = { "token": "token", "data": { "prescriptionDetails": { "attachementArrs": [], "consultationDetails": { "doctor_suggestion": "", "chiefcomplaints": "CAME FOR FITNESS FOR WIDE LOCAL EXCISION OF LEFT BUCCAL MUCOSA", "diagnosis": "", "investigation": "BP 130/76 MM HG\nRS AND CVS NAD\nCBC 13.7/5500/254000 ESR 10 RBS 108\nCREAT 0.8 INR 1.19 VM NR\nECG NOTED HRCT CHEST NAD\n2D ECHO EF 60%, MILD LVH", "notes": "HT ON TAZLOC H OD\nNO H/O COVID\nALLERGY TO MEDICINE NOT KNOWN\nNON SMOKER\nCOVID VACCINATION+", "instruction": "CAN GO AHEAD WITH SURGERY WITH DUE RISK", "share": true, "privateMessage": "", "weight": "", "height": "", "lmp": "", "medicine": [], "labTest": [] }, "basicinfo": { "doctorName": "DR. KULDEEP  DALAL", "registrationnumber": "2003/07/2759", "qualification": "M.D.(Gen.Med.), F.N.B.(Crit.Care), F.C.C.P.", "patientname": "MR. AJAY . RAJE", "gender": "Male", "age": "59", "appointmentdate": "21-Mar-2022", "appointmenttime": "11:45 AM", "patientNO": "1225133", "doctorcode": "128", "appointmentID": "883727" } }, "browserTimeZone": "" }, "browserTimeZone": "", "requestType": 235 }


        console.log(requestdata);

        // try {
        //     axios.post("https://uat.c2mdr.com/c2mydrrestuat/v1/c2mdapi/saveprescription", requestdata)
        //         .then((result) => {

        //             console.log(result);

        //             if (result) {


        //                 if (result.data.data.info === "Updated Successfully") {
        //                     //   setSuccess(true)

        //                     setLoading(false)
        //                     // setSuccess(true)

        //                     navigate("/success");


        //                     // setTimeout(function () {
        //                     //     resetPage();
        //                     // }, 3000);

        //                 }
        //                 else if(result.data.data.info==="Prescription already Saved. No changes Found") {

        //                     //  setSuccess(false)
        //                     setLoading(false)
        //                     setFailed(true)

        //                 }
        //                 // console.log(result)
        //             }
        //             else {

        //             }

        //         })

        // } catch (error) {

        //     console.log(error);

        // }
        //       navigate("/c2mydrprescription/success");

        try {
            axios.post("https://uat.c2mdr.com/c2mydrrestuat/v1/c2mdapi/saveprescription", {
                token: "token",
                data: {

                    prescriptionDetails: requestdata,
                    browserTimeZone: '',

                },
                browserTimeZone: '',
                requestType: 235,
            })
                .then((result) => {

                    console.log(result);

                    if (result) {

                        if (result.data.data.info === "Updated Successfully") {
                            //   setSuccess(true)

                            setLoading(false)
                            // setSuccess(true)

                            history.push("/success");


                            // setTimeout(function () {
                            //     resetPage();
                            // }, 3000);

                        }
                        else if (result.data.data.info === "Prescription already saved. No changes found") {

                            //  setSuccess(false)
                            setLoading(false)
                            setFailed(true)

                        }
                        // console.log(result)
                    }
                    else {

                    }

                })

        } catch (error) {

            console.log(error);
            setSuccess(true)
        }









    }

    function handleChangeWeight(value) {
        // console.log(`selected ${value}`);
    }

    let InvestigationTextAreaOnChange = ({ data, id }) => {

        updateReduxSelect({
            head: INVESTIGATION_HEAD,
            id,
            tittle: INVESTIGATION_TABLE_HEADING_COMMENTS,
            value: data
        })

    }

    let InvestigationNameOnChange = ({ data, id }) => {

        updateReduxSelect({
            head: INVESTIGATION_HEAD,
            id,
            tittle: INVESTIGATION_TABLE_HEADING_NAME,
            value: data
        })

        // console.log(data, id);

    }

    let MedicineOnChange = ({ data, id, tittle }) => {

        // console.log(data);

        updateReduxSelect({
            head: MEDICINE_HEAD,
            id,
            tittle,
            value: data
        })

        console.log(data, id, tittle);

    }


    let updateReduxSelect = ({ head, id, tittle, value }) => {

        //dispatch(UPDATE_REDUX_PRESCRIPTION({ head, id, tittle, value }))

        dispatch({
            type: UPDATE_REDUX_PRESCRIPTION,
            payload: { head, id, tittle, value }
        });


    }


    const MedicineElement = useRef();
    const InvestigationElement = useRef();
    const AddInstructionElement = useRef();
    const ScrollElement = useRef();


    let focusElement = (para_element) => {

        console.log(InvestigationElement);

        switch (para_element) {

            case leftMenus[0].name:
                ScrollElement.current.scrollTop = 0
                break;

            case leftMenus[1].name:
                ScrollElement.current.scrollTop = InvestigationElement.current.offsetTop
                break;

            case leftMenus[2].name:
                ScrollElement.current.scrollTop = MedicineElement.current.offsetTop
                break;

            case leftMenus[3].name:
                AddInstructionElement.current.focus()
                ScrollElement.current.scrollTop = 3000
                break;

            default:
                break;
        }

    }


    let onChangeSubmissiondata = (key, value) => {



        if (key === "additionalInstruction") {
            pointToSection(3)
        }
        else {
            pointToSection(0)
        }

        dispatch({
            type: SET_SUBMISSION_DATA_PRESCRIPTION,
            payload: { [key]: value }
        });

        validateForSubmitButton()


        //dispatch(setSubmissionData({ [key]: value }))

    }

    let onChangeSubmissiondataHeightWidth = (key, value) => {

        pointToSection(0)

        dispatch({
            type: SET_SUBMISSION_DATA_PRESCRIPTION,
            payload: { [key]: { ...submissionData[key], value } }
        });


        //dispatch(setSubmissionData({ [key]: { ...submissionData[key], value } }))

    }

    let onChangeSubmissiondataHeightWidthUnit = (key, unit) => {


        // console.log(key, unit);
        pointToSection(0)

        dispatch({
            type: SET_SUBMISSION_DATA_PRESCRIPTION,
            payload: { [key]: { ...submissionData[key], unit } }
        });
        //dispatch(setSubmissionData({ [key]: { ...submissionData[key], unit } }))

    }


    let updateInvestigationTable = ({ id, data, key, state }) => {

        pointToSection(1)
        let newArray = JSON.parse(JSON.stringify(investigationData));
        newArray[id][key] = data ? data : null
        //dispatch(setInvestigationRedux(newArray))
        dispatch({
            type: UPDATE_INVESTIGATION_TABLE_DATA,
            payload: newArray
        });

        validateForSubmitButton()

    }

    let updateMedicineTable = ({ id, data, key }) => {

        // let newArray = medicinesList
        // newArray[id].assign({ [key]: data })
        // setMedicinesList(newArray)

        pointToSection(2)
        console.log(id, key, moment.isMoment(data) ? data.toDate() : data);


        let newArray = JSON.parse(JSON.stringify(medicinesData));
        console.log(newArray)
        newArray[id][key] = data ? data : null

        dispatch({
            type: UPDATE_MEDICINE_TABLE_DATA,
            payload: newArray
        });
        //dispatch(setMedicinesRedux(newArray))
        validateForSubmitButton()



    }


    let resetPage = () => {

        window.location.reload();


    }

    useEffect(() => {

        if (medicinesData.length <= 1) {
            MedicineElement.current.scrollLeft = 0
        }

    }, [medicinesData])


    let pointToSection = (id) => {

        setActiveLeft(leftMenus[id ? id : 0].name)
    }

    const classes = useStyles();


    const noInvestigationPopOver = (
        <div>
            <div>Complete investigation table to add new row</div>
        </div>
    );


    const noMedicinePopOver = (
        <div>
            <div>Complete medicines table to add new row</div>
        </div>
    );


    let refreshPage = () => {
        window.location.reload(true);
    }


    // LOAD LAST PRESCRIPTION Functionalities............................................................

    let checkForLastPrescription = () => {

        let params =
        {
            "requestType": "1054",
            "version": 1,
            "data": {
                "AppId": "89",
                "doctorcode": "176",
                "patientNO": "1003944"
            }
        }

        axios.post("https://uat.c2mdr.com/c2mydrrestuat/v1/c2mdapi/preloadprescription", params)
            .then((result) => {

                setPreloadPrescription(result.data.data?.prescriptionDetails)

                console.log(result.data.data?.prescriptionDetails);


            })

    }

    let populatePreloadData = () => {

        console.log(preloadPrescription);

        if (preloadPrescription) {

            let dep_id = null

            setSelectedDepartmentName(preloadPrescription?.department.Name)

            dispatch({
                type: SET_SELECTED_DEPARTMENT,
                payload: preloadPrescription.department.Id
            });


            loadDoctors(preloadPrescription.department.Id)

            dispatch({
                type: SET_SELECTED_DOCTORS,
                payload: getElementArray(preloadPrescription?.doctors, "Id")
            });

            setTemplateName(preloadPrescription.basicinfo.templateName)


            setParams(
                {
                    ...params,
                    patientname: preloadPrescription?.basicinfo?.patientname,
                    age: preloadPrescription?.basicinfo?.age,
                    gender: preloadPrescription?.basicinfo?.gender,
                    patientno: preloadPrescription?.basicinfo?.patientNO
                }
            )

            onChangeSubmissiondataHeightWidth("height", preloadPrescription?.consultationDetails?.height)
            onChangeSubmissiondataHeightWidth("weight", preloadPrescription?.consultationDetails?.weight)

            if (preloadPrescription?.consultationDetails?.lmp) { setSelectedLmp(preloadPrescription?.consultationDetails?.lmp) }

            if (preloadPrescription?.consultationDetails?.chiefcomplaints) { onChangeSubmissiondata("chiefComplaints", preloadPrescription?.consultationDetails?.chiefcomplaints) }

            if (preloadPrescription?.consultationDetails?.notes) { onChangeSubmissiondata("releventPoint", preloadPrescription?.consultationDetails?.notes) }

            if (preloadPrescription?.consultationDetails?.diagnosis) { onChangeSubmissiondata("diagnosis", preloadPrescription?.consultationDetails?.diagnosis) }

            if (preloadPrescription?.consultationDetails?.investigation) { onChangeSubmissiondata("examination", preloadPrescription?.consultationDetails?.investigation) }

            //Investigation table population
            if (preloadPrescription?.consultationDetails?.labTest && preloadPrescription?.consultationDetails?.labTest.length > 0) {


                let newArray = []

                preloadPrescription.consultationDetails.labTest.map((element, key) => {

                    newArray.push({
                        name: element.testType,
                        comment: element.testComment,
                        id: key
                    })


                })



                //dispatch(setInvestigationRedux(newArray))
                dispatch({
                    type: UPDATE_INVESTIGATION_TABLE_DATA,
                    payload: newArray
                });
            }

            //Medicine table population
            if (preloadPrescription?.consultationDetails?.medicine && preloadPrescription?.consultationDetails?.medicine.length > 0) {

                let newArray = []

                preloadPrescription?.consultationDetails?.medicine.map((element, key) => {

                    newArray.push({
                        id: key,
                        type: element.type,
                        name: element.name,
                        when: element.medtakeMethod,
                        freequancy: element.displayTablet,
                        quantity: element.quandity,
                        unit: element.measurement,
                        date: element.StartVal,
                        days: element.totalDays,
                        instructions: element.mediComment
                    })

                })

                //dispatch(setMedicinesRedux(newArray))
                dispatch({
                    type: UPDATE_MEDICINE_TABLE_DATA,
                    payload: newArray
                });

            }

            if (preloadPrescription?.consultationDetails?.instruction) { onChangeSubmissiondata("additionalInstruction", preloadPrescription?.consultationDetails?.instruction) }




        }



    }



    let clearPrepopulateddate = () => {

        dispatch({ type: CLEAR_PRESCRIPTION })
        setSelectedDepartmentName(null)
        setTemplateName("")


    }



    let loadDepartments = () => {

        dispatch(getDepartments()).then((res) => {

            console.log(res);
            setDepartmentsArray(res)

        })

    }

    let loadDoctors = (_id) => {

        dispatch(getDoctors({ department_id: _id })).then((res) => {

            console.log(res);

            dispatch({
                type: SET_SELECTED_DOCTORS,
                payload: doctorObjectToArray(res)
            });


            dispatch({
                type: SET_DOCTORS,
                payload: res
            });

            setDoctors(res)

        })

    }


    let departmentObjectToArray = (obj) => {

        let result = []

        if (obj) {
            obj.map((element) => {

                result.push(element.departmentName)

            })
        }

        return result


    }

    let doctorObjectToArray = (obj) => {

        let result = []

        if (obj) {
            obj.map((element) => {

                result.push(element.doctorId)

            })
        }

        return result


    }



    let handleDepartmentOnChange = (data) => {
        console.log(data.data);

        let dep_id = departmentsArray.filter((element) => element.departmentName == data.data)

        dispatch({
            type: SET_SELECTED_DEPARTMENT,
            payload: dep_id[0]
        });
        setSelectedDepartmentName(dep_id[0].departmentName)

        loadDoctors(dep_id[0].departmentId)


    }


    let createPrescription = () => {


        let submitStatus = validateForm()

        setReadyToValidate({
            templateName: true,
            doctos: true,
            department: true
        })


        if (submitStatus) {
            setLoading(true)

            let _selectlabtest = []

            investigationData.map(savedLabTest => {
                if (savedLabTest.name != null) {
                    _selectlabtest.push({
                        testType: savedLabTest.name,
                        testNames: "",
                        testComment: savedLabTest.comment != null ? savedLabTest.comment : ""
                    })
                }
            })


            let _selectmedicine = []

            medicinesData.map((obj, key) => {

                if (obj.name != null) {
                    _selectmedicine.push({
                        StartVal: obj.date !== null ? obj.date : "",
                        StrengthVal: '',
                        displayTablet: obj.freequancy != null ? obj.freequancy : "",
                        isPermitted: false,
                        measurement: obj.unit != null ? obj.unit : "",
                        mediComment: obj.instructions != null ? obj.instructions : "",
                        medtakeMethod: obj.when != null ? obj.when : "",
                        name: obj.name,
                        quandity: obj.quantity != null ? obj.quantity : "",
                        totalDays: obj.days != null ? obj.days : "",
                        type: "DRUGS"
                    })
                }
            });



            let dataToSubmit = {
                data: {
                    prescriptionDetails: {
                        "attachementArrs": [],
                        "consultationDetails": {
                            "doctor_suggestion": "",
                            chiefcomplaints: submissionData.chiefComplaints != null ? submissionData.chiefComplaints : "",
                            diagnosis: submissionData.diagnosis != null ? submissionData.diagnosis : "",
                            investigation: submissionData.examination != null ? submissionData.examination : "",
                            notes: submissionData.releventPoint != null ? submissionData.releventPoint : "",
                            instruction: submissionData.additionalInstruction != null ? submissionData.additionalInstruction : "",
                            share: true,
                            privateMessage: "",
                            //weight: submissionData.weight.value != null ? submissionData.weight.value + " " + submissionData.weight.unit : "",
                            //height: submissionData.height.value != null ? submissionData.height.value + " " + submissionData.height.unit : "",
                            lmp: submissionData.lmp != null ? submissionData.lmp : "",
                            labTest: _selectlabtest,
                            medicine: _selectmedicine
                        },
                        basicinfo: {
                            "departmentId": selectedDepartment?.departmentId,
                            "doctorIds": selectedDoctors.toString(),
                            "templateName": templateName
                        }
                    },
                    "browserTimeZone": ""
                },
                "browserTimeZone": "",
                "version":"2",
                "requestType": preloadData ? 1066 : 1061
            }

            if (preloadData) {
                dataToSubmit.data.prescriptionDetails.basicinfo.templateId = preloadData.tempId

            }

            try {
                axios.post(`https://uat.c2mdr.com/c2mydrrestuat/v1/c2mdapi/${preloadData ? "updatetemplate" : "createtemplate"}`, dataToSubmit, { headers: authHeader() })
                    .then((result) => {

                        console.log(result);

                        setLoading(false)
                        setSuccessMessage(result.data.data.info)
                        setSuccess(true)

                        setReadyToValidate({
                            templateName: false,
                            doctos: false,
                            department: false
                        })




                    })




            } catch (error) {

                console.log(error);

                setSuccess(true)
            }


        }
        else {

            ScrollElement.current.scrollTop = 0
        }



    }


    let handleDoctorChange = (e) => {

        console.log(e);

        if (e) {
            setDr(e)
        }


    }




    let validateForm = () => {


        let _validationError = {
            department: null,
            doctors: null,
            templateName: null
        }

        //validate departmentName......................................
        if (!selectedDepartmentName) {
            _validationError.department = "* Please select department."
        }
        else {

            _validationError.department = null

        }


        //validate templateName......................................
        if (!templateName) {

            _validationError.templateName = "* Template name can't be empty."
        }
        else {
            _validationError.templateName = null
        }


        //validate doctors................................................
        if (selectedDoctors.length <= 0) {

            _validationError.doctors = "*Please select doctors."
        }
        else {

            _validationError.doctors = null
        }



        setvalidatoinError(_validationError)

        if (_validationError.department || _validationError.doctors || _validationError.templateName) {
            return false
        }
        else {
            return true
        }


    }



    useEffect(() => {

        if (isreadyToValidate.templateName) {
            if (!templateName) {

                setvalidatoinError({ ...validationError, templateName: "* Template name can't be empty." })
                // _validationError.templateName = "* Template name can't be empty."
            }
            else {
                setvalidatoinError({ ...validationError, templateName: null })
            }
        }

    }, [templateName])


    useEffect(() => {

        if (isreadyToValidate.templateName) {
            if (selectedDoctors.length <= 0) {

                setvalidatoinError({ ...validationError, doctors: "*Please select doctors." })
                // _validationError.templateName = "* Template name can't be empty."
            }
            else {
                setvalidatoinError({ ...validationError, doctors: null })
            }
        }

    }, [selectedDoctors.length])

    useEffect(() => {

        if (isreadyToValidate.templateName) {
            if (!selectedDepartmentName) {

                setvalidatoinError({ ...validationError, department: "* Please select department." })
                // _validationError.templateName = "* Template name can't be empty."
            }
            else {
                setvalidatoinError({ ...validationError, department: null })
            }
        }

    }, [selectedDepartmentName])






    let EmptySpace = () => {
        return (
            <span>&nbsp;&nbsp;</span>
        )
    }

    let getDepartmentNameFromId = (_id, searchArray) => {

        let obj = searchArray.filter((element) => element.departmentId == _id)

        setSelectedDepartmentName(obj[0]?.departmentName)



    }

    let getElementArray = (data, key) => {

        let newArray = []

        if (data) {
            data.map((element) => {

                newArray.push(element[key])

            })

            return newArray

        }

    }

    let handleTemplateNameChange = (e) => {

        setTemplateName(e.target.value)


    }


    console.log(selectedDoctors.length, selectedDepartmentName);

    return (
        <div className="prescription-form-main-container">


            <div className='prescription-form-container' style={{ width: "100%" }}>




                <div className="prescription-form-content-container">
                    <div
                        // onScroll={(e) => { setScrollAmount(e.target.scrollTop) }}
                        className="prescription-form-content" ref={ScrollElement}>





                        <div className="container">

                        </div>

                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            width: "100%",
                            padding: "1rem",

                            position: "relative",
                            minWidth: "100%",
                            flexWrap: "wrap"
                        }}>



                            <div></div>

                            {/* Old name and other details......................................................................... */}

                            {/* <ul onClick={() => { setActiveLeft(leftMenus[0].name) }} className='details-list'>

                                <li>
                                    <span className='form-caption'>PATIENT NAME</span>
                                    <span className='form-small-tittle' >{params ? params.patientname : <span>&nbsp;</span>}</span>
                                </li>

                                <li>
                                    <span className='form-caption'>AGE</span>
                                    <span className='form-small-tittle'>{params ? params.age : <span>&nbsp;</span>} yrs</span>
                                </li>

                                <li>
                                    <span className='form-caption'>GENDER</span>
                                    <span className='form-small-tittle'>{params ? params.gender : <span>&nbsp;</span>}</span>
                                </li>

                                <li>
                                    <span className='form-caption'>PATIENT NUMBER</span>
                                    <span className='form-small-tittle'>{params ? params.patientno : <span>&nbsp;</span>}</span>
                                </li>
                            </ul> */}

                            {/* Newly added dropdowns......................................................................... */}

                            <ul className='report-list shadow-underline'>
                                <li>
                                    <div>
                                        <span className='form-small-tittle' >Choose Speciality <span style={{ color: "red" }}>*</span> </span>
                                        <span className='form-caption'></span>
                                    </div>

                                    <Tooltip title={selectedDepartmentName}>
                                        <div className={`form-light-background ${validationError.department ? "form-error" : null}`}>


                                            <MuiAutoComplete
                                                placeholder="Select speciality"
                                                // id={key}
                                                isSpeciality
                                                value={selectedDepartmentName}
                                                data={departmentsArray.length > 0 ? departmentObjectToArray(departmentsArray) : []}
                                                onChange={handleDepartmentOnChange}
                                                name='name' />


                                        </div>
                                    </Tooltip>
                                    <span className='prescription-form-error'>
                                        {validationError.department ? validationError.department : <EmptySpace />}
                                    </span>

                                </li>

                                <li>
                                    <div>
                                        <span className='form-small-tittle' >Choose Doctor <span style={{ color: "red" }}>*</span></span>
                                        <span className='form-caption' ></span>
                                    </div>

                                    <div className={`form-light-background ${validationError.doctors ? "form-error" : null}`}>


                                        {/* <MuiDropdown
                                            style={{ width: "227px" }}
                                            // value={submissionData.weight?.unit}
                                            placeholder="Select doctor"
                                            data={['Data 1', 'Data 2', 'Data 3']}
                                            name=""
                                        //onChange={onChangeSubmissiondataHeightWidthUnit} 
                                        /> */}
                                        <AutoCompleteWithCheckbox
                                            data={doctorsArray.length > 0 ? doctorObjectToArray(doctorsArray) : []}
                                            setSelected={handleDoctorChange}
                                        />


                                    </div>

                                    <span className='prescription-form-error'>
                                        {validationError.doctors ? validationError.doctors : <EmptySpace />}
                                    </span>



                                </li>

                                <li>
                                    <div>
                                        <span className='form-small-tittle' >Template Name <span style={{ color: "red" }}>*</span></span>
                                        <span className='form-caption' ></span>
                                    </div>

                                    <div className={`form-light-background ${validationError.templateName ? "form-error" : "form-ok"}`}>
                                        <input
                                            value={templateName}
                                            onChange={(e) => { handleTemplateNameChange(e) }}
                                            type="text"
                                            className='form-input-text'
                                            placeholder='Enter template name'
                                            style={{ width: "300px" }}
                                        />



                                    </div>


                                    <span className='prescription-form-error'>
                                        {validationError.templateName ? validationError.templateName : <EmptySpace />}
                                    </span>



                                </li>





                            </ul>



                            <span className='form-heading-2' style={{ marginTop: "1rem" }}>Patient Reports</span>


                            <div onClick={() => { setActiveLeft(leftMenus[0].name) }} className='report-list-container'>





                                <div style={{ padding: "0rem", display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: "1rem", width: "100%", justifyContent: "space-between" }}>

                                    <div style={{ display: "fex", flexDirection: "column" }}>
                                        <span className='form-small-tittle' >Chief Complaints</span>

                                        <div className='form-light-background-big'>
                                            <textarea
                                                id="chiefComplaints"
                                                value={submissionData.chiefComplaints ? submissionData.chiefComplaints : ""}
                                                className='form-input-text-area'
                                                name="chiefcomplaints"
                                                placeholder="Type here"
                                                rows={4}
                                                onChange={(e) => {
                                                    // setPrescriptioninfo({ ...presciptioninfor, cheifcomplaints: e.target.value })
                                                    onChangeSubmissiondata(e.target.id, e.target.value)
                                                }} />
                                        </div>
                                    </div>

                                    <div style={{ display: "fex", flexDirection: "column", marginLeft: "1rem" }}>
                                        <span className='form-small-tittle' >Relevant points from history</span>

                                        <div className='form-light-background-big'>
                                            <textarea id="releventPoint"
                                                value={submissionData.releventPoint ? submissionData.releventPoint : ""}
                                                className='form-input-text-area'
                                                rows={4} placeholder="Type here"
                                                onChange={(e) => {
                                                    // setPrescriptioninfo({ ...presciptioninfor, relevantpointfromhistory: e.target.value })
                                                    onChangeSubmissiondata(e.target.id, e.target.value)
                                                }} />
                                        </div>
                                    </div>

                                </div>


                                <div style={{ padding: ".0rem", display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: "1rem", width: "100%", justifyContent: "space-between" }}>

                                    <div style={{ display: "fex", flexDirection: "column" }}>
                                        <span className='form-small-tittle' >Diagnosis or Provisional Diagnosis</span>

                                        <div className='form-light-background-big'>
                                            <textarea value={submissionData.diagnosis ? submissionData.diagnosis : ""} id="diagnosis" className='form-input-text-area' rows={4} placeholder="Type here" onChange={(e) => {
                                                // setPrescriptioninfo({ ...presciptioninfor, diagnosis: e.target.value })
                                                onChangeSubmissiondata(e.target.id, e.target.value)
                                            }} />
                                        </div>
                                    </div>

                                    <div style={{ display: "fex", flexDirection: "column", marginLeft: "1rem" }}>
                                        <span className='form-small-tittle' >Examination/Lab Findings</span>

                                        <div className='form-light-background-big'>
                                            <textarea id="examination" value={submissionData.examination ? submissionData.examination : ""} className='form-input-text-area' rows={4} placeholder="Type here" onChange={(e) => {
                                                // setPrescriptioninfo({ ...presciptioninfor, examinationlabfindings: e.target.value })

                                                onChangeSubmissiondata(e.target.id, e.target.value)
                                            }} />
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="separator"></div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "99%", }}>
                                <span className='form-heading-2' style={{ marginTop: "1rem" }}>Investigations</span>

                                {
                                    isReadyToAddInvestigation ?


                                        <button className={isReadyToAddInvestigation ? "add-investigation-btn" : "add-investigation-btn-disabled"} onClick={() => { addInvestigation() }}>
                                            <AddIcon_Prescription /> {getAddInvestigationButtonText(investigationData.length)}
                                        </button>


                                        :

                                        <Popover trigger="click" content={isReadyToAddInvestigation ? null : noInvestigationPopOver}>

                                            <button className={isReadyToAddInvestigation ? "add-investigation-btn" : "add-investigation-btn-disabled"} onClick={() => { addInvestigation() }}>
                                                <AddIcon_Prescription /> {getAddInvestigationButtonText(investigationData.length)}
                                            </button>

                                        </Popover>

                                }

                            </div>



                            {finalInvestigations.length > 0 ?


                                <table onClick={() => { setActiveLeft(leftMenus[1].name) }} ref={InvestigationElement} className='investigations-table'>

                                    <tr>
                                        <th><div>#</div></th>
                                        <th><div>Investigation Name(s)</div></th>
                                        <th colSpan="2"><div>Comments/Instructions</div></th>

                                    </tr>


                                    {


                                        finalInvestigations.map((obj, key) => {




                                            return (

                                                <tr>
                                                    <td>{key + 1}</td>
                                                    <td>
                                                        {/* <Select



                                                            getPopupContainer={trigger => trigger.parentNode}
                                                            style={{ position: "absolute" }}


                                                            value={obj.name}


                                                            optionFilterProp="children"
                                                            showSearch

                                                            filterOption={(input, option) =>
                                                                option.children.toLowerCase().startsWith(input.toLowerCase()) ? true : false
                                                            }

                                                            filterSort={(optionA, optionB) =>
                                                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                                            }


                                                            placeholder="Select investigation" style={{ width: "100%" }}


                                                            onChange={(e) => {

                                                                // InvestigationNameOnChange({ data: e, id: obj.id })
                                                                // setLabtest([...labtest, {
                                                                //     testType: "",
                                                                //     testNames: e,
                                                                //     comment: "",
                                                                //     id: key + 1
                                                                // }])
                                                                updateInvestigationTable({ data: e, id: key, key: "name", state: investigationData })


                                                            }} >
                                                            {
                                                                test ? test.map((obj2, key) => {

                                                                    return (
                                                                        <Option value={obj2}>{obj2}</Option>
                                                                    )


                                                                }) : null
                                                            }


                                                        </Select> */}


                                                        <MuiAutoComplete
                                                            placeholder="Select investigation"
                                                            id={key}
                                                            value={obj.name}
                                                            data={test ? test : []}
                                                            onChange={test && updateInvestigationTable}
                                                            name='name' />
                                                    </td>
                                                    <td>



                                                        <textarea

                                                            rows={1}
                                                            value={obj.comment ? obj.comment : ""}
                                                            placeholder='Type here'
                                                            className='investigations-input-text-area'
                                                            onChange={(e) => { updateInvestigationTable({ data: e.target.value, id: key, key: "comment", state: investigationData }) }}
                                                        //  onBlur={(e) => { InvestigationTextAreaOnChange({ data: e.target.value, id: obj.id }) }}
                                                        />



                                                    </td>

                                                    <td>
                                                        <div style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} onClick={() => { removeInvestigation(key) }}> <DeleteIcon_Prescription /></div></td>
                                                </tr>

                                            )
                                        })


                                    }

                                </table>

                                :

                                <div className="no-table-data" ref={InvestigationElement}>
                                    ( No Investigations found )
                                </div>

                            }

                            <div className="separator"></div>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "99%", }}>

                                <span className='form-heading-2' style={{ marginTop: "1rem" }}>Medicines</span>


                                {
                                    isReadtToAddMedicine.status ?


                                        <button className={isReadtToAddMedicine.status ? 'add-investigation-btn' : 'add-investigation-btn-disabled'} onClick={addMedicine}> <AddIcon_Prescription />  Add Medicines</button>

                                        :

                                        <Popover trigger="click" content={noMedicinePopOver}>
                                            <button className={isReadtToAddMedicine.status ? 'add-investigation-btn' : 'add-investigation-btn-disabled'} > <AddIcon_Prescription />  Add Medicines</button>
                                        </Popover>


                                }




                            </div>


                            {
                                finalMedicinesdata.length > 0 ?

                                    <div onClick={() => { setActiveLeft(leftMenus[2].name) }} ref={MedicineElement} className='medicine-table-container'>



                                        <table
                                            className='medicine-table'>

                                            <tr>
                                                <th><div>#</div></th>
                                                {/* <th><div>Medicine Type</div></th> */}
                                                <th><div>Name of Medicine</div></th>
                                                <th><div>When to have</div></th>
                                                <th><div>Frequency</div></th>
                                                <th><div>Quantity</div></th>
                                                <th><div>Unit</div></th>
                                                <th><div>Starting Date</div></th>
                                                <th><div>No.of Days</div></th>
                                                <th colspan="2"><div>Instructions</div></th>

                                            </tr>



                                            {


                                                finalMedicinesdata.map((obj, key) => {

                                                    return (

                                                        <tr>
                                                            <td>{key + 1}</td>
                                                            {/* <td>

                                                                DRUGS

                                                            </td> */}
                                                            <td>

                                                                {



                                                                    <MuiAutoComplete
                                                                        placeholder="Select medicine"
                                                                        id={key}
                                                                        value={obj.name}
                                                                        data={medicine ? medicine : []}
                                                                        onChange={updateMedicineTable}
                                                                        name='name' />



                                                                }
                                                            </td>
                                                            <td>
                                                                {

                                                                    <MuiDropdown
                                                                        placeholder="When to have"
                                                                        id={key}
                                                                        data={['Before Food', 'After Food', 'SOS']}
                                                                        name="when"
                                                                        value={obj.when}
                                                                        onChange={updateMedicineTable}
                                                                        isMedTable
                                                                    />

                                                                }
                                                            </td>
                                                            <td>
                                                                {


                                                                    <MuiDropdown
                                                                        value={obj.freequancy}
                                                                        placeholder="Select frequency"
                                                                        id={key}
                                                                        data={frequecny ? frequecny : []}
                                                                        name="freequancy"
                                                                        onChange={updateMedicineTable}
                                                                        isMedTable
                                                                    />


                                                                }
                                                            </td>
                                                            <td>
                                                                <input
                                                                    value={obj.quantity ? obj.quantity : ""}
                                                                    onKeyPress={validateNumberOnKeyPress}
                                                                    placeholder='Enter quantity'
                                                                    type="text"
                                                                    className='investigations-input-text-input'
                                                                    onChange={(e) => updateMedicineTable({ data: e.target.value, id: key, key: "quantity" })} />


                                                            </td>

                                                            <td>


                                                                <MuiDropdown
                                                                    value={obj.unit}
                                                                    placeholder="Select unit"
                                                                    id={key}
                                                                    data={units ? units : []}
                                                                    name="unit"
                                                                    onChange={updateMedicineTable}
                                                                    isMedTable
                                                                />


                                                            </td>
                                                            <td>


                                                                <MuiDatePicker

                                                                    placeholder="Select date"
                                                                    minDate={new Date()}
                                                                    id={key}
                                                                    name="date"
                                                                    _value={obj.date}
                                                                    onChange={updateMedicineTable}
                                                                    isMedTable
                                                                />
                                                            </td>
                                                            <td>
                                                                {

                                                                    <MuiDropdown
                                                                        value={obj.days}
                                                                        placeholder="Select days"
                                                                        id={key}
                                                                        data={getNumberOfDays(120)}
                                                                        name="days"
                                                                        onChange={updateMedicineTable}
                                                                        isMedTable
                                                                    />


                                                                }
                                                            </td>
                                                            <td>
                                                                <textarea
                                                                    value={obj.instructions ? obj.instructions : ""}
                                                                    defaultValue={obj.instructions} className='medicine-table-input-text-area' rows={1} placeholder='Type here' onChange={(e) => {
                                                                        updateMedicineTable({ data: e.target.value, id: key, key: "instructions" })
                                                                    }} />
                                                            </td>
                                                            <td><div style={{ cursor: "pointer", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }} onClick={() => { removeMedicine(obj.id) }}><DeleteIcon_Prescription /></div></td>

                                                        </tr>

                                                    )
                                                })




                                            }





                                        </table>

                                    </div>

                                    : <div className="no-table-data" ref={MedicineElement}>
                                        ( No Medicines found )
                                    </div>
                            }









                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "99%", }}>

                                <span className='form-heading-2' style={{ marginTop: "1rem" }}>Additional Instructions</span>

                            </div>

                            <div onClick={() => { setActiveLeft(leftMenus[3].name) }} className='form-light-background' style={{ width: "45%" }}>
                                <textarea value={submissionData.additionalInstruction ? submissionData.additionalInstruction : ""} ref={AddInstructionElement} className='form-input-text-area' rows={3} placeholder='Type here' style={{ width: "100%" }} onChange={(e) => {
                                    onChangeSubmissiondata("additionalInstruction", e.target.value)
                                }} />
                            </div>



                            {/* <input className='focusPoint' ref={AddInstructionElement} type="text" name="" id="" /> */}




                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>

                            <div> &nbsp;</div>






                        </div>
                    </div>


                </div>


            </div>
            <Modal deletingFrom={deletingFrom} state={isConfirmDelete} setState={setConfirmDelete} data={investigationData} removeIndex={deleteIndex} />
            <Modal deletingFrom={deletingFrom} state={isConfirmDeleteMedicine} setState={setConfirmDeleteMedicine} data={medicinesData} removeIndex={deleteIndexMedicine} />
            <SuccessModal clearData={clearPrepopulateddate} isPreload={preloadData} setEditMode={setEditMode} state={isSuccess} setState={setSuccess} successMessage={successMessage} />
            <FailiureModal state={isFailed} setState={setFailed} />
            <LoaderModel state={isLoading} />
            {/* <NetworkErrorModal state={isNetworkError} setState={setNetworkError} refresh={refreshPage} /> */}

            {
                isReadyToSubmit ?

                    <div className="button-container">
                        <button disabled={isLoading} onClick={() => { createPrescription() }} className={isLoading ? 'save-rescription-btn-disabled' : 'save-rescription-btn'} > <LabelIcon_Prescription />  {preloadData ? "UPDATE" : "SAVE"} TEMPLATE</button>
                    </div> : null
            }
        </div >
    )
}

export default PriscriptionForm
