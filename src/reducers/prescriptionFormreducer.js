import { INVESTIGATION_HEAD, SET_SUBMISSION_DATA_PRESCRIPTION, UPDATE_INVESTIGATION_TABLE_DATA, UPDATE_MEDICINE_TABLE_DATA, UPDATE_REDUX_PRESCRIPTION } from "../actions/type";

const INITIAL_STATE = {

    selectedDataInvestigation: [],
    selectedDataMedicines: [],
    submissionData:
    {

        patientName: null,
        patientAge: null,
        patientGender: null,
        patientNumber: null,
        height: { value: null, unit: null },
        weight: { value: null, unit: null },
        lmp: null,
        chiefComplaints: null,
        releventPoint: null,
        diagnosis: null,
        examination: null,
        additionalInstruction: null,
    },
    investigationData: [{
        name: null,
        comment: "",
        id: 0
    },
    {
        name: null,
        comment: "",
        id: 1
    },
    {
        name: null,
        comment: "",
        id: 2
    },],
    medicinesData: [
        {
            id: 0,
            type: null,
            name: null,
            when: null,
            freequancy: null,
            quantity: null,
            unit: null,
            date: null,
            days: null,
            instructions: null
        },
        {
            id: 1,
            type: null,
            name: null,
            when: null,
            freequancy: null,
            quantity: null,
            unit: null,
            date: null,
            days: null,
            instructions: null
        },
        {
            id: 2,
            type: null,
            name: null,
            when: null,
            freequancy: null,
            quantity: null,
            unit: null,
            date: null,
            days: null,
            instructions: null
        },

    ]

};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {

        case UPDATE_REDUX_PRESCRIPTION:

            if (payload.head === INVESTIGATION_HEAD) {
                console.log("Case 1 Loading");


                let findIfExist = state.selectedDataInvestigation.find(element => element.id == payload.id)

                if (findIfExist) {

                    var foundIndex = state.selectedDataInvestigation.findIndex(x => x.id == payload.id);

                    let newArray = [...state.selectedDataInvestigation]


                    newArray[foundIndex] =
                    {
                        ...newArray[foundIndex],
                        [payload.tittle]: payload.value
                    }

                    return {
                        ...state,
                        selectedDataInvestigation: newArray
                    };



                }

                else {

                    return {
                        ...state,
                        selectedDataInvestigation: [...state.selectedDataInvestigation, {
                            id: payload.id,
                            [payload.tittle]: payload.value
                        }]
                    };

                }




            }


        case SET_SUBMISSION_DATA_PRESCRIPTION:

            let key = Object.keys(payload)[0]
            state.submissionData[key] = payload[key]

            let newSubmission = state.submissionData
            newSubmission[key] = payload[key]

            return {
                ...state,
                submissionData: newSubmission

            };

        case UPDATE_INVESTIGATION_TABLE_DATA:

            return {
                ...state,
                investigationData: payload

            };

        case UPDATE_MEDICINE_TABLE_DATA:

            return {
                ...state,
                medicinesData: payload

            };


        //case INTERBRANCH_ADMIN_DETAILED:


        //         return {
        //             ...state,
        //             detailedReportTable: payload.data,
        //             detailedReportTableTotalPages:payload.totalPages
        //         };


        default:
            return state;
    }
};