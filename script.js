//Dome constant
const btnTable = document.getElementById("grid-button");
const table = document.getElementById("table-container");
const btnReset = document.getElementById("reset-button");
let gridElement = document.getElementsByClassName("style-grid-Elements");

// Creating the grid button
alert("Reset the grid size every time you change the values.");
btnTable.addEventListener("click", () => {
  let rows = document.getElementById("num-rows").value;
  let col = document.getElementById("num-column").value;
  if (rows > 64 || col > 64) {
    alert("Choose a number between 1 and 64");
    document.getElementById("num-rows").value = "";
    document.getElementById("num-column").value = "";
  } else if (rows == "" || col == "") {
    alert("You must fill both parameters");
  }else makeTable(rows, col);
});

//Reset the grid-child button
btnReset.addEventListener("click", resetTable);
function makeTable(numRows, numCol) {
  table.style.gridTemplateRows = `repeat(${numRows}, 1fr)`;
  table.style.gridTemplateColumns = `repeat(${numCol},1fr)`;
  for (let index = 0; index < numRows * numCol; index++) {
    gridElement = document.createElement("div");
    gridElement.classList = "style-grid-Elements";
    gridElement.addEventListener("mouseover", pentColor);
    table.appendChild(gridElement);
  }
}

function resetTable() {
  const gridArray = Array.from(table.childNodes);
  gridArray.forEach((element) => {
    table.removeChild(element);
  });
  document.getElementById("num-rows").value = "";
  document.getElementById("num-column").value = "";
}

function pentColor(grid) {
  let redColor = Math.floor(Math.random() * 256);
  let greenColor = Math.floor(Math.random() * 256);
  let blueColor = Math.floor(Math.random() * 256);
  grid.target.style.backgroundColor = `rgb(${redColor},${greenColor},${blueColor})`;
}