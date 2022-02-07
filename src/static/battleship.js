let numberOfShips = 0;
let backEnd = new Battleship(0);
let playerOnePlacement = false;
let shipOrientation = "Horizontal";
let shipSelected = 0; 

function moveToShipSelect() {
    document.getElementById("startmenu").style.visibility = "hidden";
    document.getElementById("shipselect").style.visibility = "visible";

    const shipSelectButtons = document.querySelectorAll(".shipselectbutton");
    for(let i = 0; i < shipSelectButtons.length; i++) {
        shipSelectButtons[i].addEventListener('click', () => {
            numberOfShips = i+1;
            makeRowsST(numberOfShips);
            backEnd = new Battleship( numberOfShips );
            moveToPlayerOnePlacementPrep();
        });
    }
}

function moveToPlayerOnePlacementPrep() {
    document.getElementById("shipselect").style.visibility = "hidden";
    document.getElementById("p1shipprep").style.visibility = "visible";
}

function moveToPlayerOnePlacement() {
    document.getElementById("p1shipprep").style.visibility = "hidden";
    document.getElementById("p1shipplacement").style.visibility = "visible";

    document.getElementById("numberofshipsselected").innerText = numberOfShips;
}
