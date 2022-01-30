let numberOfShips = 0;

function moveToShipSelect() {
    document.getElementById("startmenu").style.visibility = "hidden";
    document.getElementById("shipselect").style.visibility = "visible";

    const shipSelectButtons = document.querySelectorAll(".shipselectbutton");
    for(let i = 0; i < shipSelectButtons.length; i++) {
        shipSelectButtons[i].addEventListener('click', () => {
            numberOfShips = i+1;
            moveToPlayerOnePlacement();
        });
    }

}

function moveToPlayerOnePlacement() {
    document.getElementById("shipselect").style.visibility = "hidden";
    document.getElementById("p1shipplacement").style.visibility = "visible";

    const numberOfShipsSelectedCounter = document.getElementById("numberofshipsselected").innerText = numberOfShips;
}