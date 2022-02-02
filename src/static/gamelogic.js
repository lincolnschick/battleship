const rows = 10;
const cols = 10;

class Battleship {
    constructor(numShips) {
        //Note: I initialized boards to all 0s. Figured we could represent empty cells as 0s, 
        //cells where ships are with 1s, and cells that were hit with -1.
        this.board1 = Array(rows).fill().map(() => Array(cols).fill(0));
        this.board2 = Array(rows).fill().map(() => Array(cols).fill(0));
        this.hidden1 = Array(rows).fill().map(() => Array(cols).fill(0));
        this.hidden2 = Array(rows).fill().map(() => Array(cols).fill(0));
        this.numShips = numShips;
    }
    /** 
     * @param {int} board - 1 or 2
     * @return {bool} whether given board is valid for game to start
     */
    isValid(board) {

    }
    /** 
     * @return {int} whose turn it is (player 1 or 2)
    */
    player() {

    }
    /** 
     * Updates appropriate boards (one hidden one player board)
     * @param {int} board - 1 or 2
     * @param {int} i - row of guess
     * @param {int} j - column of guess
     */
    updateBoard(board, i, j) {

    }
    /** 
     * @return {bool} - whether game is over
     */
     isGameOver() {

    }
    /** 
     * @return {int} - who won, player 1 or 2
     */
     winner() {

    }
}
