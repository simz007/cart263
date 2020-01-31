
/*****************
Fuzzy puzzle
Simon Zogheib

A puzzle game where you have to drag and dropthe
4 pieces of the puzzle in place, but when you think you are done
all the pieces will fall back out of place
******************/



//sound variables



$(document).ready(function(){

  //Custom cursor
  $('html').css('cursor','url(assets/images/cursor.png),auto');

//Hide Start screen, and show game screen on button click, and play the music
  $('#startText').on('click', function(){
    $('.Start').hide();
    $('.game').show();
    // music.play();
  });



});
