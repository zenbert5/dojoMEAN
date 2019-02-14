'use strict';

const fs = require('fs');

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

// Complete the bigSorting function below.
function bigSorting(unsorted) {
    let lowest, lowIndex, temp;
    for (let numLoops = 0; numLoops < unsorted.length; numLoops++) {
        lowest = unsorted[numLoops];
        lowIndex = numLoops;
        for (let i = numLoops; i < unsorted.length; i++) {
            if (unsorted[i].length < lowest.length) {
                lowest = unsorted[i];
                lowIndex = i;
            } else if (unsorted[i].length == lowest.length && unsorted[i] < lowest) {
                lowest = unsorted[i];
                lowIndex = i;
            }
        }
        temp = unsorted[numLoops];
        unsorted[numLoops] = unsorted[lowIndex];
        unsorted[lowIndex] = temp;
    }
    return unsorted; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        const unsortedItem = readLine();
        unsorted.push(unsortedItem);
    }

    let result = bigSorting(unsorted);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
