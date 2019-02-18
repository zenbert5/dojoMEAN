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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let energy = 100;

    // hop calculator
    let nextHop = (0 + k) % c.length;

    while (nextHop != 0) {
        // making a hop
        energy--;
        // check if cumulus, if so decrement energy by 2
        if (c[nextHop] === 1) {
            energy -= 2;
        }

        // debug
        // console.log(`current location is ${nextHop} with energy level ${energy}`);

        // edge condition where last cell is odd and hop calc will fail
        if (nextHop + k > c.length) {
            break;
        }
        // plot trajectory on next hop
        nextHop = (nextHop + k) % c.length;
    }

    energy--;
    if (c[0] === 1) {
        energy -= 2;
    }
    return energy;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c, k);

    ws.write(result + "\n");

    ws.end();
}
