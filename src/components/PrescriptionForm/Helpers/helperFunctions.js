export const validateNumberOnKeyPress = (event) => {


    if (event.which == 46 || event.which == 8) {
        //do nothing
    }
    else if (event.which < 48 || event.which > 57) {
        event.preventDefault();
    }
    else if (event.target.value.length > 9) {

        event.preventDefault();
    }


}


let gerErrorMessage = (type, name) => {

    let errorMessageText = `${name} can't empty. please enter the ${name}!!!`
    let errorMessageSelect = `${name} can't empty. please select the ${name}!!!`


    if (type == 'select') {
        return { status: false, error: errorMessageSelect }
    }
    else {
        return { status: false, error: errorMessageText }
    }

}


export const validateFormData = (reports, investigationtableData, medicineTableData) => {



  
    if (reports.height.value ||
        reports.height.unit ||
        reports.weight.value ||
        reports.weight.unit ||
        reports.lmp ||
        reports.chiefComplaints ||
        reports.releventPoint ||
        reports.diagnosis ||
        reports.additionalInstruction||
        reports.examination || validateInvestigationTable(investigationtableData).status===true || validateMedicinetable(medicineTableData).status===true ) 
         {


        return { status: true, error: validateMedicinetable(medicineTableData) };
    }

   
}

export const validateInvestigationTable = (table_data) => {

    let result = { status: false, error: "message" }


    for (const element of table_data) {

        if (element.name) 
        {
           result= { status: true, error: "message" }
            break

        }
        else if (element.comment) {
            result= { status: true, error: "message" }
            break

        }

    }


    return result

}


export const validateMedicinetable = (table_data) => {

   

    let result = { status: false, error: "initial" }
    let process = null


    for (const element of table_data) {

        if (element.type) {
            result = { status: true, error: "" }
            break

        }
        else if (element.name) {
            result = { status: true, error: "" }
            break

        }
        else if (element.when) {
            result = { status: true, error: "" }
            break

        }
        else if (element.freequancy) {
            result = { status: true, error: "" }
            break

        }
        else if (element.quantity) {
            result = { status: true, error: "" }
            break

        }
        else if (element.unit) {
            result = { status: true, error: "" }
            break

        }
        else if (element.date) {
            result = { status: true, error: "" }
            break

        }
        else if (element.days) {
            result = { status: true, error: "" }
            break

        }
        else if (element.instructions) {
            result = { status: true, error: "" }
            break

        }


    }


    return result

}



export const validateMedicineTableForAddNewRow =(table_data)=>{

    let result = { status: true, error: "message" }
    let process = null


    for (const element of table_data) {

     
         if (!element.name) {
            process = { id: element.id, element: "Name of Medicine" }
            break

        }
        

    }

    result = process ? { status: false, error: `"${process.element}"  of ${process.id + 1}${process.id + 1 == 1 ? "st" : process.id + 1 == 2 ? "nd" : process.id + 1 == 3 ? "rd" : "th"} medicine on the Medicines table is missing` } : { status: true, error: "message" }


    return result



}


export const validateInvestigationtableForAddNewRow=(table_data)=>{

    let result = { status: true, error: "message" }


    for (const element of table_data) {

        if (!element.name) 
        {
           result= { status: false, error: "Name missing" }
            break

        }
        

    }


    return result

}


export const getAddInvestigationButtonText=(length)=>{

    if(length==0)
    {
        return ("Add investigation")
    }
    else if(length>0)
    {
        return ("Add Investigations")
    }

}

