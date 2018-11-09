
// Create an array of words
var words = ["rope", "map", "danger"];

// empty arrays for underscores and guesses
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
// Choose words randomly
var randomNumber = Math.floor(Math.random() * words.length);
var chosenWord = words[randomNumber];



// Create underscores based on wordlength

var generateUnderscore = function () {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    document.getElementById("hiddenWord").innerHTML = underScore.join(" ");
    return underScore;

}
generateUnderscore();

// Get User Guess
document.addEventListener("keydown", userGuess, false);
function userGuess(event) {
    // Capture which key is being pressed
    var userKeyPress = event.which || event.keyCode;
    var letterPress = String.fromCharCode(userKeyPress);
    // Check if it is right, but first break word into array
    characterLetterList = chosenWord.split('');

    if (characterLetterList.includes(letterPress.toLowerCase())) {
        console.log("yes");
        // check if the letter is already in the array
        if (!rightLetter.includes(letterPress)) {
            rightLetter.push(letterPress);
        }
        document.getElementById("right_letter").innerHTML = rightLetter;
    } else {
        console.log("no");
        // check if the letter is already in the array
        if (!wrongLetter.includes(letterPress)) {
            wrongLetter.push(letterPress);
        }
        document.getElementById("wrong_letter").innerHTML = wrongLetter;
    }
    console.log(characterLetterList.indexOf(letterPress.toLowerCase()));
}

// Replace underscores with corresponding correct letter





// PIE IN THE SKY - It would be cool to have this set to a classic arcade game, like pitfall or maybe a movie like Indiana Jones and the Temple of Doom.

