$(document).ready(function() {

//set random values to the 4 gems
var gem1 = Math.floor(Math.random() * 9) + 1;
var gem2 = Math.floor(Math.random() * 59) + 11;
var gem3 = Math.floor(Math.random() * 220) + 60;
var gem4 = Math.floor(Math.random() * 555) + 221;
console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);

//set random score to achieve for win
scoreGoal = Math.floor(Math.random() * 2500) + 1000;
console.log(scoreGoal);

//set score table to 0
var wins = 0;
var losses = 0;
})