//------------------------------------------------------------------------------------------
//Creates playerTwo grid

//Finds the container that holds playerTwo board
const container2 = document.getElementById("container2");

//This function creates grid, just UI, of the given rows and cols
function makeRows2(rows, cols) {
  container2.style.setProperty('--grid-rows', rows);            //Sets the style for css
  container2.style.setProperty('--grid-cols', cols);
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container2.appendChild(cell).className = "grid-item";       //Creates each cell
    container2.appendChild(cell).id = 'cell' + "2" + c;
  };
};

//Calls the grid function
makeRows2(10, 10);

//------------------------------------------------------------------------------------------