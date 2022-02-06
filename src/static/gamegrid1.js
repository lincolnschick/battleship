const container1 = document.getElementById("container1");

function makeRows(rows, cols) {
  container1.style.setProperty('--grid-rows', rows);
  container1.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    cell.addEventListener("mouseover", function() {document.getElementById('cell' + "1" + c).className += ('-hovered');});
    cell.addEventListener("mouseout", function() {document.getElementById('cell' + "1" + c).className = ('grid-item');});
    
    container1.appendChild(cell).className = "grid-item";
    container1.appendChild(cell).id = 'cell' + "1" + c;
  };
};

makeRows(10, 10);