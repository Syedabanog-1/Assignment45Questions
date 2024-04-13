"use strict";
/* /* 41.  Magicians: Make a array of magician’s names. Pass the array
 to a function called show_magicians(), which prints the name of each
  magician in the array.*/
Object.defineProperty(exports, "__esModule", { value: true });
const magicianNames = ['Irfan', 'mansoor', 'rizwan', 'kamran', 'aslam'];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMgicians = magicians.map(magician => `the Great ${magician}`);
    return greatMgicians;
}
// modify the array to add "the great" to each magician's name
const greatMagiciansNames = make_great(magicianNames);
// call the function to show origional magician's names
show_magicians(magicianNames);
show_magicians(greatMagiciansNames);
