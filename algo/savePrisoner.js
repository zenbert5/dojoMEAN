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

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    // one treat, the starting prisoner gets it
    if (m === 1) {
        return s;
    }
    // one prisoner, gets all the sweets
    if (n === 1) {
        return 1;
    }
    // if there are less sweets than people -- no traversal
    let target = ((m - 1) % n) + s;
    if (target > n) {
        return target - n;
    } else {
        return target;
    }
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nms = readLine().split(' ');

        const n = parseInt(nms[0], 10);

        const m = parseInt(nms[1], 10);

        const s = parseInt(nms[2], 10);

        let result = saveThePrisoner(n, m, s);

        console.log(result);

/*         ws.write(result + "\n"); */
    }

/*     ws.end(); */
}
