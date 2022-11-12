class Game {
    constructor() { 
        this.leftPlayer = new Player('O', 0x1F646);
        this.rightPlayer = new Player('X', 0x1F645);
        this.currentPlayer = this.leftPlayer;
        this.turnsPlayed = 0;
        this.tie = false;
        this.board = {
            topLeftButton = '',
            topCenterButton = '',
            topRightButton = '',
            middleLeftButton = '',
            middleCenterButton = '',
            middleRightButton = '',
            bottomLeftButton = '',
            bottomCenterButton = '',
            bottomRightButton = ''
        };
        this.winPositions = [win1, win2, win3, win4, win5, win6, win7, win8];
    }

    
    resetBoard() {
        // clear all buttons
        this.board = {
            topLeftButton = '',
            topCenterButton = '',
            topRightButton = '',
            middleLeftButton = '',
            middleCenterButton = '',
            middleRightButton = '',
            bottomLeftButton = '',
            bottomCenterButton = '',
            bottomRightButton = ''
        };
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
        if (this.turnsPlayed === 9 && ) {
            this.tie = true;
            resetBoard();
            return 'TIE GAME!';
        }
    }




    
}


// Two Player instances

// A way to keep track of the data for the game board
// array or object?
// number of positions, positions taken, positions available

// A way to keep track of which player’s turn it currently is
// every time function is invoked this.currentPlayer is updated
// function is invoked when

// A way to check the Game’s board data for win conditions
// 

// A way to detect when a game is a draw (no one has won)
// all positions are filled, no pattern has been made to match a winning combo
// this.tie = true or false
// function if (board is a tie) {
//     show message that game was a tie
//     resetBoard()
// }

// A way to reset the Game’s board to begin a new game
// clear all buttons resetBoard()





