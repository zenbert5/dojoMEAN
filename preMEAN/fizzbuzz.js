
// fizzbuzz 

function fizzBuzz(num) {
    var fB = '';
    if (num == 1) {
        return '1.'
    }
    for (x=1; x <= num; x++) {
        if ((x % 3 == 0) && (x % 5 ==0)) {
            fB += 'FizzBuzz';
        } else if (x % 3 == 0) {
            fB += 'Fizz';
        } else if (x % 5 == 0) {
            fB += 'Buzz';
        } else {
            fB += x;
        };
        if (x == (num - 1)) {
            fB += ', and ';
        } else if (x != num) {
            fB += ', ';
        }
    }
    return fB += '.';
}

console.log(fizzBuzz(30));
console.log(fizzBuzz(1));
console.log(fizzBuzz(99));
