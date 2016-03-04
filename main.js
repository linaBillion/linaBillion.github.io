var daysLeftContainer = document.getElementById('epic-count-down-days-timer-container');
var weeksLeftContainer = document.getElementById('epic-count-down-weeks-timer-container');
var monthsLeftContainer = document.getElementById('epic-count-down-months-timer-container');


var currentDate = Date.now();
var myBirthday = 1471676400000;
var timeLeft = myBirthday - currentDate;

var daysLeft = timeLeft / 1000 / 3600 / 24;
var weeksLeft = timeLeft / 1000 / 3600 / 24 / 7;
var monthsLeft = timeLeft / 1000 / 3600 / 24 / 30;


// daysLeftContainer.innerHTML = Math.floor(daysLeft) + ' Days Left Until You Turn 24';
// weeksLeftContainer.innerHTML = Math.floor(weeksLeft) + ' Weeks Left Until You Turn 24';
// monthsLeftContainer.innerHTML = Math.floor(monthsLeft) + ' Months Left Until You Turn 24';

daysLeftContainer.innerHTML = Math.floor(daysLeft) + ' Days';
weeksLeftContainer.innerHTML = Math.floor(weeksLeft) + ' Weeks';
monthsLeftContainer.innerHTML = Math.floor(monthsLeft) + ' Months';



// document.getElementsByClassName('test');
