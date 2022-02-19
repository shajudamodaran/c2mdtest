export const isWithinMinutes=(date,time)=>{

    var date = new Date();
    var appointmentDate = new Date(date,time);
    var FIVE_MIN=5*60*1000;

    if((date - new Date(appointmentDate)) < FIVE_MIN) {
       return true
     }
}