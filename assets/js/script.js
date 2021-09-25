// HW is covered on 09/23/2021 3 minutes into the video. Mini Project for unit 5 will help tremendously on the HW. The HW is talked about for 7 minutes
// moment.js is discussed on 9/22/2021 1 hr 46 min 30 sec in.
//Boot strap is discussed in 09/21/2021 02 hr 07 minutes
//  Psuedo code
// I need to create a daily planner to create a schedule. When the user opens the planner the should :
// 1. They should see the current day is displayed at the top of the calendar.
// 2. When the user scrolls down they should see time blocks for standard business hours so from 8 - 5 pm.
// 3. When they view the timeblocks for that day- each timeblock is color coded to indicate whether its in the past present or future.
// 4. When they click each timeblock they can enter an event.
// 5. When they clock the save button for that timeblock then the test for that event is stored into local storage.
// 6. When the page is refreshed then the saved event persists.

// var timeDisplayEl = $("currentDay");

// function displayToday(){
    // timeDisplayEl = moment().format("MMM Do, YYYY")
    // console.log(todaysDate);
    
var today = moment();

$("#currentDay").text(today.format("MMM Do, YYYY"));
console.log(today)






















