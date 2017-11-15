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

  var body = document.querySelector('body');
  var h2 = document.createElement('h2');

  // CHECKING IF X OR O IS WINNER, OR A DRAW
  function checkIfWinner() {
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
        h2.innerText = "Player X wins!"
      } else if (oWinCount >= 3) {
        h2.innerText = "Player O wins!"
      } else if (count === 9 && xWinCount < 3 && oWinCount < 3) {
        h2.innerText = "Draw!"
      }
      body.append(h2);
    })
  }

  // RESET GAME
  var button = document.querySelector('button')
  button.addEventListener('click', function() {
    count = 0, player = 1
    moves = ["", "", "", "", "", "", "", "", ""]
    h2.innerText = "";
    cells.forEach(function(cell) {
      cell.className = "cell empty";
      cell.innerHTML = "";
    });
  });

});
