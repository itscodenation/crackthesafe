// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var number1 = "" + Math.floor(Math.random() * 10);
var number2 = "" + Math.floor(Math.random() * 10);
var number3 = "" + Math.floor(Math.random() * 10);
var number4 = "" + Math.floor(Math.random() * 10);   


// DOCUMENT READY FUNCTION BELOW
$( document ).ready(function() {

  $("#verify").click(function() {
      var numbersCorrect = 0;
      var numbersInPlace = 0;
      console.log(number1 + " " + number2 + " " + number3 + " " + number4); 
      var guess1 = $('#number1').val();
      var guess2 = $('#number2').val();
      var guess3 = $('#number3').val();
      var guess4 = $('#number4').val();

      if (number1 === guess1) { 
          numbersCorrect = numbersCorrect + 1;
          numbersInPlace = numbersInPlace + 1;
      } else if (number1 === guess2 || number1 === guess3 || number1 === guess4) {
          numbersCorrect = numbersCorrect + 1;
      }
      if (number2 === guess2) {      
          numbersCorrect = numbersCorrect + 1;
          numbersInPlace = numbersInPlace + 1;
      } else if (number2 === guess1 || number2 === guess3 || number2 === guess4) {
          numbersCorrect = numbersCorrect + 1;  
      } 
      if (number3 === guess3) {
          numbersCorrect = numbersCorrect + 1;
          numbersInPlace = numbersInPlace + 1;
      } else if (number3 === guess1 || number3 === guess2 || number3 === guess4) {
          numbersCorrect = numbersCorrect + 1;
      }
      if (number4 === guess4) {
          numbersCorrect = numbersCorrect + 1;
          numbersInPlace = numbersInPlace + 1;
      } else if (number4 === guess1 || number4 === guess3 || number4 === guess2) {
          numbersCorrect = numbersCorrect + 1;
      }

      $('#userChoice').text("User input: " + number1 + " " + number2 + " " + number3 + " " + number4);
      if (numbersInPlace === 4) {
          $('.results').text("Congratulations you win!!!");
      } else {
          $('.results').text("Numbers correct: " + numbersCorrect + ", numbers in correct place: " + numbersInPlace);
      }
  });
});
