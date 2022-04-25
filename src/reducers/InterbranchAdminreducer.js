import { DOCTOR_LISTING, INTERBRANCH_ADMIN_CONSOLIDATED, INTERBRANCH_ADMIN_DASHBOARD, INTERBRANCH_ADMIN_DASHBOARD_SELECTED, INTERBRANCH_ADMIN_DETAILED, INTERBRANCH_ADMIN_DETAILED_SELECTED, INTERBRANCH_MODAL } from "../actions/type";

const INITIAL_STATE = {

    dashboardTable: [],
    detailedReportTable:[],
    dashboardSelected: null,
    detaiedSelected:null,
    consolidatedreport: []

};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {

        case INTERBRANCH_ADMIN_DASHBOARD:

            return {
                ...state,
                dashboardTable: payload
            };

            case INTERBRANCH_ADMIN_DETAILED:

                return {
                    ...state,
                    detailedReportTable: payload
                };

        case INTERBRANCH_ADMIN_DASHBOARD_SELECTED:

            return {
                ...state,
                dashboardSelected: payload
            };


            case INTERBRANCH_ADMIN_DETAILED_SELECTED:

                return {
                    ...state,
                    detaiedSelected: payload
                };
    
        case INTERBRANCH_ADMIN_CONSOLIDATED:

            return {
                ...state,
                consolidatedreport: payload
            };
        default:
            return state;
    }
};
