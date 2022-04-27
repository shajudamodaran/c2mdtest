import moment from "moment";

export const isWithinMinutes = (date, time) => {

  var date = new Date()



  var appointmentDate = moment(time, 'hh:mm A')._d
  var FIVE_MIN = 5 * 60 * 1000;

   console.log(appointmentDate-date,date,FIVE_MIN);


  if ((appointmentDate-date) > FIVE_MIN) {
    return true
  }


}

function setDateTime(date, time) {


  var index = time.indexOf(":"); // replace with ":" for differently displayed time.
  var index2 = time.indexOf(" ");

  var hours = time.substring(0, index).toString();
  var minutes = time.substring(index + 1, index2);

  var mer = time.substring(index2 + 1, time.length);

  if (mer == "PM") {
    hours = hours + 12;
  }


  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds("00");

  console.log(hours);

  return date;
}

export const separaetdateAndTime = (date_string) => {


  if (date_string) {
    let arr = date_string.split(" ");
    return {
      date: arr[0],
      time: arr[1]
    }



  }

}


export const convertDateToString = (_date) => {

  if (_date) {

   return moment(_date).format("DD-MMM-YYYY"); 

  }

}