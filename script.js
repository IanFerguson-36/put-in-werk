var currentDay = $("#currentDay");
function currentDayofDate() {
  currentDay.text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  console.log(currentDay);
}
function timeBlocks() {
  $(".time-block").each(function () {
    console.log($(this).attr("id").split("-")[1]);
  });
}
function saveButton() {}
timeBlocks();
currentDayofDate();
