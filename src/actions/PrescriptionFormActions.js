import loginedApi from "../apis";
import { convertDateToString } from "../Helpers/dateFunctions";
import { INTERBRANCH_ADMIN_DASHBOARD, SET_CR_DASHBOARD, UPDATE_REDUX_PRESCRIPTION } from "./type";


export const getDepartments = () => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });


    let params = {
        requestType: "1062",
        browserTimeZone: "",
        data: {
            type: "department"
        },
    };


    const response = await loginedApi.post("getdepartments", params);

    if (response.status == "200") {

        if (response.data?.data) {
            return response.data.data
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
        data: {
            "type": "doctor",
            "departmentId": department_id
        },
    };


    const response = await loginedApi.post("getdoctors", params);

    if (response.status == "200") {

        if (response.data?.data) {
            return response.data.data
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
        data: {
            type: "templatelist",
            offset: offset ? offset : 0
        },
    };


    const response = await loginedApi.post("gettemplates", params);

    if (response.status == "200") {

        console.log(response);

        if (response.data?.data?.data) {
            return {
                data: response.data.data.data,
                total: response.data.data.totalNumberOfPages
            }
        }
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


    let params = { "data": { "templateId": par_tempId }, "browserTimeZone": "", "requestType": 1068 };


    const response = await loginedApi.post("viewtemplate", params);

    if (response.status == "200") {

        if (response.data?.data) {
            return response.data.data
        }
    }


}

export const FETCH_PR_ADMIN_DASHBOARD_REPORT = (_para) => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    let fromDate = _para?.fromDate ? convertDateToString(_para.fromDate) : null
    let toDate = _para?.toDate ? convertDateToString(_para.toDate) : null

    let todayDate=convertDateToString(new Date())

    let params={
        "data": {
            "userID": 98278532,
            "operation": "find",
            "startDate": fromDate?fromDate:todayDate,
            "endDate": toDate?toDate:todayDate,
            "browserTimeZone": "GMT+05:30",
            offset:_para.offset?_para.offset:"0"
        },
        "browserTimeZone": "",
        "requestType": 236
    }
   

   

    let responce = await loginedApi.post("getbethanyprescriptions", params)

    console.log("getbethanyprescriptionlist responce ->", responce);

    if (responce.status == 200) {

        console.log();

        dispatch({
            type: SET_CR_DASHBOARD,
            payload: {
                data: responce.data.data,
                total: responce.data.data.totalNumberOfPages
            }
        });


    }
}

export const syncLabAndMedicine = () => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });


    let params = {"data":{"userID":"98278532","browserTimeZone":"GMT+05:30"},"browserTimeZone":"","requestType":238}


    const response = await loginedApi.post("bethanysynclabmedicine", params);

    if (response.status == "200") {

            return response.data.data
    }


}


export const pushToHisCall = (_id) => async dispatch => {

    // let userToken = await getFromLocalStorage(USER_TOKEN)

    // dispatch({
    //     type: UPDATE_REDUX_PRESCRIPTION,
    //     payload: {
    //         data: responce.data.data,
    //         totalPages: responce.data.totalNumberOfPages
    //     }
    // });


    let params = {"data":{"userID":"98278532","listid":_id},"browserTimeZone":"","requestType":237}

    const response = await loginedApi.post("bethanysynclabmedicine", params);

    if (response.status == "200") {

        console.log(response);

            return response.data.data
    }


}














