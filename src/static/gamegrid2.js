const container2 = document.getElementById("container2");

function makeRows2(rows, cols) {
  container2.style.setProperty('--grid-rows', rows);
  container2.style.setProperty('--grid-cols', cols);
  for ( let i = 0 ; i < rows ; i ++ ){
    for ( let j = 0 ; j < cols ; j ++ ){
      let cell = document.createElement( "div" );
      container2.appendChild(cell).className = "grid-item";
      container2.appendChild(cell).id = "P1ghost" + i + j;
      document.getElementById("P1ghost" + i + j).className = ('grid-item');
      cell.addEventListener("mouseover", function() {document.getElementById("P1ghost" + i + j).className += ('-hovered-guess');});
      cell.addEventListener("mouseout", function() {document.getElementById("P1ghost" + i + j).className = ('grid-item');});
    }
  }
};

//Calls the makeRows2(rows,cols) func.
makeRows2(10, 10);