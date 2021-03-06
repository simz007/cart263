"use strict";

/********************************************************************

Pixel painter

Simon Zogheib

A small DOM-based program for "painting" on div-based pixels.

*********************************************************************/

// Constants
const NUM_PIXELS = 1000;
const PIXEL_REVERT_DELAY = 1000;
const DEFAULT_COLOR = 'black';

//rotation variable
let rotation = 0;

let currentKey = "";

// Set up our starting function for when the page loads
window.onload = setup;

// setup
//
// Adds DIVs to the page along with event listeners that will allow
// then to change color on mouseover.
function setup() {
  // A loop that runs once per pixel we need
  for (let i = 0; i < NUM_PIXELS; i++) {
    // Create a DIV and store it in a variable
    let pixel = document.createElement('div');
    // Add the 'pixel' class to the new element
    pixel.setAttribute('class', 'pixel');
    // Add a mouseover handler to the new element
    pixel.addEventListener('mouseover', paint);
    // add a click handler to the new element that calls the remove function
    pixel.addEventListener('click', remove);
    // add a keydown handler that calls the rotate function
    document.addEventListener('keydown', rotate);
    // add a keydown handler that calls the typed function
    document.addEventListener('keydown', typed);
    // Add the element to the body of the page
    document.body.appendChild(pixel);
  }
}

// paint
//
// Called by the mouseover event handler on each pixel. Changes
// the pixel's color and sets a timer for it to revert
function paint(e) {
  // e.target contains the specific element moused over so let's
  // save that into a variable for clarity.
  let pixel = e.target;
  // Give r g b random values
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  // Change the background color of the element to the random values of r g b
  pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // Set a timeout to call the reset function after a delay
  // When we pass additional parameters (like 'pixel' below) they
  // are passed to the callback function (resetPixel)
  setTimeout(resetPixel, PIXEL_REVERT_DELAY, pixel);
}

// resetPixel
//
// Takes the provided pixel element and sets its color back to default
function resetPixel(pixel) {
  pixel.style.backgroundColor = DEFAULT_COLOR;
}

// remove function
// removes a pixel from the screen (by setting opacity to 0)
function remove(e) {
  // e.target contains the specific element clicked
  let pixel = e.target;
  //set the pixel opacity to 0
  pixel.style.opacity = '0';

}

// rotate function
// rotates all pixels on sreen after key is pressed
function rotate(e) {
// Get all the pixels
  let pixels = document.getElementsByClassName('pixel');
// update the rotation for all pixels
  for (var i = 0; i < pixels.length; i++) {
    pixels[i].style.transform = `rotate(${rotation}deg)`
  }
// right arrow pressed
  if (e.keyCode === 39) {
    rotation += 1;
  }
// left arrow pressed
  if (e.keyCode === 37) {
    rotation -= 1;
  }
}

// function that sets the currentKey to the keyCode pressed
function typed(e) {
  currentKey = e.keyCode;
}
