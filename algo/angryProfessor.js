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

// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    let arrivedOnTime = 0;

    // v1 and v2 options below
/*     for (let i = 0; i < a.length; i++) {
        console.log(`student ${i} time => ${a[i]}`);
        if (a[i] <= 0) {
            arrivedOnTime++;
        }
    }
    if (arrivedOnTime >= k) {
        return 'NO';
    } else {
        return 'YES';
    } */
    // v2
    a.forEach(element => arrivedOnTime += element <=0 ? 1 : 0);
    return arrivedOnTime >= k ? 'NO' : 'YES';
}

function main() {
/*     const ws = fs.createWriteStream(process.env.OUTPUT_PATH); */

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

        let result = angryProfessor(k, a);

        console.log(result);
    

/*         ws.write(result + "\n"); */
    }

    /* ws.end();  */
}
