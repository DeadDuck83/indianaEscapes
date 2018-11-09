
// Create an array of words
var words = ["rope", "map", "danger"];

// empty arrays for underscores and guesses
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var death = 3;
// Choose words randomly
var randomNumber = Math.floor(Math.random() * words.length);
var chosenWord = words[randomNumber];



// Create underscores based on wordlength
var generateUnderscore = function () {
    // cylces through Chosen word, counts letters and creates "_"
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    // Adds underscores to element with id="hiddenWord"
    document.getElementById("hiddenWord").innerHTML = underScore.join(" ");
    // ends the function
    return underScore;

}
generateUnderscore();

// Get User Guess
document.onkeyup = function (event) {
    // sets guess to the key pressed
    var guess = event.key;
    // calls userGuess function with guess as parameter
    userGuess(guess)
}
// Split up user guess into an array
function userGuess(guess) {
    // creates a list of letters for an array
    characterLetterList = chosenWord.split('');
    // 
    var i = characterLetterList.indexOf(guess);

    if (i !== -1) {
        if (!rightLetter.includes(guess)) {
            underScore[i] = guess;
            rightLetter.push(guess);
            document.getElementById("hiddenWord").innerHTML = underScore.join(" ");
            console.log(rightLetter);
        }
    } else if (i === -1) {
        if (!wrongLetter.includes(guess)) {
            wrongLetter.push(guess);
            console.log(wrongLetter);
        }
    }
    if (rightLetter.length === chosenWord.length) {
        alert("You won")
    }
    if (wrongLetter.length === death){
        alert("totes dead bra");
        console.log(death);

    }
}


// PIE IN THE SKY - It would be cool to have this set to a classic arcade game, like pitfall or maybe a movie like Indiana Jones and the Temple of Doom.

