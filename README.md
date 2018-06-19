# TriviaGame
Building a basic trivia game for class. Be warned. It is timed!

This is a Harry Potter themed trivia game with currently only 8 questions although many more could be added fairly seamlessly. This game is just intended for fun. There's no secret use for this webpage.

The application starts on a relatively blank screen with clickable text to start the game. After a brief animated gif, the first question is presented with a 20 second timer and 4 possible answers. After an answer is chosen or the time runs out, a result is shown for whether you were correct or not (along with the right answer, in case you guessed incorrectly). After 3 seconds it proceeds to the next questions and so on until it shows the final result. The final results includes a tally of your correct answers and wrong answers and also presents a reset button to return to the start.

A little bit about the guts:

All the logic is made using basic Javascript. However, for DOM manipulation, jQuery is implimented. This file can be found at assets/javascript/app.js

The webpage, found at index.html , is only made up of 2 different major divs which each contain other elements. These major divs include the startButton and gameBox. Within the gameBox we have the questionBox, resultsBox and finalResults. Each of those elements (and their child-elements) are displayed or hidden as appropriate using simple jQuery .show() and .hide() methods, respectively.

To fill the questionBox, we create a Js array for each round. These rounds are, themselves, each an object with includes a question, 4 possible choices and the correct answer. The timer is started and the questionBox is then populated with each appropriate value when the updateQuestion function is called--first occuring when the startButton is clicked. After each answer, an updateResults function is called which runs similar to the updateQuestion function but used to populate the resultBox and hide the questionBox. After bouncing back and forth between question and result, we automatically call the displayFinal function which reveals the finalResults elemtent. This can be achieved by making guesses (right or wrong) or by waiting it out-- 20 seconds per question and 3 seconds per result. When it's all over, on the finalResults screen, a resetButton is presented to click and run a resetGame function. This clears out all relevant variables and/or returns them to their inital values-- correct guesses, wrong guesses, an index placeholder, a second tracker and any of the user's guesses. Lastly it will hide everything but the startButton and it's relevant elements.

This project, in it's current form, was made entirely by James Kendall Bruce (although he did research many similar trivia project for ideas).

Any questions can be directed to jameskendallbruce@gmail.com