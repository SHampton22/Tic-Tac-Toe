class Game {
    constructor() { 
        this.leftPlayer = new Player('O', 0x1F646);
        this.rightPlayer = new Player('X', 0x1F645);
        this.currentPlayer = this.leftPlayer;
        this.turnsPlayed = 0;
        this.tie = false;
        this.board = [
            0,1,2,
            3,4,5,
            6,7,8,
        ];
        this.winPositions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    }

    resetBoard() {
        this.board = [
            0,1,2,
            3,4,5,
            6,7,8,
        ];
        this.tie = false;
        this.turnsPlayed = 0;
    }

    updateCurrentPlayer(player) {
        this.currentPlayer = player;
        // this.leftPlayer or this.rightPlayer
    }

    updateTurnsPlayed() {
        this.turnsPlayed++;
    }

    checkForTie() {
        if (this.turnsPlayed === 9) {
            this.tie = true;
            resetBoard();
            return 'TIE GAME!';
        }
    }

    checkForWins() {
        // if X or O is in win positions
        // update
    }




    
}


// new instance of game
// left player defaults to start game
// player selects position-store position
// update current game board
// this.board[i] = X or O
// compare current game board to winPositions-function
// switch player-function to reassign this.currentPlayer
// player selects position-store position
// update current game board
// compare current game board to winPositions-function
// if win happens:
// check to see if X or O has won, update players win count.


// invoke function to switch player-update turn banner
// click button, track click, only allow click on "empty" button

// switch player-
// click button, on 5th click check for wins
// continue to switch players and check for wins until 9 plays have happened, tie
// if win happens:
// check to see if X or O has won, update players win count.
// once win or tie happen, display message and reset the board.