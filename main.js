
var leftPlayer = document.getElementById('leftPlayer');
var leftPlayerWinCount = document.getElementById('leftPlayerWinCount');
var turnIndicator = document.getElementById('turnIndicator');
var rightPlayer = document.getElementById('rightPlayer');
var rightPlayerWinCount = document.getElementById('rightPlayerWinCount');
var errorMessage = document.getElementById('errorMessage');
var board = document.getElementById('board');
var buttons = document.querySelectorAll('.button');

var game = new Game();

addEventListener('load', startGame)

board.addEventListener('click', function(event) {
    var buttonId = event.target.id
    takeTurn(buttonId);
    endGame();
    game.checkForWins();
    displayWins();
    game.checkForTie();
    game.updateCurrentPlayer();
})

function displayWins() {
    leftPlayerWinCount.innerText = `${game.leftPlayer.wins} Wins`;
    rightPlayerWinCount.innerText = `${game.rightPlayer.wins} Wins`;
}

function displayPlayerTurn() {
    if (game.currentPlayer === game.leftPlayer) {
        turnIndicator.innerText = `It's ${game.rightPlayer.token}'s turn`;
    } else {
        turnIndicator.innerText = `It's ${game.leftPlayer.token}'s turn`;
    }
}

function takeTurn(elementId) {
    game.choosePosition(event.target.id * 1);
    var selectedButton = document.getElementById(elementId);
    if (selectedButton.innerText === "") {
        selectedButton.innerText = game.currentPlayer.token;
        displayPlayerTurn();
    }
}

function endGame() {
    if (game.checkForWins() === 'WINNER') {
        turnIndicator.innerText = `${game.currentPlayer.token} WON!`;
        clearBoard();
    } else if (game.checkForTie() === 'TIE') {
        turnIndicator.innerText = 'TIE GAME!';
        clearBoard();
    }
}

function clearBoard() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = "";
    } 
}

function startGame() {
    turnIndicator.innerText = `It's ${game.currentPlayer.token}'s turn`;
}
