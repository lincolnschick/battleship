const containerS = document.getElementById("containerS");

function makeRowsST(rows, cols) {
  containerS.style.setProperty('--grid-rows', rows);
  containerS.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    cell.addEventListener("mouseover", function() {document.getElementById('cell' + "S" + c).className += ('-hovered');});
    cell.addEventListener("mouseout", function() {document.getElementById('cell' + "S" + c).className = ('grid-item');});
    
    containerS.appendChild(cell).className = "grid-item";
    containerS.appendChild(cell).id = 'cell' + "S" + c;
  };
};