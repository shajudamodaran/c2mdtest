import loginedApi, { c2mdApi } from "../apis"
// import { USER_TOKEN } from "../constants/const";
import { convertDateToString, convertDateToStringOneYear, convertDateToStringThreeMonthBack } from "../Helpers/dateFunctions";
import { getFromLocalStorage } from "../Helpers/localStorageHelper";
import authHeader from "./AuthHeader";
import { INTERBRANCH_ADMIN_CONSOLIDATED, INTERBRANCH_ADMIN_DASHBOARD, INTERBRANCH_ADMIN_DASHBOARD_SELECTED, INTERBRANCH_ADMIN_DETAILED, INTERBRANCH_ADMIN_DETAILED_SELECTED } from "./type";

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
            "token": "token",
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


        let responce = await loginedApi.post("getappointments", params, { headers: authHeader() })

        console.log("getappointments responce ->", responce.data.data);

        if (responce.status == 200) {

            dispatch({
                type: INTERBRANCH_ADMIN_DASHBOARD,
                payload: {
                    data: responce.data.data,
                    totalPages: responce.data.totalNumberOfPages
                }
            });

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

        let responce = await loginedApi.post("getclinicappointments", params, { headers: authHeader() })

        console.log("getclinicappointments responce ->", responce.data.data);

        if (responce.status == 200) {

            dispatch({
                type: INTERBRANCH_ADMIN_DASHBOARD,
                payload: {
                    data: responce.data.data,
                    totalPages: responce.data.totalNumberOfPages
                }
            });

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







    let responce = await loginedApi.post("getsummaryreport", params, { headers: authHeader() })

    console.log("getsummaryreport responce ->", responce.data.data);

    if (responce.status == 200) {


        dispatch({
            type: INTERBRANCH_ADMIN_DETAILED,
            payload: {
                data: responce.data.data.data,
                totalPages: responce.data.data.totalNumberOfPages
            }
        });


    }


}


export const FETCH_DASHBOARD_MORE = (_id) => async dispatch => {



    let params = {
        "token": "token",
        "requestType": "1041",
        "version": "2.0",
        "data": {
            "appointmentId": _id,
            "browserTimeZone": "GMT+05:30"
        }
    }

    let responce = await c2mdApi.post("getdetailreport", params, { headers: authHeader() })

    console.log(responce.data.data);


    if (responce.status == 200) {

        dispatch({
            type: INTERBRANCH_ADMIN_DASHBOARD_SELECTED,
            payload: responce.data.data
        });

        //    console.log(responce.data.data);
        //    dispatch(setSelectedDash(responce.data.data))

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

    let responce = await c2mdApi.post("getdetailreport", params, { headers: authHeader() })



    if (responce.status == 200) {

        dispatch({
            type: INTERBRANCH_ADMIN_DETAILED_SELECTED,
            payload: responce.data.data
        });

        //    console.log(responce.data.data);
        //    dispatch(setSelectedDash(responce.data.data))

    }


}



export const FETCH_CONSOLIDATED_REPORTS = (_para) => async dispatch => {

    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId } = userData

    console.log(_para);


    let todayDate = convertDateToString(new Date())

    let fromDate = _para?.fromDate ? convertDateToString(_para.fromDate) : convertDateToStringOneYear(todayDate)
    let toDate = _para?.endDate ? convertDateToString(_para.endDate) : todayDate

    let params = {
        "token": "token",
        "requestType": "1040",
        "version": "2.0",
        "data": {
            "operation": "search",
            "browserTimeZone": "GMT+05:30",
            "Type": "excel",
            "startDate": fromDate,
            "endDate": toDate,
            "offset": _para?.offset ? _para.offset.toString() : "0"
        }
    }

    if (clinicId) {
        params.data.clinic = clinicId
    }

    let responce = await c2mdApi.post("getconsolidatedreport", params, { headers: authHeader() })

    console.log("getconsolidatedreport responce ->", responce.data.data);

    if (responce.status == 200) {

        dispatch({
            type: INTERBRANCH_ADMIN_CONSOLIDATED,
            payload: {
                data: responce.data.data.data,
                totalPages: responce.data.data.totalNumberOfPages
            }
        });

        //    console.log(responce.data.data);
        //    dispatch(setSelectedDash(responce.data.data))

    }


}


export const updateMisReportComment = (_id, value) => async dispatch => {


    let params = {

        "requestType": "1046",
        "data": {
            "appointmentId": _id,
            "notes": value
        }
    }

    let responce = await c2mdApi.post("updatereportdata", params)

    if (responce.status == 200 && responce.data.data.info === "Successfully Updated") {

        return true

    }


}



export const updateMisReportAttachments = (_id, value) => async dispatch => {


    let params = {

        "requestType": "1046",
        "data": {
            "consolReportId": _id,
            "uploadedFile": value
        }
    }

    let responce = await c2mdApi.post("updateconsolreport", params)

    if (responce.status == 200 && responce.data.data.info === "Successfully Updated") {

        return true

    }


}

export const updateConsolodatedReportComment = (_id, value) => async dispatch => {


    let params = {

        "requestType": "1046",
        // "version": 2,
        "data": {
            "consolReportId": _id,
            "adjustments": value
        }
    }

    let responce = await c2mdApi.post("updateconsolreport", params)

    if (responce.status == 200 && responce.data.data.info === "Successfully Updated") {

        return true

    }


}

export const downloadSummaryReport = (_para) => async (dispatch) => {


    let fromDate = _para?.fromDate ? convertDateToString(_para.fromDate) : null
    let toDate = _para?.toDate ? convertDateToString(_para.toDate) : null

    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId } = userData


    console.log(fromDate, toDate);

    let params = {
        "token": "token",
        "requestType": "1040",
        "version": "2.0",
        "data": {
            "operation": "find",
            "browserTimeZone": "GMT+05:30",
            "Type": "excel",
            "startDate": fromDate ? fromDate : "16-Mar-2022",
            "endDate": toDate ? toDate : "17-Mar-2022",
            "clinic": clinicId,
        }
    }

    let responce = await loginedApi.post("getsummaryreport", params, { headers: authHeader() })

    console.log("getsummaryreport responce ->", responce.data.data);

    if (responce.status == 200) {

        if (responce.data?.data?.filename) {
            return `https://uat.c2mdr.com/c2mydruat/Connect2MyDoctorRequest?requestType=256&uploadBy=ConsultationProcess&name=${responce.data?.data?.filename}&type=Attachement&uploadRefId=123&from=web`
        }



    }


}





