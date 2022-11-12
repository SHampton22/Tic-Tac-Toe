class Player {
    constructor(id, token) {
        this.id = null;
        this.token = null;
        this.wins = 0;
    }

    increaseWins() {
        this.wins++;
    }
}