/*----------------------------------------------------------------------------------------------------------------*/
//Globle variables that are used throughout the game
let numberOfShips = 0;
var game = null;
let numRuns = 0;

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

/** 
 * @param {number} board - which board is being set up
 */
function moveToPlayerPlacement(board) {
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

function playerCellClass(value) {
    if (value == 1) {
        return "grid-item-ship";
    } else if (value == 0) {
        return "grid-item";
    } else if (value == -2) {
        return "grid-item-ship-hit";
    } else if (value == -1) {
        return "grid-item-empty";
    }

}

function opponentCellClass(value) {
    if (value == -2 || value == -3) {
        return "grid-item-hit";
    } else if (value == 0) {
        return "grid-item-opponent";
    } else {
        return "grid-item-miss";
    }
}

function gameRunner() {
    document.getElementById("placeships").style.display = "none";
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.getElementById(getId(2, i, j));
            //Disable editing of player 2's board
            cell.removeEventListener("click", editShips);
        }
    }
    loadBoards(1);
    let opponentCell = document.querySelectorAll(".grid-item-opponent");
    for (let i = 0; i < opponentCell.length; i++) {
        opponentCell[i].addEventListener("click", fire);
    }
    loadBoards(2);
    opponentCell = document.querySelectorAll(".grid-item-opponent");
    for (let i = 0; i < opponentCell.length; i++) {
        opponentCell[i].addEventListener("click", fire);
    }
    playerFirePrep(1);
    // let opponentCell = document.querySelectorAll(".grid-item-opponent");
    // for (let i = 0; i < opponentCell.length; i++) {
    //     opponentCell[i].addEventListener("click", fire);
    // }
}

function nextTurn() {
    let player = numRuns % 2 == 0 ? 1 : 2;
    playerFirePrep(player);
}

let fired = false;
function fire() {
    let x = ordPair(this.id)[0];
    let y = ordPair(this.id)[1];
    let opponent = getBoardFromId(this.id)
    if (!fired) {
        game.firedAt(opponent,x,y);
        console.log(opponent);
        console.log(game.printBoard(1));
        console.log(game.printBoard(2));
        fired = true;
        numRuns++;
        this.className = opponentCellClass(game.getBoard(opponent)[x][y]);
    }
    this.removeEventListener("click", fire);
    document.getElementById("fireAt").style.visibility = "visible";
    document.getElementById("fireAtShips").addEventListener("click", nextTurn);
}

function playerFirePrep(player) {
    document.getElementById("shipplacement").style.visibility = "hidden";
    document.getElementById("shipprep").style.visibility = "visible";
    document.getElementById("gobtn").style.display = "inline-block";
    document.getElementById("gobtn").removeEventListener("click", moveToPlayerOnePlacement);
    document.getElementById("gobtn").addEventListener("click", () => playerFire(player));
    document.getElementById("promptforward").innerHTML = "Ready to continue?";
    document.getElementById("prepplayer").innerHTML = `Player ${player}`;
    document.getElementById("fireAt").style.visibility = "hidden";
    fired = false;
}

function playerFire(player) {
    let opponent = player == 1 ? 2 : 1;
    document.getElementById("shipplacement").style.visibility = "visible";
    document.getElementById("shipprep").style.visibility = "hidden";
    document.getElementById("gobtn").style.display = "none";
    document.getElementById("fireAt").style.visibility = "hidden";
    loadBoards(player);
    console.log(player);
    let playerCells = document.querySelectorAll(".grid-item");
    for (let i = 0; i < playerCells.length; i++) {
        playerCells[i].style.pointerEvents = 'none';
    }
    let opponentCells = document.querySelectorAll(".grid-item-opponent");
    for (let i = 0; i < opponentCells.length; i++) {
        opponentCells[i].style.pointerEvents = 'auto';
    }
}

/*----------------------------------------------------------------------------------------------------------------*/