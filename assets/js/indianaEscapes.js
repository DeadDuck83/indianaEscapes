
// Create an array of words
var words = ["rope", "map", "danger"];

// empty arrays for underscores and guesses

var underScore = [];
// Choose words randomly
var randomNumber = Math.floor(Math.random() * words.length);
var chosenWord = words[randomNumber];



// Create underscores based on wordlength
    //first number of characters in chosenWord
  
    var generateUnderscore = function() {
        for (var i = 0;i < chosenWord.length; i++){
            underScore.push("_");
        }
        return underScore;
    }
 
// Get User Guess
document.addEventListener("keydown", userGuess, false);
function userGuess (event) {
    var userKeyPress = event.which || event.keyCode;
    var letterPress = String.fromCharCode(userKeyPress);
    console.log(letterPress);
}


// Check if it is right
// if right, push to 'right' array
    // Replace underscores with corresponding correct letter
// if wrong, push to 'wrong' array, and remove 1 life




// PIE IN THE SKY - It would be cool to have this set to a classic arcade game, like pitfall or maybe a movie like Indiana Jones and the Temple of Doom.

