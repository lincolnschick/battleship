/*----------------------------------------------------------------------------------------------------------------*/
//Globle variables that are used throughout the game
let numberOfShips = 0;
var game = null;
let numRuns = 0;
let turnTracker = null;

/*----------------------------------------------------------------------------------------------------------------*/
//First function that is called, simply is called when start is pressed
function moveToShipSelect() {
    document.getElementById("startmenu").style.display = "none";           //Hides and reveals the appropriate
    document.getElementById("shipselect").style.display = "block";         //Ids
    const shipSelectButtons = document.querySelectorAll(".shipselectbutton");
    for(let i = 0; i < shipSelectButtons.length; i++) {
        shipSelectButtons[i].addEventListener('click', () => {                  //Creates buttons that alter the 
            numberOfShips = i+1;                                                //numberOfShips
            makeRowsST(numberOfShips);
            moveToPlayerOnePlacementPrep();                                     //Moves to the next step of game
        });
    }
}

/*----------------------------------------------------------------------------------------------------------------*/
//Here buttons are made that call functions that determine player placement
function moveToPlayerOnePlacementPrep() {
    document.getElementById("shipselect").style.display = "none";
    document.getElementById("shipprep").style.display = "block";
    document.getElementById("gobtn").addEventListener("click", moveToPlayerOnePlacement);
    document.getElementById("placeshipsbtn").addEventListener("click", moveToPlayerTwoPlacementPrep);
}

//Goes to player one placement after creating the battleship class
function moveToPlayerOnePlacement() {
    game = new Battleship(numberOfShips);
    moveToPlayerPlacement(1);
}
/*----------------------------------------------------------------------------------------------------------------*/
//Creates buttons for player two
function moveToPlayerTwoPlacementPrep() {
    document.getElementById("shipplacement").style.display = "none";
    document.getElementById("placeships").style.display = "none";
    document.getElementById("shipprep").style.display = "block";
    document.getElementById("gobtn").style.display = "none";
    document.getElementById("gobtn2").style.display = "inline-block";
    document.getElementById("gobtn2").addEventListener("click", moveToPlayerTwoPlacement)
    document.getElementById("prepplayer").innerHTML = "Player 2";
}

//Goes to player two placement after disabling board of player one
function moveToPlayerTwoPlacement() {
    document.getElementById("gobtn2").style.display = "none";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.getElementById(getId(1, i, j));
            //Disable editing of player 1's board
            cell.removeEventListener("click", editShips);
        }
    }
    let placeShipBtn = document.getElementById("placeshipsbtn")
    placeShipBtn.removeEventListener("click", moveToPlayerTwoPlacementPrep)
    placeShipBtn.addEventListener("click", gameRunner);
    moveToPlayerPlacement(2);
}
/*----------------------------------------------------------------------------------------------------------------*/
//Function that goes preps a players board before beiing able to place ships
/** 
 * @param {number} board - which board is being set up
 */
function moveToPlayerPlacement(board) {
    alert(`Rules for placement:
    Place ${numberOfShips} ships on the board of sizes: ${determineShips()}
    You must place each part of the ship individually
    You are not allowed to place ships within one block of each other
    The game will only continue if you correctly place the ships
    A button will appear at the bottom of the screen once your ships are placed`);
    document.getElementById("shipprep").style.display = "none";
    document.getElementById("shipplacement").style.display = "block";
    document.getElementById("numberofshipsselected").innerText = numberOfShips;
    loadBoards(board);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.getElementById(getId(board, i, j));
            cell.addEventListener("click", editShips);
        }
    }
}

//Function that determines whether a clicked cell is a valid ship placeement
function editShips() {
    let x = ordPair(this.id)[0];
    let y = ordPair(this.id)[1];
    let currBoard = getBoardFromId(this.id);
    if (this.className === "grid-item-ship") {
        this.className = "grid-item";
        game.placeShip(currBoard, x, y);
    } else if (game.isValidPlacement(currBoard, x, y)){
        this.className = "grid-item-ship";
        game.placeShip(currBoard, x, y);
    }
    if (game.isValid(currBoard)) {
        //Show placeships
        document.getElementById("placeships").style.display = "block";
    } else {
        //Hide placeships
        document.getElementById("placeships").style.display = "none";
    }
}

/*----------------------------------------------------------------------------------------------------------------*/
//Mostly utility functions
//Determines what ships (x by y) ships are in the game
function determineShips() {
    s = "";
    for (let i = 1; i <= numberOfShips; i++) {
        s += "1x"+i + ", ";
    }

    return s.slice(0,-2);
}

//Loads each players boards
function loadBoards(player) {
    const opponent = player == 1 ? 2 : 1;
    const playerBoard = game.getBoard(player);
    const opponentBoard = game.getBoard(opponent, hidden=true);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let playerCell = document.getElementById(getId(player, i, j));
            let opponentCell = document.getElementById(getId(opponent, i, j));
            playerCell.className = playerCellClass(playerBoard[i][j]);
            opponentCell.className = opponentCellClass(opponentBoard[i][j]);
        }
    }
}

//Determines the cell type the current player should be
function playerCellClass(value) {
    if (value == -3) {
        return "grid-item-sunk";
    } else if (value == -2) {
        return "grid-item-hit";
    } else if (value == 1) {
        return "grid-item-ship";
    } else if (value == 0) {
        return "grid-item";
    } else {
        return "grid-item-miss";
    }
}

//Determines the cell type the current opponent should be
function opponentCellClass(value) {
    if (value == -2) {
        return "grid-item-hit";
    } else if (value == -3) {
        return "grid-item-sunk";
    } else if (value == 0) {
        return "grid-item-opponent";
    } else if (value == -3) {
        return "grid-item-sunk";
    } else {
        return "grid-item-miss";
    }
}

//Determines who's turn it is
class Turn {
    constructor(start) {
        this.turn = start;
    }
    getTurn() {
        return this.turn;
    }
    nextTurn() {
        this.turn = this.turn == 1 ? 2 : 1;
        return this.turn;
    }
}
/*----------------------------------------------------------------------------------------------------------------*/
//Global fire function
let fired = false;
//function that if the player has not fired, fire at the clicked cell and remove its event
function fire() {
    let x = ordPair(this.id)[0];
    let y = ordPair(this.id)[1];
    let opponent = getBoardFromId(this.id)
    if (!fired) {
        game.firedAt(opponent,x,y);
        fired = true;
        numRuns++;
        loadBoards(turnTracker.getTurn());
        this.removeEventListener("click", fire);
    }
    document.getElementById("fireAt").style.display = "block";
    document.getElementById("fireAtShips").addEventListener("click", playerFirePrep);
}

//Preps the players for firing
function playerFirePrep() {
    if (game.isGameOver()) {
        let winner = turnTracker.getTurn();
        document.getElementById("shipplacement").style.display = "none";
        document.getElementById("fireAtShips").style.display = "none";
        document.getElementById("winningpage").style.display = "block";
        document.getElementById("whowon").innerHTML = `Player ${winner} won!`;
        console.log("here")
    } else {
        let player = turnTracker.nextTurn();
        document.getElementById("shipplacement").style.display = "none";
        document.getElementById("shipprep").style.display = "block";
        document.getElementById("gobtn").style.display = "inline-block";
        document.getElementById("gobtn").removeEventListener("click", moveToPlayerOnePlacement);
        document.getElementById("gobtn").addEventListener("click", playerFire);
        document.getElementById("promptforward").innerHTML = "Ready to continue?";
        document.getElementById("prepplayer").innerHTML = `Player ${player}`;
        document.getElementById("fireAt").style.display = "none";
        fired = false;
    }
}

//Depending on who is currently the player, gives events to the other board
function playerFire() {
    let player = turnTracker.getTurn();
    let opponent = player == 1 ? 2 : 1;
    document.getElementById("shipplacement").style.display = "block";
    document.getElementById("shipprep").style.display = "none";
    document.getElementById("gobtn").style.display = "none";
    document.getElementById("fireAt").style.display = "none";
    loadBoards(player);
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cellP = document.getElementById(getId(player, i, j));
            let cellO = document.getElementById(getId(opponent, i, j));
            cellP.style.pointerEvents = 'none';
            cellO.style.pointerEvents = 'auto';
        }
    }
}

/*----------------------------------------------------------------------------------------------------------------*/
//Function that runs the whole game
function gameRunner() {
    document.getElementById("placeships").style.display = "none";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell2 = document.getElementById(getId(2, i, j));
            let cell1 = document.getElementById(getId(1, i, j));
            //Disable editing of player 2's board
            cell2.removeEventListener("click", editShips);
            cell1.addEventListener("click", fire);
            cell2.addEventListener("click", fire);
        }
    }
    turnTracker = new Turn(2);
    playerFirePrep();
}
