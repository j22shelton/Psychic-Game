//all choices available for computer 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//set variables to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = undefined;

//functions for the "new" variables and user pushes a key
//this is where HTML is

var newGuessesLeft = function() {
    document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//computer chooses random letter
var newLetterToGuess = function() {
    letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(letterToGuess);
};

//store all keys pressed by user
var newGuessesSoFar = function() {
    document.querySelector('#userGuess').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//function called when game is over
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];

    newLetterToGuess();
    newGuessesLeft();
    newGuessesSoFar();
}

//released key stroke becomes the users guess, reduce guessesLeft by 1.
document.onkeyup = function(event) {
    guessesLeft--;

    console.log(event.key);
    console.log(guessedLetters);

    //make user guess lower case so it will not be case sensitive. 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    //push the guessed letter to userGuess, update var functions.
    guessedLetters.push(userGuess);
    newGuessesLeft();
    newGuessesSoFar();

    //when user still has guesses remaining and get letter, they win- otherwise they lose.
    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#win').innerHTML = "Wins: " + wins;
            alert("Wow! You are psychic! That's amazing");
            reset();
        }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector('#loss').innerHTML = "Losses: " + losses;
        alert("Ha, ha, you're not psychic!");

        reset();
    }
};
