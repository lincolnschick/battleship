
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

    //A method that simply fires at the given cell and adjusts state accordingly
    firedAt( row, col ){
        if ( this.board[ row ][ col ]  == 1 ){
            this.board[ row ][ col ] = -2;
        } else {
            this.board[ row ][ col ] = -1;
        }
    }

    //A method that adds a ship to the given cell
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
    //Goes through and counts the shots
    shots() {
        let count = 0;
        for ( let i = 0 ; i < this.rows ; i ++ ){
            for ( let j = 0 ; j < this.cols ; j ++ ){
                if ( this.board[ i ][ j ] == -1 || this.board[ i ][ j ]  == -2 ){
                    count = count ++;
                }
            }
        } return ( count ); 
    }
    /** 
     * Needed for isGameOver in Battleship class
     * @return {boolean} whether all ships have been sunk on this board
     */
    //Checks whether a ship still exists, if so return false, else return true.
    isSunk() {
        for ( let i = 0 ; i < this.rows ; i ++ ){
            for ( let j = 0 ; j < this.cols ; j ++ ){
                if ( this.board[ i ][ j ] == 1 ){
                    return( false ); 
                }
            }
        } return( true ); 
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
        //Calls appropriate isValid method for given board.
        return board == 1 ? this.board1.isValid() : this.board2.isValid();
    }
    /** 
     * @return {number} whose turn it is (player 1 or 2)
    */
    player() {
        //Returns 1 if board1 has fewer shots on it than board2, otherwise it returns 2.
        return this.board1.shots() < this.board2.shots() ? 1 : 2;
    }
    /** 
     * Updates appropriate board
     * @param {number} board - 1 or 2
     * @param {number} row - row of guess
     * @param {number} col - column of guess
     */
    firedAt(board, row, col) {
        board == 1 ? this.board1.firedAt(row, col) : this.board2.firedAt(row, col);
    }
    /** 
     * @return {boolean} whether game is over, calls GameBoard method
     */
    isGameOver() {
        return(this.board1.isSunk() || this.board2.isSunk());
    }
    /** 
     * @return {number} who won, player 1 or 2
     */
    winner() {
        //outside if can be placed when used
        if (this.isGameOver()) {
            if (this.board1.isSunk()) return 2;
            else return 1;
        }
    }
    /** 
     * Calls appropriate board's placeShip method
     * @param {number} board - 1 or 2
     */
    placeShip(board, row, col) {
        board == 1 ? this.board1.placeShip(row, col) : this.board2.placeShip(row, col);
    }
    /** 
     * @param {number} board - 1 or 2, which board should be returned
     * @param {boolean} [hidden=false] - whether given board should be returned with undiscovered ships hidden
     * @return {[number, number]} 2D array of board given
     */
    getBoard(board, hidden=false) {
        //If the board parameter is 1, assign to board1's board otherwise assign it to board2's board
        const returnBoard = board == 1 ? this.board1.board : this.board2.board;
        if (hidden) {
            //(Deep) copies every element except if it's a 1 then it becomes a 0 since we
            //want to hide undiscovered ships.
            let hiddenBoard = returnBoard.map(row => {
                return row.map(val => val == 1 ? 0 : val);
            });
            return hiddenBoard;
        } else {
            return returnBoard;
        }
    }
}