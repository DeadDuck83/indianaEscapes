// variables and arrays
var wordOptions = ["rope", "map", "danger", "skeleton"];
var chosenWord = "";
var lettersinWord = [];
var numBlanks = 0;
var underscore = [];
var wrongLetters = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 5;
var music1 = new Audio("./assets/music/adventurousMusic.mp3");
var isPlaying = false;

//set object referenced
playbtn = document.getElementById("playPauseBtn");
// event handler
playbtn.addEventListener("click", playPause)
// function for toggle
function playPause() {
    if(isPlaying) {
        music1.pause();
        playbtn.style.background = "url(./assets/image/mute-audio.gif) no-repeat";
        isPlaying = false;
    } else {
        music1.play();
        music1.loop = true;
        playbtn.style.background = "url(./assets/image/play-audio.gif) no-repeat";
        isPlaying = true;
    }
}

// music1.play();
//     music1.loop = true;
// Function that runs the game.

function startGame() {
    
    // select a word from an array
    chosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    // split word up into an array of letters
    lettersinWord = chosenWord.split("");
    // get the number of blanks
    numBlanks = lettersinWord.length;


    // Everytime the game is run. reset these variables to default
    guessesLeft = 5;
    wrongLetter = [];
    underscore = [];

    //populate the underscore
    for (var i = 0; i < numBlanks; i++) {
        underscore.push("_");
    }

    // Keep the previous round score carried to next round without resetting it.
    document.getElementById("word-to-guess").innerHTML = underscore.join(" ");
    document.getElementById("lives-left").innerHTML = guessesLeft;
    document.getElementById("win-counter").innerHTML = winCount;
    document.getElementById("loss-counter").innerHTML = lossCount;


}
// check to see if key pressed is in the word
function checkLetters(letter) {
    var isLetterInWord = false;
    // tricky part. Tried a while (x !== -1) and that broke my brain. So did some crying and found out using a bolean would work for varification, then for loop to find all instances. Goes through all letters.
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    // right letter guesses
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] == letter) {
                underscore[i] = letter;
            }
        }
    }
    // wrong letter guesses
    else {
        wrongLetters.push(letter);
        guessesLeft--;      
    }
}
// after every game. itterate HTML
function gameComplete() {
    document.getElementById("win-counter").innerHTML = winCount;
    document.getElementById("loss-counter").innerHTML = lossCount;
    document.getElementById("lives-left").innerHTML = guessesLeft;
    document.getElementById("word-to-guess").innerHTML = underscore.join(" ");


    if (lettersinWord.toString() == underscore.toString()) {
        winCount++;
        // alert with cool 3rd party alert message editor
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
        // alert you lost
        swal({
            title: "You are skeleton food!",
            button: "Try again?",
            icon: "error",
          });
        document.getElementById("loss-counter").innerHTML = lossCount;
        startGame();
    }
}

// start the game on load. Call the Function.
startGame();
// after game is started, capture the key pressed
document.onkeyup = function (e) {
    // get guess
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    // run checkLetter function
    checkLetters(letterGuessed);
    // complete the game
    gameComplete();


}
