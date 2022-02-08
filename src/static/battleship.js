
let numberOfShips = 0;
//This is global and can be accessed from anywhere in any JS file. Holds all the game info
var game = null;

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
    document.getElementById("p1shipprep").style.visibility = "visible";
}

function moveToPlayerOnePlacement() {
    game = new Battleship(numberOfShips);
    document.getElementById("p1shipprep").style.visibility = "hidden";
    document.getElementById("p1shipplacement").style.visibility = "visible";
    document.getElementById("numberofshipsselected").innerText = numberOfShips;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.getElementById(getId(1, i, j));
            cell.addEventListener("click", () => {
                if (cell.className === "grid-item-ship") {
                    cell.className = "grid-item";
                    game.placeShip(1, i, j);
                } else if (game.isValidPlacement(1, i, j)){
                    cell.className = "grid-item-ship";
                    game.placeShip(1, i, j);
                }
                if (game.isValid(1)) {
                    //Show continue button

                }
            });
        }
    }

}