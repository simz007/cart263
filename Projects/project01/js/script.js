/*****************
Fuzzy puzzle
Simon Zogheib

A puzzle game where you have to drag and dropthe
4 pieces of the puzzle in place, but when you think you are done
all the pieces will fall back out of place.

This is inspired by a previous student project (Crapy NAils) by Dana Riachi
******************/

let dropNum = 0

//audio variables
let gameSFX;
let noSFX;



$(document).ready(function() {

  // adding audio files and looping it
  gameSFX = new Audio('assets/sounds/good.mp3');
  gameSFX.loop = true;

  noSFX = new Audio('assets/sounds/no.mp3');

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

  });

  //Setting up droppable elements

  $(".drop").droppable({
    //accept the draggables with same num attribute
    accept: function(item) {
      return $(this).attr('num') === item.attr('num');
    },
    //called when the appropriate draggable has been received
    drop: function(event, ui) {

      //disable draggable so u cant drag it after it's dropped in appropriate droppable
      ui.draggable.draggable("disable");

      //put the draggable in the center of droppable
      ui.draggable.position({
        my: "center",
        at: "center",
        of: $(this)
      });

      // keep track of how many draggables got droppedand add 1 each time
      dropNum += 1;

      //tracks the number of droppables and once it gets to 4
      // it calls the reset function

      if (dropNum === 4) {
        reset(event, ui);
      }
    }

  });
  //End of droppable elements

});


// Reset function that once all the draggables are dropped, it will animate them out of the
// dropable divs with an animation and change their position,
// play the Oh no sound, open the dialog box and re enable the dragging

function reset(event, ui) {
  // move the draggables outside the droppable area with easeoutelastic animation
  ui.draggable.position({
    my: "top+50px",
    //at the bottom of the window
    at: "center-300",
    of: window,
    //using a "easeOutElastic" easing
    using: function(pos) {
      $(".drag").animate(pos, 900, "easeOutElastic");
    }
  });

  // play the Oh NO sound
  noSFX.play();
  // Open the dialog box
  $("#dialog").dialog({
    width: 400,
    height: 400
  });
  // Enable the dragging option to the draggables
  $(".drag").draggable("enable");


  // Reset the dropped number to 0
  dropNum = 0;
}
