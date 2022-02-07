const containerS = document.getElementById("containerS");

function makeRowsST(numberOfShips) {
  let shipTableElements = (((numberOfShips * (numberOfShips + 1)) / 2) + (numberOfShips - 1));
  containerS.style.setProperty('--grid-rows', 1);
  containerS.style.setProperty('--grid-cols', shipTableElements);
  //creates the container to hold ships
  for (let c = 0; c < numberOfShips; c++) { 
    let shipContainer = document.createElement("div");
    containerS.appendChild(shipContainer).className = "grid-item-shiptablemember";
    containerS.appendChild(shipContainer).style.setProperty('--grid-cols', c+1)
    containerS.appendChild(shipContainer).id = 'shipContainer' + c;
    //makes the appropriate length for each ship
    for (let s = 0; s < c + 1; s++) {
      let ship = document.createElement("div");
      shipContainer.appendChild(ship).className = "grid-item-shiptablemember-ship";
    }
  }
}
// function makeRowsST(rows, cols) {
//   containerS.style.setProperty('--grid-rows', rows);
//   containerS.style.setProperty('--grid-cols', cols);
//   for (let c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
    
//     containerS.appendChild(cell).className = "grid-item-shiptablemember";
//     containerS.appendChild(cell).id = 'cell' + "S" + c;
//   };
// };

function fillShips(num) {
    for(let i = 0; i < num; i++) {
        if(![1,4,8,13].includes(i)) {
            document.getElementById("cell" + "S" + i).className += "-ship";
        }
    }

    for(let i = 0; i < num; i++) {
        if(i < 1) {

        } else if (i > 1 && i < 4) {

        } else if (i > 4 && i < 8) {

        } else if (i > 8 && i < 13) {

        } else if (i > 13) {
            
        }
    }
}
