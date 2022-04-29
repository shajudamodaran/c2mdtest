import loginedApi, { c2mdApi } from "../apis"
// import { USER_TOKEN } from "../constants/const";
import { convertDateToString } from "../Helpers/dateFunctions";
import { getFromLocalStorage } from "../Helpers/localStorageHelper";
import authHeader from "./AuthHeader";
import { INTERBRANCH_ADMIN_CONSOLIDATED, INTERBRANCH_ADMIN_DASHBOARD, INTERBRANCH_ADMIN_DASHBOARD_SELECTED, INTERBRANCH_ADMIN_DETAILED, INTERBRANCH_ADMIN_DETAILED_SELECTED } from "./type";

export const FETCH_ADMIN_DASHBOARD_REPORT = (_para) => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)



    let params = {
        "token": "token",
        "requestType": "1040",
        "version": "2.0",
        "data": {
            "operation": "find",
            "browserTimeZone": "GMT+05:30",
            // "Type": "excel",
            "startDate": "16-Mar-2022",
            "endDate": "17-Mar-2022",
            "clinic": "14",
            "offset": _para?.offset ? _para.offset.toString() : "0"
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


export const FETCH_ADMIN_DETAILED_REPORT = (_para) => async (dispatch) => {


    let fromDate = _para?.fromDate ? convertDateToString(_para.fromDate) : null
    let toDate = _para?.toDate ? convertDateToString(_para.toDate) : null

    console.log(fromDate, toDate);

    let params = {
        "token": "token",
        "requestType": "1040",
        "version": "2.0",
        "data": {
            "operation": "find",
            "browserTimeZone": "GMT+05:30",
            // "Type": "excel",
            "startDate": fromDate ? fromDate : "16-Mar-2022",
            "endDate": toDate ? toDate : "17-Mar-2022",
            "clinic": "14",
            "offset": _para?.offset ? _para.offset.toString() : "0"
        }
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

    let params = {
        "token": "token",
        "requestType": "1040",
        "version": "2.0",
        "data": {
            "operation": "search",
            "browserTimeZone": "GMT+05:30",
            "Type": "excel",
            "startDate": "16-Mar-2022",
            "endDate": "17-Mar-2022",
            "clinic": "14",
            "offset": _para?.offset ? _para.offset.toString() : "0"
        }
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
            "consolReportId":_id,
            "uploadedFile":value
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




