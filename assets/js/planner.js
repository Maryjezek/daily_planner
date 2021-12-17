var currentDayEl = $("#currentDay");

var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // this is the line that edits date format
//This will populate the text of the tag CurrentDay with the current date
currentDayEl.text("The current day and time is: " + today);

//var twoDaysFromNow = moment().add(2, "days");

//editable text
// task text was clicked
$(".session").on("click", ".session-title", function () {
  // get current text of button clicked element
  var text = $(this).text().trim();

  // replace element with a new textarea
  var textInput = $("<textarea>").addClass("form-control").val(text);
  $(this).replaceWith(textInput);

  // auto focus new element
  textInput.trigger("focus");
});

// editable field was un-focused
$(".session").on("blur", "textarea.form-control", function () {
  // get current value of textarea
  var text = $(this).val();
  var h4 = $("<h4>").addClass("session-title").text(text);
  var id = $(this).parent()[0].id;

  $(this).replaceWith(h4);
  localStorage.setItem(id, text);
});

$(".session").each(function () {
  var timeslotValue = localStorage.getItem(this.id);
  if (timeslotValue) {
    $(this).find("h4").text(timeslotValue);
  }
  var time = $(this).attr("data-time");
  console.log(moment().format("ha"));
  console.log(time);
  if (time == moment().format("ha")) {
    $(this).addClass("present");
  }
  //this doesn't work
  if (time < moment().format("ha")) {
    $(this).addClass("past");
  }
  if (time > moment().format("ha")) {
    $(this).addClass("future");
  }
});