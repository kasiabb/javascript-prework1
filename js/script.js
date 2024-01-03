var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;

buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  var argComputerMove,
    argMoveId,
    argPlayerMove,
    computerMove,
    playerInput,
    playerMove,
    randomNumber;

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'rock';
    } else if (argMoveId == 2) {
      return 'paper';
    } else if (argMoveId == 3) {
      return 'scissors';
    } else {
      printMessage(
        'I do not know this move' +
          argMoveId +
          '. I assume it was about the "stone".'
      );
      return 'rock';
    }
  }
  function displayResult(argPlayerMove, argComputerMove) {
    console.log(
      'wywołano funkcję displayResults z argumentami: ' +
        argPlayerMove +
        ', ' +
        argComputerMove
    );
    if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
      printMessage('you win!');
    } else if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
      printMessage('you lose!');
    } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
      printMessage('you win!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('row!');
    } else {
      printMessage('You lose :(');
    }
    printMessage('I played ' + argComputerMove + ', and You ' + argPlayerMove);
  }
  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonPaper.addEventListener('click', function () {
  buttonClicked('paper');
});
buttonRock.addEventListener('click', function () {
  buttonClicked('rock');
});
buttonScissors.addEventListener('click', function () {
  buttonClicked('scissors');
});
