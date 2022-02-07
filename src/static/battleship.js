let numberOfShips = 0;
let backEnd = new Battleship(0);
let playerOnePlacement = false;
let shipOrientation = "Hl";
let shipSelected = 5; 

function moveToShipSelect() {
    document.getElementById("startmenu").style.visibility = "hidden";
    document.getElementById("shipselect").style.visibility = "visible";

    const shipSelectButtons = document.querySelectorAll(".shipselectbutton");
    for(let i = 0; i < shipSelectButtons.length; i++) {
        shipSelectButtons[i].addEventListener('click', () => {
            numberOfShips = i+1;
            makeRowsST(numberOfShips);
            hoverMult();
            placeAShip();
            backEnd = new Battleship( numberOfShips );
            moveToPlayerOnePlacementPrep();
        });
    }
}

function hoverMult(){
    for ( let i = 0 ; i < 10 ; i ++ ){
        for ( let j = 0 ; j < 10 ; j ++ ){
            document.getElementById("P1main" + i + j ).addEventListener( "mouseover", function (){
                if ( shipOrientation == "Horizontal" ){
                    for ( let k = 0 ; k < shipSelected ; k ++ ){
                        if ( j + k < 10 ){
                            document.getElementById("P1main" + i + ( j + k ) ).className = 'grid-item-hovered';
                        } else {
                            for ( let l = shipSelected - k ; l > 0 ; l -- ){
                                document.getElementById("P1main" + i + ( j - l ) ).className = 'grid-item-hovered';
                            }
                        }
                    }
                } else {
                    for ( let k = 0 ; k < shipSelected ; k ++ ){
                        if ( i + k < 10 ){
                            document.getElementById("P1main" + ( i + k ) + j ).className = 'grid-item-hovered';
                        } else {
                            for ( let l = shipSelected - k ; l > 0 ; l -- ){
                                document.getElementById("P1main" + ( i - l ) + j ).className = 'grid-item-hovered';
                            }
                        }
                    }
                }
            });
            document.getElementById("P1main" + i + j ).addEventListener( "mouseout", function (){
                if ( shipOrientation == "Horizontal" ){
                    for ( let k = 0 ; k < shipSelected ; k ++ ){
                        if ( j + k < 10 ){
                            document.getElementById("P1main" + i + ( j + k ) ).className = 'grid-item';
                        } else {
                            for ( let l = shipSelected - k ; l > 0 ; l -- ){
                                document.getElementById("P1main" + i + ( j - l ) ).className = 'grid-item';
                            }
                        }
                    }
                } else {
                    for ( let k = 0 ; k < shipSelected ; k ++ ){
                        if ( i + k < 10 ){
                            document.getElementById("P1main" + ( i + k ) + j ).className = 'grid-item';
                        } else {
                            for ( let l = shipSelected - k ; l > 0 ; l -- ){
                                document.getElementById("P1main" + ( i - l ) + j ).className = 'grid-item';
                            }
                        }
                    }
                }
            });
        }
    }
}

function placeAShip(){
    for ( let i = 0 ; i < 10 ; i ++ ){
        for ( let j = 0 ; j < 10 ; j ++ ){
            document.getElementById("P1main" + i + j ).addEventListener( "click", function (){
                if ( shipOrientation == "Horizontal" ){
                    for ( let k = 0 ; k < shipSelected ; k ++ ){
                        if ( j + k < 10 ){
                            document.getElementById("P1main" + i + ( j + k ) ).className = 'grid-item-ship';
                        } else {
                            for ( let l = shipSelected - k ; l > 0 ; l -- ){
                                document.getElementById("P1main" + i + ( j - l ) ).className = 'grid-item-ship';
                            }
                        }
                    }
                } else {
                    for ( let k = 0 ; k < shipSelected ; k ++ ){
                        if ( i + k < 10 ){
                            document.getElementById("P1main" + ( i + k ) + j ).className = 'grid-item-ship';
                        } else {
                            for ( let l = shipSelected - k ; l > 0 ; l -- ){
                                document.getElementById("P1main" + ( i - l ) + j ).className = 'grid-item-ship';
                            }
                        }
                    }
                }
            }, { once : true });
        }
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
