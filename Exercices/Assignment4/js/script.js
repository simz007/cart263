"use strict";

/********************************************************************

Title of Project
Author Name

This is a template. Fill in the title, author, and this description
to match your project! Write JavaScript to do amazing things below!

*********************************************************************/

$(document).ready(setup);


function setup() {

$.getJSON("assets/data/data.json")
  .done(dataLoaded)
  .fail(dataError)

}


function dataLoaded(data) {
console.log(data);
let randomCondiment = getRandomElement(data.condiments);
console.error(randomCondiment);

let verb = "is";
if (randomCondiment.charAt(randomCondiment.length - 1) === "s"){
verb = "are";
}

console.error(verb);

let randomCat = getRandomElement(data.cats);
console.error(randomCat);

let randomRoom = getRandomElement(data.rooms);
console.error(randomRoom);


let randomDescription = `${randomCondiment} ${verb} like a ${randomCat} in a ${randomRoom}`;
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
