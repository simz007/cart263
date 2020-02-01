/*****************
Fuzzy puzzle
Simon Zogheib

A puzzle game where you have to drag and dropthe
4 pieces of the puzzle in place, but when you think you are done
all the pieces will fall back out of place
******************/



//audio variables
let gameSFX;



$(document).ready(function() {

  // adding audio files and looping it
  gameSFX = new Audio('assets/sounds/good.mp3');
  gameSFX.loop = true;

  //Custom cursor
  $('html').css('cursor', 'url(assets/images/cursor.png),auto');

  //Hide Start screen, and show game screen on button click, and play the music
  $('#startText').on('click', function() {
    $('.Start').hide();
    $('.game').show();
    gameSFX.play();
  });



  //Setting up draggable elements
  $(".drag").draggable({
    //contained in window
    containment: "window",
    revert: 'invalid',
    //called when dragging starts
    start: function(event, ui) {
      //detect superposition with the appropriate droppable element
      ui.helper.data('dropped', false);
    },


  });







});
