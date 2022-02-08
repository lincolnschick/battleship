const container1 = document.getElementById("container1");

function makeRows1(rows, cols) {
  container1.style.setProperty('--grid-rows', rows);
  container1.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container1.appendChild(cell).className = "grid-item";
    container1.appendChild(cell).id = 'cell' + "1" + c;
  };
};

makeRows1(10, 10);

function ordPair(id) {
  let num = Number(id.slice(5));
  let i = Math.floor(num / 10);
  let j = num % 10;
  return [i, j];
}

function getId(board, i, j) {
  let num = i * 10 + j
  return `cell${board}${num}`;
}

function getBoardFromId(id) {
  return Number(id.slice(4, 5));
}