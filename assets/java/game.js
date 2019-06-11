$(document).ready(function () {

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

    //pushing random score goal to "budget"
    $("#gtotal").text(scoreGoal);

    //set score table to 0
    var wins = 0;
    var losses = 0;

    //pushing wins/losses to span
    $("#wins2").text(wins);
    $("#losses2").text(losses);

    //set holder for user score count
    var scoreTotal = 0;

    //pushing score to cart total
    $("#ytotal").text(scoreTotal);

    //set a function for win
    function win() {
        alert("Store Owner: Congratulations! You win! Thanks for the business! Enjoy your shiny new rocks!");
        wins = wins + 1; //add point to wins
        $("#wins2").text(wins); //push updated wins to span
        reset(); //reset
    }

    //set a function for loss
    function lose() {
        alert("Store Owner: This ain't no charity, get out of my store!");
        losses = losses + 1; //add point to losses
        $("#losses2").text(losses); //push updated losses to span
        reset(); //reset
    }

    //game reset function for button
    function reset() {
        scoreTotal = 0;
        scoreGoal = Math.floor(Math.random() * 2500) + 1000;
        gem1 = Math.floor(Math.random() * 9) + 1;
        gem2 = Math.floor(Math.random() * 59) + 11;
        gem3 = Math.floor(Math.random() * 220) + 60;
        gem4 = Math.floor(Math.random() * 555) + 221;
        $("#ytotal").text(scoreTotal);
        $("#gtotal").text(scoreGoal);
        console.log("new goal:" + scoreGoal);
        console.log(gem1);
        console.log(gem2);
        console.log(gem3);
        console.log(gem4);   
    }

    //tie reset function to button        
    $("#reset").on("click", function() {
        reset();
    });

    //click functions for gems
    $("#gem1").click(function() {
        scoreTotal = scoreTotal + gem1;
        console.log(scoreTotal);
        $("#ytotal").text(scoreTotal);
          if (scoreTotal === scoreGoal) {
            win();
          } 
          else if (scoreTotal > scoreGoal) {
            lose();
          }
    });

    $("#gem2").click(function() {
        scoreTotal = scoreTotal + gem2;
        console.log(scoreTotal);
        $("#ytotal").text(scoreTotal);
          if (scoreTotal === scoreGoal) {
            win();
          } 
          else if (scoreTotal > scoreGoal) {
            lose();
          }
    });

    $("#gem3").click(function() {
        scoreTotal = scoreTotal + gem3;
        console.log(scoreTotal);
        $("#ytotal").text(scoreTotal);
          if (scoreTotal === scoreGoal) {
            win();
          } 
          else if (scoreTotal > scoreGoal) {
            lose();
          }
    });

    $("#gem4").click(function() {
        scoreTotal = scoreTotal + gem4;
        console.log(scoreTotal);
        $("#ytotal").text(scoreTotal);
          if (scoreTotal === scoreGoal) {
            win();
          } 
          else if (scoreTotal > scoreGoal) {
            lose();
          }
    });
})