/*****************
Fuzzy puzzle
Simon Zogheib

A puzzle game where you have to drag and dropthe
4 pieces of the puzzle in place, but when you think you are done
all the pieces will fall back out of place.

This is inspired by a previous student project (Crapy NAils) by Dana Riachi
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

      

      //store dropped draggable in a variable
      let dragged = ui.draggable;

      //disable draggable so u cant drag it after it's dropped in appropriate droppable
      dragged.draggable("disable");

      //put the draggable in the center of droppable
      dragged.position({
        my: "center",
        at: "center",
        of: $(this)
      });
    }
  });
  //End of droppable elements


});
