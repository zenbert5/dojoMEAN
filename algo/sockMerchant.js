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

// Complete the sockMerchant function below.
// find # of matching pair of socks based on the following constraints -- sock colors can be 1 to 100 and there are up to 100 socks
function sockMerchant(n, ar) {
    let sockItToMe = [];
    let sockPairs = 0;
    for (let i = 0; i < ar.length; i++) {
        if (!sockItToMe[ar[i]]) {
            sockItToMe[ar[i]] = 1;
        } else {
            sockItToMe[ar[i]] ++;
        }
    }

    for (let j = 1; j <= 100; j++) {
        if (sockItToMe[j]) {
            sockPairs += Math.floor(sockItToMe[j] / 2);
        }
    }
    return sockPairs;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
