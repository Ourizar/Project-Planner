$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".text-description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  function updateHour() {
    var currentHr = moment().hours();
    $(".time-block").each(function () {
      var blockHr = mom;

      if (blockHr < currentHr) {
        $(this).addClass("past");
      } else if (blockHr === currentHr) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
 
  updateHour();

  var interval = setInterval(updateHour, 15000);


  $("#hour-9 .text-description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .text-description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .text-description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .text-description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .text-description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .text-description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .text-description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .text-description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .text-description").val(localStorage.getItem("hour-17"));

  $("#current-day").text(moment().format("dddd, MMMM Do"));
});
