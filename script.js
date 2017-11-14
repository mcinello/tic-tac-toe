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

  // when player 1 clicks, add x to td
  // can't click in that area anymore
  // change player to 2
  // count ++

  //when player 2 clicks, add o to td
  // change player to 1
  // count ++

  var cells = document.querySelectorAll('td');

  cells.forEach(function(cell) {
    cell.addEventListener('click', function(e){

      if (player === 1) {
        cell.innerHTML = 'x';
        player = 2;
      } else if (player === 2) {
        cell.innerHTML = 'o';
        player = 1;
      }



    });
  });

});
