let numberOfShips = 0;

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
    document.getElementById("p1shipprep").style.visibility = "hidden";
    document.getElementById("p1shipplacement").style.visibility = "visible";
    document.getElementById("numberofshipsselected").innerText = numberOfShips;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = document.getElementById(getId(1, i, j));
            console.log(getId(1, i, j))
            cell.addEventListener("click", () => {
                if (cell.className === "grid-item-ship") {
                    cell.className = "grid-item";
                } else {
                    cell.className = "grid-item-ship";
                }
            });
        }
    }
}
