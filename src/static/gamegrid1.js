//------------------------------------------------------------------------------------------
//Creates playerOne grid

//Finds the container that holds playerOne board
const container1 = document.getElementById("container1");

//This function creates grid, just UI, of the given rows and cols
function makeRows1(rows, cols) {
  container1.style.setProperty('--grid-rows', rows);            //Sets the style for css
  container1.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container1.appendChild(cell).className = "grid-item";       //Creates each cell
    container1.appendChild(cell).id = 'cell' + "1" + c;         //with given params
  };
};

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