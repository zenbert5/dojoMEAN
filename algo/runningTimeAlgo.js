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

// Complete the runningTime function below.
function runningTime(arr) {
    let arrLen = arr.length;
    if (arrLen === 1) {
        return 0;
    }
    let numShift = 0;
    for (let x = 1; x < arrLen; x++) {
        let originIndex = x;
        let targetIndex = x;
        let currShift = 0;
        for (let y = x; y >= 0; y--) {
            if (arr[y] > arr[originIndex]) {
                targetIndex = y;
                currShift = originIndex - targetIndex;
            }
        }
        // if targeted index moved
        if (originIndex != targetIndex) {
            numShift += currShift;
            // remove value from array
            let valToInsert = arr.splice(originIndex, 1)[0];
            arr.splice(targetIndex, 0, valToInsert);
        }
        // console.log(arr.join(' '));
    }
    return numShift;
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = runningTime(arr);

    console.log(result + '\n');

/*     ws.write(result + "\n");

    ws.end(); */
}
