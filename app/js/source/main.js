(function(){
  'use strict';

  $(document).ready(initialize);

  var player = 1;

  function initialize(){
    $('#board').on('click', 'td.empty', select);
  }

  function select(){

    if(player===1){
      $(this).append('x');
      $(this).addClass('x');
      $(this).removeClass('empty');
    } else {
      $(this).append('o');
      $(this).addClass('o');
      $(this).removeClass('empty');
    }
    // gameArray.push(player);
    checkWin();
    player = player * -1;

  }

  function checkWin(){

    if($('td.x').length >= 3 || $('td.y').length >= 3) {
      alert('you win');
    }
  }

  // function whoseTurn(){
  //
  //
  // }

  //// [0,1.0,1....]

})();
