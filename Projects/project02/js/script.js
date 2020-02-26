/*****************
dark side of the inernet
Simon Zogheib
This is inspired by
my first project
******************/

let dropNum = 0

//audio variables
let gameSFX;
let kidSFX;



$(document).ready(function() {

  // adding audio files and looping it
  gameSFX = new Audio('assets/sounds/game1.mp3');
  gameSFX.loop = true;

  kidSFX = new Audio('assets/sounds/kids.mp3');

  //Custom cursor
  $('html').css('cursor', 'url(assets/images/cursor.png),auto');

  //Hide Start screen, and show game screen on button click, and play the music
  $('#startText').on('click', function() {
    $('.Start').hide();
    $('.game').show();
    gameSFX.play();
  });



  // Annyang function
  if (annyang) {
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'start': function() {
          console.log("NOOOOO");
          gameSFX.play();
          $('.Start').hide();
          $('.game').show();

    },
      };
      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
  }








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
      // show the dialog box
      if (dropNum === 4) {

        kidSFX.play();
        // gameSFX.loop = false;
        gameSFX.pause();
        // Open the dialog box
        $("#dialog").dialog({
          modal: true,
          width: 400,
          height: 400,

          buttons: {
            next: function() {
        $(this).dialog('close');

         }
        }
      });
      }
    }

  });







});
