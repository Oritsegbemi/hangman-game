// ARRAY OF WORDS
var randomWords = ['hippoptamus', 'happy', 'appoint', 'imagination', 'houses', 'decent']

// PICK A RANDOM WORD
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]

//ANSWER ARRAY
var answer = []
for(var i = 0; i < randomWord.length; i++){
        answer[i] = '_'
    }

var remainingLetters = randomWord.length


//GAME LOOP
while(remainingLetters > 0){

//SHOW PLAYER PROGRESSS
    alert(answer.join(' '));
//GET PLAYER GUESS
    var guess = prompt('guess a letter, or cancel to end game');
    if(guess === null ){
        //EXIT GAME LOOP
        break;
    } else if(guess.length !== 1){
        alert('please enter a single letter');
    }else{
        //UPDATE THE GAME STATE
        for(var x = 0; x < randomWord.length; x++){
                if(randomWord[x] === guess){
                    answer[x] = guess;
                    remainingLetters--;
                }
            }
    }

}
// Show the answer and congratulate the player
alert(answer.join(" "));
alert("Good job! The answer was " + randomWord);