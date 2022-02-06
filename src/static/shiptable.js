const containerS = document.getElementById("containerS");

function makeRowsST(rows, cols) {
  containerS.style.setProperty('--grid-rows', rows);
  containerS.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    containerS.appendChild(cell).className = "grid-item-shiptablemember";
    containerS.appendChild(cell).id = 'cell' + "S" + c;
  };
};

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
