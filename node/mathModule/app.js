/*
 *  MEAN node.js - mathlib  
 *  Oct 2, 2018
 *  shawn chen
 */

var math_test = require('./mathlib')();

console.log(math_test.add(5, 11));
console.log(math_test.multiply(8, 8));
console.log(math_test.square(99));
console.log(math_test.random(3, 15));
console.log(math_test.random(1, 100));
console.log(math_test.random(50, 60));
