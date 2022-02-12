//------------------------------------------------------------------------------------------
//Creates playerTwo grid

//Finds the container that holds playerTwo board
const container2 = document.getElementById("container2");

//This function creates grid, just UI, of the given rows and cols
function makeRows2(rows, cols) {
  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  container2.style.setProperty('--grid-rows', rows+1);            //Sets the style for css
  container2.style.setProperty('--grid-cols', cols+1);
  for (let c = 0; c < cols + 1; c++) {
    let cell = document.createElement("div");
    container2.appendChild(cell);
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
    container2.appendChild(label).className = "grid-label";
    label.innerHTML = i + 1;
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      container2.appendChild(cell).className = "grid-item";       //Creates each cell
      container2.appendChild(cell).id = 'cell' + "2" + (i*10+j);         //with given params
    }
  }
}

//Calls the grid function
makeRows2(10, 10);

//------------------------------------------------------------------------------------------