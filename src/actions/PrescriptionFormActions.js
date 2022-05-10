import loginedApi from "../apis";
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
            "departmentId": "D01"
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



    let params = {
        "data": {
            "userID": "98278532",
            "operation": "find",
            "startDate": "01-Mar-2022",
            "endDate": "07-May-2022",
            "browserTimeZone": "GMT+05:30"
        },
        "browserTimeZone": "",
        "requestType": 236
    }


    let responce = await loginedApi.post("getbethanyprescriptionlist", params)

    console.log("getbethanyprescriptionlist responce ->", responce.data.data);

    if (responce.status == 200) {

        console.log();

        dispatch({
            type: SET_CR_DASHBOARD,
            payload: responce.data.data
        });


    }
}













