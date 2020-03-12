"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);


function setup() {

// Load jSon file
$.getJSON("assets/data/data.json")
  .done(dataLoaded)
  .fail(dataError)

}


function dataLoaded(data) {
console.log(data);
//get a random condiment from the condiment array in Json file
let randomCondiment = getRandomElement(data.condiments);
console.error(randomCondiment);

let verb = "is";
if (randomCondiment.charAt(randomCondiment.length - 1) === "s"){
verb = "are";
}

console.error(verb);
//get a random cat from the cat array in Json file
let randomCat = getRandomElement(data.cats);
console.error(randomCat);
//get a random room from the room array in Json file
let randomRoom = getRandomElement(data.rooms);
console.error(randomRoom);

//get a random game from the game array in Json file
let randomGame = getRandomElement(data.games);
console.error(randomGame);
//get a random color from the condiment array in Json file
let randomColor = getRandomElement(data.colors);
console.error(randomColor.color);

// check if the first letter of the color is a vowel and change the a to an
let indefiniteArticle = "a";
if (randomColor.color.charAt(0) === "A" || randomColor.color.charAt(0) === "E" || randomColor.color.charAt(0) === "I" || randomColor.color.charAt(0) === "O" || randomColor.color.charAt(0) === "U" ||randomColor.color.charAt(0) === "Y"){
indefiniteArticle = "an";
}


// Create the string for our phrase with all the random element obtained
let randomDescription = `${randomCondiment} ${verb} like ${indefiniteArticle} ${randomColor.color} ${randomCat}  in a ${randomRoom} playing ${randomGame}`;
console.error(randomDescription);

$("body").append(`<p>${randomDescription}</p>`);

}


function dataError(request, textStatus, error) {
console.error(error);

}

function getRandomElement(array){
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
