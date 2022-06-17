import loginedApi, { c2mdApi } from "../apis"
// import { USER_TOKEN } from "../constants/const";
import { convertDateToString, convertDateToStringOneYear, convertDateToStringThreeMonthBack } from "../Helpers/dateFunctions";
import { getFromLocalStorage } from "../Helpers/localStorageHelper";
import authHeader from "./AuthHeader";
import { INTERBRANCH_ADMIN_CONSOLIDATED, INTERBRANCH_ADMIN_DASHBOARD, INTERBRANCH_ADMIN_DASHBOARD_SELECTED, INTERBRANCH_ADMIN_DASHBOARD_SELECTED_v2, INTERBRANCH_ADMIN_DETAILED, INTERBRANCH_ADMIN_DETAILED_SELECTED, MANAGE_HOSPITALS_LIST, MANAGE_SESSION } from "./type";

import { ADMIN_USER, CLINIC_ADMIN_USER, USER_DATA } from '../constants/const'



export const FETCH_ADMIN_DASHBOARD_REPORT = (_para) => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)
    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId } = userData
    let todayDate = convertDateToString(new Date())


    if (userType == ADMIN_USER) {

        let params =
        {

            "requestType": 509,
            "version": "2.0",
            "data": {
                "operation": "find",
                "browserTimeZone": "GMT+05:30",
                "startDate": todayDate,
                "endDate": todayDate,
                // "startDate": "20-May-2022",
                // "endDate": "21-May-2022",
                "Type": "excel",
            }
        }

        

        let response = await loginedApi.post("getappointments", params, { headers: authHeader() })

        console.log("getappointments..........",response);


        if (response.status == "200") {

            if (response.data.errorType != "FAILURE" && response.data?.data) {

                dispatch({
                    type: INTERBRANCH_ADMIN_DASHBOARD,
                    payload: {
                        data: response.data.data,
                        totalPages: response.data.totalNumberOfPages
                    }
                });
            }
            else {

                dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
            }
        }




    }
    else if (userType == CLINIC_ADMIN_USER) {

        let params =
        {
            "data": {
                "Type": null,
                "operation": "find",
                "startDate": todayDate,
                "endDate": todayDate,
                // "startDate": "20-May-2022",
                // "endDate": "21-May-2022",
                "browserTimeZone": "GMT+05:30",
                "clinicId": clinicId
            },
            "browserTimeZone": "",
            "requestType": 518,
            "version": "2.0"
        }

        let response = await loginedApi.post("getclinicappointments", params, { headers: authHeader() })

        console.log("getclinicappointments responce ->", response.data.data);

        if (response.status == "200") {

            if (response.data.errorType != "FAILURE" && response.data?.data) {

                dispatch({
                    type: INTERBRANCH_ADMIN_DASHBOARD,
                    payload: {
                        data: response.data.data,
                        totalPages: response.data.totalNumberOfPages
                    }
                });

            }
            else {

                dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
            }
        }



    }


}


export const FETCH_ADMIN_DETAILED_REPORT = (_para) => async (dispatch) => {

    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId } = userData

    let todayDate = convertDateToString(new Date())
    let fromDate = _para?.fromDate ? convertDateToString(_para.fromDate) : null
    let toDate = _para?.toDate ? convertDateToString(_para.toDate) : null

    //console.log("Calling getsummaryreport................................................................... ->");

    let params = {
        "token": "token",
        "requestType": "1040",
        "version": "2.0",
        "data": {
            "operation": "find",
            "browserTimeZone": "GMT+05:30",
            // "Type": "excel",
            "startDate": fromDate ? fromDate : convertDateToStringThreeMonthBack(todayDate),
            "endDate": toDate ? toDate : todayDate,
            "offset": _para?.offset ? _para.offset.toString() : "0"
        }

    }


    if (userType == ADMIN_USER) {
    }
    else if (userType == CLINIC_ADMIN_USER) {

        params.data.clinic = clinicId

    }







    let response = await loginedApi.post("getsummaryreport", params, { headers: authHeader() })

    //console.log("getsummaryreport responce ->", responce.data.data);


    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {


            dispatch({
                type: INTERBRANCH_ADMIN_DETAILED,
                payload: {
                    data: response.data.data.data,
                    totalPages: response.data.data.totalNumberOfPages
                }
            });


        }
        else {

            dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
        }
    }




}


export const FETCH_DASHBOARD_MORE = (_id) => async dispatch => {




    let params = { "token": "token", "version": "2.0", "requestType": "1101", "data": { "appointmentId": _id, "browserTimeZone": "GMT+05:30" } }

    // console.log("Calling getappointments................................................................... ->");

    let response = await loginedApi.post("getappointmentsdetails", params, { headers: authHeader() })


    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {


            dispatch({
                type: INTERBRANCH_ADMIN_DASHBOARD_SELECTED_v2,
                payload: response.data.data[0]
            });


        }
        else {

            dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
        }
    }







}

export const FETCH_DETAILED_MORE = (_id) => async dispatch => {



    let params = {
        "token": "token",
        "requestType": "1041",
        "version": "2.0",
        "data": {
            "appointmentId": _id,
            "browserTimeZone": "GMT+05:30"
        }
    }

    let response = await c2mdApi.post("getdetailreport", params, { headers: authHeader() })



    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {


            dispatch({
                type: INTERBRANCH_ADMIN_DETAILED_SELECTED,
                payload: response.data.data
            });

        }
        else {

            dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
        }
    }



}



export const FETCH_CONSOLIDATED_REPORTS = (_para) => async dispatch => {

    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId } = userData

    //console.log(_para);


    let todayDate = convertDateToString(new Date())

    let fromDate = _para?.fromDate ? convertDateToString(_para.fromDate) : convertDateToStringOneYear(todayDate)
    let toDate = _para?.endDate ? convertDateToString(_para.endDate) : todayDate

    console.log(_para?.filterData);

    let params = {
        "token": "token",
        "requestType": "1040",
        "version": "2.0",
        "data": {
            // "operation": _para.filterData.date || _para.filterData.hospital? "filter" : "search",
            "operation":"filter",
            "browserTimeZone": "GMT+05:30",
            "Type": "excel",
            "offset": _para?.offset ? _para.offset.toString() : "0"
        }
    }

    if (userType == CLINIC_ADMIN_USER) {
        params.data.clinic = clinicId
    }

    if (_para?.filterData) {

        if (_para.filterData.date && _para.filterData.hospital) {

            params.data["filterType"] = "all"
            params.data["filterMonthYear"] = _para.filterData.date
            params.data["filterHospital"] = _para.filterData.hospital
        }
        else if (_para.filterData.date) {
            params.data["filterType"] = "monthYear"
            params.data["filterMonthYear"] = _para.filterData.date
        }

        else if (_para.filterData.hospital) {
            params.data["filterType"] = "hospital"
            params.data["filterHospital"] = _para.filterData.hospital
        }
    }

    let response = await c2mdApi.post("getconsolidatedreport", params, { headers: authHeader() })

    console.log("getconsolidatedreport responce ->", response.data.data);

    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {


            dispatch({
                type: INTERBRANCH_ADMIN_CONSOLIDATED,
                payload: {
                    data: response.data.data.data,
                    totalPages: response.data.data.totalNumberOfPages
                }
            });


        }
        else {

            dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
        }
    }




}


export const updateMisReportComment = (_id, value) => async dispatch => {


    let params = {

        "requestType": "1046",
        "version": "2.0",
        "data": {
            "appointmentId": _id,
            "notes": value
        }
    }

    let response = await c2mdApi.post("updatereportdata", params, { headers: authHeader() })

    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {

            if (response.status == 200 && response.data.data.info === "Successfully Updated") {

                return true

            }

        }
        else {

            dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
        }
    }





}



export const updateMisReportAttachments = (_id, value) => async dispatch => {


    let params = {

        "requestType": "1046",
        "version": "2.0",
        "data": {
            "consolReportId": _id,
            "uploadedFile": value
        }
    }

    let response = await c2mdApi.post("updateconsolreport", params, { headers: authHeader() })

    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {


            if (response.status == 200 && response.data.data.info === "Successfully Updated") {

                return true

            }

        }
        else {

            dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
        }
    }




}

export const updateConsolodatedReportComment = (_id, value) => async dispatch => {


    let params = {

        "requestType": "1046",
        "version": "2.0",
        "data": {
            "consolReportId": _id,
            "adjustments": value
        }
    }

    let response = await c2mdApi.post("updateconsolreport", params, { headers: authHeader() })

    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {


            if (response.status == 200 && response.data.data.info === "Successfully Updated") {

                return true

            }


        }
        else {

            dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
        }
    }



}

export const downloadSummaryReport = (_para) => async (dispatch) => {


    let fromDate = _para?.fromDate ? convertDateToString(_para.fromDate) : convertDateToStringThreeMonthBack(convertDateToString(new Date()))
    let toDate = _para?.toDate ? convertDateToString(_para.toDate) : convertDateToString(new Date())

    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId } = userData


    //console.log(fromDate, toDate);

    let params = {
        "token": "token",
        "requestType": "1040",
        "version": "2.0",
        "data": {
            "operation": "find",
            "browserTimeZone": "GMT+05:30",
            "Type": "excel",
            "startDate": fromDate,
            "endDate": toDate

        }
    }

    if (userType == ADMIN_USER) {
    }
    else if (userType == CLINIC_ADMIN_USER) {

        params.data.clinic = clinicId

    }

    let response = await loginedApi.post("getsummaryreport", params, { headers: authHeader() })

    //console.log("getsummaryreport responce ->", responce.data.data);

    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {


            if (response.data?.data?.filename) {
                return `https://uat.c2mdr.com/c2mydruat/Connect2MyDoctorRequest?requestType=256&uploadBy=ConsultationProcess&name=${response.data?.data?.filename}&type=Attachement&uploadRefId=123&from=web`
            }


        }
        else {

            dispatch({ type: MANAGE_SESSION, payload: { isSessionActive: false } });
        }
    }




}


export const getHospitalsList = () => async (dispatch) => {



    let params = {
        "token": "token",
        "requestType": "1111",
        "data": { "browserTimeZone": "GMT+05:30" }
    }


    let response = await loginedApi.post("gethospitals", params, { headers: authHeader() })

    // console.log("gethospitals response===>", response);

    dispatch({
        type: MANAGE_HOSPITALS_LIST,
        payload: response.data.data
    });



}





