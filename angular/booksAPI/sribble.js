
var today = new Date;
var simulateDate = '2018-04-10';

console.log(today);

console.log(typeof(today));
let slicedDate = JSON.stringify(today).slice(1,11);

console.log(slicedDate);

console.log(slicedDate > simulateDate);
console.log(slicedDate < simulateDate);