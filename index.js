var x = true;
var o = false;
var empty = null;
var currentPlayer = x;
var nString = 3;
var nCell = 3;

// var field = [
//   [empty, empty, empty],
//   [empty, empty, empty],
//   [empty, empty, empty]
// ]

var field = [];

for(var indexString = 0; indexString < nString; indexString++) {
  field[indexString] = [];

  for(var indexCell = 0; indexCell < nCell; indexCell++) {
    field[indexString][indexCell] = empty;
  }
}

function makeStep(indexString, indexCell) {
  if(
    typeof(indexString) === 'number'
    && typeof(indexCell) === 'number'
    && (indexString >= 0 && indexString < nString)
    && (indexCell >= 0 && indexCell < nCell)
  ) {
    field[indexString][indexCell] = currentPlayer;
    currentPlayer = !currentPlayer;
  }
}

console.log(field);
