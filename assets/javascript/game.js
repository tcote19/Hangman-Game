

	var words = ["Saturn", "Uranus", "Earth", "MilkyWay", "Jupiter", "Alderon", "Coruscant"];
	var guessedWord = words[Math.floor(Math.random()*words.length)];
	var s;
	var guessingArray = [];
	var realGuessingArray = [];

// Enter key pressed - call the docStart function.
document.onkeyup = function(e){
    if(e.keyCode == 13){
       docStart();
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
      var letterTyped = String.fromCharCode(keynum);
    }
    console.log(letterTyped);


  }

// Inital function grabs a word from words array, for loop checks its total character count
// and then creates an underscore placeholder in the DOM based on the character count.
// realGuessingArray is another spot where the random word is stored for further functionality.
function docStart() {

	for (var i = 0; i < guessedWord.length; i++){
		guessingArray[i] = "_";
		realGuessingArray.push(guessedWord);
		s = guessingArray.join(" ");
		document.getElementById("guessing-word").innerHTML = s;
		}


};
// We now need to receive letter inputs from the user's keyboard and
// and check those against the letters in the word contained in realGuessingArray.

// As the user enter keyboard letters, if a correct letter is typed, it should appear on screen
// and in place of the underscore placholder.

// If they type a letter that isn't in the word, it should be added to "letters already guessed"
// and the "guesses remaining" counter should decrease by one.

// Once they complete the word, they can restart the game. If they fail to guess
// The Should receive a "you lose" alert.




