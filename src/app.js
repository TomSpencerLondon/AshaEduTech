function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Work out 1, 436 + 217", ["1653", "1250","1554", "1353"], "1653"),
    new Question("Calculate 26 x 19", ["364", "552", "123", "494"], "494"),
    new Question("Work out 110 / 4 exactly", ["33.2", "25.7","27.5", "22.7"], "27.5"),
    new Question("Write 2 / 5 as a decimal", ["0.4", "0.35", "0.6", "0.7"], "0.4"),
    new Question("Find the value of 5x - 3y when x = -2 and y = -4", ["-16", "-12", "26", "-22"], "-22")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
