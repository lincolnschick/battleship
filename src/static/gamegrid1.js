const container1 = document.getElementById("container1");

//Creates the elements that represent each cell in the playerOne Main board (ship board)
//Does so by setting it to a style, then going through creating each individual cell
//After which it adds some basic functionality (hovering over a grid). 
function makeRows1(rows, cols) {
  container1.style.setProperty('--grid-rows', rows);
  container1.style.setProperty('--grid-cols', cols);
  for ( let i = 0 ; i < rows ; i ++ ){
    for ( let j = 0 ; j < cols ; j ++ ){
      let cell = document.createElement( "div" );
      container1.appendChild(cell).className = "grid-item";
      container1.appendChild(cell).id = "P1main" + i + j;
      document.getElementById("P1main" + i + j).className = ('grid-item');
      cell.addEventListener("mouseover", function() {document.getElementById("P1main" + i + j).className += ('-hovered');});
      cell.addEventListener("mouseout", function() {document.getElementById("P1main" + i + j).className = ('grid-item');});
    }
  }
};

//Calls the makeRows1(rows,cols) func.
makeRows1(10, 10);

//Keeping a function that gave cords just in case need to revert/use...
/*function ordPair(id) {
  let num = Number(id.slice(5));
  let i = Math.floor(num / 10);
  let j = num % 10;
  return [i, j];
}*/