
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

// Complete the findDigits function below.
function findDigits(n) {
    let diviCount = 0;
    let digiArr = n.toString().split('').map(digit => parseInt(digit));
    console.log(digiArr);
    for (let i = 0; i < digiArr.length; i++) {
        if (n % digiArr[i] === 0) {
            diviCount++
        }
    }
    return diviCount;
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = findDigits(n);

        /* ws.write(result + "\n"); */

        console.log(result + "\n");
    }

    /* ws.end(); */
}
