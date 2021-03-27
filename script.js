var currentDay = $("#currentDay");
var counter = 1;
function currentDayofDate() {
  currentDay.text(moment().format("MMMM Do YYYY"));
  console.log(currentDay);
}
function timeBlocks() {
  var now = moment().format("h:mm:ss a");
  $("time-block").each(function(){
     console.log($(this).attr('id'))
if (timeLoop < now) {
    $("description").addClass("past");
  } else if (timeLoop > now) {
    $("description").addClass("future");
  } else {
    $("description").addClass("present");
  }
counter++;
}
}

function saveButton() {}
timeBlocks();
currentDayofDate();
