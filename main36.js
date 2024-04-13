"use strict";
/* 36.  T-Shirt: Write a function called make_shirt() that accepts a
 size and the text of a message that should be printed on the shirt.
 The function should print a sentence summarizing the size of the
 shirt and the message printed on it. Call the function.*/
Object.defineProperty(exports, "__esModule", { value: true });
const make_shirt = (size, message) => {
    console.log(`size: ${size}, message: ${message}`);
};
//call function with size and message vat\riable
let size = 'medium';
let message = "Typescript in VS Code Editor";
make_shirt(size, message);
//directly call the function
make_shirt('large', 'Typescript Online');
