const OPTIONS = ["16", "32", "64"];
var theParent = document.getElementById("container1");
var theParent2 = document.getElementById("container2");
var theParent3 = document.getElementById("container3");
document.getElementById("color-btn").onclick = function() {
  randomColor()
};
document.getElementById("reset-btn").onclick = function() {
  resetGrid();
};
document.getElementById("grid").onclick = function() {
  diffGrid()
};

function blackColor() {
  theParent.addEventListener("mouseover", blackSquare, false);
  theParent2.addEventListener("mouseover", blackSquare, false);
  theParent3.addEventListener("mouseover", blackSquare, false);
}

function randomColor() {
  theParent.addEventListener("mouseover", colorSquare, false);
  theParent2.addEventListener("mouseover", colorSquare, false);
  theParent3.addEventListener("mouseover", colorSquare, false);
}

function resetGrid() {
  while (theParent.hasChildNodes()) {
    theParent.removeChild(theParent.lastChild);
  }
  while (theParent2.hasChildNodes()) {
    theParent2.removeChild(theParent2.lastChild);
  }
  while (theParent3.hasChildNodes()) {
    theParent3.removeChild(theParent3.lastChild);
  }
}

function buildGrid() {
  resetGrid();
  for (var i = 0; i < 4096; i++) {
    var square = document.createElement("div");
    square.setAttribute("class", `square`);
    square.style.width = "9.375px";
    square.style.height = "9.375px";
    square.id = 'square' + i;
    theParent.appendChild(square);
  }
}

function buildGrid2() {
  resetGrid();
  for (var i = 0; i < 1024; i++) {
    var square = document.createElement("div");
    square.setAttribute("class", `square`);
    square.style.width = "18.75px";
    square.style.height = "18.75px";
    square.id = 'square' + i;
    theParent2.appendChild(square);
  }
}

function buildGrid3() {
  resetGrid();
  for (var i = 0; i < 256; i++) {
    var square = document.createElement("div");
    square.setAttribute("class", `square`);
    square.style.width = "37.5px";
    square.style.height = "37.5px";
    square.id = 'square' + i;
    theParent3.appendChild(square);
  }
}

function blackSquare(e) {
  if (e.target !== e.currentTarget) {
    var color = e.target.id;
    e.target.style.backgroundColor = "black";
  }
  e.stopPropagation();
}

function colorSquare(e) {
  var newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  if (e.target !== e.currentTarget) {
    var color = e.target.id;
    e.target.style.backgroundColor = `${newColor}`;
  }
  e.stopPropagation();
}

function diffGrid() {
  let gridselect;
  do {
    gridselect = prompt(`Choose a grid size: 16,32,64`);
    if (gridselect == null) {
      return;
    }
  } while (!isValidInput(gridselect))
  gridBuild(gridselect);
}

function gridBuild(gridselect) {
  if (gridselect == '16') {
    document.getElementById("container3").style.display = "";
    document.getElementById("container2").style.display = "none";
    document.getElementById("container1").style.display = "none";
    buildGrid3();
  } else if (gridselect == '32') {
    document.getElementById("container3").style.display = "none";
    document.getElementById("container2").style.display = "";
    document.getElementById("container1").style.display = "none";
    buildGrid2();
  } else if (gridselect == '64') {
    document.getElementById("container1").style.display = "";
    buildGrid();
  } else {
    alert("Problem loading Grid. Refresh your browser.")
  }
}

function isValidInput(input) {
  if (OPTIONS.includes(input)) {
    return true;
  }
  alert('Invalid Input');
  return false;
}

function start() {
  buildGrid();
  blackColor();
}
start();
