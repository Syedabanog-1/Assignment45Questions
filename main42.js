"use strict";
/*/*42.   Great Magicians: Start with a copy of your program from
Exercise 39. Write a function called make_great() that modifies the
 array of magicians by adding the phrase the Great to each magician’s
modified.*/
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
showMagicians(greatMagicianNames);
// call the function to show origional magician's names
console.log("\n\tOrigional Magicians\t\n");
showMagicians(magicianNames);
// call the function to show great magician's names
console.log("\n\tGreat Magicians\t\n");
showMagicians(greatMagicianNames);
