document.addEventListener('DOMContentLoaded', function() {

  var count = 0, player = 1
  var winningMoves = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
  ]

  var moves = ["", "", "", "", "", "", "", "", ""]

  var cells = document.querySelectorAll('td');

  // CHOOSING A CELL, SWAPPING BETWEEN PLAYERS

  cells.forEach(function(cell) {
    cell.addEventListener('click', function(e){
      if (player === 1 && cell.className === 'cell empty') {
        cell.innerHTML = 'X';
        player = 2;
        moves[Number(e.target.id) - 1] = "X";
      }
      else if (player === 2 && cell.className === 'cell empty') {
        cell.innerHTML = 'O';
        player = 1;
        moves[Number(e.target.id) - 1] = "O";
      }
      cell.className = "cell full";
      ++count;
      console.log(moves);
      checkIfWinner();
    });
  });

  function checkIfWinner() {
    // checking if X or O is winner
    var xMoves = [];
    var oMoves = [];
    moves.forEach(function(move, idx) {
      if (move === "X") {
        xMoves.push(idx + 1);
      }
      else if (move === "O") {
        oMoves.push(idx + 1);
      }
    });

    winningMoves.forEach(function(winSet) {
      var xWinCount = 0;
      var oWinCount = 0;
      winSet.forEach(function(cell) {
        if (xMoves.includes(cell)) {
          ++xWinCount;
        } else if (oMoves.includes(cell)) {
          ++oWinCount;
        }
      })
      if (xWinCount >= 3) {
        console.log("X WINS");
      } else if (oWinCount >= 3) {
        console.log("O WINS");
      }
    })
  }

});
