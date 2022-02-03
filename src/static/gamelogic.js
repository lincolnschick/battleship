
/*----------------------------------------------------------------------------------------------------------------*/
//A class that represents the gameBoard is created.
//It contains only a 2D array and three functions which are self-explanitory 
//Each cell in the board has multiple states...
//-2 = ship was hit        -1 = empty space was hit
// 0 = empty space          1 = ship in spot
class GameBoard {
    constructor(){
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
    /** 
     * Will be called by Battleship class to inform front end
     * @param {number} numShips - number of ships for game
     * @return {boolean} whether board is valid for game to start
     */
    isValid(numShips) {

    }
    /** 
     * Needed to implement the player method in the Battleship class
     * @return {number} number of shots fired on board (-1s and -2s)
     */
    shots() {

    }
    /** 
     * Needed for isGameOver in Battleship class
     * @return {boolean} whether all ships have been sunk on this board
     */
     isSunk() {

    }

}
/*----------------------------------------------------------------------------------------------------------------*/

//This is the only class the front end will interact with
class Battleship {
    /** 
     * @constructor
     */
    constructor(numShips) {
        this.numShips = numShips;
        this.board1 = new GameBoard();
        this.board2 = new GameBoard();
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
     * Updates appropriate board
     * @param {number} board - 1 or 2
     * @param {number} row - row of guess
     * @param {number} col - column of guess
     */
    firedAt(board, row, col) {

    }
    /** 
     * @return {boolean} whether game is over, calls GameBoard method
     */
    isGameOver() {

    }
    /** 
     * @return {number} who won, player 1 or 2
     */
    winner() {

    }
    /** 
     * Calls appropriate board's placeShip method
     * @param {number} board - 1 or 2
     */
    placeShip() {

    }
    /** 
     * @param {number} board - 1 or 2, which board should be returned
     * @param {boolean} [hidden=false] - whether given board should be returned with undiscovered ships hidden
     * @return {[number, number]} 2D array of board given
     */
    getBoard(board, hidden=false) {

    }
}