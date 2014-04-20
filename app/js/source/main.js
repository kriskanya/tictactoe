(function(){
  'use strict';

  $(document).ready(initialize);

  var player = 1;

  function initialize(){
    $('#board').on('click', 'td.empty', select);    //only .empty can be selected
  }

  function select(){

    if(player===1){
      // $(this).text('x');
      $(this).addClass('x');
      $(this).removeClass('empty');
    } else {
      // $(this).text('o');
      $(this).addClass('o');
      $(this).removeClass('empty');
    }
    // gameArray.push(player);
    player = player * -1;

    checkWin();

    // if($('td.x').length >= 3 || $('td.o').length >= 3) {
    //   // checkwin()
    // }

  }

  function checkWin(){
    var tdArray = $('tbody > tr:nth-child(1) > td');
    var tdArray2 = $('tbody > tr:nth-child(2) > td');
    var tdArray3 = $('tbody > tr:nth-child(3) > td');

    console.log(tdArray.attr('class'));

    if($(tdArray[0]).attr('class') === $(tdArray[1]).attr('class') === $(tdArray[2]).attr('class')) {    //horizontal
      alert('you win');
    }


    // if($(tdArray[0]).hasClass('x') && $(tdArray[1]).hasClass('x') && $(tdArray[2]).hasClass('x')) {    //horizontal
    //   alert('you win');
    // }
    else if($(tdArray2[0]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray2[2]).hasClass('x')) {  //horizontal
      alert('you win');
    }
    else if($(tdArray3[0]).hasClass('x') && $(tdArray3[1]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {  //horizontal
      alert('you win');
    }
    else if($(tdArray[0]).hasClass('x') && $(tdArray2[0]).hasClass('x') && $(tdArray3[0]).hasClass('x')) {  //vertical
      alert('you win');
    }
    else if($(tdArray[1]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[1]).hasClass('x')) {  //vertical
      alert('you win');
    }
    else if($(tdArray[2]).hasClass('x') && $(tdArray2[2]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {  //vertical
      alert('you win');
    }
    else if($(tdArray[0]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[2]).hasClass('x')) {  //diagonal
      alert('you win');
    }
    else if($(tdArray[2]).hasClass('x') && $(tdArray2[1]).hasClass('x') && $(tdArray3[0]).hasClass('x')) {  //diagonal
      alert('you win');
    }
    //o's

    else if($(tdArray[0]).hasClass('o') && $(tdArray[1]).hasClass('o') && $(tdArray[2]).hasClass('o')) {    //horizontal
      alert('you win');
    }
    else if($(tdArray2[0]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray2[2]).hasClass('o')) {  //horizontal
      alert('you win');
    }
    else if($(tdArray3[0]).hasClass('o') && $(tdArray3[1]).hasClass('o') && $(tdArray3[2]).hasClass('o')) {  //horizontal
      alert('you win');
    }
    else if($(tdArray[0]).hasClass('o') && $(tdArray2[0]).hasClass('o') && $(tdArray3[0]).hasClass('o')) {  //vertical
      alert('you win');
    }
    else if($(tdArray[1]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[1]).hasClass('o')) {  //vertical
      alert('you win');
    }
    else if($(tdArray[2]).hasClass('o') && $(tdArray2[2]).hasClass('o') && $(tdArray3[2]).hasClass('o')) {  //vertical
      alert('you win');
    }
    else if($(tdArray[0]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[2]).hasClass('o')) {  //diagonal
      alert('you win');
    }
    else if($(tdArray[2]).hasClass('o') && $(tdArray2[1]).hasClass('o') && $(tdArray3[0]).hasClass('o')) {  //diagonal
      alert('you win');
    }

    // if($('td.x').index([0,1,2])){
    //   alert('you win');
    // }


  }

})();
