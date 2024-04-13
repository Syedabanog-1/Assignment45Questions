"use strict";
/* 43.  Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’
  names. Because the original array will be unchanged, return the new
  array and store it in a separate array. Call show_magicians() with
  each array to show that you have one array of the original names and
   one array with the Great added to each magician’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
const magicianNames = ['Irfan', 'mansoor', 'rizwan', 'kamran', 'aslam'];
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    const greatMagicians = magicians.map(magician => ` The Great ${magician}`);
    return greatMagicians;
}
// modify array to add "The Great" to each magicians name
const greatMagicianNames = makeGreat(magicianNames);
// call the function to show origional magician's names
console.log("\n\tOrigional Magicians\t\n");
showMagicians(magicianNames);
// call the function to show great magician's names
console.log("\n\tGreat Magicians\t\n");
showMagicians(greatMagicianNames);