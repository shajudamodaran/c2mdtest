
let ConsultationStatusArray = [
    { status: "Upcoming", flag: "Upcoming" },
    { status: "Completed", flag: "Completed" },
    { status: "Cancelled by Patient", flag: "Error" },
    { status: "Cancelled by Doctor", flag: "Error" },
    { status: "Technical Error - Doctor", flag: "Error" },
    { status: "Technical Error - Patient", flag: "Error" },
    { status: "Doctor Unavailable", flag: "Pending" },
    { status: "Patient Unavailable", flag: "Pending" },
    { status: "Doctor & Patient No-show", flag: "Pending" },
    { status: "Not Available", flag: "Upcoming" },
]

export const getConsultationStatusFlag = (status) => {

    if (status) {

        let flag = ConsultationStatusArray.filter((element) => element.status === status)
        return flag.length > 0 ? flag[0].flag : "Upcoming"
    }
    else{
        return "Upcoming"
    }

}