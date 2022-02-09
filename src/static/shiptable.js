/*----------------------------------------------------------------------------------------------------------------*/
//Creates container for the ships
const containerS = document.getElementById("containerS");

//Creates the ships found at the bottom of the boards, each represents the length of ships
function makeRowsST(numberOfShips) {
  let shipTableElements = (((numberOfShips * (numberOfShips + 1)) / 2) + (numberOfShips - 1));
  containerS.style.setProperty('--grid-rows', 1);
  containerS.style.setProperty('--grid-cols', shipTableElements);                 //Containers that hold ships
  for (let c = 0; c < numberOfShips; c++) { 
    let shipContainer = document.createElement("div");
    containerS.appendChild(shipContainer).className = "grid-item-shiptablemember";
    containerS.appendChild(shipContainer).style.setProperty('--grid-cols', c+1)
    containerS.appendChild(shipContainer).id = 'shipContainer' + c;
    for (let s = 0; s < c + 1; s++) {                                             //Appropriately creates ship length
      let ship = document.createElement("div");
      shipContainer.appendChild(ship).className = "grid-item-shiptablemember-ship";
    }
  }
}

/*----------------------------------------------------------------------------------------------------------------*/