export const INVESTIGATION_HEAD = "Investigation"
export const MEDICINE_HEAD = "Medicine"

//common
export const DELETE_FLAG = "Delete"

//investigation table
export const INVESTIGATION_TABLE_HEADING_NAME = "InvestigationName"
export const INVESTIGATION_TABLE_HEADING_COMMENTS = "Instructions"

//Medicine Table
export const MEDICINE_TABLE_HEADING_MEDICINE_TYPE= "MedicineType"
export const MEDICINE_TABLE_HEADING_MEDICINE_NAME= "MedicineName"
export const MEDICINE_TABLE_HEADING_MEDICINE_WHEN= "Whentohave"
export const MEDICINE_TABLE_HEADING_MEDICINE_FREEQUANCY= "Frequency"
export const MEDICINE_TABLE_HEADING_MEDICINE_QUALITY= "Quantity"
export const MEDICINE_TABLE_HEADING_MEDICINE_UNIT= "Unit"
export const MEDICINE_TABLE_HEADING_MEDICINE_START_DATE= "StartingDate"
export const MEDICINE_TABLE_HEADING_MEDICINE_DAYS= "Noofdays"
export const MEDICINE_TABLE_HEADING_MEDICINE_INSTRUCTIONS= "Instructions"




export const getNumberOfDays = (max) => {

    let result=[]


    for (let i = 1; i <= max; i++) 
    {
       result.push(i)
    }

    return result

}




