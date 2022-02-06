const container2 = document.getElementById("container2");

function makeRows(rows, cols) {
  container2.style.setProperty('--grid-rows', rows);
  container2.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    cell.addEventListener("mouseover", function() {document.getElementById('cell' + "2" + c).className += ('-hovered-guess');});
    cell.addEventListener("mouseout", function() {document.getElementById('cell' + "2" + c).className = ('grid-item');});
    
    container2.appendChild(cell).className = "grid-item";
    container2.appendChild(cell).id = 'cell' + "2" + c;
  };
};

makeRows(10, 10);