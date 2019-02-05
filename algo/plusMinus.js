'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let numSize = arr.length;
    let posSize = 0, negSize = 0, zeros = 0;
    for (let i = 0; i < numSize; i++) {
        if (arr[i] > 0) {
            ++posSize;
        } else if (arr[i] < 0) {
            ++negSize;
        } else {
            ++zeros;
        }
    }
    function precise(x) {
        return (x / numSize).toPrecision(6);
    }
    console.log(precise(posSize));
    console.log(precise(negSize));
    console.log(precise(zeros));
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
