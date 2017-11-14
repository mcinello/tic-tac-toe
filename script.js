document.addEventListener('DOMContentLoaded', function() {

  var count = 0, player = 1
  var winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
  ]

  var moves = [0,0,0,0,0,0,0,0,0]

  var cells = document.querySelectorAll('td');

  // when player 1 clicks, add x to td
  // can't click in that area anymore
  // change player to 2
  // count ++

  //when player 2 clicks, add o to td
  // change player to 1
  // count ++

  // if div index+1 === winningcombos




  // CHOOSING A CELL, SWAPPING BETWEEN PLAYERS

  cells.forEach(function(cell) {
    cell.addEventListener('click', function(e){
      if (player === 1 && cell.className === 'cell empty') {
        cell.innerHTML = 'X';
        player = 2;
        moves[Number(e.target.id)] = "X";
        console.log(moves);
        ++count;
        // function here to check win
        cell.className = "cell full";
      } else if (player === 2 && cell.className === 'cell empty') {
        cell.innerHTML = 'O';
        player = 1;
        moves[Number(e.target.id)] = "0";
        console.log(moves);
        ++count;
        cell.className = "cell full";
      }
    });
  });

});
