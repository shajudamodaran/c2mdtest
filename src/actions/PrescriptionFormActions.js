import loginedApi from "../apis";
import { INTERBRANCH_ADMIN_DASHBOARD, UPDATE_REDUX_PRESCRIPTION } from "./type";


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

export const getTemplateList = () => async dispatch => {

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
            type: "templatelist"
        },
    };


    const response = await loginedApi.post("gettemplates", params);

    if (response.status == "200") {

        if (response.data?.data) {
            return response.data.data
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




