
// fib 

function fib() {
    // Some variables here
    var count = 0;
    var fib = 1;
    var prev = 2;
    var prev2 = 1;
    function nacci() {
        // do something to those variables here
        count++;
        if (count==1 || count==2) {
            fib = 1;
        } else if (count==3) {
            fib = 2;
        } else {
            fib = prev + prev2
            prev2 = prev
            prev = fib 
        }
        console.log(fib);
    }
    return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"