/*****************
dark side of the inernet
Simon Zogheib
This is inspired by
my first project
******************/

let dropNum = 0
let dropNumtwo = 0

//audio variables
let gameSFX;
let gametwoSFX;
let kidSFX;
let clownSFX;



$(document).ready(function() {

  // adding audio files for game One and looping it
  gameSFX = new Audio('assets/sounds/game1.mp3');
  gameSFX.loop = true;

  // adding audio files for game Two and looping it
  gametwoSFX = new Audio('assets/sounds/game2.mp3');
  gametwoSFX.loop = true;


  kidSFX = new Audio('assets/sounds/kids.mp3');
  clownSFX = new Audio('assets/sounds/clown.mp3');

  //Custom cursor
  $('html').css('cursor', 'url(assets/images/cursor.png),auto');




  //Hide Start screen, and show game screen on button click, and play the music
  $('#startText').on('click', function() {
    $('.Start').hide();
    $('.game').show();

    // Computer speach
    responsiveVoice.speak("be careful, i would not play if i were you!", "UK English Male", {
      rate: 0.2,
      pitch: 0.1,
      volume: 0.8
    });

    // put a timer before the music of game starts to play so we can hear the responsive voice first
    setTimeout(function() {
      gameSFX.play();
      gameSFX.volume = 0.2;
    }, 7700);

  });



  // Annyang function
  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'start': function() {
        $('.Start').hide();
        $('.game').show();
        // Computer speach
        responsiveVoice.speak("be careful, i would not play if i were you!", "UK English Male", {
          rate: 0.2,
          pitch: 0.1,
          volume: 0.8
        });

        // put a timer before the music of game starts to play so we can hear the responsive voice first
        setTimeout(function() {
          gameSFX.play();
        }, 7700);
        gameSFX.volume = 0.2;

      },

      'go': function() {
        //hide game one
        $('.game').hide();
        //close the dialog box
        $('#dialog').dialog('close');
        //show game two
        $('.gameTwo').show();
        //Hide clown image
        $('.imageOne').hide();

        // Computer speach
        responsiveVoice.speak("Are you scared yet?", "UK English Male", {
          rate: 0.2,
          pitch: 0.1,
          volume: 0.8
        });

        // put a timer before the music of game starts to play so we can hear the responsive voice first
        setTimeout(function() {
          gametwoSFX.play();
        }, 2600);
        gametwoSFX.volume = 0.2;

      },

    };
    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }








  //Setting up draggable elements for game One

  $(".drag").draggable({
    //contained in window
    containment: "window",
    revert: 'invalid',

  });

  //Setting up droppable elements for game1

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
        setTimeout(function() {
          responsiveVoice.speak("Since you started, now go to the next round", "UK English Male", {
            rate: 0.2,
            pitch: 0.1,
            volume: 0.8
          });
        }, 3500);
        // show the clown image
        $('.imageOne').show();
        //Stop the game music
        gameSFX.loop = false;
        gameSFX.pause();

        // Open the dialog box
        $("#dialog").dialog({
          modal: true,
          width: 400,
          height: 400,

          buttons: {
            go: function() {
              $(this).dialog('close');
              $('.game').hide();
              $('.gameTwo').show();
              $('.imageOne').hide();
              // Computer speach
              responsiveVoice.speak("Are you scared yet?", "UK English Male", {
                rate: 0.2,
                pitch: 0.1,
                volume: 0.8
              });

              // put a timer before the music of game starts to play so we can hear the responsive voice first
              setTimeout(function() {
                gametwoSFX.play();
              }, 2600);
              gametwoSFX.volume = 0.2;
            }
          }
        });
      }
    }
  });

  // End of game one


  //Setting up draggable elements for game Two

  $(".dragTwo").draggable({
    //contained in window
    containment: "window",
    revert: 'invalid',

  });

  // Setting up droppable elements for game Two

  $(".dropTwo").droppable({
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
      dropNumtwo += 1;

      //tracks the number of droppables and once it gets to 4
      // show the dialog box
      if (dropNumtwo === 4) {

        clownSFX.play();
        setTimeout(function() {
          responsiveVoice.speak("can you handle the last round?", "UK English Male", {
            rate: 0.2,
            pitch: 0.1,
            volume: 0.8
          });
        }, 4800);
        $('.imageTwo').show();
        gametwoSFX.loop = false;
        gametwoSFX.pause();

        // Open the dialog box
        $("#dialogTwo").dialog({
          modal: true,
          width: 400,
          height: 400,

          buttons: {
            Yes: function() {
              $(this).dialog('close');
              $('.gameTwo').hide();
              $('.imageTwo').hide();
                $('.gameThree').show();
              // Computer speach
              responsiveVoice.speak("Welcome to the final round", "UK English Male", {
                rate: 0.2,
                pitch: 0.1,
                volume: 0.8
              });

              // put a timer before the music of game starts to play so we can hear the responsive voice first
              setTimeout(function() {
                gametwoSFX.play();
              }, 3000);
              gametwoSFX.volume = 0.2;
            }
          }
        });

      }
    }

  });

  // End of game Two






});
