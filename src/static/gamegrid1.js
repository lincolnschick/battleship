const container = document.getElementById("container1");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");

    cell.addEventListener("mouseover", function() {document.getElementById('cell' + c).className += ('-hovered');});
    cell.addEventListener("mouseout", function() {document.getElementById('cell' + c).className = ('grid-item');});
    
    container.appendChild(cell).className = "grid-item";
    container.appendChild(cell).id = 'cell' + c;
  };
};

makeRows(10, 10);

function ordPair(id) {
  let num = Number(id.slice(4));
  let i = Math.floor(num / 10);
  let j = num % 10;
  return [i, j];
}