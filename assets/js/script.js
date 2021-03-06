//Letting DOM know I will be using jQuery
$(document).ready(function () {

    // Save button function listening for clicks
  $(".saveBtn").on("click", function () {

    //getting time and text values
    var value = $(this).siblings(".text-description").val();
    var time = $(this).parent().attr("id");

    //saving to local storage
    localStorage.setItem(time, value);

    //show notification that items were saved
    $('.notification').addClass('show');

    // remove 'show' class after 5 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);

  });

  function updateHour() {
    var currentHr = moment().hours();
    //loop over time blocks
    $(".time-block").each(function () {
      var blockHr = parseInt($(this).attr('id').split('-')[1]);
        //check to see if we are in current time
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

  //Check every 15 seconds to see if time is updated
  var interval = setInterval(updateHour, 15000);

  //load data saved into local storage
  $("#hour-9 .text-description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .text-description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .text-description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .text-description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .text-description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .text-description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .text-description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .text-description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .text-description").val(localStorage.getItem("hour-17"));

//   Show the current day on the page.
  $("#current-day").text(moment().format("dddd, MMMM Do"));
});
