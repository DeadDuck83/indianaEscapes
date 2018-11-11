
// Create an array of words
var words = ["roppe", "mapp", "ddanger","skeleton"];

// empty arrays for underscores and guesses


var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var death = 5;
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
    // var i = characterLetterList.indexOf(guess);

    // for (var i = 0;i < characterLetterList.length; i++){
    //     console.log(characterLetterList);
    //     var letterLoop = characterLetterList[i]
    //     console.log(letterLoop);

    // }
    // characterLetterList is an array of all the letters of the word
    console.log(characterLetterList);
    // Guess is the key pressed
    console.log(guess);
    // underScore is the displayed underscore that is being replaced by the real letters guessed
    console.log(underScore);
    var letterLoop = "";
    while((letterLoop = characterLetterList.indexOf(guess,letterLoop)) != -1){
    
        if (rightLetter.includes(guess)) {
            underScore[letterLoop] = guess;
            rightLetter.push(guess);
            document.getElementById("hiddenWord").innerHTML = underScore.join(" ");
            console.log(rightLetter);
        }
        console.log("right Letter = " + rightLetter);
        letterLoop++;
    } 
    if (letterLoop === -1) {
        if (!wrongLetter.includes(guess)) {
            wrongLetter.push(guess);
            document.getElementById("wrong_letter").innerHTML = wrongLetter;
            console.log("wrong Letters" + wrongLetter);
        }
    }
    console.log("letterLoop2" + letterLoop)



    if (rightLetter.length === chosenWord.length) {
        alert("You won");
        
    }
    if (wrongLetter.length === death){
        alert("totes dead bra");
        console.log(death);

    }
}


// PIE IN THE SKY - It would be cool to have this set to a classic arcade game, like pitfall or maybe a movie like Indiana Jones and the Temple of Doom.

// if I use double letters the game does not register it
// how to I re-initiate the game after a victory without resetting the game
// 