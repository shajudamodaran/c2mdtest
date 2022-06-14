import { DOCTOR_LISTING, INTERBRANCH_ADMIN_CONSOLIDATED, INTERBRANCH_ADMIN_DASHBOARD, INTERBRANCH_ADMIN_DASHBOARD_SELECTED, INTERBRANCH_ADMIN_DASHBOARD_SELECTED_v2, INTERBRANCH_ADMIN_DETAILED, INTERBRANCH_ADMIN_DETAILED_SELECTED, INTERBRANCH_MODAL, REDUX_LOADING } from "../actions/type";

const INITIAL_STATE = {

    dashboardTable: [],
    dashboardTableTotalPages: 0,
    detailedReportTable: [],
    detailedReportTableTotalPages: 0,
    dashboardSelected: null,
    dashboardSelectedV2:null,
    detaiedSelected: null,
    consolidatedreport: [],
    consolidatedreportTotalPages: 0

};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {

        case INTERBRANCH_ADMIN_DASHBOARD:

            return {
                ...state,
                dashboardTable: payload.data,
                dashboardTableTotalPages: payload.totalPages
            };

        case INTERBRANCH_ADMIN_DETAILED:


            return {
                ...state,
                detailedReportTable: payload.data,
                detailedReportTableTotalPages: payload.totalPages
            };

        case INTERBRANCH_ADMIN_DASHBOARD_SELECTED:

            return {
                ...state,
                dashboardSelected: payload
            };

            case INTERBRANCH_ADMIN_DASHBOARD_SELECTED_v2:

                return {
                    ...state,
                    dashboardSelectedV2: payload
                };
    
    

        case INTERBRANCH_ADMIN_DETAILED_SELECTED:



            return {
                ...state,
                detaiedSelected: payload
            };

        case INTERBRANCH_ADMIN_CONSOLIDATED:

            return {
                ...state,
                consolidatedreport: payload.data,
                consolidatedreportTotalPages: payload.totalPages
            };

       
        default:
            return state;
    }
};
