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

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let birdCounter = [0, 0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        birdCounter[arr[i] - 1]++;
    }

    return findHighBirdCount();

    function findHighBirdCount() {
        let highBirdCount = birdCounter[0];
        let maxBirdIndex = 0;
        for (let i = 1; i < 5; i++) {
            if (birdCounter[i] > highBirdCount) {
                maxBirdIndex = i;
                highBirdCount = birdCounter[i];
            }
        }
        return maxBirdIndex + 1;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
