// don't have this in a function
function getRandomNumber() {
  return Math.round(Math.random() * 20);
}

// put into a do-while loop
function checkGuess(correctAnswer) {
  var userGuess = prompt('Make a guess!');
  if(userGuess == correctAnswer) {
    alert('You won!');
    return false;
  } else if(userGuess > correctAnswer) {
    alert('Too high!');
    return true;
  } else if(userGuess < correctAnswer) {
    alert('Too low!');
    return true;
  }
}

function startGame() {
  console.log('game running!');
  var answer = getRandomNumber();
  var turnCounter = 1;
  while(checkGuess(answer)) {
    turnCounter = turnCounter + 1;
  }
  alert('You guessed the number in ' + turnCounter + ' turns.');
}
