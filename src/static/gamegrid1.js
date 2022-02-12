//------------------------------------------------------------------------------------------
//Creates playerOne grid

//Finds the container that holds playerOne board
const container1 = document.getElementById("container1");

//This function creates grid, just UI, of the given rows and cols
function makeRows1(rows, cols) {
  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  container1.style.setProperty('--grid-rows', rows+1);            //Sets the style for css
  container1.style.setProperty('--grid-cols', cols+1);
  for (let c = 0; c < cols + 1; c++) {
    let cell = document.createElement("div");
    container1.appendChild(cell);
    cell.className = "grid-item";
    if (c >= 0) {
      if (c != 0) {
        cell.innerHTML = alpha[c-1];
      }
      cell.className = "grid-label";
    }
  }
  for (let i = 0; i < rows; i++) {
    let label = document.createElement('div');
    container1.appendChild(label).className = "grid-label";
    label.innerHTML = i + 1;
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      container1.appendChild(cell).className = "grid-item";       //Creates each cell
      container1.appendChild(cell).id = 'cell' + "1" + (i*10+j);         //with given params
    }
  }
}

//Calls the grid function
makeRows1(10, 10);

//------------------------------------------------------------------------------------------
//These are functions that interact and return certain things that used to update the board

//Since the cells are labeled in such a way, this will return the row,col pair
function ordPair(id) {
  let num = Number(id.slice(5));
  let i = Math.floor(num / 10);
  let j = num % 10;
  return [i, j];
}

//Takes in a board, and row,col pair and returns the id
function getId(board, i, j) {
  let num = i * 10 + j
  return `cell${board}${num}`;
}

//
function getBoardFromId(id) {
  return Number(id.slice(4, 5));
}
//------------------------------------------------------------------------------------------