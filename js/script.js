//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/*global $*/
var userChoice = "hello";
var computerchoice = choices;
var winner = "";
var choices = ['rock', 'paper', 'scissors', ]



$(document).ready(function() {


    $("#try").click(function() {
        var entered= $("#input").val();
        var random = choices[Math.floor(Math.random() * choices.length)];
        $("h2").html("Your choice: " + entered);
        $("h3").html("Computer choice: " + random);

        if (entered === "rock" && random === "rock") {
            
           $("#result").html("No winner");
        }
       
    })
});




/*console.log(computerchoice.length);

//Challenge 2: Generate a random number between 0 and the amount of items in this array. Print this number to the console.
console.log( Math.floor(Math.random()*computerchoice.length+1));

//Challenge 3: Using the random number, select a random item out of the array.
console.log(computerchoice[0]);
*/
