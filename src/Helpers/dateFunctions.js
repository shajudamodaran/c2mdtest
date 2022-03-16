export const isWithinMinutes = (date, time) => {

  var date = new Date();
  var appointmentDate = setDateTime(date,time);
  var FIVE_MIN = 5 * 60 * 1000;


  if ((date - appointmentDate) < FIVE_MIN) {
    return true
  }


}

function setDateTime(date, time) 
{
  var index = time.indexOf(":"); // replace with ":" for differently displayed time.
  var index2 = time.indexOf(" ");

  var hours = time.substring(0, index);
  var minutes = time.substring(index + 1, index2);

  var mer = time.substring(index2 + 1, time.length);
  if (mer == "PM"){
      hours = hours + 12;
  }


  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds("00");

  return date;
}