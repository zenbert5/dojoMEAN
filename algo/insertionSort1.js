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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    if (n === 1) {
        console.log(arr.join(' '));
        return;
    }
    let valToInsert = arr[n - 1];
    let exit = false;
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > valToInsert) {
            arr[i + 1] = arr[i];
        }
        if (valToInsert > arr[i]) {
            arr[i + 1] = valToInsert;
            exit = true;
        }
        console.log(arr.join(' '));
        if (i === 0 && !exit) {
            arr[0] = valToInsert;
            console.log(arr.join(' '));
            exit = true;
        }
        if (exit) {
            return;
        }
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
