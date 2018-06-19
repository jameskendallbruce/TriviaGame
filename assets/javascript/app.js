// making sure the document is ready
$( document ).ready(function() {

    // an array containg all of the questions, choices and correct answer for each question.
    // these entries are then called by index number and each element is filled in the html with the corresponding values.
    var qA = [

        round1 = {

            question : "In what year was Harry Potter born?",
            
            choiceA : "1980",

            choiceB : "1981",

            choiceC : "1990",

            choiceD : "1991",

            answer : "1980"

        },

        round2 = {

            question : "Which of the creators of the Marauder's Map was referred to as Padfoot?",
            
            choiceA : "Remus Lupin",

            choiceB : "Peter Pettigrew",

            choiceC : "Sirius Black",

            choiceD : "James Potter",

            answer : "Sirius Black"           

        },

        round3 = {

            question : "What spell would be used to unlock a locked door?",
            
            choiceA : "Alohomora",

            choiceB : "Wingardium Leviosa",

            choiceC : "Expelliarmus",

            choiceD : "Accio",

            answer : "Alohomora"           

        },

        round4 = {

            question : "What Hogwarts house did Merlin (yes, that Merlin) belong to?",
            
            choiceA : "Gryffindor",

            choiceB : "Slytherin",

            choiceC : "Ravenclaw",

            choiceD : "Hufflepuff",

            answer : "Slytherin"           

        },

        round5 = {

            question : "After Harry Potter heroically sacrifices himself, where does his consciousness awaken to find himself?",
            
            choiceA : "The Gryffindor Common Room",

            choiceB : "Godric's Hollow",

            choiceC : "A Pensieve",

            choiceD : "King's Crossing",

            answer : "King's Crossing"           

        },

        round6 = {

            question : "In which book does Harry Potter's Quidditch team first successfully win the Quidditch Cup?",
            
            choiceA : "...The Sorcerer's Stone",

            choiceB : "...The Prisoner of Azkaban",

            choiceC : "...The Order of the Phoenix",

            choiceD : "...The Half-Blood Prince",

            answer : "...The Prisoner of Azkaban"           

        },

        round7 = {

            question : 'In book 5, Harry and his like-minded friends start an underground Defense Against the Dark Arts class which they name "D.A." What do those initials stand for?',
            
            choiceA : "Defense Against",

            choiceB : "Dark Arts",

            choiceC : "Dragon Avengers",

            choiceD : "Dumbledore's Army",

            answer : "Dumbledore's Army"           

        },

        round8 = {

            question : "What is Dumbledore's full name?",
            
            choiceA : "Albus Percival Brian Wulfric Dumbledore",

            choiceB : "Albus Wulfric Percival Brian Dumbledore",

            choiceC : "Albus Percival Wulfric Brian Dumbledore",

            choiceD : "Albus Brian Wulfric Percival Dumbledore",

            answer : "Albus Percival Wulfric Brian Dumbledore"           

        },


        // some extra slots in case I want to add more questions.
        // round9 = {

        //     question : "A B C OR D?",
            
        //     choiceA : "A",

        //     choiceB : "B",

        //     choiceC : "C",

        //     choiceD : "D",

        //     answer : "A"           

        // },

        // round10 = {

        //     question : "A B C OR D?",
            
        //     choiceA : "A",

        //     choiceB : "B",

        //     choiceC : "C",

        //     choiceD : "D",

        //     answer : "B"           

        // },

    ]

    // determines the array index when calling the questions
    var nextQ = 0

    // tracks your correct guesses
    var correct = 0;

    //  tracks your incorrect guesses and/or "time's up" occurences
    var wrong = 0;

    // starting time left when the timer function is called.
    // timing was off if I began with 20 so instead it displays 20 and then runs from 19 to 0
    var sec = 19;

    // logs the users guesses
    var userInput;

    // tried a looooot of variations of this before landing on this timer function.
    // Many did not follow the 1 per second interval due to poor syntax.
    // This one ended up being both simpler and functional.
    function timer() {

        // calls the timer div and starts it at 20
		$("#timer").html("20");
        
        // new var to call our timer function. starts with a setInterval to have it repeating.
        x = setInterval(function () {
            
            // fills the timer div with the current remaining time (sec)
            $("#timer").html(sec);
            
            // then subtracts 1 second
            sec--;
            
            // and if loop to check if time is up
            if (sec === -1) {
                
                // stops it from running, calls the results and resets the time for later.
                clearInterval(x);
                
                updateResults();
                
                sec = 19;
            
            }
        
            // how frequently this interval occurs. every 1000 milliseconds = 1 second.
        }, 1000);

	}



    // how we initialize the game. click the words to load the gif
    $("#greeting").click(function() {

        $("#mapgif").show();

        $("#greeting").hide();

        // after the map gif runs for 4 seconds, we transition to the game.
        setTimeout(function() {

            // start screen is gone (including the gif)
            $("#startButton").hide();

            // the game screen is loaded
            $("#gameBox").show();

            // a new background is inserted.
            $("body").css({"background": "url(assets/images/marauders1.jpg)", "background-repeat": "no-repeat", "background-attachment": "fixed", "background-position": "center"});

            // prints the new question to the game screen.
            updateQuestion();

            // starts the timer as described above.
            timer();

            // waits 4 seconds before runnign it.
        }, 4000);


    });



    // this function is called whenever we move on to the next question
    function updateQuestion() {

        // fills the question slot and each guess with their respective text.
        $("#qSpot").text(qA[nextQ].question);

        $("#buttonA").text(qA[nextQ].choiceA);

        $("#buttonB").text(qA[nextQ].choiceB);

        $("#buttonC").text(qA[nextQ].choiceC);

        $("#buttonD").text(qA[nextQ].choiceD);

        // displays the question and guessing elements of the game screen 
        $("#questionBox").show();

        // shows the timer
        $("#timer").show();

        // hides the results (since they won't be called until a guess is made)
        $("#resultBox").hide();

        // hides the final results because we are still playing.
        $("#finalResults").hide();

    }



    // how answers are chosen. all 4 function the same.
    $("#buttonA").on("click", function() {

        // userInput is defined as the answer that you guessed
        userInput = qA[nextQ].choiceA;

        // calls the results of the guess
        updateResults();

    });

    $("#buttonB").on("click", function() {

        userInput = qA[nextQ].choiceB;

        updateResults();

    });

    $("#buttonC").on("click", function() {

        userInput = qA[nextQ].choiceC;

        updateResults();

    });

    $("#buttonD").on("click", function() {

        userInput = qA[nextQ].choiceD;

        updateResults();

    });



    // called after time runs out or an answer is chosen
    function updateResults() {;

        // timer is hidden and will be recalled when we return to questions
        $("#timer").hide();

        // questions are hidden
        $("#questionBox").hide();

        // shows the results instead
        $("#resultBox").show();

        // shows the correct answer regardless of what was guessed.
        $("#correctA").text("Answer: " + qA[nextQ].answer);

        // if loop to see whetehr you ran out of time
        if(sec <= 0) {

            $("#score").text("Yikes! You ran out of time.")

            wrong++;

        }

        // checks if your guess matched the correct answer
        else if(userInput === qA[nextQ].answer) {

            console.log("User guessed: " + userInput);

            console.log("Answer is: " + qA[nextQ].answer);

            $("#score").text("CORRECT!! 10 points to Gryffindor!!")

            correct++;

        }

        // any remaining scenario. in this instance, it would only be wrong guesses
        else {

            console.log("User guessed: " + userInput);

            console.log("Answer is: " + qA[nextQ].answer);

            $("#score").text("Good try but alas incorrect.")

            wrong++;

        }

        // these run regardless of guess.
        // changes the array index by +1.
        nextQ++;

        // resets the time and clears the intervals. (It acted a little wonky if I wasn't thorough)
        clearInterval(x);
        
        sec = 19;

        // checks if there are any questions left
        if (nextQ >= qA.length) {

            // if not, it calls the final results after 3 seconds of displaying the current result screen.
			setTimeout(displayFinal, 3000)
            
            return;
        
        }
        
        // if there are questions left...
        else {
            
            // moves on to display the next question
            x = setTimeout(updateQuestion, 3000);
        
            // after 3 seconds of displaying the result screen
            x = setTimeout(timer, 3000);

        }

    }



    // called to display your final score and offer a reset button to try again
    function displayFinal() {

        // again. we clear the timer. We'll call it again if the game is reset.
        clearInterval(x);
        
        // hides and shows all appropriate screens
        $("#questionBox").hide();

        $("#resultBox").hide();

        $("#finalResults").show();

        // adds the reset button. this is key to continuing playing
        $("#resetButton").show();

        // shows your scores for right and wrong
        $("#finalCorrect").text("Correct: " + correct);

        $("#finalWrong").text("Wrong: " + wrong);

    }


    // reset the game when you done.
    $("#resetButton").on("click", function (){

        // sets everything to it's base value and clears the interval again.
        correct = 0;

        wrong = 0;

        clearInterval(x);

        sec = 19;

        userInput = "";

        nextQ = 0;

        // hides and/or shows all appropriate elements to get back to the start screen.
        $("#finalResults").hide();

        $("#resultBox").hide();

        $("#gameBox").hide();

        $("#resetButton").hide();

        $("#startButton").show();

        $("#greeting").show();

        $("#mapgif").hide();

        $("body").css({"background": "url(assets/images/texture.jpeg)", "background-repeat": "no-repeat", "background-attachment": "fixed", "background-position": "center"});

    })


// end of ready function
});