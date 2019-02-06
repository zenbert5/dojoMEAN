'use strict';

const fs = require('fs');
const path = require('path');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getTotalX function below.
 */
function getTotalX(a, b) {
    let intCounter = 0;
    for (let i = a[a.length - 1]; i <= b[0]; i++) {
        let factor = true;
        for (let k = 0; k < a.length; k++) {
            if (i % a[k] != 0) {
                factor = false;
                break;
            }
        }
        for (let j = 0; j < b.length; j++) {
            if (b[j] % i != 0) {
                factor = false;
                break;
            }
        }
        if (factor) {
            intCounter++;
        }
    }
    return intCounter;
}

function main() {
    const ws = fs.createWriteStream(path.join(__dirname, 'target.txt'));

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    ws.write(total + "\n");

    ws.end();
}
