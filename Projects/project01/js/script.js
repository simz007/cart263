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
    //called when dragging starts
    start: function(event, ui) {
      //detect superposition with the appropriate droppable element
      ui.helper.data('dropped', false);


    },

  });
  //End of draggable elements



  //Setting up droppable elements

  $(".drop").droppable({
    //accept the draggables with same num attribute
    accept: function(item) {
      return $(this).attr('num') === item.attr('num');
    },
    //called when the appropriate draggable has been received
    drop: function(event, ui) {
      //notify the ui helper that the appropriate function is performed
      // and that the draggable was dropped in the correct droppable
      ui.helper.data('dropped', true);


      let dragged = ui.draggable;

      //disable draggable so u cant drag it after it's dropped in appropriate droppable
      dragged.draggable("disable");

      //put the draggable in the center of droppable
      dragged.position({
        my: "center",
        at: "center",
        of: $(this)
      });


      // keep track of how many draggables got droppedand add 1 each time
      dropNum += 1;


      //function that tracks the number of droppables and once it gets to 4
      // it animates the draggables outside of the droppables and enable dragging
      // once again

      if (dropNum === 4) {

      // move the draggables outside the droppable area with easeoutelastic animation
        dragged.position({
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
        // Enable the dragging option to the draggables
        $(".drag").draggable("enable");

        // Reset the dropped number to 0
        dropNum = 0;

      }

    }

  });
    //End of droppable elements



});
