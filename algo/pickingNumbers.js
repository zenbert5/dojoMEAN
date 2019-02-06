'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here

    let orderedA = a.sort((a, b) => a - b);
    let container = [];
    let maxCount = 0;
    // fill cells with count
    for (let i = 0; i < orderedA.length; i++) {
        if (!container[orderedA[i]]) {
            container[orderedA[i]] = 1;
        } else {
            container[orderedA[i]]++;
        }
    }

    // evalute highest | <= 1 |
    for (let j = 0; j <= orderedA[orderedA.length - 1]; ++j) {
        if (container[j]) {
            let currentCount = container[j];
            if (container[j + 1]) {
                currentCount += container[j + 1];
            }
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        }
    }
    return maxCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
