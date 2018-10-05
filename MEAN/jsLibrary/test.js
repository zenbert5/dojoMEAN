
const x = [
    { name: 'shawn', color: 'black' },
    { name: 'john', color: 'gray' },
    { name: 'charlie', color: 'green' },
    { name: 'paul', color: 'silver' },
];

const y = [1, 2, 3, 4];
/* for (const [key, val] in x){
    console.log(Object.key[val]);
} */

console.log(typeof (x[0]));
console.log(typeof (y[0]));

// Here we have a function called "Outer"
function Outer() {
    // There is a count variable that is scoped to the function
    var count = 0;
    // There is an inner function that increments count and then console.logs it
    function inner() {
        // increment count
        count++
        // console.log count
        console.log(count);
    }
    // return the inner function! We can return a function!
    return inner
}
// counter is now the function returned from invoking Outer
var counter = Outer();
// if we invoke the counter function
counter()     // this will console.log "1"
counter()     // this will console.log "2"
counter()     // this will console.log "3"
counter()     // this will console.log "4"
// So that means that the count variable still exists! 
// and it is being changed even though we aren't inside of the Outer function!
// What if we try to access count out here?
//console.log(count) // doesn't work!

function ninjaBelt(ninja) {
    return function belt(beltColor) { //note the closure here!
        console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
    }
}
ninjaBelt('Eileen')('black'); //note the double invocation here.
