module.exports = function convertTime(date) {
  var time;
  var seconds = Math.ceil((Date.now() - Date.parse(date))/1000);
  if (seconds >= 691200) {
    var day = new Date(date);
    time = day.getDay() + "/" + day.getMonth() + "/" + day.getFullYear();
  } else if (seconds >= 86400) {
    time = Math.floor(seconds / 86400) + "d";
  } else if (seconds >= 3600) {
    time = Math.floor(seconds / 3600) + "h";
  } else if (seconds >= 59) {
    time = Math.floor(seconds / 60) + "m";
  } else {
    time = seconds + "s";
  }
  return time;
}
