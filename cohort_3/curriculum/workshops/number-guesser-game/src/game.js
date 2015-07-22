function getRandomNumber(maximum){
  return Math.round(Math.random() * maximum);
}

function guess(correctAnswer){
  var userGuess = prompt('Make a guess!');
  if(userGuess > correctAnswer){
    alert('Too high!');
  } else if(userGuess < correctAnswer){
    alert('Too low!');
  } else if(userGuess == correctAnswer){
    alert('You won!');
    return false;
  }
  return true;
}

function startGame(){
  var answer = getRandomNumber(20);
  var score = 1;
  while(guess(answer)){
    score = score + 1;
  }
  alert('You guessed the number in ' + score + ' turns.');
}
