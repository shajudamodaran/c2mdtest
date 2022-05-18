import loginedApi from "../apis";
import authHeader from './auth-header';
import { convertDateToString } from "../Helpers/dateFunctions";
import { INTERBRANCH_ADMIN_DASHBOARD, REDUX_LOADING, SET_CR_DASHBOARD, UPDATE_REDUX_PRESCRIPTION } from "./type";
import { USER_DATA } from "../constants/const";
import { getFromLocalStorage } from "../Helpers/localStorageHelper";




export const getDepartments = () => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });

//params
    let params = {
        requestType: "1062",
        browserTimeZone: "",
        "version": "2",
        data: {
            type: "department"
        },
    };


    const response = await loginedApi.post("getdepartments", params, { headers: authHeader() });


    if (response.status == "200") {


        if (response.data.errorType != "FAILURE" && response.data?.data) {

            return response.data.data
        }
        else {
            //dispatch({ type: LOG_OUT_ACTION });

            localStorage.clear();
            localStorage.removeItem("userData");
            window.location.href = '/home';
        }
    }


}

export const getDoctors = ({ department_id }) => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });


    let params = {
        requestType: "1063",
        browserTimeZone: "",
        "version": "2",
        data: {
            "type": "doctor",
            "departmentId": department_id
        },
    };


    const response = await loginedApi.post("getdoctors", params, { headers: authHeader() });

    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {

            return response.data.data
        }
        else {
            //dispatch({ type: LOG_OUT_ACTION });

            localStorage.clear();
            localStorage.removeItem("userData");
            window.location.href = '/home';
        }
    }


}

export const getTemplateList = ({ offset }) => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });


    let params = {
        requestType: "1070",
        browserTimeZone: "",
        "version": "2",
        data: {
            type: "templatelist",
            offset: offset ? offset : 0
        },
    };


    const response = await loginedApi.post("gettemplates", params, { headers: authHeader() });

    if (response.status == "200") {

        console.log(response);

        if (response.data.errorType != "FAILURE" && response.data?.data) {

            return {
                data: response.data.data.data,
                total: response.data.data.totalNumberOfPages
            }
        }
        else {
            //dispatch({ type: LOG_OUT_ACTION });

            localStorage.clear();
            localStorage.removeItem("userData");
            window.location.href = '/home';

        }
        /*if (response.data?.data?.data) {
            return {
                data: response.data.data.data,
                total: response.data.data.totalNumberOfPages
            }
        }*/
    }


}

export const viewTemplate = (par_tempId) => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });


    let params = { "data": { "templateId": par_tempId }, "browserTimeZone": "", "requestType": 1068, "version": "2" };


    const response = await loginedApi.post("viewtemplate", params, { headers: authHeader() });

    if (response.status == "200") {

        /*if (response.data?.data) {
            return response.data.data
        }*/
        if (response.data.errorType != "FAILURE" && response.data?.data) {

            return response.data.data
        }
        else {
            //dispatch({ type: LOG_OUT_ACTION });

            localStorage.clear();
            localStorage.removeItem("userData");
            window.location.href = '/home';
        }
    }


}

export const FETCH_PR_ADMIN_DASHBOARD_REPORT = (_para) => async dispatch => {

    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId, userId } = userData

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    dispatch({
        type: REDUX_LOADING,
        payload: true
    });

    let fromDate = _para?.fromDate ? convertDateToString(_para.fromDate) : null
    let toDate = _para?.toDate ? convertDateToString(_para.toDate) : null

    let todayDate = convertDateToString(new Date())

    let params = {
        "data": {
            "userID": userId,
            "operation": "find",
            "startDate": fromDate ? fromDate : todayDate,
            "endDate": toDate ? toDate : todayDate,
            "browserTimeZone": "GMT+05:30",
            offset: _para?.offset ? _para.offset : "0"
        },
        "browserTimeZone": "",
        "version": "2",
        "requestType": 236
    }


    let responce = await loginedApi.post("getbethanyprescriptions", params, { headers: authHeader() })

    console.log("getbethanyprescriptionlist responce ->", responce);

    if (responce.status == 200) {

        if (responce.data.errorType != "FAILURE" && responce.data?.data) {

            dispatch({
                type: SET_CR_DASHBOARD,
                payload: {
                    data: responce.data.data,
                    total: responce.data.data.totalNumberOfPages
                }
            });

            dispatch({
                type: REDUX_LOADING,
                payload: false
            });
        }
        else {
            //dispatch({ type: LOG_OUT_ACTION });

            localStorage.clear();
            localStorage.removeItem("userData");
            window.location.href = '/home';
        }



    }
}

export const syncLabAndMedicine = () => async dispatch => {

    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId, userId } = userData

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });


    let params = { "data": { "userID": userId, "browserTimeZone": "GMT+05:30" }, "browserTimeZone": "", "requestType": 238, "version": "2" }


    const response = await loginedApi.post("bethanysynclabmedicine", params, { headers: authHeader() });

    if (response.status == "200") {

        if (response.data.errorType != "FAILURE" && response.data?.data) {

            return response.data.data
        }
        else {
            //dispatch({ type: LOG_OUT_ACTION });

            localStorage.clear();
            localStorage.removeItem("userData");
            window.location.href = '/home';
        }
        //  return response.data.data
    }



}

export const pushToHisCall = (_id) => async dispatch => {

    let userData = await getFromLocalStorage(USER_DATA)
    userData = JSON.parse(userData)
    let { userType, clinicId, userId } = userData

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });


    let params = { "data": { "userID": userId, "listid": _id }, "browserTimeZone": "", "requestType": 237, "version": "2" }

    const response = await loginedApi.post("bethanysynclabmedicine", params, { headers: authHeader() });

    if (response.status == "200") {

        console.log(response);
        if (response.data.errorType != "FAILURE" && response.data?.data) {

            return response.data.data
        }
        else {
            //dispatch({ type: LOG_OUT_ACTION });

            localStorage.clear();
            localStorage.removeItem("userData");
            window.location.href = '/home';
        }
        //   return response.data.data
    }


}














