
let numberOfShips = 0;
//Global Battleship object
var game = null;
let numRuns = 0;

function moveToShipSelect() {
    document.getElementById("startmenu").style.visibility = "hidden";
    document.getElementById("shipselect").style.visibility = "visible";

    const shipSelectButtons = document.querySelectorAll(".shipselectbutton");
    for(let i = 0; i < shipSelectButtons.length; i++) {
        shipSelectButtons[i].addEventListener('click', () => {
            numberOfShips = i+1;
            makeRowsST(numberOfShips);
            // fillShips(shipTableElements);
            moveToPlayerOnePlacementPrep();
        });
    }

}

function moveToPlayerOnePlacementPrep() {
    document.getElementById("shipselect").style.visibility = "hidden";
    document.getElementById("shipprep").style.visibility = "visible";
    document.getElementById("gobtn").addEventListener("click", moveToPlayerOnePlacement);
    document.getElementById("placeshipsbtn").addEventListener("click", moveToPlayerTwoPlacementPrep);
}

function moveToPlayerTwoPlacementPrep() {
    document.getElementById("shipplacement").style.visibility = "hidden";
    document.getElementById("placeships").style.visibility = "hidden";
    document.getElementById("shipprep").style.visibility = "visible";
    document.getElementById("gobtn").style.display = "none";
    document.getElementById("gobtn2").style.display = "inline-block";
    document.getElementById("gobtn2").addEventListener("click", moveToPlayerTwoPlacement)

    document.getElementById("prepplayer").innerHTML = "Player 2";
}

function moveToPlayerOnePlacement() {
    console.log("here")
    game = new Battleship(numberOfShips);
    moveToPlayerPlacement(1);
}

function moveToPlayerTwoPlacement() {
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

/** 
 * @param {number} board - which board is being set up
 */
function moveToPlayerPlacement(board) {
    document.getElementById("shipprep").style.visibility = "hidden";
    document.getElementById("shipplacement").style.visibility = "visible";
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
        document.getElementById("placeships").style.visibility = "visible";
    } else {
        //Hide placeships
        document.getElementById("placeships").style.visibility = "hidden";
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
    }

}

function opponentCellClass(value) {
    if (value == -2) {
        return "grid-item-hit";
    } else if (value == 0) {
        return "grid-item-opponent";
    } else {
        return "grid-item-miss";
    }
}

function gameRunner() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.getElementById(getId(2, i, j));
            //Disable editing of player 2's board
            cell.removeEventListener("click", editShips);
        }
    }
    loadBoards(1);
}