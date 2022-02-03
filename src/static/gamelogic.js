
/*----------------------------------------------------------------------------------------------------------------*/
//A class that represents the gameBoard is created.
//It contains only a 2D array and three functions which are self-explanitory 
//Each cell in the board has multiple states...
//-2 = ship was hit        -1 = empty space was hit
// 0 = empty space          1 = ship in spot
class gameBoard {
    constructor(){
        this.board = 
            this.rows = 10;
            this.cols = 10;
            this.board = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
    }

    //A function that simply fires at the given cell and adjusts state accordingly
    firedAt( row, col ){
        if ( this.board[ row ][ col ]  == 1 ){
            this.board[ row ][ col ] = -2;
        } else {
            this.board[ row ][ col ] = -1;
        }
    }

    //A function that adds a ship to the given cell
    placeShip( row, col ){
        if ( this.board[ row ][ col ] == 0 ){
            this.board[ row ][ col ] = 1;
        }
    }

    //Resets all the cells to 0
    resetBoard(){
        for ( let i = 0 ; i < this.rows ; i ++ ){
            for ( let j = 0 ; j < this.cols ; j ++ ){
                this.board[ i ][ j ] = 0;
            }
        }
    }
}
/*----------------------------------------------------------------------------------------------------------------*/

class Battleship {
    constructor(numShips) {
        //Note: I initialized boards to all 0s. Figured we could represent empty cells as 0s, 
        //cells where ships are with 1s, and cells that were hit with -1.
        //Hidden boards would not hold information about where ships are (only hits and empty)
            //Temporarily commenting out (keeping just in case)
            /*this.board1 = Array(rows).fill().map(() => Array(cols).fill(0));
            this.board2 = Array(rows).fill().map(() => Array(cols).fill(0));
            this.hidden1 = Array(rows).fill().map(() => Array(cols).fill(0));
            this.hidden2 = Array(rows).fill().map(() => Array(cols).fill(0));
            this.numShips = numShips;*/
    }
    /** 
     * @param {number} board - 1 or 2
     * @return {boolean} whether given board is valid for game to start
     */
    isValid(board) {

    }
    /** 
     * @return {number} whose turn it is (player 1 or 2)
    */
    player() {

    }
    /** 
     * Updates appropriate boards (one hidden one player board)
     * @param {number} board - 1 or 2
     * @param {number} i - row of guess
     * @param {number} j - column of guess
     */
    updateBoard(board, i, j) {

    }
    /** 
     * @return {boolean} - whether game is over
     */
    isGameOver() {

    }
    /** 
     * @return {number} - who won, player 1 or 2
     */
    winner() {

    }
}