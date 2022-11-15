class Game {
    constructor() { 
        this.leftPlayer = new Player('O', '🙆');
        this.rightPlayer = new Player('X', '🙅');
        this.currentPlayer = this.leftPlayer;
        this.tie = false;
        this.board = [
            0,1,2,
            3,4,5,
            6,7,8,
        ];
        this.winPositions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    }

    checkForWins() {
        for (var i = 0; i < this.winPositions.length; i++) {
            if (this.currentPlayer.positions.includes(this.winPositions[i][0]) && 
                this.currentPlayer.positions.includes(this.winPositions[i][1]) &&
                this.currentPlayer.positions.includes(this.winPositions[i][2])) {
                this.currentPlayer.increaseWins();
                this.resetBoard();
                console.log('WINNER!', this.currentPlayer);
                return 'WINNER';
            } 
        }       
    }

    resetBoard() {
        this.leftPlayer.positions = [];
        this.rightPlayer.positions = [];
        this.tie = false;
        this.board = [
            0,1,2,
            3,4,5,
            6,7,8,
        ];
    }

    updateCurrentPlayer() {
        if (this.currentPlayer === this.leftPlayer) {
            this.currentPlayer = this.rightPlayer;
        } else {
            this.currentPlayer = this.leftPlayer;
        }
    }

    checkForTie() {
        if (this.currentPlayer.positions.length === 5) {
            this.tie = true;
            this.resetBoard();
            console.log('TIE!')
            return 'TIE';
        } 
    }

    choosePosition(indexNumber) {
        if (this.board[indexNumber] === "") {
            return
        } else {
            this.board.splice(indexNumber, 1, "")
            this.currentPlayer.positions.unshift(indexNumber);
        }
    }
}