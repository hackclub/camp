function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function guess(correctAnswer){
  var userGuess = prompt('Make a guess!');
  if (userGuess > correctAnswer)
    alert('Too high!');
  else if (userGuess < correctAnswer)
    alert('Too low!');
  else if (userGuess == correctAnswer){
    alert('You won!');
    return true
  }
  return false
}

function startGame(){
  var answer = getRandomNumber(1, 20);
  var score = 1;
  while (guess(answer) != true){
    score ++;
  }
  alert('You guessed the number in ' + score + ' turns.');
}
