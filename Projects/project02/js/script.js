/*****************
dark side of the inernet
Simon Zogheib
This is inspired by
my first project
******************/

let dropNum = 0
let dropNumtwo = 0
let dropNumthree = 0

//audio variables
let gameSFX;
let gametwoSFX;
let gamethreeSFX;
let kidSFX;
let clownSFX;
let screamSFX;
let staticSFX;


$(document).ready(function() {

  // putting the video in variable to be able to pause it after game start
  let video = document.getElementById("bgvid");
  // adding audio files for game One and looping it
  gameSFX = new Audio('assets/sounds/game1.mp3');
  gameSFX.loop = true;

  // adding audio files for game Two and looping it
  gametwoSFX = new Audio('assets/sounds/game2.mp3');
  gametwoSFX.loop = true;

  // adding audio files for game Three and looping it
  gamethreeSFX = new Audio('assets/sounds/game3.mp3');
  gamethreeSFX.loop = true;

  //loading Other sound variable
  kidSFX = new Audio('assets/sounds/kids.mp3');
  clownSFX = new Audio('assets/sounds/clown.mp3');
  screamSFX = new Audio('assets/sounds/scream.mp3');
  staticSFX = new Audio('assets/sounds/static.mp3');

  //Custom cursor
  $('html').css('cursor', 'url(assets/images/cursor.png),auto');

  //Hide Start screen, and show game screen on button click, and play the music
  $('#startText').on('click', function() {
    $('.Start').hide();
    $('.game').show();
    video.pause();

    // Computer speach
    responsiveVoice.speak("I would not play if i were you!", "UK English Male", {
      rate: 0.2,
      pitch: 0.1,
      volume: 0.8
    });

    // put a timer before the music of game starts to play so we can hear the responsive voice first
    setTimeout(function() {
      gameSFX.play();
      gameSFX.volume = 0.2;
    }, 6200);

  });



  // Annyang function
  if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'start': function() {
        $('.Start').hide();
        $('.game').show();
        video.pause();
        // Computer speach
        responsiveVoice.speak("I would not play if i were you!", "UK English Male", {
          rate: 0.2,
          pitch: 0.1,
          volume: 0.8
        });

        // put a timer before the music of game starts to play so we can hear the responsive voice first
        setTimeout(function() {
          gameSFX.play();
        }, 6200);
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
        //Hide pig1 image
        $('.imagePig').hide();
        //Hide pig2 image
        $('.imagePigTwo').hide();

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

      'continue': function() {
        //hide game two
        $('.gameTwo').hide();
        //close the dialog box
        $('#dialogTwo').dialog('close');
        //show game three
        $('.gameThree').show();
        //Hide scary 1 image
        $('.imageTwo').hide();
        //Hide scary 2 image
        $('.imagescary').hide();
        //Hide scary 3 image
        $('.imagescaryTwo').hide();

        // Computer speach
        responsiveVoice.speak("Welcome to the final round", "UK English Male", {
          rate: 0.2,
          pitch: 0.1,
          volume: 0.8
        });

        // put a timer before the music of game starts to play so we can hear the responsive voice first
        setTimeout(function() {
          gamethreeSFX.play();
        }, 3000);
        gamethreeSFX.volume = 0.2;

      },

      'yes sir': function() {
        // Computer speach
        responsiveVoice.speak("good i see you learned!", "UK English Male", {
          rate: 0.4,
          pitch: 0.1,
          volume: 0.8
        });

      },

      'no sir': function() {
        // Computer speach
        responsiveVoice.speak("you better hide, i am comming for you!", "UK English Male", {
          rate: 0.4,
          pitch: 0.1,
          volume: 0.8
        });
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
        //animate the image
        animateDiv('.imageOne');
        // show the pig1 image
        $('.imagePig').show();
        //animate the image
        animateDiv('.imagePig');
        // show the pig2 image
        $('.imagePigTwo').show();
        //animate the image
        animateDiv('.imagePigTwo');
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
              $('.imagePig').hide();
              $('.imagePigTwo').hide();
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
        // show the scary 1 image
        $('.imageTwo').show();
        //animate the image
        animateDiv('.imageTwo');
        // show the scary 2 image
        $('.imagescary').show();
        //animate the image
        animateDiv('.imagescary');
        // show the scary 3 image
        $('.imagescaryTwo').show();
        //animate the image
        animateDiv('.imagescaryTwo');
        gametwoSFX.loop = false;
        gametwoSFX.pause();

        // Open the dialog box
        $("#dialogTwo").dialog({
          modal: true,
          width: 400,
          height: 400,

          buttons: {
            Continue: function() {
              $(this).dialog('close');
              $('.gameTwo').hide();
              $('.imageTwo').hide();
              $('.imagescary').hide();
              $('.imagescaryTwo').hide();
              $('.gameThree').show();
              // Computer speach
              responsiveVoice.speak("Welcome to the final round", "UK English Male", {
                rate: 0.2,
                pitch: 0.1,
                volume: 0.8
              });

              // put a timer before the music of game starts to play so we can hear the responsive voice first
              setTimeout(function() {
                gamethreeSFX.play();
              }, 3000);
              gamethreeSFX.volume = 0.2;
            }
          }
        });

      }
    }

  });

  // End of game Two


  //Setting up draggable elements for game Three

  $(".dragThree").draggable({
    //contained in window
    containment: "window",
    revert: 'invalid',

  });

  // Setting up droppable elements for game Three

  $(".dropThree").droppable({
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
      dropNumthree += 1;

      //tracks the number of droppables and once it gets to 4
      // show the dialog box
      if (dropNumthree === 4) {

        gamethreeSFX.pause();
        gamethreeSFX.loop = false;

        screamSFX.play();
        setTimeout(function() {
          responsiveVoice.speak("you have reached the end of the internet,now go back to your homeworks,And if i catch you playing again this time i will hunt you down for real, i hope you learned your lesson that the internet can be a very dangerous place! Did you understand?", "UK English Male", {
            rate: 0.6,
            pitch: 0.1,
            volume: 0.8
          });
        }, 4000);


        //Hide game three screen
        $('.gameThree').hide();
        $('.final').show();

        // Play static sound
        setTimeout(function() {
            staticSFX.play();
        },4000);

        staticSFX.volume = 0.1 ;

        // Call the typeWriter function
        setTimeout(function() {
          typeWriter();
        }, 4000);
      }
    }
  });
});
// End of document.ready function


//create a typeriter function that will ype the text at the end of the game on the final screen

var i = 0;
var txt = 'you have reached the end of the internet,now go back to your homeworks! And if i catch you playing again this time i will hunt you down for real, i hope you learned your lesson that the internet can be a very dangerous place! Did you understand? say: yes sir or no sir. ';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// function to change the position of the clown image after winning each round Found help on source: codepen
function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}
// Animate the div of the image
function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);
    });

};
