// variables and arrays
//==================================================
var wordOptions = ["rope", "map", "danger", "skeleton"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 5;


// Functions
//==================================================

function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;


    //reset guesses
    guessesLeft = 5;
    wrongLetter = [];
    blanksAndSuccesses = [];

    //populate blanks and successes
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Update HTML
    document.getElementById("word-to-guess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("lives-left").innerHTML = guessesLeft;
    document.getElementById("win-counter").innerHTML = winCount;
    document.getElementById("loss-counter").innerHTML = lossCount;


}

function checkLetters(letter) {
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
}

function roundComplete() {
    document.getElementById("win-counter").innerHTML = winCount;
    document.getElementById("loss-counter").innerHTML = lossCount;
    document.getElementById("lives-left").innerHTML = guessesLeft;
    document.getElementById("word-to-guess").innerHTML = blanksAndSuccesses.join(" ");


    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        swal({
            title: "Good job, you saved Indy!",
            button: "Play Again?",
            icon: "success",
            className: "win-modal",
          });
        document.getElementById("win-counter").innerHTML = winCount;

        startGame();
    }
    else if (guessesLeft == 0) {
        lossCount++;
        swal({
            title: "You are skeleton food!",
            button: "Try again?",
            icon: "error",
          });
        document.getElementById("loss-counter").innerHTML = lossCount;
        startGame();
    }
}

//==================================================
startGame();

document.onkeyup = function (e) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();


}