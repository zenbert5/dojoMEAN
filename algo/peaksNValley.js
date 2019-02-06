/*
    first input represents number of steps --> array count
    second input represents the actual steps in an array

    objective: find out how many times the hiker enters and leaves the valley
*/

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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let seaLevel = 0;
    let inValley = false;
    let valleyCounter = 0;
    for (let i = 0; i < n; i++) {
        s[i] === 'D' ? seaLevel -= 1 : seaLevel += 1;
        if (inValley === false && seaLevel < 0) {
            // entering valley
            inValley = true;
        }
        if (inValley === true && seaLevel >= 0) {
            // leaving valley - increment counter
            valleyCounter++;
            inValley = false;
        }
    }
    return valleyCounter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
